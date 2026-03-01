import type { Book } from "~~/types/content"

export const books: Book[] = [
    {
        _type: "book",
        slug: "the-river-otter-adventure",
        title: "The River Otter Adventure",
        cover: { src: "/images/books/river-otter/cover.jpg", alt: "Cover of The River Otter Adventure" },
        blurb: "A gentle story about…",
        activitySheets: [
            {
                thumb: { src: "/images/books/river-otter/sheets/maze-thumb.jpg", alt: "Maze activity sheet" },
                pdfUrl: "/downloads/river-otter/maze.pdf",
                linkText: "Download the maze sheet (PDF)"
            }
        ],
        buyLinks: [
            { url: "https://examplebookshop.com/river-otter", linkText: "Buy from Example Bookshop" }
        ],
        youtube: {
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            title: "Read-aloud video"
        }
    }
]
