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
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Speed is self-governed with a few volunteers on hand. Athletes competing in both
                Lead and Speed will be in Lead Heat 1 and Speed during Heat 2, so the two
                disciplines don&apos;t conflict.
              </p>
            </div>
            <div className="border border-slate-200 bg-slate-50 px-5 py-4 h-fit">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">When</p>
              <p className="font-display text-lg text-usa-navy mb-4">Friday, 12:30 – 3:30 PM</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Where</p>
              <p className="font-display text-lg text-usa-navy mb-4">Ice climbing tower</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Duration</p>
              <p className="font-display text-lg text-usa-navy">~3 hrs, depending on registrations</p>
            </div>
          </div>

          <div className="border-l-2 border-usa-red pl-4 mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-usa-red mb-1">Format</p>
            <h2 className="font-display text-2xl text-usa-navy">How Scoring Works</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200 max-w-3xl">
            <div className="bg-white p-6">
              <p className="font-display text-3xl text-usa-navy mb-2">3 Heats</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every athlete runs all 3 heats.
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="font-display text-3xl text-usa-navy mb-2">2 Runs</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Each heat is 2 back-to-back runs. A heat&apos;s score is the combined time of both
                runs.
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="font-display text-3xl text-usa-navy mb-2">Best of 3</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                The lowest of the three heat totals is the athlete&apos;s final score.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-6 max-w-2xl">
            This format is still being finalized and may change before the event.
          </p>
        </div>
      </section>
    </>
  )
}
