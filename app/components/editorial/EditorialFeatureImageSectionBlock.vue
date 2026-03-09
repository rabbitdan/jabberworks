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

const creditPositionClasses: Record<NonNullable<EditorialFeatureImageSection["creditPosition"]>, string> = {
  "top-left": "left-4 top-4 md:left-8 md:top-8",
  "top-right": "right-4 top-4 md:right-8 md:top-8",
  "bottom-left": "bottom-4 left-4 md:bottom-8 md:left-8",
  "bottom-right": "bottom-4 right-4 md:bottom-8 md:right-8",
}

function getFeatureTextPosition(section: EditorialFeatureImageSection) {
  return featurePositionClasses[section.textPosition || "bottom-left"]
}

function getFeatureCreditPosition(section: EditorialFeatureImageSection) {
  return creditPositionClasses[section.creditPosition || "bottom-right"]
}

function getCreditText(section: EditorialFeatureImageSection) {
  return section.image.photographerCredit || section.credit
}
</script>

<template>
  <section class="relative overflow-hidden">
    <img
      class="h-[26rem] w-full object-cover md:h-[34rem]"
      :src="props.section.image.src"
      :alt="props.section.image.alt"
      loading="lazy"
    />
    <div class="absolute inset-0" />

    <div
      class="absolute max-w-sm text-black backdrop-blur"
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
      class="absolute px-3 py-1 text-xs uppercase"
      :class="getFeatureCreditPosition(props.section)"
    >
      {{ getCreditText(props.section) }}
    </p>
  </section>
</template>
