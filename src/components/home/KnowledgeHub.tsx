'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const resources = [
  { cat: 'ARTICLE',         catColor: '#2563EB', catBg: '#eff6ff', title: 'Unlocking Reservoir Potential Through Integrated Data',    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=130&fit=crop&q=80' },
  { cat: 'CASE STUDY',      catColor: '#22C55E', catBg: '#f0fdf4', title: 'Successful Geosteering in High Angle Wells',              img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=130&fit=crop&q=80' },
  { cat: 'TECHNICAL PAPER', catColor: '#0A2342', catBg: '#f1f5f9', title: 'Advanced Log Interpretation in Unconventional Reservoirs', img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=200&h=130&fit=crop&q=80' },
  { cat: 'LEARNING VIDEO',  catColor: '#F97316', catBg: '#fff7ed', title: 'Understanding Petrophysical Workflows',                    img: null },
]

export function KnowledgeHub() {
  return (
    <section style={{ background: '#F8FAFC', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: '#F97316', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Resources</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', color: '#0A2342' }}>Knowledge Hub</h2>
          </div>
          <Link href="/knowledge" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#F97316', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            View all resources <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }}>
          {resources.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ borderRadius: 14, overflow: 'hidden', background: '#fff', border: '1px solid #e5e7eb', cursor: 'pointer' }}>
              {r.img ? (
                <img src={r.img} alt={r.title} style={{ width: '100%', height: 130, objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '100%', height: 130, background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
              )}
              <div style={{ padding: '1rem' }}>
                <span style={{ display: 'inline-block', background: r.catBg, color: r.catColor, fontSize: '0.65rem', fontWeight: 700, padding: '2px 10px', borderRadius: 20, textTransform: 'uppercase', marginBottom: 8 }}>{r.cat}</span>
                <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0A2342', lineHeight: 1.4 }}>{r.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
