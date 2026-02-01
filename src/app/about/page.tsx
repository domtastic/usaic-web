import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface AboutData {
  missionStatement?: string
  aboutHeading?: string
  aboutContent?: any[]
  values?: {
    title: string
    description: string
    icon: string
  }[]
  uiaaImage?: {
    asset: {
      _ref: string
    }
  }
  uiaaContent?: any[]
  contactEmail?: string
  contactDescription?: string
}

async function getAboutData(): Promise<AboutData> {
  const query = `*[_type == "about"][0] {
    missionStatement,
    aboutHeading,
    aboutContent,
    values,
    uiaaImage,
    uiaaContent,
    contactEmail,
    contactDescription
  }`

  return await client.fetch(query) || {}
}

const iconMap: Record<string, React.ReactNode> = {
  lightning: (
    <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  people: (
    <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

// Default values
const defaults = {
  missionStatement: "USA Ice Climbing is committed to growing ice climbing, mixed climbing, and drytooling across the United States by supporting athletes, building a strong competitive circuit, and advocating for the sport's future on the world stage — including its inclusion in the Olympic Games.",
  aboutHeading: "About Us",
  values: [
    { title: 'Excellence', description: 'We strive for excellence in competition, training, and representation of our athletes.', icon: 'lightning' },
    { title: 'Community', description: 'We build and support a welcoming community of climbers at all skill levels and backgrounds.', icon: 'people' },
    { title: 'Growth', description: 'We champion the growth of ice climbing and its recognition as an Olympic sport.', icon: 'globe' },
  ],
  contactEmail: "usaiceclimbing@gmail.com",
  contactDescription: "Have questions about USA Ice Climbing, interested in sponsorship opportunities, or want to learn more about how you can get involved?",
}

export default async function AboutPage() {
  const data = await getAboutData()

  const mission = data.missionStatement || defaults.missionStatement
  const aboutHeading = data.aboutHeading || defaults.aboutHeading
  const values = data.values?.length ? data.values : defaults.values
  const contactEmail = data.contactEmail || defaults.contactEmail
  const contactDescription = data.contactDescription || defaults.contactDescription

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Mission
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {mission}
          </p>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6 text-center">
              {aboutHeading}
            </h2>

            {data.aboutContent ? (
              <div className="prose prose-lg max-w-none text-slate-600">
                <PortableText 
                  value={data.aboutContent} 
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-xl text-left text-slate-600 leading-relaxed mb-6">{children}</p>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="text-xl text-left text-slate-600 leading-relaxed list-disc pl-8 mb-6 space-y-3">{children}</ul>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => <li>{children}</li>,
                    },
                  }}
                />
              </div>
            ) : (
              <>
                <p className="text-xl text-left text-slate-600 leading-relaxed mb-6">
                  USA Ice Climbing (USAIC) is the national governing body for competitive ice climbing, mixed climbing, and drytooling in the United States. As a 501(c)(3) nonprofit organization, we are dedicated to growing and advancing these sports at every level — from grassroots participation to elite international competition.
                </p>
                <p className="text-xl text-left text-slate-600 leading-relaxed mb-6">
                  We support American athletes with essential resources including training opportunities, financial assistance, high-quality competition experiences, and rigorous safety standards. USAIC proudly represents the United States on the global stage.
                </p>
                <p className="text-xl text-left text-slate-600 leading-relaxed mb-6">
                  Our work focuses on:
                </p>
                <ul className="text-xl text-left text-slate-600 leading-relaxed list-disc pl-8 mb-6 space-y-3">
                  <li>Developing a strong annual U.S. competition circuit</li>
                  <li>Establishing consistent World Cup–level events on American soil</li>
                  <li>Representing the United States in international competitions</li>
                  <li>Expanding acceptance of indoor drytooling in climbing gyms nationwide</li>
                  <li>Advocating for ice climbing's inclusion in the Olympic Games</li>
                </ul>
                <p className="text-xl text-left text-slate-600 leading-relaxed">
                  Through leadership, collaboration, and a shared passion for the sport, USA Ice Climbing inspires climbers of all backgrounds and elevates ice, mixed, and drytooling to new heights of excellence, safety, and global recognition.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy text-center mb-12">
            Our Values
          </h2>
          <div className={`grid gap-8 ${values.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {iconMap[value.icon] || iconMap.star}
                </div>
                <h3 className="font-display text-xl text-usa-navy mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UIAA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-8">
              {data.uiaaImage && (
                <div className="w-24 h-24 md:w-32 md:h-32 relative shrink-0">
                  <Image
                    src={urlFor(data.uiaaImage).width(256).url()}
                    alt="UIAA Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy">
                UIAA Associate Member
              </h2>
            </div>
            {data.uiaaContent ? (
              <div className="prose prose-lg max-w-none">
                <PortableText
                  value={data.uiaaContent}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-lg text-slate-600 leading-relaxed mb-4">{children}</p>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="text-lg text-slate-600 leading-relaxed list-disc pl-8 mb-4 space-y-2">{children}</ul>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => <li>{children}</li>,
                    },
                    marks: {
                      link: ({ children, value }) => (
                        <a
                          href={value?.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ice-600 hover:text-ice-700 underline"
                        >
                          {children}
                        </a>
                      ),
                    },
                  }}
                />
              </div>
            ) : (
              <p className="text-lg text-slate-600 text-center">
                USA Ice Climbing is proudly affiliated with the International Climbing and Mountaineering Federation (UIAA), the international governing body for ice climbing competitions. This affiliation allows our athletes to compete in World Cup events and represent the United States on the global stage.
              </p>
            )}
            <div className="text-center mt-8">
              <a
                href="https://www.theuiaa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Learn more about UIAA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-slate-900 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              {contactDescription}
            </p>
            <a 
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-xl text-ice-400 hover:text-ice-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {contactEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}