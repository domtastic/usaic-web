import type { Metadata } from 'next'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Full Schedule — 2026 Team Tryouts',
  description: 'Day-by-day schedule for the 2026 USA Ice Climbing team tryouts, October 2–4 at Longmont Climbing Collective.',
}

const dailySchedule = [
  {
    day: 'Friday',
    date: 'October 2',
    rows: [
      { event: 'Adult Lead Tryouts — Day 1', time: '7:30 AM – 7:30 PM', location: 'Plywood kick wall' },
      { event: 'Speed Tryouts', time: '12:30 – 3:30 PM', location: 'Ice climbing tower' },
    ],
  },
  {
    day: 'Saturday',
    date: 'October 3',
    rows: [
      { event: 'Adult Lead Tryouts — Day 2', time: '7:30 AM – 7:30 PM', location: 'Plywood kick wall' },
      { event: 'Youth Team Event — Day 1', time: 'TBD', location: 'Ice climbing tower' },
    ],
  },
  {
    day: 'Sunday',
    date: 'October 4',
    rows: [
      { event: 'Adult Lead Finals', time: '8:00 AM – 3:00 PM', location: 'Plywood kick wall' },
      { event: 'Youth Team Event — Day 2', time: 'TBD', location: 'Ice climbing tower' },
      { event: 'Team Selection Ceremony', time: 'Before Picks & Pitons Finals', location: 'TBD' },
    ],
  },
]

export default function SchedulePage() {
  return (
    <>
      <SubpageHeader eyebrow="Weekend At A Glance" title="Full Schedule" />
      <TryoutsSubNav />

      <section className="py-12 md:py-16 bg-white">
        <div className="section-container">
          <div className="space-y-10">
            {dailySchedule.map((day) => (
              <div key={day.day}>
                <div className="mb-4 pb-3 border-b-2 border-usa-navy flex items-baseline gap-3">
                  <p className="font-display text-xl text-usa-navy">{day.day}</p>
                  <p className="text-base text-slate-400">{day.date}</p>
                </div>

                <table className="w-full text-base">
                  <tbody>
                    {day.rows.map((r, ri) => (
                      <tr key={ri} className="border-b border-slate-200 last:border-0">
                        <td className="py-2.5 pr-6 text-usa-navy font-medium align-top">{r.event}</td>
                        <td className="py-2.5 pr-6 text-slate-500 text-base tabular-nums align-top md:w-56">{r.time}</td>
                        <td className="py-2.5 text-slate-400 text-base align-top">{r.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <p className="text-base text-slate-400 mt-8 max-w-2xl">
            This is an early draft of the tryouts schedule and details — including times and
            locations marked TBD — are expected to change before the event. Check back for
            updates.
          </p>
        </div>
      </section>
    </>
  )
}
