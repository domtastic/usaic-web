import { getCliClient } from 'sanity/cli'

const client = getCliClient()

interface SanityEvent {
  _id: string
  title: string
  season?: string
}

// Converts short-year season strings (e.g. "2025-26") to full-year (e.g. "2025-2026").
// Summer seasons (e.g. "summer-2026") are already single-year and left untouched.
function toFullYearSeason(season: string): string | null {
  const match = season.match(/^(\d{4})-(\d{2})$/)
  if (!match) return null

  const startYear = match[1]
  const endYear = `${startYear.slice(0, 2)}${match[2]}`
  return `${startYear}-${endYear}`
}

async function migrateSeasons() {
  const events: SanityEvent[] = await client.fetch(
    `*[_type == "event" && defined(season)] { _id, title, season }`
  )

  console.log(`Found ${events.length} events with a season set\n`)

  let updated = 0
  let skipped = 0

  for (const event of events) {
    const fullYearSeason = toFullYearSeason(event.season!)

    if (!fullYearSeason) {
      console.log(`•  "${event.title}" — season "${event.season}" already full-year or non-standard, skipping`)
      skipped++
      continue
    }

    try {
      await client.patch(event._id).set({ season: fullYearSeason }).commit()
      console.log(`✅ "${event.title}": ${event.season} -> ${fullYearSeason}`)
      updated++
    } catch (err) {
      console.error(`❌ Failed to update "${event.title}":`, err)
    }
  }

  console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`)
}

migrateSeasons().catch(console.error)
