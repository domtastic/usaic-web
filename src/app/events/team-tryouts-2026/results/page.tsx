import type { Metadata } from 'next'
import Link from 'next/link'
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

// Youth difficulty qualifiers: three routes, each scored by highest hold (or TOP).
// Athletes are ranked on each route, tied athletes average the places they cover,
// and rank points are the three route ranks multiplied together.
const youthDifficultyQualifiers: { name: string; scores: (number | 'TOP')[] }[] = [
  { name: 'Luke Lauderdale', scores: [12, 9, 5] },
  { name: 'Mckinley Heywood', scores: [8, 4, 5] },
  { name: 'Finn Hotaling', scores: [11, 2, 8] },
  { name: 'Pema Reed', scores: ['TOP', 7, 8] },
]

function routeRanks(scores: (number | 'TOP')[]) {
  const value = (s: number | 'TOP') => (s === 'TOP' ? Infinity : s)
  return scores.map((s) => {
    const better = scores.filter((o) => value(o) > value(s)).length
    const tied = scores.filter((o) => value(o) === value(s)).length
    return better + (tied + 1) / 2
  })
}

function youthQualifierStandings() {
  const routeCount = youthDifficultyQualifiers[0].scores.length
  const ranksByRoute = Array.from({ length: routeCount }, (_, i) =>
    routeRanks(youthDifficultyQualifiers.map((a) => a.scores[i]))
  )
  return youthDifficultyQualifiers
    .map((a, ai) => {
      const ranks = ranksByRoute.map((r) => r[ai])
      return { ...a, ranks, points: ranks.reduce((x, y) => x * y, 1) }
    })
    .sort((a, b) => a.points - b.points)
    .map((a, i) => ({ ...a, rank: i + 1 }))
}

// Youth difficulty final: everyone topped, so places are decided by time left on the clock.
const youthDifficultyFinals: { rank: number; name: string; result: string; timeLeft: string }[] = [
  { rank: 1, name: 'Pema Reed', result: 'TOP', timeLeft: '1:54' },
  { rank: 2, name: 'Mckinley Heywood', result: 'TOP', timeLeft: '1:31' },
  { rank: 3, name: 'Luke Lauderdale', result: 'TOP', timeLeft: '1:24' },
  { rank: 4, name: 'Finn Hotaling', result: 'TOP', timeLeft: '1:14' },
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
  { rank: 2.5, name: 'Emma Dhimitri', q1: 2, q2: 4 },
  { rank: 2.5, name: 'Aria Frederickson', q1: 4, q2: 2 },
  { rank: 4, name: 'Jessica Perez', q1: 3, q2: 3 },
  { rank: 5, name: 'Angela Limbach', q1: 5, q2: 7 },
  { rank: 6, name: 'Kelsey Beyerly', q1: 7, q2: 6 },
  { rank: 7, name: 'Molly Denholm', q1: 10, q2: 5 },
  { rank: 8, name: 'Anna LaSusa', q1: 6, q2: 9 },
  { rank: 9, name: 'Nina Mankouski', q1: 8, q2: 8 },
  { rank: 10, name: 'Zoe Schiffer', q1: 9, q2: 10 },
]

// Per-climb scores for each qualifier round, as given on the official sheets.
type RoundTable = { columns: string[]; rows: { rank: string; name: string; scores: string[] }[] }

const menQ1: RoundTable = {
  columns: ['Climb 1', 'Climb 1 – 2nd Attempt', 'Climb 2', 'Climb 2 – 2nd Attempt', 'Rank Points'],
  rows: [
    { rank: '1', name: 'Elias Ellis', scores: ['TOP', '14', 'TOP', 'TOP', '40'] },
    { rank: '2', name: 'Gregory Love', scores: ['TOP', '13+0.2', 'TOP', 'TOP', '60'] },
    { rank: '3', name: 'Carter Schmidt', scores: ['TOP', 'TOP', '11', 'TOP', '80'] },
    { rank: '4', name: 'Matthew Fox', scores: ['12', '12', 'TOP', 'TOP', '312'] },
    { rank: '5', name: 'Conner Bailey', scores: ['12', '13', '13', 'TOP', '648'] },
    { rank: '6', name: 'Dominic Unnasch', scores: ['TOP', '6', '14+0.1', 'TOP', '855'] },
    { rank: '7', name: 'Mihael Ashminov', scores: ['10', '11+0.2', '14+0.1', 'TOP', '1377'] },
    { rank: '8', name: 'Christian Junkar', scores: ['12', '13', '10', '11', '3726'] },
    { rank: '9', name: 'Mathias Olsen', scores: ['6', '12', '10', '14', '10764'] },
    { rank: '10', name: 'Matthew Durham', scores: ['9+0.2', '10', '10+0.2', '12', '12075'] },
    { rank: '11', name: 'David Sobek', scores: ['8', '10', '11', '12', '14007'] },
    { rank: '12', name: 'Alex Mankouski', scores: ['6', '8', '11', '12+0.2', '20736'] },
    { rank: '13', name: 'Michael Silger', scores: ['9', '11+0.2', '7+0.2', '10+0.2', '22542'] },
    { rank: '14', name: 'Dominic Gonzalez-Padron', scores: ['11', '11', '7+0.1', '7+0.2', '24480'] },
    { rank: '15', name: 'Alexander Rausch', scores: ['9', '8', '8', '7+0.1', '56832'] },
    { rank: '16', name: 'Daniel Plinska', scores: ['9', '9+0.1', '5+0.2', '6', '73788'] },
    { rank: '17', name: 'Matthew Lankford', scores: ['8', '8+0.2', '5+0.1', '7+0.1', '88254.3'] },
    { rank: '18', name: 'Kevin Satterfield', scores: ['6+0.1', '8', '7', '7', '99840'] },
    { rank: '19', name: 'Daniel Carper', scores: ['6', '6', '7', '9', '100035'] },
    { rank: '20', name: 'Josh Dziubczynski', scores: ['0', '5+0.2', '9', '8', '124656'] },
    { rank: '21', name: 'Soren Hotaling', scores: ['1+0.1', '1', '9', '10', '127400'] },
    { rank: '22', name: 'Adam Bowen', scores: ['5', '5', '9', '6', '142222.5'] },
    { rank: '23', name: 'Caleb Augustine', scores: ['5+0.1', '6', '6', '5+0.1', '187530'] },
    { rank: '24', name: 'Rio Buenrostro', scores: ['4+0.2', '5', '5+0.1', '5+0.1', '273363.8'] },
    { rank: '25', name: 'Marc Unnasch', scores: ['3', '3', '4', '4', '365976'] },
    { rank: '26', name: 'Jacob Gaylord', scores: ['2+0.1', '2+0.1', '4', '4+0.1', '382500'] },
  ],
}

const womenQ1: RoundTable = {
  columns: ['Climb 1', 'Climb 1 – 2nd Attempt', 'Climb 2', 'Climb 2 – 2nd Attempt', 'Rank Points'],
  rows: [
    { rank: '1', name: 'Cambyr Skade', scores: ['6', '12+0.2', '11', '13+0.2', '5.5'] },
    { rank: '2', name: 'Emma Dhimitri', scores: ['9', '8', '9', '11', '12.5'] },
    { rank: '3', name: 'Jessica Perez', scores: ['6', '6+0.1', '9', '10', '206.3'] },
    { rank: '4', name: 'Aria Frederickson', scores: ['7+0.1', '7+0.1', '8', '7', '240'] },
    { rank: '5', name: 'Angela Limbach', scores: ['7', '8', '7+0.1', '7+0.1', '270'] },
    { rank: '6', name: 'Anna LaSusa', scores: ['4', '6', '7+0.2', '9', '1800'] },
    { rank: '7', name: 'Kelsey Beyerly', scores: ['5', '6', '7', '9', '2016'] },
    { rank: '8', name: 'Nina Mankouski', scores: ['6', '6', '6', '4', '3740'] },
    { rank: '9', name: 'Zoe Schiffer', scores: ['6', '6', '4', '5+0.1', '3960'] },
    { rank: '10', name: 'Molly Denholm', scores: ['4+0.1', '6', '6', '7', '4590'] },
  ],
}

const menQ2: RoundTable = {
  columns: ['Climb 1', 'Climb 2', 'Rank Points'],
  rows: [
    { rank: '1.5', name: 'Gregory Love', scores: ['TOP', 'TOP', '7'] },
    { rank: '1.5', name: 'Dominic Unnasch', scores: ['TOP', 'TOP', '7'] },
    { rank: '3', name: 'Matthew Fox', scores: ['21', 'TOP', '14'] },
    { rank: '4', name: 'Christian Junkar', scores: ['20+0.1', 'TOP', '17.5'] },
    { rank: '5', name: 'Carter Schmidt', scores: ['19+0.2', 'TOP', '21'] },
    { rank: '6', name: 'Conner Bailey', scores: ['TOP', '7+0.1', '31'] },
    { rank: '7', name: 'Elias Ellis', scores: ['17', 'TOP', '31.5'] },
    { rank: '8', name: 'Michael Silger', scores: ['19', '15+0.1', '52.5'] },
    { rank: '9', name: 'Mathias Olsen', scores: ['19', '14', '71.3'] },
    { rank: '10', name: 'Mihael Ashminov', scores: ['16+0.1', '15', '80'] },
    { rank: '11', name: 'Alexander Rausch', scores: ['13', '14', '137.8'] },
    { rank: '12', name: 'Matthew Durham', scores: ['16', '7+0.2', '148.5'] },
    { rank: '13', name: 'Dominic Gonzalez-Padron', scores: ['13', '13+0.2', '159.5'] },
    { rank: '14', name: 'Matthew Lankford', scores: ['13', '12', '174'] },
    { rank: '15', name: 'Adam Bowen', scores: ['12+0.2', '7+0.2', '243'] },
    { rank: '16', name: 'Soren Hotaling', scores: ['13', '7', '268.3'] },
    { rank: '17', name: 'Caleb Augustine', scores: ['13', '7', '268.3'] },
    { rank: '18', name: 'Alex Mankouski', scores: ['13', '6+0.1', '304.5'] },
    { rank: '19', name: 'David Sobek', scores: ['9', '7+0.1', '325.5'] },
    { rank: '20', name: 'Josh Dziubczynski', scores: ['9', '7', '388.5'] },
    { rank: '21', name: 'Jacob Gaylord', scores: ['9', '7', '388.5'] },
    { rank: '22', name: 'Kevin Satterfield', scores: ['9', '6', '472.5'] },
    { rank: '23', name: 'Daniel Carper', scores: ['9', '6', '472.5'] },
    { rank: '24', name: 'Daniel Plinska', scores: ['8', '5+0.1', '576'] },
    { rank: '25', name: 'Rio Buenrostro', scores: ['7', '5', '650.3'] },
    { rank: '26', name: 'Marc Unnasch', scores: ['7', '5', '650.3'] },
  ],
}

const womenQ2: RoundTable = {
  columns: ['Climb 1', 'Climb 2', 'Rank Points'],
  rows: [
    { rank: '1', name: 'Cambyr Skade', scores: ['15+0.1', '15', '1'] },
    { rank: '2', name: 'Aria Frederickson', scores: ['9', '13', '7.5'] },
    { rank: '3', name: 'Jessica Perez', scores: ['13', '8+0.1', '8'] },
    { rank: '4', name: 'Emma Dhimitri', scores: ['5+0.2', '13', '15'] },
    { rank: '5', name: 'Molly Denholm', scores: ['7', '6+0.1', '33.8'] },
    { rank: '6', name: 'Kelsey Beyerly', scores: ['5', '7', '42'] },
    { rank: '7', name: 'Angela Limbach', scores: ['4', '7+0.1', '42.5'] },
    { rank: '8', name: 'Nina Mankouski', scores: ['7', '5+0.1', '42.8'] },
    { rank: '9', name: 'Anna LaSusa', scores: ['4', '6+0.1', '63.8'] },
    { rank: '10', name: 'Zoe Schiffer', scores: ['0+0.2', '5+0.1', '95'] },
  ],
}

// Lead finals: two climbs, ranked on each; rank points are the two climb ranks multiplied.
const menFinals: RoundTable = {
  columns: ['Climb 1', 'Climb 2', 'Rank Points'],
  rows: [
    { rank: '1', name: 'Elias Ellis', scores: ['20.2', '22', '2'] },
    { rank: '2', name: 'Conner Bailey', scores: ['16.2', '21', '8'] },
    { rank: '3', name: 'Dominic Unnasch', scores: ['21', '4.2', '10'] },
    { rank: '4', name: 'Carter Schmidt', scores: ['17', '16.2', '13.5'] },
    { rank: '5', name: 'Gregory Love', scores: ['14', '20.1', '15'] },
    { rank: '6', name: 'Matthew Fox', scores: ['13', '16.2', '31.5'] },
    { rank: '7', name: 'Michael Silger', scores: ['13.1', '14', '36'] },
    { rank: '8', name: 'Christian Junkar', scores: ['8', '13.1', '59.5'] },
    { rank: '9', name: 'Mathias Olsen', scores: ['8', '8.2', '76.5'] },
    { rank: '10', name: 'Mihael Ashminov', scores: ['6', '13', '80'] },
  ],
}

const womenFinals: RoundTable = {
  columns: ['Climb 1', 'Climb 2', 'Rank Points'],
  rows: [
    { rank: '1', name: 'Angela Limbach', scores: ['13', '15.2', '3'] },
    { rank: '2', name: 'Emma Dhimitri', scores: ['16', '8', '9'] },
    { rank: '3', name: 'Jessica Perez', scores: ['8', '15.1', '9'] },
    { rank: '4', name: 'Cambyr Skade', scores: ['18', '3', '10'] },
    { rank: '5', name: 'Anna LaSusa', scores: ['8', '11', '13.5'] },
    { rank: '6', name: 'Kelsey Beyerly', scores: ['6.1', '8', '29.3'] },
    { rank: '7', name: 'Aria Frederickson', scores: ['6.1', '6.1', '39'] },
    { rank: '8', name: 'Molly Denholm', scores: ['6', '6', '72'] },
    { rank: '9', name: 'Nina Mankouski', scores: ['6', '6', '72'] },
    { rank: '10', name: 'Zoe Schiffer', scores: ['6', '6', '72'] },
  ],
}

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
        size === 'lg' ? 'w-10 h-10 text-lg' : 'min-w-6 h-6 px-0.5 text-sm',
        podium ? cn(medal[rank - 1], 'text-white') : 'text-usa-navy'
      )}
    >
      {rank}
    </span>
  )
}

function Podium({ entries }: { entries: { rank: number; name: string; detail: string }[] }) {
  return (
    <div className="hidden sm:grid grid-cols-3 gap-2 mb-4">
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

function CategoryHeading({ title }: { title: string }) {
  return (
    <div className="border-l-2 border-usa-red pl-4 mb-4 md:mb-5">
      <h3 className="font-display text-2xl text-usa-navy">{title}</h3>
    </div>
  )
}

const th = 'sticky top-0 z-10 bg-usa-navy px-2 md:px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider md:tracking-widest whitespace-nowrap'
const td = 'px-2 md:px-3 py-1.5'

// On mobile the table scrolls inside its own box, so the header row and the
// Rank + Athlete columns can stay frozen while the scores scroll under them.
const tableWrap = 'overflow-auto border border-slate-200 w-fit max-w-full max-md:max-h-[70vh]'
const tableBase = 'text-sm md:text-base text-left tabular-nums border-separate border-spacing-0'
const row = 'bg-white even:bg-slate-50'
const rankW = 'w-10 min-w-10 max-w-10 md:w-16 md:min-w-16 md:max-w-16 px-0 md:px-0 text-center'
const rankTh = cn('left-0 z-20', rankW)
const nameTh = 'left-10 md:left-16 z-20'
const rankTd = cn('sticky left-0 z-[1] bg-inherit border-t border-slate-200', rankW)
const nameTd = 'sticky left-10 md:left-16 z-[1] bg-inherit border-t border-slate-200 shadow-[inset_-1px_0_0_#e2e8f0] leading-tight max-md:min-w-[7.5rem] max-md:max-w-[9rem] md:whitespace-nowrap'
const cellTd = 'border-t border-slate-200'

function LeadTable({ results }: { results: LeadResult[] }) {
  return (
    <div className={tableWrap}>
      <table className={tableBase}>
        <thead>
          <tr className="text-white">
            <th className={cn(th, rankTh)}>
              <span className="md:hidden">#</span>
              <span className="hidden md:inline">Rank</span>
            </th>
            <th className={cn(th, nameTh)}>Athlete</th>
            <th className={cn(th, 'text-right')}>Q1 Rank</th>
            <th className={cn(th, 'text-right')}>Q2 Rank</th>
            <th className={cn(th, 'text-right !bg-usa-red')}>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.name} className={row}>
              <td className={cn(td, rankTd)}>
                <RankBadge rank={r.rank} />
              </td>
              <td className={cn(td, nameTd, 'text-usa-navy')}>{r.name}</td>
              <td className={cn(td, cellTd, 'text-right text-slate-600')}>{r.q1}</td>
              <td className={cn(td, cellTd, 'text-right text-slate-600')}>{r.q2}</td>
              <td className={cn(td, cellTd, 'text-right font-display text-usa-navy bg-usa-red/[0.04]')}>
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
    <div className={tableWrap}>
      <table className={tableBase}>
        <thead>
          <tr className="text-white">
            <th className={cn(th, rankTh)}>
              <span className="md:hidden">#</span>
              <span className="hidden md:inline">Rank</span>
            </th>
            <th className={cn(th, nameTh)}>Athlete</th>
            {[1, 2, 3].map((n) => (
              <th key={n} className={cn(th, 'text-right')}>
                Heat {n}
              </th>
            ))}
            <th className={cn(th, 'text-right !bg-usa-red')}>
              Best
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => {
            const bestIdx = bestHeatIndex(r.heats)
            const best = bestTime(r.heats)
            return (
              <tr key={r.name} className={row}>
                <td className={cn(td, rankTd)}>
                  <RankBadge rank={r.rank} medals />
                </td>
                <td className={cn(td, nameTd, 'text-usa-navy', r.rank <= 3 && 'font-semibold')}>{r.name}</td>
                {r.heats.map((h, i) => {
                  const total = heatTotal(h)
                  const isBest = i === bestIdx
                  return (
                    <td key={i} className={cn(td, cellTd, 'text-right align-top whitespace-nowrap')}>
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
                <td className={cn(td, cellTd, 'text-right align-top font-display text-usa-navy bg-usa-red/[0.04]')}>
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
    <div className={tableWrap}>
      <table className={tableBase}>
        <thead>
          <tr className="text-white">
            <th className={cn(th, rankTh)}>
              <span className="md:hidden">#</span>
              <span className="hidden md:inline">Rank</span>
            </th>
            <th className={cn(th, nameTh)}>Athlete</th>
            <th className={cn(th, 'text-right !bg-usa-red')}>Best Heat</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.name} className={row}>
              <td className={cn(td, rankTd)}>
                <RankBadge rank={r.rank} medals />
              </td>
              <td className={cn(td, nameTd, 'text-usa-navy pr-8', r.rank <= 3 && 'font-semibold')}>{r.name}</td>
              <td className={cn(td, cellTd, 'text-right font-display text-usa-navy bg-usa-red/[0.04]')}>{fmt(r.best)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// The sheets record partial progress as "14+0.1"; show it as "14.1".
function holdScore(score: string) {
  return score.replace(/^(\d+)\+0\.(\d+)$/, '$1.$2')
}

function RoundScoreTable({ table, medals = false }: { table: RoundTable; medals?: boolean }) {
  return (
    <div className={tableWrap}>
      <table className={tableBase}>
        <thead>
          <tr className="text-white">
            <th className={cn(th, rankTh)}>
              <span className="md:hidden">#</span>
              <span className="hidden md:inline">Rank</span>
            </th>
            <th className={cn(th, nameTh)}>Athlete</th>
            {table.columns.map((c) => (
              <th key={c} className={cn(th, 'text-right align-bottom', c === 'Rank Points' && '!bg-usa-red')}>
                {c.split(' – ').map((part, i) => (
                  <span key={part} className={cn('block', i > 0 && 'text-[11px] text-white/60')}>
                    {part}
                  </span>
                ))}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r) => (
            <tr key={r.name} className={row}>
              <td className={cn(td, rankTd, 'font-display text-usa-navy text-center')}>
                {medals ? <RankBadge rank={Number(r.rank)} medals /> : r.rank}
              </td>
              <td className={cn(td, nameTd, 'text-usa-navy pr-6')}>{r.name}</td>
              {r.scores.map((score, i) => {
                const points = table.columns[i] === 'Rank Points'
                return (
                  <td
                    key={i}
                    className={cn(
                      td,
                      cellTd,
                      'text-right whitespace-nowrap',
                      points
                        ? 'font-display text-usa-navy bg-usa-red/[0.04]'
                        : score === 'TOP'
                          ? 'font-semibold text-usa-red tracking-wide'
                          : 'text-slate-600'
                    )}
                  >
                    {holdScore(score)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-semibold uppercase tracking-widest text-slate-500 mb-3">{children}</p>
}

function YouthFinalsTable() {
  return (
    <div className={tableWrap}>
      <table className={tableBase}>
        <thead>
          <tr className="text-white">
            <th className={cn(th, rankTh)}>
              <span className="md:hidden">#</span>
              <span className="hidden md:inline">Rank</span>
            </th>
            <th className={cn(th, nameTh)}>Athlete</th>
            <th className={cn(th, 'text-right')}>Result</th>
            <th className={cn(th, 'text-right !bg-usa-red')}>Time Left</th>
          </tr>
        </thead>
        <tbody>
          {youthDifficultyFinals.map((r) => (
            <tr key={r.name} className={row}>
              <td className={cn(td, rankTd)}>
                <RankBadge rank={r.rank} medals />
              </td>
              <td className={cn(td, nameTd, 'text-usa-navy pr-8', r.rank <= 3 && 'font-semibold')}>{r.name}</td>
              <td className={cn(td, cellTd, 'text-right font-semibold text-usa-red tracking-wide')}>{r.result}</td>
              <td className={cn(td, cellTd, 'text-right font-display text-usa-navy bg-usa-red/[0.04]')}>{r.timeLeft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function YouthQualifiersTable() {
  const standings = youthQualifierStandings()
  return (
    <div className={tableWrap}>
      <table className={tableBase}>
        <thead>
          <tr className="text-white">
            <th className={cn(th, rankTh)}>
              <span className="md:hidden">#</span>
              <span className="hidden md:inline">Rank</span>
            </th>
            <th className={cn(th, nameTh)}>Athlete</th>
            {standings[0].scores.map((_, i) => (
              <th key={i} className={cn(th, 'text-right')}>
                Route {i + 1}
              </th>
            ))}
            <th className={cn(th, 'text-right !bg-usa-red')}>Rank Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((r) => (
            <tr key={r.name} className={row}>
              <td className={cn(td, rankTd, 'font-display text-usa-navy text-center')}>{r.rank}</td>
              <td className={cn(td, nameTd, 'text-usa-navy pr-6')}>{r.name}</td>
              {r.scores.map((score, i) => (
                <td key={i} className={cn(td, cellTd, 'text-right align-top whitespace-nowrap')}>
                  <span className={cn('block', score === 'TOP' ? 'font-semibold text-usa-red tracking-wide' : 'text-slate-600')}>
                    {score}
                  </span>
                  <span className="block text-xs text-slate-400 leading-tight">Rank {r.ranks[i]}</span>
                </td>
              ))}
              <td className={cn(td, cellTd, 'text-right align-top font-display text-usa-navy bg-usa-red/[0.04]')}>{r.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function speedPodium(results: SpeedResult[]) {
  return results.map((r) => ({ rank: r.rank, name: r.name, detail: `${fmt(bestTime(r.heats))} s` }))
}

function ViewIntro({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <>
      <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-3">{title}</h2>
      {children && <p className="text-slate-600 leading-relaxed mb-6 md:mb-10 max-w-3xl">{children}</p>}
    </>
  )
}

function finalsPodium(table: RoundTable) {
  return table.rows.map((r) => ({ rank: Number(r.rank), name: r.name, detail: `${r.scores.at(-1)} rank points` }))
}

function LeadFinalsView() {
  return (
    <>
      <ViewIntro title="Lead Finals">
        Finalists climbed two routes and were ranked on each one. Their rank points are their Climb 1
        rank × Climb 2 rank, and the lowest total wins.
      </ViewIntro>

      <CategoryHeading title="Men" />
      <div className="w-fit max-w-full">
        <Podium entries={finalsPodium(menFinals)} />
        <RoundScoreTable table={menFinals} medals />
      </div>

      <div className="mt-10 md:mt-14">
        <CategoryHeading title="Women" />
        <div className="w-fit max-w-full">
          <Podium entries={finalsPodium(womenFinals)} />
          <RoundScoreTable table={womenFinals} medals />
        </div>
      </div>
    </>
  )
}

const rounds = [
  { id: 'overall', label: 'Overall' },
  { id: 'q1', label: 'Q1' },
  { id: 'q2', label: 'Q2' },
]

function LeadQualifiersView({ round }: { round?: string }) {
  const active = rounds.find((r) => r.id === round)?.id ?? 'overall'
  const [men, women] = active === 'q1' ? [menQ1, womenQ1] : [menQ2, womenQ2]

  return (
    <>
      <ViewIntro title="Lead Qualifiers">
        Qualifiers had two rounds, Q1 and Q2. An athlete&apos;s overall score is their Q1 rank × Q2 rank,
        and the lowest score wins. Tied athletes average the places they cover, so two athletes tied for
        1st each get 1.5.
      </ViewIntro>

      <div className="inline-flex border border-slate-200 mb-6 md:mb-10">
        {rounds.map((r) => (
          <Link
            key={r.id}
            href={`?view=lead-qualifiers&round=${r.id}`}
            scroll={false}
            aria-current={r.id === active ? 'page' : undefined}
            className={cn(
              'px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-colors whitespace-nowrap',
              r.id === active ? 'bg-usa-navy text-white' : 'text-slate-500 hover:text-usa-red'
            )}
          >
            {r.label}
          </Link>
        ))}
      </div>

      {active === 'overall' ? (
        <>
          <CategoryHeading title="Men" />
          <LeadTable results={openMenLead} />

          <div className="mt-10 md:mt-14">
            <CategoryHeading title="Women" />
            <LeadTable results={openWomenLead} />
          </div>
        </>
      ) : (
        <>
          <CategoryHeading title="Men" />
          <RoundScoreTable table={men} />

          <div className="mt-10 md:mt-14">
            <CategoryHeading title="Women" />
            <RoundScoreTable table={women} />
          </div>
        </>
      )}
    </>
  )
}

function SpeedView() {
  return (
    <>
      <ViewIntro title="Speed">
        Each heat is two runs, and the heat time is the two runs added together. An athlete&apos;s final
        score is their fastest heat. A DNF on either run makes that heat a DNF. Times are in seconds.
      </ViewIntro>

      <CategoryHeading title="Men" />
      <div className="w-fit max-w-full">
        <Podium entries={speedPodium(openMenSpeed)} />
        <SpeedTable results={openMenSpeed} />
      </div>

      <div className="mt-10 md:mt-14">
        <CategoryHeading title="Women" />
        <div className="w-fit max-w-full">
          <Podium entries={speedPodium(openWomenSpeed)} />
          <SpeedTable results={openWomenSpeed} />
        </div>
      </div>
    </>
  )
}

function YouthView() {
  return (
    <>
      <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-6 md:mb-10">Youth</h2>

      <CategoryHeading title="Difficulty" />

      <SubLabel>Finals</SubLabel>
      <div className="w-fit max-w-full">
        <Podium entries={youthDifficultyFinals.map((r) => ({ rank: r.rank, name: r.name, detail: `TOP · ${r.timeLeft} left` }))} />
        <YouthFinalsTable />
      </div>
      <p className="text-slate-500 text-sm mt-3 max-w-3xl">
        Every finalist topped the route, so places are decided by time left on the clock.
      </p>

      <div className="mt-10">
        <SubLabel>Qualifiers</SubLabel>
        <p className="text-slate-600 leading-relaxed mb-5 max-w-3xl">
          Athletes are ranked on each of the three routes, and their rank points are the three route
          ranks multiplied together. The lowest total ranks highest. Tied athletes average the places
          they cover.
        </p>
        <YouthQualifiersTable />
      </div>

      <div className="mt-10 md:mt-14">
        <CategoryHeading title="Speed" />
        <div className="w-fit max-w-full">
          <Podium entries={youthSpeed.map((r) => ({ rank: r.rank, name: r.name, detail: `${fmt(r.best)} s` }))} />
          <BestOnlyTable results={youthSpeed} />
        </div>
      </div>
    </>
  )
}

// Each tab is its own view, selected with ?view=<id> so a view can be linked directly.
// `short` labels are used on phones so all four tabs fit without scrolling.
const views: {
  id: string
  label: string
  short: string
  View: (props: { round?: string }) => React.ReactNode
}[] = [
  { id: 'lead-finals', label: 'Lead Finals', short: 'Finals', View: LeadFinalsView },
  { id: 'lead-qualifiers', label: 'Lead Qualifiers', short: 'Quals', View: LeadQualifiersView },
  { id: 'speed', label: 'Speed', short: 'Speed', View: SpeedView },
  { id: 'youth', label: 'Youth', short: 'Youth', View: YouthView },
]

const defaultView = 'lead-finals'

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string; round?: string }>
}) {
  const { view, round } = await searchParams
  const active = views.find((v) => v.id === view) ?? views.find((v) => v.id === defaultView)!

  return (
    <>
      <SubpageHeader
        eyebrow="October 2–4, 2026"
        title="Results"
        description="Official results from the 2026 team tryouts. Categories are posted here as they're finalized."
        compact
      />
      <TryoutsSubNav />

      <section className="py-8 md:py-16 bg-white">
        <div className="section-container max-w-5xl">
          <div className="overflow-x-auto border-b border-slate-200 mb-8 md:mb-12">
            <div role="tablist" className="flex gap-1 whitespace-nowrap">
              {views.map((v) => {
                const selected = v.id === active.id
                return (
                  <Link
                    key={v.id}
                    href={`?view=${v.id}`}
                    scroll={false}
                    role="tab"
                    aria-selected={selected}
                    className={cn(
                      '-mb-px border-b-2 px-3 md:px-4 py-3 text-sm font-semibold uppercase tracking-wider md:tracking-widest transition-colors',
                      selected
                        ? 'border-usa-red text-usa-navy'
                        : 'border-transparent text-slate-500 hover:text-usa-red'
                    )}
                  >
                    <span className="md:hidden">{v.short}</span>
                    <span className="hidden md:inline">{v.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div role="tabpanel">
            <active.View round={round} />
          </div>
        </div>
      </section>
    </>
  )
}
