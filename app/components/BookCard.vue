<script setup lang="ts">
import { getBookPageUrl, isExternalUrl } from "~~/lib/content"
import type { Book } from "~~/types/content"
import type { SanityImageSource } from '@sanity/image-url'
const props = defineProps<{
  book: Book
}>()

const pageUrl = computed(() => getBookPageUrl(props.book))
const external = computed(() => isExternalUrl(pageUrl.value) || props.book.pageLink?.external === true)

const { urlFor } = useSanityImage()
const coverSrc = computed(() =>
  props.book.cover.sanityImage
    ? urlFor(props.book.cover.sanityImage as SanityImageSource).width(300).auto('format').url()
    : props.book.cover.src
)
</script>

<template>
  <NuxtLink
      class="block hover:transition-transform hover:-translate-y-2"
      :to="pageUrl"
      :external="external"
      :target="external ? '_blank' : undefined"
      :rel="external ? 'noreferrer' : undefined"
  >
        <img
            class="h-48 md:h-48 lg:h-32 xl:h-36 2xl:h-48 w-auto m-auto sm:m-0"
            :src="coverSrc"
            :alt="book.cover.alt || book.title"
            loading="lazy"
        />
  </NuxtLink>
</template>
