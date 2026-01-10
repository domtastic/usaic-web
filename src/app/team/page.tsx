import { client } from '@/lib/sanity'
import TeamPageClient from './TeamPageClient'

export interface Athlete {
  _id: string
  name: string
  slug: { current: string }
  photo?: {
    asset: {
      _ref: string
    }
  }
  discipline: string[]
  category: 'adult' | 'youth'
}

async function getAthletes(): Promise<Athlete[]> {
  const query = `*[_type == "athlete"] | order(name asc) {
    _id,
    name,
    slug,
    photo,
    discipline,
    category
  }`
  
  return client.fetch(query)
}

export default async function TeamPage() {
  const athletes = await getAthletes()
  
  return <TeamPageClient athletes={athletes} />
}