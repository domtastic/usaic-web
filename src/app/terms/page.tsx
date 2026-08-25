import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms that govern use of usaiceclimbing.org.',
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">Terms of Use</h1>
          <p className="text-white/60 text-sm">
            Draft — pending Board approval · Last updated August 25, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
            <p className="mb-4">
              Welcome to usaiceclimbing.org (the &quot;Site&quot;), operated by USA Ice Climbing
              (&quot;USAIC,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a
              501(c)(3) nonprofit organization. By accessing or using this Site, you agree to
              these Terms of Use. If you do not agree, please do not use the Site.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">1. Use of the Site</h2>
            <p className="mb-2">
              You may use this Site for lawful, personal, non-commercial purposes related to
              learning about, supporting, or participating in USA Ice Climbing programs and
              events. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Use the Site in any way that violates applicable law</li>
              <li>Attempt to interfere with the Site&apos;s security or normal operation (e.g., through spam, malware, or unauthorized access attempts)</li>
              <li>Submit false, misleading, or fraudulent information through our forms, including event submissions</li>
              <li>Use automated means to scrape or collect content from the Site without our permission</li>
            </ul>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">2. Content and Intellectual Property</h2>
            <p className="mb-4">
              All content on this Site — including text, graphics, logos, and photographs — is
              owned by USAIC or used with permission, and is protected by copyright and other
              intellectual property laws unless otherwise noted. You may view and share Site
              content for personal, non-commercial purposes, but you may not reproduce, modify,
              or distribute it for commercial purposes without our written permission.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">3. User-Submitted Content</h2>
            <p className="mb-4">
              If you submit content to us — such as an event listing through our event
              submission form — you grant USAIC a non-exclusive, royalty-free license to
              display, edit, and publish that content on the Site and related channels. You
              represent that you have the right to submit that content and that it does not
              infringe on any third party&apos;s rights. We reserve the right to edit or decline
              to publish any submitted content at our discretion.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">4. Donations</h2>
            <p className="mb-4">
              Donations made through this Site are processed by Zeffy, a third-party donation
              platform, and are subject to Zeffy&apos;s own terms. USA Ice Climbing is a
              registered 501(c)(3) nonprofit organization; donations are tax-deductible to the
              extent allowed by law. Please consult a tax advisor regarding your specific
              situation.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">5. Third-Party Links and Services</h2>
            <p className="mb-4">
              This Site may link to or embed third-party services, such as our donation
              platform, social media, or partner websites. We are not responsible for the
              content, policies, or practices of those third parties.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">6. Events and Activities</h2>
            <p className="mb-4">
              Ice climbing and dry-tooling are inherently risky activities. Information about
              events, tryouts, and programs on this Site is provided for informational purposes
              and does not guarantee safety, availability, or outcome. Participation in any
              event or program is subject to that event&apos;s own rules, waivers, and
              requirements, which may be separate from these Terms. Events listed on this Site
              that are not explicitly organized by USAIC are not sanctioned or endorsed by
              USAIC unless stated otherwise.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">7. Disclaimer of Warranties</h2>
            <p className="mb-4">
              This Site is provided &quot;as is&quot; without warranties of any kind, express or
              implied. We do not guarantee that the Site will be uninterrupted, error-free, or
              completely secure.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, USAIC will not be liable for any
              indirect, incidental, or consequential damages arising from your use of the Site.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">9. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the United States and the state in which
              USAIC is legally organized, without regard to conflict-of-law principles.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">10. Changes to These Terms</h2>
            <p className="mb-4">
              We may update these Terms from time to time. Continued use of the Site after
              changes are posted constitutes acceptance of the updated Terms.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">11. Contact Us</h2>
            <p className="mb-4">
              Questions about these Terms can be directed to us via our{' '}
              <Link href="/contact" className="text-usa-red hover:underline">
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
