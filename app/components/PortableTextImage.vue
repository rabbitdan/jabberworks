<script setup lang="ts">
import type { SanityImageSource } from '@sanity/image-url'

const props = defineProps<{
  value: {
    asset: SanityImageSource
    alt?: string
  }
  index: number
  isInline: boolean
  renderNode: unknown
}>()

const { urlFor } = useSanityImage()
const src = computed(() => urlFor(props.value).width(900).url())
</script>

<template>
  <img :src="src" :alt="value.alt ?? ''" class="my-8 max-w-full" />
</template>
