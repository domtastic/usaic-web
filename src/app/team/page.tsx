import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import TeamPageClient from './TeamPageClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Team USA',
  description: 'Meet the athletes representing the United States in international ice climbing competitions.',
}

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

export interface YouthAthlete {
  name: string
  disciplines?: string[]
}

export interface YouthRoster {
  season: string
  athletes: YouthAthlete[]
}

export interface HistoricalAthlete {
  name: string
  disciplines?: string[]
  category?: 'adult' | 'youth'
}

export interface HistoricalRoster {
  _id: string
  season: string
  athletes: HistoricalAthlete[]
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

async function getYouthRoster(): Promise<YouthRoster | null> {
  const query = `*[_type == "youthRoster"][0] {
    season,
    athletes[] {
      name,
      disciplines
    }
  }`

  return client.fetch(query)
}

async function getHistoricalRosters(): Promise<HistoricalRoster[]> {
  const query = `*[_type == "historicalRoster"] | order(season desc) {
    _id,
    season,
    athletes[] {
      name,
      disciplines,
      category
    }
  }`

  return client.fetch(query)
}

export default async function TeamPage() {
  const [athletes, youthRoster, historicalRosters] = await Promise.all([
    getAthletes(),
    getYouthRoster(),
    getHistoricalRosters()
  ])

  return (
    <TeamPageClient
      athletes={athletes}
      youthRoster={youthRoster}
      historicalRosters={historicalRosters}
    />
  )
}