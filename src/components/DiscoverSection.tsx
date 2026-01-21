import Link from 'next/link'

const cards = [
  {
    title: 'What is Drytooling?',
    description: 'Learn about ice climbing, mixed climbing, and drytooling—and why drytooling is the key to year-round training.',
    href: '/get-started/what-is-drytooling',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Learn to Ice Climb',
    description: 'Your path into the sport—from gym sessions and ice festivals to guided experiences and clinics.',
    href: '/get-started/learn',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Find a Gym',
    description: 'Discover climbing gyms with drytooling near you and start training year-round.',
    href: '/get-started/gyms',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
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
              <div className="w-14 h-14 bg-usa-navy rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-usa-red transition-colors">
                {card.icon}
              </div>
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