<script setup lang="ts">
import type { EditorialPage } from "~~/types/content"

type SanityEditorialPage = EditorialPage & {
  seoTitle?: string
  seoDescription?: string
}

const { $sanity } = useNuxtApp()
const route = useRoute()
const slug = route.params.slug as string

const { data: page } = await useAsyncData<SanityEditorialPage | null>(`editorial-${slug}`, () =>
  $sanity.fetch<SanityEditorialPage | null>(`
    *[_type == "editorialPage" && slug.current == $slug][0] {
      "hero": hero {
        eyebrow,
        title,
        intro,
        paragraphs[_type == "block"] {
          "_type": _type,
          "markDefs": markDefs[_type == "link"] { "_key": _key, "href": href, "blank": blank },
          "spans": children[] {
            "text": text,
            "strong": "strong" in marks,
            "marks": marks
          }
        }
      },
      "sections": sections[] {
        "id": _key,
        "_type": select(
          _type == "editorialTextImageSection" => "textImage",
          _type == "editorialFeatureImageSection" => "featureImage",
          _type == "editorialCalloutSection" => "callout",
          _type == "editorialTwoColumnSection" => "twoColumn",
          _type == "editorialSplitStackSection" => "splitStack"
        ),
        eyebrow,
        title,
        overline,
        credit,
        textPosition,
        creditPosition,
        imageSide,
        imageWidth,
        textWidth,
        "paragraphs": paragraphs[_type == "block"] {
          "_type": _type,
          "markDefs": markDefs[_type == "link"] { "_key": _key, "href": href, "blank": blank },
          "spans": children[] {
            "text": text,
            "strong": "strong" in marks,
            "marks": marks
          }
        },
        "text": pt::text(text),
        "image": image {
          "src": asset->url,
          alt,
          photographerCredit
        },
        "primaryImage": primaryImage {
          "src": asset->url,
          alt,
          photographerCredit
        },
        "secondaryImage": secondaryImage {
          "src": asset->url,
          alt,
          photographerCredit
        },
        "left": left {
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
          youtube
        },
        "right": right {
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
          youtube
        }
      },
      "comics": comics[]-> {
        "_type": "comic",
        "slug": slug.current,
        title,
        "thumbnail": thumbnail[0] {
          "src": coalesce(asset->url, url),
          "alt": alt
        },
        "blurb": pt::text(blurb),
        ctaLabel,
        "panels": panels[] {
          "src": coalesce(asset->url, url),
          "alt": alt
        }
      },
      seoTitle,
      seoDescription
    }
  `, { slug })
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" })
}

useSeoMeta({
  title: () => page.value?.seoTitle,
  description: () => page.value?.seoDescription,
})
</script>

<template>
  <EditorialPageTemplate :page="page!" />
</template>
