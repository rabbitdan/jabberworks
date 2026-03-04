<script setup lang="ts">
const links = [
  { label: 'About', to: '/about' },
  { label: 'Comics', to: '/comics' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Events', to: '/events' },
]
</script>

<template>
  <nav aria-label="Primary">
    <ul class="flex flex-wrap items-center justify-end">
      <li v-for="link in links" :key="link.to" class="inline-block mr-6">
        <NuxtLink :to="link.to" class="font-heading">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
