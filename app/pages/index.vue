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
  title: "Sarah McIntyre - Artist and Illustrator",
  description: "Explore Sarah’s illustrated books and download activity sheets."
})
</script>

<template>
    <div class="container">
      <!-- Hero -->
      <div class="hero block md:flex items-center justify-between gap-10 mt-10">
        <div class="hero__image relative">
          <img
              src="/artist-mouse.jpg"
              alt="Artist mouse"
              class="rounded-lg object-cover"
          />
        </div>
        <div class="hero__text relative">
          <h1 class="mt-3 text-4xl leading-tight md:text-5xl">
            Artist and Author
          </h1>
          <p class="mt-4 max-w-2xl text-base opacity-85">
            I've loved to draw and make stories since I was a kid, and I've been practicing constantly at it since then. I like to think thousands of hours of practice has made me a lot better, but sometimes I learn the funniest and best things watching how children draw my own characters!
          </p>
        </div>
      </div>
    </div>

    <!-- Series blocks -->
    <div class="container">
      <SeriesSectionBlock
          v-for="item in sectionBooks"
          :key="item.section.id"
          :section="item.section"
          :featured-books="item.books"
      />
    </div>
</template>
