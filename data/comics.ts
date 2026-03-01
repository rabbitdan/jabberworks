import type { Comic } from "~~/types/content"

export const comics: Comic[] = [
    {
        _type: "comic",
        slug: "otter-detective-club",
        title: "Otter Detective Club",
        thumbnail: {
            src: "/comics/otter-detective-club/thumb.svg",
            alt: "Otter Detective Club cover thumbnail"
        },
        blurb: "A clue-chasing river mystery where every panel reveals one more suspicious footprint.",
        ctaLabel: "Read comic",
        panels: [
            { src: "/comics/otter-detective-club/panel-1.svg", alt: "Otters gather around a map by the riverbank." },
            { src: "/comics/otter-detective-club/panel-2.svg", alt: "A detective otter spots tiny muddy footprints." },
            { src: "/comics/otter-detective-club/panel-3.svg", alt: "The team follows the trail through reeds." },
            { src: "/comics/otter-detective-club/panel-4.svg", alt: "A missing lunchbox is discovered in the rushes." },
            { src: "/comics/otter-detective-club/panel-5.svg", alt: "The otters celebrate solving the mystery together." }
        ]
    },
    {
        _type: "comic",
        slug: "mouse-vs-moonlight",
        title: "Mouse vs Moonlight",
        thumbnail: {
            src: "/comics/mouse-vs-moonlight/thumb.svg",
            alt: "Mouse vs Moonlight cover thumbnail"
        },
        blurb: "A brave little mouse tries to paint the night sky before dawn arrives and ruins the mood.",
        ctaLabel: "Open comic",
        panels: [
            { src: "/comics/mouse-vs-moonlight/panel-1.svg", alt: "A mouse carries paintbrushes into a moonlit field." },
            { src: "/comics/mouse-vs-moonlight/panel-2.svg", alt: "The mouse studies the moon to match its glow." },
            { src: "/comics/mouse-vs-moonlight/panel-3.svg", alt: "Stars are dabbed onto a giant canvas." },
            { src: "/comics/mouse-vs-moonlight/panel-4.svg", alt: "A cloud drifts in and changes the colours." },
            { src: "/comics/mouse-vs-moonlight/panel-5.svg", alt: "The mouse finishes the painting just before sunrise." }
        ]
    },
    {
        _type: "comic",
        slug: "tea-break-t-rex",
        title: "Tea Break T-Rex",
        thumbnail: {
            src: "/comics/tea-break-t-rex/thumb.svg",
            alt: "Tea Break T-Rex cover thumbnail"
        },
        blurb: "A very polite dinosaur learns that tiny cups, tiny cakes, and tiny arms are a difficult combination.",
        ctaLabel: "Launch reader",
        panels: [
            { src: "/comics/tea-break-t-rex/panel-1.svg", alt: "A T-Rex arrives at a neatly set tea table." },
            { src: "/comics/tea-break-t-rex/panel-2.svg", alt: "The dinosaur struggles to lift a tiny teacup." },
            { src: "/comics/tea-break-t-rex/panel-3.svg", alt: "A plate of cakes tilts dangerously." },
            { src: "/comics/tea-break-t-rex/panel-4.svg", alt: "Friends rush in with an oversized mug and plate." },
            { src: "/comics/tea-break-t-rex/panel-5.svg", alt: "Everyone enjoys a much better scaled tea break." }
        ]
    }
]
