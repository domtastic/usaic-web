// Run with: npx tsx scripts/import-2027-ice-festivals.ts
// Make sure SANITY_WRITE_TOKEN is in your .env.local file
//
// Only includes festivals with dates officially confirmed by the organizer
// as of 2026-08-10 (sources in comments below). Several major festivals
// (Valdez, Sandstone, Catskill, Festiglace) hadn't announced 2027 dates yet
// as of this writing — re-run a similar script for those once confirmed.
//
// Safe to re-run: each doc gets a deterministic _id and uses
// createIfNotExists, so already-imported festivals are silently skipped
// instead of duplicated.
import 'dotenv/config'
import { config } from 'dotenv'
config({ path: '.env.local' })
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'g8gl3bgu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

interface FestivalData {
  title: string
  startDate: string
  endDate?: string
  location: {
    venue?: string
    city: string
    state?: string
    country: string
  }
  eventLink: string
}

const festivals: FestivalData[] = [
  {
    // Source: https://visitwinona.com/festival/winona-ice-fest/
    title: 'Winona Ice Fest',
    startDate: '2027-02-03',
    endDate: '2027-02-07',
    location: { city: 'Winona', state: 'MN', country: 'USA' },
    eventLink: 'https://visitwinona.com/festival/winona-ice-fest/',
  },
  {
    // Source: https://www.mwvicefest.com/
    title: 'Mount Washington Valley Ice Fest',
    startDate: '2027-02-04',
    endDate: '2027-02-07',
    location: { city: 'North Conway', state: 'NH', country: 'USA' },
    eventLink: 'https://www.mwvicefest.com/',
  },
  {
    // Source: https://www.lakecityice.com/festival-1
    title: 'Lake City Ice Climbing Festival',
    startDate: '2027-02-06',
    location: { city: 'Lake City', state: 'CO', country: 'USA' },
    eventLink: 'https://www.lakecityice.com/festival-1',
  },
  {
    // Source: https://michiganicefest.com/information/schedule/event-schedule/
    title: 'Michigan Ice Fest',
    startDate: '2027-02-10',
    endDate: '2027-02-14',
    location: { city: 'Munising', state: 'MI', country: 'USA' },
    eventLink: 'https://michiganicefest.com/',
  },
  {
    // Source: https://mountaineer.com/mountainfest/
    title: 'Adirondack International Mountainfest',
    startDate: '2027-02-13',
    endDate: '2027-02-15',
    location: { city: 'Keene Valley', state: 'NY', country: 'USA' },
    eventLink: 'https://mountaineer.com/mountainfest/',
  },
  {
    // Source: https://ourayicepark.com/
    title: 'Ouray Ice Festival',
    startDate: '2027-01-28',
    endDate: '2027-01-31',
    location: { city: 'Ouray', state: 'CO', country: 'USA' },
    eventLink: 'https://ourayicepark.com/',
  },
  {
    // Source: https://wyoicefest.com/ — spans New Year's, starts Dec 31, 2026
    title: 'Wyoming Ice Festival',
    startDate: '2026-12-31',
    endDate: '2027-01-03',
    location: { city: 'Cody', state: 'WY', country: 'USA' },
    eventLink: 'https://wyoicefest.com/',
  },
  {
    // Source: https://bozemanicefest.com/
    title: 'Bozeman Ice Festival',
    startDate: '2026-12-09',
    endDate: '2026-12-13',
    location: { city: 'Bozeman', state: 'MT', country: 'USA' },
    eventLink: 'https://bozemanicefest.com/',
  },
  {
    // Source: https://www.petracliffs.com/smuggs-ice-bash — "20th Annual"
    title: "Smuggler's Notch Ice Bash",
    startDate: '2027-01-29',
    endDate: '2027-01-31',
    location: { city: 'Smugglers Notch', state: 'VT', country: 'USA' },
    eventLink: 'https://www.petracliffs.com/smuggs-ice-bash',
  },
]

function createSlug(title: string, year: number): string {
  return `${title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')}-${year}`
}

async function importFestivals() {
  console.log(`Importing ${festivals.length} confirmed ice festivals...\n`)

  for (const festival of festivals) {
    const year = new Date(festival.startDate).getUTCFullYear()
    const slug = createSlug(festival.title, year)

    const doc = {
      _id: `event-${slug}`,
      _type: 'event',
      title: festival.title,
      slug: { _type: 'slug', current: slug },
      eventType: ['ice-festival'],
      year,
      startDate: festival.startDate,
      endDate: festival.endDate,
      location: festival.location,
      eventLink: festival.eventLink,
      featured: false,
    }

    try {
      await client.createIfNotExists(doc)
      console.log(`✅ ${festival.title} (${festival.startDate}${festival.endDate ? ` - ${festival.endDate}` : ''})`)
    } catch (err) {
      console.error(`❌ Failed to import "${festival.title}":`, err)
    }
  }

  console.log('\nDone!')
}

importFestivals()
