<script setup lang="ts">
const links = [
  { label: 'About', to: '/about' },
  { label: 'Comics', to: '/comics' },
  { label: 'Contact', to: '/contact' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Events', to: '/events' },
]
</script>

<template>
  <nav aria-label="Primary">
    <ul>
      <li v-for="link in links" :key="link.to">
        <NuxtLink :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
