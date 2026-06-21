// src/app/page.tsx — exact mockup recreation
import { Navbar }       from '@/components/layout/Navbar'
import { Footer }       from '@/components/layout/Footer'
import { Hero }         from '@/components/home/Hero'
import { GlanceMetrics }from '@/components/home/GlanceMetrics'
import { ContentGrid }  from '@/components/home/ContentGrid'
import { CTABanner }    from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GlanceMetrics />
        <ContentGrid />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
