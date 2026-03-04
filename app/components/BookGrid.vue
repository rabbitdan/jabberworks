<script setup lang="ts">
import type { Book } from "~~/types/content"

defineProps<{
  books: Book[]
  heading?: string
}>()
</script>

<template>
  <section v-if="books?.length" class="mt-8">
    <div class="grid gap-4 grid-cols-8">
      <BookCard v-for="b in books" :key="b.slug" :book="b" />
    </div>
  </section>
</template>
