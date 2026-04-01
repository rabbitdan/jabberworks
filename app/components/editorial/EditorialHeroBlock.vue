<script setup lang="ts">
import type { EditorialHero } from "~~/types/content"

defineProps<{
  hero: EditorialHero
}>()
</script>

<template>
  <header class="grid grid-cols-12 border-b border-black items-center pb-10 md:items-end">
    <div class="flex col-span-12 md:col-span-4 items-center">
      <h1 class="flex items-center max-w-4xl h-full text-4xl md:text-6xl">
        {{ hero.title }}
      </h1>
    </div>
    <div v-if="hero.paragraphs?.length" class="flex h-full col-span-12 md:col-span-8 items-center text-base">
      <RichParagraphs :paragraphs="hero.paragraphs" />
    </div>
  </header>
</template>
