<script setup lang="ts">
import type { BlogPostSummary } from '~/composables/useBlogPosts'
import { FEATURED_IMAGE_PROJECTION } from '~/composables/useBlogPosts'

const { $sanity } = useNuxtApp()
const { featuredImageUrl, featuredImageAlt, formatDate } = useBlogPosts()

const { data: posts } = await useAsyncData<BlogPostSummary[]>('blog-index', () =>
  $sanity.fetch<BlogPostSummary[]>(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      publishedAt,
      excerpt,
      tags,
      ${FEATURED_IMAGE_PROJECTION}
    }
  `)
)

const PAGE_SIZE = 12
const currentPage = ref(1)

const availableYears = computed(() =>
  [...new Set((posts.value ?? []).map(p => new Date(p.publishedAt).getFullYear()))]
    .sort((a, b) => b - a)
)

const availableTags = computed(() =>
  [...new Set((posts.value ?? []).flatMap(p => p.tags ?? []))]
    .sort((a, b) => a.localeCompare(b))
)

const heroPost = computed(() => posts.value?.[0] ?? null)

const heroExcerpt = computed(() => {
  const text = (heroPost.value?.excerpt ?? '').trim()
  const words = text.split(/\s+/).filter(Boolean)
  if (words.length <= 50) return text
  return words.slice(0, 50).join(' ') + '…'
})

const gridPosts = computed(() => posts.value?.slice(1) ?? [])

const totalPages = computed(() => Math.ceil(gridPosts.value.length / PAGE_SIZE))

const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return gridPosts.value.slice(start, start + PAGE_SIZE)
})

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
        <details class="relative bg-jw_blue col-span-2 sm:col-span-1">
          <summary class="flex cursor-pointer select-none list-none items-center justify-between px-3 py-2 font-heading [&::-webkit-details-marker]:hidden">
            Year
            <svg class="size-5 shrink-0 text-jw_red transition-transform [[open]_&]:rotate-180" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M4 12l12 10 12-10"/>
            </svg>
          </summary>
          <div class="flex flex-wrap gap-2.5 border border-t-0 bg-jw_blue p-3 shadow-md sm:absolute sm:left-0 sm:right-0 sm:top-full sm:z-10">
            <NuxtLink
              to="/blog"
              class="cursor-pointer rounded-full px-3 py-2 bg-white text-black hover:bg-jw_red hover:text-white transition-colors"
            >
              All years
            </NuxtLink>
            <NuxtLink
              v-for="year in availableYears"
              :key="year"
              :to="`/blog/years/${year}`"
              class="cursor-pointer rounded-full px-3 py-2 bg-white text-black hover:bg-jw_red hover:text-white transition-colors"
            >
              {{ year }}
            </NuxtLink>
          </div>
        </details>

        <details v-if="availableTags.length" class="relative bg-jw_blue col-span-2 sm:col-span-1">
          <summary class="flex cursor-pointer select-none list-none items-center justify-between px-3 py-2 font-heading [&::-webkit-details-marker]:hidden">
            Tags
            <svg class="size-5 shrink-0 text-jw_red transition-transform [[open]_&]:rotate-180" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M4 12l12 10 12-10"/>
            </svg>
          </summary>
          <div class="flex flex-wrap gap-2.5 border border-t-0 bg-jw_blue p-3 shadow-md sm:absolute sm:left-0 sm:right-0 sm:top-full sm:z-10">
            <NuxtLink
              to="/blog"
              class="cursor-pointer rounded-full px-3 py-2 bg-white text-black hover:bg-jw_red hover:text-white transition-colors"
            >
              All tags
            </NuxtLink>
            <NuxtLink
              v-for="tag in availableTags"
              :key="tag"
              :to="`/blog/tags/${tag}`"
              class="cursor-pointer rounded-full px-3 py-2 bg-white text-black hover:bg-jw_red hover:text-white transition-colors"
            >
              {{ tag }}
            </NuxtLink>
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

      <BlogPostGrid :posts="pagedPosts" />

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
