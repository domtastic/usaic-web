import type { Metadata } from 'next'
import SubpageHeader from '../_components/SubpageHeader'
import TryoutsSubNav from '../TryoutsSubNav'

export const metadata: Metadata = {
  title: 'FAQ — 2026 Team Tryouts',
  description: 'Answers to common questions about gear, format, and team selection for the 2026 USA Ice Climbing team tryouts.',
}

const faqGroups = [
  {
    category: 'Gear & Equipment',
    items: [
      {
        q: "I don't have dry-tooling-specific picks. Can I borrow a pair of tools?",
        a: "Yes — there will be a few sets of tools available if you'd like to use them instead of your own.",
      },
      {
        q: 'What does "kick in" mean?',
        a: 'It refers to the modern ice climbing competition style of kicking into the plywood for feet, while using holds with your tools and hands. Kick-in is typically done with competition boots that have crampons bolted directly on, along with specialized plywood frontpoints.',
      },
      {
        q: 'Do you supply the boots?',
        a: 'No, we do not supply boots.',
      },
      {
        q: 'Can I use my normal ice climbing boots and crampons?',
        a: 'Unfortunately, no. Please contact us with any further questions about equipment.',
      },
      {
        q: 'Comp boots or rock shoes?',
        a: 'Comp boots only — this will be a kick-in format.',
      },
      {
        q: 'Speed — do you provide the equipment?',
        a: 'We will have at least one set of dull plywood fifis available for use.',
      },
    ],
  },
  {
    category: 'Format & Climbing',
    items: [
      {
        q: 'Top rope or lead?',
        a: 'Be prepared to lead.',
      },
      {
        q: 'How do I get lead certified?',
        a: "Friday's comp routes will be on top rope. It's each athlete's responsibility to get lead certified on Friday in preparation for Saturday — please be prepared to get certified by LCC staff during any time you aren't trying out on Friday.",
      },
      {
        q: 'Will I be climbing all three days?',
        a: "Every athlete is guaranteed to climb Friday and Saturday. Sunday is reserved for the men's and women's finalists.",
      },
      {
        q: 'How will the cohorts/heats be selected?',
        a: 'Everyone is randomized into Heat 1, 2, or 3 for Friday, then randomized again for Saturday.',
      },
      {
        q: 'How many routes will I get to climb, and how are they scored?',
        a: 'Every athlete is guaranteed 2 qualifying routes. Finalists climb 3 additional routes.',
      },
      {
        q: 'Speed — when will it be?',
        a: 'Speed tryouts are only on Friday. Athletes trying out for speed will compete in Lead during Heat 1, then in the speed event during Heat 2 — this levels the playing field for dual-sport athletes.',
      },
      {
        q: 'Speed — what is the format?',
        a: "The format runs as 3 heats, with each heat consisting of 2 back-to-back runs. A heat's score is the combined time of both runs. The lowest of the three heat totals is the athlete's final score.",
      },
    ],
  },
  {
    category: 'Team Selection & Results',
    items: [
      {
        q: 'When will we know the results?',
        a: 'The USA team will be selected Sunday, after Finals.',
      },
      {
        q: 'What is the difference between the National Team and the World Team?',
        a: "This is the first year USA Ice Climbing will select two teams. The World Team is made up of the top-performing athletes who represent USA Ice Climbing — in both performance and values — at the highest level, on and off the World Cup Tour. The National Team is a developmental path for athletes working toward the World Team, and an outlet for past World Team members to keep their skills sharp. It brings unity to athletes traveling to local and international competitions such as Continental Cups, and builds awareness in the communities athletes come into contact with.",
      },
    ],
  },
  {
    category: 'Travel',
    items: [
      {
        q: 'What is the nearest airport for out-of-town travelers?',
        a: 'Denver International Airport (DEN) is the closest airport to the gym.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <SubpageHeader eyebrow="Adult Tryouts" title="Questions & Answers" />
      <TryoutsSubNav />

      <section className="py-14 md:py-20 bg-white">
        <div className="section-container max-w-3xl">
          {faqGroups.map((group) => (
            <div key={group.category} className="mb-14 last:mb-0">
              <div className="border-l-2 border-usa-red pl-4 mb-2">
                <h2 className="font-display text-2xl text-usa-navy">{group.category}</h2>
              </div>

              <div className="divide-y divide-slate-200">
                {group.items.map((item) => (
                  <div key={item.q} className="py-5">
                    <p className="font-display text-lg text-usa-navy mb-2">{item.q}</p>
                    <p className="text-base text-slate-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
