<script setup lang="ts">
import type { EditorialCalloutSection, RichTextParagraph, RichTextSpan } from "~~/types/content"

defineProps<{
  section: EditorialCalloutSection
}>()

function isLinkedParagraph(
  paragraph: RichTextParagraph,
): paragraph is Extract<RichTextParagraph, { spans: RichTextSpan[] }> {
  return typeof paragraph === "object" && paragraph !== null && Array.isArray(paragraph.spans)
}

function isTextObjectParagraph(
  paragraph: RichTextParagraph,
): paragraph is Extract<RichTextParagraph, { text: string }> {
  return typeof paragraph === "object" && paragraph !== null && typeof paragraph.text === "string"
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}
</script>

<template>
  <section class="flex items-center justify-center bg-jw_blue p-8 md:p-10">
    <p v-if="section.eyebrow" class="max-auto text-sm uppercase">
      {{ section.eyebrow }}
    </p>
    <h2 v-if="section.title" class="mt-3 mx-auto max-w-2xl text-3xl">
      {{ section.title }}
    </h2>
    <div v-if="section.paragraphs?.length" class="mt-4 max-w-3xl space-y-4 text-base text-center">
      <p
        v-for="(paragraph, paragraphIndex) in section.paragraphs"
        :key="paragraphIndex"
        class="block mx-auto font-heading"
      >
        <template v-if="isLinkedParagraph(paragraph)">
          <template v-for="(span, spanIndex) in paragraph.spans" :key="spanIndex">
            <a
              v-if="span.href"
              :href="span.href"
              class="underline underline-offset-4"
              :target="span.external || isExternalHref(span.href) ? '_blank' : undefined"
              :rel="span.external || isExternalHref(span.href) ? 'noreferrer' : undefined"
            >
              <strong v-if="span.strong">{{ span.text }}</strong>
              <template v-else>{{ span.text }}</template>
            </a>
            <strong v-else-if="span.strong">{{ span.text }}</strong>
            <template v-else>{{ span.text }}</template>
          </template>
        </template>
        <template v-else-if="isTextObjectParagraph(paragraph)">
          {{ paragraph.text }}
        </template>
        <template v-else>
          {{ paragraph }}
        </template>
      </p>
    </div>
  </section>
</template>
