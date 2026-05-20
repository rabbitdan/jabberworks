<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import type { BlogPost } from '~~/types/content'
import PortableTextImage from '~/components/PortableTextImage.vue'

const portableTextComponents = {
  types: {
    image: PortableTextImage,
  },
}

const { $sanity } = useNuxtApp()

const route = useRoute()
const slug = String(route.params.slug)

const { data: post } = await useAsyncData<BlogPost | null>(
  `blog-post-${slug}`,
  () => $sanity.fetch<BlogPost | null>(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _type,
      "slug": slug.current,
      title,
      publishedAt,
      excerpt,
      "featuredImage": featuredImage { url, alt },
      tags,
      bodyHtml,
      body
    }
  `, { slug })
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

function formatPostDate(isoString: string): string {
  const date = new Date(isoString)
  const month = date.toLocaleString('en-US', { month: 'short' })
  const day = date.getDate()
  const year = date.getFullYear()
  const ordinal = (day % 100 > 10 && day % 100 < 14) ? 'th' : (['th', 'st', 'nd', 'rd'][day % 10] ?? 'th')
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  return `${month}. ${day}${ordinal}, ${year} at ${time}`
}

useSeoMeta({
  title: () => post.value?.title ?? 'Blog Post',
  description: () => post.value?.excerpt,
  ogTitle: () => post.value?.title ?? 'Blog Post',
  ogDescription: () => post.value?.excerpt,
  ogImage: () => post.value?.featuredImage?.url ?? '',
})
</script>

<template>
  <main class="container px-6 py-8 md:py-12">
    <div class="mx-auto max-w-3xl">

      <NuxtLink to="/blog" class="font-heading text-lg hover:underline">
        ← Back to Blog Index
      </NuxtLink>

      <hr class="my-4 border-black" />

      <article>
        <header class="mb-6">
          <p class="font-body text-sm uppercase tracking-wide text-jw_grey">
            {{ formatPostDate(post!.publishedAt) }}
          </p>
          <h1 class="mt-2 font-heading text-4xl font-normal">{{ post!.title }}</h1>
        </header>

        <hr class="mb-8 border-black" />

        <div
          v-if="post!.bodyHtml"
          class="blog-body font-body text-xl leading-relaxed"
          v-html="post!.bodyHtml.replace(/\\r\\n/g, '\n').replace(/\\r/g, '')"
        />
        <div v-else-if="post!.body" class="blog-body font-body text-xl leading-relaxed">
          <PortableText :value="(post!.body as any)" :components="portableTextComponents" />
        </div>
      </article>

      <div v-if="post!.tags?.length" class="mt-12 -mx-6 bg-jw_blue px-6 py-5">
        <div class="flex flex-wrap items-center gap-3">
          <span class="font-heading text-xl font-bold">Tags:</span>
          <NuxtLink
            v-for="tag in post!.tags"
            :key="tag"
            :to="`/blog/tags/${tag}`"
            class="rounded-full bg-white px-5 py-2 font-body text-xl hover:bg-jw_red hover:text-white transition-colors"
          >
            {{ tag }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped>
.blog-body :deep(img) {
  @apply my-8 max-w-full;
}
.blog-body :deep(p) {
  @apply mb-6;
}
.blog-body :deep(a) {
  @apply underline;
}
.blog-body :deep(h2),
.blog-body :deep(h3) {
  font-family: Rockwell, 'Rockwell Nova', 'Roboto Slab', serif;
  @apply mt-8 mb-4;
}
.blog-body :deep(figure) {
  @apply my-8;
}
.blog-body :deep(figcaption) {
  @apply mt-2 text-base text-jw_grey;
}
.blog-body :deep(blockquote) {
  @apply border-l-4 border-jw_grey pl-4 italic;
}
</style>
