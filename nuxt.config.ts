import { books } from "./data/books"

const context = process.env.CONTEXT // Netlify sets this: production / deploy-preview / branch-deploy
const isPreview = !!context && context !== "production"

// Prefer env var in production. Fallback makes local dev sane.
// Replace the fallback with your real domain when you have it.
const siteUrl = process.env.NUXT_SITE_URL || "http://localhost:3000"
const internalBookPageRoutes = books
    .map(book => book.pageLink?.url || `/books/${book.slug}`)
    .filter(url => url.startsWith("/"))

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },

    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/robots",
        "@nuxtjs/sitemap",
        "@nuxt/image",
    ],

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
