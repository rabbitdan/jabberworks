export type ParagraphValue = string | string[]

export function toParagraphs(value?: ParagraphValue | null): string[] {
  if (!value) return []
  if (Array.isArray(value)) return value.map(v => v.trim()).filter(Boolean)

  return value
    .split(/\n\s*\n/g)
    .map(paragraph => paragraph.trim())
    .filter(Boolean)
}

export function firstParagraph(value?: ParagraphValue | null): string {
  return toParagraphs(value)[0] || ""
}
