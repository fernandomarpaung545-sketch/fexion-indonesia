'use client'
// src/components/home/PartnersSection.tsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { partners } from '@/data/dummy'

export function PartnersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const platinum = partners.filter(p => p.tier === 'PLATINUM')
  const gold = partners.filter(p => p.tier === 'GOLD')
  const others = partners.filter(p => !['PLATINUM', 'GOLD'].includes(p.tier))

  return (
    <section ref={ref} className="section-padding bg-[var(--bg-primary)]">
      <div className="container-tight">
        <div className="text-center mb-12">
          <span className="section-eyebrow">Industry Partners</span>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle mx-auto text-center">
            GOFEW partners with operators, service companies, and institutions shaping Indonesia's energy future.
          </p>
        </div>

        {/* Platinum */}
        {platinum.length > 0 && (
          <div className="mb-10">
            <div className="text-center mb-5">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Platinum Partners</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {platinum.map((partner, i) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="h-12 px-6 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <img src={partner.logo} alt={partner.name} className="h-full w-auto object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Gold + Others */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[...gold, ...others].map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.07 }}
              className="h-8 px-4 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-80 transition-all duration-300"
            >
              <img src={partner.logo} alt={partner.name} className="h-full w-auto object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
