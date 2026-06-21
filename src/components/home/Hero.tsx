'use client'
// src/components/home/Hero.tsx

import Link from 'next/link'
import { ArrowRight, Play, Globe, BarChart2, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const disciplines = [
  {
    icon: Globe,
    colorIcon: 'bg-green-600',
    colorText: 'text-green-600',
    title: 'GEOSCIENCE',
    subtitle: 'Understand the Earth.\nUncover Possibilities.',
  },
  {
    icon: BarChart2,
    colorIcon: 'bg-blue-600',
    colorText: 'text-blue-600',
    title: 'FORMATION\nEVALUATION',
    subtitle: 'Quantify Reservoir.\nReduce Uncertainty.',
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4M4 12h16"/>
      </svg>
    ),
    colorIcon: 'bg-orange-500',
    colorText: 'text-orange-500',
    title: 'DRILLING',
    subtitle: 'Drill Smarter.\nOperate Safely.',
  },
  {
    icon: TrendingUp,
    colorIcon: 'bg-[#1a2e4a]',
    colorText: 'text-[#1a2e4a]',
    title: 'UPSTREAM',
    subtitle: 'Optimize Performance.\nCreate Value.',
  },
]

const imageCards = [
  {
    label: 'Geoscience',
    accent: 'bg-green-500',
    img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=400&h=300&fit=crop&q=80',
  },
  {
    label: 'Formation\nEvaluation',
    accent: 'bg-blue-500',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80',
  },
  {
    label: 'Drilling',
    accent: 'bg-orange-500',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&q=80',
  },
  {
    label: 'Upstream',
    accent: 'bg-indigo-500',
    img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=300&fit=crop&q=80',
  },
]

const stats = [
  { emoji: '👥', value: '2,800+',   label: 'Members',       color: 'text-green-600' },
  { emoji: '🎓', value: '120+',     label: 'Trainings',     color: 'text-blue-600'  },
  { emoji: '📅', value: '60+',      label: 'Events Hosted', color: 'text-orange-500'},
  { emoji: '🌐', value: 'Regional', label: 'Community',     color: 'text-[#1a2e4a]' },
]

export function Hero() {
  return (
    <section className="bg-white flex flex-col min-h-screen">

      {/* ── HERO AREA ───────────────────────────────────────────── */}
      <div className="relative flex-1 overflow-hidden">

        {/* FULL background image — covers entire hero */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Left white fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" style={{ width: '55%' }} />
        {/* Bottom fade into white (for cards section) */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />

        {/* ── CONTENT ─────────────────────────────────────────── */}
        <div className="relative container-tight pt-10 pb-4">
          <div className="grid lg:grid-cols-12 gap-6 items-start min-h-[500px]">

            {/* LEFT: Headline + CTA */}
            <div className="lg:col-span-5 pt-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-black text-4xl md:text-[2.75rem] leading-[1.1] text-[#0d1b2e] mb-5"
              >
                Connecting{' '}
                <span className="text-green-600">Geoscience,</span>
                <br />
                <span className="text-blue-700">Operations &amp;</span>
                <br />
                <span className="text-orange-500">Formation Evaluation</span>
                <br />
                Professionals
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-xs"
              >
                The leading community for subsurface professionals to share knowledge, collaborate, and grow together across the upstream industry.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm"
                >
                  Join the Community <ArrowRight size={15} />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-700 font-semibold px-5 py-3 rounded-lg transition-colors text-sm"
                >
                  Explore Events
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <Play size={11} className="ml-0.5 fill-current" />
                  </div>
                  View Upcoming Events
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: Discipline cards */}
            <div className="lg:col-span-3 lg:col-start-10 pt-6 space-y-3">
              {disciplines.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2.5 shadow-md"
                >
                  <div className={`w-11 h-11 rounded-full ${d.colorIcon} flex items-center justify-center flex-shrink-0`}>
                    {typeof d.icon === 'function' && d.icon.length === 0
                      ? <d.icon />
                      : <d.icon size={20} className="text-white" />
                    }
                  </div>
                  <div>
                    <div className={`font-bold text-xs leading-tight whitespace-pre-line ${d.colorText}`}>{d.title}</div>
                    <div className="text-[11px] text-gray-400 leading-snug whitespace-pre-line">{d.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ── IMAGE CARDS ─────────────────────────────────────── */}
        <div className="relative z-10 container-tight pb-8">
          <div className="grid grid-cols-4 gap-3">
            {imageCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="relative rounded-xl overflow-hidden h-36 cursor-pointer group"
              >
                <img
                  src={card.img}
                  alt={card.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className={`w-6 h-0.5 ${card.accent} mb-1.5`} />
                  <div className="text-white font-bold text-sm leading-tight whitespace-pre-line">{card.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ── STATS BAR ───────────────────────────────────────────── */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container-tight py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-center gap-4 px-6 first:pl-0"
              >
                <span className="text-3xl">{stat.emoji}</span>
                <div>
                  <div className={`font-black text-2xl leading-none ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
