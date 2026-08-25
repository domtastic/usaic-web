import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How USA Ice Climbing collects, uses, and protects information on usaiceclimbing.org.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">Privacy Policy</h1>
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
              USA Ice Climbing (&quot;USAIC,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              is committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, and share information when you visit usaiceclimbing.org (the
              &quot;Site&quot;) or otherwise interact with us online.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">1. Information We Collect</h2>

            <h3 className="font-display text-lg text-usa-navy mt-6 mb-2">Information you provide directly</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Contact form:</strong> your name, email address, subject, and message
                when you contact us.
              </li>
              <li>
                <strong>Event submissions:</strong> event details (title, dates, venue,
                description, link) plus your name and email address, and optionally a poster
                image, when you submit a community event for our calendar.
              </li>
              <li>
                <strong>Donations:</strong> if you donate through our donation page, your
                donation is processed by{' '}
                <a href="https://www.zeffy.com" target="_blank" rel="noopener noreferrer" className="text-usa-red hover:underline">
                  Zeffy
                </a>
                , a third-party donation platform. Zeffy collects your name, email, and payment
                information directly; we receive your name, email, and donation amount from
                Zeffy for donor records and tax receipt purposes. We do not process or store
                your payment card information ourselves. Zeffy&apos;s own privacy policy governs
                how it handles your information:{' '}
                <a
                  href="https://support.zeffy.com/data-privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-usa-red hover:underline"
                >
                  support.zeffy.com/data-privacy-policy
                </a>
                .
              </li>
            </ul>

            <h3 className="font-display text-lg text-usa-navy mt-6 mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Usage data:</strong> When you visit the Site, we automatically collect
                information through Google Analytics and Vercel Analytics, such as pages
                viewed, browser and device type, approximate location (derived from IP
                address), and referring website. This helps us understand how visitors use the
                Site.
              </li>
              <li>
                <strong>Cookies and local storage:</strong> We use cookies and similar
                technologies — including a local storage flag that remembers you&apos;ve
                acknowledged our cookie notice — to support analytics and Site functionality.
                You can control cookies through your browser settings.
              </li>
              <li>
                <strong>Security and bot protection:</strong> Our contact and event submission
                forms use Cloudflare Turnstile to help prevent spam and abuse, which may
                process limited technical information (such as your IP address) as part of
                that verification.
              </li>
            </ul>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">2. How We Use Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Respond to inquiries submitted through our contact form</li>
              <li>Review and publish community event submissions</li>
              <li>Process and acknowledge donations, including issuing tax receipts</li>
              <li>Understand and improve how visitors use our Site</li>
              <li>Protect our Site from spam, abuse, and security threats</li>
            </ul>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">3. How We Share Information</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share information with service
              providers who help us operate the Site and our programs — including Resend
              (email delivery), Sanity (content management), Zeffy (donation processing),
              Cloudflare (security), Vercel (hosting and analytics), and Google (analytics) —
              or as required by law, or to protect the rights, safety, or property of USAIC,
              our athletes, or the public.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">4. Children&apos;s Privacy</h2>
            <p className="mb-4">
              USA Ice Climbing supports youth athletes and programs. We do not knowingly
              collect personal information directly from children under 13 through this Site.
              Event submissions, donations, and other data collection through the Site are
              intended for use by parents, guardians, coaches, or other adults acting on a
              child&apos;s behalf. If you believe a child has provided us with personal
              information without appropriate parental or guardian involvement, please contact
              us so we can remove it.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">5. Your Choices</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You can decline cookies through your browser settings, though some Site features may not work as intended.</li>
              <li>
                You may opt out of Google Analytics tracking using Google&apos;s browser
                add-on:{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-usa-red hover:underline"
                >
                  tools.google.com/dlpage/gaoptout
                </a>
                .
              </li>
              <li>You may contact us at any time to ask what information we have about you or to request that we delete it, and we will respond as appropriate.</li>
            </ul>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">6. Data Retention</h2>
            <p className="mb-4">
              We retain contact form and event submission information for as long as
              reasonably necessary to respond to your inquiry or process your submission, and
              donation records for as long as required for our financial and tax records.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">7. Security</h2>
            <p className="mb-4">
              We take reasonable measures to protect information submitted through the Site,
              but no method of transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">8. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. The date at the top of this
              page reflects the most recent revision.
            </p>

            <h2 className="font-display text-2xl text-usa-navy mt-10 mb-3">9. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, please{' '}
              <Link href="/contact" className="text-usa-red hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
