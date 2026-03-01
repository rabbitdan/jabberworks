<script setup lang="ts">
import { getSeriesSections, resolveFeaturedBooks } from "~~/lib/content"

const sections = computed(() => getSeriesSections())

const sectionBooks = computed(() =>
    sections.value.map(section => ({
      section,
      books: resolveFeaturedBooks(section)
    }))
)

useSeoMeta({
  title: "Sarah — Books",
  description: "Explore Sarah’s illustrated books and download activity sheets."
})
</script>

<template>
  <main class="mx-auto max-w-5xl p-6">
    <!-- Hero -->
    <header class="py-10 md:py-14">
      <p class="text-sm uppercase tracking-wide opacity-70">Illustrated books</p>
      <h1 class="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
        Sarah’s books and activity downloads
      </h1>
      <p class="mt-4 max-w-2xl text-base opacity-85">
        A short intro about Sarah and what visitors can do here: discover book series,
        watch read-aloud videos, and download activity sheets.
      </p>

      <!-- Optional hero CTA(s) -->
      <div class="mt-6 flex flex-wrap gap-3">
        <a class="rounded-xl border px-4 py-2 hover:bg-black/5" href="#series-1">
          Start with Otter Tales
        </a>
        <a class="rounded-xl border px-4 py-2 hover:bg-black/5" href="#earlier-books">
          Browse earlier books
        </a>
      </div>
    </header>

    <!-- Series blocks -->
    <div class="space-y-12">
      <SeriesSectionBlock
          v-for="item in sectionBooks"
          :key="item.section.id"
          :section="item.section"
          :featured-books="item.books"
      />
    </div>
  </main>
</template>
