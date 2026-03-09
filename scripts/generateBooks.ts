import { promises as fs } from "node:fs"
import path from "node:path"
import { books as sourceBooks } from "../data/books"

type AssetGroup = {
  id: "reeve-mcintyre" | "solo-work"
  slugPrefix: string
}

type RankedCandidate = {
  score: number
  src: string
}

const projectRoot = process.cwd()
const publicBooksRoot = path.join(projectRoot, "public", "books")
const outputPath = path.join(projectRoot, "data", "books.ts")
const ignoredPdfPatterns = [/copy/i]
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"])

const assetGroups: AssetGroup[] = [
  { id: "reeve-mcintyre", slugPrefix: "reeve-mcintyre-" },
  { id: "solo-work", slugPrefix: "sarah-mcintyre-" }
]
const minimumFolderMatchScore = 40
const folderSlugOverrides: Record<string, string> = {
  "reeve-mcintyre/legend-of-kevin": "reeve-mcintyre-kevin"
}

function toCanonical(input: string): string {
  return input
    .toLowerCase()
    .replace(/\.[^.]+$/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function toCompact(input: string): string {
  return toCanonical(input).replace(/\s+/g, "")
}

function toTokens(input: string): string[] {
  return toCanonical(input).split(/\s+/).filter(Boolean)
}

function tokenizeSet(input: string): Set<string> {
  return new Set(toTokens(input))
}

function overlapSize(left: Set<string>, right: Set<string>): number {
  let count = 0
  for (const token of left) {
    if (right.has(token)) count += 1
  }
  return count
}

function scoreFolderMatch(folderName: string, slugTail: string): number {
  const folderCanonical = toCanonical(folderName)
  const slugCanonical = toCanonical(slugTail)
  const folderCompact = toCompact(folderName)
  const slugCompact = toCompact(slugTail)

  if (folderCanonical === slugCanonical) return 1_000
  if (folderCompact === slugCompact) return 900

  const folderTokens = tokenizeSet(folderName)
  const slugTokens = tokenizeSet(slugTail)
  const overlap = overlapSize(folderTokens, slugTokens)
  const containsScore = (
    slugCanonical.includes(folderCanonical)
    || folderCanonical.includes(slugCanonical)
    || slugCompact.includes(folderCompact)
    || folderCompact.includes(slugCompact)
  ) ? 5 : 0

  return overlap * 20 + containsScore
}

function scoreImageMatch(pdfBaseName: string, imageBaseName: string): number {
  const pdfTokens = tokenizeSet(pdfBaseName)
  const imageTokens = tokenizeSet(imageBaseName)
  const overlap = overlapSize(pdfTokens, imageTokens)

  let score = overlap * 20

  if (imageBaseName.match(/button|thumb/i)) score += 12
  if (imageBaseName.match(/activity/i)) score += 8
  if (imageBaseName.match(/cover/i)) score -= 4

  return score
}

function scoreTileImage(imageBaseName: string): number {
  const name = imageBaseName.toLowerCase()

  let score = 0
  if (name.includes("tile")) score += 50
  if (name.includes("bkgd")) score += 30
  if (name.includes("background")) score += 25
  if (name.includes("pattern")) score += 20
  if (name.includes("wallpaper")) score += 10
  if (name.includes("cover")) score -= 10

  return score
}

function toPublicUrl(absoluteFilePath: string): string {
  const relative = path.relative(path.join(projectRoot, "public"), absoluteFilePath)
  return `/${relative.split(path.sep).join("/")}`
}

function toPrettyTitle(fileNameWithoutExt: string): string {
  const cleaned = fileNameWithoutExt
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([0-9])([a-zA-Z])/g, "$1 $2")
    .replace(/([a-zA-Z])([0-9])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\bpdf\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()

  if (!cleaned) return "Activity sheet"

  return cleaned
    .split(" ")
    .map((word) => {
      if (/^[A-Z0-9]+$/.test(word)) return word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(" ")
}

function sortByName<T extends { fileName: string }>(items: T[]): T[] {
  return [...items].sort((left, right) => left.fileName.localeCompare(right.fileName))
}

async function listFilesRecursive(rootPath: string): Promise<string[]> {
  const entries = await fs.readdir(rootPath, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const absolutePath = path.join(rootPath, entry.name)
    if (entry.isDirectory()) {
      return listFilesRecursive(absolutePath)
    }
    return [absolutePath]
  }))

  return files.flat()
}

async function readGroupFolder(folderPath: string) {
  const allFiles = await listFilesRecursive(folderPath)
  const files = allFiles.map((filePath) => {
    const fileName = path.basename(filePath)
    const extension = path.extname(fileName).toLowerCase()
    return { filePath, fileName, extension, baseName: fileName.slice(0, Math.max(0, fileName.length - extension.length)) }
  })

  const pdfFiles = sortByName(files.filter(file => file.extension === ".pdf" && !ignoredPdfPatterns.some(pattern => pattern.test(file.fileName))))
  const images = files.filter(file => imageExtensions.has(file.extension))

  return { pdfFiles, images }
}

function findBookMatchForFolder(folderName: string, group: AssetGroup): { index: number, score: number } {
  let bestIndex = -1
  let bestScore = 0

  sourceBooks.forEach((book, index) => {
    if (!book.slug.startsWith(group.slugPrefix)) return
    const slugTail = book.slug.slice(group.slugPrefix.length)
    const score = scoreFolderMatch(folderName, slugTail)
    if (score > bestScore) {
      bestScore = score
      bestIndex = index
    }
  })

  return { index: bestIndex, score: bestScore }
}

async function generate() {
  const books = sourceBooks.map(book => ({ ...book }))
  const unmatchedFolders: string[] = []
  const assignedBookIndexes = new Set<number>()
  let updatedBooksCount = 0

  for (const group of assetGroups) {
    const groupPath = path.join(publicBooksRoot, group.id)
    const entries = await fs.readdir(groupPath, { withFileTypes: true })
    const folders = entries.filter(entry => entry.isDirectory()).map(entry => entry.name).sort((a, b) => a.localeCompare(b))

    for (const folderName of folders) {
      const folderPath = path.join(groupPath, folderName)
      const folderKey = `${group.id}/${folderName}`
      const overriddenSlug = folderSlugOverrides[folderKey]
      const matched = overriddenSlug
        ? { index: books.findIndex(book => book.slug === overriddenSlug), score: 10_000 }
        : findBookMatchForFolder(folderName, group)
      const bookIndex = matched.index
      const matchScore = matched.score

      if (bookIndex < 0 || matchScore < minimumFolderMatchScore) {
        unmatchedFolders.push(`${group.id}/${folderName}`)
        continue
      }
      if (assignedBookIndexes.has(bookIndex)) {
        unmatchedFolders.push(`${group.id}/${folderName}`)
        continue
      }

      const book = books[bookIndex]
      const { pdfFiles, images } = await readGroupFolder(folderPath)
      if (!pdfFiles.length) continue

      const backgroundTileCandidate = images
        .map((image) => ({
          src: toPublicUrl(image.filePath),
          score: scoreTileImage(image.baseName)
        }))
        .sort((left, right) => right.score - left.score)[0]

      const activitySheets = pdfFiles.map((pdf) => {
        const rankedImages: RankedCandidate[] = images.map((image) => ({
          src: toPublicUrl(image.filePath),
          score: scoreImageMatch(pdf.baseName, image.baseName)
        }))
        const bestImage = rankedImages.sort((left, right) => right.score - left.score)[0]
        const thumbSrc = bestImage?.src || book.cover.src

        return {
          thumb: {
            src: thumbSrc,
            alt: `${book.title} activity sheet`
          },
          pdfUrl: toPublicUrl(pdf.filePath),
          title: toPrettyTitle(pdf.baseName)
        }
      })

      books[bookIndex] = {
        ...book,
        ...(backgroundTileCandidate?.score > 0 ? { backgroundTileUrl: backgroundTileCandidate.src } : {}),
        activitySheets,
        activitySheetsLayout: activitySheets.length >= 4 ? 4 : 2
      }
      assignedBookIndexes.add(bookIndex)
      updatedBooksCount += 1
    }
  }

  const output = [
    "import type { Book } from \"~~/types/content\"",
    "",
    "export const books: Book[] = ",
    `${JSON.stringify(books, null, 2)}`,
    ""
  ].join("\n")

  await fs.writeFile(outputPath, output, "utf8")

  console.log(`Updated ${updatedBooksCount} books in ${path.relative(projectRoot, outputPath)}`)
  if (unmatchedFolders.length) {
    console.log(`Unmatched folders (${unmatchedFolders.length}):`)
    unmatchedFolders.forEach(folder => console.log(`- ${folder}`))
  }
}

generate().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
