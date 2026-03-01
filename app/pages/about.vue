<script setup lang="ts">
import type { EditorialPage } from "~~/types/content"

const page: EditorialPage = {
  hero: {
    eyebrow: "About Sarah",
    title: "Stories, sketches, and wildlife observations gathered over a lifetime of making books.",
    intro:
      "This page is structured as reusable editorial sections so it can move cleanly into Sanity later. For now, the content is local, fast to edit, and flexible enough to support richer storytelling than a plain text page.",
  },
  sections: [
    {
      _type: "textImage",
      id: "about-origin",
      eyebrow: "Where it starts",
      title: "A practice built from drawing, collecting details, and paying attention.",
      paragraphs: [
        "Sarah’s work begins with observation: quick sketches, fragments of overheard conversation, and visual details gathered from walks, museums, classrooms, and riverbanks.",
        "That material is shaped into picture books and illustrated stories that feel rooted in real places, while still leaving room for humour, warmth, and a little mischief.",
      ],
      image: {
        src: "/artist-mouse.jpg",
        alt: "Illustrated mouse with an artist’s brush.",
      },
      imageSide: "right",
      imageWidth: "md",
      textWidth: "md",
    },
    {
      _type: "callout",
      id: "about-callout",
      eyebrow: "For families and schools",
      title: "The books are designed to be read aloud, revisited, and used as a starting point for making things.",
      text:
        "That is why the site is heading toward a more modular content model. The same page structure can support author biography, classroom resources, exhibitions, and future campaign pages without inventing a new template each time.",
    },
    {
      _type: "featureImage",
      id: "about-feature",
      image: {
        src: "/artist-mouse.jpg",
        alt: "Illustrated mouse leaning over paper with a paintbrush.",
      },
      overline: "In the studio",
      title: "Images can carry the story too.",
      text:
        "This block is intended for the moments where one strong image should breathe, with supporting text and credit sitting on top rather than pushing the image into a standard content column.",
      credit: "Photo credit: Studio archive",
      textPosition: "bottom-left",
      creditPosition: "top-right",
    },
    {
      _type: "textImage",
      id: "about-looking-ahead",
      eyebrow: "Looking ahead",
      title: "Built now for speed, structured later for CMS-driven pages.",
      paragraphs: [
        "Each section already has a stable type and shape, so a Sanity page document can eventually return the same hero-and-sections pattern with minimal frontend rewrite.",
        "When that happens, image widths, alignments, credits, and callouts can all become editor-controlled fields rather than bespoke Vue markup on individual pages.",
      ],
      image: {
        src: "/mcintyre_heading.png",
        alt: "Sarah McIntyre header artwork.",
      },
      imageSide: "left",
      imageWidth: "lg",
      textWidth: "lg",
    },
  ],
}

useSeoMeta({
  title: "About Sarah",
  description:
    "Learn more about Sarah’s creative practice, illustrated books, and the editorial page structure behind this site.",
})
</script>

<template>
  <EditorialPageTemplate :page="page" />
</template>
