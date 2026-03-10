<script setup lang="ts">
import type { EditorialFeatureImageSection } from "~~/types/content"
import { toParagraphs } from "~~/utils/paragraphs"

const props = defineProps<{
  section: EditorialFeatureImageSection
}>()

const featurePositionClasses: Record<NonNullable<EditorialFeatureImageSection["textPosition"]>, string> = {
  "top-left": "left-4 top-4 md:left-8 md:top-8",
  "top-right": "right-4 top-4 md:right-8 md:top-8",
  "bottom-left": "bottom-4 left-4 md:bottom-8 md:left-8",
  "bottom-right": "bottom-4 right-4 md:bottom-8 md:right-8",
}

function getFeatureTextPosition(section: EditorialFeatureImageSection) {
  return featurePositionClasses[section.textPosition || "bottom-left"]
}

function getCreditText(section: EditorialFeatureImageSection) {
  return section.image.photographerCredit || section.credit
}
</script>

<template>
  <section class="relative overflow-hidden">
    <img
      class="h-[26rem] w-full object-cover md:h-[34rem] lg:h-[48rem]"
      :src="props.section.image.src"
      :alt="props.section.image.alt"
      loading="lazy"
    />
    <div class="absolute inset-0" />

    <div
      class="absolute max-w-sm bg-jw_red p-4 text-jw_blue md:p-6"
      :class="getFeatureTextPosition(props.section)"
    >
      <p v-if="props.section.overline" class="text-xs uppercase">
        {{ props.section.overline }}
      </p>
      <h2 v-if="props.section.title"  class="mt-2 text-2xl">
        {{ props.section.title }}
      </h2>
      <div v-if="props.section.text && toParagraphs(props.section.text).length" class="mt-3 space-y-2 text-sm leading-6">
        <p v-for="(paragraph, index) in toParagraphs(props.section.text)" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>

    <p
      v-if="getCreditText(props.section)"
      class="absolute bottom-0 left-0 m-0 bg-jw_red px-3 py-1 font-sans text-xs uppercase text-jw_blue"
    >
      {{ getCreditText(props.section) }}
    </p>
  </section>
</template>
