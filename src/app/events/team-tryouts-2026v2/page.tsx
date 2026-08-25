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
  Info,
  HelpCircle,
} from 'lucide-react'
import TryoutsSubNav from './TryoutsSubNav'

export const metadata: Metadata = {
  title: '2026 USA Ice Climbing Team Tryouts & Selection',
  description:
    'Lead, Speed, and Youth Team tryouts for the USA Ice Climbing national team. October 2–4, 2026 at Longmont Climbing Collective, Longmont, CO.',
}

const quickLinks = [
  {
    label: 'Location',
    icon: MapPin,
    href: 'https://climbingcollective.co/longmont',
    external: true,
  },
  { label: 'Event Schedule', icon: CalendarDays, href: '/events/team-tryouts-2026v2/schedule' },
  { label: 'Lead Format', icon: Route, href: '/events/team-tryouts-2026v2/lead' },
  { label: 'Speed Format', icon: Zap, href: '/events/team-tryouts-2026v2/speed' },
  { label: 'Youth Format', icon: Users, href: '/events/team-tryouts-2026v2/youth' },
  { label: 'Team Selection', icon: Award, href: '/events/team-tryouts-2026v2/selection' },
  { label: 'Route Preview', icon: Video, href: '/events/team-tryouts-2026v2/route-preview' },
  { label: 'Technical Meeting Notes', icon: FileText, href: '/events/team-tryouts-2026v2/technical-meeting-notes' },
  { label: 'FAQ', icon: HelpCircle, href: '/events/team-tryouts-2026v2/faq' },
]

const overviewFacts = [
  { label: 'Dates', value: 'Oct 2–4, 2026' },
  { label: 'Venue', value: 'Longmont Climbing Collective' },
  { label: 'Walls Used', value: 'Plywood Area + Ice Tower' },
  { label: 'Disciplines', value: 'Lead · Speed · Youth' },
]

export default function TeamTryoutsHubPage() {
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
        <div className="absolute -right-24 top-0 bottom-0 w-64 bg-usa-red/10 -skew-x-12 hidden lg:block" />

        <div className="relative section-container text-white">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-base uppercase tracking-widest text-white/50 hover:text-white/80 transition-colors mb-6"
          >
            ← Events
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1.5 text-base font-semibold uppercase tracking-widest bg-usa-red/20 text-usa-red-light border border-usa-red/40">
              Team Selection
            </span>
            <span className="px-3 py-1.5 text-base font-semibold uppercase tracking-widest bg-white/10 text-white/80 border border-white/20">
              Draft Schedule — Subject to Change
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5 max-w-3xl">
            2026 USA Ice Climbing Team Tryouts &amp; Selection
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-base text-white/80">
            <span>October 2–4, 2026</span>
            <span className="text-white/25">·</span>
            <span>Longmont Climbing Collective</span>
            <span className="text-white/25">·</span>
            <span>Lead, Speed &amp; Youth</span>
          </div>
        </div>
      </section>

      <TryoutsSubNav />

      {/* ── Overview ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="section-container">
          <div className="border-l-2 border-usa-red pl-4 mb-8">
            <p className="text-base font-semibold uppercase tracking-widest text-usa-red mb-1">Overview</p>
            <h2 className="font-display text-3xl text-usa-navy">What&apos;s Happening</h2>
          </div>

          <p className="text-slate-600 leading-relaxed max-w-3xl mb-6">
            Athletes will compete across three days at the Longmont Climbing Collective to earn a
            spot on the USA Ice Climbing national team. Lead and Speed tryouts run on the outdoor
            plywood area, while Speed and the Youth Team Event take place on the ice climbing
            tower. The weekend closes with the Team Selection Ceremony on Sunday.
          </p>

          <div className="flex items-start gap-3 bg-usa-navy/5 border border-usa-navy/10 px-5 py-4 mb-8 max-w-3xl">
            <Info className="w-5 h-5 text-usa-navy shrink-0 mt-0.5" strokeWidth={1.75} />
            <p className="text-base text-usa-navy leading-relaxed">
              <strong>Open to everyone.</strong> You don&apos;t need to be applying for a spot on
              the USA World Cup team to take part — all climbers are welcome to register and
              compete.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {overviewFacts.map(({ label, value }) => (
              <div key={label} className="border border-slate-200 px-5 py-4">
                <p className="text-base font-semibold uppercase tracking-widest text-slate-500 mb-1">{label}</p>
                <p className="font-display text-xl text-usa-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="section-container py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {quickLinks.map((item) => {
              const Icon = item.icon

              const content = (
                <>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-usa-navy/10 to-usa-navy/[0.03] flex items-center justify-center mb-4 group-hover:from-usa-red/15 group-hover:to-usa-red/5 transition-colors">
                    <Icon className="w-7 h-7 text-usa-navy group-hover:text-usa-red transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-base text-usa-navy leading-tight">{item.label}</p>
                  {item.external && (
                    <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-slate-400 group-hover:text-usa-red transition-colors" />
                  )}
                </>
              )

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center text-center border border-slate-200 bg-white px-5 py-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-usa-red/30 transition-all duration-200"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative flex flex-col items-center text-center border border-slate-200 bg-white px-5 py-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-usa-red/30 transition-all duration-200"
                >
                  {content}
                </Link>
              )
            })}
          </div>

          {/* Register CTA */}
          <Link
            href="/events/team-tryouts-2026v2/register"
            className="group flex flex-col sm:flex-row items-center justify-between gap-4 bg-usa-navy px-6 py-6 sm:px-8 sm:py-7 text-white hover:bg-usa-navy/90 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Ticket className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-display text-2xl text-white leading-tight">Register for Tryouts</p>
                <p className="text-base text-white/70">Registration opens soon — check back for the link</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-base font-semibold uppercase tracking-widest text-white/90 group-hover:text-white transition-colors shrink-0">
              Learn More <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-usa-red">
        <div className="section-container text-white text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-3">Questions?</h2>
          <p className="text-white/85 max-w-sm mx-auto mb-8 text-base leading-relaxed">
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
