import type { SanityClient, SanityDocument } from 'sanity'

export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// The ice climbing season runs Oct-Apr (Oct-Dec is the start of a season,
// Jan-Apr is the end); May-Sep is the off-season, tracked as "Summer <year>"
// per the season field's own dropdown options (see sanity/schemaTypes/event.ts).
export function computeSeason(dateStr: string): string {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = date.getMonth()
  if (month >= 9) return `${year}-${year + 1}` // Oct-Dec
  if (month <= 3) return `${year - 1}-${year}` // Jan-Apr
  return `summer-${year}` // May-Sep
}

export async function approveSubmission(client: SanityClient, doc: SanityDocument): Promise<void> {
  const newEvent = await client.create({
    _type: 'event',
    title: doc.title,
    slug: { _type: 'slug', current: createSlug(doc.title as string) },
    eventType: doc.eventType,
    season: computeSeason(doc.startDate as string),
    startDate: doc.startDate,
    endDate: doc.endDate,
    location: doc.location,
    description: doc.description,
    eventLink: doc.eventLink,
    featuredImage: doc.posterImage,
    featured: false,
  })

  await client
    .patch(doc._id)
    .set({
      status: 'approved',
      // _weak must be set on the reference value itself — the schema's
      // `weak: true` only affects the Studio form UI, not references built
      // programmatically here, and without it Sanity blocks deleting the
      // event later ("cannot be deleted as there are references to it").
      createdEventRef: { _type: 'reference', _ref: newEvent._id, _weak: true },
    })
    .commit()
}

export async function rejectSubmission(client: SanityClient, id: string): Promise<void> {
  await client.patch(id).set({ status: 'rejected' }).commit()
}
