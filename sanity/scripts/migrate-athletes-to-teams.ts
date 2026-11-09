/**
 * Move athletes from the old Adult/Youth `category` to the `teams` checkboxes
 * (World Cup Team / Youth Team) for the 2026-27 season.
 *
 * Two steps:
 *
 *   prepare   Safe to run while the old site is live (it ignores `teams`).
 *             - Sets `teams` on every athlete: the 2026-27 World Cup roster
 *               below, plus everyone currently in the Youth category.
 *               Everyone else ends up with no team, which archives them.
 *             - Merges the Wilson Whitley and Zoe Schiffer youth duplicates
 *               into their original profiles (copies over the newer bio).
 *             - Creates the four new World Cup athletes, with no photo or
 *               bio yet.
 *
 *   finalize  Run AFTER the code that reads `teams` is deployed.
 *             - Deletes the two youth duplicates.
 *             - Removes the old `category` field from every athlete.
 *
 * Prints what it would do by default. Add APPLY=1 to write the changes.
 *
 * Run with: STEP=prepare APPLY=1 npx sanity exec scripts/migrate-athletes-to-teams.ts --with-user-token
 *
 * Make sure you're in the /sanity directory when running this command.
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()
const STEP = process.env.STEP
const APPLY = process.env.APPLY === '1'

// 2026-27 World Cup team members who already have a profile
const WORLD_CUP = [
  'Aria Frederickson',
  'Carter Schmidt',
  'Catalina Shirley',
  'Conner Bailey',
  'Dominic Gonzalez-Padron',
  'Dominic Unnasch',
  'Eli Ellis',
  'Emma Dhimitri',
  'Gregory Love',
  'Jessica Perez',
  'Lindsay Levine',
  'Mathias Olsen',
  'Matthew Durham',
  'Matthew Fox',
  'Nina Mankouski',
  'Wilson Whitley',
]

// New to the team, so they need a profile created
const NEW_WORLD_CUP = ['Alex Rausch', 'Cambyr Skade', 'Kelsey Beyerly', 'Molly Denholm']

// Youth duplicate -> the original profile it gets merged into
const DUPLICATES: Record<string, string> = {
  'youth-wilson-whitley': '7891795f-2df8-4c47-ac3d-32ca6de27480',
  'youth-zoe-schiffer': '189c2359-6d89-4b3e-bae8-a4a6474b3223',
}

interface AthleteDoc {
  _id: string
  name: string
  category?: 'adult' | 'youth'
  funFacts?: string
}

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

async function prepare(athletes: AthleteDoc[]) {
  const byId = new Map(athletes.map((a) => [a._id, a]))
  for (const [dupId, keepId] of Object.entries(DUPLICATES)) {
    if (!byId.has(dupId) || !byId.has(keepId)) throw new Error(`Missing duplicate pair ${dupId} / ${keepId}`)
  }

  const missing = WORLD_CUP.filter((name) => !athletes.some((a) => a.name === name))
  if (missing.length) throw new Error(`No profile found for: ${missing.join(', ')}`)

  // Duplicates count toward their original profile's teams
  const youthIds = new Set(
    athletes.filter((a) => a.category === 'youth').map((a) => DUPLICATES[a._id] ?? a._id)
  )

  const tx = client.transaction()
  const summary: Record<string, string[]> = { worldCup: [], youth: [], archived: [] }

  for (const athlete of athletes) {
    const isDuplicate = athlete._id in DUPLICATES
    const teams: string[] = []
    if (!isDuplicate && WORLD_CUP.includes(athlete.name)) teams.push('worldCup')
    if (!isDuplicate && youthIds.has(athlete._id)) teams.push('youth')

    if (teams.includes('worldCup')) summary.worldCup.push(athlete.name)
    if (teams.includes('youth')) summary.youth.push(athlete.name)
    if (!teams.length) summary.archived.push(athlete.name + (isDuplicate ? ' (duplicate)' : ''))

    const patch: Record<string, unknown> = { teams }
    const dup = Object.keys(DUPLICATES).find((id) => DUPLICATES[id] === athlete._id)
    if (dup && byId.get(dup)?.funFacts) patch.funFacts = byId.get(dup)!.funFacts
    tx.patch(athlete._id, (p) => p.set(patch))
  }

  for (const name of NEW_WORLD_CUP) {
    const slug = slugify(name)
    tx.createIfNotExists({
      _id: `athlete-${slug}`,
      _type: 'athlete',
      name,
      slug: { _type: 'slug', current: slug },
      teams: ['worldCup'],
    })
    summary.worldCup.push(`${name} (new)`)
  }

  for (const [team, names] of Object.entries(summary)) {
    console.log(`\n${team} (${names.length}):\n  ${names.sort().join('\n  ')}`)
  }
  return tx
}

async function finalize(athletes: AthleteDoc[]) {
  const tx = client.transaction()
  for (const dupId of Object.keys(DUPLICATES)) {
    if (athletes.some((a) => a._id === dupId)) {
      tx.delete(dupId)
      console.log(`Delete duplicate ${dupId}`)
    }
  }
  const withCategory = athletes.filter((a) => a.category && !(a._id in DUPLICATES))
  for (const athlete of withCategory) tx.patch(athlete._id, (p) => p.unset(['category']))
  console.log(`Remove category from ${withCategory.length} athletes`)
  return tx
}

async function main() {
  if (STEP !== 'prepare' && STEP !== 'finalize') {
    throw new Error('Set STEP=prepare or STEP=finalize')
  }

  const athletes: AthleteDoc[] = await client.fetch(
    `*[_type == "athlete" && !(_id in path("drafts.**"))]{ _id, name, category, funFacts }`
  )
  const tx = STEP === 'prepare' ? await prepare(athletes) : await finalize(athletes)

  if (!APPLY) {
    console.log('\nDry run. Nothing was changed. Add APPLY=1 to write these changes.')
    return
  }
  await tx.commit()
  console.log('\nDone.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
