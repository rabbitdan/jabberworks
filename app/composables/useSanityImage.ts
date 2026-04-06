import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

const builder = createImageUrlBuilder({
  projectId: 'es2dovdw',
  dataset: 'production',
})

export function useSanityImage() {
  function urlFor(source: SanityImageSource) {
    return builder.image(source).auto('format')
  }

  return { urlFor }
}
