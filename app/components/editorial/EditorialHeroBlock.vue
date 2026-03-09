<script setup lang="ts">
import type { EditorialHero } from "~~/types/content"

defineProps<{
  hero: EditorialHero
}>()
</script>

<template>
  <header class="grid grid-cols-12 border-b border-black items-center pb-10 md:items-end">
    <div class="flex col-span-12 md:col-span-4 items-center">
      <h1 class="max-w-4xl text-4xl md:text-6xl">
        {{ hero.title }}
      </h1>
    </div>
    <p v-if="hero.intro" class="col-span 12 md:col-span-8 items-center text-base">
      {{ hero.intro }}
    </p>
  </header>
</template>
