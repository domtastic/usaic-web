import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import OlympicBidSection from '@/components/OlympicBidSection'
import TeamPreview from '@/components/TeamPreview'
import MedalCount from '@/components/MedalCount'
import DonateSection from '@/components/DonateSection'
import SponsorsSection from '@/components/SponsorsSection'

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Olympic Bid Section */}
      <OlympicBidSection />
      
      {/* Team USA Preview */}
      <TeamPreview />

      {/* Medal Count */}
      <MedalCount />
      
      {/* Donate Section */}
      <DonateSection />
      
      {/* Sponsors Section */}
      <SponsorsSection />
    </>
  )
}