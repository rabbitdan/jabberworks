const context = process.env.CONTEXT // Netlify sets this: production / deploy-preview / branch-deploy
const isPreview = !!context && context !== "production"

// Prefer env var in production. Fallback makes local dev sane.
// Replace the fallback with your real domain when you have it.
const siteUrl = process.env.NUXT_SITE_URL || "http://localhost:3000"

const sanityProjectId = process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || "es2dovdw"
const sanityApiBase = `https://${sanityProjectId}.api.sanity.io/v2024-01-01/data/query/production`

async function fetchSanityRoutes() {
    const bookQuery = encodeURIComponent(`*[_type == "book" && defined(slug) && !defined(pageLink)].slug.current`)
    const editorialQuery = encodeURIComponent(`*[_type == "editorialPage" && defined(slug)].slug.current`)

    const [booksRes, editorialRes] = await Promise.all([
        fetch(`${sanityApiBase}?query=${bookQuery}`),
        fetch(`${sanityApiBase}?query=${editorialQuery}`),
    ])

    const { result: bookSlugs } = await booksRes.json() as { result: string[] }
    const { result: editorialSlugs } = await editorialRes.json() as { result: string[] }

    return {
        bookRoutes: bookSlugs.map(slug => `/books/${slug}`),
        editorialRoutes: editorialSlugs.map(slug => `/${slug}`),
    }
}

const { bookRoutes, editorialRoutes } = await fetchSanityRoutes()

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            sanityProjectId,
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
            routes: ["/", "/comics", ...editorialRoutes, ...bookRoutes],
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
        urls: ["/comics", ...editorialRoutes, ...bookRoutes],
    },
})
