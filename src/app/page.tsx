// src/app/page.tsx
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { StatsSection } from '@/components/home/StatsSection'
import { Disciplines } from '@/components/home/Disciplines'
import { FeaturedTraining } from '@/components/home/FeaturedTraining'
import { UpcomingEventsSection } from '@/components/home/UpcomingEventsSection'
import { AboutSection } from '@/components/home/AboutSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { LatestArticles } from '@/components/home/LatestArticles'
import { JoinCTA } from '@/components/home/JoinCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <Disciplines />
        <FeaturedTraining />
        <UpcomingEventsSection />
        <TestimonialsSection />
        <LatestArticles />
        <JoinCTA />
      </main>
      <Footer />
    </>
  )
}
