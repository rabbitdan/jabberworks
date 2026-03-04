import { books } from "~~/data/books"
import { seriesSections } from "~~/data/seriesSection"
import type { Book, BookSeriesSection } from "~~/types/content"

export function isExternalUrl(url: string): boolean {
    return /^https?:\/\//.test(url)
}

export function getBookPageUrl(book: Book): string {
    return book.pageLink?.url || `/books/${book.slug}`
}

export function getInternalBookPageRoutes(): string[] {
    return books
        .map(getBookPageUrl)
        .filter(url => url.startsWith("/"))
}

export function getAllBooks(): Book[] {
    return [...books].sort((a, b) => a.title.localeCompare(b.title))
}

export function getBookBySlug(slug: string): Book | undefined {
    return books.find(b => b.slug === slug)
}

export function getSeriesSections(): BookSeriesSection[] {
    return seriesSections
}

export function resolveFeaturedBooks(section: BookSeriesSection): Book[] {
    const wanted = section.featuredBookSlugs ?? []
    const map = new Map(books.map(b => [b.slug, b]))
    return wanted.map(slug => map.get(slug)).filter(Boolean) as Book[]
}
