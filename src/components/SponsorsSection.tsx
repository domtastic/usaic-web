import Link from 'next/link'

// Placeholder sponsors - will be replaced with Sanity data
const placeholderSponsors = [
  { id: 1, name: 'Rab', tier: 'title' },
  // Add more sponsors as they come in
]

export default function SponsorsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-ice-900 mb-3">
            Our Sponsors
          </h2>
          <p className="text-slate-600">
            Thank you to our partners who make our mission possible
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {placeholderSponsors.map((sponsor) => (
            <div 
              key={sponsor.id}
              className="group relative"
            >
              {/* Logo placeholder */}
              <div className="w-40 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 transition-shadow hover:shadow-md">
                <div className="text-center">
                  <p className="font-display text-xl text-slate-400">{sponsor.name}</p>
                  <p className="text-xs text-slate-300 mt-1">Logo here</p>
                </div>
              </div>
              
              {/* Tier badge */}
              {sponsor.tier === 'title' && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gold text-slate-900 text-xs font-semibold rounded">
                  Title Sponsor
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-600 mb-4">
            Interested in partnering with USA Ice Climbing?
          </p>
          <Link 
            href="/about#contact" 
            className="text-ice-700 hover:text-usa-red font-semibold transition-colors"
          >
            Become a Sponsor →
          </Link>
        </div>
      </div>
    </section>
  )
}
