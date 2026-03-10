export type ActivitySheet = {
    thumb: {
        src: string
        alt?: string
    }
    pdfUrl: string
    linkText?: string
    title?: string
    text?: string | string[]
}

export type BuyLink = {
    url: string
    linkText: string
}

export type YouTube = {
    url: string // keep as full URL; later you can derive id if needed
    title?: string
}

export type BookVideo = {
    url: string
    heading: string
    text?: string | string[]
}

export type BookMiscPanel = {
    heading?: string
    text: string | string[]
}

export type BookPageLink = {
    url: string
    external?: boolean
}

export type Book = {
    _type: "book"
    slug: string
    title: string
    pageLink?: BookPageLink
    cover: {
        src: string
        alt?: string
    }
    backgroundTileUrl?: string
    blurb: string | string[]
    description?: string | string[]
    activitySheets?: ActivitySheet[]
    activitySheetsLayout?: 2 | 4
    buyLinks?: BuyLink[]
    youtube?: YouTube
    videos?: BookVideo[]
    miscPanel?: BookMiscPanel
    seriesSlugs?: string[] // optional: helps build series pages without references
}

export type BookSeriesSection = {
    _type: "bookSeriesSection"
    id: string // stable key for v-for
    title: string
    blurb?: string | string[]
    cover: {
        src: string
        alt?: string
        url?: string
    }
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
    photographerCredit?: string
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
    text?: string | string[]
    credit?: string
    textPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
    creditPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export type RichTextSpan = {
    text: string
    href?: string
    external?: boolean
    strong?: boolean
}

export type RichTextParagraph =
    | string
    | {
        spans: RichTextSpan[]
    }
    | {
        text: string
    }

export type FaqImage = {
    src: string
    alt: string
    href?: string
    caption?: string
}

export type FaqAnswerBlock =
    | {
        _type: "richText"
        paragraphs: RichTextParagraph[]
    }
    | {
        _type: "html"
        html: string
    }
    | {
        _type: "image"
        image: FaqImage
    }
    | {
        _type: "youtube"
        youtube: YouTube
    }

export type EditorialCalloutSection = {
    _type: "callout"
    id: string
    eyebrow?: string
    title?: string
    paragraphs?: RichTextParagraph[]
}

export type EditorialTwoColumnSection = {
    _type: "twoColumn"
    id: string
    eyebrow?: string
    left: EditorialTwoColumnContent
    right: EditorialTwoColumnContent
}

export type EditorialTwoColumnContent =
    | {
        title?: string
        paragraphs: string[]
        youtube?: never
    }
    | {
        title?: string
        youtube: YouTube
        paragraphs?: never
    }

export type EditorialSplitStackSection = {
    _type: "splitStack"
    id: string
    eyebrow?: string
    title: string
    paragraphs: string[]
    primaryImage: EditorialImage
    secondaryImage: EditorialImage
}

export type EditorialPageSection =
    | EditorialTextImageSection
    | EditorialFeatureImageSection
    | EditorialCalloutSection
    | EditorialTwoColumnSection
    | EditorialSplitStackSection

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
    blurb: string | string[]
    ctaLabel?: string
    panels: ComicPanel[]
}

export type EventImage = {
    src: string
    alt: string
}

export type EventLink = {
    label: string
    url: string
}

export type EventSession = {
    title: string
    date?: string
    startTime?: string
    endTime?: string
    venue?: string
    city?: string
    description?: string
    links?: EventLink[]
}

export type Event = {
    _type: "event"
    title: string
    dateStart: string
    dateEnd?: string
    startTime?: string
    endTime?: string
    city?: string
    venue?: string
    country?: string
    mode?: "in-person" | "online"
    status?: "scheduled" | "past" | "publication"
    series?: string
    blurb: string
    description?: string | string[]
    url?: string
    tags: string[]
    links?: EventLink[]
    images?: EventImage[]
    sessions?: EventSession[]
}

export type FaqItem = {
    question: string
    answer: FaqAnswerBlock[]
}
