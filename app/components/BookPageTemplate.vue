<script setup lang="ts">
import type { Book } from "~~/types/content"

defineProps<{
  book: Book
}>()
</script>

<template>
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
        <p class="mt-5 max-w-2xl text-base leading-7 opacity-90 md:text-lg">
          {{ book.blurb }}
        </p>

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
            v-if="book.youtube?.url"
            :href="`#video`"
            class="inline-flex items-center rounded-full border border-black/15 px-5 py-3 text-sm font-medium transition hover:bg-black/5"
          >
            Watch the video
          </a>
        </div>
      </div>
    </header>

    <section class="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div class="rounded-[2rem] border border-black/10 bg-white p-6 md:p-8">
        <h2 class="text-2xl font-semibold">About this book</h2>
        <p class="mt-4 max-w-3xl text-base leading-7 opacity-85">
          {{ book.blurb }}
        </p>
      </div>

      <aside class="rounded-[2rem] border border-black/10 bg-stone-50 p-6">
        <h2 class="text-lg font-semibold">Quick details</h2>
        <ul class="mt-4 space-y-3 text-sm opacity-80">
          <li>Title: {{ book.title }}</li>
          <li v-if="book.activitySheets?.length">Activity sheets: {{ book.activitySheets.length }}</li>
          <li v-if="book.buyLinks?.length">Buy links: {{ book.buyLinks.length }}</li>
          <li v-if="book.youtube?.url">Video: available</li>
        </ul>
      </aside>
    </section>

    <BuyLinksList
      v-if="book.buyLinks?.length"
      :links="book.buyLinks"
      class="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 md:p-8"
    />

    <ActivitySheetsList
      v-if="book.activitySheets?.length"
      id="activity-sheets"
      :sheets="book.activitySheets"
      class="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 md:p-8"
    />

    <YouTubeEmbed
      v-if="book.youtube?.url"
      id="video"
      :url="book.youtube.url"
      :title="book.youtube.title"
      class="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 md:p-8"
    />
  </main>
</template>
