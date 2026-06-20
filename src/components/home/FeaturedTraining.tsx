'use client'
// src/components/home/FeaturedTraining.tsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { TrainingCard } from '@/components/training/TrainingCard'
import { featuredTrainings } from '@/data/dummy'

export function FeaturedTraining() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-[var(--bg-secondary)] dark:bg-navy-950">
      <div className="container-tight">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-eyebrow">Technical Training</span>
            <h2 className="section-title mb-2">Upcoming Trainings</h2>
            <p className="section-subtitle text-base">
              Industry-led programs designed by and for Indonesia's subsurface community.
            </p>
          </div>
          <Link
            href="/training"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-crimson-500 hover:text-crimson-400 transition-colors group"
          >
            All Trainings
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredTrainings.map((training, i) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TrainingCard training={training} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
