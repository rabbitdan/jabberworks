<script setup lang="ts">
import type { Event } from "~~/types/content"

defineProps<{
  event: Event
}>()
</script>

<template>
  <article class="event-card">
    <div class="event-card__body">
      <p class="event-card__eyebrow">Event</p>
      <h2 class="event-card__title">{{ event.title }}</h2>

      <dl class="event-card__meta">
        <div class="event-card__meta-row">
          <dt>Date</dt>
          <dd>{{ event.date }}</dd>
        </div>

        <div class="event-card__meta-row">
          <dt>URL</dt>
          <dd>
            <a
              :href="event.url"
              class="event-card__url"
              target="_blank"
              rel="noreferrer"
            >
              {{ event.url }}
            </a>
          </dd>
        </div>
      </dl>

      <p class="event-card__blurb">{{ event.blurb }}</p>
    </div>

    <div
      class="event-card__gallery"
      :class="`event-card__gallery--${event.images.length}`"
    >
      <img
        v-for="(image, index) in event.images"
        :key="`${event.slug}-${index}`"
        :src="image.src"
        :alt="image.alt"
        loading="lazy"
        class="event-card__image"
      >
    </div>
  </article>
</template>

<style scoped>
.event-card {
  display: grid;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 1.5rem;
  background:
    linear-gradient(135deg, rgba(255, 247, 237, 0.92), rgba(255, 255, 255, 0.98)),
    #fff;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
}

.event-card__eyebrow {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #b45309;
}

.event-card__title {
  margin: 0.45rem 0 0;
  font-size: clamp(1.7rem, 2vw, 2.25rem);
  line-height: 1.05;
  color: #1f2937;
}

.event-card__meta {
  margin: 1rem 0 0;
  display: grid;
  gap: 0.75rem;
}

.event-card__meta-row {
  display: grid;
  gap: 0.2rem;
}

.event-card__meta-row dt {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(31, 41, 55, 0.68);
}

.event-card__meta-row dd {
  margin: 0;
  color: #1f2937;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.event-card__url {
  color: #9a3412;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
}

.event-card__blurb {
  margin: 1rem 0 0;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(31, 41, 55, 0.82);
}

.event-card__gallery {
  display: grid;
  gap: 0.9rem;
}

.event-card__gallery--1 {
  grid-template-columns: 1fr;
}

.event-card__gallery--2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.event-card__gallery--3 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.event-card__gallery--3 .event-card__image:first-child {
  grid-column: 1 / -1;
}

.event-card__image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 1rem;
  background: #fff8ec;
}

@media (min-width: 900px) {
  .event-card {
    grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
    align-items: start;
  }
}
</style>
