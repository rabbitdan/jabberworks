export interface SanityImageRef {
  _type: 'image'
  asset: { _ref: string; _type: string }
  hotspot?: { x: number; y: number }
  crop?: object
  alt?: string
}

export interface R2ImageRef {
  _type: 'r2Image'
  url: string
  alt?: string
}

export interface BlogPostSummary {
  slug: string
  title: string
  publishedAt: string
  excerpt?: string
  tags?: string[]
  featuredImage?: SanityImageRef | R2ImageRef
}

export const FEATURED_IMAGE_PROJECTION = `"featuredImage": select(
    defined(featuredImage._type) => featuredImage { _type, alt, url, asset, hotspot, crop },
    featuredImage[0] { _type, alt, url, asset, hotspot, crop }
  )`

export function useBlogPosts() {
  const { urlFor } = useSanityImage()

  function featuredImageUrl(image: BlogPostSummary['featuredImage'], width = 800): string | null {
    if (!image) return null
    if (image._type === 'r2Image') return image.url
    if (image._type === 'image' && image.asset) return urlFor(image).width(width).auto('format').url()
    return null
  }

  function featuredImageAlt(image: BlogPostSummary['featuredImage'], fallback: string): string {
    return image?.alt ?? fallback
  }

  function formatDate(isoString: string): string {
    const date = new Date(isoString)
    const month = date.toLocaleString('en-US', { month: 'short' })
    const day = date.getDate()
    const year = date.getFullYear()
    const ordinal = (day % 100 > 10 && day % 100 < 14) ? 'th' : (['th', 'st', 'nd', 'rd'][day % 10] ?? 'th')
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    return `${month}. ${day}${ordinal}, ${year} at ${time}`
  }

  return { featuredImageUrl, featuredImageAlt, formatDate }
}
