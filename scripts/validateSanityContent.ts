import { createClient } from '@sanity/client'

const projectId = process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || 'es2dovdw'

const client = createClient({
  projectId,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const SLUG_REGEX = /[^a-z0-9-]/

type SanityDoc = {
  _type: string
  title?: string
  slug?: { current?: string }
}

const docs: SanityDoc[] = await client.fetch(`*[defined(slug.current)]{ _type, title, slug }`)

const problems: string[] = []

for (const doc of docs) {
  const label = `[${doc._type}] "${doc.title ?? '(no title)'}" `
  const current = doc.slug?.current

  if (!current) {
    problems.push(`${label}has a missing or empty slug`)
  } else if (SLUG_REGEX.test(current)) {
    problems.push(`${label}has invalid slug: "${current}"`)
  }
}

if (problems.length > 0) {
  console.error('\nSanity content validation failed:\n')
  for (const problem of problems) {
    console.error(`  ${problem}`)
  }
  console.error()
  process.exit(1)
}

console.log(`Validated ${docs.length} documents — all slugs OK.`)
