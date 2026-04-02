<script setup lang="ts">
import type { EditorialCalloutSection } from "~~/types/content"

defineProps<{
  section: EditorialCalloutSection
}>()
</script>

<template>
  <section class="flex items-center justify-center bg-jw_blue p-8 md:p-10">
    <p v-if="section.eyebrow" class="max-auto text-sm uppercase">
      {{ section.eyebrow }}
    </p>
    <h2 v-if="section.title" class="mt-3 mx-auto text-3xl">
      {{ section.title }}
    </h2>
    <div v-if="section.paragraphs?.length" class="mt-4 space-y-4 text-base text-center">
      <RichParagraphs
        :paragraphs="section.paragraphs"
        paragraph-class="block mx-auto xl:max-w-5xl font-heading text-lg leading-7"
      />
    </div>
  </section>
</template>
