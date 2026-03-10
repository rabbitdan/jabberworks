<script setup lang="ts">
import type { FaqAnswerBlock, FaqItem, RichTextParagraph, RichTextSpan } from "~~/types/content"

const props = defineProps<{
  items: FaqItem[]
  single?: boolean
}>()

const detailsRefs = ref<HTMLDetailsElement[]>([])

function onToggle(toggledIndex: number) {
  if (!props.single) return
  const toggledEl = detailsRefs.value[toggledIndex]
  if (!toggledEl?.open) return

  detailsRefs.value.forEach((el, i) => {
    if (i !== toggledIndex) el.open = false
  })
}

function isRichTextBlock(block: FaqAnswerBlock): block is Extract<FaqAnswerBlock, { _type: "richText" }> {
  return block._type === "richText"
}

function isHtmlBlock(block: FaqAnswerBlock): block is Extract<FaqAnswerBlock, { _type: "html" }> {
  return block._type === "html"
}

function isImageBlock(block: FaqAnswerBlock): block is Extract<FaqAnswerBlock, { _type: "image" }> {
  return block._type === "image"
}

function isYoutubeBlock(block: FaqAnswerBlock): block is Extract<FaqAnswerBlock, { _type: "youtube" }> {
  return block._type === "youtube"
}

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
  <div class="space-y-4">
    <details
        v-for="(item, index) in items"
        :key="`${item.question}-${index}`"
        :ref="(el) => { if (el) detailsRefs[index] = el as HTMLDetailsElement }"
        class="group overflow-hidden border border-gray-200 bg-white transition-colors hover:border-gray-300"
        @toggle="onToggle(index)"
    >
      <summary
          class="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left text-lg font-heading text-black outline-none transition-colors marker:content-none hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 select-none"
      >
        <span>{{ item.question }}</span>
        <svg
            class="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
          <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </summary>

      <div class="space-y-4 px-4 pb-4 pt-0">
        <template v-for="(block, blockIndex) in item.answer" :key="blockIndex">
          <div v-if="isRichTextBlock(block)" class="space-y-4">
            <p
              v-for="(paragraph, paragraphIndex) in block.paragraphs"
              :key="paragraphIndex"
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
                  <template v-else>
                    {{ span.text }}
                  </template>
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

          <div
            v-else-if="isHtmlBlock(block)"
            class="[&_a]:underline [&_a]:underline-offset-4 [&_iframe]:aspect-video [&_iframe]:w-3/4 [&_iframe]:border-0 [&_img]:w-1/2 [&_img]:mx-auto [&_p+p]:mt-4"
            v-html="block.html"
          />

          <figure v-else-if="isImageBlock(block)" class="space-y-3">
            <a
              v-if="block.image.href"
              :href="block.image.href"
              target="_blank"
              rel="noreferrer"
              class="block"
            >
              <img
                :src="block.image.src"
                :alt="block.image.alt"
                class="w-1/2"
                loading="lazy"
              >
            </a>
            <img
              v-else
              :src="block.image.src"
              :alt="block.image.alt"
              class="w-1/2"
              loading="lazy"
            >
            <figcaption v-if="block.image.caption" class="text-sm text-black">
              {{ block.image.caption }}
            </figcaption>
          </figure>

          <YouTubeEmbed
            v-else-if="isYoutubeBlock(block)"
            :url="block.youtube.url"
            :title="block.youtube.title"
            :show-heading="false"
          />
        </template>
      </div>
    </details>
  </div>
</template>
