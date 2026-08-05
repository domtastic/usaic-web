import type { SanityClient, SanityDocument } from 'sanity'

export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export async function approveSubmission(client: SanityClient, doc: SanityDocument): Promise<void> {
  // Every submittable event type is non-competitive (World Cup / Continental
  // Cup are excluded from public submission — see ALLOWED_EVENT_TYPES in
  // src/app/api/submit-event/route.ts), so approved events always get a
  // plain year, never a competitive season.
  const newEvent = await client.create({
    _type: 'event',
    title: doc.title,
    slug: { _type: 'slug', current: createSlug(doc.title as string) },
    eventType: doc.eventType,
    year: new Date(doc.startDate as string).getFullYear(),
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
