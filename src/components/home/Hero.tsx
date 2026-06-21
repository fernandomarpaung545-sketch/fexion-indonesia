'use client'
// src/components/home/Hero.tsx

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Users, BookOpen, Calendar, TrendingUp } from 'lucide-react'

const floatingBadges = [
  { icon: Users,    label: '2,847+ Members',      delay: 0,    position: 'top-24 left-[8%]',  color: 'bg-crimson-500' },
  { icon: BookOpen, label: '124 Trainings',        delay: 0.4,  position: 'top-36 right-[8%]', color: 'bg-gold-500' },
  { icon: Calendar, label: '67 Events Hosted',     delay: 0.8,  position: 'bottom-36 left-[6%]', color: 'bg-blue-500' },
  { icon: TrendingUp, label: 'Indonesia\'s #1 FE Community', delay: 1.2, position: 'bottom-28 right-[6%]', color: 'bg-emerald-500' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 hero-grid opacity-100" />

        {/* Radial gradient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-navy-700/20 blur-[120px]" />

        {/* Crimson accent top-left */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-crimson-500/10 blur-[100px]" />

        {/* Gold accent bottom-right */}
        <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-gold-500/8 blur-[80px]" />

        {/* Subtle seismic line decoration */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-[0.04]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 L80,60 L100,20 L120,100 L140,40 L160,80 L180,50 L200,70 L220,30 L240,90 L260,55 L280,65 L300,60 L400,60 L420,25 L440,95 L460,45 L480,75 L500,55 L540,60 L560,35 L580,85 L600,50 L620,70 L640,40 L660,80 L680,60 L800,60 L820,30 L840,90 L860,45 L880,75 L900,55 L920,65 L940,35 L960,85 L980,50 L1000,70 L1020,60 L1200,60 L1220,25 L1240,95 L1260,40 L1280,80 L1300,55 L1320,65 L1340,35 L1360,85 L1380,60 L1440,60"
            fill="none"
            stroke="#E63946"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Floating Badges — desktop only */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: badge.delay + 1.2, duration: 0.5, ease: 'backOut' }}
          className={`absolute ${badge.position} hidden xl:flex items-center gap-2.5 glass-card-dark rounded-full px-4 py-2.5 shadow-glass animate-float`}
          style={{ animationDelay: `${badge.delay}s` }}
        >
          <div className={`w-6 h-6 rounded-full ${badge.color} flex items-center justify-center`}>
            <badge.icon size={12} className="text-white" />
          </div>
          <span className="text-xs font-semibold text-white/80 whitespace-nowrap">{badge.label}</span>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative container-tight pt-28 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card-dark rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-crimson-500 animate-glow" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">
              Indonesia's Premier Geoscience Community
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
          >
            Connecting{' '}
            <span className="text-gradient-crimson">Geoscience,</span>
            <br />
            Operations &{' '}
            <span className="text-gradient-gold">Formation</span>
            <br />
            Evaluation, and Drilling Professionals
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-white/55 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            GEOFERA — Geology Operation & Formation Evaluation Indonesia. Indonesia's community for Geology, Formation Evaluation, Petrophysics & Subsurface Integration.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/register" className="btn-primary text-base px-8 py-4 group">
              Join the Community
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/training" className="btn-secondary text-base px-8 py-4">
              Explore Training
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors group"
            >
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all">
                <Play size={14} className="ml-0.5 fill-current" />
              </div>
              View Upcoming Events
            </Link>
          </motion.div>

          {/* Discipline Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {[
              'Formation Evaluation',
              'Petrophysics',
              'Wellsite Geology',
              'Mud Logging',
              'Geosteering',
              'Reservoir Geology',
              'CCS / Energy Transition',
              'Drilling Integration',
            ].map((chip, i) => (
              <span
                key={chip}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-white/50 hover:text-white/80 hover:bg-white/10 hover:border-white/15 cursor-default transition-all duration-200"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-crimson-500"
          />
        </div>
        <span className="text-[10px] text-white/25 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  )
}
