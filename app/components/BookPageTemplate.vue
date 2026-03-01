<script setup lang="ts">
import type { Book } from "~~/types/content"

defineProps<{
  book: Book
}>()
</script>

<template>
  <main class="mx-auto max-w-4xl p-6">
    <header class="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
      <div class="overflow-hidden rounded-2xl bg-black/5">
        <img
            class="h-full w-full object-cover"
            :src="book.cover.src"
            :alt="book.cover.alt || book.title"
        />
      </div>

      <div>
        <h1 class="text-3xl font-semibold leading-tight">{{ book.title }}</h1>
        <p class="mt-4 text-base opacity-90">
          {{ book.blurb }}
        </p>

        <BuyLinksList v-if="book.buyLinks?.length" :links="book.buyLinks" class="mt-6" />
      </div>
    </header>

    <ActivitySheetsList v-if="book.activitySheets?.length" :sheets="book.activitySheets" />

    <YouTubeEmbed v-if="book.youtube?.url" :url="book.youtube.url" :title="book.youtube.title" />
  </main>
</template>
