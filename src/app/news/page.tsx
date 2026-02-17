import type { Metadata } from 'next'
import { client, urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest news and updates from USA Ice Climbing.',
}

interface Article {
  _id: string
  title: string
  slug: { current: string }
  author?: string
  publishDate: string
  featuredImage?: { asset: { _ref: string } }
  excerpt?: string
  tags?: string[]
}

async function getArticles(): Promise<Article[]> {
  const query = `*[_type == "article"] | order(publishDate desc) {
    _id,
    title,
    slug,
    author,
    publishDate,
    featuredImage,
    excerpt,
    tags
  }`
  
  return client.fetch(query)
}

export default async function NewsPage() {
  const articles = await getArticles()

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
      <section className="relative py-20 md:py-28 bg-usa-navy">
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

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="section-container">
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article._id}
                  href={`/news/${article.slug.current}`}
                  className="card group"
                >
                  {/* Featured Image */}
                  <div className="aspect-video bg-slate-100 relative overflow-hidden">
                    {article.featuredImage ? (
                      <Image
                        src={urlFor(article.featuredImage).width(600).height(340).url()}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-usa-navy flex items-center justify-center">
                        <svg 
                          className="w-16 h-16 text-white/30" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-0.5 bg-ice-100 text-ice-700 text-xs font-medium rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <h2 className="font-display text-xl text-usa-navy group-hover:text-usa-red transition-colors mb-2">
                      {article.title}
                    </h2>
                    
                    {article.excerpt && (
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                    )}
                    
                    <div className="flex items-center text-sm text-slate-500">
                      {article.author && (
                        <>
                          <span>{article.author}</span>
                          <span className="mx-2">•</span>
                        </>
                      )}
                      <span>{formatDate(article.publishDate)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500">No articles published yet.</p>
              <p className="text-sm text-slate-400 mt-2">Add articles in the Sanity Studio at /studio</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}