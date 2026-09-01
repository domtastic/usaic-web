import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support USA Ice Climbing and help grow the sport of ice climbing in America.',
}

const impactTiers = [
  { amount: '$50', description: 'Helps cover training equipment costs' },
  { amount: '$250', description: 'Supports athlete travel to competitions' },
  { amount: '$1,000', description: 'Sponsors an athlete at a World Cup event' },
]

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-usa-navy">
        <Image
          src="/DonatePageHero.jpg"
          alt="The USA Ice Climbing team holding their ice tools together in a huddle"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-usa-navy via-usa-navy/70 to-black/40" />
        <div className="relative section-container text-center text-white">
          <p className="text-base font-semibold uppercase tracking-widest text-usa-red-light mb-4">
            501(c)(3) Nonprofit
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            Support USA Ice Climbing
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Your donation helps our athletes train, travel, and compete at the highest levels
            of international ice climbing competition.
          </p>
        </div>
      </section>

      {/* Impact + Donation form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {/* Impact copy */}
            <div className="lg:col-span-3">
              <div className="border-l-2 border-usa-red pl-4 mb-6">
                <h2 className="font-display text-3xl md:text-4xl text-usa-navy">Your Impact</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
                USA Ice Climbing is entirely donor and volunteer supported. Every dollar goes
                directly toward building a stronger competitive circuit and giving American
                athletes what they need to compete on the world stage.
              </p>

              <div className="divide-y divide-slate-200 border-t border-slate-200 mb-10 max-w-xl">
                {impactTiers.map((tier) => (
                  <div key={tier.amount} className="flex items-baseline gap-6 py-5">
                    <span className="font-display text-3xl text-usa-red w-28 shrink-0">
                      {tier.amount}
                    </span>
                    <span className="text-base text-slate-600 leading-relaxed">
                      {tier.description}
                    </span>
                  </div>
                ))}
              </div>

              <p className="border-l-2 border-slate-300 pl-4 text-base text-slate-500 max-w-xl">
                USA Ice Climbing is a registered 501(c)(3) nonprofit organization. All donations
                are tax-deductible to the extent allowed by law.
              </p>
            </div>

            {/* Zeffy donation form */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-32 rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 border border-slate-200">
                <iframe
                  title="Donate to USA Ice Climbing"
                  src="https://www.zeffy.com/embed/donation-form/donate-to-usa-ice-climbing"
                  className="w-full block"
                  style={{ height: '900px', border: 'none' }}
                  allow="payment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help — closing band */}
      <section className="py-16 md:py-24 bg-usa-navy">
        <div className="section-container text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Other Ways to Support
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Can&apos;t donate right now? There are other ways you can help support USA Ice
            Climbing and our athletes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about#contact" className="btn-primary">
              Become a Sponsor
            </Link>
            <a
              href="https://instagram.com/usaiceclimbing_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg transition-colors hover:border-white hover:bg-white/5"
            >
              Follow Us on Social Media
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
