/**
 * Upload script for 2017 Adult Historical Roster
 *
 * Run with:
 * npx sanity exec scripts/upload-2017-roster.ts --with-user-token
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const roster2017 = {
  _type: 'historicalRoster',
  _id: 'roster-2017',
  season: '2017',
  athletes: [
    { _key: 'beirne', name: 'Thomas Beirne', disciplines: [], category: 'adult' },
    { _key: 'bono', name: 'Katie Bono', disciplines: [], category: 'adult' },
    { _key: 'cordery', name: 'Robert Cordery', disciplines: [], category: 'adult' },
    { _key: 'foster', name: 'Liam Foster', disciplines: [], category: 'adult' },
    { _key: 'fowler', name: 'Wesley Fowler', disciplines: [], category: 'adult' },
    { _key: 'goralski', name: 'Beth Goralski', disciplines: [], category: 'adult' },
    { _key: 'kleeves', name: 'Grant Kleeves', disciplines: [], category: 'adult' },
    { _key: 'lindlau', name: 'Kevin Lindlau', disciplines: [], category: 'adult' },
    { _key: 'lydiard', name: 'Luke Lydiard', disciplines: [], category: 'adult' },
    { _key: 'montgomery', name: 'Aaron Montgomery', disciplines: [], category: 'adult' },
    { _key: 'novikov', name: 'Alexander Novikov', disciplines: [], category: 'adult' },
    { _key: 'stritch-carter', name: 'Carter Stritch', disciplines: [], category: 'adult' },
    { _key: 'stritch-kendra', name: 'Kendra Stritch', disciplines: [], category: 'adult' },
    { _key: 'tomczik', name: 'Angela Tomczik', disciplines: [], category: 'adult' },
  ],
}

async function uploadRoster() {
  console.log('Uploading 2017 Historical Roster...')
  await client.createOrReplace(roster2017)
  console.log('✅ 2017 roster uploaded')
}

uploadRoster()
