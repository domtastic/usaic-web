import type { Metadata } from 'next'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Speed Tryouts Format — 2026 Team Tryouts',
  description: 'Format and timing for the 2026 USA Ice Climbing adult speed tryouts.',
}

export default function SpeedFormatPage() {
  return (
    <>
      <SubpageHeader eyebrow="Adult Speed" title="Speed Tryouts Format" />
      <TryoutsSubNav />

      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Speed is self-governed with a few volunteers on hand. Athletes will be given a
                number of attempts to post their best time — exact format is still TBD.
              </p>
              <p>
                Athletes competing in both Lead and Speed will run Lead during Heat 1 and Speed
                during Heat 2, so the two disciplines don&apos;t conflict.
              </p>
              <p>Best attempt (or the average of the best few) will be taken for scoring.</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 px-5 py-4 h-fit">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">When</p>
              <p className="font-display text-lg text-usa-navy mb-4">Friday, 12:30 – 3:30 PM</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Where</p>
              <p className="font-display text-lg text-usa-navy mb-4">Ice climbing tower</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Duration</p>
              <p className="font-display text-lg text-usa-navy">~3 hrs, depending on registrations</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
