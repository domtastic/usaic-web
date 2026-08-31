import type { Metadata } from 'next'
import Link from 'next/link'
import { FileSignature, Camera, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rules & Policies',
  description: 'USA Ice Climbing waivers, media consent, and code of conduct.',
}

const documents = [
  {
    icon: FileSignature,
    title: 'USAIC Waiver',
    description:
      'Our standard liability waiver, required for all athletes and participants before competing or attending USAIC events.',
  },
  {
    icon: Camera,
    title: 'Image Use Attestation',
    description:
      'Consent for photo, video, and voice use from USAIC events, including promotional and social media use.',
    href: '/about/rules-policies/event-media-waiver',
  },
  {
    icon: ShieldCheck,
    title: 'Code of Conduct',
    description:
      'Expectations for athletes, coaches, volunteers, and staff at USAIC events and within the broader community.',
  },
]

export default function RulesPoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Rules &amp; Policies
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Waivers, media consent, and conduct standards for USA Ice Climbing athletes,
            volunteers, and events.
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documents.map(({ icon: Icon, title, description, href }) => (
              <div key={title} className="border border-slate-200 bg-white p-6 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-usa-navy/5 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-usa-navy" strokeWidth={1.75} />
                </div>
                <h2 className="font-display text-xl text-usa-navy mb-2">{title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                  {description}
                </p>
                {href ? (
                  <Link
                    href={href}
                    className="text-usa-red font-semibold text-sm hover:underline self-start"
                  >
                    Read the full waiver →
                  </Link>
                ) : (
                  <span className="inline-flex items-center self-start px-2.5 py-1 text-xs font-semibold uppercase tracking-widest bg-usa-red/10 text-usa-red">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-sm text-center max-w-2xl mx-auto mt-10">
            The remaining documents are being finalized and will be posted here — check back
            before registering for an event.
          </p>
        </div>
      </section>
    </>
  )
}
