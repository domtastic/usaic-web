'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Placeholder slides - these will come from Sanity CMS later
const placeholderSlides = [
  {
    id: 1,
    title: 'Team USA Ice Climbing',
    subtitle: 'Representing America on the World Stage',
    ctaText: 'Meet the Team',
    ctaLink: '/team',
    // Placeholder gradient background - replace with actual images
    bgClass: 'bg-ice-gradient-dark',
  },
  {
    id: 2,
    title: 'Road to 2030',
    subtitle: 'Supporting Ice Climbing\'s Olympic Journey',
    ctaText: 'Learn More',
    ctaLink: '/olympics-2030',
    bgClass: 'bg-gradient-to-br from-ice-900 via-ice-700 to-ice-500',
  },
  {
    id: 3,
    title: 'Support Our Athletes',
    subtitle: 'Your donation helps Team USA compete globally',
    ctaText: 'Donate Now',
    ctaLink: '/donate',
    bgClass: 'bg-gradient-to-br from-slate-900 via-usa-red to-usa-redDark',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % placeholderSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = placeholderSlides[currentSlide]

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      {/* Background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${slide.bgClass}`}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full section-container flex items-center">
        <div className="max-w-2xl text-white animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {slide.subtitle}
          </p>
          <Link href={slide.ctaLink} className="btn-primary text-lg">
            {slide.ctaText}
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {placeholderSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + placeholderSlides.length) % placeholderSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/75 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % placeholderSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/75 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}
