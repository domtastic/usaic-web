import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nonprofit Status',
  description:
    'USA Ice Climbing is a registered 501(c)(3) nonprofit organization. Details on our EIN, determination date, and mailing address.',
}

export default function NonprofitStatusPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <p className="text-base font-semibold uppercase tracking-widest text-white/70 mb-3">
            About USAIC
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Our Nonprofit Status
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            USA Ice Climbing is a registered 501(c)(3) tax-exempt organization, recognized by
            the IRS in early 2026.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              In January 2026, USA Ice Climbing officially received its determination as a
              501(c)(3) public charity from the IRS — a milestone years in the making for an
              organization built by volunteers who wanted a real, lasting home for the sport in
              America. That status means donations to USAIC are tax-deductible, and it holds us
              to a higher standard of transparency about who we are and how we operate. This
              page is where we keep that information current.
            </p>
          </div>
        </div>
      </section>

      {/* Organization details */}
      <section className="section-padding bg-ice-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-8">
              Organization Details
            </h2>
            <dl className="bg-white divide-y divide-slate-200 shadow-sm">
              <div className="border-l-2 border-usa-red px-6 py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <dt className="text-base font-semibold uppercase tracking-widest text-slate-500">
                  Legal Name
                </dt>
                <dd className="text-lg text-usa-navy font-display">USA Ice Climbing</dd>
              </div>
              <div className="border-l-2 border-usa-red px-6 py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <dt className="text-base font-semibold uppercase tracking-widest text-slate-500">
                  Tax Status
                </dt>
                <dd className="text-lg text-usa-navy font-display">
                  501(c)(3) Public Charity
                </dd>
              </div>
              <div className="border-l-2 border-usa-red px-6 py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <dt className="text-base font-semibold uppercase tracking-widest text-slate-500">
                  EIN
                </dt>
                <dd className="text-lg text-usa-navy font-display tabular-nums">81-5160708</dd>
              </div>
              <div className="border-l-2 border-usa-red px-6 py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <dt className="text-base font-semibold uppercase tracking-widest text-slate-500">
                  Effective Date of Exemption
                </dt>
                <dd className="text-lg text-usa-navy font-display">January 31, 2026</dd>
              </div>
              <div className="border-l-2 border-usa-red px-6 py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <dt className="text-base font-semibold uppercase tracking-widest text-slate-500">
                  Mailing Address
                </dt>
                <dd className="text-lg text-usa-navy font-display sm:text-right">
                  4523 E Lake St
                  <br />
                  Minneapolis, MN 55406
                </dd>
              </div>
            </dl>
            <p className="text-base text-slate-500 mt-4">
              We&apos;re in the process of updating our registered mailing address with the IRS,
              moving to <span className="text-slate-700 font-semibold">1801 N 49th St,
              Milwaukee, WI 53208</span>. This page will reflect that as our official address
              once the update is complete.
            </p>
          </div>
        </div>
      </section>

      {/* Mission reaffirmation */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6">
              What This Means for the Sport
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              USA Ice Climbing is committed to growing ice climbing, mixed climbing, and
              drytooling across the United States by supporting athletes, building a strong
              competitive circuit, and advocating for the sport&apos;s future on the world
              stage — including its inclusion in the Olympic Games. Nonprofit status lets us
              pursue that mission with grant funding, tax-deductible donations, and the kind of
              organizational accountability our athletes and community deserve.
            </p>
            <Link href="/about" className="text-usa-red font-semibold hover:text-usa-red-dark">
              Read more about our mission →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">Questions?</h2>
            <p className="text-lg text-slate-300 mb-8">
              If you need documentation of our nonprofit status for a grant, sponsorship, or
              donation, reach out and we&apos;ll get it to you.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
