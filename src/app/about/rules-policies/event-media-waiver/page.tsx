import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Image Use Attestation',
  description: 'USA Ice Climbing Image Use Attestation — consent for photo, video, and voice use from USAIC events.',
}

export default function EventMediaWaiverPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-usa-navy">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Image Use Attestation
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            USAIC Event Media Waiver
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

            <div className="text-slate-700 leading-relaxed border-l-2 border-usa-red pl-6">
              <p className="mb-4">
                I hereby authorize USA Ice Climbing, its officers, employees, agents,
                affiliates, licensees, contractors, successors, and assigns, (&quot;USAIC&quot;)
                to use my name; likeness, including my picture, portrait, or other image; and
                voice; (or the name; likeness, including the picture, portrait or other image;
                and voice of my minor child/ren on behalf of whom I am authorizing consent)
                separately or together, in any and all media, whether now existing or hereafter
                created, for purposes of advertising and trade associated with USAIC, or
                relating to the products or services of USAIC.
              </p>
              <p className="mb-4">
                USAIC shall have the right to, alter or edit any captured image of my likeness
                or recording of my voice (or that of my minor child/ren noted above) in any
                manner it deems appropriate, and to use such name, likeness, and voice in
                conjunction with text, sound, and other images, including the likeness of others
                and to copyright any such uses.
              </p>
              <p className="mb-4">
                I hereby acknowledge that I will not receive any compensation from USAIC for the
                use of my, or my child&apos;s/children&apos;s, name; likeness; and voice.
              </p>
              <p>
                I further release, waive, discharge, and covenant not to sue USAIC based on the
                use of my, or my child&apos;s/children&apos;s, name; likeness; and voice,
                including alterations, or edits thereto, for purposes of advertising and trade
                associated with USAIC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
