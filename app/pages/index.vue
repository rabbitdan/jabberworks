<script setup lang="ts">
import type { BookSeriesSection } from "~~/types/content"
const { $sanity } = useNuxtApp()

const { data: sections } = await useAsyncData<BookSeriesSection[]>('bookSeriesSections', () =>
  $sanity.fetch(`
  *[_type == "bookSeriesSection"] | order(_createdAt asc) {
    _type,
    "id": _id,
    title,
    blurb,
    "cover": {
      "src": cover.asset->url,
      "alt": cover.alt,
      "url": cover.linkUrl
    },
    "thumbnailCharacter": {
      "src": thumbnailCharacter.asset->url,
      "alt": thumbnailCharacter.alt,
      "height": thumbnailCharacter.height
    },
    cta,
    "featuredBooks": featuredBooks[]-> {
      _type,
      "slug": slug.current,
      title,
      "cover": {
        "src": cover.asset->url,
        "alt": cover.alt
      },
      pageLink
    }
  }
`)
)

useSeoMeta({
  title: "Sarah McIntyre - Artist and Illustrator",
  description: "Explore Sarah's illustrated books and download activity-sheets sheets."
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
          v-for="(section, index) in (sections ?? [])"
          :key="section.id"
          :section="section"
          :featured-books="section.featuredBooks"
          :loop-index="index"
      />
    </div>
</template>
