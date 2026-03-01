<script setup lang="ts">
import type { Comic } from "~~/types/content"

defineProps<{
  comic: Comic
}>()

defineEmits<{
  open: [comic: Comic]
}>()
</script>

<template>
  <article class="comic-card">
    <div class="comic-card__media">
      <img
        :src="comic.thumbnail.src"
        :alt="comic.thumbnail.alt || comic.title"
        loading="lazy"
        class="comic-card__image"
      >
    </div>

    <div class="comic-card__body">
      <p class="comic-card__eyebrow">Comic {{ comic.panels.length }} panels</p>
      <h2 class="comic-card__title">{{ comic.title }}</h2>
      <p class="comic-card__blurb">{{ comic.blurb }}</p>

      <button type="button" class="comic-card__link" @click="$emit('open', comic)">
        {{ comic.ctaLabel || "Read comic" }}
      </button>
    </div>
  </article>
</template>

<style scoped>
.comic-card {
  display: grid;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 1.5rem;
  background:
    linear-gradient(135deg, rgba(255, 247, 237, 0.92), rgba(255, 255, 255, 0.98)),
    #fff;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
}

.comic-card__media {
  overflow: hidden;
  border-radius: 1rem;
  background: #fff8ec;
}

.comic-card__image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.comic-card__eyebrow {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #b45309;
}

.comic-card__title {
  margin: 0.45rem 0 0;
  font-size: clamp(1.7rem, 2vw, 2.25rem);
  line-height: 1.05;
  color: #1f2937;
}

.comic-card__blurb {
  margin: 1rem 0 0;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(31, 41, 55, 0.82);
}

.comic-card__link {
  margin-top: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.25rem;
  border: 0;
  border-radius: 999px;
  background: #1f2937;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;
}

.comic-card__link:hover,
.comic-card__link:focus-visible {
  background: #111827;
  transform: translateY(-1px);
}

@media (min-width: 768px) {
  .comic-card {
    grid-template-columns: minmax(240px, 320px) 1fr;
  }
}
</style>
