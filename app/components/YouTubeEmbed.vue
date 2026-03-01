<script setup lang="ts">
const props = defineProps<{
  url: string
  title?: string
}>()

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url)
    // youtu.be/ID
    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "") || null
    // youtube.com/watch?v=ID
    if (u.searchParams.get("v")) return u.searchParams.get("v")
    // youtube.com/embed/ID
    const parts = u.pathname.split("/").filter(Boolean)
    const embedIndex = parts.indexOf("embed")
    if (embedIndex >= 0 && parts[embedIndex + 1]) return parts[embedIndex + 1]
    return null
  } catch {
    return null
  }
}

const videoId = computed(() => getYouTubeId(props.url))

const embedSrc = computed(() => {
  if (!videoId.value) return null
  const base = `https://www.youtube-nocookie.com/embed/${videoId.value}`
  // modestbranding etc is optional; keep minimal
  return `${base}?rel=0`
})
</script>

<template>
  <section v-if="embedSrc" class="mt-8">
    <h2 class="text-xl font-semibold">Video</h2>
    <div class="mt-3 aspect-video w-full overflow-hidden rounded-2xl bg-black/5">
      <iframe
          class="h-full w-full"
          :src="embedSrc"
          :title="title || 'YouTube video'"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
      />
    </div>
  </section>

  <section v-else class="mt-8">
    <h2 class="text-xl font-semibold">Video</h2>
    <p class="mt-2 text-sm opacity-80">
      Video link is invalid or missing a YouTube id.
      <a class="underline" :href="url" target="_blank" rel="noreferrer">Open video</a>
    </p>
  </section>
</template>
