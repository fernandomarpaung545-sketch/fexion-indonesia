'use client'
/**
 * GEOFERA Hero — recreated from mockup as actual code
 * Left: white bg, text content
 * Right: SVG composite visualization (SEA globe + FE logs + geological cross-section + drilling rig)
 */
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, BookOpen, Calendar, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────
   RIGHT PANEL SVG — matches mockup visual exactly:
   - Light sky/sea background
   - Geological cross-section (layered earth with colors)
   - SEA globe network overlay (top-left)
   - FE log tracks GR/RES/DEN/NPHI (top-right)
   - Drilling rig (center-right)
   - Well trajectory (white curved line)
   - Discipline icon badges (far right)
───────────────────────────────────────────────────────────── */
function HeroVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

      {/* ── BACKGROUND: sky gradient ── */}
      <svg viewBox="0 0 860 620" xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          {/* Sky */}
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8f4fd"/>
            <stop offset="40%" stopColor="#bce0f7"/>
            <stop offset="100%" stopColor="#8ecae6"/>
          </linearGradient>
          {/* Geological layer gradients */}
          <linearGradient id="gl1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8a96e"/>
            <stop offset="100%" stopColor="#b8935a"/>
          </linearGradient>
          <linearGradient id="gl2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a67c52"/>
            <stop offset="100%" stopColor="#8b6340"/>
          </linearGradient>
          <linearGradient id="gl3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6b8f71"/>
            <stop offset="100%" stopColor="#52705a"/>
          </linearGradient>
          <linearGradient id="gl4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4e7c8a"/>
            <stop offset="100%" stopColor="#3a6070"/>
          </linearGradient>
          <linearGradient id="gl5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c17f3a"/>
            <stop offset="100%" stopColor="#a0622a"/>
          </linearGradient>
          <linearGradient id="gl6" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4832a"/>
            <stop offset="100%" stopColor="#b86820"/>
          </linearGradient>
          <linearGradient id="gl7" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8943a"/>
            <stop offset="100%" stopColor="#c87428"/>
          </linearGradient>
          <linearGradient id="gl8" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a5a8a"/>
            <stop offset="100%" stopColor="#2a4070"/>
          </linearGradient>
          <linearGradient id="glres" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8c547"/>
            <stop offset="50%" stopColor="#d4a830"/>
            <stop offset="100%" stopColor="#c49020"/>
          </linearGradient>
          {/* Wave pattern for geo layers */}
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2"/>
          </filter>
          {/* Clip */}
          <clipPath id="mainClip">
            <rect width="860" height="620"/>
          </clipPath>
        </defs>

        <g clipPath="url(#mainClip)">
          {/* Sky background */}
          <rect width="860" height="620" fill="url(#sky)"/>

          {/* Subtle cloud streaks */}
          <ellipse cx="500" cy="80" rx="180" ry="18" fill="rgba(255,255,255,0.4)"/>
          <ellipse cx="700" cy="55" rx="120" ry="12" fill="rgba(255,255,255,0.35)"/>
          <ellipse cx="620" cy="110" rx="90" ry="10" fill="rgba(255,255,255,0.3)"/>

          {/* ── GEOLOGICAL CROSS-SECTION ── */}
          {/* Wave-shaped layers matching mockup color palette */}

          {/* Layer 1 — light tan */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}
            d="M0,310 Q140,298 280,306 Q420,314 560,302 Q700,290 860,298 L860,338 Q700,328 560,340 Q420,352 280,342 Q140,332 0,344 Z"
            fill="url(#gl1)"/>
          {/* Layer 2 — brown */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}}
            d="M0,344 Q140,332 280,342 Q420,352 560,340 Q700,328 860,338 L860,376 Q700,366 560,376 Q420,386 280,378 Q140,370 0,380 Z"
            fill="url(#gl2)"/>
          {/* Layer 3 — dark green */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}}
            d="M0,380 Q140,370 280,378 Q420,386 560,376 Q700,366 860,376 L860,410 Q700,402 560,412 Q420,422 280,414 Q140,406 0,416 Z"
            fill="url(#gl3)"/>
          {/* Layer 4 — teal/blue */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.45}}
            d="M0,416 Q140,406 280,414 Q420,422 560,412 Q700,402 860,410 L860,442 Q700,435 560,445 Q420,455 280,447 Q140,439 0,449 Z"
            fill="url(#gl4)"/>
          {/* Layer 5 — orange-brown */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}
            d="M0,449 Q140,439 280,447 Q420,455 560,445 Q700,435 860,442 L860,472 Q700,466 560,475 Q420,484 280,477 Q140,470 0,480 Z"
            fill="url(#gl5)"/>
          {/* Layer 6 — darker orange (RESERVOIR) */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.55}}
            d="M0,480 Q140,470 280,477 Q420,484 560,475 Q700,466 860,472 L860,502 Q700,497 560,506 Q420,515 280,508 Q140,501 0,510 Z"
            fill="url(#glres)"/>
          {/* Layer 7 — bright orange */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}
            d="M0,510 Q140,501 280,508 Q420,515 560,506 Q700,497 860,502 L860,534 Q700,530 560,538 Q420,546 280,540 Q140,534 0,542 Z"
            fill="url(#gl6)"/>
          {/* Layer 8 — yellow-orange */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.65}}
            d="M0,542 Q140,534 280,540 Q420,546 560,538 Q700,530 860,534 L860,570 Q700,567 560,572 Q420,577 280,573 Q140,569 0,576 Z"
            fill="url(#gl7)"/>
          {/* Layer 9 — deep blue (basement) */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7}}
            d="M0,576 Q140,569 280,573 Q420,577 560,572 Q700,567 860,570 L860,620 L0,620 Z"
            fill="url(#gl8)"/>

          {/* ── WAVY DIAGONAL DIVIDER (matching mockup's diagonal wave) ── */}
          <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}
            d="M180,260 Q280,280 360,300 Q440,320 500,310 Q580,295 660,305 Q740,315 860,290 L860,620 Q740,620 660,620 Q560,620 460,620 Q360,620 260,620 Q180,620 180,620 Z"
            fill="rgba(255,255,255,0.06)"/>

          {/* ── SEA GLOBE / NETWORK MAP (top-left of visual) ── */}
          <g transform="translate(100, 90)">
            {/* Globe outline */}
            <circle cx="0" cy="0" r="110" fill="rgba(30,80,160,0.12)"
              stroke="rgba(37,99,235,0.3)" strokeWidth="1.5"/>
            {/* Latitude lines */}
            {[-60,-30,0,30,60].map((lat,i) => (
              <ellipse key={i} cx="0" cy={lat*1.1} rx={Math.sqrt(110*110-(lat*1.1)*(lat*1.1))||0} ry="12"
                fill="none" stroke="rgba(37,99,235,0.18)" strokeWidth="1"/>
            ))}
            {/* Longitude lines */}
            {[-60,-30,0,30,60].map((lng,i) => (
              <ellipse key={i} cx={lng*0.8} cy="0" rx="16" ry="110"
                fill="none" stroke="rgba(37,99,235,0.18)" strokeWidth="1"/>
            ))}

            {/* SEA landmasses */}
            {/* Malay Peninsula */}
            <path d="M10,-10 L22,-18 L34,-12 L36,5 L28,25 L18,40 L8,42 L0,30 L-2,10 Z"
              fill="rgba(30,100,200,0.55)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
            {/* Sumatra */}
            <path d="M-55,20 L-35,14 L-10,22 L0,30 L-8,42 L-28,50 L-50,46 L-62,36 Z"
              fill="rgba(25,90,185,0.55)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
            {/* Borneo */}
            <path d="M45,5 L70,-8 L88,-2 L92,20 L82,42 L62,52 L40,48 L30,28 Z"
              fill="rgba(20,80,170,0.55)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
            {/* Java */}
            <path d="M-15,62 L10,56 L45,58 L68,65 L72,75 L48,80 L15,78 L-18,72 Z"
              fill="rgba(30,100,200,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
            {/* Thailand/Indochina */}
            <path d="M-5,-45 L12,-55 L22,-48 L20,-32 L10,-22 L-2,-28 Z"
              fill="rgba(35,105,205,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
            {/* Philippines */}
            <path d="M80,-30 L92,-38 L100,-25 L96,-10 L86,-5 L78,-18 Z"
              fill="rgba(30,100,200,0.48)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>

            {/* Network nodes with glow */}
            {[
              {cx:15, cy:30, c:'#F97316'},
              {cx:-30, cy:35, c:'#22C55E'},
              {cx:60, cy:25, c:'#F97316'},
              {cx:-5, cy:-35, c:'#22C55E'},
              {cx:85, cy:-15, c:'#F97316'},
              {cx:30, cy:68, c:'#22C55E'},
              {cx:-52, cy:34, c:'#F97316'},
            ].map((n,i) => (
              <motion.g key={i} initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}}
                transition={{delay:1.0+i*0.1, type:'spring'}}>
                <circle cx={n.cx} cy={n.cy} r={10} fill={n.c} opacity={0.2}/>
                <circle cx={n.cx} cy={n.cy} r={5} fill={n.c} opacity={0.9}/>
                <circle cx={n.cx} cy={n.cy} r={5} fill="none" stroke={n.c} strokeWidth="1.5" opacity={0.4}>
                  <animate attributeName="r" values="5;12;5" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite"/>
                </circle>
              </motion.g>
            ))}

            {/* Connection lines between nodes */}
            <motion.g initial={{opacity:0}} animate={{opacity:0.5}} transition={{delay:1.5}}>
              <line x1="15" y1="30" x2="-30" y2="35" stroke="#F97316" strokeWidth="1" strokeDasharray="3 2"/>
              <line x1="15" y1="30" x2="60" y2="25" stroke="#F97316" strokeWidth="1" strokeDasharray="3 2"/>
              <line x1="-30" y1="35" x2="-52" y2="34" stroke="#22C55E" strokeWidth="1" strokeDasharray="3 2"/>
              <line x1="60" y1="25" x2="85" y2="-15" stroke="#F97316" strokeWidth="1" strokeDasharray="3 2"/>
              <line x1="15" y1="30" x2="30" y2="68" stroke="#22C55E" strokeWidth="1" strokeDasharray="3 2"/>
              <line x1="-5" y1="-35" x2="15" y2="30" stroke="#22C55E" strokeWidth="1" strokeDasharray="3 2"/>
              <line x1="-5" y1="-35" x2="85" y2="-15" stroke="#F97316" strokeWidth="1" strokeDasharray="3 2"/>
            </motion.g>
          </g>

          {/* ── DRILLING RIG (center-right) ── */}
          <g transform="translate(540, 40)">
            {/* Rig base platform */}
            <rect x="-50" y="240" width="100" height="16" rx="3" fill="#8B6914"/>
            <rect x="-60" y="252" width="120" height="8" rx="2" fill="#6B4E14"/>
            {/* Legs */}
            <line x1="-40" y1="256" x2="-60" y2="290" stroke="#8B6914" strokeWidth="6" strokeLinecap="round"/>
            <line x1="40" y1="256" x2="60" y2="290" stroke="#8B6914" strokeWidth="6" strokeLinecap="round"/>
            {/* Derrick structure */}
            <polygon points="0,20 -30,240 30,240" fill="none" stroke="#c8a050" strokeWidth="2.5"/>
            {/* Derrick cross members */}
            {[60,100,140,180,220].map((y,i) => {
              const w = 4 + (y/240)*28
              return <line key={i} x1={-w} y1={y} x2={w} y2={y} stroke="#c8a050" strokeWidth="2" opacity="0.8"/>
            })}
            {/* Crown block */}
            <rect x="-8" y="16" width="16" height="8" rx="2" fill="#e0b060"/>
            {/* Traveling block */}
            <rect x="-6" y="140" width="12" height="8" rx="2" fill="#d0a050"/>
            {/* Hook/drill string */}
            <line x1="0" y1="24" x2="0" y2="148" stroke="#a08030" strokeWidth="1.5" strokeDasharray="3 2"/>
            {/* Equipment on deck */}
            <rect x="-22" y="220" width="18" height="20" rx="2" fill="#6B4E14"/>
            <rect x="4" y="218" width="22" height="22" rx="2" fill="#7B5E24"/>
          </g>

          {/* ── WELL TRAJECTORY (curved white line) ── */}
          <motion.path
            initial={{pathLength:0, opacity:0}}
            animate={{pathLength:1, opacity:1}}
            transition={{delay:1.2, duration:2.0, ease:'easeInOut'}}
            d="M540,290 L540,360 Q540,390 565,405 Q590,420 620,425 L720,435"
            fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"
            filter="url(#shadow)"
          />
          {/* Well end circle */}
          <motion.circle cx="720" cy="435" r="8" fill="white" opacity="0.9"
            initial={{scale:0}} animate={{scale:1}} transition={{delay:2.8, type:'spring'}}/>

          {/* ── FE LOG TRACKS (top-right) ── */}
          <g transform="translate(680, 30)">
            {/* Track background */}
            <rect x="0" y="0" width="160" height="260" rx="8" fill="rgba(255,255,255,0.85)"
              stroke="rgba(200,200,200,0.5)" strokeWidth="1"/>

            {/* Track headers */}
            {[
              {x:10,  label:'GR',   color:'#22C55E'},
              {x:50,  label:'RES',  color:'#F97316'},
              {x:90,  label:'DEN',  color:'#2563EB'},
              {x:125, label:'NPHI', color:'#7C3AED'},
            ].map((t,i) => (
              <g key={i}>
                <text x={t.x+15} y="16" fontSize="8" fill={t.color} textAnchor="middle"
                  fontFamily="monospace" fontWeight="800">{t.label}</text>
                <line x1={t.x} y1="20" x2={t.x} y2="258" stroke="rgba(200,200,200,0.4)" strokeWidth="1"/>
              </g>
            ))}
            <line x1="0" y1="20" x2="160" y2="20" stroke="rgba(200,200,200,0.6)" strokeWidth="1"/>

            {/* GR curve - green squiggly */}
            <motion.path initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}}
              transition={{delay:0.8, duration:1.8}}
              d="M25,25 L18,42 L30,58 L16,75 L28,92 L14,108 L26,124 L15,140 L28,156 L16,172 L29,188 L15,204 L27,220 L16,236 L25,252"
              fill="none" stroke="#22C55E" strokeWidth="1.8"/>

            {/* RES curve - orange */}
            <motion.path initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}}
              transition={{delay:0.9, duration:1.8}}
              d="M65,25 L72,44 L58,62 L74,80 L60,97 L76,114 L62,130 L78,146 L63,163 L79,179 L64,196 L77,212 L62,228 L75,244 L65,252"
              fill="none" stroke="#F97316" strokeWidth="1.8"/>

            {/* DEN curve - blue */}
            <motion.path initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}}
              transition={{delay:1.0, duration:1.8}}
              d="M105,25 L98,43 L112,61 L100,78 L114,95 L102,112 L115,129 L103,146 L116,163 L104,180 L117,197 L105,214 L118,231 L106,248 L105,252"
              fill="none" stroke="#2563EB" strokeWidth="1.8"/>

            {/* NPHI curve - purple */}
            <motion.path initial={{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}}
              transition={{delay:1.1, duration:1.8}}
              d="M140,25 L148,45 L135,64 L150,82 L137,100 L151,117 L138,134 L152,151 L139,168 L153,185 L140,202 L154,219 L141,236 L140,252"
              fill="none" stroke="#7C3AED" strokeWidth="1.8"/>
          </g>

          {/* ── DISCIPLINE ICON BADGES (far right) ── */}
          {[
            {y:80,  bg:'#22C55E', icon:(
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            )},
            {y:164, bg:'#2563EB', icon:(
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="3" width="4" height="18" rx="1"/><rect x="10" y="8" width="4" height="13" rx="1"/>
                <rect x="17" y="5" width="4" height="16" rx="1"/>
              </svg>
            )},
            {y:248, bg:'#F97316', icon:(
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2L8 6h8l-4-4z"/><rect x="10" y="6" width="4" height="12"/>
                <path d="M8 18h8l2 4H6l2-4z"/>
              </svg>
            )},
            {y:332, bg:'#0A2342', icon:(
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
            )},
          ].map((b,i) => (
            <motion.g key={i} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}}
              transition={{delay:0.5+i*0.15, type:'spring'}}>
              <circle cx="840" cy={b.y} r="28" fill={b.bg}
                style={{ filter:'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }}/>
              <foreignObject x="818" y={b.y-11} width="44" height="22">
                <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {b.icon}
                </div>
              </foreignObject>
            </motion.g>
          ))}

          {/* ── IMAGE CARDS ROW (bottom) ── */}
          {/* Formation Evaluation card */}
          <motion.g initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.4}}>
            <rect x="200" y="555" width="140" height="58" rx="8" fill="rgba(20,20,40,0.75)"/>
            {/* FE log mini visualization */}
            <rect x="208" y="562" width="58" height="44" rx="4" fill="rgba(255,255,255,0.08)"
              stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            {/* Mini log curves */}
            <polyline points="220,570 216,576 222,582 217,588 223,594 218,600" fill="none" stroke="#22C55E" strokeWidth="1.2"/>
            <polyline points="232,570 238,577 232,583 238,589 233,596 238,601" fill="none" stroke="#F97316" strokeWidth="1.2"/>
            <polyline points="244,570 240,578 246,584 241,590 246,597 241,602" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
            <text x="272" y="578" fontSize="9" fill="white" fontWeight="700" fontFamily="system-ui">Formation</text>
            <text x="272" y="591" fontSize="9" fill="white" fontWeight="700" fontFamily="system-ui">Evaluation</text>
            <line x1="272" y1="601" x2="316" y2="601" stroke="#2563EB" strokeWidth="2"/>
          </motion.g>

          {/* Drilling card */}
          <motion.g initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.55}}>
            <rect x="348" y="555" width="130" height="58" rx="8" fill="rgba(20,20,40,0.75)"/>
            {/* Workers silhouette simplified */}
            <circle cx="378" cy="575" r="8" fill="rgba(200,140,60,0.6)"/>
            <ellipse cx="378" cy="592" rx="10" ry="14" fill="rgba(200,140,60,0.5)"/>
            <circle cx="400" cy="572" r="8" fill="rgba(220,160,80,0.6)"/>
            <ellipse cx="400" cy="588" rx="10" ry="15" fill="rgba(220,160,80,0.5)"/>
            <text x="418" y="578" fontSize="10" fill="white" fontWeight="700" fontFamily="system-ui">Drilling</text>
            <line x1="418" y1="590" x2="464" y2="590" stroke="#F97316" strokeWidth="2"/>
          </motion.g>

          {/* Upstream card */}
          <motion.g initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.7}}>
            <rect x="486" y="555" width="130" height="58" rx="8" fill="rgba(20,20,40,0.75)"/>
            {/* Offshore rig silhouette */}
            <rect x="510" y="575" width="30" height="20" rx="2" fill="rgba(180,120,40,0.6)"/>
            <line x1="525" y1="575" x2="525" y2="558" stroke="rgba(200,140,60,0.7)" strokeWidth="2.5"/>
            <line x1="518" y1="575" x2="518" y2="563" stroke="rgba(200,140,60,0.6)" strokeWidth="1.5"/>
            <line x1="532" y1="575" x2="532" y2="563" stroke="rgba(200,140,60,0.6)" strokeWidth="1.5"/>
            <text x="548" y="578" fontSize="10" fill="white" fontWeight="700" fontFamily="system-ui">Upstream</text>
            <line x1="548" y1="590" x2="600" y2="590" stroke="#22C55E" strokeWidth="2"/>
          </motion.g>

        </g>
      </svg>
    </div>
  )
}

/* ─── MAIN HERO COMPONENT ─── */
export function Hero() {
  return (
    <section style={{ position:'relative', background:'#fff', minHeight:720, paddingTop:64, overflow:'hidden' }}>

      <div style={{
        maxWidth:1280, margin:'0 auto',
        display:'grid', gridTemplateColumns:'45% 55%',
        minHeight:'calc(720px - 64px)',
      }}>

        {/* ── LEFT: Text content ── */}
        <div style={{
          display:'flex', alignItems:'center',
          padding:'3rem 2rem 3rem 1.5rem', zIndex:2,
        }}>
          <div style={{ maxWidth:480 }}>

            {/* Eyebrow */}
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
              style={{ color:'#F97316', fontWeight:700, fontSize:'0.6875rem',
                letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:'1rem' }}>
              Regional Professional Community
            </motion.p>

            {/* Headline */}
            <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.55}}
              style={{ fontWeight:900, color:'#0A2342', lineHeight:1.1, marginBottom:'1.125rem',
                fontSize:'clamp(2rem,3.2vw,3rem)', letterSpacing:'-0.01em' }}>
              Connecting Geoscience,<br/>
              Formation Evaluation,<br/>
              Drilling &amp; Upstream<br/>
              Professionals
            </motion.h1>

            {/* Subtext */}
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.32}}
              style={{ color:'#6b7280', fontSize:'0.9375rem', lineHeight:1.72,
                maxWidth:'28rem', marginBottom:'1.875rem' }}>
              Advancing technical excellence through knowledge sharing, professional development,
              industry collaboration, and innovation across the energy sector.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.44}}
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
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.56}}
              style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
              <span style={{ fontSize:'0.8125rem', color:'#9ca3af', fontWeight:500, marginRight:'0.25rem' }}>
                Follow us on
              </span>
              {[
                {Icon:Linkedin, href:'#', color:'#0077B5'},
                {Icon:Facebook, href:'#', color:'#1877F2'},
                {Icon:Youtube,  href:'#', color:'#FF0000'},
                {Icon:Mail,     href:'mailto:info@geofera.olinesia.com', color:'#6b7280'},
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

        {/* ── RIGHT: Technical visualization ── */}
        <div style={{ position:'relative', overflow:'hidden', minHeight:'calc(720px - 64px)' }}>
          <HeroVisual/>
        </div>

      </div>
    </section>
  )
}
