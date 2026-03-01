export type ActivitySheet = {
    thumb: {
        src: string
        alt?: string
    }
    pdfUrl: string
    linkText: string
}

export type BuyLink = {
    url: string
    linkText: string
}

export type YouTube = {
    url: string // keep as full URL; later you can derive id if needed
    title?: string
}

export type Book = {
    _type: "book"
    slug: string
    title: string
    cover: {
        src: string
        alt?: string
    }
    blurb: string
    activitySheets?: ActivitySheet[]
    buyLinks?: BuyLink[]
    youtube?: YouTube
    seriesSlugs?: string[] // optional: helps build series pages without references
}

export type BookSeriesSection = {
    _type: "bookSeriesSection"
    id: string // stable key for v-for
    title: string
    blurb?: string
    thumbnailCharacter: {
        src: string
        alt?: string
    }
    cta?: {
        text: string
        url: string
    }
    featuredBookSlugs?: string[] // “reference array” analogue
}

export type EditorialImage = {
    src: string
    alt: string
}

export type EditorialHero = {
    eyebrow?: string
    title: string
    intro?: string
}

export type EditorialTextImageSection = {
    _type: "textImage"
    id: string
    eyebrow?: string
    title?: string
    paragraphs: string[]
    image: EditorialImage
    imageSide?: "left" | "right"
    imageWidth?: "sm" | "md" | "lg"
    textWidth?: "sm" | "md" | "lg"
}

export type EditorialFeatureImageSection = {
    _type: "featureImage"
    id: string
    image: EditorialImage
    overline?: string
    title: string
    text?: string
    credit?: string
    textPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
    creditPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export type EditorialCalloutSection = {
    _type: "callout"
    id: string
    eyebrow?: string
    title: string
    text: string
}

export type EditorialPageSection =
    | EditorialTextImageSection
    | EditorialFeatureImageSection
    | EditorialCalloutSection

export type EditorialPage = {
    hero: EditorialHero
    sections: EditorialPageSection[]
}

export type ComicPanel = {
    src: string
    alt: string
}

export type Comic = {
    _type: "comic"
    slug: string
    title: string
    thumbnail: {
        src: string
        alt?: string
    }
    blurb: string
    ctaLabel?: string
    panels: ComicPanel[]
}

export type EventImage = {
    src: string
    alt: string
}

export type Event = {
    _type: "event"
    slug: string
    title: string
    url: string
    date: string
    blurb: string
    images: [EventImage, ...EventImage[]]
}
