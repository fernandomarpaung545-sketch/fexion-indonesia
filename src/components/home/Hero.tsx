'use client'
// Hero — pixel-match to mockup:
// Left: text + 3 CTAs + socials
// Right: SEA map overlay + FE log curves + geological cross-section + well trajectory

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, BookOpen, Calendar, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'

/* ── Inline SVG: Southeast Asia map outline (simplified) ── */
function SEAMapSVG() {
  return (
    <svg viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
      <defs>
        <radialGradient id="mapGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="#1e40af" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#0A2342" stopOpacity="0"/>
        </radialGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        {/* Geological layer gradients */}
        <linearGradient id="geo1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd"/>
          <stop offset="100%" stopColor="#60a5fa"/>
        </linearGradient>
        <linearGradient id="geo2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ea8d8"/>
          <stop offset="100%" stopColor="#4a7fa8"/>
        </linearGradient>
        <linearGradient id="geo3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
        <linearGradient id="geo4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b45309"/>
          <stop offset="100%" stopColor="#92400e"/>
        </linearGradient>
        <linearGradient id="geo5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c2410c"/>
          <stop offset="100%" stopColor="#7c2d12"/>
        </linearGradient>
        <clipPath id="heroViz">
          <rect width="480" height="420"/>
        </clipPath>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        </pattern>
      </defs>

      <g clipPath="url(#heroViz)">
        {/* Sky/ocean background */}
        <rect width="480" height="420" fill="#0d2d5e"/>
        <rect width="480" height="420" fill="url(#mapGlow)"/>

        {/* ── GEOLOGICAL CROSS-SECTION (bottom half) ── */}
        {/* Layer 1 - Quaternary */}
        <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}
          d="M0,240 Q120,232 240,238 Q360,244 480,236 L480,272 Q360,278 240,272 Q120,266 0,272 Z"
          fill="url(#geo1)" opacity="0.9"/>
        {/* Layer 2 - Miocene */}
        <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.45}}
          d="M0,272 Q120,266 240,272 Q360,278 480,272 L480,310 Q360,316 240,308 Q120,302 0,310 Z"
          fill="url(#geo2)" opacity="0.85"/>
        {/* Layer 3 - Reservoir (amber/gold) */}
        <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}
          d="M0,310 Q120,302 240,308 Q360,316 480,310 L480,355 Q360,362 240,354 Q120,348 0,355 Z"
          fill="url(#geo3)" opacity="0.92"/>
        {/* Reservoir hatch */}
        <motion.path initial={{opacity:0}} animate={{opacity:0.5}} transition={{delay:0.75}}
          d="M0,310 Q120,302 240,308 Q360,316 480,310 L480,355 Q360,362 240,354 Q120,348 0,355 Z"
          fill="url(#hatch)"/>
        {/* Layer 4 */}
        <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.75}}
          d="M0,355 Q120,348 240,354 Q360,362 480,355 L480,390 Q360,396 240,388 Q120,382 0,390 Z"
          fill="url(#geo4)" opacity="0.8"/>
        {/* Layer 5 - Basement */}
        <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}
          d="M0,390 Q120,382 240,388 Q360,396 480,390 L480,420 L0,420 Z"
          fill="url(#geo5)" opacity="0.7"/>

        {/* Layer labels */}
        {[
          {y:258,label:'QUATERNARY'},
          {y:293,label:'MIOCENE'},
          {y:334,label:'RESERVOIR'},
          {y:374,label:'PRE-TERTIARY'},
          {y:406,label:'BASEMENT'},
        ].map((l,i) => (
          <motion.text key={i} x="10" y={l.y} fontSize="8" fill="rgba(255,255,255,0.7)"
            fontFamily="monospace" fontWeight="700" letterSpacing="0.8"
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1+i*0.1}}>
            {l.label}
          </motion.text>
        ))}

        {/* ── SEA GLOBE/MAP (top half, center) ── */}
        {/* Globe outline */}
        <motion.circle cx="210" cy="120" r="100"
          fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}/>
        <motion.circle cx="210" cy="120" r="100"
          fill="rgba(37,99,235,0.08)"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}/>

        {/* Simplified Indochina/SEA landmasses */}
        {/* Malay Peninsula */}
        <motion.path
          d="M195,90 L210,100 L225,115 L220,135 L215,155 L205,170 L195,175 L188,165 L185,145 L190,120 L188,100 Z"
          fill="#2563eb" fillOpacity="0.7"
          initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}
          transition={{delay:0.4, duration:0.6}}/>
        {/* Sumatra */}
        <motion.path
          d="M130,150 L150,145 L170,148 L185,155 L180,165 L165,175 L145,178 L128,172 L118,162 Z"
          fill="#1d4ed8" fillOpacity="0.7"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}/>
        {/* Borneo */}
        <motion.path
          d="M240,130 L265,118 L285,122 L295,138 L292,158 L278,168 L258,170 L240,160 L232,145 Z"
          fill="#1e40af" fillOpacity="0.7"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.55}}/>
        {/* Java */}
        <motion.path
          d="M175,188 L195,183 L225,182 L250,186 L255,193 L240,198 L210,200 L185,197 Z"
          fill="#2563eb" fillOpacity="0.6"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}/>
        {/* Thailand/Vietnam */}
        <motion.path
          d="M185,60 L200,55 L215,62 L218,80 L210,90 L198,88 L188,78 Z"
          fill="#3b82f6" fillOpacity="0.6"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.45}}/>

        {/* ── Network nodes & connections ── */}
        {[
          {cx:175,cy:175,r:5}, {cx:210,cy:198,r:4}, {cx:270,cy:155,r:5},
          {cx:140,cy:160,r:4}, {cx:205,cy:82,r:4},  {cx:310,cy:140,r:3},
        ].map((n,i) => (
          <motion.g key={i} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}}
            transition={{delay:1.2+i*0.12, type:'spring'}}>
            <circle cx={n.cx} cy={n.cy} r={n.r+3} fill="#F97316" fillOpacity="0.2"/>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill="#F97316"/>
          </motion.g>
        ))}
        {/* Connection lines */}
        <motion.g initial={{opacity:0}} animate={{opacity:0.5}} transition={{delay:2.0}}>
          <line x1="175" y1="175" x2="210" y2="198" stroke="#F97316" strokeWidth="1"/>
          <line x1="210" y1="198" x2="270" y2="155" stroke="#F97316" strokeWidth="1"/>
          <line x1="175" y1="175" x2="140" y2="160" stroke="#22C55E" strokeWidth="1"/>
          <line x1="175" y1="175" x2="205" y2="82"  stroke="#22C55E" strokeWidth="1"/>
          <line x1="270" y1="155" x2="310" y2="140" stroke="#F97316" strokeWidth="1"/>
        </motion.g>

        {/* ── FE LOG TRACKS (right side) ── */}
        <g transform="translate(355,0)">
          {/* Track header */}
          {['GR','RES','DEN','NPHI'].map((log,i) => (
            <g key={log} transform={`translate(${i*28},0)`}>
              {/* Track background */}
              <rect x="2" y="0" width="22" height="230" fill="rgba(255,255,255,0.04)" rx="2"/>
              <text x="13" y="10" fontSize="6.5" fill="rgba(255,255,255,0.6)"
                textAnchor="middle" fontFamily="monospace" fontWeight="700">{log}</text>
              {/* Animated log curve */}
              <motion.path
                initial={{pathLength:0, opacity:0}}
                animate={{pathLength:1, opacity:1}}
                transition={{delay:0.8+i*0.18, duration:1.8}}
                d={
                  log==='GR'
                    ? 'M13,16 L6,35 L16,54 L5,73 L14,92 L7,111 L17,130 L5,149 L15,168 L8,187 L16,206 L13,225'
                  : log==='RES'
                    ? 'M13,16 L20,38 L14,60 L22,82 L13,104 L23,126 L12,148 L21,170 L13,192 L22,214 L13,225'
                  : log==='DEN'
                    ? 'M13,16 L10,40 L16,64 L9,88 L15,112 L8,136 L14,160 L9,184 L15,208 L13,225'
                  : 'M13,16 L17,42 L11,68 L18,94 L12,120 L19,146 L11,172 L18,198 L13,225'
                }
                fill="none"
                stroke={['#22C55E','#F97316','#ef4444','#2563EB'][i]}
                strokeWidth="1.8"
              />
            </g>
          ))}
        </g>

        {/* ── WELL TRAJECTORY ── */}
        <motion.path
          initial={{pathLength:0, opacity:0}}
          animate={{pathLength:1, opacity:1}}
          transition={{delay:1.5, duration:2.0, ease:'easeInOut'}}
          d="M280,0 L280,190 Q280,220 295,238 Q310,256 330,262 L420,278"
          fill="none" stroke="white" strokeWidth="3.5"
          strokeDasharray="none" filter="url(#softGlow)"
        />
        {/* Wellhead symbol */}
        <motion.g initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4}}>
          <rect x="274" y="0" width="12" height="8" fill="white" rx="2"/>
          <line x1="280" y1="8" x2="280" y2="14" stroke="white" strokeWidth="2"/>
        </motion.g>
        {/* Perforation marks in reservoir */}
        <motion.g initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.0}}>
          {[0,1,2,3].map(i=>(
            <line key={i} x1="324" y1={320+i*9} x2="340" y2={318+i*9}
              stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
          ))}
        </motion.g>

        {/* Depth scale */}
        {[50,100,150,200].map((d,i)=>(
          <g key={d}>
            <line x1="348" y1={16+i*54} x2="355" y2={16+i*54} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <text x="346" y={20+i*54} fontSize="7" fill="rgba(255,255,255,0.4)"
              textAnchor="end" fontFamily="monospace">{d}m</text>
          </g>
        ))}

        {/* Top gradient overlay */}
        <defs>
          <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d2d5e" stopOpacity="0.2"/>
            <stop offset="15%" stopColor="transparent"/>
          </linearGradient>
        </defs>
        <rect width="480" height="420" fill="url(#topFade)"/>
      </g>
    </svg>
  )
}

/* ── Main Hero Component ── */
export function Hero() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: 64, minHeight: 720 }}
    >
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '2.5rem', alignItems: 'center',
        minHeight: 656, paddingTop: '3rem', paddingBottom: '2.5rem',
      }}>
        {/* ── LEFT ── */}
        <div>
          {/* Eyebrow */}
          <motion.p
            initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
            style={{ color:'#F97316', fontWeight:700, fontSize:'0.7rem',
              letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:'1.125rem' }}
          >
            Regional Professional Community
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}}
            style={{ fontWeight:900, lineHeight:1.1, color:'#0A2342', marginBottom:'1.25rem',
              fontSize:'clamp(2rem,3.6vw,3.25rem)' }}
          >
            Connecting Geoscience,<br/>
            Formation Evaluation,<br/>
            Drilling &amp; Upstream<br/>
            Professionals
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.32}}
            style={{ color:'#6b7280', fontSize:'0.9375rem', lineHeight:1.7,
              maxWidth:'30rem', marginBottom:'1.875rem' }}
          >
            Advancing technical excellence through knowledge sharing,
            professional development, industry collaboration, and innovation
            across the energy sector.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.44}}
            style={{ display:'flex', alignItems:'center', flexWrap:'wrap', gap:'0.75rem', marginBottom:'1.75rem' }}
          >
            {/* Primary: Join GEOFERA */}
            <Link href="/register" style={{
              display:'inline-flex', alignItems:'center', gap:7,
              background:'#F97316', color:'#fff',
              fontWeight:700, fontSize:'0.9rem',
              padding:'0.7rem 1.4rem', borderRadius:8,
              textDecoration:'none',
              boxShadow:'0 4px 16px rgba(249,115,22,0.38)',
            }}>
              <Users size={15}/> Join GEOFERA
            </Link>
            {/* Secondary: Explore Training */}
            <Link href="/training" style={{
              display:'inline-flex', alignItems:'center', gap:7,
              border:'1.5px solid #d1d5db', background:'#fff',
              color:'#374151', fontWeight:600, fontSize:'0.9rem',
              padding:'0.7rem 1.4rem', borderRadius:8, textDecoration:'none',
            }}>
              <BookOpen size={15}/> Explore Training
            </Link>
            {/* Tertiary: Upcoming Events */}
            <Link href="/events" style={{
              display:'inline-flex', alignItems:'center', gap:7,
              border:'1.5px solid #d1d5db', background:'#fff',
              color:'#374151', fontWeight:600, fontSize:'0.9rem',
              padding:'0.7rem 1.4rem', borderRadius:8, textDecoration:'none',
            }}>
              <Calendar size={15}/> Upcoming Events
            </Link>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}
            style={{ display:'flex', alignItems:'center', gap:'0.625rem' }}
          >
            <span style={{ fontSize:'0.8rem', color:'#9ca3af', fontWeight:500 }}>
              Follow us on
            </span>
            {[
              {Icon:Linkedin, color:'#0077b5', href:'https://linkedin.com/company/geofera-indonesia'},
              {Icon:Facebook, color:'#1877f2', href:'#'},
              {Icon:Youtube,  color:'#ff0000', href:'#'},
              {Icon:Mail,     color:'#6b7280', href:'mailto:info@geofera.olinesia.com'},
            ].map(({Icon,color,href},i)=>(
              <a key={i} href={href} style={{
                width:32, height:32, borderRadius:'50%',
                border:'1.5px solid #e5e7eb',
                display:'flex', alignItems:'center', justifyContent:'center',
                color, textDecoration:'none',
              }}>
                <Icon size={14}/>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: geological visual ── */}
        <motion.div
          initial={{opacity:0, x:32}} animate={{opacity:1, x:0}}
          transition={{delay:0.2, duration:0.8}}
          style={{
            position:'relative', borderRadius:20, overflow:'hidden',
            boxShadow:'0 24px 64px rgba(10,35,66,0.22)',
            height: 'clamp(380px, 55vw, 580px)',
          }}
        >
          <SEAMapSVG/>
        </motion.div>
      </div>
    </section>
  )
}
