import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface DisciplinesData {
  heroHeading?: string
  heroSubheading?: string
  leadClimbing?: {
    title: string
    image?: { asset: { _ref: string } }
    description?: any[]
    keyPoints?: string[]
  }
  speedClimbing?: {
    title: string
    image?: { asset: { _ref: string } }
    description?: any[]
    keyPoints?: string[]
  }
}

async function getDisciplines(): Promise<DisciplinesData | null> {
  const query = `*[_type == "disciplines"][0] {
    heroHeading,
    heroSubheading,
    leadClimbing {
      title,
      image,
      description,
      keyPoints
    },
    speedClimbing {
      title,
      image,
      description,
      keyPoints
    }
  }`

  return client.fetch(query)
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-lg text-slate-700 mb-4 leading-relaxed">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-usa-navy">{children}</strong>
    ),
  },
}

export default async function CompetitionDisciplinesPage() {
  const data = await getDisciplines()

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            {data?.heroHeading || 'Competition Disciplines'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {data?.heroSubheading || 'Lead and Speed—the two formats of international ice climbing competition'}
          </p>
        </div>
      </section>

      {/* Lead Climbing - Full Width Side by Side */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Image Side */}
          <div className="relative bg-ice-200">
            {data?.leadClimbing?.image ? (
              <Image
                src={urlFor(data.leadClimbing.image).width(1200).height(1200).url()}
                alt={data.leadClimbing.title || 'Lead Climbing'}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
                <p className="text-white font-display text-2xl">Lead Climbing Image</p>
              </div>
            )}
          </div>

          {/* Content Side */}
          <div className="flex items-center bg-white">
            <div className="px-8 md:px-12 lg:px-16 py-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-usa-navy mb-6">
                {data?.leadClimbing?.title || 'Lead Climbing'}
              </h2>

              {data?.leadClimbing?.description ? (
                <div className="mb-8">
                  <PortableText
                    value={data.leadClimbing.description}
                    components={portableTextComponents}
                  />
                </div>
              ) : (
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Lead climbing tests endurance, technique, and problem-solving on complex overhanging routes. Athletes have a set time to climb as high as possible on routes they've never seen before.
                </p>
              )}

              {data?.leadClimbing?.keyPoints && data.leadClimbing.keyPoints.length > 0 && (
                <ul className="space-y-4">
                  {data.leadClimbing.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-ice-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Speed Climbing - Full Width Side by Side (Reversed) */}
      <section>
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Content Side */}
          <div className="flex items-center bg-ice-50 order-2 lg:order-1">
            <div className="px-8 md:px-12 lg:px-16 py-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-usa-navy mb-6">
                {data?.speedClimbing?.title || 'Speed Climbing'}
              </h2>

              {data?.speedClimbing?.description ? (
                <div className="mb-8">
                  <PortableText
                    value={data.speedClimbing.description}
                    components={portableTextComponents}
                  />
                </div>
              ) : (
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Speed ice climbing is a race up a 12–15 meter (40–50 foot) ice wall. Climbers go head-to-head in elimination brackets or best-of-three runs, with fractions of a second often deciding the winner.
                </p>
              )}

              {data?.speedClimbing?.keyPoints && data.speedClimbing.keyPoints.length > 0 && (
                <ul className="space-y-4">
                  {data.speedClimbing.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-usa-red mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative bg-slate-200 order-1 lg:order-2">
            {data?.speedClimbing?.image ? (
              <Image
                src={urlFor(data.speedClimbing.image).width(1200).height(1200).url()}
                alt={data.speedClimbing.title || 'Speed Climbing'}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-usa-red to-red-700 flex items-center justify-center">
                <p className="text-white font-display text-2xl">Speed Climbing Image</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-usa-navy text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Watch the Action
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            See Lead and Speed climbing in action at World Cup events streamed live on the UIAA YouTube channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/playlist?list=PL0DMtATwEZ0jR6KC7LcrqljP-nZZGpqZG"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Watch World Cup Videos
            </a>
            <Link href="/events" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-usa-navy transition-colors">
              View Event Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
