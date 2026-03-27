<script setup lang="ts">
import type { ActivitySheet } from "~~/types/content"
import { toParagraphs } from "~~/utils/paragraphs"

defineProps<{
  sheets: ActivitySheet[]
  heading?: string
}>()
</script>

<template>
  <section v-if="sheets?.length" class="mt-8">
    <h2 class="text-xl font-semibold">{{ heading || "Activity sheets" }}</h2>

    <ul
      class="mt-4 grid gap-4 sm:grid-cols-2"
    >
      <li v-for="(s, i) in sheets" :key="i" class="">
        <a
          class="flex items-center gap-4 p-4 h-full border border-1 border hover:bg-jw_blue hover:border-jw_red hover:border-dashed hover:m-0 transition"
          :href="s.pdfUrl"
          target="_blank"
          rel="noreferrer"
        >
          <div class="h-20 w-20 shrink-0 overflow-hidden">
            <img
                class="h-full w-full object-cover"
                :src="s.thumb.src"
                :alt="s.thumb.alt || ''"
                loading="lazy"
            />
          </div>

          <div class="min-w-0">
            <span class="font-heading underline">
              {{ s.title || s.linkText || "Download activity sheet" }}
            </span>
            <div
              v-if="s.text && toParagraphs(s.text).length"
              class="mt-1 space-y-2 text-sm"
            >
              <p v-for="(paragraph, paragraphIndex) in toParagraphs(s.text)" :key="paragraphIndex">
                {{ paragraph }}
              </p>
            </div>
            <p v-else class="mt-1 text-sm">PDF download</p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>
