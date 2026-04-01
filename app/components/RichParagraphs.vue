<script setup lang="ts">
import type { RichTextParagraph, RichTextSpan, RichTextMarkDef } from "~~/types/content"

defineProps<{
  paragraphs: RichTextParagraph[]
  paragraphClass?: string
}>()

function isSpansParagraph(p: RichTextParagraph): p is { markDefs?: RichTextMarkDef[], spans: RichTextSpan[] } {
  return typeof p === "object" && p !== null && "spans" in p
}

function isTextParagraph(p: RichTextParagraph): p is { text: string } {
  return typeof p === "object" && p !== null && "text" in p
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

function getSpanHref(paragraph: RichTextParagraph, span: RichTextSpan): string | undefined {
  if (span.href) return span.href
  if (isSpansParagraph(paragraph) && paragraph.markDefs && span.marks?.length) {
    for (const key of span.marks) {
      const def = paragraph.markDefs.find(d => d._key === key)
      if (def?.href) return def.href
    }
  }
  return undefined
}

function getSpanExternal(paragraph: RichTextParagraph, span: RichTextSpan, href: string): boolean {
  if (span.external !== undefined) return span.external
  if (isSpansParagraph(paragraph) && paragraph.markDefs && span.marks?.length) {
    for (const key of span.marks) {
      const def = paragraph.markDefs.find(d => d._key === key)
      if (def) return def.blank ?? isExternalHref(href)
    }
  }
  return isExternalHref(href)
}
</script>

<template>
  <p v-for="(paragraph, i) in paragraphs" :key="i" :class="paragraphClass">
    <template v-if="isSpansParagraph(paragraph)">
      <template v-for="(span, j) in paragraph.spans" :key="j">
        <template v-for="href in [getSpanHref(paragraph, span)]" :key="j">
          <a
            v-if="href"
            :href="href"
            class="pt-2 leading-loose border-b-2 border-dashed border-jw_red hover:bg-jw_red hover:text-jw_blue hover:border-jw_blue transition-colors duration-200"
            :target="getSpanExternal(paragraph, span, href) ? '_blank' : undefined"
            :rel="getSpanExternal(paragraph, span, href) ? 'noreferrer' : undefined"
          ><strong v-if="span.strong">{{ span.text }}</strong><template v-else>{{ span.text }}</template></a>
          <strong v-else-if="span.strong">{{ span.text }}</strong>
          <template v-else>{{ span.text }}</template>
        </template>
      </template>
    </template>
    <template v-else-if="isTextParagraph(paragraph)">{{ paragraph.text }}</template>
    <template v-else>{{ paragraph }}</template>
  </p>
</template>
