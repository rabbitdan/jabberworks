<script setup lang="ts">
import { computed, toRefs } from "vue"
import type { Event } from "~~/types/content"
import { toParagraphs } from "~~/utils/paragraphs"

const props = defineProps<{
  event: Event
  accent?: "blue" | "grey" | "red"
}>()

const { event } = toRefs(props)

const eventUrl = computed(() => event.value.url ?? event.value.links?.[0]?.url ?? null)
const eventImages = computed(() => event.value.images ?? [])
const hasEventImages = computed(() => eventImages.value.length > 0)
const eventBlurbParagraphs = computed(() => toParagraphs(event.value.blurb))
const cardBackgroundClass = computed(() => {
  if (props.accent === "blue") {
    return "bg-jw_blue"
  }

  if (props.accent === "grey") {
    return "bg-jw_grey"
  }

  if (props.accent === "red") {
    return "bg-jw_red"
  }

  return ""
})

const metaPanelClass = computed(() => {
  if (props.accent === "blue" || props.accent === "grey") {
    return "bg-jw_red"
  }

  if (props.accent === "red") {
    return "bg-jw_blue"
  }

  return "bg-jw_blue"
})

const metaTextClass = computed(() =>
  props.accent === "blue" || props.accent === "grey" ? "text-white" : "text-slate-800"
)

const metaLabelClass = computed(() =>
  props.accent === "blue" || props.accent === "grey" ? "text-white/80" : "text-slate-800/70"
)

const bodyTitleClass = computed(() =>
  props.accent === "grey" || props.accent === "red" ? "text-white" : "text-slate-800"
)

const bodyTextClass = computed(() =>
  props.accent === "grey" || props.accent === "red" ? "text-white/90" : "text-slate-800/80"
)

const ctaClass = computed(() =>
  props.accent === "blue"
    ? "bg-jw_red text-white"
    : props.accent
      ? "bg-white text-jw_red"
      : "bg-jw_red text-white"
)

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
    class="grid gap-6 p-6"
    :class="[
      cardBackgroundClass,
      hasEventImages ? 'lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start' : 'grid-cols-1'
    ]"
  >
    <div>
      <h2 class="mt-2 text-[clamp(1.7rem,2vw,2.25rem)] leading-[1.05]" :class="bodyTitleClass">{{ event.title }}</h2>

      <dl class="mt-4 grid grid-cols-12 gap-4">
        <div class="grid col-span-3 p-2" :class="metaPanelClass">
          <dt class="text-[0.78rem] font-sans uppercase tracking-[0.12em]" :class="metaLabelClass">Date</dt>
          <dd class="m-0 break-words leading-[1.6]" :class="metaTextClass">
            {{ formatEventDateRange(event.dateStart, event.dateEnd) }}
          </dd>
        </div>

        <div v-if="eventTime" class="grid col-span-3 p-2" :class="metaPanelClass">
          <dt class="text-[0.78rem] font-sans uppercase tracking-[0.12em]" :class="metaLabelClass">Time</dt>
          <dd class="m-0 break-words leading-[1.6]" :class="metaTextClass">{{ eventTime }}</dd>
        </div>

        <div v-if="eventLocation" class="grid col-span-3 p-2" :class="metaPanelClass">
          <dt class="text-[0.78rem] font-sans uppercase tracking-[0.12em]" :class="metaLabelClass">Location</dt>
          <dd class="m-0 break-words leading-[1.6]" :class="metaTextClass">{{ eventLocation }}</dd>
        </div>
      </dl>

      <div v-if="eventBlurbParagraphs.length" class="mt-4 space-y-3 text-base leading-[1.7]" :class="bodyTextClass">
        <p v-for="(paragraph, index) in eventBlurbParagraphs" :key="index">{{ paragraph }}</p>
      </div>

      <div v-if="eventUrl" class="grid gap-1 justify-end mt-4">
        <dd>
          <NuxtLink
              :to="eventUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium no-underline"
              :class="ctaClass"
          >
            Go to the Event site!
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
</template>
