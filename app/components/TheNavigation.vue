<script setup lang="ts">
import { ref, watch } from "vue"

const links = [
  { label: "About", to: "/about" },
  { label: "Shop", to: "https://shop.jabberworks.co.uk" },
  { label: "Comics", to: "/comics" },
  { label: "Contact", to: "/contact" },
  { label: "FAQs", to: "/faqs" },
  { label: "Events", to: "/events" },
]

const route = useRoute()
const isOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <nav class="relative" aria-label="Primary">
    <button
      type="button"
      class="inline-flex items-center rounded-full border border-black px-4 pb-2 pt-3 font-heading text-base leading-none text-black hover:bg-jw_red hover:text-jw_blue lg:hidden"
      :aria-expanded="isOpen ? 'true' : 'false'"
      aria-controls="mobile-navigation"
      @click="isOpen = !isOpen"
    >
      {{ isOpen ? "Close" : "Menu" }}
    </button>

    <div
      v-if="isOpen"
      id="mobile-navigation"
      class="fixed inset-x-0 bottom-0 top-[var(--jw-header-height,6rem)] z-20 overflow-y-auto bg-white px-4 py-6 lg:hidden"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="link in links" :key="`mobile-${link.to}`">
          <NuxtLink
            :to="link.to"
            class="flex items-center rounded-2xl px-4 pb-3 pt-4 font-heading text-2xl leading-none hover:bg-jw_red hover:text-jw_blue"
            @click="isOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <ul class="hidden flex-wrap items-center justify-end lg:flex">
      <li v-for="link in links" :key="link.to" class="inline-block">
        <NuxtLink :to="link.to" class="flex items-center rounded-2xl px-4 pb-1 pt-2 font-heading leading-none hover:bg-jw_red hover:text-jw_blue">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
