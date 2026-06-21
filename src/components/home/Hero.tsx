'use client'
// src/components/home/Hero.tsx

import Link from 'next/link'
import { ArrowRight, Play, Globe, BarChart2, Drill, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const disciplines = [
  {
    icon: Globe,
    color: 'bg-green-600',
    title: 'GEOSCIENCE',
    subtitle: 'Understand the Earth.\nUncover Possibilities.',
  },
  {
    icon: BarChart2,
    color: 'bg-blue-600',
    title: 'FORMATION\nEVALUATION',
    subtitle: 'Quantify Reservoir.\nReduce Uncertainty.',
  },
  {
    icon: Drill,
    color: 'bg-orange-500',
    title: 'DRILLING',
    subtitle: 'Drill Smarter.\nOperate Safely.',
  },
  {
    icon: TrendingUp,
    color: 'bg-navy-800',
    title: 'UPSTREAM',
    subtitle: 'Optimize Performance.\nCreate Value.',
  },
]

const imageCards = [
  {
    label: 'Geoscience',
    color: 'from-green-900/80',
    accent: 'bg-green-500',
    img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=400&h=300&fit=crop&q=80',
  },
  {
    label: 'Formation Evaluation',
    color: 'from-blue-900/80',
    accent: 'bg-blue-500',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80',
  },
  {
    label: 'Drilling',
    color: 'from-orange-900/80',
    accent: 'bg-orange-500',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&q=80',
  },
  {
    label: 'Upstream',
    color: 'from-navy-900/80',
    accent: 'bg-indigo-500',
    img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=300&fit=crop&q=80',
  },
]

const stats = [
  { icon: '👥', value: '2,800+', label: 'Members', color: 'text-green-600' },
  { icon: '🎓', value: '120+',   label: 'Trainings', color: 'text-blue-600' },
  { icon: '📅', value: '60+',    label: 'Events Hosted', color: 'text-orange-500' },
  { icon: '🌐', value: 'Regional', label: 'Community', color: 'text-navy-800' },
]

export function Hero() {
  return (
    <section className="bg-white min-h-screen flex flex-col">

      {/* ── MAIN HERO ─────────────────────────────────────────────── */}
      <div className="flex-1 relative overflow-hidden">

        {/* Hero background image — right side */}
        <div className="absolute inset-0 left-[38%]">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=900&fit=crop&q=85"
            alt="Drilling Rig"
            className="w-full h-full object-cover"
          />
          {/* Geological cross-section overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5">
            <img
              src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200&h=400&fit=crop&q=80"
              alt="Geological layers"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          {/* Gradient blend left edge */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent" />
        </div>

        <div className="relative container-tight pt-10 pb-6">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[560px]">

            {/* ── LEFT: Text ───────────────────── */}
            <div className="lg:col-span-5 z-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-black text-4xl md:text-5xl leading-[1.1] text-navy-950 mb-5"
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
                className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm"
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
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Join the Community
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Explore Events
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <Play size={12} className="ml-0.5 fill-current" />
                  </div>
                  View Upcoming Events
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT: Discipline List ──────── */}
            <div className="lg:col-span-4 lg:col-start-9 z-10 space-y-4">
              {disciplines.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md"
                >
                  <div className={`w-12 h-12 rounded-full ${d.color} flex items-center justify-center flex-shrink-0`}>
                    <d.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className={`font-bold text-sm leading-tight ${d.color.replace('bg-', 'text-')}`}>
                      {d.title}
                    </div>
                    <div className="text-xs text-gray-500 leading-snug whitespace-pre-line">{d.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ── IMAGE CARDS ROW ─────────────────────────────────────── */}
        <div className="relative z-10 container-tight pb-6">
          <div className="grid grid-cols-4 gap-3">
            {imageCards.map((card, i) => (
              <motion.div
                key={card.label}
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
                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} to-transparent`} />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className={`w-6 h-0.5 ${card.accent} mb-1.5`} />
                  <div className="text-white font-bold text-sm leading-tight">{card.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS BAR ───────────────────────────────────────────────── */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container-tight py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl ${stat.color}`}>
                  {stat.icon}
                </div>
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
