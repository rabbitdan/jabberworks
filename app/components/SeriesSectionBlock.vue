<script setup lang="ts">
import type { BookSeriesSection, Book } from "~~/types/content"

defineProps<{
  section: BookSeriesSection
  featuredBooks: Book[]
}>()
</script>

<template>
  <section class="mt-12 scroll-mt-24" :id="section.id">
    <div class="flex flex-col gap-6 md:flex-row md:items-start">
      <div class="h-24 w-24 overflow-hidden rounded-2xl bg-black/5">
        <img
            class="h-full w-full object-cover"
            :src="section.thumbnailCharacter.src"
            :alt="section.thumbnailCharacter.alt || section.title"
            loading="lazy"
        />
      </div>

      <div class="min-w-0">
        <h2 class="text-2xl font-semibold leading-tight">{{ section.title }}</h2>
        <p v-if="section.blurb" class="mt-2 opacity-85">
          {{ section.blurb }}
        </p>

        <div v-if="section.cta" class="mt-4">
          <NuxtLink
              class="inline-flex items-center rounded-xl border px-4 py-2 hover:bg-black/5"
              :to="section.cta.url"
          >
            {{ section.cta.text }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <BookGrid :books="featuredBooks" />
  </section>
</template>
