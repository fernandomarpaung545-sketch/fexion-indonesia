'use client'
// src/components/home/Hero.tsx

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Users, BookOpen, Calendar, Globe, Globe2, FlaskConical, Drill, TrendingUp } from 'lucide-react'

const disciplines = [
  {
    icon: Globe2,
    color: 'bg-emerald-600',
    label: 'GEOSCIENCE',
    desc: 'Understand the Earth. Uncover Possibilities.',
  },
  {
    icon: FlaskConical,
    color: 'bg-blue-600',
    label: 'FORMATION EVALUATION',
    desc: 'Quantify Reservoir. Reduce Uncertainty.',
  },
  {
    icon: Drill,
    color: 'bg-orange-500',
    label: 'DRILLING',
    desc: 'Drill Smarter. Operate Safely.',
  },
  {
    icon: TrendingUp,
    color: 'bg-navy-800',
    label: 'UPSTREAM',
    desc: 'Optimize Performance. Create Value.',
  },
]

const imageCards = [
  { label: 'Geoscience',           color: 'from-emerald-800/80',  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=280&fit=crop&q=80' },
  { label: 'Formation Evaluation', color: 'from-blue-900/80',     img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=280&fit=crop&q=80' },
  { label: 'Drilling',             color: 'from-orange-900/80',   img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=280&fit=crop&q=80' },
  { label: 'Upstream',             color: 'from-slate-900/80',    img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=280&fit=crop&q=80' },
]

const stats = [
  { icon: Users,    value: '2,800+',    label: 'Members',       color: 'text-emerald-600' },
  { icon: BookOpen, value: '120+',      label: 'Trainings',     color: 'text-blue-600' },
  { icon: Calendar, value: '60+',       label: 'Events Hosted', color: 'text-orange-500' },
  { icon: Globe,    value: 'Regional',  label: 'Community',     color: 'text-navy-800' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">

      {/* ── MAIN CONTENT ── */}
      <div className="relative flex-1 flex items-center">

        {/* Background image — right half */}
        <div className="absolute inset-y-0 right-0 w-[55%] hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&h=900&fit=crop&q=85"
            alt="Offshore drilling rig"
            className="w-full h-full object-cover"
          />
          {/* wave overlay on left edge */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
          {/* bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        {/* ── LEFT CONTENT ── */}
        <div className="relative container-tight pt-32 pb-12 lg:pb-24 w-full">
          <div className="max-w-xl">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-black text-4xl md:text-5xl lg:text-[3.25rem] text-navy-950 leading-[1.1] mb-5"
            >
              Connecting{' '}
              <span className="text-emerald-600">Geoscience,</span>
              <br />
              <span className="text-blue-700">Operations &amp; Formation</span>
              <br />
              <span className="text-orange-500">Evaluation</span>{' '}
              Professionals
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 max-w-md"
            >
              The leading community for subsurface professionals to share knowledge, collaborate, and grow together across the upstream industry.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link href="/register" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Join the Community
                <ArrowRight size={16} />
              </Link>
              <Link href="/events" className="inline-flex items-center gap-2 border border-gray-300 hover:border-blue-700 text-gray-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors">
                Explore Events
              </Link>
              <Link href="/events" className="inline-flex items-center gap-2.5 text-sm font-medium text-gray-500 hover:text-blue-700 transition-colors">
                <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-700 transition-colors">
                  <Play size={13} className="ml-0.5 fill-current" />
                </div>
                View Upcoming Events
              </Link>
            </motion.div>

            {/* Image Cards row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-4 gap-2"
            >
              {imageCards.map((card, i) => (
                <div key={card.label} className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-md group cursor-default">
                  <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.color} to-transparent`} />
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <div className="text-white text-[10px] font-bold leading-tight">{card.label}</div>
                    <div className={`h-0.5 w-6 mt-1 rounded-full ${i === 0 ? 'bg-emerald-400' : i === 1 ? 'bg-blue-400' : i === 2 ? 'bg-orange-400' : 'bg-white/50'}`} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── DISCIPLINE PANEL — right side overlay ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 z-10"
        >
          {disciplines.map((d) => (
            <div key={d.label} className="flex items-center gap-3 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg w-64">
              <div className={`w-10 h-10 rounded-full ${d.color} flex items-center justify-center flex-shrink-0`}>
                <d.icon size={18} className="text-white" />
              </div>
              <div>
                <div className={`text-xs font-black tracking-wide ${d.color.replace('bg-', 'text-')}`}>{d.label}</div>
                <div className="text-[11px] text-gray-500 leading-snug mt-0.5">{d.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── STATS BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative bg-white border-t border-gray-100 shadow-sm"
      >
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="flex items-center gap-3 py-5 px-6">
                <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className={color} />
                </div>
                <div>
                  <div className={`font-black text-xl ${color}`}>{value}</div>
                  <div className="text-xs text-gray-400 font-medium">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  )
}
