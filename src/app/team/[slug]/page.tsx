import Link from 'next/link'
import { notFound } from 'next/navigation'

// Placeholder athlete data - will be replaced with Sanity fetch
const placeholderAthletes: Record<string, {
  name: string
  dateOfBirth: string
  residence: string
  discipline: string[]
  funFacts: string
  category: 'adult' | 'youth'
}> = {
  'john-smith': {
    name: 'John Smith',
    dateOfBirth: 'January 15, 1995',
    residence: 'Boulder, CO',
    discipline: ['lead'],
    funFacts: 'John discovered ice climbing at age 16 during a family trip to Colorado. When he\'s not on the ice, he enjoys mountain biking, photography, and volunteering as a climbing instructor for youth programs. His favorite climbing destination is Ouray, Colorado, and he dreams of competing in the Olympics.',
    category: 'adult',
  },
  'jane-doe': {
    name: 'Jane Doe',
    dateOfBirth: 'March 22, 1998',
    residence: 'Salt Lake City, UT',
    discipline: ['speed'],
    funFacts: 'Jane holds the American record for women\'s speed ice climbing. She started as a rock climber and transitioned to ice after watching the UIAA World Cup. Outside of climbing, she\'s pursuing a degree in environmental science and hopes to combine her passion for climbing with conservation work.',
    category: 'adult',
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function AthletePage({ params }: PageProps) {
  const { slug } = await params
  const athlete = placeholderAthletes[slug]

  if (!athlete) {
    notFound()
  }

  return (
    <>
      {/* Back Navigation */}
      <div className="bg-ice-50 py-4">
        <div className="section-container">
          <Link 
            href="/team" 
            className="inline-flex items-center text-ice-700 hover:text-usa-red transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Team
          </Link>
        </div>
      </div>

      {/* Athlete Profile */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Photo */}
            <div className="aspect-[3/4] bg-ice-100 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-ice-gradient-dark flex items-center justify-center">
                <svg 
                  className="w-32 h-32 text-white/50" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="inline-block px-3 py-1 bg-ice-100 text-ice-700 text-sm font-semibold rounded-full mb-4">
                {athlete.category === 'adult' ? 'Adult Team' : 'Youth Team'}
              </span>
              
              <h1 className="font-display text-4xl md:text-5xl text-ice-900 mb-6">
                {athlete.name}
              </h1>

              {/* Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-32 text-slate-500 font-medium">D.O.B.</div>
                  <div className="text-ice-900">{athlete.dateOfBirth}</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-32 text-slate-500 font-medium">Residence</div>
                  <div className="text-ice-900">{athlete.residence}</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-32 text-slate-500 font-medium">Discipline</div>
                  <div className="flex gap-2">
                    {athlete.discipline.map((d) => (
                      <span 
                        key={d}
                        className="px-3 py-1 bg-usa-red text-white text-sm font-medium rounded-full"
                      >
                        {d.charAt(0).toUpperCase() + d.slice(1)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fun Facts */}
              <div>
                <h2 className="font-display text-xl text-ice-900 mb-3">About</h2>
                <p className="text-slate-600 leading-relaxed">
                  {athlete.funFacts}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
