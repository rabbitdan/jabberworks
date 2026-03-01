<script setup lang="ts">
import { comics } from "~~/data/comics"
import type { Comic } from "~~/types/content"

const activeComic = ref<Comic | null>(null)

useSeoMeta({
  title: "Sarah — Comics",
  description: "Browse Sarah's comics and open each story in a panel-by-panel reader."
})

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
    }
  ]
})
</script>

<template>
  <section class="comics-page">
    <div class="comics-page__hero">
      <p class="comics-page__eyebrow">Comic shelf</p>
      <h1 class="comics-page__title">Stories you can open panel by panel.</h1>
      <p class="comics-page__intro">
        Browse the latest comics below. Each story opens in a lazy-loaded modal reader and
        can be paged through as a Splide carousel.
      </p>
    </div>

    <div class="comics-page__column">
      <ComicCard
        v-for="comic in comics"
        :key="comic.slug"
        :comic="comic"
        @open="activeComic = $event"
      />
    </div>

    <LazyComicReaderModal
      v-if="activeComic"
      :key="activeComic.slug"
      :comic="activeComic"
      @close="activeComic = null"
    />
  </section>
</template>

<style scoped>
.comics-page {
  width: min(1080px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 3rem 0 5rem;
}

.comics-page__hero {
  padding: 2rem;
  border-radius: 2rem;
  background:
    radial-gradient(circle at top left, rgba(254, 240, 138, 0.8), transparent 36%),
    radial-gradient(circle at right bottom, rgba(251, 191, 36, 0.22), transparent 28%),
    linear-gradient(145deg, #fff7ed, #fffbeb 58%, #ffffff);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}

.comics-page__eyebrow {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b45309;
}

.comics-page__title {
  margin: 0.75rem 0 0;
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  line-height: 0.95;
  max-width: 12ch;
  color: #111827;
}

.comics-page__intro {
  margin: 1.25rem 0 0;
  max-width: 42rem;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(31, 41, 55, 0.82);
}

.comics-page__column {
  margin-top: 2rem;
  display: grid;
  gap: 1.5rem;
}
</style>
