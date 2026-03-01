<script setup lang="ts">
import type { Book } from "~~/types/content"

defineProps<{
  books: Book[]
  heading?: string
}>()
</script>

<template>
  <section v-if="books?.length" class="mt-8">
    <h2 v-if="heading" class="text-xl font-semibold">{{ heading }}</h2>
    <div class="mt-4 grid gap-4 md:grid-cols-2">
      <BookCard v-for="b in books" :key="b.slug" :book="b" />
    </div>
  </section>
</template>
