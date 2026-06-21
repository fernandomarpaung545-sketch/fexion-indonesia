'use client'
// 4-column content grid — exact match to mockup
// Col1: Our Technical Pillars | Col2: Featured Programs | Col3: Upcoming Events | Col4: Knowledge Hub

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock } from 'lucide-react'

/* ── Data ── */

const pillars = [
  {
    color: '#22C55E', title: 'Geoscience', sub: 'Interpret the Earth.\nUnlock Opportunities.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    color: '#2563EB', title: 'Formation Evaluation', sub: 'Transform Data into\nReservoir Insight.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="4" height="18" rx="1"/>
        <rect x="10" y="8" width="4" height="13" rx="1"/>
        <rect x="17" y="5" width="4" height="16" rx="1"/>
      </svg>
    ),
  },
  {
    color: '#F97316', title: 'Drilling', sub: 'Deliver Wells Safely\nand Efficiently.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2L8 6h8l-4-4z"/>
        <rect x="10" y="6" width="4" height="12"/>
        <path d="M8 18h8l2 4H6l2-4z"/>
      </svg>
    ),
  },
  {
    color: '#7c3aed', title: 'Upstream Integration', sub: 'Connect Disciplines.\nCreate Value.',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="5"  r="2"/>
        <circle cx="5"  cy="19" r="2"/>
        <circle cx="19" cy="19" r="2"/>
        <line x1="12" y1="7"  x2="5"  y2="17"/>
        <line x1="12" y1="7"  x2="19" y2="17"/>
        <line x1="5"  y1="19" x2="19" y2="19"/>
      </svg>
    ),
  },
]

const programs = [
  { title: 'Formation Evaluation Fundamentals', desc: 'Build a solid foundation in log interpretation and reservoir evaluation.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=108&h=76&fit=crop&q=82' },
  { title: 'Wellsite Geology Excellence',        desc: 'Practical workflows and operational best practices.',                       img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=108&h=76&fit=crop&q=82' },
  { title: 'Petrophysics & Log Analysis',        desc: 'Advanced interpretation techniques for subsurface professionals.',          img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=108&h=76&fit=crop&q=82' },
  { title: 'Geosteering Workshop',               desc: 'Improve well placement and drilling performance.',                          img: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=108&h=76&fit=crop&q=82' },
  { title: 'Drilling Optimization',              desc: 'Enhance safety, efficiency, and operational excellence.',                   img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=108&h=76&fit=crop&q=82' },
  { title: 'Integrated Subsurface Studies',      desc: 'Connecting geology, petrophysics, drilling, and reservoir disciplines.',    img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=108&h=76&fit=crop&q=82' },
]

const events = [
  {
    type: 'WEBINAR',        typeColor: '#2563EB', typeBg: '#eff6ff',
    month: 'JUN', day: '12',
    title: 'Practical Insights on Formation Evaluation in Carbonate Reservoirs',
    loc: 'Online', time: '14:00 - 16:00 WIB',
  },
  {
    type: 'WORKSHOP',       typeColor: '#22C55E', typeBg: '#f0fdf4',
    month: 'JUN', day: '25',
    title: 'Geosteering for Complex Reservoirs',
    loc: 'Jakarta, Indonesia', time: null,
  },
  {
    type: 'TECHNICAL TALK', typeColor: '#F97316', typeBg: '#fff7ed',
    month: 'JUL', day: '08',
    title: 'Drilling Optimization: Balancing Performance & Efficiency',
    loc: 'Online', time: '14:00 - 16:00 WIB',
  },
  {
    type: 'CONFERENCE',     typeColor: '#7c3aed', typeBg: '#f5f3ff',
    month: 'JUL', day: '30',
    title: 'GEOFERA Annual Conference 2025',
    loc: 'Kuala Lumpur, Malaysia', time: null,
  },
]

const knowledge = [
  {
    cat: 'ARTICLE',         catColor: '#2563EB', catBg: '#eff6ff',
    title: 'Unlocking Reservoir Potential Through Integrated Data',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=56&fit=crop&q=82',
  },
  {
    cat: 'CASE STUDY',      catColor: '#22C55E', catBg: '#f0fdf4',
    title: 'Successful Geosteering in High Angle Wells',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=80&h=56&fit=crop&q=82',
  },
  {
    cat: 'TECHNICAL PAPER', catColor: '#374151', catBg: '#f3f4f6',
    title: 'Advanced Log Interpretation in Unconventional Reservoirs',
    img: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=80&h=56&fit=crop&q=82',
  },
  {
    cat: 'LEARNING VIDEO',  catColor: '#374151', catBg: '#f3f4f6',
    title: 'Understanding Petrophysical Workflows',
    img: null,
  },
]

/* ── Sub-components ── */

function SectionHead({
  title, href, linkText,
}: {
  title: string
  href?: string
  linkText?: string
}) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.0rem',
        paddingBottom: '0.625rem',
        borderBottom: '1.5px solid #f3f4f6',
      }}
    >
      <h3
        style={{
          fontWeight: 800, fontSize: '0.7rem',
          textTransform: 'uppercase', letterSpacing: '0.1em',
          color: '#374151', margin: 0,
        }}
      >
        {title}
      </h3>
      {href && linkText && (
        <Link
          href={href}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 3,
            fontSize: '0.75rem', fontWeight: 600,
            color: '#F97316', textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {linkText} <ArrowRight size={11} />
        </Link>
      )}
    </div>
  )
}

/* ── Main Component ── */

export function ContentGrid() {
  return (
    <section
      style={{
        background: '#fff',
        borderTop: '1px solid #f1f5f9',
        padding: '2.25rem 0 3rem',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1.85fr 1.45fr 210px',
            gap: '2rem',
            alignItems: 'start',
          }}
        >

          {/* ══ COL 1: Our Technical Pillars ══ */}
          <div>
            <SectionHead title="Our Technical Pillars" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.0rem' }}>
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}
                >
                  {/* Circle icon */}
                  <div
                    style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: `${p.color}18`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: 1,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700, fontSize: '0.8rem',
                        color: p.color, lineHeight: 1.25,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.7125rem', color: '#6b7280',
                        lineHeight: 1.5, whiteSpace: 'pre-line', marginTop: 1,
                      }}
                    >
                      {p.sub}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 3,
                marginTop: '1.125rem', fontSize: '0.75rem',
                fontWeight: 600, color: '#F97316', textDecoration: 'none',
              }}
            >
              View all pillars <ArrowRight size={11} />
            </Link>
          </div>

          {/* ══ COL 2: Featured Programs ══ */}
          <div>
            <SectionHead title="Featured Programs" href="/training" linkText="View all programs" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {programs.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  style={{
                    display: 'flex', gap: '0.75rem',
                    alignItems: 'flex-start', cursor: 'pointer',
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: 72, height: 52,
                      borderRadius: 7, objectFit: 'cover', flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontWeight: 700, fontSize: '0.8125rem',
                        color: '#111827', lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.71rem', color: '#6b7280',
                        marginTop: 2, lineHeight: 1.5,
                      }}
                    >
                      {p.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ══ COL 3: Upcoming Events ══ */}
          <div>
            <SectionHead title="Upcoming Events" href="/events" linkText="View all events" />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {events.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
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
                  <div style={{ flexShrink: 0, textAlign: 'center', minWidth: 34 }}>
                    <div
                      style={{
                        fontSize: '0.58rem', fontWeight: 700,
                        color: '#9ca3af', textTransform: 'uppercase', lineHeight: 1,
                      }}
                    >
                      {e.month}
                    </div>
                    <div
                      style={{
                        fontSize: '1.375rem', fontWeight: 900,
                        color: '#0A2342', lineHeight: 1.1,
                      }}
                    >
                      {e.day}
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Type badge */}
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.58rem', fontWeight: 700,
                        textTransform: 'uppercase', letterSpacing: '0.07em',
                        color: e.typeColor, background: e.typeBg,
                        padding: '1px 7px', borderRadius: 20,
                        marginBottom: 3,
                      }}
                    >
                      {e.type}
                    </span>
                    <div
                      style={{
                        fontWeight: 600, fontSize: '0.78rem',
                        color: '#111827', lineHeight: 1.35, marginBottom: 3,
                      }}
                    >
                      {e.title}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '0.69rem', color: '#9ca3af' }}>
                      <MapPin size={10} /> {e.loc}
                    </div>
                    {e.time && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '0.69rem', color: '#9ca3af', marginTop: 2 }}>
                        <Clock size={10} /> {e.time}
                      </div>
                    )}
                  </div>

                  {/* Register button */}
                  <Link
                    href="/events"
                    style={{
                      flexShrink: 0,
                      padding: '0.25rem 0.625rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: 6,
                      fontSize: '0.69rem', fontWeight: 600,
                      color: '#374151', textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Register
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ══ COL 4: Knowledge Hub ══ */}
          <div>
            <SectionHead title="Knowledge Hub" href="/knowledge" linkText="View all resources" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {knowledge.map((k, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    display: 'flex', gap: '0.625rem',
                    alignItems: 'flex-start', cursor: 'pointer',
                  }}
                >
                  {/* Thumbnail */}
                  {k.img ? (
                    <img
                      src={k.img}
                      alt={k.title}
                      style={{
                        width: 62, height: 46,
                        borderRadius: 6, objectFit: 'cover', flexShrink: 0,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 62, height: 46, borderRadius: 6,
                        background: '#111827', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  )}
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.58rem', fontWeight: 700,
                        textTransform: 'uppercase', letterSpacing: '0.07em',
                        color: k.catColor, background: k.catBg,
                        padding: '1px 6px', borderRadius: 20, marginBottom: 3,
                      }}
                    >
                      {k.cat}
                    </span>
                    <div
                      style={{
                        fontWeight: 600, fontSize: '0.78rem',
                        color: '#111827', lineHeight: 1.35,
                      }}
                    >
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
