<script setup lang="ts">
import type { Book } from "~~/types/content"

defineProps<{
  book: Book
}>()
</script>

<template>
  <NuxtLink
      class="group block overflow-hidden rounded-2xl border hover:bg-black/5"
      :to="`/books/${book.slug}`"
  >
    <div class="flex gap-4 p-4">
      <div class="h-28 w-20 shrink-0 overflow-hidden rounded-xl bg-black/5">
        <img
            class="h-full w-full object-cover"
            :src="book.cover.src"
            :alt="book.cover.alt || book.title"
            loading="lazy"
        />
      </div>

      <div class="min-w-0">
        <h3 class="text-lg font-semibold leading-snug">
          {{ book.title }}
        </h3>
        <p class="mt-2 line-clamp-3 text-sm opacity-80">
          {{ book.blurb }}
        </p>
        <p class="mt-3 text-sm underline opacity-80 group-hover:opacity-100">
          View book
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
