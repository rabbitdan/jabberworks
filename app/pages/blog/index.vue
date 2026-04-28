<script setup lang="ts">
import { computed, ref } from 'vue'

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
  bodyText?: string
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

const { data: posts } = await useAsyncData<BlogPostSummary[]>('blog-index', () =>
  $sanity.fetch<BlogPostSummary[]>(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      publishedAt,
      excerpt,
      "bodyText": pt::text(body),
      tags,
      "featuredImage": select(
        defined(featuredImage._type) => featuredImage { _type, alt, url, asset, hotspot, crop },
        featuredImage[0] { _type, alt, url, asset, hotspot, crop }
      )
    }
  `)
)

const PAGE_SIZE = 12
const currentPage = ref(1)

const selectedYear = ref<number | null>(null)
const tagFilter = ref('all')
const yearDetails = ref<HTMLDetailsElement | null>(null)
const tagDetails = ref<HTMLDetailsElement | null>(null)

const availableYears = computed(() =>
  [...new Set((posts.value ?? []).map(p => new Date(p.publishedAt).getFullYear()))]
    .sort((a, b) => b - a)
)

const availableTags = computed(() =>
  [...new Set((posts.value ?? []).flatMap(p => p.tags ?? []))]
    .sort((a, b) => a.localeCompare(b))
)

const tagQuickFilters = computed(() => ['all', ...availableTags.value])

function setYear(year: number | null) {
  selectedYear.value = year
  currentPage.value = 1
  if (yearDetails.value) yearDetails.value.open = false
}

function setTagFilter(tag: string) {
  tagFilter.value = tag
  currentPage.value = 1
  if (tagDetails.value) tagDetails.value.open = false
}

const isFiltered = computed(() => tagFilter.value !== 'all' || selectedYear.value !== null)

const heroPost = computed(() => isFiltered.value ? null : (posts.value?.[0] ?? null))

const heroExcerpt = computed(() => {
  const text = (heroPost.value?.excerpt || heroPost.value?.bodyText || '').trim()
  const words = text.split(/\s+/).filter(Boolean)
  if (words.length <= 50) return text
  return words.slice(0, 50).join(' ') + '…'
})

const filteredByTime = computed(() => {
  const all = isFiltered.value ? (posts.value ?? []) : (posts.value ?? []).slice(1)
  if (selectedYear.value === null) return all
  return all.filter(p => new Date(p.publishedAt).getFullYear() === selectedYear.value)
})

const filteredPosts = computed(() => {
  if (tagFilter.value === 'all') return filteredByTime.value
  return filteredByTime.value.filter(p => p.tags?.includes(tagFilter.value))
})

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / PAGE_SIZE))

const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredPosts.value.slice(start, start + PAGE_SIZE)
})

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
  title: 'Blog',
  description: 'Read the latest posts from the Jabberworks blog.',
})
</script>

<template>
  <div class="container">
    <section class="content">
      <div class="flex items-center gap-6 border-b border-black py-8">
        <h1 class="font-heading text-4xl">Blog</h1>
      </div>

      <div class="relative mt-4 grid grid-cols-2 gap-3">
        <details ref="yearDetails" class="relative bg-jw_blue col-span-2 sm:col-span-1">
          <summary class="flex cursor-pointer select-none list-none items-center justify-between px-3 py-2 font-heading [&::-webkit-details-marker]:hidden">
            Year
            <svg class="size-5 shrink-0 text-jw_red transition-transform [[open]_&]:rotate-180" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M4 12l12 10 12-10"/>
            </svg>
          </summary>
          <div class="flex flex-wrap gap-2.5 border border-t-0 bg-jw_blue p-3 shadow-md sm:absolute sm:left-0 sm:right-0 sm:top-full sm:z-10">
            <button
              type="button"
              class="cursor-pointer rounded-full px-3 py-2"
              :class="selectedYear === null ? 'bg-jw_red border-jw_red text-white' : 'bg-white text-black'"
              @click="setYear(null)"
            >
              All years
            </button>
            <button
              v-for="year in availableYears"
              :key="year"
              type="button"
              class="cursor-pointer rounded-full px-3 py-2"
              :class="selectedYear === year ? 'bg-jw_red border-jw_red text-white' : 'bg-white text-black'"
              @click="setYear(year)"
            >
              {{ year }}
            </button>
          </div>
        </details>

        <details v-if="availableTags.length" ref="tagDetails" class="relative bg-jw_blue col-span-2 sm:col-span-1">
          <summary class="flex cursor-pointer select-none list-none items-center justify-between px-3 py-2 font-heading [&::-webkit-details-marker]:hidden">
            Tags
            <svg class="size-5 shrink-0 text-jw_red transition-transform [[open]_&]:rotate-180" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M4 12l12 10 12-10"/>
            </svg>
          </summary>
          <div class="flex flex-wrap gap-2.5 border border-t-0 bg-jw_blue p-3 shadow-md sm:absolute sm:left-0 sm:right-0 sm:top-full sm:z-10">
            <button
              v-for="tag in tagQuickFilters"
              :key="tag"
              type="button"
              class="cursor-pointer rounded-full px-3 py-2"
              :class="tagFilter === tag ? 'bg-jw_red border-jw_red text-white' : 'bg-white text-black'"
              @click="setTagFilter(tag)"
            >
              {{ tag === 'all' ? 'All tags' : tag }}
            </button>
          </div>
        </details>
      </div>

      <NuxtLink
        v-if="heroPost"
        :to="`/blog/${heroPost.slug}`"
        class="group mt-8 block"
      >
        <div class="relative flex w-full justify-end overflow-hidden" style="height: 28rem;">
          <img
            v-if="featuredImageUrl(heroPost.featuredImage, 1200)"
            :src="featuredImageUrl(heroPost.featuredImage, 1200)!"
            :alt="featuredImageAlt(heroPost.featuredImage, heroPost.title)"
            class="h-full w-auto transition-transform duration-300 group-hover:-translate-y-4"
          />
          <div class="absolute bottom-3 left-3 right-3 bg-jw_red px-8 py-5 group-hover:bg-jw_blue">
            <h2 class="font-heading text-3xl leading-snug text-jw_blue group-hover:text-jw_red">
              {{ heroPost.title }}
            </h2>
            <p class="mt-0.5 font-body text-sm uppercase tracking-wide text-white group-hover:text-jw_red">
              {{ formatDate(heroPost.publishedAt) }}
            </p>
            <p v-if="heroExcerpt" class="mt-2 font-body text-white group-hover:text-jw_red">
              {{ heroExcerpt }}
            </p>
          </div>
        </div>
      </NuxtLink>

      <div
        v-if="pagedPosts.length"
        class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-8"
      >
        <NuxtLink
          v-for="post in pagedPosts"
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
        No posts match these filters.
      </p>

      <div
        v-if="totalPages > 1"
        class="mt-10 flex items-center justify-between border-t border-black pt-6"
      >
        <button
          type="button"
          :disabled="currentPage === 1"
          class="font-heading text-lg disabled:opacity-30"
          :class="currentPage > 1 ? 'hover:underline' : ''"
          @click="currentPage--"
        >
          ← Previous
        </button>

        <span class="font-body text-sm text-jw_grey">
          Page {{ currentPage }} of {{ totalPages }}
        </span>

        <button
          type="button"
          :disabled="currentPage === totalPages"
          class="font-heading text-lg disabled:opacity-30"
          :class="currentPage < totalPages ? 'hover:underline' : ''"
          @click="currentPage++"
        >
          Next →
        </button>
      </div>
    </section>
  </div>
</template>
