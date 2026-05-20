<script setup lang="ts">
import type { BlogPostSummary } from '~/composables/useBlogPosts'
import { FEATURED_IMAGE_PROJECTION } from '~/composables/useBlogPosts'

const { $sanity } = useNuxtApp()

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
      ${FEATURED_IMAGE_PROJECTION}
    }
  `, { tag })
)

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
          <NuxtLink to="/blog" class="px-3 pt-2 pb-1 font-heading text-lg rounded-full disabled:opacity-30 hover:bg-jw_red hover:text-jw_blue transition-colors hover:no-underline">
            ← Back to Blog Index
          </NuxtLink>
          <h1 class="mt-2 font-heading text-4xl">
            Tag: <span class="text-jw_grey">{{ tag }}</span>
          </h1>
        </div>
      </div>

      <BlogPostGrid :posts="posts ?? []" empty-message="No posts found for this tag." />
    </section>
  </div>
</template>
