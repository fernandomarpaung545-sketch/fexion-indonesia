'use client'
import { motion } from 'framer-motion'

const pillars = [
  { color: '#22C55E', bg: '#f0fdf4', title: 'Geoscience',           sub: 'Interpret the Earth.\nUnlock Opportunities.',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { color: '#2563EB', bg: '#eff6ff', title: 'Formation Evaluation', sub: 'Transform Data into\nReservoir Insight.',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="3" width="4" height="18" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/><rect x="17" y="5" width="4" height="16" rx="1"/></svg> },
  { color: '#F97316', bg: '#fff7ed', title: 'Drilling',             sub: 'Deliver Wells Safely\nand Efficiently.',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><path d="M12 2L8 6h8l-4-4z"/><rect x="10" y="6" width="4" height="12"/><path d="M8 18h8l2 4H6l2-4z"/></svg> },
  { color: '#0A2342', bg: '#f1f5f9', title: 'Upstream Integration', sub: 'Connect Disciplines.\nCreate Value.',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A2342" strokeWidth="2"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/><line x1="5" y1="19" x2="19" y2="19"/></svg> },
]

export function TechnicalEcosystem() {
  return (
    <section style={{ background: '#fff', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ color: '#F97316', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Our Disciplines
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', color: '#0A2342' }}>
            Technical Ecosystem
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
          {pillars.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ borderRadius: 16, padding: '2rem', background: p.bg, border: `1px solid ${p.color}22`, textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', boxShadow: `0 4px 16px ${p.color}30` }}>
                {p.svg}
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1rem', color: p.color, marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.8125rem', color: '#6b7280', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{p.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
