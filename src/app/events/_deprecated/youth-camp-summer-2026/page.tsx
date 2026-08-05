import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Youth Ice Climbing Training Camp: Summer 2026',
  description:
    'A weekend training camp in Durango & Ouray, CO for youth athletes aspiring to join the USA Youth Ice Climbing Team. July 24–26, 2026.',
}

const details = [
  { label: 'Host',         value: 'Jessica Reed'       },
  { label: 'Coach',        value: 'Marcus Garcia'       },
  { label: 'Dates',        value: 'July 24–26, 2026'    },
  { label: 'Location',     value: 'Durango & Ouray, CO' },
  { label: 'Cost',         value: '$425'                },
  { label: 'Spots',        value: '3 of 10 remaining'   },
  { label: 'Waiver',       value: 'Completed onsite'    },
]

const required = [
  'Climbing harness',
  'Climbing shoes',
  'Helmet',
  'Gloves — golf or baseball, both hands',
  'Long pants',
  'Water bottle',
  'Sneakers',
  'Sunscreen',
]

const suggested = [
  'Competition ice axes / tools',
  'Comp boots',
]

const schedule = [
  {
    day: 'Day 1',
    date: 'Friday, July 24, 2026',
    sessions: [
      { time: '2:00 – 2:30 PM',   activity: 'Meet and Greet',                         location: 'Home Base · Durango, CO' },
      { time: '2:30 – 2:45 PM',   activity: 'Goal Setting',                            location: ''                        },
      { time: '2:45 – 3:00 PM',   activity: "Equipment Dos and Don'ts",               location: ''                        },
      { time: '3:00 – 4:30 PM',   activity: 'Fitness Test, Footwork & Tools on Holds', location: ''                        },
      { time: '4:30 – 5:00 PM',   activity: 'Introduction to Training Plans',          location: ''                        },
      { time: '5:00 – 5:30 PM',   activity: 'Reflections and Prep for Day 2',          location: ''                        },
    ],
  },
  {
    day: 'Day 2',
    date: 'Saturday, July 25, 2026',
    sessions: [
      { time: '7:30 – 8:00 AM',    activity: 'Meet-Up and Gear Check',           location: 'Home Base · Durango, CO'     },
      { time: '8:00 – 9:00 AM',    activity: 'Travel and Hike to Climbing Site', location: ''                            },
      { time: '9:00 AM – 2:00 PM', activity: 'Outdoor Dry Tooling',              location: 'Hall of Justice · Ouray, CO' },
      { time: '2:00 – 5:00 PM',    activity: 'Comp Training Session',            location: 'TBD'                         },
    ],
  },
  {
    day: 'Day 3',
    date: 'Sunday, July 26, 2026',
    sessions: [
      { time: '7:30 – 8:00 AM',     activity: 'Meet-Up and Gear Check',               location: 'Home Base · Durango, CO' },
      { time: '8:00 – 9:00 AM',     activity: 'Warm Up',                              location: ''                        },
      { time: '10:00 – 11:00 AM',   activity: 'Training: Endurance and Conditioning', location: ''                        },
      { time: '11:00 AM – 3:00 PM', activity: 'Outdoor Dry Tooling',                  location: 'Cascade Canyon'          },
      { time: '3:00 – 3:30 PM',     activity: 'Training Plan for Team Trials',        location: ''                        },
    ],
  },
]

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="border-l-2 border-usa-red pl-4 mb-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-usa-red mb-1">{label}</p>
      <h2 className="font-display text-3xl text-usa-navy">{title}</h2>
    </div>
  )
}

export default function YouthCampPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-usa-navy py-20 md:py-32 overflow-hidden">
        <Image
          src="/YouthChampionship.jpg"
          alt="Youth athlete competing on ice climbing wall"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient: lighter at top so the photo shows, heavy at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/85" />
        <div className="relative section-container text-white">

          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors mb-6"
          >
            ← Events
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Clinic
            </span>
            <span className="text-xs text-white/50 uppercase tracking-widest">Not USAIC sanctioned</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5 max-w-3xl">
            Youth Ice Climbing Training Camp: Summer 2026
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-sm text-white/80">
            <span>July 24–26, 2026</span>
            <span className="text-white/20">·</span>
            <span>Durango &amp; Ouray, CO</span>
            <span className="text-white/20">·</span>
            <span>$425</span>
            <span className="text-white/20">·</span>
            <span className="text-red-400 font-semibold">3 spots remaining</span>
          </div>

        </div>
      </section>

      {/* ── About ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="section-container">
          <SectionHeader label="About" title="About the Camp" />
          <div className="max-w-3xl space-y-4 text-slate-600 leading-relaxed">
            <p>
              Join us for an exciting training camp weekend in Durango starting{' '}
              <strong className="text-usa-navy">Friday, July 24 at 2:00 PM</strong>, with activities
              running all day Saturday and Sunday. Athletes are welcome to arrive as early as Thursday
              evening or Friday morning for a bonus "Durango day" — river tubing, lake time, and more.
            </p>
            <p>
              The camp's home base is at Jessica Reed's home — Jessica is a parent of one of the USA Youth Ice Climbing Team athletes. Accommodations
              include shared rooms, couches, and floor space — a fun, team-oriented setup. Athletes and
              families may also choose nearby accommodations.
            </p>
            <p>
              Meals (breakfast, lunch, and snacks) are included, and we'll head out for casual group
              dinners. Airport transportation can be arranged. Parents are welcome to join in or explore
              everything Durango has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Eligibility ── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <SectionHeader label="Eligibility" title="Who Is This Camp For?" />

          <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
            This camp is designed for youth athletes who are currently part of, or aspiring to join, the{' '}
            <strong className="text-usa-navy">USA Youth Ice Climbing Team</strong>. Training focuses on
            preparation for local competitions and the UIAA Youth Ice Climbing World Championships,
            tentatively scheduled for January/February 2027 in Champagny-en-Vanoise, France.
          </p>

          <div className="overflow-x-auto">
            <table className="text-sm border-collapse mb-2">
              <thead>
                <tr>
                  <th className="bg-usa-navy text-white px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider whitespace-nowrap">Season</th>
                  <th className="bg-usa-navy text-white px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider" colSpan={2}>Youth B (U16)</th>
                  <th className="bg-usa-navy text-white px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider" colSpan={2}>Youth A (U18)</th>
                  <th className="bg-usa-navy text-white px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider" colSpan={2}>Junior (U20)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border border-slate-200">
                  <td className="px-4 py-3 font-semibold text-usa-navy whitespace-nowrap">2026/27</td>
                  {['2013','2012','2011','2010','2009','2008'].map((year) => (
                    <td key={year} className="px-4 py-3 text-center text-slate-600 tabular-nums">{year}</td>
                  ))}
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-400">Eligibility based on athlete birth year.</p>
          </div>
        </div>
      </section>

      {/* ── Camp Details ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="section-container">
          <SectionHeader label="Logistics" title="Camp Details" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {details.map(({ label, value }) => (
              <div key={label} className="border border-slate-200 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">{label}</p>
                <p className="font-display text-xl text-usa-navy">{value}</p>
              </div>
            ))}
            <div className="border border-slate-200 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Contact</p>
              <p className="font-display text-xl text-usa-navy break-all">mountainjreed@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Bring ── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <SectionHeader label="Preparation" title="What to Bring" />
          <p className="text-slate-500 text-sm mb-6">A full packing list will be provided prior to camp.</p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-2xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-usa-navy mb-3">Required</p>
              <ul className="space-y-2">
                {required.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-usa-red shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-usa-navy mb-3">Suggested</p>
              <ul className="space-y-2">
                {suggested.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="section-container">
          <SectionHeader label="Tentative" title="Schedule" />

          <div className="space-y-10">
            {schedule.map((day, di) => (
              <div key={di}>
                <div className="mb-4 pb-3 border-b-2 border-usa-navy">
                  <p className="font-display text-xl text-usa-navy">{day.day}</p>
                  <p className="text-sm text-slate-400">{day.date}</p>
                </div>

                <table className="w-full text-sm">
                  <tbody>
                    {day.sessions.map((s, si) => (
                      <tr key={si} className="border-b border-slate-100">
                        <td className="py-2.5 pr-8 text-slate-400 text-xs whitespace-nowrap align-top w-44">{s.time}</td>
                        <td className="py-2.5 pr-6 text-usa-navy font-medium align-top">{s.activity}</td>
                        <td className="py-2.5 text-slate-400 text-xs align-top">{s.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-usa-red">
        <div className="section-container text-white text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-3">Interested?</h2>
          <p className="text-white/75 max-w-sm mx-auto mb-8 text-sm leading-relaxed">
            Email Jessica Reed to express interest or ask questions. Only 3 spots remaining.
          </p>
          <p className="font-display text-2xl text-white tracking-wide">
            mountainjreed@gmail.com
          </p>
          <p className="mt-8 text-xs text-white/35 max-w-sm mx-auto">
            This is not a USA Ice Climbing sanctioned or sponsored event.
          </p>
        </div>
      </section>
    </>
  )
}
