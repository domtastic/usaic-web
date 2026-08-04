import { getCliClient } from 'sanity/cli'

const client = getCliClient()

interface LeadershipMember {
  _id: string
  name: string
  category?: string
}

async function backfillCategory() {
  const members: LeadershipMember[] = await client.fetch(
    `*[_type == "boardMember" && !defined(category)] { _id, name, category }`
  )

  console.log(`Found ${members.length} members without a category\n`)

  for (const member of members) {
    try {
      await client.patch(member._id).set({ category: 'board' }).commit()
      console.log(`✅ "${member.name}" -> board`)
    } catch (err) {
      console.error(`❌ Failed to update "${member.name}":`, err)
    }
  }

  console.log('\nDone!')
}

backfillCategory().catch(console.error)
