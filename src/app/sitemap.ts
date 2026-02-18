import type { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://usaiceclimbing.org'

  // Static pages
  const staticPages = [
    '',
    '/team',
    '/team/disciplines',
    '/team/resources',
    '/events',
    '/results',
    '/news',
    '/about',
    '/donate',
    '/get-started/learn',
    '/get-started/gyms',
    '/get-started/what-is-drytooling',
    '/get-started/gym-involvement',
    '/get-started/indoor-guidelines',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic athlete pages
  const athletes: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "athlete"]{ slug }`
  )
  const athletePages = athletes.map((athlete) => ({
    url: `${baseUrl}/team/${athlete.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic news articles
  const articles: { slug: { current: string }; publishedAt?: string }[] = await client.fetch(
    `*[_type == "article"]{ slug, publishedAt }`
  )
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/news/${article.slug.current}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...athletePages, ...articlePages]
}
