import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import TeamHeader from './TeamHeader'
import AthleteGrid, { type Athlete } from './AthleteGrid'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'National Team',
  description: 'Meet the athletes representing the United States in international ice climbing competitions.',
}

async function getAthletes(): Promise<Athlete[]> {
  const query = `*[_type == "athlete" && "worldCup" in teams] | order(name asc) {
    _id,
    name,
    slug,
    photo,
    discipline
  }`

  return client.fetch(query)
}

export default async function TeamPage() {
  const athletes = await getAthletes()

  return (
    <>
      <TeamHeader
        active="worldCup"
        title="USA National Team"
        subtitle="Meet the athletes representing the United States in international World Cup ice climbing competitions"
      />
      <section className="section-padding">
        <div className="section-container">
          <AthleteGrid
            athletes={athletes}
            showDiscipline
            emptyMessage="The National Team roster will be announced soon."
          />
        </div>
      </section>
    </>
  )
}
