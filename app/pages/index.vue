<script setup lang="ts">
import type { HomePage } from "~~/types/content"
const { $sanity } = useNuxtApp()

const { data: page } = await useAsyncData<HomePage>('homepage', () =>
  $sanity.fetch(`
    *[_type == "homepage"][0] {
      "hero": hero {
        "id": "hero",
        "_type": "textImage",
        eyebrow,
        title,
        "paragraphs": paragraphs[_type == "block"] {
          "_type": _type,
          "markDefs": markDefs[_type == "link"] { "_key": _key, "href": href, "blank": blank },
          "spans": children[] {
            "text": text,
            "strong": "strong" in marks,
            "marks": marks
          }
        },
        "image": image {
          "src": asset->url,
          alt,
          photographerCredit
        },
        imageSide,
        imageWidth,
        textWidth
      },
      "seriesSections": seriesSections[]-> {
        _type,
        "id": _id,
        title,
        "blurb": blurb[_type == "block"] {
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
        "cover": {
          "src": cover.asset->url,
          "alt": cover.alt,
          "url": cover.linkUrl
        },
        "thumbnailCharacter": {
          "src": thumbnailCharacter.asset->url,
          "alt": thumbnailCharacter.alt,
          "height": thumbnailCharacter.height
        },
        cta,
        "featuredBooks": featuredBooks[]-> {
          _type,
          "slug": slug.current,
          title,
          "cover": {
            "src": cover.asset->url,
            "alt": cover.alt
          },
          pageLink
        }
      }
    }
  `)
)

useSeoMeta({
  title: "Sarah McIntyre - Artist and Illustrator",
  description: "Explore Sarah's illustrated books and download activity-sheets sheets."
})
</script>

<template>
    <div class="container">
      <!-- Hero -->
      <EditorialTextImageSectionBlock
        v-if="page?.hero"
        :section="page.hero"
        class="mt-10"
      />
    </div>

    <!-- Series blocks -->
    <div class="container">
      <SeriesSectionBlock
          v-for="(section, index) in (page?.seriesSections ?? [])"
          :key="section.id"
          :section="section"
          :featured-books="section.featuredBooks"
          :loop-index="index"
      />
    </div>
</template>
