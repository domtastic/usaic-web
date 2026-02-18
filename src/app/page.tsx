import HeroCarousel from '@/components/HeroCarousel'
import DiscoverSection from '@/components/DiscoverSection'
import GrowthSection from '@/components/GrowthSection'
import OlympicBidSection from '@/components/OlympicBidSection'
import TeamPreview from '@/components/TeamPreview'
import MedalDonateSection from '@/components/MedalDonateSection'
import SponsorsSection from '@/components/SponsorsSection'

export const revalidate = 60

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Discover the Sport */}
      <DiscoverSection />


      {/* Olympic Bid / Future of the Sport */}
      <OlympicBidSection />
      
      {/* Meet Our Athletes */}
      <TeamPreview />

      {/* Medal Count + Donate (Split Screen) */}
      <MedalDonateSection />
      
      {/* Sponsors */}
      <SponsorsSection />
    </>
  )
}