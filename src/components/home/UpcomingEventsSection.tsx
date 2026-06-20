'use client'
// src/components/home/UpcomingEventsSection.tsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { EventCard } from '@/components/events/EventCard'
import { upcomingEvents } from '@/data/dummy'

export function UpcomingEventsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featured, ...rest] = upcomingEvents

  return (
    <section ref={ref} className="section-padding bg-[var(--bg-primary)]">
      <div className="container-tight">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-eyebrow">Events</span>
            <h2 className="section-title mb-2">Upcoming Events</h2>
            <p className="section-subtitle text-base">
              Conferences, webinars, and workshops connecting the Indonesian geoscience community.
            </p>
          </div>
          <Link
            href="/events"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-crimson-500 hover:text-crimson-400 transition-colors group"
          >
            All Events
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured large card */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <EventCard event={featured} featured />
            </motion.div>
          )}

          {/* Smaller cards */}
          <div className="flex flex-col gap-4">
            {rest.slice(0, 2).map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
