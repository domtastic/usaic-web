import { client, urlFor } from '@/lib/sanity'
import HeroCarouselClient from './HeroCarouselClient'

interface HomepageSettings {
  welcomeSlide?: {
    image?: { asset: { _ref: string } }
  }
  getStartedSlide?: {
    image?: { asset: { _ref: string } }
  }
  eventSlide?: {
    // ... rest of existing fields
    enabled: boolean
    youtubeLink?: string
    fallbackImage?: { asset: { _ref: string } }
  }
  articleSlide?: {
    enabled: boolean
    fallbackImage?: { asset: { _ref: string } }
  }
  donateSlide?: {
    enabled: boolean
    title?: string
    subtitle?: string
    image?: { asset: { _ref: string } }
    ctaText?: string
  }
  staticSlides?: {
    title: string
    subtitle?: string
    image?: { asset: { _ref: string } }
    ctaText?: string
    ctaLink?: string
    isExternal?: boolean
  }[]
}

interface Event {
  title: string
  eventType: string
  startDate: string
  endDate?: string
  location: { city: string; state?: string; country: string }
  eventLink?: string
  featuredImage?: { asset: { _ref: string } }
}

interface Article {
  title: string
  slug: { current: string }
  excerpt?: string
  featuredImage?: { asset: { _ref: string } }
}

async function getCarouselData() {
  // Get homepage settings
  const homepageQuery = `*[_type == "homepage"][0]`
  const homepage: HomepageSettings = await client.fetch(homepageQuery) || {}

  // Get current or upcoming events (World Cup, Continental Cup, Ice Festival only)
  // Get events happening now or in the next 7 days
  const today = new Date()
  const todayStr = today.toISOString().split('T')[0]
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
  const nextWeekStr = nextWeek.toISOString().split('T')[0]
  
  const eventsQuery = `*[_type == "event" && 
  eventType == "world-cup" &&
  ((startDate <= $today && endDate >= $today) || (startDate >= $today && startDate <= $nextWeek))
] | order(startDate asc) {
    title,
    eventType,
    startDate,
    endDate,
    location,
    eventLink,
    featuredImage
  }`
  const upcomingEvents: Event[] = await client.fetch(eventsQuery, { today: todayStr, nextWeek: nextWeekStr })

  // Sort by priority: world-cup > continental-cup > ice-festival
  const eventPriority: Record<string, number> = {
    'world-cup': 1,
    'continental-cup': 2,
    'ice-festival': 3,
  }
  
  const sortedEvents = upcomingEvents.sort((a, b) => {
    // First by priority
    const priorityDiff = eventPriority[a.eventType] - eventPriority[b.eventType]
    if (priorityDiff !== 0) return priorityDiff
    // Then by date
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  })

  // Get latest article
  const articleQuery = `*[_type == "article"] | order(publishDate desc)[0] {
    title,
    slug,
    excerpt,
    featuredImage
  }`
  const latestArticle: Article | null = await client.fetch(articleQuery)

  return { homepage, events: sortedEvents, latestArticle }
}

function formatEventDate(start: string, end?: string) {
  const startDate = new Date(start)
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }
  if (end && end !== start) {
    const endDate = new Date(end)
    return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}, ${endDate.getFullYear()}`
  }
  return startDate.toLocaleDateString('en-US', { ...options, year: 'numeric' })
}

function formatLocation(location: Event['location']) {
  const parts = [location.city]
  if (location.state) parts.push(location.state)
  if (location.country && location.country !== 'USA' && location.country !== 'United States') {
    parts.push(location.country)
  }
  return parts.join(', ')
}

export default async function HeroCarousel() {
  const { homepage, events, latestArticle } = await getCarouselData()

  // Build slides array
const slides: any[] = []

// 1. Welcome Slide (always first)
slides.push({
  type: 'welcome',
  title: 'Welcome to USA Ice Climbing',
  subtitle: 'The national governing body for competitive ice climbing, mixed climbing, and drytooling in the United States',
  image: homepage.welcomeSlide?.image,
  ctaText: 'Meet the Team',
  ctaLink: '/team',
  isExternal: false,
  secondaryCtaText: 'Upcoming Events',
  secondaryCtaLink: '/events',
})
// 2. Get Started Slide
slides.push({
  type: 'getStarted',
  title: 'Get Started Ice Climbing',
  subtitle: 'Whether at a gym, ice festival, or with a guide—your journey into ice climbing starts here',
  image: homepage.getStartedSlide?.image,
  ctaText: 'Learn How',
  ctaLink: '/get-started/learn',
  isExternal: false,
  secondaryCtaText: 'Find a Gym',
  secondaryCtaLink: '/get-started/gyms',
})

// 2. Event Slides (World Cup only)
const WORLD_CUP_YOUTUBE = 'https://www.youtube.com/playlist?list=PL0DMtATwEZ0jR6KC7LcrqljP-nZZGpqZG'

if (homepage.eventSlide?.enabled !== false && events.length > 0) {
  events.forEach((event) => {
    const isWorldCup = event.eventType === 'world-cup'
    
    slides.push({
      type: 'event',
      title: event.title,
      subtitle: `${formatEventDate(event.startDate, event.endDate)} • ${formatLocation(event.location)}`,
      image: event.featuredImage || homepage.eventSlide?.fallbackImage,
      ctaText: 'Event Details',
      ctaLink: event.eventLink || '/events',
      isExternal: !!event.eventLink,
      secondaryCtaText: isWorldCup ? '▶ Watch Live' : undefined,
      secondaryCtaLink: isWorldCup ? WORLD_CUP_YOUTUBE : undefined,
    })
  })
}

// 3. Latest Article Slide
if (homepage.articleSlide?.enabled !== false && latestArticle) {
  slides.push({
    type: 'article',
    title: latestArticle.title,
    subtitle: latestArticle.excerpt,
    image: latestArticle.featuredImage || homepage.articleSlide?.fallbackImage,
    ctaText: 'Read More',
    ctaLink: `/news/${latestArticle.slug.current}`,
    isExternal: false,
  })
}

// 4. Donate Slide
if (homepage.donateSlide?.enabled !== false) {
  slides.push({
    type: 'donate',
    title: homepage.donateSlide?.title || 'Support USA Ice Climbing',
    subtitle: homepage.donateSlide?.subtitle || 'Help grow the sport and support our athletes on the world stage',
    image: homepage.donateSlide?.image,
    ctaText: homepage.donateSlide?.ctaText || 'Donate Now',
    ctaLink: '/donate',
    isExternal: false,
  })
}

// 5. Static Slides
if (homepage.staticSlides) {
  homepage.staticSlides.forEach((slide) => {
    slides.push({
      type: 'static',
      title: slide.title,
      subtitle: slide.subtitle,
      image: slide.image,
      ctaText: slide.ctaText,
      ctaLink: slide.ctaLink,
      isExternal: slide.isExternal,
    })
  })
}
  return <HeroCarouselClient slides={slides} />
}