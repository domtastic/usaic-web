import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import TeamHeader from '../TeamHeader'
import AthleteGrid, { type Athlete } from '../AthleteGrid'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Youth National Team',
  description: 'Meet the youth athletes of USA Ice Climbing, competing in both lead and speed.',
}

async function getAthletes(): Promise<Athlete[]> {
  const query = `*[_type == "athlete" && "youth" in teams] | order(name asc) {
    _id,
    name,
    slug,
    photo
  }`

  return client.fetch(query)
}

export default async function YouthTeamPage() {
  const athletes = await getAthletes()

  return (
    <>
      <TeamHeader
        active="youth"
        title="USA Youth National Team"
        subtitle="Meet the next generation of American ice climbers, competing in both lead and speed"
      />
      <section className="section-padding">
        <div className="section-container">
          <AthleteGrid
            athletes={athletes}
            emptyMessage="The Youth Team roster will be announced soon."
          />
        </div>
      </section>
    </>
  )
}
