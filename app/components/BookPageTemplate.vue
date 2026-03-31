<script setup lang="ts">
import type { Book } from "~~/types/content"
import { toParagraphs } from "~~/utils/paragraphs"

const props = defineProps<{
  book: Book
}>()

const descriptionParagraphs = computed(() => {
  if (props.book.description) return toParagraphs(props.book.description)
  return toParagraphs(props.book.blurb)
})

const videos = computed(() => {
  if (props.book.videos?.length) return props.book.videos
  if (!props.book.youtube?.url) return []

  return [{
    url: props.book.youtube.url,
    heading: props.book.youtube.title || "Book video"
  }]
})

const miscParagraphs = computed(() => toParagraphs(props.book.miscPanel?.text))

useHead(computed(() => {
  if (!props.book.backgroundTileUrl) return {}
  return {
    bodyAttrs: {
      style: `background-image: url(${props.book.backgroundTileUrl}); background-repeat: repeat; background-position: top left; background-attachment: fixed;`
    }
  }
}))
</script>

<template>
  <div class="w-full">
    <main class="mx-auto container px-6 py-8 md:py-12">
    <header class="mt-6 grid gap-8 bg-white bg-opacity-90 p-6 md:grid-cols-[minmax(0,320px)_1fr] md:p-8">
      <div class="overflow-hidden">
        <img
          class="h-full w-full object-cover"
          :src="book.cover.src"
          :alt="book.cover.alt || book.title"
        />
      </div>

      <div class="flex flex-col justify-center">
        <NuxtLink
          to="/"
          class="inline-flex gap-2 text-sm font-medium opacity-75 transition hover:opacity-100"
        >
          <span aria-hidden="true">←</span>
          <span>Back to books</span>
        </NuxtLink>
        <h1 class="mt-3 text-3xl font-semibold leading-tight md:text-5xl">{{ book.title }}</h1>
        <div class="mt-5 max-w-2xl space-y-4 text-base leading-7 opacity-90 md:text-lg">
          <p v-for="(paragraph, index) in descriptionParagraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </header>

    <ActivitySheetsList
      v-if="book.activitySheets?.length"
      id="activity-sheets"
      :sheets="book.activitySheets"
      class="mt-8 bg-white bg-opacity-90 p-6 md:p-8"
    />

    <BookVideosSection
      v-if="videos.length"
      :videos="videos"
    />

    <section
      v-if="miscParagraphs.length"
      class="mt-8 bg-stone-50 p-6 md:p-8"
    >
      <h2 class="text-2xl font-semibold">{{ book.miscPanel?.heading || "More" }}</h2>
      <div class="mt-4 space-y-4 text-base leading-7 opacity-90">
        <p v-for="(paragraph, index) in miscParagraphs" :key="index">{{ paragraph }}</p>
      </div>
    </section>
    </main>
  </div>
</template>
