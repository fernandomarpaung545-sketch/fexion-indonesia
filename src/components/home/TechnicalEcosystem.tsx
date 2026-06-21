'use client'
import { motion } from 'framer-motion'

const pillars = [
  {
    color: '#22C55E', bg: '#f0fdf4', border: '#bbf7d0',
    title: 'Geoscience', sub: 'Interpret the Earth.\nUnlock Opportunities.',
    topics: ['Wellsite Geology', 'Mud Logging', 'Geosteering', 'Structural Mapping'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    color: '#2563EB', bg: '#eff6ff', border: '#bfdbfe',
    title: 'Formation Evaluation', sub: 'Transform Data into\nReservoir Insight.',
    topics: ['Petrophysics', 'Log Analysis', 'Core Analysis', 'Reservoir Characterization'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="4" height="18" rx="1"/>
        <rect x="10" y="8" width="4" height="13" rx="1"/>
        <rect x="17" y="5" width="4" height="16" rx="1"/>
      </svg>
    ),
  },
  {
    color: '#F97316', bg: '#fff7ed', border: '#fed7aa',
    title: 'Drilling', sub: 'Deliver Wells Safely\nand Efficiently.',
    topics: ['Well Engineering', 'Hydraulics', 'MPD/UBD', 'Completion Design'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2L8 6h8l-4-4z"/>
        <rect x="10" y="6" width="4" height="12"/>
        <path d="M8 18h8l2 4H6l2-4z"/>
      </svg>
    ),
  },
  {
    color: '#0A2342', bg: '#f1f5f9', border: '#cbd5e1',
    title: 'Upstream Integration', sub: 'Connect Disciplines.\nCreate Value.',
    topics: ['Reservoir Modelling', 'Production Optimisation', 'CCS / Energy Transition', 'Field Development'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A2342" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
        <line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/><line x1="5" y1="19" x2="19" y2="19"/>
      </svg>
    ),
  },
]

export function TechnicalEcosystem() {
  return (
    <section className="bg-white py-20">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs font-bold tracking-widest uppercase text-[#F97316] block mb-3">
            Our Disciplines
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-black text-[#0A2342]"
            style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}>
            Technical Ecosystem
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: p.bg, border: `1.5px solid ${p.border}` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                {p.icon}
              </div>
              <h3 className="font-display font-black text-base mb-1 whitespace-pre-line" style={{ color: p.color }}>{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4 whitespace-pre-line">{p.sub}</p>
              <ul className="space-y-1.5">
                {p.topics.map((t, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }}/>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
