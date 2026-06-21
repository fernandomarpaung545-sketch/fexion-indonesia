'use client'
// src/components/home/AboutSection.tsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

const benefits = [
  'Access to Indonesia\'s largest Formation Evaluation professional network',
  'World-class technical training programs with CPD points',
  'Annual conference and monthly webinar series',
  'Exclusive knowledge library with regional basin case studies',
  'Direct connections with operators, service companies, and academia',
  'Recognition through the GEOFERA Technical Excellence Awards',
]

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="section-padding bg-[var(--bg-primary)]">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 aspect-[4/3] shadow-glass-lg">
              {/* Background decoration */}
              <div className="absolute inset-0 hero-grid opacity-50" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-navy-950 to-transparent" />

              {/* Seismic log decoration */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated wireline log tracks */}
                <line x1="80" y1="0" x2="80" y2="300" stroke="#E63946" strokeWidth="0.5" />
                <line x1="160" y1="0" x2="160" y2="300" stroke="#E63946" strokeWidth="0.5" />
                <line x1="240" y1="0" x2="240" y2="300" stroke="#E63946" strokeWidth="0.5" />
                <line x1="320" y1="0" x2="320" y2="300" stroke="#E63946" strokeWidth="0.5" />
                <path d="M80,20 Q100,60 80,100 Q60,140 80,180 Q100,220 80,260" stroke="#D4A017" fill="none" strokeWidth="1.5" />
                <path d="M160,30 Q180,80 160,120 Q140,160 160,200 Q180,240 160,280" stroke="#E63946" fill="none" strokeWidth="1.5" />
                <path d="M240,10 Q260,50 240,90 Q220,130 240,170 Q260,210 240,250" stroke="#D4A017" fill="none" strokeWidth="1.5" />
                <path d="M320,25 Q340,70 320,110 Q300,150 320,190 Q340,230 320,270" stroke="#E63946" fill="none" strokeWidth="1.5" />
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <img src="/geofera-logo.png" alt="GEOFERA" className="h-48 w-auto object-contain brightness-0 invert mb-2" />
              </div>

              {/* Corner badges */}
              <div className="absolute top-4 right-4 glass-card-dark rounded-xl px-3 py-2 text-center">
                <div className="font-bold text-xl text-white">2026</div>
                <div className="text-[10px] text-white/40">Founded</div>
              </div>
              <div className="absolute bottom-4 left-4 glass-card-dark rounded-xl px-3 py-2 text-center">
                <div className="font-bold text-xl text-white">34</div>
                <div className="text-[10px] text-white/40">Provinces</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-eyebrow">About GEOFERA</span>
            <h2 className="section-title">
              Connecting the Community Across the Region
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
              Established in 2026, GEOFERA is a professional platform dedicated to advancing subsurface excellence through knowledge sharing, technical collaboration, and professional development. We bring together geoscientists, formation evaluation specialists, wellsite geologists, reservoir professionals, and industry leaders to exchange insights, foster innovation, and build meaningful connections.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              By combining regional experience with global best practices, GEOFERA helps professionals and organizations unlock new opportunities and drive sustainable growth in the energy industry.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <CheckCircle size={16} className="text-crimson-500 flex-shrink-0 mt-0.5" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <Link href="/about" className="btn-outline group">
              Learn More About GEOFERA
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
