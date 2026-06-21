'use client'
// src/components/home/Disciplines.tsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Layers, Activity, Map, TrendingUp, Navigation, Globe, Wind, Settings } from 'lucide-react'
import { disciplines } from '@/data/dummy'

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  activity: Activity,
  map: Map,
  'trending-up': TrendingUp,
  navigation: Navigation,
  globe: Globe,
  wind: Wind,
  settings: Settings,
}

export function Disciplines() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-[var(--bg-secondary)] dark:bg-navy-950">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow">Our Disciplines</span>
          <h2 className="section-title">Eight Technical Pillars</h2>
          <p className="section-subtitle mx-auto text-center">
            GEOFERA Indonesia covers the full spectrum of subsurface disciplines — from wellsite operations to reservoir characterization and energy transition.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {disciplines.map((discipline, i) => {
            const Icon = iconMap[discipline.icon] || Layers
            return (
              <motion.div
                key={discipline.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group card-base card-hover p-6 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${discipline.color}18` }}
                >
                  <Icon size={22} style={{ color: discipline.color }} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-[var(--text-primary)] mb-2 group-hover:text-crimson-500 transition-colors">
                  {discipline.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  {discipline.description}
                </p>

                {/* Members */}
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="w-5 h-5 rounded-full border border-[var(--bg-secondary)] flex items-center justify-center text-[8px] font-bold text-white"
                        style={{ backgroundColor: discipline.color }}
                      >
                        {String.fromCharCode(65 + j + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">{discipline.members.toLocaleString()} members</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
