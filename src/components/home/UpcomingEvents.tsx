'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock } from 'lucide-react'

const events = [
  { type: 'WEBINAR',        typeColor: '#2563EB', typeBg: '#eff6ff', month: 'JUN', day: '12', title: 'Practical Insights on Formation Evaluation in Carbonate Reservoirs', loc: 'Online', time: '14:00 - 16:00 WIB' },
  { type: 'WORKSHOP',       typeColor: '#22C55E', typeBg: '#f0fdf4', month: 'JUN', day: '25', title: 'Geosteering for Complex Reservoirs', loc: 'Jakarta, Indonesia', time: null },
  { type: 'TECHNICAL TALK', typeColor: '#F97316', typeBg: '#fff7ed', month: 'JUL', day: '08', title: 'Drilling Optimization: Balancing Performance & Efficiency', loc: 'Online', time: '14:00 - 16:00 WIB' },
  { type: 'CONFERENCE',     typeColor: '#0A2342', typeBg: '#f1f5f9', month: 'JUL', day: '30', title: 'GEOFERA Annual Conference 2025', loc: 'Kuala Lumpur, Malaysia', time: null },
]

export function UpcomingEvents() {
  return (
    <section style={{ background: '#fff', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: '#F97316', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Events</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', color: '#0A2342' }}>Upcoming Events</h2>
          </div>
          <Link href="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#F97316', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            View all events <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {events.map((e, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem 1.5rem', borderRadius: 14, border: '1px solid #e5e7eb', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              {/* Date */}
              <div style={{ textAlign: 'center', minWidth: 52, flexShrink: 0 }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>{e.month}</div>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0A2342', lineHeight: 1 }}>{e.day}</div>
              </div>
              {/* Divider */}
              <div style={{ width: 1, height: 48, background: '#e5e7eb', flexShrink: 0 }} />
              {/* Info */}
              <div style={{ flex: 1 }}>
                <span style={{ display: 'inline-block', background: e.typeBg, color: e.typeColor, fontSize: '0.65rem', fontWeight: 700, padding: '2px 10px', borderRadius: 20, textTransform: 'uppercase', marginBottom: 6 }}>{e.type}</span>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#0A2342', lineHeight: 1.4 }}>{e.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 6 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: '#9ca3af' }}><MapPin size={12} />{e.loc}</span>
                  {e.time && <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: '#9ca3af' }}><Clock size={12} />{e.time}</span>}
                </div>
              </div>
              <Link href="/events" style={{ flexShrink: 0, padding: '0.5rem 1.25rem', border: '1.5px solid #e5e7eb', borderRadius: 8, fontSize: '0.8125rem', fontWeight: 700, color: '#374151', textDecoration: 'none', background: '#fff' }}>
                Register
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
