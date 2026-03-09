<script setup lang="ts">
import type { Comic } from "~~/types/content"
import { toParagraphs } from "~~/utils/paragraphs"

const props = defineProps<{
  comic: Comic
}>()

const blurbParagraphs = computed(() => toParagraphs(props.comic.blurb))

defineEmits<{
  open: [comic: Comic]
}>()
</script>

<template>
  <article class="comic-card grid grid-cols-1 md:grid-cols-6 gap-10 items-center my-20">
    <div class="comic-card__media col-span-2">
      <img
        :src="comic.thumbnail.src"
        :alt="comic.thumbnail.alt || comic.title"
        loading="lazy"
        class="comic-card__image block w-96 h-auto object-cover border border-black"
      >
    </div>

    <div class="comic-card__body col-span-4">
      <p class="comic-card__eyebrow text-gray-500 uppercase text-sm">Comic {{ comic.panels.length }} pages</p>
      <h2 class="comic-card__title text-3xl my-2">{{ comic.title }}</h2>
      <div v-if="blurbParagraphs.length" class="comic-card__blurb space-y-3">
        <p v-for="(paragraph, index) in blurbParagraphs" :key="index">{{ paragraph }}</p>
      </div>

      <button type="button" class="comic-card__link border p-3 mt-3" @click="$emit('open', comic)">
        {{ comic.ctaLabel || "Lorem ipsum" }}
      </button>
    </div>
  </article>
  <hr class="flex m-auto border border-b border-black w-10/12">
</template>

<style scoped>

</style>
