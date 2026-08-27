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
          <div className="grid sm:grid-cols-2 gap-3 mb-14 max-w-2xl">
            <div className="border border-slate-200 px-5 py-4">
              <p className="text-base font-semibold uppercase tracking-widest text-slate-500 mb-1">When</p>
              <p className="font-display text-lg text-usa-navy">Saturday</p>
            </div>
            <div className="border border-slate-200 px-5 py-4">
              <p className="text-base font-semibold uppercase tracking-widest text-slate-500 mb-1">Where</p>
              <p className="font-display text-lg text-usa-navy">Ice climbing tower</p>
            </div>
          </div>

          <div className="border-l-2 border-usa-red pl-4 mb-6">
            <p className="text-base font-semibold uppercase tracking-widest text-usa-red mb-1">Format</p>
            <h2 className="font-display text-2xl text-usa-navy">Youth (U16) Schedule</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 max-w-2xl mb-10">
            <div className="bg-white p-6">
              <p className="font-display text-3xl text-usa-navy mb-2">12:00 PM</p>
              <p className="text-base text-slate-600 leading-relaxed">
                2 qualifying routes (top rope) + Speed
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="font-display text-3xl text-usa-navy mb-2">4:00 PM</p>
              <p className="text-base text-slate-600 leading-relaxed">1 final route (top rope)</p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed max-w-2xl">
            Athletes U19 and older are encouraged to apply and participate in the Adult Lead and
            Speed tryouts instead.
          </p>
        </div>
      </section>
    </>
  )
}
