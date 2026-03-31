// plugins/sanity.ts
import { createClient } from '@sanity/client'

export default defineNuxtPlugin(() => {
  const client = createClient({
    projectId: useRuntimeConfig().public.sanityProjectId,
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
  })
  return { provide: { sanity: client } }
})