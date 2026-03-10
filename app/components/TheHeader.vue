<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from "vue"

const header = useTemplateRef<HTMLElement>("header")

const updateHeaderHeight = () => {
  if (!import.meta.client || !header.value) {
    return
  }

  document.documentElement.style.setProperty("--jw-header-height", `${header.value.offsetHeight}px`)
}

onMounted(() => {
  updateHeaderHeight()
  window.addEventListener("resize", updateHeaderHeight)
})

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return
  }

  window.removeEventListener("resize", updateHeaderHeight)
})
</script>

<template>
  <header ref="header" class="flex items-center border-b border-gray-600">
    <div class="container flex items-center justify-between py-2">
      <a href="/" class="block">
        <img src="/mcintyre_heading.png" class="w-52" alt="Sarah McIntyre">
      </a>
      <TheNavigation></TheNavigation>
    </div>
  </header>
</template>

<style scoped>

</style>
