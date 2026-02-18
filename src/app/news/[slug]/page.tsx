import { client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const revalidate = 60

interface Article {
  _id: string
  title: string
  slug: { current: string }
  author?: string
  publishDate: string
  featuredImage?: { asset: { _ref: string } }
  excerpt?: string
  content?: any[]
  tags?: string[]
}

async function getArticle(slug: string): Promise<Article | null> {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishDate,
    featuredImage,
    excerpt,
    content,
    tags
  }`
  
  return client.fetch(query, { slug })
}

interface PageProps {
    params: Promise<{ slug: string }>
  }
  
  export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  // Custom components for PortableText
  const components = {
    types: {
      image: ({ value }: any) => (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Article image'}
            width={800}
            height={450}
            className="rounded-lg w-full"
          />
        </div>
      ),
    },
    marks: {
      link: ({ children, value }: any) => (
        <a 
          href={value.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-usa-red hover:underline"
        >
          {children}
        </a>
      ),
    },
    block: {
      h2: ({ children }: any) => (
        <h2 className="font-display text-2xl text-usa-navy mt-8 mb-4">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="font-display text-xl text-usa-navy mt-6 mb-3">{children}</h3>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-usa-red pl-4 my-6 italic text-slate-600">
          {children}
        </blockquote>
      ),
      normal: ({ children }: any) => (
        <p className="mb-4 text-slate-700 leading-relaxed">{children}</p>
      ),
    },
  }

  return (
    <>
      {/* Back Navigation */}
      <div className="bg-slate-50 py-4">
        <div className="section-container">
          <Link 
            href="/news" 
            className="inline-flex items-center text-usa-navy hover:text-usa-red transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>
        </div>
      </div>

      <article className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-ice-100 text-ice-700 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-usa-navy mb-4">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center text-slate-500 mb-8">
              {article.author && (
                <>
                  <span className="font-medium">{article.author}</span>
                  <span className="mx-3">•</span>
                </>
              )}
              <span>{formatDate(article.publishDate)}</span>
            </div>

            {/* Featured Image */}
            {article.featuredImage && (
              <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
                <Image
                  src={urlFor(article.featuredImage).width(1200).height(675).url()}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {article.excerpt}
              </p>
            )}

            {/* Content */}
            {article.content && (
              <div className="prose prose-lg max-w-none">
                <PortableText value={article.content} components={components} />
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  )
}