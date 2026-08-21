import type { Metadata } from 'next'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Lead Tryouts Format — 2026 Team Tryouts',
  description: 'Heat structure and day-by-day judging format for the 2026 USA Ice Climbing adult lead tryouts.',
}

const heats = [
  { n: '01', window: '8:30 – 11:30 AM' },
  { n: '02', window: '12:30 – 3:30 PM' },
  { n: '03', window: '4:00 – 7:00 PM' },
]

const leadDays = [
  {
    tag: 'Day 1 · Friday',
    title: 'Familiar Terrain',
    goal: 'Assess athletes on their best effort, familiar terrain.',
    points: [
      '2 routes on top rope, progressively difficult',
      'Marcus and Tyler each judge one route the whole day',
      '2 timed laps per athlete — 2 minute limit each',
      'Beta video mandatory',
      'Best attempt counts; progress is noted',
      'Scored on UIAA ranking per climb',
    ],
    time: '~2 hr 40 min per cohort',
  },
  {
    tag: 'Day 2 · Saturday',
    title: 'Qualifier Replica',
    goal: 'Assess athletes on a replica of the UIAA qualifier format.',
    points: [
      '2 routes on lead, using roof boxes',
      'Marcus and Tyler each judge one route the whole day',
      '1 attempt — 4 minute limit',
      'Beta video mandatory',
      'Scored on UIAA ranking per climb',
    ],
    time: '~2 hr 40 min per cohort',
  },
  {
    tag: 'Day 3 · Sunday',
    title: 'Finals',
    goal: 'Assess athletes on onsight ability and collaboration.',
    points: [
      'Top athletes advance to 1 route using roof boxes',
      'Field size set by natural gaps in prior days’ results',
      '2 attempts — 4 minute limit each',
      '1st attempt: onsight · 2nd attempt: collaboration and correction',
      'Consistent power, high-percentage moves',
      'Scored on UIAA ranking per climb',
    ],
    time: null,
  },
]

export default function LeadFormatPage() {
  return (
    <>
      <SubpageHeader
        eyebrow="Adult Lead"
        title="Lead Tryouts Format"
        description="Athletes are broken into heats of up to 20 to make scheduling easier and give everyone the rest they need — and to give judges more time to assess each athlete individually. Each heat includes a built-in one-hour lunch break."
      />
      <TryoutsSubNav />

      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-3 mb-14 max-w-2xl">
            {heats.map((h) => (
              <div key={h.n} className="relative border border-slate-200 px-5 py-4 pt-8">
                <span className="absolute top-0 left-0 bg-usa-navy text-white font-display text-sm px-2.5 py-1 leading-none">
                  {h.n}
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Heat</p>
                <p className="font-display text-lg text-usa-navy tabular-nums">{h.window}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {leadDays.map((d) => (
              <div key={d.tag} className="bg-white p-6 flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-widest text-usa-red mb-2">{d.tag}</p>
                <h3 className="font-display text-2xl text-usa-navy mb-2">{d.title}</h3>
                <p className="text-sm text-slate-500 mb-5">{d.goal}</p>
                <ul className="space-y-2 mb-5 flex-grow">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-600 text-sm">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-usa-red shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                {d.time && (
                  <p className="text-xs text-slate-400 pt-4 border-t border-slate-100">{d.time}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
