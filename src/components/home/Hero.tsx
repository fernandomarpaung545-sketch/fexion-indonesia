'use client'
// Hero — pixel-perfect match to mockup
// Left: white bg + text + 3 CTAs + socials
// Right: hero-bg.png (SEA map + FE logs + geological cross-section + drilling rig)
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, BookOpen, Calendar, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section style={{
      position:'relative', background:'#fff',
      minHeight:720, paddingTop:64, overflow:'hidden',
    }}>
      {/* Right side image — fills from 40% to right edge */}
      <div style={{
        position:'absolute', top:0, bottom:0,
        left:'40%', right:0, overflow:'hidden',
      }}>
        <img src="/hero-bg.png" alt="GEOFERA Technical Visualization"
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'left center' }}/>
        {/* White gradient fade from left */}
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.82) 12%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.05) 50%, transparent 65%)',
        }}/>
        {/* Top-bottom subtle fade */}
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.1) 100%)',
        }}/>
      </div>

      {/* Content */}
      <div style={{
        position:'relative', zIndex:2,
        maxWidth:1280, margin:'0 auto', padding:'0 1.5rem',
        minHeight:'calc(720px - 64px)',
        display:'flex', alignItems:'center',
        paddingTop:'2.5rem', paddingBottom:'2rem',
      }}>
        <div style={{ maxWidth:520 }}>

          {/* Eyebrow */}
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.08}}
            style={{ color:'#F97316', fontWeight:700, fontSize:'0.6875rem',
              letterSpacing:'0.13em', textTransform:'uppercase', marginBottom:'1rem' }}>
            Regional Professional Community
          </motion.p>

          {/* Headline — matches mockup exactly */}
          <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{delay:0.16,duration:0.55}}
            style={{ fontWeight:900, color:'#0A2342', lineHeight:1.1, marginBottom:'1.125rem',
              fontSize:'clamp(2rem,3.2vw,3.125rem)', letterSpacing:'-0.01em' }}>
            Connecting Geoscience,<br/>
            Formation Evaluation,<br/>
            Drilling &amp; Upstream<br/>
            Professionals
          </motion.h1>

          {/* Subtext */}
          <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.28}}
            style={{ color:'#6b7280', fontSize:'0.9375rem', lineHeight:1.72,
              maxWidth:'29rem', marginBottom:'1.875rem' }}>
            Advancing technical excellence through knowledge sharing, professional development,
            industry collaboration, and innovation across the energy sector.
          </motion.p>

          {/* 3 CTA Buttons */}
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.4}}
            style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:'0.625rem', marginBottom:'1.625rem' }}>

            <Link href="/register" style={{
              display:'inline-flex', alignItems:'center', gap:7,
              background:'#F97316', color:'#fff', fontWeight:700,
              fontSize:'0.9rem', padding:'0.6875rem 1.25rem', borderRadius:7,
              textDecoration:'none', boxShadow:'0 3px 14px rgba(249,115,22,0.4)',
            }}>
              <Users size={15}/> Join GEOFERA
            </Link>

            <Link href="/training" style={{
              display:'inline-flex', alignItems:'center', gap:7,
              background:'#fff', color:'#374151', fontWeight:600,
              fontSize:'0.9rem', padding:'0.6875rem 1.25rem', borderRadius:7,
              textDecoration:'none', border:'1.5px solid #d1d5db',
            }}>
              <BookOpen size={14}/> Explore Training
            </Link>

            <Link href="/events" style={{
              display:'inline-flex', alignItems:'center', gap:7,
              background:'#fff', color:'#374151', fontWeight:600,
              fontSize:'0.9rem', padding:'0.6875rem 1.25rem', borderRadius:7,
              textDecoration:'none', border:'1.5px solid #d1d5db',
            }}>
              <Calendar size={14}/> Upcoming Events
            </Link>
          </motion.div>

          {/* Social row */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.54}}
            style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <span style={{ fontSize:'0.8125rem', color:'#9ca3af', fontWeight:500, marginRight:'0.25rem' }}>
              Follow us on
            </span>
            {[
              { Icon:Linkedin, href:'#', color:'#0077B5' },
              { Icon:Facebook, href:'#', color:'#1877F2' },
              { Icon:Youtube,  href:'#', color:'#FF0000' },
              { Icon:Mail,     href:'mailto:info@geofera.olinesia.com', color:'#6b7280' },
            ].map(({Icon,href,color},i) => (
              <a key={i} href={href} style={{
                width:32, height:32, borderRadius:'50%',
                border:'1.5px solid #e5e7eb',
                display:'flex', alignItems:'center', justifyContent:'center',
                color, textDecoration:'none', background:'#fff', flexShrink:0,
              }}>
                <Icon size={14}/>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
