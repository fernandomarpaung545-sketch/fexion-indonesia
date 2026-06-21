'use client'
// Metrics section — 4 columns with icon + number + label + sub
import { motion } from 'framer-motion'

const metrics = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A2342" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    value: '3,000+', label: 'Members',
    sub: 'Growing community\nof professionals',
    color: '#0A2342', iconBg: '#f1f5f9',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    value: '150+', label: 'Technical Sessions',
    sub: 'Knowledge sharing\nand learning',
    color: '#22C55E', iconBg: '#f0fdf4',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
      </svg>
    ),
    value: '80+', label: 'Events Hosted',
    sub: 'Webinars, workshops\nand conferences',
    color: '#F97316', iconBg: '#fff7ed',
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    value: '15+', label: 'Countries Represented',
    sub: 'Regional reach,\nglobal impact',
    color: '#7c3aed', iconBg: '#f5f3ff',
  },
]

export function GlanceMetrics() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {metrics.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.125rem',
                padding: '1.875rem 1.5rem',
                borderRight: i < 3 ? '1px solid #f1f5f9' : 'none',
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: m.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(0,0,0,0.05)',
              }}>
                {m.icon}
              </div>
              {/* Text */}
              <div>
                <div style={{ fontWeight: 900, fontSize: '1.875rem', lineHeight: 1, color: m.color }}>
                  {m.value}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111827', marginTop: 2 }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.45, marginTop: 2, whiteSpace: 'pre-line' }}>
                  {m.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
