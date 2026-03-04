<script setup lang="ts">
import type { BookSeriesSection, Book } from "~~/types/content"

defineProps<{
  section: BookSeriesSection
  featuredBooks: Book[]
}>()
</script>

<template>
  <section class="my-48" :id="section.id">
    <div class="flex flex-col gap-8 md:flex-row md:items-start">
      <div v-if="section.cta">
        <NuxtLink class="cover" :to="section.cta.url">
          <img
              class="object-cover"
              :src="section.cover.src"
              :alt="section.cover.alt || section.title"
              loading="lazy"
          />
        </NuxtLink>
      </div>

      <div class="flex flex-col items-stretch min-w-0">
        <h2 class="block mb-2 pb-2 border-b border-black text-3xl">{{ section.title }}</h2>
        <p v-if="section.blurb" class="mt-2 opacity-85">
          {{ section.blurb }}
        </p>

        <div class="flex items-center justify-between mt-4">
          <img
              class="h-36 w-auto object-cover"
              :src="section.thumbnailCharacter.src"
              :alt="section.thumbnailCharacter.alt || section.title"
              loading="lazy"
          />

          <div v-if="section.cta">
            <NuxtLink
                class="inline-flex items-center border px-4 py-2 hover:bg-black/5"
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
