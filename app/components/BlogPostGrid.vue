<script setup lang="ts">
import type { BlogPostSummary } from '~/composables/useBlogPosts'

withDefaults(defineProps<{
  posts: BlogPostSummary[]
  emptyMessage?: string
}>(), {
  emptyMessage: 'No posts found.',
})

const { featuredImageUrl, featuredImageAlt, formatDate } = useBlogPosts()
</script>

<template>
  <div
    v-if="posts.length"
    class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-8"
  >
    <NuxtLink
      v-for="post in posts"
      :key="post.slug"
      :to="`/blog/${post.slug}`"
      class="group block"
    >
      <div class="relative flex justify-start w-full h-72">
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
    {{ emptyMessage }}
  </p>
</template>
