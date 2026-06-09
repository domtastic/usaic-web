import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'

interface Sponsor {
  _id: string
  name: string
  logo: { asset: { _ref: string } }
  logoBackground?: 'white' | 'black'
  website?: string
}

async function getSponsors(): Promise<Sponsor[]> {
  const query = `*[_type == "sponsor" && active == true] | order(order asc) {
    _id,
    name,
    logo,
    logoBackground,
    website
  }`
  
  return client.fetch(query)
}

export default async function SponsorsSection() {
  const sponsors = await getSponsors()

  const getBackgroundClass = (bg?: string) => {
    return bg === 'black' ? 'bg-black' : 'bg-white'
  }

  return (
    <section className="section-padding bg-black">
      <div className="section-container">
        <div className="text-center mb-10">
          <div className="w-8 h-0.5 bg-usa-red mx-auto mb-5" />
          <h2 className="font-display text-xl md:text-2xl text-white leading-snug">
            Partners who make our mission possible
          </h2>
        </div>

        {/* Sponsors Grid */}
        {sponsors.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {sponsors.map((sponsor) => (
              <div key={sponsor._id} className="group relative">
                {sponsor.website ? (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-56 h-32 rounded-lg shadow-sm p-4 transition-all hover:shadow-lg hover:scale-105 ${getBackgroundClass(sponsor.logoBackground)}`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={urlFor(sponsor.logo).width(400).fit('max').url()}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                ) : (
                  <div className={`w-56 h-32 rounded-lg shadow-sm p-4 ${getBackgroundClass(sponsor.logoBackground)}`}>
                    <div className="relative w-full h-full">
                      <Image
                        src={urlFor(sponsor.logo).width(400).fit('max').url()}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <p className="text-slate-500">Add sponsors in Sanity Studio</p>
          </div>
        )}

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">
            Interested in partnering with USA Ice Climbing?
          </p>
          <Link
            href="/contact?subject=USAIC - Sponsorship / Partnership"
            className="text-ice-400 hover:text-usa-red font-semibold transition-colors"
          >
            Become a Sponsor →
          </Link>
        </div>
      </div>
    </section>
  )
}