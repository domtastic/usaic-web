import { getCliClient } from 'sanity/cli'

const client = getCliClient()

interface SanityEvent {
  _id: string
  title: string
  startDate: string
  season?: string
}

function getSeasonFromDate(dateStr: string): string {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = date.getMonth() // 0-indexed

  // Season runs Oct - Apr
  // Oct-Dec = start of season, Jan-Sep = end of season
  if (month >= 9) {
    // Oct (9), Nov (10), Dec (11) -> start of new season
    return `${year}-${(year + 1).toString().slice(-2)}`
  } else {
    // Jan-Sep -> end of previous season
    return `${year - 1}-${year.toString().slice(-2)}`
  }
}

async function updateEventSeasons() {
  const events: SanityEvent[] = await client.fetch(
    `*[_type == "event"] { _id, title, startDate, season }`
  )

  console.log(`Found ${events.length} events\n`)

  let updated = 0
  let skipped = 0

  for (const event of events) {
    if (!event.startDate) {
      console.log(`⚠️  Skipping "${event.title}" - no start date`)
      skipped++
      continue
    }

    const correctSeason = getSeasonFromDate(event.startDate)

    if (event.season === correctSeason) {
      console.log(`✓  "${event.title}" already set to ${correctSeason}`)
      skipped++
      continue
    }

    try {
      await client.patch(event._id).set({ season: correctSeason }).commit()
      console.log(`✅ "${event.title}" (${event.startDate}) -> ${correctSeason}${event.season ? ` (was: ${event.season})` : ''}`)
      updated++
    } catch (err) {
      console.error(`❌ Failed to update "${event.title}":`, err)
    }
  }

  console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`)
}

updateEventSeasons().catch(console.error)
