<script setup lang="ts">
import type {
  Comic,
  EditorialCalloutSection,
  EditorialFeatureImageSection,
  EditorialPage,
  EditorialSplitStackSection,
  EditorialTextImageSection,
  EditorialTwoColumnSection,
} from "~~/types/content"

defineProps<{
  page: EditorialPage
}>()

const activeComic = ref<Comic | null>(null)

function isTextImageSection(section: EditorialPage["sections"][number]): section is EditorialTextImageSection {
  return section._type === "textImage"
}

function isFeatureImageSection(section: EditorialPage["sections"][number]): section is EditorialFeatureImageSection {
  return section._type === "featureImage"
}

function isCalloutSection(section: EditorialPage["sections"][number]): section is EditorialCalloutSection {
  return section._type === "callout"
}

function isTwoColumnSection(section: EditorialPage["sections"][number]): section is EditorialTwoColumnSection {
  return section._type === "twoColumn"
}

function isSplitStackSection(section: EditorialPage["sections"][number]): section is EditorialSplitStackSection {
  return section._type === "splitStack"
}
</script>

<template>
  <div class="container mx-auto flex flex-col gap-12 px-6 py-10 md:gap-16 md:py-14">
    <EditorialHeroBlock v-if="page.hero" :hero="page.hero" />

    <div class="flex flex-col gap-12 md:gap-16">
      <template v-for="section in page.sections" :key="section.id">
        <EditorialTextImageSectionBlock
          v-if="isTextImageSection(section)"
          :section="section"
        />

        <EditorialFeatureImageSectionBlock
          v-else-if="isFeatureImageSection(section)"
          :section="section"
        />

        <EditorialCalloutSectionBlock
          v-else-if="isCalloutSection(section)"
          :section="section"
        />

        <EditorialTwoColumnSectionBlock
          v-else-if="isTwoColumnSection(section)"
          :section="section"
        />

        <EditorialSplitStackSectionBlock
          v-else-if="isSplitStackSection(section)"
          :section="section"
        />
      </template>
    </div>
  </div>

  <template v-if="page.comics?.length">
    <div class="container">
      <div class="comics-page__grid">
        <ComicCard
          v-for="(comic, index) in page.comics"
          :key="comic.slug"
          :comic="comic"
          :last="index === page.comics!.length - 1"
          @open="activeComic = $event"
        />
      </div>
    </div>

    <LazyComicReaderModal
      v-if="activeComic"
      :key="activeComic.slug"
      :comic="activeComic"
      @close="activeComic = null"
    />
  </template>
</template>
