'use client'
import { motion } from 'framer-motion'

const reasons = [
  { color: '#22C55E', emoji: '🌏', title: 'Regional Network',       desc: 'Connect with 3,000+ subsurface professionals across 15+ countries in Southeast Asia and beyond.' },
  { color: '#2563EB', emoji: '🎓', title: 'Technical Excellence',   desc: '150+ curated training sessions, workshops and technical talks led by industry practitioners.' },
  { color: '#F97316', emoji: '🤝', title: 'Industry Collaboration', desc: 'Bridge operators, service companies, universities, and government bodies under one platform.' },
  { color: '#0A2342', emoji: '📈', title: 'Career Advancement',     desc: 'Exclusive job boards, mentorship programs, CPD tracking, and professional certification pathways.' },
  { color: '#7c3aed', emoji: '💡', title: 'Knowledge Repository',   desc: 'Peer-reviewed technical papers, field case studies, and real-time insights from the region.' },
  { color: '#0891b2', emoji: '🏆', title: 'Industry Recognition',   desc: 'Annual GEOFERA Excellence Awards celebrating outstanding contributions to subsurface science.' },
]

export function WhyGeofera() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs font-bold tracking-widest uppercase text-[#F97316] block mb-3"
          >
            Why Join Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-black text-[#0A2342] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}
          >
            Why GEOFERA?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto"
          >
            The region&apos;s most trusted platform for subsurface professionals to grow, connect, and contribute.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{r.emoji}</div>
              <h3 className="font-bold text-base mb-2 group-hover:text-[#0A2342] transition-colors" style={{ color: r.color }}>{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
