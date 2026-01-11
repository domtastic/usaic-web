    // Run this script with: npx tsx scripts/import-events.ts
// Make sure SANITY_WRITE_TOKEN is in your .env.local file
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

interface EventData {
  title: string
  eventType: 'world-cup' | 'continental-cup' | 'ice-festival' | 'local-competition'
  isUsaCircuit: boolean
  startDate: string
  endDate?: string
  location: {
    venue?: string
    city: string
    state?: string
    country: string
  }
  description?: string
  eventLink?: string
  resultsLink?: string
}

const events: EventData[] = [
 /*
    // ============================================
  // WORLD CUPS 2025-2026
  // ============================================
  {
    title: "UIAA Ice Climbing World Cup - Cheongsong",
    eventType: "world-cup",
    isUsaCircuit: false,
    startDate: "2026-01-09",
    endDate: "2026-01-11",
    location: {
      city: "Cheongsong",
      country: "South Korea"
    },
    description: "Round 1 of the 2025-2026 UIAA Ice Climbing World Cup season. A staple venue on the World Tour, Cheongsong offers a magnificent and technical ice tower with partisan local support.",
    eventLink: "https://iceclimbing.sport/events/?id=121",
    resultsLink: "https://iceclimbing.sport/results/?event=121"
  },
  {
    title: "UIAA Ice Climbing World Cup - Saas-Fee",
    eventType: "world-cup",
    isUsaCircuit: false,
    startDate: "2026-01-22",
    endDate: "2026-01-24",
    location: {
      venue: "Ice Dome",
      city: "Saas-Fee",
      country: "Switzerland"
    },
    description: "Round 2 of the 2025-2026 UIAA Ice Climbing World Cup. Saas-Fee has hosted UIAA-sanctioned competitions since 2002, featuring a unique ice dome structure in the Swiss Alps.",
    eventLink: "https://iceclimbing.sport/events/?id=122",
    resultsLink: "https://iceclimbing.sport/results/?event=122"
  },
  {
    title: "UIAA Ice Climbing World Cup - Longmont",
    eventType: "world-cup",
    isUsaCircuit: true,
    startDate: "2026-02-20",
    endDate: "2026-02-22",
    location: {
      venue: "Longmont Climbing Collective",
      city: "Longmont",
      state: "CO",
      country: "USA"
    },
    description: "Round 3 of the 2025-2026 UIAA Ice Climbing World Cup. Hosted by the Longmont Climbing Collective and supported by the American Alpine Club (AAC).",
    eventLink: "https://iceclimbing.sport/events/?id=123",
    resultsLink: "https://iceclimbing.sport/results/?event=123"
  },
  {
    title: "UIAA Ice Climbing World Cup - Edmonton",
    eventType: "world-cup",
    isUsaCircuit: false,
    startDate: "2026-02-27",
    endDate: "2026-03-01",
    location: {
      city: "Edmonton",
      state: "AB",
      country: "Canada"
    },
    description: "Round 4 and Final of the 2025-2026 UIAA Ice Climbing World Cup. Hosted by Offbeat Entertain and supported by the Alpine Club of Canada (ACC). This event crowns the World Tour winners.",
    eventLink: "https://iceclimbing.sport/events/?id=124",
    resultsLink: "https://iceclimbing.sport/results/?event=124"
  },
*/
  // ============================================
  // CONTINENTAL CUPS 2025-2026
  // ============================================
  {
    title: "UIAA Continental Cup - Bern",
    eventType: "continental-cup",
    isUsaCircuit: false,
    startDate: "2025-11-22",
    endDate: "2025-11-22",
    location: {
      venue: "O'BLOC Climbing Centre",
      city: "Bern",
      country: "Switzerland"
    },
    description: "Round 1 of the 2025-2026 UIAA Ice Climbing Continental Cup series.",
    eventLink: "https://iceclimbing.sport/events/?id=115",
    resultsLink: "https://iceclimbing.sport/results/?event=115"
  },
  {
    title: "UIAA Continental Cup - Zilina",
    eventType: "continental-cup",
    isUsaCircuit: false,
    startDate: "2025-11-29",
    endDate: "2025-11-29",
    location: {
      city: "Zilina",
      country: "Slovakia"
    },
    description: "Round 2 of the 2025-2026 UIAA Ice Climbing Continental Cup series. Youth Categories included.",
    eventLink: "https://iceclimbing.sport/events/?id=116",
    resultsLink: "https://iceclimbing.sport/results/?event=116"
  },
  {
    title: "UIAA Continental Cup - Brno",
    eventType: "continental-cup",
    isUsaCircuit: false,
    startDate: "2025-12-06",
    endDate: "2025-12-06",
    location: {
      city: "Brno",
      country: "Czech Republic"
    },
    description: "Round 3 of the 2025-2026 UIAA Ice Climbing Continental Cup series. Youth Categories included.",
    eventLink: "https://iceclimbing.sport/events/?id=117",
    resultsLink: "https://iceclimbing.sport/results/?event=117"
  },
  {
    title: "UIAA Continental Cup - Utrecht",
    eventType: "continental-cup",
    isUsaCircuit: false,
    startDate: "2025-12-13",
    endDate: "2025-12-13",
    location: {
      city: "Utrecht",
      country: "Netherlands"
    },
    description: "Round 4 of the 2025-2026 UIAA Ice Climbing Continental Cup series. Youth Categories included.",
    eventLink: "https://iceclimbing.sport/events/?id=118",
    resultsLink: "https://iceclimbing.sport/results/?event=118"
  },
  {
    title: "UIAA World Youth Championships - Malbun",
    eventType: "continental-cup",
    isUsaCircuit: false,
    startDate: "2026-02-01",
    endDate: "2026-02-01",
    location: {
      city: "Malbun",
      country: "Liechtenstein"
    },
    description: "UIAA Ice Climbing World Youth Championships.",
    eventLink: "https://iceclimbing.sport/events/?id=125",
    resultsLink: "https://iceclimbing.sport/results/?event=125"
  },
  {
    title: "UIAA Continental Cup - Sunderland",
    eventType: "continental-cup",
    isUsaCircuit: false,
    startDate: "2026-02-06",
    endDate: "2026-02-08",
    location: {
      city: "Sunderland",
      country: "England"
    },
    description: "UIAA Ice Climbing Continental Cup. Youth Categories included.",
    eventLink: "https://iceclimbing.sport/events/?id=126",
    resultsLink: "https://iceclimbing.sport/results/?event=126"
  },
  {
    title: "UIAA Continental Cup - Oulu",
    eventType: "continental-cup",
    isUsaCircuit: false,
    startDate: "2026-03-07",
    endDate: "2026-03-07",
    location: {
      city: "Oulu",
      country: "Finland"
    },
    description: "UIAA Ice Climbing Continental Cup. Youth Categories included.",
    eventLink: "https://iceclimbing.sport/events/?id=127",
    resultsLink: "https://iceclimbing.sport/results/?event=127"
  },

  // ============================================
  // NORTH AMERICAN ICE FESTIVALS 2025-2026
  // ============================================
  {
    title: "Cookout Ice Fest",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2025-11-28",
    endDate: "2025-11-30",
    location: {
      city: "Cooke City",
      state: "MT",
      country: "USA"
    },
    description: "Part of the Wyoming Ice Fest / Montana Ice Festival. Clinic registration opens September 15, 2025.",
    eventLink: "https://wyoicefest.com/product-category/the-cookeout/"
  },
  {
    title: "Bozeman Ice Festival",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2025-12-10",
    endDate: "2025-12-14",
    location: {
      city: "Bozeman",
      state: "MT",
      country: "USA"
    },
    description: "Annual ice climbing festival in Bozeman, Montana featuring clinics, demos, and community events.",
    eventLink: "https://bozemanicefest.com/home"
  },
  {
    title: "Wyoming Ice Festival",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-01-01",
    endDate: "2026-01-04",
    location: {
      city: "Cody",
      state: "WY",
      country: "USA"
    },
    description: "Annual ice climbing festival in Cody, Wyoming.",
    eventLink: "https://wyoicefest.com"
  },
  {
    title: "All In Ice Fest",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-01-09",
    endDate: "2026-01-11",
    location: {
      city: "Ouray",
      state: "CO",
      country: "USA"
    },
    description: "Ice climbing festival in Ouray, Colorado - the Ice Climbing Capital of the United States.",
    eventLink: "https://allinicefest.com"
  },
  {
    title: "Sandstone Ice Festival",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-01-09",
    endDate: "2026-01-11",
    location: {
      venue: "Robinson Quarry Park",
      city: "Sandstone",
      state: "MN",
      country: "USA"
    },
    description: "Ice climbing festival at the Sandstone Ice Park.",
    eventLink: "https://www.facebook.com/Sandstoneicefestival"
  },
  {
    title: "Ouray Ice Festival and Competition",
    eventType: "ice-festival",
    isUsaCircuit: true,
    startDate: "2026-01-22",
    endDate: "2026-01-25",
    location: {
      venue: "Ouray Ice Park",
      city: "Ouray",
      state: "CO",
      country: "USA"
    },
    description: "The premier ice climbing festival in the United States, featuring competitions and clinics at the world-famous Ouray Ice Park.",
    eventLink: "https://ourayicepark.com/ouray-ice-festival"
  },
  {
    title: "Winona Ice Climbing Festival",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-01-29",
    endDate: "2026-02-01",
    location: {
      venue: "Winona Ice Park",
      city: "Winona",
      state: "MN",
      country: "USA"
    },
    description: "Ice climbing festival at Winona Ice Park.",
    eventLink: "https://www.bigriverclimbingguides.com/winona-ice-fest"
  },
  {
    title: "Smuggler's Notch Ice Bash",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-01-30",
    endDate: "2026-02-01",
    location: {
      city: "Smugglers Notch",
      state: "VT",
      country: "USA"
    },
    description: "Annual ice climbing bash in Vermont's Smugglers Notch.",
    eventLink: "https://www.petracliffs.com/smuggs-ice-bash"
  },
  {
    title: "Catskill Ice Festival",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-01-30",
    endDate: "2026-02-02",
    location: {
      city: "New Paltz",
      state: "NY",
      country: "USA"
    },
    description: "Ice climbing festival in the Catskills region of New York.",
    eventLink: "https://alpineendeavors.com/catskill-ice-climbing-festival"
  },
  {
    title: "Mt. Washington Valley Ice Festival",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-02-05",
    endDate: "2026-02-08",
    location: {
      city: "North Conway",
      state: "NH",
      country: "USA"
    },
    description: "One of the largest ice climbing festivals in the Northeast, featuring world-class climbing in New Hampshire.",
    eventLink: "https://www.mwv-icefest.com"
  },
  {
    title: "Duluth Ice & Mixed Fest",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-02-07",
    endDate: "2026-02-07",
    location: {
      city: "Duluth",
      state: "MN",
      country: "USA"
    },
    description: "Ice and mixed climbing festival hosted by the Duluth Climbers Coalition.",
    eventLink: "https://www.duluthclimbers.org/ice-fest"
  },
  {
    title: "Lake City Ice Climbing Festival",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-02-07",
    endDate: "2026-02-07",
    location: {
      venue: "Lake City Ice Park",
      city: "Lake City",
      state: "CO",
      country: "USA"
    },
    description: "Ice climbing festival at Lake City Ice Park in Colorado.",
    eventLink: "https://www.lakecityice.com/festival"
  },
  {
    title: "Michigan Ice Fest",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-02-11",
    endDate: "2026-02-15",
    location: {
      city: "Munising",
      state: "MI",
      country: "USA"
    },
    description: "One of the largest ice climbing festivals in the Midwest, featuring climbing on Lake Superior ice formations.",
    eventLink: "https://michiganicefest.com"
  },
  {
    title: "Adirondack International Mountainfest",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-02-14",
    endDate: "2026-02-16",
    location: {
      city: "Keene Valley",
      state: "NY",
      country: "USA"
    },
    description: "International mountaineering festival in the Adirondacks featuring ice climbing clinics and events.",
    eventLink: "https://mountaineer.com/mountainfest/"
  },
  {
    title: "Valdez Ice Fest",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-02-19",
    endDate: "2026-02-22",
    location: {
      city: "Valdez",
      state: "AK",
      country: "USA"
    },
    description: "Ice climbing festival in Valdez, Alaska featuring some of the most spectacular ice climbing in North America.",
    eventLink: "https://www.valdezicefest.com"
  },
  {
    title: "Festiglace",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-02-18",
    endDate: "2026-02-22",
    location: {
      city: "Pont-Rouge",
      state: "QC",
      country: "Canada"
    },
    description: "One of the largest ice climbing festivals in North America, held in Quebec, Canada.",
    eventLink: "https://www.festiglace.org/en/home/"
  },
  {
    title: "YEG Ice Fest",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-02-26",
    endDate: "2026-03-01",
    location: {
      city: "Edmonton",
      state: "AB",
      country: "Canada"
    },
    description: "Edmonton's ice climbing festival, held in conjunction with the UIAA Ice Climbing World Cup.",
    eventLink: "https://www.climbyeg.com/icefest"
  },
  {
    title: "Nipigon Ice Festival",
    eventType: "ice-festival",
    isUsaCircuit: false,
    startDate: "2026-03-06",
    endDate: "2026-03-08",
    location: {
      city: "Nipigon",
      state: "ON",
      country: "Canada"
    },
    description: "40th Anniversary! One of the longest-running ice climbing festivals in North America.",
    eventLink: "https://outdoorskillsandthrills.com/nipigonicefest"
  },
]

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function importEvents() {
  console.log(`Importing ${events.length} events...`)
  
  for (const event of events) {
    const doc = {
      _type: 'event',
      title: event.title,
      slug: {
        _type: 'slug',
        current: createSlug(event.title),
      },
      eventType: event.eventType,
      isUsaCircuit: event.isUsaCircuit,
      startDate: event.startDate,
      ...(event.endDate && { endDate: event.endDate }),
      location: event.location,
      ...(event.description && { description: event.description }),
      ...(event.eventLink && { eventLink: event.eventLink }),
      ...(event.resultsLink && { resultsLink: event.resultsLink }),
    }
    
    try {
      const result = await client.create(doc)
      console.log(`✓ Created: ${event.title}`)
    } catch (error) {
      console.error(`✗ Failed: ${event.title}`, error)
    }
  }
  
  console.log('\nDone!')
  console.log('\n📊 Summary:')
  console.log(`   World Cups: ${events.filter(e => e.eventType === 'world-cup').length}`)
  console.log(`   Continental Cups: ${events.filter(e => e.eventType === 'continental-cup').length}`)
  console.log(`   Ice Festivals: ${events.filter(e => e.eventType === 'ice-festival').length}`)
  console.log(`   USA Circuit Events: ${events.filter(e => e.isUsaCircuit).length}`)
}

importEvents()