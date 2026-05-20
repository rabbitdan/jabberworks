<script setup lang="ts">
const { $sanity } = useNuxtApp()
const { urlFor } = useSanityImage()

interface SanityImageRef {
  _type: 'image'
  asset: { _ref: string; _type: string }
  hotspot?: { x: number; y: number }
  crop?: object
  alt?: string
}

interface R2ImageRef {
  _type: 'r2Image'
  url: string
  alt?: string
}

interface BlogPostSummary {
  slug: string
  title: string
  publishedAt: string
  excerpt?: string
  tags?: string[]
  featuredImage?: SanityImageRef | R2ImageRef
}

function featuredImageUrl(image: BlogPostSummary['featuredImage'], width = 800): string | null {
  if (!image) return null
  if (image._type === 'r2Image') return image.url
  if (image._type === 'image' && image.asset) return urlFor(image).width(width).auto('format').url()
  return null
}

function featuredImageAlt(image: BlogPostSummary['featuredImage'], fallback: string): string {
  return image?.alt ?? fallback
}

const route = useRoute()
const tag = String(route.params.tag)

const { data: posts } = await useAsyncData<BlogPostSummary[]>(`blog-tag-${tag}`, () =>
  $sanity.fetch<BlogPostSummary[]>(`
    *[_type == "blogPost" && $tag in tags] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      publishedAt,
      excerpt,
      tags,
      "featuredImage": select(
        defined(featuredImage._type) => featuredImage { _type, alt, url, asset, hotspot, crop },
        featuredImage[0] { _type, alt, url, asset, hotspot, crop }
      )
    }
  `, { tag })
)

function formatDate(isoString: string): string {
  const date = new Date(isoString)
  const month = date.toLocaleString('en-US', { month: 'short' })
  const day = date.getDate()
  const year = date.getFullYear()
  const ordinal = (day % 100 > 10 && day % 100 < 14) ? 'th' : (['th', 'st', 'nd', 'rd'][day % 10] ?? 'th')
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  return `${month}. ${day}${ordinal}, ${year} at ${time}`
}

useSeoMeta({
  title: () => `Posts tagged "${tag}"`,
  description: () => `Blog posts tagged with "${tag}" on the Jabberworks blog.`,
})
</script>

<template>
  <div class="container">
    <section class="content">
      <div class="flex items-center gap-6 border-b border-black py-8">
        <div>
          <NuxtLink to="/blog" class="font-heading text-lg hover:underline">← Back to Blog Index</NuxtLink>
          <h1 class="mt-2 font-heading text-4xl">
            Tag: <span class="text-jw_light_grey">{{ tag }}</span>
          </h1>
        </div>
      </div>

      <div
        v-if="posts?.length"
        class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-8"
      >
        <NuxtLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group block"
        >
          <div class="relative flex justify-end w-full h-72">
            <img
              v-if="featuredImageUrl(post.featuredImage)"
              :src="featuredImageUrl(post.featuredImage)!"
              :alt="featuredImageAlt(post.featuredImage, post.title)"
              class="inset-0 h-full w-auto group-hover:-translate-y-4 transition-transform duration-300"
            />

            <div class="absolute bottom-3 left-3 right-3 bg-jw_red group-hover:bg-jw_blue px-5 py-3">
              <h2 class="font-heading text-xl leading-snug text-jw_blue group-hover:text-jw_red">
                {{ post.title }}
              </h2>
              <p class="mt-0.5 font-body text-sm uppercase tracking-wide text-white group-hover:text-jw_red">
                {{ formatDate(post.publishedAt) }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <p v-else class="mt-8 border border-dashed border-slate-900/15 bg-white/70 px-6 py-5 text-gray-800/80">
        No posts found for this tag.
      </p>
    </section>
  </div>
</template>
