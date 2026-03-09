import { promises as fs } from "node:fs"
import path from "node:path"

type RawComic = {
  slug: string
  title: string
  text?: string
  images?: string[]
}

const projectRoot = process.cwd()
const sourcePath = path.join(projectRoot, "data", "comics.json")
const outputPath = path.join(projectRoot, "data", "comics.ts")
const placeholderAlt = "Comic panel"

const thumbnailScore = (imagePath: string) => {
  const fileName = imagePath.split("/").pop()?.toLowerCase() || ""

  if (fileName.startsWith("thumb") || fileName.includes("thumb")) {
    return 0
  }

  if (fileName.includes("cover")) {
    return 1
  }

  if (fileName.includes("banner")) {
    return 2
  }

  if (fileName.includes("header")) {
    return 3
  }

  return 10
}

const generate = async () => {
  const source = await fs.readFile(sourcePath, "utf8")
  const rawComics = JSON.parse(source) as RawComic[]
  const comics = rawComics.map((comic) => {
    const images = comic.images ?? []
    const sortedByThumbnail = [...images].sort((left, right) => {
      const scoreDiff = thumbnailScore(left) - thumbnailScore(right)
      return scoreDiff === 0 ? left.localeCompare(right) : scoreDiff
    })
    const thumbnailSrc = sortedByThumbnail[0] ?? images[0] ?? ""
    const panelImageSources = images.filter((src) => src !== thumbnailSrc)
    const panels = (panelImageSources.length > 0 ? panelImageSources : [thumbnailSrc])
      .filter(Boolean)
      .map((src) => ({
        src,
        alt: placeholderAlt
      }))

    return {
      _type: "comic",
      slug: comic.slug,
      title: comic.title,
      thumbnail: {
        src: thumbnailSrc || "/comics/placeholder.svg",
        alt: placeholderAlt
      },
      blurb: comic.text || "",
      ctaLabel: "Read comic",
      panels
    }
  })

  const fileContents = [
    "import type { Comic } from \"~~/types/content\"",
    "",
    "export const comics: Comic[] = ",
    `${JSON.stringify(comics, null, 2)}`,
    ""
  ].join("\n")

  await fs.writeFile(outputPath, fileContents, "utf8")
  console.log(`Generated ${comics.length} comics in ${path.relative(projectRoot, outputPath)}`)
}

generate().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
