import type { BookSeriesSection } from "~~/types/content"

export const seriesSections: BookSeriesSection[] = [
    {
        _type: "bookSeriesSection",
        id: "series-1",
        title: "Otter Tales",
        blurb: "Short blurb about this series. One or two sentences.",
        thumbnailCharacter: { src: "/images/series/otter-tales/character.png", alt: "Otter character" },
        cta: { text: "Download activity sheets", url: "#series-1" }, // placeholder CTA; tweak later
        featuredBookSlugs: [
            "the-river-otter-adventure",
            "another-otter-book"
            // …7–10 total
        ]
    },
    {
        _type: "bookSeriesSection",
        id: "series-2",
        title: "Newer Series Name",
        blurb: "Short blurb about this series.",
        thumbnailCharacter: { src: "/images/series/new-series/character.png", alt: "Character image" },
        cta: { text: "Explore the books", url: "#series-2" },
        featuredBookSlugs: [
            "book-slug-1",
            "book-slug-2"
            // …7–10 total
        ]
    },
    {
        _type: "bookSeriesSection",
        id: "earlier-books",
        title: "Earlier Books",
        blurb: "A selection of books Sarah illustrated earlier in her career.",
        thumbnailCharacter: { src: "/images/series/earlier/character.png", alt: "Illustration thumbnail" },
        cta: { text: "Browse the selection", url: "#earlier-books" },
        featuredBookSlugs: [
            "early-book-1",
            "early-book-2"
            // …7–10 total
        ]
    }
]
