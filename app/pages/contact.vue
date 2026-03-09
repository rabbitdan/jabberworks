<script setup lang="ts">
import type { EditorialPage } from "~~/types/content"

const page: EditorialPage = {
  hero: {
    eyebrow: "Contact",
    title: "A simple contact page placeholder for now.",
    intro:
      "This uses the same editorial page template as the about page, with a basic two-column section that can be replaced with real contact details later.",
  },
  sections: [
    {
      _type: "twoColumn",
      id: "contact-columns",
      eyebrow: "Get in touch",
      left: {
        title: "Contact details",
        paragraphs: [
          "This column can hold an email address, agent details, or a general enquiries line.",
          "For now it is acting as a simple placeholder so the page layout is in place.",
        ],
      },
      right: {
        title: "Useful info",
        paragraphs: [
          "This side can hold speaking requests, school visits, event enquiries, or social links.",
          "Once the final content is ready, both columns can be updated without changing the template.",
        ],
      },
    },
  ],
}

useSeoMeta({
  title: "Contact",
  description: "Contact page placeholder with a simple two-column layout.",
})
</script>

<template>
  <EditorialPageTemplate :page="page" />
</template>
