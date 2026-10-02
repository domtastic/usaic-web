import type { Metadata } from 'next'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Technical Meeting Notes — 2026 Team Tryouts',
  description: 'Check-in, weather, schedule, and climbing order for the 2026 USA Ice Climbing team tryouts.',
}

const fridaySchedule = [
  { label: 'Cohort 1', meeting: '9:30 AM', climbing: '10:00 AM' },
  { label: 'Cohort 2', meeting: '1:30 PM', climbing: '2:00 PM' },
  { label: 'Speed', meeting: null, climbing: '2:00 PM', note: 'Running at the same time as Cohort 2' },
]

const cohort1 = [
  'Marc Unnasch',
  'Mathias Olsen',
  'Zoe Schiffer',
  'Alexander Rausch',
  'Christian Junkar',
  'Katarina Black',
  'Dominic Unnasch',
  'Dominic Gonzalez-Padron',
  'Aria Frederickson',
  'Caleb Augustine',
  'David Sobek',
  'Matthew Durham',
  'Conner Bailey',
  'Molly Denholm',
  'Alex Mankouski',
  'Kelsey Beyerly',
  'Angela Limbach',
  'Emma Dhimitri',
  'Matthew Lankford',
  'Josh Dziubczynski',
  'Nina Mankouski',
]

const cohort2 = [
  'Catalina Shirley',
  'Daniel Plinska',
  'Adam Bowen',
  'Elias Ellis',
  'Kevin Satterfield',
  'Matthew Fox',
  'Anna LaSusa',
  'Wilson Whitley',
  'Daniel Carper',
  'Michael Silger',
  'Gregory Love',
  'Carter Schmidt',
  'Jessica Perez',
  'Cambyr Sullivan',
  'Mihael Ashminov',
  'Jacob Gaylord',
  'Rio Buenrostro',
]

export default function TechnicalMeetingNotesPage() {
  return (
    <>
      <SubpageHeader
        eyebrow="Friday, October 2"
        title="Technical Meeting Notes"
        description="Check-in, weather, schedule, and climbing order for Friday's adult lead and speed tryouts."
      />
      <TryoutsSubNav />

      <section className="py-14 md:py-20 bg-white">
        <div className="section-container max-w-3xl">
          {/* Check-In */}
          <div className="border-l-2 border-usa-red pl-4 mb-6">
            <h2 className="font-display text-2xl text-usa-navy">Check-In</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-5">
            When you arrive, please check in at the front desk and sign the gym waiver. You must
            complete the waiver before you can climb.
          </p>
          <p className="text-slate-600 leading-relaxed mb-14">
            Each cohort begins with a mandatory athlete meeting. Please arrive at the meeting
            already checked in, warmed up, and ready to climb with all of your gear. Climbing
            starts immediately after the meeting, and we will begin promptly. We recommend
            arriving at least one hour before your meeting time.
          </p>

          {/* Weather & What to Bring */}
          <div className="border-l-2 border-usa-red pl-4 mb-6">
            <h2 className="font-display text-2xl text-usa-navy">Weather &amp; What to Bring</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-14">
            Please plan accordingly for the weather. It&apos;s currently forecast to be hot and
            sunny, and the wall is very reflective and bright. That said, this is Colorado, and
            conditions can change quickly, so come prepared for anything. We also recommend
            bringing a chair, since seating will be limited. Food will not be provided this year,
            so please plan accordingly.
          </p>

          {/* Schedule */}
          <div className="border-l-2 border-usa-red pl-4 mb-6">
            <h2 className="font-display text-2xl text-usa-navy">Schedule — Friday, October 2</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mb-14">
            {fridaySchedule.map((s) => (
              <div key={s.label} className="border border-slate-200 px-5 py-4">
                <p className="text-base font-semibold uppercase tracking-widest text-slate-500 mb-2">
                  {s.label}
                </p>
                {s.meeting && (
                  <p className="text-base text-slate-600 mb-1">
                    Athlete meeting: <span className="text-usa-navy font-semibold">{s.meeting}</span>
                  </p>
                )}
                <p className="text-base text-slate-600">
                  Climbing begins: <span className="text-usa-navy font-semibold">{s.climbing}</span>
                </p>
                {s.note && <p className="text-base text-slate-400 mt-2">{s.note}</p>}
              </div>
            ))}
          </div>

          {/* Climbing Order */}
          <div className="border-l-2 border-usa-red pl-4 mb-3">
            <h2 className="font-display text-2xl text-usa-navy">Cohorts &amp; Tentative Climbing Order</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-8">
            Climbing order is tentative and may change on the day of the event.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="font-display text-xl text-usa-navy mb-3">Cohort 1</p>
              <ol className="list-decimal list-inside space-y-1.5 text-base text-slate-600">
                {cohort1.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ol>
            </div>
            <div>
              <p className="font-display text-xl text-usa-navy mb-3">Cohort 2</p>
              <ol className="list-decimal list-inside space-y-1.5 text-base text-slate-600">
                {cohort2.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ol>
            </div>
          </div>

          <p className="text-slate-500 text-sm mt-14">
            Questions? Email{' '}
            <a href="mailto:info@usaiceclimbing.org" className="text-usa-red font-semibold hover:underline">
              info@usaiceclimbing.org
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
