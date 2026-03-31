const context = process.env.CONTEXT // Netlify sets this: production / deploy-preview / branch-deploy
const isPreview = !!context && context !== "production"

// Prefer env var in production. Fallback makes local dev sane.
// Replace the fallback with your real domain when you have it.
const siteUrl = process.env.NUXT_SITE_URL || "http://localhost:3000"

// TODO: replace with routes derived from Sanity query at build time
const internalBookPageRoutes = [
    "/books/reeve-mcintyre-cakes-space",
    "/books/sarah-mcintyre-dinosaur-firefighters",
    "/books/sarah-mcintyre-dinosaur-police",
    "/books/sarah-mcintyre-grumpycorn",
    "/books/sarah-mcintyre-dont-call-me-grumpycorn",
    "/books/reeve-mcintyre-jinks-o-hare",
    "/books/reeve-mcintyre-legend-of-kevin",
    "/books/reeve-mcintyre-kevin-biscuit-bandit",
    "/books/reeve-mcintyre-kevin-great-escape",
    "/books/reeve-mcintyre-kevin-vs-unicorns",
    "/books/mcintyre-morris-mankiest-monster",
    "/books/sarah-mcintyre-new-neighbours",
    "/books/reeve-mcintyre-pug-a-doodle-do",
    "/books/mcintyre-macdonald-prince-of-pants",
    "/books/mcintyre-rogerson-you-cant-eat-a-princess",
    "/books/mcintyre-rogerson-you-cant-scare-a-princess",
    "/books/reeve-mcintyre-pugs-frozen-north",
    "/books/reeve-mcintyre-oliver-seawigs",
    "/books/sarah-mcintyre-shark-in-the-bath",
    "/books/mcintyre-freedman-superkid",
    "/books/reeve-mcintyre-thatch-the-moon",
    "/books/mcintyre-when-titus-took-the-train",
    "/books/sarah-mcintyre-vern-lettuce",
]

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    runtimeConfig: { 
        public: { 
            sanityProjectId: process.NUXT_PUBLIC_SANITY_PROJECT_ID
        } 
    },

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
