<script setup lang="ts">
import type { EditorialTextImageSection, FaqItem } from "~~/types/content"

const { $sanity } = useNuxtApp()

type FaqPageData = {
  title: string
  editorialTextImageSection?: EditorialTextImageSection
  items: FaqItem[]
  seoTitle?: string
  seoDescription?: string
}

const { data: faqPage } = await useAsyncData('faqPage', () =>
  $sanity.fetch<FaqPageData>(`
    *[_type == "faqPage"][0] {
      title,
      "editorialTextImageSection": editorialTextImageSection {
        "_type": "textImage",
        "_key": _key,
        eyebrow,
        title,
        imageSide,
        imageWidth,
        textWidth,
        "paragraphs": paragraphs[_type == "block"] {
          "_type": _type,
          "style": style,
          "listItem": listItem,
          "markDefs": markDefs[_type == "link"] { "_key": _key, "href": href, "blank": external },
          "spans": children[] {
            "text": text,
            "strong": "strong" in marks,
            "em": "em" in marks,
            "marks": marks
          }
        },
        "image": image {
          "src": asset->url,
          alt,
          photographerCredit,
          "sanityImage": @
        }
      },
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
  <main class="container mx-auto px-6 py-16 sm:py-20">
    <header class="max-w-2xl">
      <h1 class="mt-3 text-4xl tracking-tight text-gray-950 sm:text-5xl">
        {{ faqPage?.title ?? "FAQs" }}
      </h1>
    </header>

    <div v-if="faqPage?.editorialTextImageSection" class="mt-12">
      <EditorialTextImageSectionBlock :section="faqPage.editorialTextImageSection" />
    </div>

    <section class="mt-10 sm:mt-12" aria-label="Frequently asked questions">
      <FaqAccordion :items="faqItems" :single="true" />
    </section>
  </main>
</template>
