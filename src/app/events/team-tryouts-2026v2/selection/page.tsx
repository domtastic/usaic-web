import type { Metadata } from 'next'
import { Trophy, TrendingUp } from 'lucide-react'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Team Selection — 2026 Team Tryouts',
  description: 'How USA Ice Climbing selects the World Team and National Team, and when the 2026 team will be announced.',
}

export default function SelectionPage() {
  return (
    <>
      <SubpageHeader
        eyebrow="Team Selection"
        title="Team Selection"
        description="Two teams. One weekend to make either of them."
      />
      <TryoutsSubNav />

      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-3">
              Two Teams. One USA Ice Climbing.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Starting in 2026, USA Ice Climbing is fielding two teams for the first time — more
              athletes will represent the program than ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-usa-navy p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-usa-navy/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-usa-navy" strokeWidth={1.75} />
                </div>
                <p className="font-display text-4xl text-usa-navy tabular-nums">6</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-usa-navy/60 mb-1">World Cup Tour</p>
              <h3 className="font-display text-2xl text-usa-navy mb-3">World Team</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The athletes who carry USA Ice Climbing onto the World Cup circuit — chosen not
                just for how they climb, but for how they represent the program on and off the
                wall.
              </p>
            </div>

            <div className="border-2 border-usa-red p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-usa-red/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-usa-red" strokeWidth={1.75} />
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-widest bg-usa-red/10 text-usa-red">
                  New
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-usa-red/70 mb-1">Developmental Path</p>
              <h3 className="font-display text-2xl text-usa-navy mb-3">National Team</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A brand-new path — for athletes building toward the World Team, and for past
                World Team athletes staying sharp. National Team athletes compete together at
                events like Continental Cups, growing the sport in every community they reach.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 max-w-2xl mb-14">
            Both teams represent USA Ice Climbing — tryouts this October are your shot at either
            one.
          </p>

          <div className="border border-slate-200 bg-slate-50 px-5 py-4 max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">When</p>
            <p className="font-display text-lg text-usa-navy mb-4">Sunday, before Picks &amp; Pitons Finals</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Where</p>
            <p className="font-display text-lg text-usa-navy">TBD</p>
          </div>
        </div>
      </section>
    </>
  )
}
