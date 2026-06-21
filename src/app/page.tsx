// src/app/page.tsx
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { StatsSection } from '@/components/home/StatsSection'
import { Disciplines } from '@/components/home/Disciplines'
import { JoinCTA } from '@/components/home/JoinCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Disciplines />
        <JoinCTA />
      </main>
      <Footer />
    </>
  )
}
