'use client'
import { motion } from 'framer-motion'

const reasons = [
  { icon: '🌏', title: 'Regional Network', desc: 'Connect with 3,000+ subsurface professionals across 15+ countries in the region.' },
  { icon: '🎓', title: 'Technical Excellence', desc: '150+ curated training sessions, workshops and technical talks led by industry experts.' },
  { icon: '🤝', title: 'Industry Collaboration', desc: 'Bridge operators, service companies, universities and government bodies together.' },
  { icon: '📈', title: 'Career Growth', desc: 'Access exclusive job boards, mentorship programs and professional certification pathways.' },
  { icon: '💡', title: 'Knowledge Sharing', desc: 'Peer-reviewed technical papers, case studies and real-time field insights from practitioners.' },
  { icon: '🏆', title: 'Recognition', desc: 'Annual awards celebrating outstanding contributions to subsurface science and practice.' },
]

export function WhyGeofera() {
  return (
    <section style={{ background: '#F8FAFC', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ color: '#F97316', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Why Join Us
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', color: '#0A2342', marginBottom: '1rem' }}>
            Why GEOFERA?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
            The region's most trusted platform for subsurface professionals to grow, connect and contribute.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ background: '#fff', borderRadius: 16, padding: '1.75rem', border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{r.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#0A2342', marginBottom: '0.5rem' }}>{r.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.65 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
