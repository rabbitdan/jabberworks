<script setup lang="ts">
import type { EditorialSplitStackSection } from "~~/types/content"

defineProps<{
  section: EditorialSplitStackSection
}>()
</script>

<template>
  <section class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
    <div class="relative h-full">
      <img
        class="h-full w-full object-cover"
        :src="section.primaryImage.src"
        :alt="section.primaryImage.alt"
        loading="lazy"
      />
      <ImageCredit :credit="section.primaryImage.photographerCredit" />
    </div>

    <div class="grid gap-8 h-full items-between">
      <div class="self-start">
        <h2 class="mt-3 text-3xl">
          {{ section.title }}
        </h2>
        <div class="mt-4 space-y-4 text-base leading-7">
          <RichParagraphs :paragraphs="section.paragraphs" />
        </div>
      </div>

      <div class="relative self-end overflow-hidden">
        <img
          class="h-full w-full object-cover"
          :src="section.secondaryImage.src"
          :alt="section.secondaryImage.alt"
          loading="lazy"
        />
        <ImageCredit :credit="section.secondaryImage.photographerCredit" />
      </div>
    </div>
  </section>
</template>
