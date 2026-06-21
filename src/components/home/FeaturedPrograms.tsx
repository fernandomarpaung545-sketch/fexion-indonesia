'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const programs = [
  { tag: 'Formation Evaluation', tagColor: '#2563EB', title: 'Formation Evaluation Fundamentals', desc: 'Build a solid foundation in log interpretation and reservoir evaluation.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&q=80', duration: '3 Days', level: 'Beginner' },
  { tag: 'Wellsite Geology',     tagColor: '#22C55E', title: 'Wellsite Geology Excellence',          desc: 'Practical workflows and operational best practices for wellsite geologists.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=240&fit=crop&q=80', duration: '2 Days', level: 'Intermediate' },
  { tag: 'Petrophysics',         tagColor: '#F97316', title: 'Petrophysics & Log Analysis',          desc: 'Advanced interpretation techniques for subsurface professionals.', img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=400&h=240&fit=crop&q=80', duration: '4 Days', level: 'Advanced' },
  { tag: 'Drilling',             tagColor: '#0A2342', title: 'Drilling Optimization Workshop',       desc: 'Enhance safety, efficiency, and operational excellence in drilling.', img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=240&fit=crop&q=80', duration: '2 Days', level: 'Intermediate' },
]

export function FeaturedPrograms() {
  return (
    <section style={{ background: '#F8FAFC', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: '#F97316', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Learn & Grow</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', color: '#0A2342' }}>Featured Programs</h2>
          </div>
          <Link href="/training" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#F97316', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            View all programs <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }}>
          {programs.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ borderRadius: 16, overflow: 'hidden', background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 12, left: 12, background: p.tagColor, color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{p.tag}</div>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontWeight: 800, fontSize: '0.9375rem', color: '#0A2342', marginBottom: '0.5rem', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: '0.8125rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', background: '#f3f4f6', padding: '3px 10px', borderRadius: 20 }}>⏱ {p.duration}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', background: '#f3f4f6', padding: '3px 10px', borderRadius: 20 }}>{p.level}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
