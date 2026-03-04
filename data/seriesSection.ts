import type { BookSeriesSection } from "~~/types/content"

export const seriesSections: BookSeriesSection[] = [
    {
        _type: "bookSeriesSection",
        id: "adventuremice",
        title: "Adventuremice",
        blurb: "This series started when I was painting little pictures of my model ship collection, and thought the pictures looked better when I added mouse sailors. Eventually I asked my friend Philip Reeve if he would work with me to turn these little Adventuremice into a series, and now we have so much fun together imagining what these brave little mice will get up to.",
        cover: { src: "/books/advmice-cover-mice-mummies.jpg", alt: "Adventuremice: Of mice and mummies" },
        thumbnailCharacter: { src: "/books/advmice-mousespaceship.png", alt: "Adventuremice illustration" },
        cta: { text: "adventuremice.com", url: "https://adventuremice.com" },
        featuredBookSlugs: [
            "adventuremice-otter-chaos",
            "adventuremice-mermouse-mystery",
            "adventuremice-mice-on-the-ice",
            "adventuremice-mice-on-the-moon",
            "adventuremice-ghostly-galleon",
            "adventuremice-mice-camera-action",
            "adventuremice-mousehole-centre-of-earth"
        ]
    },
    {
        _type: "bookSeriesSection",
        id: "reeve-mcintyre",
        title: "Reeve & Mcintyre books",
        blurb: "My first eight books with Philip Reeve combine wild flights of fancy with gripping plots, humour and warmth. Our first four books are stand-alone stories, and our second four make up the series about Kevin, a loveable roly-poly flying pony with a passion for custard cream biscuits. They're published by Oxford University Press.",
        cover: { src: "/books/rm-cover-kevin.jpg", alt: "The legend of kevin" },
        thumbnailCharacter: { src: "/books/kevin-thumb.gif", alt: "Have any biscuits?" },
        cta: { text: "adventuremice.com", url: "https://adventuremice.com" },
        featuredBookSlugs: [
            "reeve-mcintyre-seawigs",
            "reeve-mcintyre-cakes-space",
            "reeve-mcintyre-jinks-o-hare",
            "reeve-mcintyre-pugs",
            "reeve-mcintyre-kevin-biscuit-bandit",
            "reeve-mcintyre-kevin-great-escape"
        ]
    },
    {
        _type: "bookSeriesSection",
        id: "solo-work",
        title: "Solo work",
        blurb: "Meet Grumpycorn! He's a unicorn with ambition who wants to write the most fabulous story in the world, and then visit the most fabulous planet in the world. His friends admire his courage and dedication, but he has to learn how to be a better friend to them and stop throwing such wild diva strops. And meet the inhabitants of Dinoville! What happens when a clumsy T-Rex goes on the rampage in a pizza factory? Or a massive diplodocus decides she wants to be an agile firefighter? Click on each cover to explore each book and discover book-related free activities.",
        cover: { src: "/books/sm-cover-grumpycorn.jpg", alt: "Grumpycorn" },
        thumbnailCharacter: { src: "/books/kevin-thumb.gif", alt: "Have any biscuits?" },
        cta: { text: "adventuremice.com", url: "https://adventuremice.com" },
        featuredBookSlugs: [
            "sarah-mcintyre-vern-lettuce",
            "sarah-mcintyre-grumpycorn",
            "sarah-mcintyre-dont-call-me-grumpycorn",
            "sarah-mcintyre-dinosaur-police",
            "sarah-mcintyre-dinosaur-firefighters",
            "sarah-mcintyre-new-neighbours",
        ]
    }
]
