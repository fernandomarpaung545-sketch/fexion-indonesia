'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, Calendar } from 'lucide-react'

// ── OUR TECHNICAL PILLARS ────────────────────────────────────────────
const pillars = [
  { color: '#16a34a', title: 'Geoscience',          sub: 'Interpret the Earth.\nUnlock Opportunities.',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { color: '#1d4ed8', title: 'Formation Evaluation', sub: 'Transform Data into\nReservoir Insight.',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2"><rect x="3" y="3" width="4" height="18" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/><rect x="17" y="5" width="4" height="16" rx="1"/></svg> },
  { color: '#f97316', title: 'Drilling',             sub: 'Deliver Wells Safely\nand Efficiently.',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><path d="M12 2L8 6h8l-4-4z"/><rect x="10" y="6" width="4" height="12"/><path d="M8 18h8l2 4H6l2-4z"/></svg> },
  { color: '#7c3aed', title: 'Upstream Integration', sub: 'Connect Disciplines.\nCreate Value.',
    svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/><line x1="5" y1="19" x2="19" y2="19"/></svg> },
]

// ── FEATURED PROGRAMS ────────────────────────────────────────────────
const programs = [
  { title: 'Formation Evaluation Fundamentals',   sub: 'Build a solid foundation in log interpretation and reservoir evaluation.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=80&fit=crop&q=80' },
  { title: 'Wellsite Geology Excellence',          sub: 'Practical workflows and operational best practices.',                        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=120&h=80&fit=crop&q=80' },
  { title: 'Petrophysics & Log Analysis',          sub: 'Advanced interpretation techniques for subsurface professionals.',           img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=120&h=80&fit=crop&q=80' },
  { title: 'Geosteering Workshop',                 sub: 'Improve well placement and drilling performance.',                           img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=120&h=80&fit=crop&q=80' },
  { title: 'Drilling Optimization',                sub: 'Enhance safety, efficiency, and operational excellence.',                    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=120&h=80&fit=crop&q=80' },
  { title: 'Integrated Subsurface Studies',        sub: 'Connecting geology, petrophysics, drilling, and reservoir disciplines.',     img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=120&h=80&fit=crop&q=80' },
]

// ── UPCOMING EVENTS ──────────────────────────────────────────────────
const events = [
  { type: 'WEBINAR',       typeColor: '#2563eb', month: 'JUN', day: '12', title: 'Practical Insights on Formation Evaluation in Carbonate Reservoirs',  loc: 'Online',              time: '14:00 - 16:00 WIB' },
  { type: 'WORKSHOP',      typeColor: '#16a34a', month: 'JUN', day: '25', title: 'Geosteering for Complex Reservoirs',                                   loc: 'Jakarta, Indonesia',  time: null },
  { type: 'TECHNICAL TALK',typeColor: '#f97316', month: 'JUL', day: '08', title: 'Drilling Optimization: Balancing Performance & Efficiency',             loc: 'Online',              time: '14:00 - 16:00 WIB' },
  { type: 'CONFERENCE',    typeColor: '#7c3aed', month: 'JUL', day: '30', title: 'GEOFERA Annual Conference 2025',                                        loc: 'Kuala Lumpur, Malaysia', time: null },
]

// ── KNOWLEDGE HUB ────────────────────────────────────────────────────
const knowledge = [
  { cat: 'ARTICLE',        catColor: '#2563eb', title: 'Unlocking Reservoir Potential Through Integrated Data',    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=60&fit=crop&q=80' },
  { cat: 'CASE STUDY',     catColor: '#16a34a', title: 'Successful Geosteering in High Angle Wells',              img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=80&h=60&fit=crop&q=80' },
  { cat: 'TECHNICAL PAPER',catColor: '#374151', title: 'Advanced Log Interpretation in Unconventional Reservoirs', img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=80&h=60&fit=crop&q=80' },
  { cat: 'LEARNING VIDEO', catColor: '#374151', title: 'Understanding Petrophysical Workflows',                    img: null },
]

export function Disciplines() {
  return (
    <section style={{ background: '#fff', padding: '3rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1.4fr 1.2fr', gap: '2.5rem', alignItems: 'start' }}>

          {/* COL 1: Technical Pillars */}
          <div>
            <h3 style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#374151', marginBottom: '1.25rem' }}>Our Technical Pillars</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              {pillars.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${p.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {p.svg}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: p.color }}>{p.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{p.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: '1.5rem', fontSize: '0.8125rem', fontWeight: 600, color: '#f97316', textDecoration: 'none' }}>
              View all pillars <ArrowRight size={13} />
            </Link>
          </div>

          {/* COL 2: Featured Programs */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#374151' }}>Featured Programs</h3>
              <Link href="/training" style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#f97316', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                View all programs <ArrowRight size={13} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {programs.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                  <img src={p.img} alt={p.title} style={{ width: 72, height: 52, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111827', lineHeight: 1.3 }}>{p.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: 2, lineHeight: 1.5 }}>{p.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COL 3: Upcoming Events */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#374151' }}>Upcoming Events</h3>
              <Link href="/events" style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#f97316', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                View all events <ArrowRight size={13} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {events.map((e, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', paddingBottom: '1rem', borderBottom: i < events.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  {/* Date box */}
                  <div style={{ flexShrink: 0, textAlign: 'center', width: 44 }}>
                    <div style={{ fontSize: '0.625rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>{e.month}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0d1b2e', lineHeight: 1 }}>{e.day}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: e.typeColor, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{e.type}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: '#111827', lineHeight: 1.4, marginBottom: 4 }}>{e.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.7rem', color: '#9ca3af' }}>
                      <MapPin size={11} /> {e.loc}
                    </div>
                    {e.time && <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.7rem', color: '#9ca3af', marginTop: 2 }}><Clock size={11} /> {e.time}</div>}
                  </div>
                  <Link href="/events" style={{ flexShrink: 0, padding: '0.3rem 0.75rem', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: '0.75rem', fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                    Register
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COL 4: Knowledge Hub */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#374151' }}>Knowledge Hub</h3>
              <Link href="/knowledge" style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#f97316', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                View all resources <ArrowRight size={13} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {knowledge.map((k, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                  {k.img ? (
                    <img src={k.img} alt={k.title} style={{ width: 60, height: 44, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
                  ) : (
                    <div style={{ width: 60, height: 44, borderRadius: 6, background: '#111827', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: k.catColor, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{k.cat}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: '#111827', lineHeight: 1.4 }}>{k.title}</div>
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
