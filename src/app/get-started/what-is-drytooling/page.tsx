import Image from 'next/image'
import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity'

interface WhatIsDrytoolingData {
  heroHeading?: string
  heroSubheading?: string
  introText?: string
  iceClimbing?: {
    title: string
    image?: { asset: { _ref: string } }
    description?: string
    keyPoints?: string[]
  }
  mixedClimbing?: {
    title: string
    image?: { asset: { _ref: string } }
    description?: string
    keyPoints?: string[]
  }
  drytooling?: {
    title: string
    image?: { asset: { _ref: string } }
    description?: string
    keyPoints?: string[]
  }
  whyDrytoolingMatters?: {
    heading: string
    subheading: string
    benefits?: {
      title: string
      description: string
    }[]
  }
  ctaSection?: {
    heading: string
    description: string
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
  }
}

async function getWhatIsDrytoolingData(): Promise<WhatIsDrytoolingData | null> {
  const query = `*[_type == "whatIsDrytooling"][0] {
    heroHeading,
    heroSubheading,
    introText,
    iceClimbing {
      title,
      image,
      description,
      keyPoints
    },
    mixedClimbing {
      title,
      image,
      description,
      keyPoints
    },
    drytooling {
      title,
      image,
      description,
      keyPoints
    },
    whyDrytoolingMatters {
      heading,
      subheading,
      benefits[] {
        title,
        description
      }
    },
    ctaSection {
      heading,
      description,
      primaryButtonText,
      primaryButtonLink,
      secondaryButtonText,
      secondaryButtonLink
    }
  }`

  return client.fetch(query)
}

const benefitIcons = [
  <svg key="year-round" className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="geographic" className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="pathway" className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
]

export default async function WhatIsDrytoolingPage() {
  const data = await getWhatIsDrytoolingData()

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            {data?.heroHeading || 'What is Drytooling?'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {data?.heroSubheading || 'Understanding ice climbing, mixed climbing, and drytooling—three disciplines united by ice tools'}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-600 leading-relaxed">
              {data?.introText || 'Ice climbing encompasses several disciplines that share a common thread: the use of ice axes and crampons to ascend vertical terrain. Whether you\'re climbing frozen waterfalls, scaling rock in winter conditions, or training year-round in a gym, these sports offer incredible physical and mental challenges.'}
            </p>
          </div>
        </div>
      </section>

      {/* Ice Climbing */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-ice-200">
              {data?.iceClimbing?.image ? (
                <Image
                  src={urlFor(data.iceClimbing.image).width(1200).height(900).url()}
                  alt={data.iceClimbing.title || 'Ice Climbing'}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
                  <p className="text-white font-display text-xl">Ice Climbing Image</p>
                </div>
              )}
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
                {data?.iceClimbing?.title || 'Ice Climbing'}
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                {data?.iceClimbing?.description || 'Ice climbing is the art of ascending frozen waterfalls, ice-covered rock faces, and glacial formations using specialized ice axes and crampons. It\'s a seasonal pursuit, typically practiced during winter months when conditions create climbable ice.'}
              </p>
              {data?.iceClimbing?.keyPoints && data.iceClimbing.keyPoints.length > 0 && (
                <ul className="space-y-2 text-slate-600">
                  {data.iceClimbing.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-ice-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mixed Climbing */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
                {data?.mixedClimbing?.title || 'Mixed Climbing'}
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                {data?.mixedClimbing?.description || 'Mixed climbing combines ice climbing and rock climbing techniques on routes that feature both ice and rock. Climbers use ice tools to hook, torque, and pull on rock features while also climbing sections of ice—often in the same pitch.'}
              </p>
              {data?.mixedClimbing?.keyPoints && data.mixedClimbing.keyPoints.length > 0 && (
                <ul className="space-y-2 text-slate-600">
                  {data.mixedClimbing.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-slate-700 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 order-1 lg:order-2">
              {data?.mixedClimbing?.image ? (
                <Image
                  src={urlFor(data.mixedClimbing.image).width(1200).height(900).url()}
                  alt={data.mixedClimbing.title || 'Mixed Climbing'}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center">
                  <p className="text-white font-display text-xl">Mixed Climbing Image</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Drytooling */}
      <section className="section-padding bg-usa-navy text-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {data?.drytooling?.image ? (
                <Image
                  src={urlFor(data.drytooling.image).width(1200).height(900).url()}
                  alt={data.drytooling.title || 'Drytooling'}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-usa-red to-red-700 flex items-center justify-center">
                  <p className="text-white font-display text-xl">Drytooling Image</p>
                </div>
              )}
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                {data?.drytooling?.title || 'Drytooling'}
              </h2>
              <p className="text-lg text-white/90 mb-4">
                {data?.drytooling?.description || 'Drytooling is the practice of climbing rock or artificial holds using ice tools—without any ice. Originally developed as training for mixed climbing, it has evolved into its own discipline and is the format used in international competitions.'}
              </p>
              {data?.drytooling?.keyPoints && data.drytooling.keyPoints.length > 0 && (
                <ul className="space-y-2 text-white/90">
                  {data.drytooling.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-usa-red mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ice-50">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
            {data?.ctaSection?.heading || 'Ready to Get Started?'}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            {data?.ctaSection?.description || 'Whether you want to try drytooling at a gym, experience ice climbing at a festival, or train for competition, we can help you find your path.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={data?.ctaSection?.primaryButtonLink || '/get-started/learn'} 
              className="btn-primary"
            >
              {data?.ctaSection?.primaryButtonText || 'Learn to Ice Climb'}
            </Link>
            <Link 
              href={data?.ctaSection?.secondaryButtonLink || '/get-started/gyms'} 
              className="btn-secondary"
            >
              {data?.ctaSection?.secondaryButtonText || 'Find a Gym'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
