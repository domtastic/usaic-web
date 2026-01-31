/**
 * Upload script for 2024-2025 Adult Historical Roster
 *
 * Run with: npx sanity exec scripts/upload-2024-25-roster.ts --with-user-token
 *
 * Make sure you're in the /sanity directory when running this command.
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const roster2024_25 = {
  _type: 'historicalRoster',
  _id: 'roster-2024-25',
  season: '2024-25',
  athletes: [
    { _key: 'bergman', name: 'Noah Bergman', disciplines: ['Lead'], category: 'adult' },
    { _key: 'buhay', name: 'Corey Buhay', disciplines: ['Lead'], category: 'adult' },
    { _key: 'castro', name: 'Sam Castro', disciplines: ['Speed'], category: 'adult' },
    { _key: 'durham', name: 'Matt Durham', disciplines: ['Speed'], category: 'adult' },
    { _key: 'dyer', name: 'Joanne Dyer', disciplines: ['Speed'], category: 'adult' },
    { _key: 'ellis', name: 'Eli Ellis', disciplines: ['Lead'], category: 'adult' },
    { _key: 'estenson', name: 'Mallorie Estenson', disciplines: ['Lead'], category: 'adult' },
    { _key: 'gehrlein', name: 'Thomas Gehrlein', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'gomez', name: 'Erik Gomez', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'gonzalez-padron', name: 'Dom Gonzalez-Padron', disciplines: ['Speed'], category: 'adult' },
    { _key: 'griscom', name: 'Keenan Griscom', disciplines: ['Lead'], category: 'adult' },
    { _key: 'hutchinson', name: 'Laura Hutchinson', disciplines: ['Speed'], category: 'adult' },
    { _key: 'illick', name: 'Eric Illick', disciplines: ['Speed'], category: 'adult' },
    { _key: 'kempney', name: 'Tyler Kempney', disciplines: ['Lead'], category: 'adult' },
    { _key: 'kyffin', name: 'Chelsea Kyffin', disciplines: ['Lead'], category: 'adult' },
    { _key: 'levine', name: 'Lindsay Levine', disciplines: ['Lead'], category: 'adult' },
    { _key: 'limbach', name: 'Angela Limbach', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'lindlau', name: 'Kevin Lindlau', disciplines: ['Lead'], category: 'adult' },
    { _key: 'mccauley', name: 'Ryan McCauley', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'perez', name: 'Jessica Perez', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'reed', name: 'Scott Reed', disciplines: ['Lead'], category: 'adult' },
    { _key: 'reynolds', name: 'Rosalind Reynolds', disciplines: ['Lead'], category: 'adult' },
    { _key: 'rudow', name: 'Alex Rudow', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'schiffer', name: 'Zoe Schiffer', disciplines: ['Speed'], category: 'adult' },
    { _key: 'serra', name: 'Sam Serra', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'shirley', name: 'Catalina Shirley', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'stritch', name: 'Kendra Stritch', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'tourtellotte', name: 'Gabrielle Tourtellotte', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'umstead', name: 'Ian Umstead', disciplines: ['Lead', 'Speed'], category: 'adult' },
    { _key: 'whitley', name: 'Wilson Whitley', disciplines: ['Lead', 'Speed'], category: 'adult' },
  ],
}

async function uploadRoster() {
  console.log('Uploading 2024-25 Historical Roster...')
  console.log(`Total athletes: ${roster2024_25.athletes.length}`)

  try {
    const result = await client.createOrReplace(roster2024_25)
    console.log('✅ Successfully uploaded roster!')
    console.log(`Document ID: ${result._id}`)
  } catch (error) {
    console.error('❌ Error uploading roster:', error)
    process.exit(1)
  }
}

uploadRoster()
