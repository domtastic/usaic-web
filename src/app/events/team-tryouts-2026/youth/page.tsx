import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

const ageGroups = [
  { label: 'Youth B (U16)', rule: 'Athletes born 14 or 15 years before the season’s main year' },
  { label: 'Youth A (U18)', rule: 'Athletes born 16 or 17 years before the season’s main year' },
  { label: 'Junior (U20)', rule: 'Athletes born 18 or 19 years before the season’s main year' },
]

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
            <p className="text-base font-semibold uppercase tracking-widest text-usa-red mb-1">Eligibility</p>
            <h2 className="font-display text-2xl text-usa-navy">Age Groups</h2>
          </div>

          <p className="text-slate-600 leading-relaxed max-w-2xl mb-5">
            Per UIAA rules, the World Youth Championships include both Difficulty and Speed
            categories across three age groups:
          </p>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200 max-w-2xl mb-6">
            {ageGroups.map((group) => (
              <div key={group.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4">
                <span className="font-display text-lg text-usa-navy w-44 shrink-0">{group.label}</span>
                <span className="text-base text-slate-600 leading-relaxed">{group.rule}</span>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 px-5 py-4 max-w-2xl mb-14">
            <Info className="w-5 h-5 text-usa-navy shrink-0 mt-0.5" strokeWidth={1.75} />
            <p className="text-base text-slate-600 leading-relaxed">
              This year&apos;s Youth Team Event is open to <strong className="text-usa-navy">Youth B (U16)</strong> athletes
              — born in 2011 or 2012. To compete in a UIAA World Cup event, an athlete must turn
              16 years old during the year of competition.
            </p>
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
            Athletes in the Youth A (U18) or Junior (U20) age groups are encouraged to apply and
            participate in the Adult Lead and Speed tryouts instead.
          </p>
        </div>
      </section>
    </>
  )
}
