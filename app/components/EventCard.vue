<script setup lang="ts">
import { computed, toRefs } from "vue"
import type { Event } from "~~/types/content"
import { toParagraphs } from "~~/utils/paragraphs"

const props = defineProps<{
  event: Event
}>()

const { event } = toRefs(props)

const eventUrl = computed(() => event.value.url ?? event.value.links?.[0]?.url ?? null)
const eventImages = computed(() => event.value.images ?? [])
const hasEventImages = computed(() => eventImages.value.length > 0)
const eventBlurbParagraphs = computed(() => toParagraphs(event.value.blurb))

function formatEventDate(isoDate: string, locale = "en-GB", timeZone = "Europe/London"): string {
  const date = new Date(`${isoDate}T00:00:00`)
  const dayMonthYearFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone
  })
  const weekdayFormatter = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    timeZone
  })

  return `${dayMonthYearFormatter.format(date)} (${weekdayFormatter.format(date)})`
}

function formatEventDateRange(dateStart: string, dateEnd?: string): string {
  if (!dateEnd || dateEnd === dateStart) {
    return formatEventDate(dateStart)
  }

  return `${formatEventDate(dateStart)} to ${formatEventDate(dateEnd)}`
}

function formatEventTimeRange(startTime?: string, endTime?: string): string | null {
  if (!startTime && !endTime) {
    return null
  }

  if (startTime && endTime) {
    return `${startTime} to ${endTime}`
  }

  return startTime ?? endTime ?? null
}

const eventLocation = computed(() => {
  if (event.value.mode === "online") {
    return event.value.city ? `Online (${event.value.city})` : "Online"
  }

  return event.value.city ?? null
})

const eventTime = computed(() =>
  formatEventTimeRange(event.value.startTime, event.value.endTime)
)

const galleryColumnsClass = computed(() => {
  if (eventImages.value.length <= 1) {
    return "grid-cols-1"
  }

  return "grid-cols-2"
})
</script>

<template>
  <article
    class="grid gap-6 py-6"
    :class="hasEventImages ? 'lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start' : 'grid-cols-1'"
  >
    <div>
      <h2 class="text-[clamp(1.7rem,2vw,2.25rem)] leading-[1.05] text-black">{{ event.title }}</h2>

      <dl class="mt-4 grid grid-cols-12 gap-4">
        <div class="grid col-span-3 p-2 bg-jw_blue">
          <dt class="text-[0.78rem] font-sans uppercase tracking-[0.12em] text-slate-800/70">Date</dt>
          <dd class="m-0 break-words text-xl leading-[1.6] text-slate-800">
            {{ formatEventDateRange(event.dateStart, event.dateEnd) }}
          </dd>
        </div>

        <div v-if="eventTime" class="grid col-span-3 p-2 bg-jw_blue">
          <dt class="text-[0.78rem] font-sans uppercase tracking-[0.12em] text-slate-800/70">Time</dt>
          <dd class="m-0 break-words text-xl leading-[1.6] text-black">{{ eventTime }}</dd>
        </div>

        <div v-if="eventLocation" class="grid col-span-3 p-2 bg-jw_blue">
          <dt class="text-[0.78rem] font-sans uppercase tracking-[0.12em] text-slate-800/70">Location</dt>
          <dd class="m-0 break-words text-xl leading-[1.6] text-black">{{ eventLocation }}</dd>
        </div>
      </dl>

      <div v-if="eventBlurbParagraphs.length" class="mt-4 space-y-3 text-base leading-[1.7] text-slate-800/80">
        <p v-for="(paragraph, index) in eventBlurbParagraphs" :key="index">{{ paragraph }}</p>
      </div>

      <div v-if="eventUrl" class="grid gap-1 mt-6">
        <dd>
          <NuxtLink
              :to="eventUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center rounded-full px-4 py-2 text-md font-medium no-underline bg-jw_red text-white border border-2 border-dashed border-jw_blue hover:bg-jw_blue hover:border-jw_red hover:text-jw_red"
          >
            Go to the Event page!
          </NuxtLink>
        </dd>
      </div>
    </div>

    <div
      v-if="eventImages.length"
      class="grid gap-4"
      :class="galleryColumnsClass"
    >
      <img
        v-for="(image, index) in eventImages"
        :key="`${event.title}-${event.dateStart}-${index}`"
        :src="image.src"
        :alt="image.alt"
        loading="lazy"
        class="block w-full max-h-80 object-contain"
        :class="{ 'col-span-2': eventImages.length === 3 && index === 0 }"
      >
    </div>
  </article>
  <hr class="relative mx-auto my-16 w-3/4 border-t border-black">
</template>
