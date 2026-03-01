<script setup lang="ts">
import type { ActivitySheet } from "~~/types/content"

defineProps<{
  sheets: ActivitySheet[]
  heading?: string
}>()
</script>

<template>
  <section v-if="sheets?.length" class="mt-8">
    <h2 class="text-xl font-semibold">{{ heading || "Activity sheets" }}</h2>

    <ul class="mt-4 grid gap-4 sm:grid-cols-2">
      <li v-for="(s, i) in sheets" :key="i" class="overflow-hidden rounded-2xl border">
        <div class="flex gap-4 p-4">
          <div class="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-black/5">
            <img
                class="h-full w-full object-cover"
                :src="s.thumb.src"
                :alt="s.thumb.alt || ''"
                loading="lazy"
            />
          </div>

          <div class="min-w-0">
            <a
                class="font-medium underline"
                :href="s.pdfUrl"
                target="_blank"
                rel="noreferrer"
            >
              {{ s.linkText }}
            </a>
            <p class="mt-1 text-sm opacity-75">PDF download</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
