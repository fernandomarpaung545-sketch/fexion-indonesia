'use client'
// Stats Row — 4 metrics matching mockup exactly
import { motion } from 'framer-motion'

const stats = [
  {
    value: '3,000+', label: 'Members',
    sub: 'Growing community\nof professionals',
    color: '#0A2342', iconBg: '#E8EDF5',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A2342" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    value: '150+', label: 'Technical Sessions',
    sub: 'Knowledge sharing\nand learning',
    color: '#22C55E', iconBg: '#DCFCE7',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    value: '80+', label: 'Events Hosted',
    sub: 'Webinars, workshops\nand conferences',
    color: '#F97316', iconBg: '#FFEDD5',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
      </svg>
    ),
  },
  {
    value: '15+', label: 'Countries Represented',
    sub: 'Regional reach,\nglobal impact',
    color: '#7C3AED', iconBg: '#EDE9FE',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
]

export function StatsRow() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.125rem',
                padding: '2rem 1.5rem',
                borderRight: i < 3 ? '1px solid #F1F5F9' : 'none',
              }}>
              {/* Icon circle */}
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: s.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {s.icon}
              </div>
              {/* Text */}
              <div>
                <div style={{ fontWeight: 900, fontSize: '1.875rem', lineHeight: 1, color: s.color }}>
                  {s.value}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111827', marginTop: 3 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', lineHeight: 1.45, marginTop: 2, whiteSpace: 'pre-line' }}>
                  {s.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
