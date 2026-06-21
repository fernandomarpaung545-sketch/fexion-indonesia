'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Mic, Handshake, ArrowRight } from 'lucide-react'

export function JoinCTA() {
  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#0A2342' }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse 70% 100% at 50% 0%,rgba(37,99,235,0.12) 0%,transparent 70%), radial-gradient(ellipse 50% 70% at 80% 80%,rgba(249,115,22,0.08) 0%,transparent 60%)' }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20 bg-grid-pattern pointer-events-none" />

      <div className="container-geo relative z-10">
        <motion.div className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>

          <span className="eyebrow block mb-6" style={{ color: '#F97316' }}>
            Join the Community
          </span>

          <h2 className="font-display font-black text-white mb-5"
            style={{ fontSize: 'clamp(1.875rem,4vw,3.25rem)', lineHeight: 1.08 }}>
            Shape the Future of<br />Technical Excellence
          </h2>

          <p className="mb-10 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Join 3,000+ geoscience, formation evaluation, drilling, and upstream professionals
            building the region&apos;s most impactful technical community.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/register"
              className="btn btn-primary btn-lg"
              style={{ boxShadow: '0 6px 24px rgba(249,115,22,0.45)' }}>
              <Users size={17} /> Join GEOFERA <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              <Mic size={16} /> Become a Speaker
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              <Handshake size={16} /> Become a Partner
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
            {[
              { n: '3,000+', l: 'Active Members' },
              { n: '15+',    l: 'Countries' },
              { n: '150+',   l: 'Events & Sessions' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-black text-xl text-white">{s.n}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
