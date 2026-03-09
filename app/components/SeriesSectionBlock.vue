<script setup lang="ts">
import type { BookSeriesSection, Book } from "~~/types/content"
import { toParagraphs } from "~~/utils/paragraphs"

const props = defineProps<{
  section: BookSeriesSection
  featuredBooks: Book[]
  loopIndex: number
}>()

const blurbParagraphs = computed(() => toParagraphs(props.section.blurb))
const shouldReverseLayout = computed(() => props.loopIndex % 2 === 1)
</script>

<template>
  <section :id="section.id">
    <hr class="my-32 border-t border-black" />

    <div class="grid grid-cols-12 gap-8 md:items-stretch">
      <div
          v-if="section.cover"
          class="col-span-12 md:col-span-5 lg:col-span-4"
          :class="shouldReverseLayout ? 'md:order-2' : 'md:order-1'"
      >
        <NuxtLink class="cover flex justify-center" :to="section.cover.url">
          <img
              class="object-cover w-full max-w-80 lg:max-w-96 xl:max-w-full"
              :src="section.cover.src"
              :alt="section.cover.alt || section.title"
              loading="lazy"
          />
        </NuxtLink>
      </div>

      <div
          class="series-content flex flex-col col-span-12 md:col-span-7 lg:col-span-8 justify-between h-full min-w-0"
          :class="shouldReverseLayout ? 'md:order-1' : 'md:order-2'"
      >
        <div class="text">
          <h2 class="block mb-2 pb-2 border-b border-black text-3xl">{{ section.title }}</h2>
          <div v-if="blurbParagraphs.length" class="mt-2 space-y-3 opacity-85">
            <p v-for="(paragraph, index) in blurbParagraphs" :key="index">{{ paragraph }}</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-end justify-between pt-4">
          <img
              class="h-36 w-auto object-cover"
              :src="section.thumbnailCharacter.src"
              :alt="section.thumbnailCharacter.alt || section.title"
              loading="lazy"
          />

          <div v-if="section.cta">
            <NuxtLink
                class="inline-flex items-center mt-6 sm:mt-0 px-6 pt-4 pb-3 font-heading text-xl rounded-full border-4 text-jw_blue bg-jw_red border-jw_blue border-dashed color-jw_blue hover:bg-jw_blue hover:border-jw_red hover:text-jw_red"
                :to="section.cta.url"
            >
              {{ section.cta.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <BookGrid :books="featuredBooks" />
  </section>
</template>
