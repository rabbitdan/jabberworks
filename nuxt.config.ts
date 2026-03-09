// nuxt.config.ts
import { promises as fs } from "node:fs"
import path from "node:path"
import { books } from "./data/books"

const context = process.env.CONTEXT // Netlify sets this: production / deploy-preview / branch-deploy
const isPreview = !!context && context !== "production"

// Prefer env var in production. Fallback makes local dev sane.
// Replace the fallback with your real domain when you have it.
const siteUrl = process.env.NUXT_SITE_URL || "http://localhost:3000"
const internalBookPageRoutes = books
    .map(book => book.pageLink?.url || `/books/${book.slug}`)
    .filter(url => url.startsWith("/"))

type RawComic = {
    slug: string
    title: string
    text?: string
    images?: string[]
}

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

const generateComicsModule = async () => {
    const projectRoot = process.cwd()
    const sourcePath = path.join(projectRoot, "data", "comics.json")
    const outputPath = path.join(projectRoot, "data", "comics.ts")
    const placeholderAlt = "Comic panel"

    const source = await fs.readFile(sourcePath, "utf8")
    const rawComics = JSON.parse(source) as RawComic[]
    const comics = rawComics.map((comic) => {
        const images = comic.images ?? []
        const sortedByThumbnail = [...images].sort((left, right) => {
            const scoreDiff = thumbnailScore(left) - thumbnailScore(right)
            return scoreDiff === 0 ? left.localeCompare(right) : scoreDiff
        })
        const thumbnailSrc = sortedByThumbnail[0] ?? images[0] ?? ""
        const panelImageSources = images.filter(src => src !== thumbnailSrc)
        const normalizedPanels = (panelImageSources.length > 0 ? panelImageSources : [thumbnailSrc])
            .filter(Boolean)
            .map(src => ({
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
            panels: normalizedPanels
        }
    })

    const generated = [
        "import type { Comic } from \"~~/types/content\"",
        "",
        "export const comics: Comic[] = ",
        `${JSON.stringify(comics, null, 2)}`,
        ""
    ].join("\n")

    await fs.writeFile(outputPath, generated, "utf8")
}

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },

    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/robots",
        "@nuxtjs/sitemap",
        "@nuxt/image",
    ],

    hooks: {
        "build:before": async () => {
            if (process.env.npm_lifecycle_event === "dev") {
                return
            }
            await generateComicsModule()
        },
    },

    css: [
        "~~/assets/css/main.css",
        "@splidejs/splide/dist/css/splide.min.css"
    ],


    site: {
        url: siteUrl,
    },

    nitro: {
        prerender: {
            routes: ["/", "/comics", ...internalBookPageRoutes],
        },
    },

    robots: isPreview
        ? {
            rules: [{ userAgent: "*", disallow: "/" }],
        }
        : {
            rules: [{ userAgent: "*", allow: "/" }],
        },

    sitemap: {
        urls: ["/comics", ...internalBookPageRoutes],
    },
})
