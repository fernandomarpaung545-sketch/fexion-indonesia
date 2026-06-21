'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const disciplines = [
  {
    id: 'geo',
    color: '#22C55E', bg: '#f0fdf4', border: '#bbf7d0',
    title: 'Geoscience',
    tagline: 'Interpret the Earth. Unlock Opportunities.',
    desc: 'From wellsite geology to basin modelling, seismic interpretation, and structural mapping — bridging surface and subsurface knowledge.',
    topics: ['Wellsite Geology', 'Mud Logging', 'Geosteering', 'Structural Geology', 'Basin Modelling', 'Seismic Interpretation'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    id: 'fe',
    color: '#2563EB', bg: '#eff6ff', border: '#bfdbfe',
    title: 'Formation Evaluation',
    tagline: 'Transform Data into Reservoir Insight.',
    desc: 'From open-hole logging to cased-hole evaluation, petrophysical analysis, and reservoir characterization for better field decisions.',
    topics: ['Petrophysics', 'Log Analysis', 'Core Analysis', 'Reservoir Char.', 'Cased Hole FE', 'Uncertainty Quant.'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="3" width="4" height="18" rx="1"/>
        <rect x="10" y="8" width="4" height="13" rx="1"/>
        <rect x="17" y="5" width="4" height="16" rx="1"/>
      </svg>
    ),
  },
  {
    id: 'drill',
    color: '#F97316', bg: '#fff7ed', border: '#fed7aa',
    title: 'Drilling',
    tagline: 'Deliver Wells Safely and Efficiently.',
    desc: 'Well engineering, directional drilling, geosteering, MPD/UBD, completion design — from planning to production.',
    topics: ['Well Engineering', 'Directional Drilling', 'Geosteering', 'Well Control', 'MPD / UBD', 'Completion Design'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2L8 6h8l-4-4z"/>
        <rect x="10" y="6" width="4" height="12"/>
        <path d="M8 18h8l2 4H6l2-4z"/>
      </svg>
    ),
  },
  {
    id: 'upstream',
    color: '#7C3AED', bg: '#f5f3ff', border: '#ddd6fe',
    title: 'Upstream Integration',
    tagline: 'Connect Disciplines. Create Value.',
    desc: 'Reservoir modelling, production optimisation, integrated workflows, field development planning, and energy transition strategies.',
    topics: ['Reservoir Modelling', 'Production Optim.', 'Field Development', 'IOR / EOR', 'CCS Strategy', 'Digital Workflows'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
        <line x1="12" y1="7" x2="5" y2="17"/>
        <line x1="12" y1="7" x2="19" y2="17"/>
        <line x1="5" y1="19" x2="19" y2="19"/>
      </svg>
    ),
  },
]

export function TechnicalEcosystem() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="section-py bg-white">
      <div className="container-geo">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="eyebrow block mb-4">Our Disciplines</span>
          <h2 className="font-display font-black text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
            Technical Ecosystem
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            Four interconnected disciplines forming the GEOFERA technical community.
          </p>
        </motion.div>

        <div className="grid-responsive-4">
          {disciplines.map((d, i) => (
            <motion.div key={d.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: active === d.id ? d.bg : '#fff',
                border: `1.5px solid ${active === d.id ? d.border : '#e5e7eb'}`,
                boxShadow: active === d.id
                  ? `0 8px 32px ${d.color}18, 0 2px 8px rgba(0,0,0,0.06)`
                  : '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04)',
              }}
              onClick={() => setActive(active === d.id ? null : d.id)}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all"
                style={{ background: d.bg, boxShadow: `0 4px 16px ${d.color}20` }}>
                {d.icon}
              </div>

              <h3 className="font-display font-black text-base mb-1.5" style={{ color: d.color }}>
                {d.title}
              </h3>
              <p className="text-xs font-semibold text-gray-500 mb-3 italic">{d.tagline}</p>

              <AnimatePresence>
                {active === d.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{d.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {d.topics.map(t => (
                        <span key={t} className="badge"
                          style={{ background: d.bg, color: d.color }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {active !== d.id && (
                <p className="text-xs text-gray-400 leading-relaxed">{d.desc.slice(0, 80)}…</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
