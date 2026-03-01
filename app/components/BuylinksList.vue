<script setup lang="ts">
import type { BuyLink } from "~~/types/content"

defineProps<{
  links: BuyLink[]
  heading?: string
}>()
</script>

<template>
  <section v-if="links?.length" class="mt-8">
    <h2 class="text-xl font-semibold">{{ heading || "Buy the book" }}</h2>
    <ul class="mt-3 space-y-2">
      <li v-for="(l, i) in links" :key="i">
        <a
            class="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-black/5"
            :href="l.url"
            target="_blank"
            rel="noreferrer"
        >
          <span>{{ l.linkText }}</span>
          <span aria-hidden="true" class="opacity-60">↗</span>
        </a>
      </li>
    </ul>
  </section>
</template>
