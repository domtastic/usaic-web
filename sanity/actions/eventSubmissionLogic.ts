import type { SanityClient, SanityDocument } from 'sanity'
import { isCompetitive } from '@/lib/eventTypes'

export function createSlug(title: string): string {
  const slug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
  // Titles with no Latin/numeric characters (e.g. CJK, emoji-only) reduce to
  // an empty string — fall back to something guaranteed non-empty, since the
  // programmatic create() below bypasses Studio's slug-uniqueness UI check.
  return slug || `event-${crypto.randomUUID().slice(0, 8)}`
}

export async function approveSubmission(client: SanityClient, doc: SanityDocument): Promise<void> {
  // Public submission already excludes World Cup/Continental Cup (see
  // SUBMITTABLE_EVENT_TYPES / the API route's allow-list), but that's
  // enforced upstream, not here — check it ourselves too, so this function
  // stays correct even if the allow-list is ever loosened, instead of
  // silently publishing a competitive event with no season.
  if (isCompetitive(doc.eventType)) {
    throw new Error(
      `"${doc.title}" is tagged as a competitive event type (World Cup/Continental Cup) — refusing to auto-approve. Competitive events aren't accepted via public submission; check this submission's Event Type field.`
    )
  }

  const newEventId = crypto.randomUUID()

  // A single transaction: if the patch (marking the submission approved)
  // fails, the event create is rolled back with it — no orphaned, live,
  // unreferenced event left behind on a partial failure.
  await client
    .transaction()
    .create({
      _id: newEventId,
      _type: 'event',
      title: doc.title,
      slug: { _type: 'slug', current: createSlug(doc.title as string) },
      eventType: doc.eventType,
      // startDate is a date-only string ("YYYY-MM-DD"), which Date parses as
      // UTC midnight — read the year back in UTC too, or a negative-UTC-offset
      // timezone (e.g. US) would silently read one year too early near Jan 1.
      year: new Date(doc.startDate as string).getUTCFullYear(),
      startDate: doc.startDate,
      endDate: doc.endDate,
      location: doc.location,
      description: doc.description,
      eventLink: doc.eventLink,
      featuredImage: doc.posterImage,
      featured: false,
    })
    .patch(doc._id, {
      set: {
        status: 'approved',
        // _weak must be set on the reference value itself — the schema's
        // `weak: true` only affects the Studio form UI, not references built
        // programmatically here, and without it Sanity blocks deleting the
        // event later ("cannot be deleted as there are references to it").
        createdEventRef: { _type: 'reference', _ref: newEventId, _weak: true },
      },
    })
    .commit()
}

export async function rejectSubmission(client: SanityClient, id: string): Promise<void> {
  await client.patch(id).set({ status: 'rejected' }).commit()
}
