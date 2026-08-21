import type { Metadata } from 'next'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Youth Team Event — 2026 Team Tryouts',
  description: 'Schedule and details for the 2026 USA Ice Climbing Youth Team Event.',
}

export default function YouthFormatPage() {
  return (
    <>
      <SubpageHeader eyebrow="Youth" title="Youth Team Event" />
      <TryoutsSubNav />

      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>
                The Youth Team Event is built around experience and togetherness — a chance for
                youth athletes to build skills and connect with one another on the ice climbing
                tower.
              </p>
              <p>Full schedule and format are still being finalized.</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 px-5 py-4 h-fit">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">When</p>
              <p className="font-display text-lg text-usa-navy mb-4">Saturday &amp; Sunday — time TBD</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Where</p>
              <p className="font-display text-lg text-usa-navy">Ice climbing tower</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
