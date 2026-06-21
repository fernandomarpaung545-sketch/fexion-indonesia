'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Mic, Handshake, ArrowRight } from 'lucide-react'

export function JoinCTA() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden" style={{ background: '#0A2342' }}>
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:
          'radial-gradient(ellipse 70% 100% at 50% 0%,rgba(37,99,235,0.12) 0%,transparent 70%),' +
          'radial-gradient(ellipse 50% 70% at 80% 80%,rgba(249,115,22,0.08) 0%,transparent 60%)'
        }}/>
      <div className="absolute inset-0 pointer-events-none opacity-15"
        style={{ backgroundImage:'radial-gradient(rgba(255,255,255,0.12) 1px,transparent 1px)', backgroundSize:'32px 32px' }}/>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>

          <div className="inline-flex items-center gap-2 mb-6 text-xs font-bold tracking-widest uppercase"
            style={{ color: '#F97316' }}>
            <span className="w-4 h-0.5 rounded bg-[#F97316]"/>
            Join the Community
          </div>

          <h2 className="font-black text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(1.75rem,4vw,3.125rem)', lineHeight: 1.1 }}>
            Shape the Future of<br />Technical Excellence
          </h2>

          <p className="mb-10 text-sm sm:text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.52)' }}>
            Join 3,000+ geoscience, formation evaluation, drilling, and upstream professionals
            building the region&apos;s most impactful technical community.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="/register"
              className="inline-flex items-center gap-2 font-bold text-white rounded-xl px-6 sm:px-7 py-3.5 text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-95"
              style={{ background: '#F97316', boxShadow: '0 6px 24px rgba(249,115,22,0.45)' }}>
              <Users size={16}/> Join GEOFERA <ArrowRight size={14}/>
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 sm:px-7 py-3.5 text-sm transition-all hover:opacity-80 active:scale-95"
              style={{ background:'rgba(255,255,255,0.07)', color:'rgba(255,255,255,0.88)', border:'1.5px solid rgba(255,255,255,0.18)' }}>
              <Mic size={15}/> Become a Speaker
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 sm:px-7 py-3.5 text-sm transition-all hover:opacity-80 active:scale-95"
              style={{ background:'rgba(255,255,255,0.07)', color:'rgba(255,255,255,0.88)', border:'1.5px solid rgba(255,255,255,0.18)' }}>
              <Handshake size={15}/> Become a Partner
            </Link>
          </div>

          {/* Trust */}
          <div className="mt-12 flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {[
              { n:'3,000+', l:'Active Members' },
              { n:'15+',    l:'Countries' },
              { n:'150+',   l:'Sessions & Events' },
            ].map((s,i)=>(
              <div key={i} className="text-center">
                <div className="font-black text-lg sm:text-xl text-white">{s.n}</div>
                <div className="text-xs mt-0.5" style={{ color:'rgba(255,255,255,0.38)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
