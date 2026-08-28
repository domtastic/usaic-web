import type { Metadata } from 'next'
import Link from 'next/link'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'Register — 2026 Team Tryouts',
  description: 'Registration for the 2026 USA Ice Climbing team tryouts.',
}

// Swap in the real Google Form link once the event/member/team application questions are finalized.
const GOOGLE_FORM_URL = ''

export default function RegisterPage() {
  return (
    <>
      <SubpageHeader
        eyebrow="Register"
        title="Register for Tryouts"
        description="Registration is a two-step process: complete the registration form, then submit payment below."
      />
      <TryoutsSubNav />

      <section className="py-14 md:py-20 bg-white">
        <div className="section-container max-w-3xl">
          {/* Step 1 */}
          <div className="border border-slate-200 p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-usa-navy text-white font-display text-lg shrink-0">
                1
              </span>
              <h2 className="font-display text-2xl text-usa-navy">Complete Registration</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-5">
              Registration collects your athlete and membership information, and team
              application questions if you&apos;re applying for the World Team or National
              Team. You&apos;ll be asked to read and acknowledge our{' '}
              <Link href="/about/rules-policies" className="text-usa-red font-semibold hover:underline">
                Rules &amp; Policies
              </Link>
              , including the USAIC Waiver, as part of the form.
            </p>
            {GOOGLE_FORM_URL ? (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Open Registration Form
              </a>
            ) : (
              <div className="inline-flex items-center px-5 py-3 bg-slate-100 text-slate-500 text-sm font-semibold">
                Registration form opens soon — check back here for the link
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div className="border border-slate-200 p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-usa-navy text-white font-display text-lg shrink-0">
                2
              </span>
              <h2 className="font-display text-2xl text-usa-navy">Submit Payment</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-5">
              After completing the registration form above, submit your registration fee
              below.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                title="USA Ice Climbing Payment"
                src="https://www.zeffy.com/embed/donation-form/donate-to-usa-ice-climbing"
                className="w-full block"
                style={{ height: '900px', border: 'none' }}
                allow="payment"
              />
            </div>
          </div>

          <p className="text-slate-500 text-sm">
            Questions about registration?{' '}
            <Link href="/contact" className="text-usa-red font-semibold hover:text-usa-red-dark">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
