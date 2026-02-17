import type { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Gym Resources',
  description: 'Resources for climbing gyms looking to add drytooling and ice climbing to their offerings.',
}

interface GymResourcesData {
  heroTitle?: string
  heroSubtitle?: string
  whyTitle?: string
  whyDescription?: string
  benefits?: { _key?: string; title: string; description: string }[]
  supportItems?: { _key?: string; title: string; description: string }[]
  ctaTitle?: string
  ctaText?: string
  ctaEmail?: string
}

async function getGymResources(): Promise<GymResourcesData> {
  const query = `*[_type == "gymResources"][0] {
    heroTitle,
    heroSubtitle,
    whyTitle,
    whyDescription,
    benefits,
    supportItems,
    ctaTitle,
    ctaText,
    ctaEmail
  }`

  return (await client.fetch(query)) || {}
}

const defaults = {
  heroTitle: 'Gym Resources',
  heroSubtitle: 'Bring drytooling to your climbing gym and help grow the sport',
  whyTitle: 'Why Add Drytooling?',
  whyDescription:
    'Drytooling is one of the fastest-growing disciplines in climbing. Adding it to your gym creates a unique offering, attracts new members, and helps develop the next generation of ice climbers.',
  benefits: [
    { title: 'Growing Sport', description: 'Ice climbing is on the path to Olympic inclusion, driving increasing interest.' },
    { title: 'New Members', description: 'Attract climbers looking for unique training and new challenges.' },
    { title: 'Community', description: 'Build a dedicated community of ice climbing enthusiasts at your gym.' },
    { title: 'Competition Host', description: 'Opportunity to host ice climbing competitions and events.' },
  ],
  supportItems: [
    { title: 'Consultation', description: 'Free guidance on setup, equipment sourcing, and best practices' },
    { title: 'Promotion', description: 'Feature your gym on our website and social media channels' },
    { title: 'Events', description: 'Opportunity to host ice climbing competitions' },
  ],
  ctaTitle: "Let's Talk",
  ctaText: "Interested in bringing drytooling to your gym? We'd love to hear from you and help you get started.",
  ctaEmail: 'usaiceclimbing@gmail.com',
}

const benefitIcons = [
  <svg key="0" className="w-7 h-7 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  <svg key="1" className="w-7 h-7 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  <svg key="2" className="w-7 h-7 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="3" className="w-7 h-7 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
]

const supportIcons = [
  <svg key="0" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  <svg key="1" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
  <svg key="2" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
]

export default async function GymInvolvementPage() {
  const data = await getGymResources()

  const heroTitle = data.heroTitle || defaults.heroTitle
  const heroSubtitle = data.heroSubtitle || defaults.heroSubtitle
  const whyTitle = data.whyTitle || defaults.whyTitle
  const whyDescription = data.whyDescription || defaults.whyDescription
  const benefits = data.benefits?.length ? data.benefits : defaults.benefits
  const supportItems = data.supportItems?.length ? data.supportItems : defaults.supportItems
  const ctaTitle = data.ctaTitle || defaults.ctaTitle
  const ctaText = data.ctaText || defaults.ctaText
  const ctaEmail = data.ctaEmail || defaults.ctaEmail

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Why Add Drytooling */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
              {whyTitle}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {whyDescription}
            </p>
          </div>

          <div className={`grid gap-6 ${benefits.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
            {benefits.map((benefit, index) => (
              <div key={benefit._key || index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-14 h-14 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefitIcons[index % benefitIcons.length]}
                </div>
                <h3 className="font-display text-lg text-usa-navy mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indoor Guidelines Link */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
              Indoor Drytooling Guidelines
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We've put together a comprehensive framework covering safety, wall protection, route setting, and equipment to help gyms implement drytooling safely and effectively.
            </p>
            <Link
              href="/get-started/indoor-guidelines"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Full Guidelines
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* USAIC Support */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
              How USAIC Can Help
            </h2>
            <p className="text-xl text-slate-600">
              We're here to support gyms in adding drytooling to their offerings
            </p>
          </div>

          <div className={`grid gap-8 max-w-4xl mx-auto ${supportItems.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {supportItems.map((item, index) => (
              <div key={item._key || index} className="text-center">
                <div className="w-16 h-16 bg-usa-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  {supportIcons[index % supportIcons.length]}
                </div>
                <h3 className="font-display text-xl text-usa-navy mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-usa-navy text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {ctaTitle}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            {ctaText}
          </p>
          <a
            href={`mailto:${ctaEmail}?subject=Gym%20Drytooling%20Inquiry`}
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}
