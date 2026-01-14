// Run this script with: npx tsx scripts/import-usa-circuit.ts
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
  eventType: 'local-competition'
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
}

const events: EventData[] = [
  {
    title: "Pirates of the Carabiner",
    eventType: "local-competition",
    isUsaCircuit: true,
    startDate: "2025-09-27",
    location: {
      venue: "Scratchpad",
      city: "Salt Lake City",
      state: "UT",
      country: "USA"
    },
    description: "USA Circuit local competition at Scratchpad climbing gym.",
  },
  {
    title: "Picks & Pitons",
    eventType: "local-competition",
    isUsaCircuit: true,
    startDate: "2025-10-11",
    location: {
      venue: "Longmont Climbing Collective",
      city: "Longmont",
      state: "CO",
      country: "USA"
    },
    description: "USA Circuit local competition at the Longmont Climbing Collective.",
  },
  {
    title: "No Ice No Problem",
    eventType: "local-competition",
    isUsaCircuit: true,
    startDate: "2025-11-08",
    location: {
      venue: "UMD",
      city: "Duluth",
      state: "MN",
      country: "USA"
    },
    description: "USA Circuit local competition in Duluth, Minnesota.",
  },
  {
    title: "Kick-n-Pick",
    eventType: "local-competition",
    isUsaCircuit: true,
    startDate: "2025-11-08",
    location: {
      venue: "Ice Coop",
      city: "Boulder",
      state: "CO",
      country: "USA"
    },
    description: "USA Circuit local competition at Ice Coop in Boulder.",
  },
  {
    title: "Milwaukee Turners Dry Tooling Comp",
    eventType: "local-competition",
    isUsaCircuit: true,
    startDate: "2025-12-13",
    location: {
      venue: "Milwaukee Turners",
      city: "Milwaukee",
      state: "WI",
      country: "USA"
    },
    description: "USA Circuit local competition at Milwaukee Turners.",
  },
  {
    title: "Beast of the East Dry Tooling Comp",
    eventType: "local-competition",
    isUsaCircuit: true,
    startDate: "2026-02-14",
    location: {
      venue: "The Edge",
      city: "Half Moon",
      state: "NY",
      country: "USA"
    },
    description: "USA Circuit local competition at The Edge in Half Moon, NY.",
    eventLink: "https://theedgehalfmoon.com/beast-of-the-east-dry-tooling-comp/",
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
  console.log(`Importing ${events.length} USA Circuit events...`)
  
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
  console.log(`   USA Circuit Events: ${events.length}`)
}

importEvents()