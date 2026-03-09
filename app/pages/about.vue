<script setup lang="ts">
import type { EditorialPage } from "~~/types/content"

const page: EditorialPage = {
  hero: {
    title: "About",
    intro: "Cras fringilla id arcu vel iaculis. Nunc nisl lacus, gravida vitae massa sed, viverra facilisis libero. Maecenas porta imperdiet ligula vitae imperdiet. Ut lacinia ultricies commodo. Donec felis nibh, fringilla vitae neque eu, tincidunt malesuada dui.",
  },
  sections: [
    {
      _type: "splitStack",
      id: "about-origin",
      title: "Artist and Author Sarah McIntyre...",
      paragraphs: [
        "is easy to spot in her pointy glasses, hats and brightly-patterned dresses. Early in her career, she made comics and illustrated books for authors such as Giles Andreae, Alan MacDonald, Gillian Rogerson, Anne Cottringer and Claire Freedman. She then began writing and illustrating picture books herself, including the Grumpycorn books, There’s a Shark in the Bath, and Dinosaur Firefighters. She met author Philip Reeve at the Edinburgh Book Festival in 2010 and they published their first book together, Oliver and the Seawigs, and Sarah wore a six-foot-tall wig for the launch on the Golden Hinde ship:",
      ],
      primaryImage: {
        src: "/about/authorphoto.jpg",
        alt: "Sarah McIntyre wearing a hat, smiling beatifically",
      },
      secondaryImage: {
        src: "/about/seawigs_launch.jpg",
        alt: "Sarah McIntyre heading artwork.",
      },
    },
    {
      _type: "textImage",
      id: "about-looking-ahead",
      paragraphs: [
        "They so enjoyed working together that they created a second book, Cakes in Space, and surprised many festivals and schools with their shiny space suits:",
      ],
      image: {
        src: "/about/cakesinspace-bonehill.jpg",
        alt: "Sarah and Philip on Bonehill in Dartmoor wearing space uniforms.",
      },
      imageSide: "left",
      imageWidth: "lg",
      textWidth: "lg",
    },
    {
      _type: "featureImage",
      id: "about-feature",
      image: {
        src: "/about/pugwalk.jpg",
        alt: "Sarah and Philip launch Pugs of the Frozen North",
      },
      title: "They so enjoyed working together that they created a second book, Cakes in Space, and surprised many festivals and schools with their shiny space suits:",
      credit: "Photo credit: Dannie Price for Blast Photo",
      textPosition: "bottom-left",
      creditPosition: "top-right",
    },
    {
      _type: "textImage",
      id: "about-looking-ahead",
      paragraphs: [
        "They so enjoyed working together that they went on to create six more books, including four about Kevin the Roly-Poly Flying Pony. During Covid Lockdown, Sarah amused herself by painting pictures of her model ship collection, adding little mice as sailors. The original art and cards sold so well, and Sarah had so much fun with the little mice characters that she asked Philip if he’d help her turn them into a series of books, which have become ADVENTUREMICE. These books have their own website – Adventuremice.com – so explore it for lots of free resources, activities, drawing videos and Teacher Packs.",
        "For all their Reeve & McIntyre books, Philip and Sarah work as co-authors: they both brainstorm the story ideas together, then Philip does most of the writing, but comes back to Sarah for more ideas. Then Philip helps Sarah with the rough-draft pencil versions of the illustrations before Sarah creates the final ink and watercolour artwork.",
      ],
      image: {
        src: "/about/advmice-authorbookends.jpg",
        alt: "Sarah McIntyre header artwork.",
      },
      imageSide: "left",
      imageWidth: "lg",
      textWidth: "lg",
    },
    {
      _type: "callout",
      id: "about-callout",
      paragraphs: [
          "You can follow Sarah on Twitter/X, on YouTube, Facebook, on Instagram and on her blog. (There\’s also a joint Reeve & McIntyre Facebook page.)",
          "Find out more in the FAQs section of the website.",
          "Here are some extra links, if you’d like to keep scrolling!"
      ]
    },
    {
      _type: "twoColumn",
      id: "about-draw-sea-monkey",
      left: { paragraphs: ["Learn how to draw a Sea Monkey with Sarah in this four-video Booktrust series on how to lead a Comics Jam session in the classroom. And read further on how to use it in the classroom here on her blog."] },
      right: { youtube: { url: "https://youtu.be/OlfKVjB-KLY", title: "Optional title" } },
    },
    {
      _type: "twoColumn",
      id: "about-draw-sea-monkey",
      left: { youtube: { url: "https://youtu.be/KB_h2VpFFUI", title: "Optional title" } },
      right: {paragraphs: ["Here’s her TEDx talk, How to grow by embracing our mistakes:"] },
    },
    {
      _type: "textImage",
      id: "about-pictures-mean-business",
      paragraphs: [
        "If you’re a fan of illustration, find out about the #PicturesMeanBusiness campaign Sarah launched in 2015, showing how everyone benefits when illustrators are properly credited for their work: picturesmeanbusiness.com The website was heroically designed and funded by Exeter-based illustrator Soni Speight!"
      ],
      image: {
        src: "/about/pmb_guardian.jpg",
        alt: "Pictures Mean Business article",
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
