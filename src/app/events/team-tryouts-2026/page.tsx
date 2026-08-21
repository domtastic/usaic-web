import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  CalendarDays,
  Route,
  Zap,
  Users,
  Award,
  Video,
  FileText,
  Ticket,
  ArrowUpRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '2026 USA Ice Climbing Team Tryouts & Selection',
  description:
    'Lead, Speed, and Youth Team tryouts for the USA Ice Climbing national team. October 2–4, 2026 at Longmont Climbing Collective, Longmont, CO.',
}

const quickLinks = [
  {
    label: 'Location',
    desc: 'Longmont Climbing Collective',
    icon: MapPin,
    href: 'https://climbingcollective.co/longmont',
    external: true,
  },
  { label: 'Event Schedule', desc: 'Full weekend, day by day', icon: CalendarDays, href: '#schedule' },
  { label: 'Lead Format', desc: 'Heats & judging criteria', icon: Route, href: '#lead' },
  { label: 'Speed Format', desc: 'Format & timing', icon: Zap, href: '#speed' },
  { label: 'Youth Format', desc: 'Schedule & details', icon: Users, href: '#youth' },
  { label: 'Team Selection', desc: 'How the team is chosen', icon: Award, href: '#selection' },
  { label: 'Route Preview', desc: 'Coming soon', icon: Video, href: null },
  { label: 'Technical Meeting Notes', desc: 'Coming soon', icon: FileText, href: null },
]

const overviewFacts = [
  { label: 'Dates', value: 'Oct 2–4, 2026' },
  { label: 'Venue', value: 'Longmont Climbing Collective' },
  { label: 'Walls Used', value: 'Plywood Area + Ice Tower' },
  { label: 'Disciplines', value: 'Lead · Speed · Youth' },
]

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

function SectionHeader({ label, title, id }: { label: string; title: string; id?: string }) {
  return (
    <div id={id} className="border-l-2 border-usa-red pl-4 mb-8 scroll-mt-32">
      <p className="text-xs font-semibold uppercase tracking-widest text-usa-red mb-1">{label}</p>
      <h2 className="font-display text-3xl text-usa-navy">{title}</h2>
    </div>
  )
}

export default function TeamTryoutsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-usa-navy py-24 md:py-36 overflow-hidden">
        <Image
          src="/LeadClimbingPhoto.jpg"
          alt="Athlete competing on the lead wall during a USA Ice Climbing event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-usa-navy/75 to-usa-navy/95" />
        {/* diagonal accent stripe */}
        <div className="absolute -right-24 top-0 bottom-0 w-64 bg-usa-red/10 -skew-x-12 hidden lg:block" />

        <div className="relative section-container text-white">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors mb-6"
          >
            ← Events
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-widest bg-usa-red/20 text-usa-red-light border border-usa-red/40">
              Team Selection
            </span>
            <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-widest bg-white/10 text-white/60 border border-white/15">
              Draft Schedule — Subject to Change
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5 max-w-3xl">
            2026 USA Ice Climbing Team Tryouts &amp; Selection
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
            <span>October 2–4, 2026</span>
            <span className="text-white/20">·</span>
            <span>Longmont Climbing Collective</span>
            <span className="text-white/20">·</span>
            <span>Lead, Speed &amp; Youth</span>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="bg-white border-b border-slate-200">
        <div className="section-container py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {quickLinks.map((item) => {
              const Icon = item.icon
              const disabled = !item.href

              const content = (
                <>
                  <div className="w-11 h-11 rounded-full bg-usa-navy/5 flex items-center justify-center mb-4 group-hover:bg-usa-red/10 transition-colors">
                    <Icon className="w-5 h-5 text-usa-navy group-hover:text-usa-red transition-colors" strokeWidth={1.75} />
                  </div>
                  <p className="font-display text-base text-usa-navy leading-tight mb-1">{item.label}</p>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                  {item.external && (
                    <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-slate-300 group-hover:text-usa-red transition-colors" />
                  )}
                </>
              )

              if (disabled) {
                return (
                  <div
                    key={item.label}
                    className="relative border border-slate-200 px-5 py-5 opacity-50 cursor-default"
                  >
                    {content}
                  </div>
                )
              }

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative border border-slate-200 px-5 py-5 hover:border-usa-red/40 hover:shadow-sm transition-all"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href!}
                  className="group relative border border-slate-200 px-5 py-5 hover:border-usa-red/40 hover:shadow-sm transition-all"
                >
                  {content}
                </a>
              )
            })}
          </div>

          {/* Register CTA */}
          <a
            href="/contact"
            className="group flex flex-col sm:flex-row items-center justify-between gap-4 bg-usa-navy px-6 py-6 sm:px-8 sm:py-7 text-white hover:bg-usa-navy/90 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Ticket className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-display text-2xl text-white leading-tight">Register for Tryouts</p>
                <p className="text-sm text-white/60">Registration link and payment options coming soon</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors shrink-0">
              Get Notified <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="section-container">
          <SectionHeader id="overview" label="Overview" title="What's Happening" />

          <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
            Athletes will compete across three days at the Longmont Climbing Collective to earn a
            spot on the USA Ice Climbing national team. Lead and Speed tryouts run on the outdoor
            plywood area, while Speed and the Youth Team Event take place on the ice climbing
            tower. The weekend closes with the Team Selection Ceremony on Sunday.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {overviewFacts.map(({ label, value }) => (
              <div key={label} className="border border-slate-200 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">{label}</p>
                <p className="font-display text-xl text-usa-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Schedule ── */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <SectionHeader id="schedule" label="Weekend At A Glance" title="Full Schedule" />

          <div className="space-y-10">
            {dailySchedule.map((day) => (
              <div key={day.day}>
                <div className="mb-4 pb-3 border-b-2 border-usa-navy flex items-baseline gap-3">
                  <p className="font-display text-xl text-usa-navy">{day.day}</p>
                  <p className="text-sm text-slate-400">{day.date}</p>
                </div>

                <table className="w-full text-sm">
                  <tbody>
                    {day.rows.map((r, ri) => (
                      <tr key={ri} className="border-b border-slate-200 last:border-0">
                        <td className="py-2.5 pr-6 text-usa-navy font-medium align-top">{r.event}</td>
                        <td className="py-2.5 pr-6 text-slate-500 text-xs tabular-nums whitespace-nowrap align-top w-56">{r.time}</td>
                        <td className="py-2.5 text-slate-400 text-xs align-top">{r.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-8 max-w-2xl">
            This is an early draft of the tryouts schedule and details — including times and
            locations marked TBD — are expected to change before the event. Check back for
            updates.
          </p>
        </div>
      </section>

      {/* ── Lead Tryouts ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <SectionHeader id="lead" label="Adult Lead" title="Lead Tryouts Format" />

          <p className="text-slate-600 leading-relaxed max-w-3xl mb-10">
            Athletes are broken into heats of up to 20 to make scheduling easier and give
            everyone the rest they need — and to give judges more time to assess each athlete
            individually. Each heat includes a built-in one-hour lunch break.
          </p>

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

      {/* ── Speed Tryouts ── */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="section-container">
          <SectionHeader id="speed" label="Adult Speed" title="Speed Tryouts Format" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Speed is self-governed with a few volunteers on hand. Athletes will be given a
                number of attempts to post their best time — exact format is still TBD.
              </p>
              <p>
                Athletes competing in both Lead and Speed will run Lead during Heat 1 and Speed
                during Heat 2, so the two disciplines don&apos;t conflict.
              </p>
              <p>Best attempt (or the average of the best few) will be taken for scoring.</p>
            </div>
            <div className="border border-slate-200 bg-white px-5 py-4 h-fit">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">When</p>
              <p className="font-display text-lg text-usa-navy mb-4">Friday, 12:30 – 3:30 PM</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Where</p>
              <p className="font-display text-lg text-usa-navy mb-4">Ice climbing tower</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Duration</p>
              <p className="font-display text-lg text-usa-navy">~3 hrs, depending on registrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Youth Team Event ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="section-container">
          <SectionHeader id="youth" label="Youth" title="Youth Team Event" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>
                The Youth Team Event is built around experience and togetherness — a chance for
                youth athletes to build skills and connect with one another on the ice climbing
                tower.
              </p>
              <p>Full schedule and format are still being finalized.</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 px-5 py-4 h-fit">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">When</p>
              <p className="font-display text-lg text-usa-navy mb-4">Saturday &amp; Sunday — time TBD</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Where</p>
              <p className="font-display text-lg text-usa-navy">Ice climbing tower</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Selection Ceremony ── */}
      <section id="selection" className="py-16 md:py-24 bg-usa-navy scroll-mt-32">
        <div className="section-container text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-usa-red-light mb-3">Sunday</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Team Selection Ceremony</h2>
          <p className="text-white/70 max-w-lg mx-auto leading-relaxed">
            The 2026 USA Ice Climbing team will be announced Sunday, right before the Picks and
            Pitons Finals. Location TBD.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-usa-red">
        <div className="section-container text-white text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-3">Questions?</h2>
          <p className="text-white/75 max-w-sm mx-auto mb-8 text-sm leading-relaxed">
            This schedule is a first draft and will continue to change as tryouts approach. Reach
            out with any questions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-usa-red font-semibold rounded-lg transition-colors hover:bg-white/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
