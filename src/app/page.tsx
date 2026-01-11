import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import OlympicBidSection from '@/components/OlympicBidSection'
import TeamPreview from '@/components/TeamPreview'
import DonateSection from '@/components/DonateSection'
import SponsorsSection from '@/components/SponsorsSection'


export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />
      
    
      
      {/* Team USA Preview */}
      <TeamPreview />
        {/* Olympic Bid Section */}
      <OlympicBidSection />
      {/* Donate Section */}
      <DonateSection />
      
      {/* Sponsors Section */}
      <SponsorsSection />
    </>
  )
}
