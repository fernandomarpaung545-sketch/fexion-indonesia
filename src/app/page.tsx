import { Navbar }      from '@/components/layout/Navbar'
import { Footer }      from '@/components/layout/Footer'
import { Hero }        from '@/components/home/Hero'
import { StatsRow }    from '@/components/home/StatsRow'
import { ContentGrid } from '@/components/home/ContentGrid'
import { CTABanner }   from '@/components/home/CTABanner'

export const metadata = {
  title: 'GEOFERA — Connecting Geoscience, Formation Evaluation, Drilling & Upstream Professionals',
  description: 'GEOFERA is the regional professional community for subsurface professionals. Join 3,000+ members across 15+ countries.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsRow />
        <ContentGrid />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
