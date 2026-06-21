// GEOFERA Homepage 2026 — World-class professional community platform
import { Navbar }            from '@/components/layout/Navbar'
import { Footer }            from '@/components/layout/Footer'
import { Hero }              from '@/components/home/Hero'
import { GlanceMetrics }     from '@/components/home/GlanceMetrics'
import { WhyGeofera }        from '@/components/home/WhyGeofera'
import { TechnicalEcosystem }from '@/components/home/TechnicalEcosystem'
import { FeaturedPrograms }  from '@/components/home/FeaturedPrograms'
import { UpcomingEvents }    from '@/components/home/UpcomingEvents'
import { KnowledgeHub }      from '@/components/home/KnowledgeHub'
import { MembershipBenefits }from '@/components/home/MembershipBenefits'
import { CommunityMap }      from '@/components/home/CommunityMap'
import { JoinCTA }           from '@/components/home/JoinCTA'

export const metadata = {
  title: 'GEOFERA — Connecting Geoscience, Formation Evaluation, Drilling & Upstream Professionals',
  description: 'GEOFERA is the regional professional platform for geoscience, formation evaluation, drilling, and upstream professionals. Join 3,000+ members across 15+ countries.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GlanceMetrics />
        <WhyGeofera />
        <TechnicalEcosystem />
        <FeaturedPrograms />
        <UpcomingEvents />
        <KnowledgeHub />
        <MembershipBenefits />
        <CommunityMap />
        <JoinCTA />
      </main>
      <Footer />
    </>
  )
}
