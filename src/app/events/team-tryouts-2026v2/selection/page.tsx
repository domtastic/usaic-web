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

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="relative overflow-hidden bg-usa-navy p-6 md:p-7">
              <Trophy
                className="absolute -right-5 -top-5 w-32 h-32 text-white/5 rotate-12"
                strokeWidth={1}
              />
              <div className="relative flex items-center gap-2 mb-3">
                <Trophy className="w-4 h-4 text-white/60" strokeWidth={2} />
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">World Cup Tour</p>
              </div>
              <h3 className="relative font-display text-3xl text-white mb-2">World Team</h3>
              <p className="relative text-sm text-white/75 leading-relaxed">
                The athletes who carry USA Ice Climbing onto the World Cup circuit — chosen not
                just for how they climb, but for how they represent the program on and off the
                wall.
              </p>
            </div>

            <div className="relative overflow-hidden bg-usa-red p-6 md:p-7">
              <TrendingUp
                className="absolute -right-5 -top-5 w-32 h-32 text-white/10 rotate-12"
                strokeWidth={1}
              />
              <div className="relative flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-white/70" strokeWidth={2} />
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Developmental Path</p>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-white text-usa-red">
                  New
                </span>
              </div>
              <h3 className="relative font-display text-3xl text-white mb-2">National Team</h3>
              <p className="relative text-sm text-white/90 leading-relaxed">
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

          <div className="border-l-2 border-usa-red pl-4 mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-usa-red mb-1">Sunday</p>
            <h2 className="font-display text-2xl text-usa-navy">Team Announcement</h2>
          </div>

          <p className="text-slate-600 leading-relaxed max-w-2xl">
            Both rosters — World Team and National Team — will be announced together, right
            before the Picks &amp; Pitons Finals. Location TBD.
          </p>
        </div>
      </section>
    </>
  )
}
