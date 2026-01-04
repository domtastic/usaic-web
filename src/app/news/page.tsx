const placeholderArticles = [
  {
    id: 1,
    title: 'Team USA Prepares for 2025 World Cup Season',
    excerpt: 'Our athletes are training hard as the 2025 ice climbing season approaches.',
    author: 'USAIC Staff',
    date: '2024-12-15',
    slug: 'team-usa-prepares-2025',
  },
  {
    id: 2,
    title: 'Ice Climbing Olympic Bid Update',
    excerpt: 'The latest news on ice climbing inclusion in the 2030 Winter Olympics.',
    author: 'USAIC Staff',
    date: '2024-12-01',
    slug: 'olympic-bid-update',
  },
  {
    id: 3,
    title: 'Athlete Spotlight: Training in Colorado',
    excerpt: 'A behind-the-scenes look at how our athletes prepare for competition.',
    author: 'USAIC Staff',
    date: '2024-11-20',
    slug: 'athlete-spotlight-colorado',
  },
]

export default function NewsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-ice-gradient-dark">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative section-container text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            News
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            The latest updates from USA Ice Climbing
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderArticles.map((article) => (
              <article key={article.id} className="card group cursor-pointer">
                {/* Image placeholder */}
                <div className="aspect-video bg-ice-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-ice-gradient flex items-center justify-center">
                    <p className="text-white/75 text-sm">Featured Image</p>
                  </div>
                  <div className="absolute inset-0 bg-usa-red/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">Read Article</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-slate-500 mb-2">
                    {formatDate(article.date)} • {article.author}
                  </p>
                  <h2 className="font-display text-xl text-ice-900 mb-3 group-hover:text-usa-red transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-600">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State Note */}
          <div className="mt-12 text-center">
            <p className="text-slate-500">
              More articles coming soon. Add content via Sanity CMS.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
