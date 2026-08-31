import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'The USA Ice Climbing Code of Conduct for directors, board members, coaches, athletes, and members.',
}

export default function CodeOfConductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Code of Conduct
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            USA Ice Climbing Members
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/about/rules-policies"
              className="text-usa-red font-semibold hover:underline mb-8 inline-block"
            >
              ← Rules &amp; Policies
            </Link>

            <div className="text-slate-700 leading-relaxed">
              <h2 className="font-display text-2xl text-usa-navy mb-3">
                General Code of Conduct for All Members
              </h2>
              <p className="mb-4">
                This constitutes the Code of Conduct (Code) as an agreement to USAIC&apos;s
                mission statement and the USAIC&apos;s core values for all USA Ice Climbing
                Members: directors, board members, coaches, athletes, and members. This Code has
                been established to provide a set of guiding principles for the USA Ice Climbing
                Members. This Code is intended to enhance and enable the overall experience of
                being a member of USAIC.
              </p>

              <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">USAIC Mission</h2>
              <p className="mb-4">
                USA Ice Climbing is committed to cultivate a thriving recreational and
                competitive ice climbing community where athletes can develop, belong, and
                pursue excellence by expanding opportunity, strengthening communities and
                stewarding places where we climb at every level of the sport.
              </p>

              <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">
                USAIC Core Values
              </h2>
              <p className="mb-4">
                Develop people. Build community. Expand opportunity. Pursue excellence. Protect
                the places that make ice climbing possible.
              </p>

              <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">A. General</h2>
              <p className="mb-4">
                I agree with and abide by USAIC&apos;s Mission and Core Values.
              </p>
              <p className="mb-4">
                Members will act as US ambassadors to the domestic and international climbing
                communities and are expected to champion the mission, values, and support of the
                sport and USAIC. Athletes are expected to obey the rules and regulations of the
                host country in which they are climbing.
              </p>

              <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">
                B. Applicability of Code
              </h2>
              <p className="mb-4">
                This Code applies to all members of USA Ice Climbing. Members should become
                familiar with the rules and standards of this Code.
              </p>

              <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">
                C. Members Agree To
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Act in a sportsmanlike manner consistent with the spirit of fair play and
                  responsible conduct. Sportsmanlike conduct is defined as, but not limited to:
                  respect for competition officials, coaches, staff and the public, respect for
                  facilities, privileges, and operating procedures, the use of courtesy and good
                  manners, acting responsibly and maturely, refraining from the use of profane or
                  abusive language, and abstinence from illegal or immoderate use of alcohol and
                  use of illegal or banned drugs
                </li>
                <li>
                  Respect members of USAIC, other organizations, spectators and officials, and
                  engage in no form of discriminatory behavior or verbal, physical or sexual
                  harassment or abuse
                </li>
                <li>
                  Abstain from conduct that is criminal under any applicable laws, including, but
                  not limited to laws governing the possession and use of drugs and alcohol, and
                  providing of drugs to any person and of alcohol to minors
                </li>
                <li>
                  Refrain from conduct that detracts from other team members&apos; ability to
                  attain peak performances
                </li>
                <li>Respect the property of others, whether personal or public</li>
                <li>
                  Understand that parents or legal guardians of team members under the age of 18
                  will be notified of all written reports of counseling or misconduct
                </li>
                <li>
                  Understand that any act, conduct, or personal appearance that violates the
                  spirit and intent of this Code of Conduct is a violation of this agreement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
