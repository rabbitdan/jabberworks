<script setup lang="ts">
const faqItems = [
  {
    question: "What age range are Sarah’s books best for?",
    answer:
      "Most of the books are designed for picture-book readers, early independent readers, and families reading aloud together. Specific age guidance can vary by title, so the book pages will usually give the clearest sense of tone and reading level.",
  },
  {
    question: "Do you offer activity-sheets sheets or classroom resources?",
    answer:
      "Yes. Selected books include printable activity-sheets sheets and related extras for families, libraries, and schools. Those resources are surfaced alongside the relevant book pages so they are easy to find.",
  },
  {
    question: "Can Sarah visit schools, festivals, or bookshops?",
    answer:
      "The site includes an events section for workshops, signings, and appearances. If you are planning a school or venue event, the contact details and event information pages are the best place to start.",
  },
  {
    question: "Where can I buy the books?",
    answer:
      "Each book page can include buying links and related series information. If you are browsing by collection first, start on the books page and then open an individual title for more detail.",
  },
  {
    question: "Will more content be added here later?",
    answer:
      "Yes. The site structure is being set up so editorial pages, book content, resources, and future CMS-managed sections can expand without needing a different layout for every page.",
  },
] satisfies Array<{ question: string; answer: string }>

useSeoMeta({
  title: "FAQs",
  description:
    "Find quick answers about Sarah’s books, resources, events, and how to explore the site.",
})
</script>

<template>
  <main class="mx-auto max-w-4xl px-6 py-16 sm:py-20">
    <header class="max-w-2xl">
      <p class="text-sm uppercase tracking-[0.2em] text-gray-500">FAQs</p>
      <h1 class="mt-3 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        Frequently asked questions
      </h1>
      <p class="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
        Quick answers about the books, classroom resources, events, and how the site is
        organised.
      </p>
    </header>

    <section class="mt-10 sm:mt-12" aria-label="Frequently asked questions">
      <FaqAccordion :items="faqItems" :single="true" />
    </section>
  </main>
</template>
