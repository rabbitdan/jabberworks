<script setup lang="ts">
import type { BookVideo } from "~~/types/content"
import { toParagraphs } from "~~/utils/paragraphs"

defineProps<{
  videos: BookVideo[]
}>()
</script>

<template>
  <section v-if="videos?.length" id="videos" class="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 md:p-8">
    <h2 class="text-2xl font-semibold">Videos</h2>

    <ul class="mt-6 grid gap-8 md:grid-cols-2">
      <li v-for="(video, index) in videos" :key="`${video.url}-${index}`">
        <h3 class="text-lg font-semibold">{{ video.heading }}</h3>
        <div v-if="video.text && toParagraphs(video.text).length" class="mt-2 space-y-2 text-sm leading-6 opacity-85">
          <p v-for="(paragraph, paragraphIndex) in toParagraphs(video.text)" :key="paragraphIndex">
            {{ paragraph }}
          </p>
        </div>
        <YouTubeEmbed
          :url="video.url"
          :title="video.heading"
          :show-heading="false"
          class="mt-3"
        />
      </li>
    </ul>
  </section>
</template>
