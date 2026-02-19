import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support USA Ice Climbing and help grow the sport of ice climbing in America.',
}

export default function DonatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Help Grow the Sport
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your donation fuels the future of ice climbing in the United States — from expanding
            gym access and youth programs to supporting our athletes on the world stage.
          </p>
        </div>
      </section>

      {/* Donation Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl text-usa-navy mb-3">
              Donate via Zelle
            </h2>
            <p className="text-slate-500 mb-8 text-sm">
              Scan the QR code to send your donation to
              <span className="font-semibold text-usa-navy"> Kendra Stritch</span> at USA Ice Climbing.
            </p>

            <Image
              src="/zelle-qr.png"
              alt="Zelle QR Code - Donate to USA Ice Climbing"
              width={240}
              height={240}
              className="mx-auto mb-6"
            />

            <p className="text-slate-400 text-xs">
              Additional payment options coming Spring 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="border-y border-slate-200">
        <div className="section-container">
          <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-slate-200">
            <div className="py-12 text-center">
              <div className="text-3xl md:text-4xl font-display text-usa-navy mb-1">$50</div>
              <p className="text-slate-400 text-sm px-2">Introduces new climbers to the sport</p>
            </div>
            <div className="py-12 text-center">
              <div className="text-3xl md:text-4xl font-display text-usa-navy mb-1">$250</div>
              <p className="text-slate-400 text-sm px-2">Supports youth programs and outreach</p>
            </div>
            <div className="py-12 text-center">
              <div className="text-3xl md:text-4xl font-display text-usa-navy mb-1">$1,000</div>
              <p className="text-slate-400 text-sm px-2">Sponsors an athlete at a World Cup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Info + Other Ways */}
      <section className="section-padding">
        <div className="section-container text-center max-w-2xl mx-auto">
          <p className="text-slate-400 text-sm mb-12">
            USA Ice Climbing is a registered 501(c)(3) nonprofit organization.
            All donations are tax-deductible to the extent allowed by law.
          </p>

          <h2 className="font-display text-2xl text-usa-navy mb-4">
            Other Ways to Support
          </h2>
          <p className="text-slate-500 mb-8">
            Can&apos;t donate right now? There are other ways you can help grow
            ice climbing in the US.
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
