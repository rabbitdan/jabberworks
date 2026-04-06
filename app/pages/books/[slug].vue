<script setup lang="ts">
import type { Book } from "~~/types/content"
import { firstParagraph } from "~~/utils/paragraphs"
const { $sanity } = useNuxtApp()

const route = useRoute()
const slug = String(route.params.slug)

const { data: book } = await useAsyncData<Book | null>(
  `book-${slug}`,
  () => $sanity.fetch<Book | null>(`
    *[_type == "book" && slug.current == $slug][0] {
      _type,
      "slug": slug.current,
      title,
      "cover": {
        "src": cover.asset->url,
        "alt": cover.alt
      },
      "backgroundTileUrl": backgroundTile.asset->url,
      "blurb": pt::text(blurb),
      "description": pt::text(description),
      buyLinks[] {
        url,
        linkText
      },
      activitySheets[] {
        "thumb": {
          "src": thumb.asset->url,
          "alt": thumb.alt
        },
        "pdfUrl": pdfUrl.asset->url,
        title,
        linkText
      },
      youtube {
        url,
        title
      },
      videos[] {
        url,
        heading,
        "text": pt::text(text)
      },
      miscPanel {
        heading,
        "text": pt::text(text)
      },
      pageLink
    }
  `, { slug })
)

if (!book.value) {
  throw createError({ statusCode: 404, statusMessage: "Book not found" })
}

useSeoMeta({
  title: () => book.value?.title ?? "Book",
  description: () => firstParagraph(book.value?.description ?? book.value?.blurb),
  ogTitle: () => book.value?.title ?? "Book",
  ogDescription: () => firstParagraph(book.value?.description ?? book.value?.blurb),
  ogImage: () => book.value?.cover.src ?? ""
})
</script>

<template>
  <BookPageTemplate :book="book!" />
</template>
