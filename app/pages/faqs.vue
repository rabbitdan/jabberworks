<script setup lang="ts">
import type { FaqItem } from "~~/types/content"

const { $sanity } = useNuxtApp()

const { data: faqPage } = await useAsyncData('faqPage', () =>
  $sanity.fetch<{ title: string; items: FaqItem[]; seoTitle?: string; seoDescription?: string }>(`
    *[_type == "faqPage"][0] {
      title,
      "items": items[] {
        question,
        "answer": answer[] {
          "_type": select(
            _type == "faqImage" => "image",
            _type == "youtubeBlock" => "youtube",
            _type
          ),
          html,
          paragraphs,
          "image": image {
            "src": asset->url,
            alt,
            href,
            caption
          },
          youtube
        }
      },
      seoTitle,
      seoDescription
    }
  `)
)

const faqItems = computed(() => faqPage.value?.items ?? [])

useSeoMeta({
  title: () => faqPage.value?.seoTitle ?? "FAQs",
  description: () => faqPage.value?.seoDescription ?? "Find quick answers about Sarah's books, resources, events, and how to explore the site.",
})
</script>

<template>
  <main class="mx-auto max-w-4xl px-6 py-16 sm:py-20">
    <header class="max-w-2xl">
      <h1 class="mt-3 text-4xl tracking-tight text-gray-950 sm:text-5xl">
        Frequently asked questions
      </h1>
      <p class="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
        Quick answers about the books, classroom resources, events, and how the site is
        organised.
      </p>
    </header>

    <section class="mt-10 sm:mt-12" aria-label="Frequently asked questions">
      <FaqAccordion :items="faqItems" :single="true" />
    </section>
  </main>
</template>
