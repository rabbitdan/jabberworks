<script setup lang="ts">
import type { Comic } from "~~/types/content"

type SplideInstance = {
  mount: () => void
  destroy: (completely?: boolean) => void
}

type SplideConstructor = new (
  target: Element,
  options: Record<string, unknown>
) => SplideInstance

const props = defineProps<{
  comic: Comic
}>()

const emit = defineEmits<{
  close: []
}>()

const rootRef = ref<HTMLElement | null>(null)
let splide: SplideInstance | null = null

const loadSplide = async () => {
  if (!import.meta.client) {
    return null
  }

  const module = await import("@splidejs/splide")
  return module.Splide as SplideConstructor
}

const mountCarousel = async () => {
  const element = rootRef.value?.querySelector(".splide")
  if (!element) {
    return
  }

  const Splide = await loadSplide()
  if (!Splide) {
    return
  }

  splide?.destroy(true)
  splide = new Splide(element, {
    type: "slide",
    perPage: 1,
    pagination: true,
    arrows: true,
    rewind: true,
    drag: true,
    keyboard: "global",
    gap: "1rem",
    autoHeight: true,
    classes: {
      arrows: "splide__arrows comic-reader__arrows",
      arrow: "splide__arrow comic-reader__arrow",
      prev: "splide__arrow--prev comic-reader__arrow--prev",
      next: "splide__arrow--next comic-reader__arrow--next",
      pagination: "splide__pagination comic-reader__pagination",
      page: "splide__pagination__page comic-reader__page"
    }
  })
  splide.mount()
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    emit("close")
  }
}

onMounted(async () => {
  document.body.style.overflow = "hidden"
  window.addEventListener("keydown", onKeydown)
  await nextTick()
  await mountCarousel()
})

onBeforeUnmount(() => {
  document.body.style.overflow = ""
  window.removeEventListener("keydown", onKeydown)
  splide?.destroy(true)
})
</script>

<template>
  <Teleport to="body">
    <div
      ref="rootRef"
      class="fixed inset-0 z-[60] grid place-items-center bg-slate-900/70 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      :aria-label="`${comic.title} comic reader`"
      @click.self="emit('close')"
    >
      <div
        class="max-h-[94vh] w-full max-w-[1100px] overflow-auto p-4 shadow-[0_30px_80px_rgba(15,23,42,0.28)] md:max-h-[90vh] md:p-5 bg-white"
      >
        <div class="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <h2 class="mt-1 text-[clamp(1.5rem,2vw,2.2rem)] leading-tight text-slate-800">
              {{ comic.title }}
            </h2>
          </div>

          <button
            type="button"
            class="w-full shrink-0 px-4 py-3 font-bold text-white md:w-auto"
            @click="emit('close')"
          >
            Close
          </button>
        </div>

        <div class="splide pb-12">
          <div class="splide__track">
            <ul class="splide__list">
              <li v-for="panel in comic.panels" :key="panel.src" class="splide__slide">
                <figure class="m-0 overflow-hidden flex justify-center items-center">
                  <img :src="panel.src" :alt="panel.alt" class="block h-full w-auto">
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
:deep(.comic-reader__arrow) {
  width: 2.8rem;
  height: 2.8rem;
  background: rgba(31, 41, 55, 0.92);
  opacity: 1;
}

:deep(.comic-reader__arrow svg) {
  fill: #fff;
}

:deep(.comic-reader__pagination) {
  bottom: -1rem;
}

:deep(.comic-reader__page) {
  width: 0.7rem;
  height: 0.7rem;
  background: rgba(31, 41, 55, 0.25);
  opacity: 1;
}

:deep(.comic-reader__page.is-active) {
  background: #212121;
  transform: scale(1.1);
}
</style>
