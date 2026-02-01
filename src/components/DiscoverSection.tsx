import Link from 'next/link'

const cards = [
  {
    title: 'What is Drytooling?',
    description: 'Learn about ice climbing, mixed climbing, and drytooling—and why drytooling is the key to year-round training.',
    href: '/get-started/what-is-drytooling'
  },
  {
    title: 'Learn to Ice Climb',
    description: 'Your path into the sport—from gym sessions and ice festivals to guided experiences and clinics.',
    href: '/get-started/learn'
  },
  {
    title: 'Find a Gym',
    description: 'Discover climbing gyms with drytooling near you and start training year-round.',
    href: '/get-started/gyms'
  },
]

export default function DiscoverSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-usa-navy mb-4">
            Discover the Sport
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ice climbing is for everyone. Whether you're curious about the sport or ready to start training, we're here to help you take the first step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-ice-50 rounded-2xl p-8 hover:bg-ice-100 transition-colors"
            >
              <h3 className="font-display text-xl text-usa-navy mb-3 group-hover:text-usa-red transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-600 mb-4">
                {card.description}
              </p>
              <span className="inline-flex items-center text-usa-navy font-semibold group-hover:text-usa-red transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}