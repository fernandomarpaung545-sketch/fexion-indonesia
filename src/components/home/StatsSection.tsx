'use client'
// src/components/home/StatsSection.tsx

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { communityStats } from '@/data/dummy'

export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-14 bg-navy-950 border-y border-white/[0.04]">
      <div className="container-tight">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {communityStats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-navy-950 px-8 py-10 text-center group hover:bg-navy-900 transition-colors duration-300"
            >
              <div className="font-display font-black text-4xl md:text-5xl text-white mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} delay={i * 0.15} separator="," />
                ) : (
                  '0'
                )}
                <span className="text-crimson-500">{stat.suffix}</span>
              </div>
              <div className="text-sm text-white/40 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
