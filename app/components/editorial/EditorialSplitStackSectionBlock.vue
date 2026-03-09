<script setup lang="ts">
import type { EditorialSplitStackSection } from "~~/types/content"

defineProps<{
  section: EditorialSplitStackSection
}>()
</script>

<template>
  <section class="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
    <div>
      <div class="overflow-hidden">
        <img
          class="h-full w-full object-cover"
          :src="section.primaryImage.src"
          :alt="section.primaryImage.alt"
          loading="lazy"
        />
      </div>
      <p
        v-if="section.primaryImage.photographerCredit"
        class="mt-2 text-xs uppercase"
      >
        {{ section.primaryImage.photographerCredit }}
      </p>
    </div>

    <div class="grid gap-8">
      <div>
        <p v-if="section.eyebrow" class="text-sm uppercase">
          {{ section.eyebrow }}
        </p>
        <h2 class="mt-3 text-3xl">
          {{ section.title }}
        </h2>
        <div class="mt-4 space-y-4 text-base leading-7">
          <p v-for="paragraph in section.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div>
        <div class="overflow-hidden">
          <img
            class="h-full w-full object-cover"
            :src="section.secondaryImage.src"
            :alt="section.secondaryImage.alt"
            loading="lazy"
          />
        </div>
        <p
          v-if="section.secondaryImage.photographerCredit"
          class="mt-2 text-xs uppercase"
        >
          {{ section.secondaryImage.photographerCredit }}
        </p>
      </div>
    </div>
  </section>
</template>
