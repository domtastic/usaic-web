/**
 * Create the 2026-2027 UIAA Ice Climbing season events.
 *
 * Source: the UIAA's updated calendar of 15 Sept 2026
 * (https://iceclimbing.sport/saas-fee-confirmed-for-2026-2027-world-tour-calgary-to-host-in-2028/)
 * — Saas-Fee confirmed, Calgary postponed to 2028, World Championships moved
 * to 28-30 Jan. Event links point at each event's iceclimbing.sport page.
 *
 * World Championships (senior and youth) are filed as World Cups with
 * "Championships" in the title — there's no separate event type for them.
 * Cheongsong, Saas-Fee and Edmonton reuse the photos from their 2026
 * editions (same venues); the rest have no photo yet.
 *
 * Uses fixed document IDs with createIfNotExists, so it's safe to re-run and
 * never overwrites an event that already exists (e.g. one edited in Studio).
 *
 * Run from the repo root with:
 *   npx sanity exec sanity/scripts/create-2026-27-season-events.ts --with-user-token
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const photo = (ref: string) => ({ _type: 'image', asset: { _type: 'reference', _ref: ref } })
const CHEONGSONG_PHOTO = photo('image-b477627174fd488b9a5f0f0c01d0d79efa5d0361-7952x5304-jpg')
const SAAS_FEE_PHOTO = photo('image-cb0365c72effaaedc9632cc4717b79f9dcc10b18-3888x5184-jpg')
const EDMONTON_PHOTO = photo('image-13d796016ec3d4e21773a22e3f0db8685bef3811-4912x7360-jpg')

const link = (id: number) => `https://iceclimbing.sport/events/?id=${id}`
// The events page only shows a Results button once an event has started, so
// these can be set ahead of time. uiaa.results.info is the UIAA's official
// results service and uses the same event IDs (all 8 checked via its API).
const results = (id: number) => `https://uiaa.results.info/event/${id}/`

const events: ({ _id: string; slug: string } & Record<string, unknown>)[] = [
  {
    _id: 'event-2026-27-cc-zilina',
    title: 'UIAA Continental Cup - Zilina',
    slug: 'uiaa-continental-cup-2026-zilina',
    eventType: ['continental-cup'],
    startDate: '2026-11-28',
    endDate: '2026-11-28',
    location: { city: 'Zilina', country: 'Slovakia' },
    description: 'Round 1 of the 2026-2027 UIAA Ice Climbing Continental Cup series. Youth Categories included.',
    eventLink: link(144),
    resultsLink: results(144),
  },
  {
    _id: 'event-2026-27-cc-brno',
    title: 'UIAA Continental Cup - Brno',
    slug: 'uiaa-continental-cup-2026-brno',
    eventType: ['continental-cup'],
    startDate: '2026-12-05',
    endDate: '2026-12-05',
    location: { city: 'Brno', country: 'Czech Republic' },
    description: 'Round 2 of the 2026-2027 UIAA Ice Climbing Continental Cup series. Youth Categories included.',
    eventLink: link(145),
    resultsLink: results(145),
  },
  {
    _id: 'event-2026-27-cc-utrecht',
    title: 'UIAA Continental Cup - Utrecht',
    slug: 'uiaa-continental-cup-2026-utrecht',
    eventType: ['continental-cup'],
    startDate: '2026-12-12',
    endDate: '2026-12-12',
    location: { city: 'Utrecht', country: 'Netherlands' },
    description: 'Round 3 of the 2026-2027 UIAA Ice Climbing Continental Cup series. Youth Categories included.',
    eventLink: link(146),
    resultsLink: results(146),
  },
  {
    _id: 'event-2026-27-wc-cheongsong',
    title: 'UIAA Ice Climbing World Cup 2027 - Cheongsong, Korea',
    slug: 'uiaa-ice-climbing-world-cup-2027-cheongsong-korea',
    eventType: ['world-cup'],
    startDate: '2027-01-15',
    endDate: '2027-01-17',
    location: { city: 'Cheongsong-gun', state: 'Gyeongsangbuk-do', country: 'South Korea' },
    description:
      'Round 1 of the 2027 UIAA Ice Climbing World Tour. The popular venue of Cheongsong, in South Korea’s apple growing region, offers a magnificent and technical ice tower, partisan local support and a rich variety of cultural events.',
    eventLink: link(143),
    resultsLink: results(143),
    featuredImage: CHEONGSONG_PHOTO,
  },
  {
    _id: 'event-2026-27-wc-saas-fee',
    title: 'UIAA Ice Climbing World Cup 2027 - Saas-Fee, Switzerland',
    slug: 'uiaa-ice-climbing-world-cup-2027-saas-fee-switzerland',
    eventType: ['world-cup'],
    startDate: '2027-01-21',
    endDate: '2027-01-23',
    location: { city: 'Saas-Fee', country: 'Switzerland' },
    description:
      'Round 2 of the 2027 UIAA Ice Climbing World Tour. The traditional World Cup venue, Saas-Fee’s spectacular ice dome in the famous Swiss resort offers a host of viewing points to see the world’s best ice climbers in action.',
    eventLink: link(154),
    resultsLink: results(154),
    featuredImage: SAAS_FEE_PHOTO,
  },
  {
    _id: 'event-2026-27-worlds-champagny',
    title: 'UIAA Ice Climbing World Championships 2027 - Champagny-en-Vanoise, France',
    slug: 'uiaa-ice-climbing-world-championships-2027-champagny-en-vanoise-france',
    eventType: ['world-cup'],
    startDate: '2027-01-28',
    endDate: '2027-01-30',
    location: { city: 'Champagny-en-Vanoise', country: 'France' },
    description:
      'The biennial UIAA Ice Climbing World Championships return to Champagny-en-Vanoise in the French Alps, organised by FFCAM.',
    eventLink: link(150),
    resultsLink: results(150),
  },
  {
    _id: 'event-2026-27-wc-edmonton',
    title: 'UIAA Ice Climbing World Cup 2027 - Edmonton, Canada',
    slug: 'uiaa-ice-climbing-world-cup-2027-edmonton-canada',
    eventType: ['world-cup'],
    startDate: '2027-02-25',
    endDate: '2027-02-27',
    location: { city: 'Edmonton', state: 'Alberta', country: 'Canada' },
    description:
      'Round 3 of the 2027 UIAA Ice Climbing World Tour in Edmonton, Canada, organised by Offbeat Entertainment and the Alpine Club of Canada.',
    eventLink: link(152),
    resultsLink: results(152),
    featuredImage: EDMONTON_PHOTO,
  },
  {
    _id: 'event-2026-27-youth-worlds-edmonton',
    title: 'UIAA Ice Climbing World Youth Championships 2027 - Edmonton, Canada',
    slug: 'uiaa-ice-climbing-world-youth-championships-2027-edmonton-canada',
    eventType: ['world-cup'],
    startDate: '2027-02-25',
    endDate: '2027-02-28',
    location: { city: 'Edmonton', state: 'Alberta', country: 'Canada' },
    description:
      'The UIAA Ice Climbing World Youth Championships 2027 in Edmonton, Canada, organised by Offbeat Entertainment and the Alpine Club of Canada.',
    eventLink: link(153),
    resultsLink: results(153),
    featuredImage: EDMONTON_PHOTO,
  },
]

async function main() {
  const tx = client.transaction()
  for (const { slug, ...e } of events) {
    tx.createIfNotExists({ ...e, _type: 'event', season: '2026-2027', slug: { _type: 'slug', current: slug } })
  }
  // Results links were added after the events were first created, so fill
  // them in where missing (never overwriting one set in Studio).
  for (const e of events) {
    tx.patch(e._id, (p) => p.setIfMissing({ resultsLink: e.resultsLink }))
  }
  await tx.commit()
  console.log(`Ensured ${events.length} 2026-2027 season events exist, with results links.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
