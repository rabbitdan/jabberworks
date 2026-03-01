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

  const existing = (window as Window & { Splide?: SplideConstructor }).Splide
  if (existing) {
    return existing
  }

  await new Promise<void>((resolve, reject) => {
    const onReady = () => {
      const ctor = (window as Window & { Splide?: SplideConstructor }).Splide
      if (ctor) {
        resolve()
      } else {
        reject(new Error("Splide did not load"))
      }
    }

    const current = document.querySelector<HTMLScriptElement>('script[data-splide-cdn="true"]')
    if (current) {
      current.addEventListener("load", onReady, { once: true })
      current.addEventListener("error", () => reject(new Error("Splide failed to load")), { once: true })
      return
    }

    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"
    script.async = true
    script.dataset.splideCdn = "true"
    script.addEventListener("load", onReady, { once: true })
    script.addEventListener("error", () => reject(new Error("Splide failed to load")), { once: true })
    document.head.appendChild(script)
  })

  return (window as Window & { Splide?: SplideConstructor }).Splide || null
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
      class="comic-reader"
      role="dialog"
      aria-modal="true"
      :aria-label="`${comic.title} comic reader`"
      @click.self="emit('close')"
    >
      <div class="comic-reader__panel">
        <div class="comic-reader__topbar">
          <div>
            <p class="comic-reader__eyebrow">Comic reader</p>
            <h2 class="comic-reader__title">{{ comic.title }}</h2>
          </div>

          <button type="button" class="comic-reader__close" @click="emit('close')">
            Close
          </button>
        </div>

        <div class="splide comic-reader__carousel">
          <div class="splide__track">
            <ul class="splide__list">
              <li v-for="panel in comic.panels" :key="panel.src" class="splide__slide">
                <figure class="comic-reader__frame">
                  <img :src="panel.src" :alt="panel.alt" class="comic-reader__image">
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
.comic-reader {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
}

.comic-reader__panel {
  width: min(1100px, 100%);
  max-height: min(90vh, 900px);
  overflow: auto;
  padding: 1.25rem;
  border-radius: 1.5rem;
  background:
    radial-gradient(circle at top left, rgba(255, 251, 235, 0.95), rgba(255, 255, 255, 0.98)),
    #fff;
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.28);
}

.comic-reader__topbar {
  display: flex;
  gap: 1rem;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.comic-reader__eyebrow {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #b45309;
}

.comic-reader__title {
  margin: 0.4rem 0 0;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1.1;
  color: #1f2937;
}

.comic-reader__close {
  flex-shrink: 0;
  border: 0;
  border-radius: 999px;
  padding: 0.8rem 1rem;
  background: #1f2937;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.comic-reader__carousel {
  padding-bottom: 3rem;
}

.comic-reader__frame {
  margin: 0;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fffdf8;
}

.comic-reader__image {
  display: block;
  width: 100%;
  height: auto;
}

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
  background: #b45309;
  transform: scale(1.1);
}

@media (max-width: 767px) {
  .comic-reader__panel {
    padding: 1rem;
  }

  .comic-reader__topbar {
    flex-direction: column;
  }

  .comic-reader__close {
    width: 100%;
  }
}
</style>
