<script setup lang="ts">
import { computed, ref } from "vue"
import { events } from "~~/data/events"

type TimeFilter = "upcoming" | "past" | "all"

function todayIso(): string {
  return new Date().toISOString().slice(0, 10)
}

useSeoMeta({
  title: "Sarah — Events",
  description: "Browse Sarah's upcoming events, appearances, and workshops."
})

const timeFilter = ref<TimeFilter>("upcoming")
const tagFilter = ref("all")

const today = computed(() => todayIso())

const timeFilterOptions: Array<{ label: string; value: TimeFilter }> = [
  { label: "Upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
  { label: "All", value: "all" }
]

const sortedEvents = computed(() =>
  [...events].sort((left, right) => left.dateStart.localeCompare(right.dateStart))
)

const availableTags = computed(() =>
  [...new Set(events.flatMap((event) => event.tags ?? []))]
    .sort((left, right) => left.localeCompare(right))
)

const filteredByTime = computed(() => {
  if (timeFilter.value === "all") {
    return sortedEvents.value
  }

  return sortedEvents.value.filter((event) =>
    timeFilter.value === "upcoming"
      ? (event.dateEnd ?? event.dateStart) >= today.value
      : (event.dateEnd ?? event.dateStart) < today.value
  )
})

const filteredByTag = computed(() => {
  if (tagFilter.value === "all") {
    return filteredByTime.value
  }

  return filteredByTime.value.filter((event) => event.tags?.includes(tagFilter.value))
})

const finalEvents = computed(() =>
  [...filteredByTag.value].sort((left, right) =>
    timeFilter.value === "past"
      ? right.dateStart.localeCompare(left.dateStart)
      : left.dateStart.localeCompare(right.dateStart)
  )
)

const tagQuickFilters = computed(() => ["all", ...availableTags.value])

function setTimeFilter(value: TimeFilter) { timeFilter.value = value }
function setTagFilter(tag: string) { tagFilter.value = tag }

</script>

<template>
  <div class="container">
  <section class="content">
      <div class="flex items-center py-8 border-b border-black">
        <h1 class="heading text-4xl mr-6">Events</h1>
        <p class="text">
          WHAT have I been up to? Keep checking here to see if I’m doing any events near you!
        </p>
      </div>

      <div class="relative mt-4 grid grid-cols-2 gap-3">
        <details class="relative bg-jw_blue">
          <summary class="flex cursor-pointer select-none list-none items-center justify-between px-3 py-2 font-heading [&::-webkit-details-marker]:hidden">
            Time range
            <svg class="size-5 shrink-0 text-jw_red transition-transform [[open]_&]:rotate-180" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M4 12l12 10 12-10"/>
            </svg>
          </summary>
          <div class="absolute left-0 right-0 top-full z-10 flex flex-wrap gap-2.5 border border-t-0 bg-jw_blue p-3">
            <button
                v-for="option in timeFilterOptions"
                :key="option.value"
                type="button"
                class="cursor-pointer rounded-full border border-black px-3 py-2"
                :class="timeFilter === option.value ? 'bg-jw_red border-jw_red text-white' : 'bg-white text-black'"
                @click="setTimeFilter(option.value)"
            >
              {{ option.label }}
            </button>
          </div>
        </details>

        <details class="relative bg-jw_blue">
          <summary class="flex cursor-pointer select-none list-none items-center justify-between px-3 py-2 font-heading [&::-webkit-details-marker]:hidden">
            Tags
            <svg class="size-5 shrink-0 text-jw_red transition-transform [[open]_&]:rotate-180" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M4 12l12 10 12-10"/>
            </svg>
          </summary>
          <div class="absolute left-0 right-0 top-full z-10 flex flex-wrap gap-2.5 border-t-0  bg-jw_blue p-3">
            <button
                v-for="tag in tagQuickFilters"
                :key="tag"
                type="button"
                class="cursor-pointer rounded-full px-3 py-2"
                :class="tagFilter === tag ? 'bg-jw_red border-jw_red text-white' : 'bg-white text-black'"
                @click="setTagFilter(tag)"
            >
              {{ tag === "all" ? "All tags" : tag }}
            </button>
          </div>
        </details>
      </div>

      <div v-if="finalEvents.length" class="mt-8 grid gap-6">
        <div
            v-for="event in finalEvents"
            :key="`${event.title}-${event.dateStart}`"
        >
          <EventCard :event="event" />
        </div>
      </div>

      <p v-else class="mt-8 border border-dashed border-slate-900/15 bg-white/70 px-6 py-5 text-gray-800/80">
        No events match these filters.
      </p>
  </section>
  </div>
</template>
