<script setup lang="ts">
import { computed, toRefs } from "vue"
import type { Event } from "~~/types/content"
import { formatEventDate } from "~~/utils/eventDate.ts"

const props = defineProps<{
  event: Event
}>()

const { event } = toRefs(props)

const eventHref = computed(() => `/events/${event.value.slug}`)
const eventImages = computed(() => event.value.images ?? [])
const galleryColumnsClass = computed(() => {
  if (eventImages.value.length <= 1) {
    return "grid-cols-1"
  }

  return "grid-cols-2"
})
</script>

<template>
  <article class="grid gap-6 rounded-3xl border border-slate-900/10 bg-[linear-gradient(135deg,rgba(255,247,237,0.92),rgba(255,255,255,0.98)),#fff] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
    <div>
      <p class="m-0 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-amber-700">Event</p>
      <h2 class="mt-2 text-[clamp(1.7rem,2vw,2.25rem)] leading-[1.05] text-slate-800">{{ event.title }}</h2>

      <dl class="mt-4 grid gap-3">
        <div class="grid gap-1">
          <dt class="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-slate-800/70">Date</dt>
          <dd class="m-0 break-words leading-[1.6] text-slate-800">{{ formatEventDate(event.dateStart) }}</dd>
        </div>

        <div class="grid gap-1">
          <dt class="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-slate-800/70">URL</dt>
          <dd>
            <NuxtLink
              :to="eventHref"
              class="break-words text-amber-800 underline decoration-2 underline-offset-[0.2em]"
            >
              {{ eventHref }}
            </NuxtLink>
          </dd>
        </div>
      </dl>

      <p class="mt-4 text-base leading-[1.7] text-slate-800/80">{{ event.blurb }}</p>
    </div>

    <div
      v-if="eventImages.length"
      class="grid gap-4"
      :class="galleryColumnsClass"
    >
      <img
        v-for="(image, index) in eventImages"
        :key="`${event.slug}-${index}`"
        :src="image.src"
        :alt="image.alt"
        loading="lazy"
        class="block aspect-[4/3] h-auto w-full rounded-2xl bg-amber-50 object-cover"
        :class="{ 'col-span-2': eventImages.length === 3 && index === 0 }"
      >
    </div>
  </article>
</template>
