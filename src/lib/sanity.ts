import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  // Off: pages are cached by Next and refreshed by the publish webhook
  // (/api/revalidate). Sanity's API CDN can still serve the pre-publish answer
  // for a few seconds, which made a refresh rebuild pages with stale data.
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source).auto('format').quality(80)
}