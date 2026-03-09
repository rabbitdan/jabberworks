<script setup lang="ts">
import type { EditorialTextImageSection } from "~~/types/content"

const props = defineProps<{
  section: EditorialTextImageSection
}>()

const splitWidthClasses: Record<NonNullable<EditorialTextImageSection["imageWidth"]>, string> = {
  sm: "md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
  md: "md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
  lg: "md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]",
}

const splitTextWidthClasses: Record<NonNullable<EditorialTextImageSection["textWidth"]>, string> = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
}

function getSplitClasses(section: EditorialTextImageSection) {
  const imageWidth = section.imageWidth || "md"
  return splitWidthClasses[imageWidth]
}

function getTextClasses(section: EditorialTextImageSection) {
  const textWidth = section.textWidth || "md"
  return splitTextWidthClasses[textWidth]
}
</script>

<template>
  <section
    class="grid gap-8 md:items-center"
    :class="[
      getSplitClasses(props.section),
      props.section.imageSide === 'left' ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : '',
    ]"
  >
    <div>
      <div class="overflow-hidden">
        <img
          class="h-full w-full object-cover"
          :src="props.section.image.src"
          :alt="props.section.image.alt"
          loading="lazy"
        />
      </div>
      <p
        v-if="props.section.image.photographerCredit"
        class="mt-2 text-xs uppercase"
      >
        {{ props.section.image.photographerCredit }}
      </p>
    </div>

    <div :class="getTextClasses(props.section)">
      <p v-if="props.section.eyebrow" class="text-sm uppercase">
        {{ props.section.eyebrow }}
      </p>
      <h2 v-if="props.section.title" class="mt-3 text-3xl">
        {{ props.section.title }}
      </h2>
      <div class="mt-4 space-y-4 text-base leading-7">
        <p v-for="paragraph in props.section.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
