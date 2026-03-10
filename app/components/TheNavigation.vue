<script setup lang="ts">
const links = [
  { label: 'About', to: '/about' },
  { label: 'Shop', to: 'https://shop.jabberworks.co.uk' },
  { label: 'Comics', to: '/comics' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Events', to: '/events' },
]
</script>

<template>
  <nav aria-label="Primary">
    <ul class="flex flex-wrap items-center justify-end">
      <li v-for="link in links" :key="link.to" class="inline-block">
        <NuxtLink :to="link.to" class="flex items-center font-heading leading-none pt-2 pb-1 px-4 rounded-2xl hover:bg-jw_red hover:text-jw_blue">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
