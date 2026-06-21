'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section style={{ background: '#fff', paddingTop: 64, minHeight: 720, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '3rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', width: '100%' }}>

        {/* LEFT */}
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ color: '#F97316', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Regional Professional Community
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontWeight: 900, fontSize: 'clamp(2.25rem, 3.5vw, 3.5rem)', lineHeight: 1.1, color: '#0A2342', marginBottom: '1.25rem' }}>
            Connecting Geoscience,<br />
            Formation Evaluation,<br />
            Drilling &amp; Upstream<br />
            Professionals
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75, maxWidth: '30rem', marginBottom: '2rem' }}>
            Advancing technical excellence through knowledge sharing, professional development, industry collaboration, and innovation across the energy sector.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
            <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F97316', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '0.8rem 1.5rem', borderRadius: 8, textDecoration: 'none' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Join GEOFERA
            </Link>
            <Link href="/training" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #e5e7eb', color: '#374151', fontWeight: 600, fontSize: '0.9375rem', padding: '0.8rem 1.5rem', borderRadius: 8, textDecoration: 'none', background: '#fff' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Explore Training
            </Link>
            <Link href="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #e5e7eb', color: '#374151', fontWeight: 600, fontSize: '0.9375rem', padding: '0.8rem 1.5rem', borderRadius: 8, textDecoration: 'none', background: '#fff' }}>
              <Calendar size={15} /> Upcoming Events
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 500 }}>Follow us on</span>
            {[
              { Icon: Linkedin, color: '#0077b5', href: '#' },
              { Icon: Facebook, color: '#1877f2', href: '#' },
              { Icon: Youtube,  color: '#ff0000', href: '#' },
              { Icon: Mail,     color: '#6b7280', href: 'mailto:info@geofera.olinesia.com' },
            ].map(({ Icon, color, href }, i) => (
              <a key={i} href={href} style={{ width: 34, height: 34, borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color, textDecoration: 'none' }}>
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — image */}
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7 }}
          style={{ borderRadius: 20, overflow: 'hidden', height: 580, boxShadow: '0 24px 64px rgba(10,35,66,0.18)' }}>
          <img src="/hero-bg.png" alt="GEOFERA" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </motion.div>
      </div>
    </section>
  )
}
