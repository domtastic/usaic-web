import { getCliClient } from 'sanity/cli'

const client = getCliClient()

interface Doc {
  _id: string
  _type: string
  title?: string
  eventType?: unknown
}

async function migrateType(type: string) {
  const allDocs: Doc[] = await client.fetch(
    `*[_type == $type && defined(eventType)] { _id, _type, title, eventType }`,
    { type }
  )
  const docs = allDocs.filter((d) => !Array.isArray(d.eventType))

  console.log(`\n${type}: found ${docs.length} document(s) with scalar eventType (of ${allDocs.length} total)\n`)

  let updated = 0
  for (const doc of docs) {
    try {
      await client.patch(doc._id).set({ eventType: [doc.eventType] }).commit()
      console.log(`✅ ${doc._id} ("${doc.title || ''}"): ${doc.eventType} -> [${doc.eventType}]`)
      updated++
    } catch (err) {
      console.error(`❌ Failed to update ${doc._id}:`, err)
    }
  }

  console.log(`${type}: updated ${updated}/${docs.length}`)
}

async function main() {
  await migrateType('event')
  await migrateType('eventSubmission')
  console.log('\nDone!')
}

main().catch(console.error)
