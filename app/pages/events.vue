<script setup lang="ts">
import { events } from "~~/data/events"

useSeoMeta({
  title: "Sarah — Events",
  description: "Browse Sarah's upcoming events, appearances, and workshops."
})
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

    <div class="events-page__column">
      <EventCard
        v-for="event in events"
        :key="event.slug"
        :event="event"
      />
    </div>
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

.events-page__column {
  margin-top: 2rem;
  display: grid;
  gap: 1.5rem;
}
</style>
