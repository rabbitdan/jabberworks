<script setup lang="ts">
import type { EditorialTwoColumnSection } from "~~/types/content"

defineProps<{
  section: EditorialTwoColumnSection
}>()
</script>

<template>
  <section class="border p-8 md:p-10">
    <p v-if="section.eyebrow" class="text-sm uppercase">
      {{ section.eyebrow }}
    </p>

    <div class="mt-4 grid gap-8 md:grid-cols-2 md:gap-10">
      <div>
        <h2 class="text-2xl">
          {{ section.left.title }}
        </h2>
        <div class="mt-4 space-y-4 text-base leading-7">
          <p v-for="paragraph in section.left.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div>
        <h2 class="text-2xl">
          {{ section.right.title }}
        </h2>
        <div class="mt-4 space-y-4 text-base leading-7">
          <p v-for="paragraph in section.right.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
