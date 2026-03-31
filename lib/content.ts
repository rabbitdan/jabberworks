import type { Book } from "~~/types/content"

export function isExternalUrl(url: string): boolean {
    return /^https?:\/\//.test(url)
}

export function getBookPageUrl(book: Book): string {
    return book.pageLink?.url || `/books/${book.slug}`
}
