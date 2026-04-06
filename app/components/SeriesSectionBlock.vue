<script setup lang="ts">
import type { BookSeriesSection, Book } from "~~/types/content"
import type { SanityImageSource } from '@sanity/image-url'
const props = defineProps<{
  section: BookSeriesSection
  featuredBooks: Book[]
  loopIndex: number
}>()

const shouldReverseLayout = computed(() => props.loopIndex % 2 === 1)

const { urlFor } = useSanityImage()
const coverSrc = computed(() =>
  props.section.cover.sanityImage
    ? urlFor(props.section.cover.sanityImage as SanityImageSource).width(800).auto('format').url()
    : props.section.cover.src
)

const thumbnailCharacterSrc = computed(() =>
  props.section.thumbnailCharacter.sanityImage
    ? urlFor(props.section.thumbnailCharacter.sanityImage as SanityImageSource).auto('format').url()
    : props.section.thumbnailCharacter.src
)
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
              class="object-contain w-full max-w-80 lg:max-w-96 xl:max-w-full"
              :src="coverSrc"
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
          <div v-if="section.blurb?.length" class="mt-2 space-y-3 opacity-85">
            <RichParagraphs :paragraphs="section.blurb" />
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-end justify-between pt-4">
          <img
              class="w-auto object-cover"
              :class="section.thumbnailCharacter.height ?? 'h-36'"
              :src="thumbnailCharacterSrc"
              :alt="section.thumbnailCharacter.alt || section.title"
              loading="lazy"
          />

          <div v-if="section.cta">
            <NuxtLink
                class="inline-flex items-center mt-6 sm:mt-0 px-6 pt-4 pb-3 font-heading text-xl rounded-full border-4 text-jw_red bg-jw_blue border-jw_red border-dashed color-jw_blue hover:bg-jw_red hover:border-jw_blue hover:text-jw_blue"
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
