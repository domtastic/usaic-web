import Link from 'next/link'

export default function OlympicBidSection() {
  return (
    <section className="section-padding bg-ice-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-ice-200">
            {/* Replace with actual image from Sanity */}
            <div className="absolute inset-0 bg-ice-gradient flex items-center justify-center">
              <div className="text-center text-white">
                <p className="font-display text-2xl">Olympic Bid Image</p>
                <p className="text-sm text-white/75 mt-2">Upload via Sanity CMS</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 bg-usa-red text-white text-sm font-semibold rounded-full mb-4">
              2030 Winter Olympics
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-ice-900 mb-4">
              Ice Climbing&apos;s Olympic Journey
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Ice climbing is making its bid for inclusion in the 2030 French Alps Winter Olympics. 
              Join us in supporting our athletes and the global ice climbing community as we work 
              toward this historic milestone.
            </p>
            <Link href="/olympics-2030" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
