import type { Event } from "~~/types/content"

export const events: Event[] = [
    {
        _type: "event",
        slug: "storytime-forest-library",
        title: "Forest Library Storytime",
        url: "https://jabberworks.example/events/forest-library-storytime",
        date: "12 April 2026",
        blurb: "A lively library session with readings, sketchbook prompts, and a short Q&A for families who want to make comics together.",
        images: [
            {
                src: "/events/forest-library/story-circle.svg",
                alt: "Children gathered for a storytime circle in a library."
            },
            {
                src: "/events/forest-library/sketch-table.svg",
                alt: "A drawing table set up with pencils, paper, and illustrated characters."
            }
        ]
    },
    {
        _type: "event",
        slug: "festival-comics-workshop",
        title: "Festival Comics Workshop",
        url: "https://jabberworks.example/events/festival-comics-workshop",
        date: "03 May 2026",
        blurb: "A hands-on workshop about building a comic from character idea to final page, with room for doodles, questions, and messy experiments.",
        images: [
            {
                src: "/events/festival-workshop/banner-stage.svg",
                alt: "A festival workshop banner above a small presentation stage."
            },
            {
                src: "/events/festival-workshop/panel-board.svg",
                alt: "Comic panels pinned to a display board during a workshop."
            },
            {
                src: "/events/festival-workshop/group-draw.svg",
                alt: "Participants drawing together around a large shared table."
            }
        ]
    },
    {
        _type: "event",
        slug: "bookshop-signing-afternoon",
        title: "Bookshop Signing Afternoon",
        url: "https://jabberworks.example/events/bookshop-signing-afternoon",
        date: "22 June 2026",
        blurb: "An informal afternoon for browsing books, chatting about characters, and getting signed copies with a tiny sketch in the front.",
        images: [
            {
                src: "/events/bookshop-signing/signing-desk.svg",
                alt: "A signing desk stacked with books and pens in a bookshop."
            }
        ]
    }
]
