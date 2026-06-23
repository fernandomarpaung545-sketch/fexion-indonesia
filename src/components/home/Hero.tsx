'use client'
/**
 * GEOFERA Hero — recreated from mockup as actual website code
 * 
 * Layout analysis from mockup:
 * - Full-width section, ~760px height
 * - Background: sky blue gradient + geological cross-section at bottom
 * - LEFT: text overlay on white/transparent area
 * - CENTER-RIGHT: tall drilling rig with sea background
 * - FAR RIGHT: 4 discipline icon cards (vertical list)
 * - BOTTOM: 4 discipline image cards in a row
 * - No embedded images — all built with SVG + CSS
 */
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, Calendar } from 'lucide-react'

/* ══════════════════════════════════════════════════════════════
   SVG COMPONENTS
══════════════════════════════════════════════════════════════ */

/** Sky + geological cross-section background */
function GeologicalBackground() {
  return (
    <svg viewBox="0 0 1440 760" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
      style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
      <defs>
        <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6eeff"/>
          <stop offset="45%" stopColor="#b8d9f5"/>
          <stop offset="100%" stopColor="#a8ccee"/>
        </linearGradient>
        {/* Geological layer colors matching mockup */}
        <linearGradient id="hL1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4a882"/><stop offset="100%" stopColor="#b89670"/>
        </linearGradient>
        <linearGradient id="hL2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9b7a52"/><stop offset="100%" stopColor="#7d5e3a"/>
        </linearGradient>
        <linearGradient id="hL3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a9e78"/><stop offset="100%" stopColor="#5a7a58"/>
        </linearGradient>
        <linearGradient id="hL4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a8fa0"/><stop offset="100%" stopColor="#3d6e82"/>
        </linearGradient>
        <linearGradient id="hL5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b87040"/><stop offset="100%" stopColor="#965030"/>
        </linearGradient>
        <linearGradient id="hL6" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4882a"/><stop offset="100%" stopColor="#b86c18"/>
        </linearGradient>
        <linearGradient id="hL7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8a030"/><stop offset="100%" stopColor="#cc7e18"/>
        </linearGradient>
        <linearGradient id="hL8" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0b840"/><stop offset="100%" stopColor="#d49020"/>
        </linearGradient>
        <linearGradient id="hL9" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e09030"/><stop offset="100%" stopColor="#bc6c18"/>
        </linearGradient>
        <linearGradient id="hL10" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#284878"/><stop offset="100%" stopColor="#1a2e50"/>
        </linearGradient>
        {/* White fade on left for text readability */}
        <linearGradient id="hFadeL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="1"/>
          <stop offset="35%" stopColor="white" stopOpacity="0.85"/>
          <stop offset="55%" stopColor="white" stopOpacity="0.2"/>
          <stop offset="70%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        {/* Bottom stats fade */}
        <linearGradient id="hFadeB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0"/>
          <stop offset="100%" stopColor="white" stopOpacity="1"/>
        </linearGradient>
        <filter id="hGlow">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1440" height="760" fill="url(#hSky)"/>

      {/* Clouds */}
      <ellipse cx="800" cy="80" rx="200" ry="22" fill="rgba(255,255,255,0.55)"/>
      <ellipse cx="1000" cy="55" rx="140" ry="15" fill="rgba(255,255,255,0.45)"/>
      <ellipse cx="650" cy="95" rx="100" ry="12" fill="rgba(255,255,255,0.4)"/>
      <ellipse cx="900" cy="110" rx="120" ry="14" fill="rgba(255,255,255,0.35)"/>

      {/* Sea/water area */}
      <ellipse cx="850" cy="370" rx="620" ry="80" fill="rgba(100,160,220,0.35)"/>
      <path d="M300,340 Q500,325 700,335 Q900,345 1100,330 Q1300,315 1440,325 L1440,400 Q1300,395 1100,408 Q900,421 700,412 Q500,403 300,415 Z"
        fill="rgba(80,140,200,0.25)"/>

      {/* ── GEOLOGICAL LAYERS (bottom half, wavy) ── */}
      {/* These create the colorful earth cross-section */}
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}
        d="M300,430 Q500,415 700,422 Q900,429 1100,416 Q1300,403 1440,410 L1440,458 Q1300,452 1100,464 Q900,476 700,468 Q500,460 300,472 Z"
        fill="url(#hL1)"/>
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.27}}
        d="M300,472 Q500,460 700,468 Q900,476 1100,464 Q1300,452 1440,458 L1440,504 Q1300,498 1100,508 Q900,518 700,511 Q500,504 300,514 Z"
        fill="url(#hL2)"/>
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.34}}
        d="M300,514 Q500,504 700,511 Q900,518 1100,508 Q1300,498 1440,504 L1440,546 Q1300,541 1100,550 Q900,559 700,553 Q500,547 300,555 Z"
        fill="url(#hL3)"/>
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.41}}
        d="M300,555 Q500,547 700,553 Q900,559 1100,550 Q1300,541 1440,546 L1440,586 Q1300,582 1100,589 Q900,596 700,592 Q500,588 300,593 Z"
        fill="url(#hL4)"/>
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.48}}
        d="M300,593 Q500,588 700,592 Q900,596 1100,589 Q1300,582 1440,586 L1440,622 Q1300,619 1100,625 Q900,631 700,628 Q500,625 300,629 Z"
        fill="url(#hL5)"/>
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.55}}
        d="M300,629 Q500,625 700,628 Q900,631 1100,625 Q1300,619 1440,622 L1440,656 Q1300,654 1100,659 Q900,664 700,662 Q500,660 300,663 Z"
        fill="url(#hL6)"/>
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.62}}
        d="M300,663 Q500,660 700,662 Q900,664 1100,659 Q1300,654 1440,656 L1440,688 Q1300,687 1100,691 Q900,695 700,694 Q500,693 300,695 Z"
        fill="url(#hL7)"/>
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.69}}
        d="M300,695 Q500,693 700,694 Q900,695 1100,691 Q1300,687 1440,688 L1440,718 Q1300,718 1100,721 Q900,724 700,723 Q500,722 300,723 Z"
        fill="url(#hL8)"/>
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.76}}
        d="M300,723 Q500,722 700,723 Q900,724 1100,721 Q1300,718 1440,718 L1440,748 Q1300,749 1100,751 Q900,753 700,753 Q500,753 300,752 Z"
        fill="url(#hL9)"/>
      <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.83}}
        d="M300,752 Q500,753 700,753 Q900,753 1100,751 Q1300,749 1440,748 L1440,760 L300,760 Z"
        fill="url(#hL10)"/>

      {/* White left-side fade for text readability */}
      <rect width="1440" height="760" fill="url(#hFadeL)"/>

      {/* ── DRILLING RIG (SVG) ── */}
      {/* Base platform on ground */}
      <g transform="translate(720, 130)">
        {/* Derrick legs */}
        <line x1="0" y1="0" x2="-55" y2="270" stroke="#8B6B20" strokeWidth="8" strokeLinecap="round"/>
        <line x1="0" y1="0" x2="55" y2="270" stroke="#8B6B20" strokeWidth="8" strokeLinecap="round"/>
        <line x1="-18" y1="60" x2="-45" y2="270" stroke="#A07828" strokeWidth="5" strokeLinecap="round"/>
        <line x1="18" y1="60" x2="45" y2="270" stroke="#A07828" strokeWidth="5" strokeLinecap="round"/>
        {/* Cross braces */}
        {[60,110,160,210].map((y,i) => {
          const w = 10 + y*0.2
          return <line key={i} x1={-w} y1={y} x2={w} y2={y} stroke="#C8A040" strokeWidth="3" opacity="0.9"/>
        })}
        {/* Diagonal braces */}
        {[0,1,2].map(i => (
          <g key={i}>
            <line x1={-(10+i*50*0.2)} y1={60+i*50} x2={(10+(i+1)*50*0.2)} y2={60+(i+1)*50}
              stroke="#B89030" strokeWidth="2" opacity="0.7"/>
            <line x1={(10+i*50*0.2)} y1={60+i*50} x2={-(10+(i+1)*50*0.2)} y2={60+(i+1)*50}
              stroke="#B89030" strokeWidth="2" opacity="0.7"/>
          </g>
        ))}
        {/* Crown block */}
        <rect x="-12" y="-8" width="24" height="12" rx="3" fill="#D4A830"/>
        {/* Top beacon */}
        <rect x="-3" y="-18" width="6" height="12" fill="#E0B840"/>
        <circle cx="0" cy="-22" r="5" fill="#FF4444" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite"/>
        </circle>
        {/* Platform deck */}
        <rect x="-70" y="268" width="140" height="18" rx="4" fill="#9B7020"/>
        <rect x="-80" y="282" width="160" height="10" rx="3" fill="#7A5818"/>
        {/* Equipment on deck */}
        <rect x="-60" y="248" width="28" height="22" rx="3" fill="#8B6818"/>
        <rect x="-28" y="252" width="20" height="18" rx="2" fill="#A07828"/>
        <rect x="8" y="250" width="32" height="20" rx="3" fill="#8B6818"/>
        <circle cx="-46" cy="246" r="6" fill="#C8A030"/>
        {/* Substructure */}
        <rect x="-50" y="286" width="100" height="30" rx="2" fill="#6B4E14"/>
        <line x1="-40" y1="286" x2="-50" y2="316" stroke="#5A3E10" strokeWidth="4"/>
        <line x1="40" y1="286" x2="50" y2="316" stroke="#5A3E10" strokeWidth="4"/>
      </g>

      {/* Second smaller rig in background */}
      <g transform="translate(520, 240)" opacity="0.6">
        <line x1="0" y1="0" x2="-25" y2="120" stroke="#8B6B20" strokeWidth="4"/>
        <line x1="0" y1="0" x2="25" y2="120" stroke="#8B6B20" strokeWidth="4"/>
        {[30,60,90].map((y,i) => {
          const w = 5+y*0.18
          return <line key={i} x1={-w} y1={y} x2={w} y2={y} stroke="#C8A040" strokeWidth="2"/>
        })}
        <rect x="-32" y="118" width="64" height="10" rx="2" fill="#9B7020"/>
      </g>

      {/* ── WELL TRAJECTORY ── */}
      <motion.path
        initial={{pathLength:0, opacity:0}}
        animate={{pathLength:1, opacity:1}}
        transition={{delay:1.0, duration:2.0, ease:'easeInOut'}}
        d="M720,415 L720,560 Q720,600 760,625 Q800,650 850,658 L1100,672"
        fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"
        filter="url(#hGlow)"
      />
      {/* Well end node */}
      <motion.circle cx="1100" cy="672" r="10" fill="white" opacity="0.85"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:2.8, type:'spring'}}/>
      <motion.circle cx="1100" cy="672" r="18" fill="none" stroke="white" strokeWidth="2" opacity="0.3"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:3.0}}/>

      {/* Bottom white fade for stats */}
      <rect x="0" y="680" width="1440" height="80" fill="url(#hFadeB)"/>
    </svg>
  )
}

/** 4 discipline cards on right side */
function DisciplineList() {
  const items = [
    {
      color:'#22C55E', bg:'#22C55E', label:'GEOSCIENCE',
      sub:'Understand the Earth.\nUncover Possibilities.',
      icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    },
    {
      color:'#2563EB', bg:'#2563EB', label:'FORMATION\nEVALUATION',
      sub:'Quantify Reservoir.\nReduce Uncertainty.',
      icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="4" height="18" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/><rect x="17" y="5" width="4" height="16" rx="1"/></svg>,
    },
    {
      color:'#F97316', bg:'#F97316', label:'DRILLING',
      sub:'Drill Smarter.\nOperate Safely.',
      icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 2L8 6h8l-4-4z"/><rect x="10" y="6" width="4" height="12"/><path d="M8 18h8l2 4H6l2-4z"/></svg>,
    },
    {
      color:'#0A2342', bg:'#1e3a6e', label:'UPSTREAM',
      sub:'Optimize Performance.\nCreate Value.',
      icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    },
  ]

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
      {items.map((item,i) => (
        <motion.div key={i}
          initial={{opacity:0, x:40}} animate={{opacity:1, x:0}}
          transition={{delay:0.4+i*0.12, type:'spring', stiffness:120}}
          style={{ display:'flex', alignItems:'center', gap:'0.875rem',
            background:'rgba(255,255,255,0.92)', backdropFilter:'blur(12px)',
            borderRadius:14, padding:'0.625rem 0.875rem',
            boxShadow:'0 4px 20px rgba(0,0,0,0.12)', cursor:'pointer' }}>
          {/* Colored circle icon */}
          <div style={{ width:46, height:46, borderRadius:'50%', background:item.bg,
            display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
            boxShadow:`0 4px 12px ${item.bg}60` }}>
            {item.icon}
          </div>
          {/* Label + sub */}
          <div>
            <div style={{ fontWeight:800, fontSize:'0.7rem', color:item.color,
              lineHeight:1.25, whiteSpace:'pre-line', letterSpacing:'0.04em' }}>
              {item.label}
            </div>
            <div style={{ fontSize:'0.65rem', color:'#6b7280', lineHeight:1.4,
              whiteSpace:'pre-line', marginTop:2 }}>
              {item.sub}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/** 4 discipline image cards at bottom */
function DisciplineCards() {
  const cards = [
    {
      label:'Geoscience', accent:'#22C55E',
      // Seismic/topography visualization
      visual:(
        <div style={{ width:'100%', height:'100%', background:'linear-gradient(135deg,#1a3a5c,#2d6a9f,#1a4a7a)',
          display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
          {/* Seismic color map pattern */}
          {[0,1,2,3,4,5,6,7].map(i => (
            <div key={i} style={{ position:'absolute', bottom:`${i*12}%`, left:0, right:0,
              height:'10%', background:`hsl(${200+i*25},70%,${40+i*5}%)`, opacity:0.7,
              clipPath:`polygon(0 ${30+Math.sin(i)*20}%, 100% ${10+Math.cos(i)*25}%, 100% 100%, 0 100%)` }}/>
          ))}
          {/* Grid overlay */}
          <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
            {[20,40,60,80].map(x => <line key={x} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>)}
            {[20,40,60,80].map(y => <line key={y} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>)}
          </svg>
        </div>
      ),
    },
    {
      label:'Formation\nEvaluation', accent:'#2563EB',
      // FE log tracks
      visual:(
        <div style={{ width:'100%', height:'100%', background:'#f8f9fa',
          display:'flex', alignItems:'stretch', padding:'8px 6px', gap:4, overflow:'hidden' }}>
          {/* Log tracks */}
          {[
            {color:'#22C55E', vals:[30,15,45,20,35,10,40,25,38,12,42,18]},
            {color:'#F97316', vals:[60,75,50,80,55,85,48,78,52,82,46,76]},
            {color:'#2563EB', vals:[20,35,15,40,18,38,22,32,16,36,20,30]},
            {color:'#7C3AED', vals:[70,55,65,50,72,58,68,52,74,56,66,54]},
          ].map((track, ti) => (
            <div key={ti} style={{ flex:1, position:'relative', borderRight:'1px solid #e5e7eb' }}>
              <div style={{ position:'absolute', top:2, left:'50%', transform:'translateX(-50%)',
                fontSize:7, fontWeight:800, color:track.color, fontFamily:'monospace' }}>
                {['GR','RES','DEN','NPHI'][ti]}
              </div>
              <svg style={{ width:'100%', height:'100%', paddingTop:14 }}>
                <polyline
                  points={track.vals.map((v,i) => `${v}%,${(i/(track.vals.length-1))*90+5}%`).join(' ')}
                  fill="none" stroke={track.color} strokeWidth="1.5"/>
              </svg>
            </div>
          ))}
        </div>
      ),
    },
    {
      label:'Drilling', accent:'#F97316',
      // Drilling workers scene
      visual:(
        <div style={{ width:'100%', height:'100%', background:'linear-gradient(160deg,#1a2a3a,#2a3a4a)',
          position:'relative', overflow:'hidden' }}>
          {/* Equipment silhouettes */}
          <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
            {/* Ground */}
            <rect x="0" y="75%" width="100%" height="30%" fill="#1a1a2a" opacity="0.8"/>
            {/* Worker 1 */}
            <circle cx="35%" cy="60%" r="8%" fill="#F97316" opacity="0.8"/>
            <ellipse cx="35%" cy="80%" rx="10%" ry="15%" fill="#F97316" opacity="0.7"/>
            {/* Hard hat */}
            <ellipse cx="35%" cy="54%" rx="9%" ry="5%" fill="#FFD700" opacity="0.9"/>
            {/* Worker 2 */}
            <circle cx="60%" cy="62%" r="8%" fill="#EA580C" opacity="0.8"/>
            <ellipse cx="60%" cy="82%" rx="10%" ry="14%" fill="#EA580C" opacity="0.7"/>
            <ellipse cx="60%" cy="56%" rx="9%" ry="5%" fill="#FFC000" opacity="0.9"/>
            {/* Equipment */}
            <rect x="70%" y="40%" width="15%" height="40%" rx="2%" fill="#4a5568" opacity="0.9"/>
            <circle cx="77%" cy="38%" r="5%" fill="#718096" opacity="0.8"/>
            {/* Orange glow from equipment */}
            <circle cx="77%" cy="50%" r="20%" fill="#F97316" opacity="0.08"/>
          </svg>
        </div>
      ),
    },
    {
      label:'Upstream', accent:'#6366f1',
      // Offshore platform at sunset
      visual:(
        <div style={{ width:'100%', height:'100%', background:'linear-gradient(180deg,#ff8c42,#f4a261,#e76f51)',
          position:'relative', overflow:'hidden' }}>
          <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
            {/* Sea */}
            <ellipse cx="50%" cy="90%" rx="80%" ry="20%" fill="#1a3a5c" opacity="0.6"/>
            <ellipse cx="50%" cy="95%" rx="70%" ry="15%" fill="#0f2744" opacity="0.7"/>
            {/* Platform legs */}
            <line x1="45%" y1="45%" x2="40%" y2="85%" stroke="#2d3748" strokeWidth="3%"/>
            <line x1="55%" y1="45%" x2="60%" y2="85%" stroke="#2d3748" strokeWidth="3%"/>
            {/* Platform deck */}
            <rect x="35%" y="38%" width="30%" height="10%" rx="2%" fill="#4a5568"/>
            {/* Mini rig on platform */}
            <polygon points="50%,10% 44%,38% 56%,38%" fill="none" stroke="#718096" strokeWidth="1.5%"/>
            {[15,22,29].map((y,i) => {
              const w = 2 + i*1.5
              return <line key={i} x1={`${50-w}%`} y1={`${y}%`} x2={`${50+w}%`} y2={`${y}%`}
                stroke="#a0aec0" strokeWidth="1%"/>
            })}
            {/* Second rig in bg */}
            <polygon points="25%,20% 21%,48% 29%,48%" fill="none" stroke="#718096" strokeWidth="1%" opacity="0.6"/>
            {/* Sun reflection */}
            <ellipse cx="50%" cy="88%" rx="15%" ry="4%" fill="#FFD700" opacity="0.3"/>
          </svg>
        </div>
      ),
    },
  ]

  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'0.5rem' }}>
      {cards.map((card,i) => (
        <motion.div key={i}
          initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}
          transition={{delay:0.6+i*0.1, duration:0.5}}
          style={{ borderRadius:12, overflow:'hidden', height:150,
            position:'relative', cursor:'pointer', boxShadow:'0 4px 16px rgba(0,0,0,0.2)' }}
          whileHover={{ scale:1.03, transition:{duration:0.2} }}>
          {/* Visual */}
          <div style={{ width:'100%', height:'100%' }}>{card.visual}</div>
          {/* Dark overlay at bottom */}
          <div style={{ position:'absolute', inset:0,
            background:'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }}/>
          {/* Label */}
          <div style={{ position:'absolute', bottom:10, left:12 }}>
            <div style={{ width:20, height:2.5, background:card.accent, borderRadius:2, marginBottom:5 }}/>
            <div style={{ color:'white', fontWeight:800, fontSize:'0.8125rem',
              lineHeight:1.2, whiteSpace:'pre-line', textShadow:'0 1px 4px rgba(0,0,0,0.5)' }}>
              {card.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   MAIN HERO
══════════════════════════════════════════════════════════════ */
export function Hero() {
  return (
    <section style={{ position:'relative', background:'#d6eeff',
      minHeight:760, paddingTop:72, overflow:'hidden' }}>

      {/* Geological background SVG */}
      <GeologicalBackground/>

      {/* Content layer */}
      <div style={{ position:'relative', zIndex:2,
        maxWidth:1440, margin:'0 auto', padding:'0 1.5rem',
        minHeight:'calc(760px - 72px)', display:'flex', flexDirection:'column',
        justifyContent:'space-between', paddingTop:'1.5rem', paddingBottom:'1rem' }}>

        {/* TOP ROW: left text + right discipline list */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'2rem', alignItems:'start' }}>

          {/* LEFT: Text */}
          <div style={{ maxWidth:520 }}>
            <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}}
              transition={{delay:0.15,duration:0.6}}
              style={{ fontWeight:900, lineHeight:1.1, marginBottom:'1rem', letterSpacing:'-0.01em',
                fontSize:'clamp(2rem,3.8vw,3.5rem)' }}>
              <span style={{color:'#0A2342'}}>Connecting </span>
              <span style={{color:'#22C55E'}}>Geoscience,</span>
              <br/>
              <span style={{color:'#0A2342'}}>Operations &amp; </span>
              <br/>
              <span style={{color:'#F97316'}}>Formation Evaluation</span>
              <br/>
              <span style={{color:'#0A2342'}}>Professionals</span>
            </motion.h1>

            <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.3}}
              style={{ color:'#374151', fontSize:'0.9375rem', lineHeight:1.7,
                maxWidth:'28rem', marginBottom:'1.75rem' }}>
              The leading community for subsurface professionals to share knowledge,
              collaborate, and grow together across the upstream industry.
            </motion.p>

            {/* 3 CTAs */}
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.42}}
              style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:'0.75rem' }}>
              {/* Primary */}
              <Link href="/register" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                background:'#2563EB', color:'#fff', fontWeight:700,
                fontSize:'0.9rem', padding:'0.75rem 1.375rem', borderRadius:8,
                textDecoration:'none', boxShadow:'0 4px 14px rgba(37,99,235,0.4)',
              }}>
                Join the Community <ArrowRight size={15}/>
              </Link>
              {/* Secondary */}
              <Link href="/events" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                background:'rgba(255,255,255,0.88)', color:'#374151', fontWeight:600,
                fontSize:'0.9rem', padding:'0.75rem 1.375rem', borderRadius:8,
                textDecoration:'none', border:'1.5px solid rgba(255,255,255,0.9)',
                backdropFilter:'blur(8px)',
              }}>
                Explore Events
              </Link>
              {/* Play CTA */}
              <button style={{
                display:'inline-flex', alignItems:'center', gap:8,
                background:'transparent', border:'none', cursor:'pointer',
                color:'#374151', fontWeight:600, fontSize:'0.875rem', padding:0,
              }}>
                <span style={{ width:34, height:34, borderRadius:'50%',
                  background:'rgba(255,255,255,0.85)', border:'1.5px solid rgba(255,255,255,0.9)',
                  display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <Play size={13} style={{ marginLeft:2, fill:'#374151', color:'#374151' }}/>
                </span>
                View Upcoming Events
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Discipline cards */}
          <div style={{ paddingTop:'0.5rem', width:220 }}>
            <DisciplineList/>
          </div>
        </div>

        {/* BOTTOM: 4 discipline image cards */}
        <div style={{ marginTop:'auto', paddingTop:'1rem' }}>
          <DisciplineCards/>
        </div>
      </div>
    </section>
  )
}
