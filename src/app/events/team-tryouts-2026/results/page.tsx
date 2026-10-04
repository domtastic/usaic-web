import type { Metadata } from 'next'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Results — 2026 Team Tryouts',
  description: 'Official results from the 2026 USA Ice Climbing team tryouts in Longmont, CO.',
}

// A run is a time in seconds, or null for DNF. A heat is two runs; its score is
// their sum, and a DNF on either run makes the whole heat a DNF.
type Run = number | null
type SpeedResult = { rank: number; name: string; heats: [Run, Run][] }

const openMenSpeed: SpeedResult[] = [
  { rank: 1, name: 'Wilson Whitley', heats: [[6.87, 6.65], [null, null], [null, null]] },
  { rank: 2, name: 'Dominic Gonzalez-Padron', heats: [[9.39, 7.34], [8.78, 6.59], [6.74, 6.87]] },
  { rank: 3, name: 'Dominic Unnasch', heats: [[6.68, 7.34], [7.31, 6.78], [null, 10.08]] },
  { rank: 4, name: 'Alexander Rausch', heats: [[8.84, null], [7.15, 7.06], [11.67, 8.98]] },
  { rank: 5, name: 'Mathias Olsen', heats: [[7.75, 6.87], [7.72, 7.23], [7.41, 7.15]] },
  { rank: 6, name: 'Conner Bailey', heats: [[7.25, 8.67], [7.44, 8.28], [6.7, 10.87]] },
  { rank: 7, name: 'Matthew Durham', heats: [[10.44, 6.61], [7.31, 9.11], [7.43, 9.24]] },
  { rank: 8, name: 'Alex Mankouski', heats: [[9.06, 9.53], [11.93, 7.81], [9.11, 8.03]] },
  { rank: 9, name: 'David Sobek', heats: [[12.87, 10.7], [14.05, 11.14], [8.55, 9.92]] },
  { rank: 10, name: 'Josh Dziubczynski', heats: [[19.76, 11.03], [9.27, 9.5], [11.71, 15.75]] },
  { rank: 11, name: 'Soren Hotaling', heats: [[10.55, 12.68], [13.39, 14.83], [10.15, 10.84]] },
  { rank: 12, name: 'Christian Junkar', heats: [[11.88, 11.03], [11.67, 10.65], [10.98, 11.02]] },
  { rank: 13, name: 'Caleb Augustine', heats: [[19.01, 12.2], [11.84, 15.03], [10.75, 11.95]] },
  { rank: 14, name: 'Matthew Lankford', heats: [[14.87, 12.31], [12.04, 11.26], [10.81, null]] },
  { rank: 15, name: 'Marc Unnasch', heats: [[30.92, 22.3], [null, null], [null, null]] },
]

function heatTotal([a, b]: [Run, Run]): number | null {
  return a === null || b === null ? null : a + b
}

function fmt(t: number | null) {
  return t === null ? 'DNF' : t.toFixed(2)
}

function bestHeatIndex(heats: [Run, Run][]) {
  let best = -1
  heats.forEach((h, i) => {
    const total = heatTotal(h)
    if (total !== null && (best === -1 || total < heatTotal(heats[best])!)) best = i
  })
  return best
}

const medal = ['bg-[#c9a227]', 'bg-[#a7adb4]', 'bg-[#b0703c]']

function SpeedTable({ results }: { results: SpeedResult[] }) {
  return (
    <div className="overflow-x-auto border border-slate-200">
      <table className="w-full min-w-[640px] text-left tabular-nums">
        <thead>
          <tr className="bg-usa-navy text-white">
            <th className="px-4 py-3 text-sm font-semibold uppercase tracking-widest w-14">Rank</th>
            <th className="px-4 py-3 text-sm font-semibold uppercase tracking-widest">Athlete</th>
            {[1, 2, 3].map((n) => (
              <th key={n} className="px-4 py-3 text-sm font-semibold uppercase tracking-widest text-right">
                Heat {n}
              </th>
            ))}
            <th className="px-4 py-3 text-sm font-semibold uppercase tracking-widest text-right bg-usa-red">
              Best
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => {
            const bestIdx = bestHeatIndex(r.heats)
            const best = bestIdx === -1 ? null : heatTotal(r.heats[bestIdx])
            const podium = r.rank <= 3
            return (
              <tr key={r.name} className="border-t border-slate-200 even:bg-slate-50/70">
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      'inline-flex w-8 h-8 items-center justify-center font-display text-base',
                      podium ? cn(medal[r.rank - 1], 'text-white') : 'text-usa-navy'
                    )}
                  >
                    {r.rank}
                  </span>
                </td>
                <td className={cn('px-4 py-3 text-usa-navy', podium && 'font-semibold')}>{r.name}</td>
                {r.heats.map((h, i) => {
                  const total = heatTotal(h)
                  const isBest = i === bestIdx
                  return (
                    <td key={i} className="px-4 py-3 text-right align-top">
                      <span
                        className={cn(
                          'block',
                          total === null ? 'text-slate-400' : 'text-usa-navy',
                          isBest && 'font-semibold underline decoration-usa-red decoration-2 underline-offset-4'
                        )}
                      >
                        {fmt(total)}
                      </span>
                      <span className="block text-xs text-slate-400 mt-1">
                        {fmt(h[0])} + {fmt(h[1])}
                      </span>
                    </td>
                  )
                })}
                <td className="px-4 py-3 text-right align-top font-display text-lg text-usa-navy bg-usa-red/[0.04]">
                  {fmt(best)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default function ResultsPage() {
  const podium = openMenSpeed.slice(0, 3)

  return (
    <>
      <SubpageHeader
        eyebrow="October 2–4, 2026"
        title="Results"
        description="Official results from the 2026 team tryouts. Categories are posted here as they're finalized."
      />
      <TryoutsSubNav />

      <section className="py-14 md:py-20 bg-white">
        <div className="section-container max-w-5xl">
          <div className="border-l-2 border-usa-red pl-4 mb-3">
            <p className="text-base font-semibold uppercase tracking-widest text-usa-red mb-1">Speed</p>
            <h2 className="font-display text-3xl text-usa-navy">Open Men</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
            Each heat is two runs, and the heat time is the two runs added together. An athlete&apos;s
            final score is their fastest heat. A DNF on either run makes that heat a DNF. Times are
            in seconds.
          </p>

          {/* Podium */}
          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {podium.map((r) => {
              const best = heatTotal(r.heats[bestHeatIndex(r.heats)])
              return (
                <div key={r.name} className="border border-slate-200 px-5 py-4 flex items-center gap-4">
                  <span
                    className={cn(
                      'inline-flex w-11 h-11 shrink-0 items-center justify-center font-display text-xl text-white',
                      medal[r.rank - 1]
                    )}
                  >
                    {r.rank}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-lg text-usa-navy leading-tight">{r.name}</p>
                    <p className="text-sm text-slate-500 tabular-nums mt-0.5">{fmt(best)} s</p>
                  </div>
                </div>
              )
            })}
          </div>

          <SpeedTable results={openMenSpeed} />

          <div className="border-l-2 border-slate-300 pl-4 mt-14">
            <p className="text-slate-500 leading-relaxed">
              Results for other categories will be posted here once they&apos;re finalized.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
