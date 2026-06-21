// src/app/page.tsx
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { GlanceMetrics } from '@/components/home/GlanceMetrics'
import { WhyGeofera } from '@/components/home/WhyGeofera'
import { TechnicalEcosystem } from '@/components/home/TechnicalEcosystem'
import { FeaturedPrograms } from '@/components/home/FeaturedPrograms'
import { UpcomingEvents } from '@/components/home/UpcomingEvents'
import { KnowledgeHub } from '@/components/home/KnowledgeHub'
import { MembershipBenefits } from '@/components/home/MembershipBenefits'
import { JoinCTA } from '@/components/home/JoinCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <GlanceMetrics />
        <WhyGeofera />
        <TechnicalEcosystem />
        <FeaturedPrograms />
        <UpcomingEvents />
        <KnowledgeHub />
        <MembershipBenefits />
        <JoinCTA />
      </main>
      <Footer />
    </>
  )
}
