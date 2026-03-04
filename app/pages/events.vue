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
      ? event.dateStart >= today.value
      : event.dateStart < today.value
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

function setTimeFilter(value: TimeFilter) {
  timeFilter.value = value
}

function setTagFilter(value: string) {
  tagFilter.value = value
}
</script>

<template>
  <section class="events-page">
    <div class="events-page__hero">
      <p class="events-page__eyebrow">Event diary</p>
      <h1 class="events-page__title">Events arranged like the comics shelf, but all out in the open.</h1>
      <p class="events-page__intro">
        Each event sits in its own card with the key details up front: name, date, link,
        a short blurb, and a small gallery of event images.
      </p>
    </div>

    <div class="events-page__filters">
      <label class="events-page__field">
        <span>Time range</span>
        <select v-model="timeFilter" class="events-page__select">
          <option
            v-for="option in timeFilterOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </label>

      <label class="events-page__field">
        <span>Tag</span>
        <select v-model="tagFilter" class="events-page__select">
          <option value="all">All tags</option>
          <option
            v-for="tag in availableTags"
            :key="tag"
            :value="tag"
          >
            {{ tag }}
          </option>
        </select>
      </label>
    </div>

    <div class="events-page__quick-filters">
      <div class="events-page__quick-group">
        <button
          v-for="option in timeFilterOptions"
          :key="option.value"
          type="button"
          class="events-page__chip"
          :class="{ 'events-page__chip--active': timeFilter === option.value }"
          @click="setTimeFilter(option.value)"
        >
          {{ option.label }}
        </button>
      </div>

      <div class="events-page__quick-group">
        <button
          v-for="tag in tagQuickFilters"
          :key="tag"
          type="button"
          class="events-page__chip"
          :class="{ 'events-page__chip--active': tagFilter === tag }"
          @click="setTagFilter(tag)"
        >
          {{ tag === "all" ? "All tags" : tag }}
        </button>
      </div>
    </div>

    <div v-if="finalEvents.length" class="events-page__column">
      <EventCard
        v-for="event in finalEvents"
        :key="event.slug"
        :event="event"
      />
    </div>

    <p v-else class="events-page__empty">
      No events match these filters.
    </p>
  </section>
</template>

<style scoped>
.events-page {
  width: min(1080px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 3rem 0 5rem;
}

.events-page__hero {
  padding: 2rem;
  border-radius: 2rem;
  background:
    radial-gradient(circle at top left, rgba(254, 240, 138, 0.8), transparent 36%),
    radial-gradient(circle at right bottom, rgba(251, 191, 36, 0.22), transparent 28%),
    linear-gradient(145deg, #fff7ed, #fffbeb 58%, #ffffff);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}

.events-page__eyebrow {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b45309;
}

.events-page__title {
  margin: 0.75rem 0 0;
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  line-height: 0.95;
  max-width: 12ch;
  color: #111827;
}

.events-page__intro {
  margin: 1.25rem 0 0;
  max-width: 42rem;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(31, 41, 55, 0.82);
}

.events-page__filters {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.events-page__field {
  display: grid;
  gap: 0.5rem;
  font-weight: 700;
  color: #1f2937;
}

.events-page__field span {
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(31, 41, 55, 0.72);
}

.events-page__select {
  appearance: none;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #111827;
  font: inherit;
}

.events-page__quick-filters {
  margin-top: 1rem;
  display: grid;
  gap: 0.75rem;
}

.events-page__quick-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.events-page__chip {
  padding: 0.55rem 0.9rem;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  color: #1f2937;
  font: inherit;
  cursor: pointer;
}

.events-page__chip--active {
  border-color: rgba(180, 83, 9, 0.3);
  background: #b45309;
  color: #fff;
}

.events-page__column {
  margin-top: 2rem;
  display: grid;
  gap: 1.5rem;
}

.events-page__empty {
  margin: 2rem 0 0;
  padding: 1.25rem 1.4rem;
  border: 1px dashed rgba(15, 23, 42, 0.16);
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.72);
  color: rgba(31, 41, 55, 0.82);
}
</style>
