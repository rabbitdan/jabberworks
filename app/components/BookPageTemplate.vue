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

const pageBackgroundStyle = computed(() => {
  if (!props.book.backgroundTileUrl) return undefined

  return {
    backgroundImage: `url(${props.book.backgroundTileUrl})`,
    backgroundRepeat: "repeat",
    backgroundPosition: "top left"
  }
})
</script>

<template>
  <div class="w-full" :style="pageBackgroundStyle">
    <main class="mx-auto max-w-5xl px-6 py-8 md:py-12">
    <NuxtLink
      to="/"
      class="inline-flex items-center gap-2 text-sm font-medium opacity-75 transition hover:opacity-100"
    >
      <span aria-hidden="true">←</span>
      <span>Back to books</span>
    </NuxtLink>


    <header class="mt-6 grid gap-8 rounded-[2rem] border border-black/10 bg-stone-50 p-6 md:grid-cols-[minmax(0,320px)_1fr] md:p-8">
      <div class="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm">
        <img
          class="h-full w-full object-cover"
          :src="book.cover.src"
          :alt="book.cover.alt || book.title"
        />
      </div>

      <div class="flex flex-col justify-center">
        <p class="text-sm uppercase tracking-[0.24em] opacity-55">Book</p>
        <h1 class="mt-3 text-3xl font-semibold leading-tight md:text-5xl">{{ book.title }}</h1>
        <div class="mt-5 max-w-2xl space-y-4 text-base leading-7 opacity-90 md:text-lg">
          <p v-for="(paragraph, index) in descriptionParagraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            v-if="book.buyLinks?.length"
            :href="book.buyLinks[0]?.url"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/85"
          >
            {{ book.buyLinks[0]?.linkText || "Buy the book" }}
          </a>

          <a
            v-if="book.activitySheets?.length"
            :href="`#activity-sheets`"
            class="inline-flex items-center rounded-full border border-black/15 px-5 py-3 text-sm font-medium transition hover:bg-black/5"
          >
            View activity sheets
          </a>

          <a
            v-if="videos.length"
            :href="`#videos`"
            class="inline-flex items-center rounded-full border border-black/15 px-5 py-3 text-sm font-medium transition hover:bg-black/5"
          >
            Watch videos
          </a>
        </div>
      </div>
    </header>

    <BuyLinksList
      v-if="book.buyLinks?.length"
      :links="book.buyLinks"
      class="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 md:p-8"
    />

    <ActivitySheetsList
      v-if="book.activitySheets?.length"
      id="activity-sheets"
      :sheets="book.activitySheets"
      :columns="book.activitySheetsLayout || 2"
      class="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 md:p-8"
    />

    <BookVideosSection
      v-if="videos.length"
      :videos="videos"
    />

    <section
      v-if="miscParagraphs.length"
      class="mt-8 rounded-[2rem] border border-black/10 bg-stone-50 p-6 md:p-8"
    >
      <h2 class="text-2xl font-semibold">{{ book.miscPanel?.heading || "More" }}</h2>
      <div class="mt-4 space-y-4 text-base leading-7 opacity-90">
        <p v-for="(paragraph, index) in miscParagraphs" :key="index">{{ paragraph }}</p>
      </div>
    </section>
    </main>
  </div>
</template>
