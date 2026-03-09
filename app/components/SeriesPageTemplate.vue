<script setup lang="ts">
import type { Series, Book } from "~~/types/content"
import { toParagraphs } from "~~/utils/paragraphs"

const props = defineProps<{
  series: Series
  featuredBooks: Book[]
}>()

const blurbParagraphs = computed(() => toParagraphs(props.series.blurb))
</script>

<template>
  <main class="mx-auto max-w-5xl p-6">
    <header class="flex flex-col gap-6 md:flex-row md:items-start">
      <div class="h-32 w-32 overflow-hidden rounded-2xl bg-black/5">
        <img
            class="h-full w-full object-cover"
            :src="series.thumbnailCharacter.src"
            :alt="series.thumbnailCharacter.alt || series.title"
            loading="lazy"
        />
      </div>

      <div class="min-w-0">
        <h1 class="text-3xl font-semibold leading-tight">{{ series.title }}</h1>
        <div v-if="blurbParagraphs.length" class="mt-3 space-y-3 opacity-85">
          <p v-for="(paragraph, index) in blurbParagraphs" :key="index">{{ paragraph }}</p>
        </div>

        <div v-if="series.cta" class="mt-5">
          <NuxtLink
              class="inline-flex items-center rounded-xl border px-4 py-2 hover:bg-black/5"
              :to="series.cta.url"
          >
            {{ series.cta.text }}
          </NuxtLink>
        </div>
      </div>
    </header>

    <BookGrid :books="featuredBooks" heading="Featured books" />
  </main>
</template>
