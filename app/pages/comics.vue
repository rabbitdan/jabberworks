<script setup lang="ts">
import { comics } from "~~/data/comics.generated"
import type { Comic } from "~~/types/content"

const activeComic = ref<Comic | null>(null)

useSeoMeta({
  title: "Sarah — Comics",
  description: "Browse Sarah's comics and open each story in a modal Splide carousel."
})
</script>

<template>
  <section class="comics-page">
    <div class="container">
      <div class="comics-page__hero flex my-16">
        <h1 class="comics-page__title text-5xl">Comics</h1>
        <p class="comics-page__intro ml-6">
          Learn how to make comics with Sarah McIntyre in this series of Booktrust videos! Great for home or the classroom.
        </p>
      </div>
      <hr class="flex m-auto border border-b border-black w-10/12">

      <div class="comics-page__grid border-b border-black">
        <ComicCard
            v-for="comic in comics"
            :key="comic.slug"
            :comic="comic"
            @open="activeComic = $event"
        />
      </div>
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

</style>
