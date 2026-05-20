<script setup lang="ts">
import type { BlogPostSummary } from '~/composables/useBlogPosts'
import { FEATURED_IMAGE_PROJECTION } from '~/composables/useBlogPosts'

const { $sanity } = useNuxtApp()

const route = useRoute()
const year = String(route.params.year)
const yearStart = `${year}-01-01`
const yearEnd = `${Number(year) + 1}-01-01`

const { data: posts } = await useAsyncData<BlogPostSummary[]>(`blog-year-${year}`, () =>
  $sanity.fetch<BlogPostSummary[]>(`
    *[_type == "blogPost" && publishedAt >= $yearStart && publishedAt < $yearEnd] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      publishedAt,
      excerpt,
      tags,
      ${FEATURED_IMAGE_PROJECTION}
    }
  `, { yearStart, yearEnd })
)

useSeoMeta({
  title: () => `Blog - ${year}`,
  description: () => `Blog posts from ${year} on the Jabberworks blog.`,
})
</script>

<template>
  <div class="container">
    <section class="content">
      <div class="flex items-center gap-6 border-b border-black py-8">
        <div>
          <NuxtLink to="/blog" class="font-heading text-lg hover:underline">← Back to Blog Index</NuxtLink>
          <h1 class="mt-2 font-heading text-4xl">
            Year: <span class="text-jw_grey">{{ year }}</span>
          </h1>
        </div>
      </div>

      <BlogPostGrid :posts="posts ?? []" empty-message="No posts found for this year." />
    </section>
  </div>
</template>
