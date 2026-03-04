<script setup lang="ts">
import { getBookBySlug } from "~~/lib/content"

const route = useRoute()
const slug = String(route.params.slug)

const book = computed(() => getBookBySlug(slug))

if (!book.value) {
  throw createError({ statusCode: 404, statusMessage: "Book not found" })
}

useSeoMeta({
  title: () => book.value?.title ?? "Book",
  description: () => book.value?.blurb ?? "",
  ogTitle: () => book.value?.title ?? "Book",
  ogDescription: () => book.value?.blurb ?? "",
  ogImage: () => book.value?.cover.src ?? ""
})
</script>

<template>
  <BookPageTemplate :book="book!" />
</template>
