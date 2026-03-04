<script setup lang="ts">
import { getBookPageUrl, isExternalUrl } from "~~/lib/content"
import type { Book } from "~~/types/content"

const props = defineProps<{
  book: Book
}>()

const pageUrl = computed(() => getBookPageUrl(props.book))
const external = computed(() => isExternalUrl(pageUrl.value) || props.book.pageLink?.external === true)
</script>

<template>
  <NuxtLink
      class="block"
      :to="pageUrl"
      :external="external"
      :target="external ? '_blank' : undefined"
      :rel="external ? 'noreferrer' : undefined"
  >
        <img
            class="h-48 w-auto"
            :src="book.cover.src"
            :alt="book.cover.alt || book.title"
            loading="lazy"
        />
  </NuxtLink>
</template>
