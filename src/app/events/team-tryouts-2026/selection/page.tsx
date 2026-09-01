import type { Metadata } from 'next'
import Image from 'next/image'
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
      />
      <TryoutsSubNav />

      {/* Intro — quote-style band */}
      <section className="bg-ice-50 py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-usa-navy mb-5 leading-tight">
              Two Teams. One USA Ice Climbing.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Starting in 2026, USA Ice Climbing is fielding two teams for the first time —
              more athletes will represent the program than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Team photo — full-bleed, uncropped, no one left out of frame */}
      <section className="bg-slate-950">
        <Image
          src="/USAICTeamPhoto2026.jpg"
          alt="The USA Ice Climbing team celebrating with medals at the UIAA Ice Climbing World Cup at Longmont Climbing Collective"
          width={2400}
          height={1800}
          className="w-full h-auto block"
          sizes="100vw"
        />
        <div className="section-container py-6 md:py-7">
          <p className="border-l-2 border-usa-red pl-4 text-base text-white/60 max-w-2xl">
            The USA Ice Climbing team at the UIAA Ice Climbing World Cup — Longmont Climbing
            Collective, the same venue hosting this year&apos;s tryouts.
          </p>
        </div>
      </section>

      {/* World Team / National Team */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden bg-usa-navy p-8 md:p-10 shadow-xl shadow-usa-navy/10 transition-transform duration-300 hover:-translate-y-1">
              <Trophy
                className="absolute -right-6 -top-6 w-36 h-36 text-white/[0.06] rotate-12"
                strokeWidth={1}
              />
              <div className="relative flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-white/60" strokeWidth={2} />
                <p className="text-base font-semibold uppercase tracking-widest text-white/60">World Cup Tour</p>
              </div>
              <h3 className="relative font-display text-4xl text-white mb-3">World Team</h3>
              <p className="relative text-base text-white/75 leading-relaxed">
                The athletes who carry USA Ice Climbing onto the World Cup circuit — chosen not
                just for how they climb, but for how they represent the program on and off the
                wall.
              </p>
            </div>

            <div className="group relative overflow-hidden bg-usa-red p-8 md:p-10 shadow-xl shadow-usa-red/10 transition-transform duration-300 hover:-translate-y-1">
              <TrendingUp
                className="absolute -right-6 -top-6 w-36 h-36 text-white/10 rotate-12"
                strokeWidth={1}
              />
              <div className="relative flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-white/70" strokeWidth={2} />
                  <p className="text-base font-semibold uppercase tracking-widest text-white/70">Developmental Path</p>
                </div>
                <span className="px-2.5 py-1 text-base font-bold uppercase tracking-widest bg-white text-usa-red">
                  New
                </span>
              </div>
              <h3 className="relative font-display text-4xl text-white mb-3">National Team</h3>
              <p className="relative text-base text-white/90 leading-relaxed">
                A brand-new path — for athletes building toward the World Team, and for past
                World Team athletes staying sharp. National Team athletes compete together at
                events like Continental Cups, growing the sport in every community they reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Announcement — closing band */}
      <section className="bg-usa-navy py-16 md:py-24">
        <div className="section-container text-center">
          <p className="text-base font-semibold uppercase tracking-widest text-usa-red-light mb-3">Sunday</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Team Announcement</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            World Team, National Team, and Youth Team rosters will be announced together,
            right before the Picks &amp; Pitons Finals.
          </p>
        </div>
      </section>
    </>
  )
}
