'use client'
import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    color: '#22C55E', bg: '#f0fdf4',
    title: 'Knowledge Sharing',
    desc: 'Access technical articles, webinars, case studies, and curated learning resources from subsurface professionals across the region.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
        <line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/>
        <line x1="5" y1="19" x2="19" y2="19"/>
      </svg>
    ),
    color: '#2563EB', bg: '#eff6ff',
    title: 'Professional Network',
    desc: 'Connect with geoscientists, formation evaluation specialists, drilling engineers, and upstream professionals across disciplines and regions.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    color: '#F97316', bg: '#fff7ed',
    title: 'Professional Development',
    desc: 'Build technical expertise and leadership capabilities through structured training programs, CPD tracking, and certification pathways.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: '#7C3AED', bg: '#f5f3ff',
    title: 'Industry Collaboration',
    desc: 'Share ideas, best practices, and innovations across operators, service companies, universities, and government bodies in the energy sector.',
  },
]

export function WhyGeofera() {
  return (
    <section className="py-14 sm:py-20" style={{ background: 'var(--geo-surface)' }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="eyebrow block mb-4">Why Join Us</span>
          <h2 className="font-display font-black text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
            Why GEOFERA?
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            The region&apos;s most trusted professional platform for subsurface practitioners to grow, connect, and contribute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-7 group"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: f.bg }}>
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-3"
                style={{ fontSize: '1.0625rem', color: f.color }}>
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
