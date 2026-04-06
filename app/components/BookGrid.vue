<script setup lang="ts">
import type { Book } from "~~/types/content"
defineProps<{
  books: Book[]
  heading?: string
}>()
</script>

<template>
  <section v-if="books?.length" class="mt-8">
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:flex flex-row lg: justify-center gap-2 lg:gap-3 ">
      <BookCard v-for="b in books" :key="b.slug" :book="b" />
    </div>
  </section>
</template>
