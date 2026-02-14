/**
 * Upload script for 2023–2024 Adult Historical Roster
 *
 * Run with:
 * npx sanity exec scripts/upload-2023-24-roster.ts --with-user-token
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const roster2023_24 = {
  _type: 'historicalRoster',
  _id: 'roster-2023-24',
  season: '2023-2024',
  athletes: [
    { _key: 'dyer', name: 'Joanne Dyer', disciplines: [], category: 'adult' },
    { _key: 'griscom', name: 'Keenan Griscom', disciplines: [], category: 'adult' },
    { _key: 'hudson', name: 'Sarah Hudson', disciplines: [], category: 'adult' },
    { _key: 'junkar', name: 'Christian Junkar', disciplines: [], category: 'adult' },
    { _key: 'koepke', name: 'Dan Koepke', disciplines: [], category: 'adult' },
    { _key: 'kyffin', name: 'Chelsea Kyffin', disciplines: [], category: 'adult' },
    { _key: 'limbach', name: 'Angela Limbach', disciplines: [], category: 'adult' },
    { _key: 'lindlau', name: 'Kevin Lindlau', disciplines: [], category: 'adult' },
    { _key: 'mccauley', name: 'Ryan McCauley', disciplines: [], category: 'adult' },
    { _key: 'mericle', name: 'Nicole Mericle', disciplines: [], category: 'adult' },
    { _key: 'plinska', name: 'Dan Plinska', disciplines: [], category: 'adult' },
    { _key: 'prather', name: 'Marian Prather', disciplines: [], category: 'adult' },
    { _key: 'reynolds', name: 'Rosalind Reynolds', disciplines: [], category: 'adult' },
    { _key: 'shirley', name: 'Catalina Shirley', disciplines: [], category: 'adult' },
    { _key: 'stritch', name: 'Kendra Stritch', disciplines: [], category: 'adult' },
    { _key: 'umstead', name: 'Ian Umstead', disciplines: [], category: 'adult' },
  ],
}

async function uploadRoster() {
  console.log('Uploading 2023–2024 Historical Roster...')
  console.log(`Total athletes: ${roster2023_24.athletes.length}`)

  try {
    const result = await client.createOrReplace(roster2023_24)
    console.log('✅ Successfully uploaded roster!')
    console.log(`Document ID: ${result._id}`)
  } catch (error) {
    console.error('❌ Error uploading roster:', error)
    process.exit(1)
  }
}

uploadRoster()
