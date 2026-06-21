'use client'
// Main 4-column content grid — exact match to mockup:
// Col 1: Our Technical Pillars
// Col 2: Featured Programs
// Col 3: Upcoming Events
// Col 4: Knowledge Hub

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock } from 'lucide-react'

/* ── Column 1: Technical Pillars ── */
const pillars = [
  {
    color: '#22C55E', title: 'Geoscience', sub: 'Interpret the Earth.\nUnlock Opportunities.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    color: '#2563EB', title: 'Formation Evaluation', sub: 'Transform Data into\nReservoir Insight.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="3" width="4" height="18" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/><rect x="17" y="5" width="4" height="16" rx="1"/></svg>,
  },
  {
    color: '#F97316', title: 'Drilling', sub: 'Deliver Wells Safely\nand Efficiently.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><path d="M12 2L8 6h8l-4-4z"/><rect x="10" y="6" width="4" height="12"/><path d="M8 18h8l2 4H6l2-4z"/></svg>,
  },
  {
    color: '#7c3aed', title: 'Upstream Integration', sub: 'Connect Disciplines.\nCreate Value.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/><line x1="5" y1="19" x2="19" y2="19"/></svg>,
  },
]

/* ── Column 2: Featured Programs ── */
const programs = [
  { title: 'Formation Evaluation Fundamentals',  desc: 'Build a solid foundation in log interpretation and reservoir evaluation.',   img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=96&h=72&fit=crop&q=80' },
  { title: 'Wellsite Geology Excellence',         desc: 'Practical workflows and operational best practices.',                          img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=96&h=72&fit=crop&q=80' },
  { title: 'Petrophysics & Log Analysis',         desc: 'Advanced interpretation techniques for subsurface professionals.',             img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=96&h=72&fit=crop&q=80' },
  { title: 'Geosteering Workshop',                desc: 'Improve well placement and drilling performance.',                             img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=96&h=72&fit=crop&q=80' },
  { title: 'Drilling Optimization',               desc: 'Enhance safety, efficiency, and operational excellence.',                      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=96&h=72&fit=crop&q=80' },
  { title: 'Integrated Subsurface Studies',       desc: 'Connecting geology, petrophysics, drilling, and reservoir disciplines.',       img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=96&h=72&fit=crop&q=80' },
]

/* ── Column 3: Upcoming Events ── */
const events = [
  { type: 'WEBINAR',        typeColor: '#2563EB', typeBg: '#eff6ff', month: 'JUN', day: '12', title: 'Practical Insights on Formation Evaluation in Carbonate Reservoirs',  loc: 'Online',               time: '14:00 - 16:00 WIB' },
  { type: 'WORKSHOP',       typeColor: '#22C55E', typeBg: '#f0fdf4', month: 'JUN', day: '25', title: 'Geosteering for Complex Reservoirs',                                   loc: 'Jakarta, Indonesia',   time: null },
  { type: 'TECHNICAL TALK', typeColor: '#F97316', typeBg: '#fff7ed', month: 'JUL', day: '08', title: 'Drilling Optimization: Balancing Performance & Efficiency',             loc: 'Online',               time: '14:00 - 16:00 WIB' },
  { type: 'CONFERENCE',     typeColor: '#7c3aed', typeBg: '#f5f3ff', month: 'JUL', day: '30', title: 'GEOFERA Annual Conference 2025',                                        loc: 'Kuala Lumpur, Malaysia',time: null },
]

/* ── Column 4: Knowledge Hub ── */
const knowledge = [
  { cat: 'ARTICLE',         catColor: '#2563EB', catBg: '#eff6ff', title: 'Unlocking Reservoir Potential Through Integrated Data',    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=56&fit=crop&q=80' },
  { cat: 'CASE STUDY',      catColor: '#22C55E', catBg: '#f0fdf4', title: 'Successful Geosteering in High Angle Wells',              img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=80&h=56&fit=crop&q=80' },
  { cat: 'TECHNICAL PAPER', catColor: '#374151', catBg: '#f3f4f6', title: 'Advanced Log Interpretation in Unconventional Reservoirs', img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=80&h=56&fit=crop&q=80' },
  { cat: 'LEARNING VIDEO',  catColor: '#374151', catBg: '#f3f4f6', title: 'Understanding Petrophysical Workflows', img: null },
]

/* ── Section Header ── */
function ColHeader({ title, href, linkLabel }: { title: string; href?: string; linkLabel?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.125rem' }}>
      <h3 style={{ fontWeight: 800, fontSize: '0.72rem', textTransform: 'uppercase',
        letterSpacing: '0.1em', color: '#374151' }}>{title}</h3>
      {href && (
        <Link href={href} style={{ display: 'flex', alignItems: 'center', gap: 3,
          fontSize: '0.75rem', fontWeight: 600, color: '#F97316', textDecoration: 'none' }}>
          {linkLabel} <ArrowRight size={12}/>
        </Link>
      )}
    </div>
  )
}

export function ContentGrid() {
  return (
    <section style={{ background: '#fff', padding: '2.5rem 0 3rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '195px 1fr 1fr 215px',
          gap: '2rem',
          alignItems: 'start',
        }}>

          {/* ── COL 1: Technical Pillars ── */}
          <div>
            <ColHeader title="Our Technical Pillars"/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.0625rem' }}>
              {pillars.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}
                >
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%',
                    background: `${p.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 1,
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.8125rem', color: p.color, lineHeight: 1.2 }}>
                      {p.title}
                    </div>
                    <div style={{ fontSize: '0.71rem', color: '#6b7280', lineHeight: 1.5, whiteSpace: 'pre-line', marginTop: 1 }}>
                      {p.sub}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link href="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: 3,
              marginTop: '1.25rem', fontSize: '0.75rem', fontWeight: 600,
              color: '#F97316', textDecoration: 'none',
            }}>
              View all pillars <ArrowRight size={12}/>
            </Link>
          </div>

          {/* ── COL 2: Featured Programs ── */}
          <div>
            <ColHeader title="Featured Programs" href="/training" linkLabel="View all programs"/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {programs.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', cursor: 'pointer' }}
                >
                  <img src={p.img} alt={p.title}
                    style={{ width: 72, height: 52, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }}/>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.8125rem', color: '#111827', lineHeight: 1.3 }}>
                      {p.title}
                    </div>
                    <div style={{ fontSize: '0.71rem', color: '#6b7280', marginTop: 2, lineHeight: 1.5 }}>
                      {p.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── COL 3: Upcoming Events ── */}
          <div>
            <ColHeader title="Upcoming Events" href="/events" linkLabel="View all events"/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {events.map((e, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                    padding: '0.75rem 0',
                    borderBottom: i < events.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}
                >
                  {/* Date */}
                  <div style={{ flexShrink: 0, textAlign: 'center', minWidth: 36 }}>
                    <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>{e.month}</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0A2342', lineHeight: 1 }}>{e.day}</div>
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{
                      display: 'inline-block', fontSize: '0.6rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      color: e.typeColor, background: e.typeBg,
                      padding: '1px 7px', borderRadius: 20, marginBottom: 3,
                    }}>{e.type}</span>
                    <div style={{ fontWeight: 600, fontSize: '0.78rem', color: '#111827', lineHeight: 1.4, marginBottom: 3 }}>
                      {e.title}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '0.69rem', color: '#9ca3af' }}>
                      <MapPin size={10}/> {e.loc}
                    </div>
                    {e.time && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '0.69rem', color: '#9ca3af', marginTop: 2 }}>
                        <Clock size={10}/> {e.time}
                      </div>
                    )}
                  </div>
                  <Link href="/events" style={{
                    flexShrink: 0, padding: '0.25rem 0.625rem',
                    border: '1px solid #e5e7eb', borderRadius: 6,
                    fontSize: '0.69rem', fontWeight: 600, color: '#374151',
                    textDecoration: 'none',
                  }}>
                    Register
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── COL 4: Knowledge Hub ── */}
          <div>
            <ColHeader title="Knowledge Hub" href="/knowledge" linkLabel="View all resources"/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {knowledge.map((k, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', cursor: 'pointer' }}
                >
                  {k.img ? (
                    <img src={k.img} alt={k.title}
                      style={{ width: 60, height: 44, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }}/>
                  ) : (
                    <div style={{
                      width: 60, height: 44, borderRadius: 6, background: '#111827',
                      flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  )}
                  <div>
                    <span style={{
                      display: 'inline-block', fontSize: '0.6rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      color: k.catColor, background: k.catBg,
                      padding: '1px 7px', borderRadius: 20, marginBottom: 3,
                    }}>{k.cat}</span>
                    <div style={{ fontWeight: 600, fontSize: '0.78rem', color: '#111827', lineHeight: 1.4 }}>
                      {k.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
