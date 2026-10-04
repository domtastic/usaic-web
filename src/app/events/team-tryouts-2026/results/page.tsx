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

const openWomenSpeed: SpeedResult[] = [
  { rank: 1, name: 'Catalina Shirley', heats: [[9.8, 9.25], [null, null], [null, null]] },
  { rank: 2, name: 'Aria Frederickson', heats: [[null, null], [13.92, 14.73], [12.17, 14.86]] },
  { rank: 3, name: 'Nina Mankouski', heats: [[13.95, 15.62], [14.44, 14.51], [17.65, 18.78]] },
  { rank: 4, name: 'Angela Limbach', heats: [[13.56, 15.94], [14.18, 20.66], [15.44, 18.89]] },
  { rank: 5, name: 'Emma Dhimitri', heats: [[14.98, 16.72], [13.24, 16.81], [15.89, null]] },
  { rank: 6, name: 'Kelsey Beyerly', heats: [[22.28, 32.82], [18.83, 16.03], [15.37, 28.18]] },
  { rank: 7, name: 'Molly Denholm', heats: [[27.15, 22.19], [25.33, 29.16], [24.58, 25.9]] },
  { rank: 8, name: 'Zoe Schiffer', heats: [[34.14, 28.95], [22.705, null], [27.25, null]] },
]

// Youth speed results only report each athlete's best heat time.
type BestOnlyResult = { rank: number; name: string; best: number | null }

const youthSpeed: BestOnlyResult[] = [
  { rank: 1, name: 'Mckinley Heywood', best: 25.67 },
  { rank: 2, name: 'Finn Hotaling', best: 27.25 },
  { rank: 3, name: 'Pema Reed', best: 27.9 },
  { rank: 4, name: 'Luke Lauderdale', best: 28.5 },
]

// Lead qualifier score is the product of an athlete's two qualifier ranks
// (tied ranks are averaged, e.g. 1.5). Lowest score wins.
type LeadResult = { rank: number; name: string; q1: number; q2: number }

const openMenLead: LeadResult[] = [
  { rank: 1, name: 'Gregory Love', q1: 2, q2: 1.5 },
  { rank: 2, name: 'Elias Ellis', q1: 1, q2: 7 },
  { rank: 3, name: 'Dominic Unnasch', q1: 6, q2: 1.5 },
  { rank: 4, name: 'Matthew Fox', q1: 4, q2: 3 },
  { rank: 5, name: 'Carter Schmidt', q1: 3, q2: 5 },
  { rank: 6, name: 'Conner Bailey', q1: 5, q2: 6 },
  { rank: 7, name: 'Christian Junkar', q1: 8, q2: 4 },
  { rank: 8, name: 'Mihael Ashminov', q1: 7, q2: 10 },
  { rank: 9, name: 'Mathias Olsen', q1: 9, q2: 9 },
  { rank: 10, name: 'Michael Silger', q1: 13, q2: 8 },
  { rank: 11, name: 'Matthew Durham', q1: 10, q2: 12 },
  { rank: 12, name: 'Alexander Rausch', q1: 15, q2: 11 },
  { rank: 13, name: 'Dominic Gonzalez-Padron', q1: 14, q2: 13 },
  { rank: 14, name: 'David Sobek', q1: 11, q2: 19 },
  { rank: 15, name: 'Alex Mankouski', q1: 12, q2: 18 },
  { rank: 16, name: 'Matthew Lankford', q1: 17, q2: 14 },
  { rank: 17, name: 'Adam Bowen', q1: 22, q2: 15 },
  { rank: 18, name: 'Soren Hotaling', q1: 21, q2: 16 },
  { rank: 19, name: 'Daniel Plinska', q1: 16, q2: 24 },
  { rank: 20, name: 'Caleb Augustine', q1: 23, q2: 17 },
  { rank: 21, name: 'Kevin Satterfield', q1: 18, q2: 22 },
  { rank: 22, name: 'Josh Dziubczynski', q1: 20, q2: 20 },
  { rank: 23, name: 'Daniel Carper', q1: 19, q2: 23 },
  { rank: 24, name: 'Jacob Gaylord', q1: 26, q2: 21 },
  { rank: 25, name: 'Rio Buenrostro', q1: 24, q2: 25 },
  { rank: 26, name: 'Marc Unnasch', q1: 25, q2: 26 },
]

const openWomenLead: LeadResult[] = [
  { rank: 1, name: 'Cambyr Skade', q1: 1, q2: 1 },
  { rank: 2, name: 'Emma Dhimitri', q1: 2, q2: 4 },
  { rank: 3, name: 'Aria Frederickson', q1: 4, q2: 2 },
  { rank: 4, name: 'Jessica Perez', q1: 3, q2: 3 },
  { rank: 5, name: 'Angela Limbach', q1: 5, q2: 7 },
  { rank: 6, name: 'Kelsey Beyerly', q1: 7, q2: 6 },
  { rank: 7, name: 'Molly Denholm', q1: 10, q2: 5 },
  { rank: 8, name: 'Anna LaSusa', q1: 6, q2: 9 },
  { rank: 9, name: 'Nina Mankouski', q1: 8, q2: 8 },
  { rank: 10, name: 'Zoe Schiffer', q1: 9, q2: 10 },
]

function heatTotal([a, b]: [Run, Run]): number | null {
  return a === null || b === null ? null : a + b
}

function fmt(t: number | null) {
  if (t === null) return 'DNF'
  const digits = Math.abs(t * 100 - Math.round(t * 100)) > 1e-6 ? 3 : 2
  if (t < 60) return t.toFixed(digits)
  const min = Math.floor(t / 60)
  return `${min}:${(t - min * 60).toFixed(digits).padStart(digits + 3, '0')}`
}

function bestHeatIndex(heats: [Run, Run][]) {
  let best = -1
  heats.forEach((h, i) => {
    const total = heatTotal(h)
    if (total !== null && (best === -1 || total < heatTotal(heats[best])!)) best = i
  })
  return best
}

function bestTime(heats: [Run, Run][]) {
  const i = bestHeatIndex(heats)
  return i === -1 ? null : heatTotal(heats[i])
}

const medal = ['bg-[#c9a227]', 'bg-[#a7adb4]', 'bg-[#b0703c]']

function RankBadge({ rank, size = 'sm', medals = false }: { rank: number; size?: 'sm' | 'lg'; medals?: boolean }) {
  const podium = medals && rank <= 3
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center font-display',
        size === 'lg' ? 'w-10 h-10 text-lg' : 'w-6 h-6 text-sm',
        podium ? cn(medal[rank - 1], 'text-white') : 'text-usa-navy'
      )}
    >
      {rank}
    </span>
  )
}

function Podium({ entries }: { entries: { rank: number; name: string; detail: string }[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-3 mb-6">
      {entries.slice(0, 3).map((e) => (
        <div key={e.name} className="border border-slate-200 px-4 py-3 flex items-center gap-3">
          <RankBadge rank={e.rank} size="lg" medals />
          <div className="min-w-0">
            <p className="font-display text-lg text-usa-navy leading-tight">{e.name}</p>
            <p className="text-sm text-slate-500 tabular-nums mt-0.5">{e.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function CategoryHeading({ discipline, title }: { discipline: string; title: string }) {
  return (
    <div className="border-l-2 border-usa-red pl-4 mb-6">
      <p className="text-base font-semibold uppercase tracking-widest text-usa-red mb-1">{discipline}</p>
      <h3 className="font-display text-3xl text-usa-navy">{title}</h3>
    </div>
  )
}

const th = 'px-3 py-2 text-xs font-semibold uppercase tracking-widest whitespace-nowrap'
const td = 'px-3 py-1.5'

function LeadTable({ results }: { results: LeadResult[] }) {
  return (
    <div className="overflow-x-auto border border-slate-200 w-fit max-w-full">
      <table className="text-sm text-left tabular-nums">
        <thead>
          <tr className="bg-usa-navy text-white">
            <th className={cn(th, 'w-12')}>Rank</th>
            <th className={th}>Athlete</th>
            <th className={cn(th, 'text-right')}>Q1 Rank</th>
            <th className={cn(th, 'text-right')}>Q2 Rank</th>
            <th className={cn(th, 'text-right bg-usa-red')}>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.name} className="border-t border-slate-200 even:bg-slate-50/70">
              <td className={td}>
                <RankBadge rank={r.rank} />
              </td>
              <td className={cn(td, 'text-usa-navy whitespace-nowrap')}>{r.name}</td>
              <td className={cn(td, 'text-right text-slate-600')}>{r.q1}</td>
              <td className={cn(td, 'text-right text-slate-600')}>{r.q2}</td>
              <td className={cn(td, 'text-right font-display text-usa-navy bg-usa-red/[0.04]')}>
                {r.q1 * r.q2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SpeedTable({ results }: { results: SpeedResult[] }) {
  return (
    <div className="overflow-x-auto border border-slate-200 w-fit max-w-full">
      <table className="text-sm text-left tabular-nums">
        <thead>
          <tr className="bg-usa-navy text-white">
            <th className={cn(th, 'w-12')}>Rank</th>
            <th className={th}>Athlete</th>
            {[1, 2, 3].map((n) => (
              <th key={n} className={cn(th, 'text-right')}>
                Heat {n}
              </th>
            ))}
            <th className={cn(th, 'text-right bg-usa-red')}>
              Best
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => {
            const bestIdx = bestHeatIndex(r.heats)
            const best = bestTime(r.heats)
            return (
              <tr key={r.name} className="border-t border-slate-200 even:bg-slate-50/70">
                <td className={td}>
                  <RankBadge rank={r.rank} medals />
                </td>
                <td className={cn(td, 'text-usa-navy whitespace-nowrap', r.rank <= 3 && 'font-semibold')}>{r.name}</td>
                {r.heats.map((h, i) => {
                  const total = heatTotal(h)
                  const isBest = i === bestIdx
                  return (
                    <td key={i} className={cn(td, 'text-right align-top whitespace-nowrap')}>
                      <span
                        className={cn(
                          'block',
                          total === null ? 'text-slate-400' : 'text-usa-navy',
                          isBest && 'font-semibold underline decoration-usa-red decoration-2 underline-offset-2'
                        )}
                      >
                        {fmt(total)}
                      </span>
                      <span className="block text-xs text-slate-400 leading-tight">
                        {fmt(h[0])} + {fmt(h[1])}
                      </span>
                    </td>
                  )
                })}
                <td className={cn(td, 'text-right align-top font-display text-usa-navy bg-usa-red/[0.04]')}>
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

function BestOnlyTable({ results }: { results: BestOnlyResult[] }) {
  return (
    <div className="overflow-x-auto border border-slate-200 w-fit max-w-full">
      <table className="text-sm text-left tabular-nums">
        <thead>
          <tr className="bg-usa-navy text-white">
            <th className={cn(th, 'w-12')}>Rank</th>
            <th className={th}>Athlete</th>
            <th className={cn(th, 'text-right bg-usa-red')}>Best Heat</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.name} className="border-t border-slate-200 even:bg-slate-50/70">
              <td className={td}>
                <RankBadge rank={r.rank} medals />
              </td>
              <td className={cn(td, 'text-usa-navy whitespace-nowrap pr-8', r.rank <= 3 && 'font-semibold')}>{r.name}</td>
              <td className={cn(td, 'text-right font-display text-usa-navy bg-usa-red/[0.04]')}>{fmt(r.best)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const sections = [
  { id: 'lead-finals', label: 'Lead Finals' },
  { id: 'lead', label: 'Lead Qualifiers' },
  { id: 'speed', label: 'Speed' },
]

function speedPodium(results: SpeedResult[]) {
  return results.map((r) => ({ rank: r.rank, name: r.name, detail: `${fmt(bestTime(r.heats))} s` }))
}

export default function ResultsPage() {

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
          <div className="flex flex-wrap gap-3 mb-14">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border border-slate-200 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-usa-navy hover:border-usa-red hover:text-usa-red transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Lead Finals */}
          <div id="lead-finals" className="scroll-mt-48 mb-20">
            <h2 className="font-display text-4xl text-usa-navy mb-3">Lead Finals</h2>
            <div className="border-l-2 border-slate-300 pl-4">
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                Adult Lead Finals run Sunday, October 4. Final results will be posted here once
                they&apos;re official.
              </p>
            </div>
          </div>

          {/* Lead Qualifiers */}
          <div id="lead" className="scroll-mt-48 pt-14 border-t border-slate-200">
            <h2 className="font-display text-4xl text-usa-navy mb-3">Lead Qualifiers</h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Each athlete climbed two qualifier routes and was ranked on each one. Their score is
              Q1 rank × Q2 rank, and the lowest score ranks highest. When athletes tie on a route,
              they share the average of the tied places (for example, 1.5).
            </p>

            <CategoryHeading discipline="Lead" title="Men" />
            <LeadTable results={openMenLead} />

            <div className="mt-14">
              <CategoryHeading discipline="Lead" title="Women" />
              <LeadTable results={openWomenLead} />
            </div>
          </div>

          {/* Speed */}
          <div id="speed" className="scroll-mt-48 mt-20 pt-14 border-t border-slate-200">
            <h2 className="font-display text-4xl text-usa-navy mb-3">Speed</h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-3xl">
              Each heat is two runs, and the heat time is the two runs added together. An
              athlete&apos;s final score is their fastest heat. A DNF on either run makes that heat a
              DNF. Times are in seconds.
            </p>

            <CategoryHeading discipline="Speed" title="Men" />
            <Podium entries={speedPodium(openMenSpeed)} />
            <SpeedTable results={openMenSpeed} />

            <div className="mt-14">
              <CategoryHeading discipline="Speed" title="Women" />
              <Podium entries={speedPodium(openWomenSpeed)} />
              <SpeedTable results={openWomenSpeed} />
            </div>

            <div className="mt-14">
              <CategoryHeading discipline="Speed" title="Youth" />
              <Podium entries={youthSpeed.map((r) => ({ rank: r.rank, name: r.name, detail: `${fmt(r.best)} s` }))} />
              <BestOnlyTable results={youthSpeed} />
            </div>
          </div>

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
