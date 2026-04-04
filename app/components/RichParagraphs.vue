<script setup lang="ts">
import type { RichTextParagraph, RichTextSpan, RichTextMarkDef } from "~~/types/content"

const props = defineProps<{
  paragraphs: RichTextParagraph[]
  paragraphClass?: string
}>()

function isSpansParagraph(p: RichTextParagraph): p is { style?: string; listItem?: string; markDefs?: RichTextMarkDef[], spans: RichTextSpan[] } {
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

const styleTagMap: Record<string, string> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', blockquote: 'blockquote',
}

function getTag(paragraph: RichTextParagraph): string {
  if (isSpansParagraph(paragraph) && paragraph.style && styleTagMap[paragraph.style]) {
    return styleTagMap[paragraph.style]
  }
  return 'p'
}

type ListGroup = { kind: 'list'; listItem: string; items: RichTextParagraph[] }
type ItemGroup = { kind: 'item'; paragraph: RichTextParagraph }

const groups = computed(() => {
  const result: (ListGroup | ItemGroup)[] = []
  for (const p of props.paragraphs) {
    const listItem = isSpansParagraph(p) ? p.listItem : undefined
    if (listItem) {
      const last = result[result.length - 1]
      if (last?.kind === 'list' && last.listItem === listItem) {
        last.items.push(p)
      } else {
        result.push({ kind: 'list', listItem, items: [p] })
      }
    } else {
      result.push({ kind: 'item', paragraph: p })
    }
  }
  return result
})
</script>

<template>
  <template v-for="(group, i) in groups" :key="i">
    <!-- List groups -->
    <ol v-if="group.kind === 'list' && group.listItem === 'number'" class="list-decimal pl-6 space-y-1">
      <li v-for="(item, j) in group.items" :key="j">
        <template v-if="isSpansParagraph(item)">
          <template v-for="(span, k) in item.spans" :key="k">
            <template v-for="href in [getSpanHref(item, span)]" :key="k">
              <a v-if="href" :href="href" class="pt-2 leading-loose border-b-2 border-dashed border-jw_red hover:bg-jw_red hover:text-jw_blue hover:border-jw_blue transition-colors duration-200" :target="getSpanExternal(item, span, href) ? '_blank' : undefined" :rel="getSpanExternal(item, span, href) ? 'noreferrer' : undefined"><strong v-if="span.strong"><em v-if="span.em">{{ span.text }}</em><template v-else>{{ span.text }}</template></strong><em v-else-if="span.em">{{ span.text }}</em><template v-else>{{ span.text }}</template></a>
              <strong v-else-if="span.strong"><em v-if="span.em">{{ span.text }}</em><template v-else>{{ span.text }}</template></strong>
              <em v-else-if="span.em">{{ span.text }}</em>
              <template v-else>{{ span.text }}</template>
            </template>
          </template>
        </template>
      </li>
    </ol>
    <ul v-else-if="group.kind === 'list'" class="list-disc pl-6 space-y-1">
      <li v-for="(item, j) in group.items" :key="j">
        <template v-if="isSpansParagraph(item)">
          <template v-for="(span, k) in item.spans" :key="k">
            <template v-for="href in [getSpanHref(item, span)]" :key="k">
              <a v-if="href" :href="href" class="pt-2 leading-loose border-b-2 border-dashed border-jw_red hover:bg-jw_red hover:text-jw_blue hover:border-jw_blue transition-colors duration-200" :target="getSpanExternal(item, span, href) ? '_blank' : undefined" :rel="getSpanExternal(item, span, href) ? 'noreferrer' : undefined"><strong v-if="span.strong"><em v-if="span.em">{{ span.text }}</em><template v-else>{{ span.text }}</template></strong><em v-else-if="span.em">{{ span.text }}</em><template v-else>{{ span.text }}</template></a>
              <strong v-else-if="span.strong"><em v-if="span.em">{{ span.text }}</em><template v-else>{{ span.text }}</template></strong>
              <em v-else-if="span.em">{{ span.text }}</em>
              <template v-else>{{ span.text }}</template>
            </template>
          </template>
        </template>
      </li>
    </ul>
    <!-- Single paragraph / heading / blockquote -->
    <component :is="getTag(group.paragraph)" v-else :class="getTag(group.paragraph) === 'p' ? paragraphClass : undefined">
      <template v-if="isSpansParagraph(group.paragraph)">
        <template v-for="(span, j) in group.paragraph.spans" :key="j">
          <template v-for="href in [getSpanHref(group.paragraph, span)]" :key="j">
            <a v-if="href" :href="href" class="pt-2 leading-loose border-b-2 border-dashed border-jw_red hover:bg-jw_red hover:text-jw_blue hover:border-jw_blue transition-colors duration-200" :target="getSpanExternal(group.paragraph, span, href) ? '_blank' : undefined" :rel="getSpanExternal(group.paragraph, span, href) ? 'noreferrer' : undefined"><strong v-if="span.strong"><em v-if="span.em">{{ span.text }}</em><template v-else>{{ span.text }}</template></strong><em v-else-if="span.em">{{ span.text }}</em><template v-else>{{ span.text }}</template></a>
            <strong v-else-if="span.strong"><em v-if="span.em">{{ span.text }}</em><template v-else>{{ span.text }}</template></strong>
            <em v-else-if="span.em">{{ span.text }}</em>
            <template v-else>{{ span.text }}</template>
          </template>
        </template>
      </template>
      <template v-else-if="isTextParagraph(group.paragraph)">{{ group.paragraph.text }}</template>
      <template v-else>{{ group.paragraph }}</template>
    </component>
  </template>
</template>
