import { getCliClient } from 'sanity/cli'
import { isCompetitive } from '@/lib/eventTypes'

const client = getCliClient()

interface EventDoc {
  _id: string
  title: string
  eventType?: string[]
  season?: string
  startDate: string
}

async function main() {
  const events: EventDoc[] = await client.fetch(
    `*[_type == "event"]{ _id, title, eventType, season, startDate }`
  )

  console.log(`Found ${events.length} events\n`)

  let competitive = 0
  let migrated = 0

  for (const event of events) {
    if (isCompetitive(event.eventType)) {
      competitive++
      console.log(`•  "${event.title}" — competitive, keeping season (${event.season})`)
      continue
    }

    // startDate is a date-only string, parsed as UTC midnight — read the
    // year back in UTC too, or a negative-UTC-offset timezone reads one
    // year too early for dates near Jan 1.
    const year = new Date(event.startDate).getUTCFullYear()

    try {
      await client.patch(event._id).set({ year }).unset(['season']).commit()
      console.log(`✅ "${event.title}": season "${event.season || ''}" -> year ${year}`)
      migrated++
    } catch (err) {
      console.error(`❌ Failed to update "${event.title}":`, err)
    }
  }

  console.log(`\nDone! Competitive (season kept): ${competitive}, Migrated to year: ${migrated}`)
}

main().catch(console.error)
