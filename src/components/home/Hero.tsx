'use client'
// Hero Section — clean white background, no hero-bg.png
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, BookOpen, Calendar, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section style={{
      minHeight: 680,
      paddingTop: 64,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '3rem 1.5rem',
        width: '100%',
      }}>
        <div style={{ maxWidth: 560 }}>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ color: '#F97316', fontWeight: 700, fontSize: '0.6875rem',
              letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Regional Professional Community
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.55 }}
            style={{ fontWeight: 900, color: '#0A2342', lineHeight: 1.1, marginBottom: '1.125rem',
              fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
            Connecting Geoscience,<br />
            Formation Evaluation,<br />
            Drilling &amp; Upstream<br />
            Professionals
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.7,
              maxWidth: '30rem', marginBottom: '2rem' }}>
            Advancing technical excellence through knowledge sharing, professional development,
            industry collaboration, and innovation across the energy sector.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <Link href="/register" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#F97316', color: '#fff', fontWeight: 700,
              fontSize: '0.9375rem', padding: '0.75rem 1.5rem',
              borderRadius: 8, textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(249,115,22,0.38)',
            }}>
              <Users size={16} /> Join GEOFERA
            </Link>
            <Link href="/training" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#fff', color: '#374151', fontWeight: 600,
              fontSize: '0.9375rem', padding: '0.75rem 1.5rem',
              borderRadius: 8, textDecoration: 'none',
              border: '1.5px solid #D1D5DB',
            }}>
              <BookOpen size={15} /> Explore Training
            </Link>
            <Link href="/events" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#fff', color: '#374151', fontWeight: 600,
              fontSize: '0.9375rem', padding: '0.75rem 1.5rem',
              borderRadius: 8, textDecoration: 'none',
              border: '1.5px solid #D1D5DB',
            }}>
              <Calendar size={15} /> Upcoming Events
            </Link>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.56 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', color: '#9CA3AF', fontWeight: 500, marginRight: '0.25rem' }}>
              Follow us on
            </span>
            {[
              { Icon: Linkedin, href: '#', color: '#0077B5' },
              { Icon: Facebook, href: '#', color: '#1877F2' },
              { Icon: Youtube,  href: '#', color: '#FF0000' },
              { Icon: Mail,     href: 'mailto:info@geofera.olinesia.com', color: '#6B7280' },
            ].map(({ Icon, href, color }, i) => (
              <a key={i} href={href} style={{
                width: 34, height: 34, borderRadius: '50%',
                border: '1.5px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color, textDecoration: 'none', background: '#fff',
              }}>
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
