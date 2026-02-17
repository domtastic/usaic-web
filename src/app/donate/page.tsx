import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support USA Ice Climbing and help grow the sport of ice climbing in America.',
}

export default function DonatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-usa-gradient" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Support Team USA
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Your donation helps our athletes train, travel, and compete at the highest 
            levels of international ice climbing competition.
          </p>
        </div>
      </section>

      {/* Donation Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            {/* Placeholder donation area */}
            <div className="bg-ice-50 rounded-2xl p-8 md:p-12 text-center mb-12">
              <div className="w-20 h-20 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-ice-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl text-ice-900 mb-4">
                Donation Portal Coming Soon
              </h2>
              <p className="text-slate-600 mb-6">
                We&apos;re setting up our secure donation system. In the meantime, please 
                reach out to us directly if you&apos;d like to make a contribution.
              </p>
              <a 
                href="mailto:donate@usaiceclimbing.org"
                className="btn-primary"
              >
                Contact Us to Donate
              </a>
            </div>

            {/* Impact Section */}
            <h2 className="font-display text-2xl text-ice-900 mb-6 text-center">
              Your Impact
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-display text-usa-red mb-2">$50</div>
                <p className="text-slate-600 text-sm">Helps cover training equipment costs</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-display text-usa-red mb-2">$250</div>
                <p className="text-slate-600 text-sm">Supports athlete travel to competitions</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-display text-usa-red mb-2">$1,000</div>
                <p className="text-slate-600 text-sm">Sponsors an athlete at a World Cup event</p>
              </div>
            </div>

            {/* Tax Info */}
            <div className="bg-slate-100 rounded-xl p-6 text-center">
              <p className="text-slate-600 text-sm">
                USA Ice Climbing is a registered 501(c)(3) nonprofit organization. 
                All donations are tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section-padding bg-ice-50">
        <div className="section-container text-center">
          <h2 className="font-display text-2xl text-ice-900 mb-6">
            Other Ways to Support
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Can&apos;t donate right now? There are other ways you can help support 
            USA Ice Climbing and our athletes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about#contact" className="btn-outline">
              Become a Sponsor
            </Link>
            <a 
              href="https://instagram.com/usaiceclimbing_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Follow Us on Social Media
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
