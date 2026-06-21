'use client'
// src/components/home/JoinCTA.tsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Calendar } from 'lucide-react'

const benefits = [
  { icon: Users, label: 'Join 2,847+ professionals' },
  { icon: BookOpen, label: 'Access 100+ technical resources' },
  { icon: Calendar, label: 'Priority access to events & trainings' },
]

export function JoinCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-crimson-500/5 via-transparent to-gold-500/5" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-crimson-500/8 blur-[80px] rounded-full" />

      <div className="relative container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card-dark rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-glow" />
            <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Membership Open</span>
          </div>

          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-5">
            Ready to Join<br />
            <span className="text-gradient-crimson">GEOFERA Indonesia?</span>
          </h2>

          <p className="text-lg text-white/55 mb-10 leading-relaxed">
            Become part of Indonesia's most active formation evaluation and geoscience community. Free membership for individual professionals.
          </p>

          {/* Benefits row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {benefits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/50">
                <Icon size={15} className="text-crimson-500" />
                {label}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="btn-primary text-base px-8 py-4 group">
              Create Free Account
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="btn-secondary text-base px-8 py-4">
              Learn More
            </Link>
          </div>

          {/* Fine print */}
          <p className="text-xs text-white/25 mt-6">
            Free for individual professionals. Corporate membership available for organizations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
