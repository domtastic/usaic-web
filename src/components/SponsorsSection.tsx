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
          <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
            Our Sponsors
          </h2>
          <p className="text-slate-400">
            Thank you to our partners who make our mission possible
          </p>
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
                    className={`block w-40 h-24 rounded-lg shadow-sm p-4 transition-all hover:shadow-lg hover:scale-105 ${getBackgroundClass(sponsor.logoBackground)}`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={urlFor(sponsor.logo).width(300).height(180).url()}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                ) : (
                  <div className={`w-40 h-24 rounded-lg shadow-sm p-4 ${getBackgroundClass(sponsor.logoBackground)}`}>
                    <div className="relative w-full h-full">
                      <Image
                        src={urlFor(sponsor.logo).width(300).height(180).url()}
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
            href="/about#contact" 
            className="text-ice-400 hover:text-usa-red font-semibold transition-colors"
          >
            Become a Sponsor →
          </Link>
        </div>
      </div>
    </section>
  )
}