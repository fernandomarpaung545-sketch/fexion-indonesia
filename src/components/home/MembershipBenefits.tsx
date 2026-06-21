'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const tiers = [
  { name: 'Associate', price: 'Free', color: '#22C55E', features: ['Community access', 'Newsletter', 'Public webinars', 'Member directory'] },
  { name: 'Professional', price: 'USD 99/yr', color: '#2563EB', featured: true, features: ['All Associate benefits', 'Technical library', 'Discounted trainings', 'CPD tracking', 'Chapter access', 'Job board'] },
  { name: 'Corporate', price: 'USD 499/yr', color: '#0A2342', features: ['All Professional benefits', 'Team seats (5)', 'Custom training', 'Brand visibility', 'Speaking slots', 'Partnership perks'] },
]

export function MembershipBenefits() {
  return (
    <section style={{ background: '#fff', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#F97316', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Membership</p>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', color: '#0A2342', marginBottom: '1rem' }}>Membership Benefits</h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
            Choose the membership tier that fits your professional journey and unlock exclusive access to GEOFERA's full ecosystem.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', alignItems: 'start' }}>
          {tiers.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ borderRadius: 20, padding: '2rem', border: t.featured ? `2px solid ${t.color}` : '1px solid #e5e7eb', background: t.featured ? '#eff6ff' : '#fff', boxShadow: t.featured ? '0 8px 32px rgba(37,99,235,0.12)' : '0 2px 8px rgba(0,0,0,0.04)', position: 'relative' }}>
              {t.featured && <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#2563EB', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '4px 16px', borderRadius: 20 }}>MOST POPULAR</div>}
              <h3 style={{ fontWeight: 800, fontSize: '1.125rem', color: t.color, marginBottom: '0.5rem' }}>{t.name}</h3>
              <div style={{ fontWeight: 900, fontSize: '1.75rem', color: '#0A2342', marginBottom: '1.5rem' }}>{t.price}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {t.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: '#374151' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.color} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/register" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: t.featured ? t.color : 'transparent', color: t.featured ? '#fff' : t.color, border: `2px solid ${t.color}`, fontWeight: 700, fontSize: '0.9rem', padding: '0.75rem', borderRadius: 10, textDecoration: 'none' }}>
                Get Started <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
