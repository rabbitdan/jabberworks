<script setup lang="ts">
defineProps<{
  credit?: string
}>()
</script>

<template>
  <p
    v-if="credit"
    class="absolute bottom-0 left-0 m-0 bg-jw_red px-3 py-1 font-sans text-xs uppercase text-jw_blue"
  >
    {{ credit }}
  </p>
</template>
