'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

interface Slide {
  type: 'welcome' | 'event' | 'article' | 'donate' | 'static'
  title: string
  subtitle?: string
  image?: { asset: { _ref: string } }
  ctaText?: string
  ctaLink?: string
  isExternal?: boolean
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

interface HeroCarouselClientProps {
  slides: Slide[]
}

export default function HeroCarouselClient({ slides }: HeroCarouselClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const autoPlayRef = useRef(autoPlay)

  // Keep ref in sync with state
  useEffect(() => {
    autoPlayRef.current = autoPlay
  }, [autoPlay])

  // Auto-advance slides (only if autoPlay is true)
  useEffect(() => {
    if (slides.length <= 1) return
    
    const timer = setInterval(() => {
      if (autoPlayRef.current) {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  // Stop auto-play when user manually changes slide
  const handleSlideChange = (index: number) => {
    setAutoPlay(false)
    setCurrentSlide(index)
  }

  const handlePrevSlide = () => {
    setAutoPlay(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNextSlide = () => {
    setAutoPlay(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  if (slides.length === 0) {
    return (
      <section className="relative h-[70vh] bg-usa-navy flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="font-display text-4xl mb-4">USA Ice Climbing</h1>
          <p className="text-white/80">Configure hero slides in Sanity Studio</p>
        </div>
      </section>
    )
  }

  const slide = slides[currentSlide]

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {slide.image ? (
          <Image
            src={urlFor(slide.image).width(1920).height(1080).url()}
            alt={slide.title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
          />
        ) : (
          <div className="w-full h-full bg-usa-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end pb-20 md:pb-24">
        <div className="section-container">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {slide.title}
            </h1>
            
            {slide.subtitle && (
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                {slide.subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              {slide.ctaText && slide.ctaLink && (
                slide.isExternal ? (
                  <a
                    href={slide.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {slide.ctaText}
                  </a>
                ) : (
                  <Link href={slide.ctaLink} className="btn-primary">
                    {slide.ctaText}
                  </Link>
                )
              )}
              
              {slide.secondaryCtaText && slide.secondaryCtaLink && (
                slide.isExternal === false && !slide.secondaryCtaLink.startsWith('http') ? (
                  <Link
                    href={slide.secondaryCtaLink}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-usa-navy transition-colors"
                  >
                    {slide.secondaryCtaText}
                  </Link>
                ) : (
                  <a
                    href={slide.secondaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-usa-navy transition-colors"
                  >
                    {slide.secondaryCtaText}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Auto-play indicator (optional - shows when paused) */}
      {!autoPlay && slides.length > 1 && (
        <button
          onClick={() => setAutoPlay(true)}
          className="absolute bottom-8 right-8 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Resume auto-play"
          title="Resume auto-play"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </section>
  )
}