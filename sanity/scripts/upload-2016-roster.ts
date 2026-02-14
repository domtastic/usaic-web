/**
 * Upload script for 2016 Adult Historical Roster
 *
 * Run with:
 * npx sanity exec scripts/upload-2016-roster.ts --with-user-token
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const roster2016 = {
  _type: 'historicalRoster',
  _id: 'roster-2016',
  season: '2016',
  athletes: [
    { _key: 'bono', name: 'Katie Bono', disciplines: [], category: 'adult' },
    { _key: 'cordry-cotter', name: 'Robert Cordry-Cotter', disciplines: [], category: 'adult' },
    { _key: 'davis', name: 'Ryan Davis', disciplines: [], category: 'adult' },
    { _key: 'gibisch', name: 'Christopher Gibisch', disciplines: [], category: 'adult' },
    { _key: 'glanc', name: 'Dawn Glanc', disciplines: [], category: 'adult' },
    { _key: 'goralski', name: 'Beth Goralski', disciplines: [], category: 'adult' },
    { _key: 'hanson', name: 'Ian Hanson', disciplines: [], category: 'adult' },
    { _key: 'lindlau', name: 'Kevin Lindlau', disciplines: [], category: 'adult' },
    { _key: 'magro', name: 'Whit Magro', disciplines: [], category: 'adult' },
    { _key: 'montgomery', name: 'Aaron Montgomery', disciplines: [], category: 'adult' },
    { _key: 'multauf', name: 'Aiden Multauf', disciplines: [], category: 'adult' },
    { _key: 'novikov', name: 'Alexander Novikov', disciplines: [], category: 'adult' },
    { _key: 'owen', name: 'Susan Owen', disciplines: [], category: 'adult' },
    { _key: 'simms', name: 'Gretchen Simms', disciplines: [], category: 'adult' },
    { _key: 'snobeck', name: 'Chris Snobeck', disciplines: [], category: 'adult' },
    { _key: 'stritch-carter', name: 'Carter Stritch', disciplines: [], category: 'adult' },
    { _key: 'stritch-kendra', name: 'Kendra Stritch', disciplines: [], category: 'adult' },
    { _key: 'vachon', name: 'Ryan Vachon', disciplines: [], category: 'adult' },
    { _key: 'walters', name: 'Dana Walters', disciplines: [], category: 'adult' },
    { _key: 'willis', name: 'Justin Willis', disciplines: [], category: 'adult' },
  ],
}

async function uploadRoster() {
  console.log('Uploading 2016 Historical Roster...')
  await client.createOrReplace(roster2016)
  console.log('✅ 2016 roster uploaded')
}

uploadRoster()
