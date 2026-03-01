<script setup lang="ts">
import type {
  EditorialCalloutSection,
  EditorialFeatureImageSection,
  EditorialPage,
  EditorialTextImageSection,
} from "~~/types/content"

const props = defineProps<{
  page: EditorialPage
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

function getSplitClasses(section: EditorialTextImageSection) {
  const imageWidth = section.imageWidth || "md"
  return splitWidthClasses[imageWidth]
}

function getTextClasses(section: EditorialTextImageSection) {
  const textWidth = section.textWidth || "md"
  return splitTextWidthClasses[textWidth]
}

function getFeatureTextPosition(section: EditorialFeatureImageSection) {
  return featurePositionClasses[section.textPosition || "bottom-left"]
}

function getFeatureCreditPosition(section: EditorialFeatureImageSection) {
  return creditPositionClasses[section.creditPosition || "bottom-right"]
}

function isTextImageSection(section: EditorialPage["sections"][number]): section is EditorialTextImageSection {
  return section._type === "textImage"
}

function isFeatureImageSection(section: EditorialPage["sections"][number]): section is EditorialFeatureImageSection {
  return section._type === "featureImage"
}

function isCalloutSection(section: EditorialPage["sections"][number]): section is EditorialCalloutSection {
  return section._type === "callout"
}
</script>

<template>
  <div class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10 md:gap-16 md:py-14">
    <header class="grid gap-6 border-b border-black/10 pb-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-end">
      <div>
        <p v-if="page.hero.eyebrow" class="text-sm uppercase tracking-[0.24em] text-black/55">
          {{ page.hero.eyebrow }}
        </p>
        <h1 class="mt-3 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          {{ page.hero.title }}
        </h1>
      </div>

      <p v-if="page.hero.intro" class="max-w-2xl text-base leading-7 text-black/75 md:justify-self-end">
        {{ page.hero.intro }}
      </p>
    </header>

    <div class="flex flex-col gap-12 md:gap-16">
      <template v-for="section in props.page.sections" :key="section.id">
        <section
          v-if="isTextImageSection(section)"
          class="grid gap-8 md:items-center"
          :class="[
            getSplitClasses(section),
            section.imageSide === 'left' ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : '',
          ]"
        >
          <div class="overflow-hidden rounded-[2rem] bg-stone-100">
            <NuxtImg
              class="h-full w-full object-cover"
              :src="section.image.src"
              :alt="section.image.alt"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div :class="getTextClasses(section)">
            <p v-if="section.eyebrow" class="text-sm uppercase tracking-[0.24em] text-black/55">
              {{ section.eyebrow }}
            </p>
            <h2 v-if="section.title" class="mt-3 text-3xl font-semibold leading-tight">
              {{ section.title }}
            </h2>
            <div class="mt-4 space-y-4 text-base leading-7 text-black/80">
              <p v-for="paragraph in section.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </section>

        <section
          v-else-if="isFeatureImageSection(section)"
          class="relative overflow-hidden rounded-[2rem] bg-stone-900 text-white"
        >
          <NuxtImg
            class="h-[26rem] w-full object-cover md:h-[34rem]"
            :src="section.image.src"
            :alt="section.image.alt"
            sizes="100vw"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div
            class="absolute max-w-sm rounded-[1.5rem] bg-white/90 p-5 text-black shadow-lg backdrop-blur"
            :class="getFeatureTextPosition(section)"
          >
            <p v-if="section.overline" class="text-xs uppercase tracking-[0.22em] text-black/55">
              {{ section.overline }}
            </p>
            <h2 class="mt-2 text-2xl font-semibold leading-tight">
              {{ section.title }}
            </h2>
            <p v-if="section.text" class="mt-3 text-sm leading-6 text-black/75">
              {{ section.text }}
            </p>
          </div>

          <p
            v-if="section.credit"
            class="absolute rounded-full bg-black/50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85"
            :class="getFeatureCreditPosition(section)"
          >
            {{ section.credit }}
          </p>
        </section>

        <section
          v-else-if="isCalloutSection(section)"
          class="rounded-[2rem] border border-black/10 bg-stone-50 p-8 md:p-10"
        >
          <p v-if="section.eyebrow" class="text-sm uppercase tracking-[0.24em] text-black/55">
            {{ section.eyebrow }}
          </p>
          <h2 class="mt-3 max-w-2xl text-3xl font-semibold leading-tight">
            {{ section.title }}
          </h2>
          <p class="mt-4 max-w-3xl text-base leading-7 text-black/75">
            {{ section.text }}
          </p>
        </section>
      </template>
    </div>
  </div>
</template>
