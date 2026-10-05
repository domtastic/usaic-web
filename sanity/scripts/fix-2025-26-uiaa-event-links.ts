/**
 * Fix the 2025-2026 UIAA events' links and split the Malbun record.
 *
 * Several Continental Cups linked to the wrong iceclimbing.sport event pages
 * (e.g. Bern's ?id=115 is actually the 2025 European Championships). The
 * correct IDs were found by matching name + date on iceclimbing.sport and on
 * uiaa.results.info, which share the same IDs. Results links move to
 * uiaa.results.info, the UIAA's results service.
 *
 * Malbun: Sanity had one "World Youth Championships" record dated 1 Feb, but
 * there were two events: the World Youth Championships (29-31 Jan, id 126)
 * and a Continental Cup (1 Feb, id 127). The existing record becomes the
 * Youth Worlds (filed as a World Cup, like 2026-27's championships), and a
 * new Continental Cup record is added.
 *
 * Each patch only applies if the event link is still the old one, so it
 * never overwrites a link fixed by hand in Studio. Safe to re-run.
 *
 * Run from the repo root with:
 *   npx sanity exec sanity/scripts/fix-2025-26-uiaa-event-links.ts --with-user-token
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const page = (id: number) => `https://iceclimbing.sport/events/?id=${id}`
const results = (id: number) => `https://uiaa.results.info/event/${id}/`

// _id -> [old (wrong) event page id, correct id]
const linkFixes: Record<string, [number, number]> = {
  Luzx7FR0qhV1GPaRaC3fEc: [115, 122], // Continental Cup - Bern
  '1oPbursIe3uojjO5ZnF9OA': [116, 123], // Continental Cup - Zilina
  '1oPbursIe3uojjO5ZnF9cE': [117, 124], // Continental Cup - Brno
  Luzx7FR0qhV1GPaRaC3fJS: [118, 125], // Continental Cup - Utrecht
  Luzx7FR0qhV1GPaRaC3fQi: [126, 133], // Continental Cup - Sunderland
  Luzx7FR0qhV1GPaRaC3fVY: [127, 136], // Continental Cup - Oulu
}

const MALBUN_ID = 'V5bPHYeQ3aMPVCKDqo1ePX'

async function main() {
  const ids = [...Object.keys(linkFixes), MALBUN_ID]
  const docs = await client.fetch<{ _id: string; eventLink?: string }[]>(`*[_id in $ids]{_id, eventLink}`, { ids })
  const current = Object.fromEntries(docs.map((d) => [d._id, d.eventLink]))
  const tx = client.transaction()

  for (const [id, [oldId, newId]] of Object.entries(linkFixes)) {
    if (current[id] === page(oldId)) {
      tx.patch(id, (p) => p.set({ eventLink: page(newId), resultsLink: results(newId) }))
    }
  }

  if (current[MALBUN_ID] === page(125)) {
    tx.patch(MALBUN_ID, (p) =>
      p.set({
        title: 'UIAA Ice Climbing World Youth Championships 2026 - Malbun, Liechtenstein',
        eventType: ['world-cup'],
        startDate: '2026-01-29',
        endDate: '2026-01-31',
        description: 'The UIAA Ice Climbing World Youth Championships 2026 in Malbun, Liechtenstein.',
        eventLink: page(126),
        resultsLink: results(126),
      })
    )
  }

  tx.createIfNotExists({
    _id: 'event-2025-26-cc-malbun',
    _type: 'event',
    title: 'UIAA Continental Cup - Malbun',
    slug: { _type: 'slug', current: 'uiaa-continental-cup-malbun' },
    eventType: ['continental-cup'],
    season: '2025-2026',
    startDate: '2026-02-01',
    endDate: '2026-02-01',
    location: { city: 'Malbun', country: 'Liechtenstein' },
    description: 'UIAA Ice Climbing Continental Cup. Youth Categories included.',
    eventLink: page(127),
    resultsLink: results(127),
  })

  await tx.commit()
  console.log('2025-2026 UIAA event links fixed and Malbun split.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
