'use client'
// GEOFERA Premium Hero 2026 — Apple/Stripe/Linear quality
// Dark navy with technical geological SVG visualization
// Fully mobile-responsive

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, BookOpen, Calendar, ArrowRight, Linkedin, Facebook, Youtube, Mail } from 'lucide-react'

/* ══ Premium Technical Visualization ══════════════════════════════════ */
function TechVisualization() {
  return (
    <svg viewBox="0 0 580 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        {/* Layer fills */}
        <linearGradient id="h-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d2b5e"/>
          <stop offset="100%" stopColor="#0a2342"/>
        </linearGradient>
        <linearGradient id="h-q" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93c5fd"/><stop offset="100%" stopColor="#60a5fa"/>
        </linearGradient>
        <linearGradient id="h-m" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b9bd5"/><stop offset="100%" stopColor="#3a7bbf"/>
        </linearGradient>
        <linearGradient id="h-e" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a7ab4"/><stop offset="100%" stopColor="#2d5e96"/>
        </linearGradient>
        <linearGradient id="h-res" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
        <linearGradient id="h-pre" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#6b2d0a"/>
        </linearGradient>
        <linearGradient id="h-bmt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#57534e"/><stop offset="100%" stopColor="#3d3a36"/>
        </linearGradient>
        <filter id="h-glow">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="h-clip"><rect width="580" height="500" rx="16"/></clipPath>
        <pattern id="h-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,200,0,0.2)" strokeWidth="2"/>
        </pattern>
        <pattern id="h-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        </pattern>
      </defs>

      <g clipPath="url(#h-clip)">
        {/* BG */}
        <rect width="580" height="500" fill="url(#h-sky)"/>
        <rect width="580" height="500" fill="url(#h-grid)"/>

        {/* ── GEOLOGICAL CROSS-SECTION ── */}
        {/* Water */}
        <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15}}
          d="M0,105 Q145,98 290,103 Q435,108 580,100 L580,148 Q435,155 290,149 Q145,143 0,150Z"
          fill="#1e3a6e" opacity="0.65"/>
        {[110,120,130,140].map((y,i)=>(
          <path key={i} d={`M0,${y} Q145,${y-4+i} 290,${y} Q435,${y+3-i} 580,${y}`}
            fill="none" stroke="rgba(147,197,253,0.18)" strokeWidth="1.2"/>
        ))}

        {/* Quaternary */}
        <motion.path initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:0.25,duration:0.5}}
          d="M0,150 Q145,143 290,149 Q435,155 580,148 L580,192 Q435,198 290,192 Q145,186 0,192Z"
          fill="url(#h-q)" opacity="0.88"/>
        {/* Miocene */}
        <motion.path initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:0.37,duration:0.5}}
          d="M0,192 Q145,186 290,192 Q435,198 580,192 L580,242 Q435,248 290,241 Q145,234 0,242Z"
          fill="url(#h-m)" opacity="0.85"/>
        {/* Eocene */}
        <motion.path initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:0.49,duration:0.5}}
          d="M0,242 Q145,234 290,241 Q435,248 580,242 L580,294 Q435,300 290,292 Q145,284 0,294Z"
          fill="url(#h-e)" opacity="0.82"/>
        {/* RESERVOIR ★ */}
        <motion.path initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:0.61,duration:0.5}}
          d="M0,294 Q145,284 290,292 Q435,300 580,294 L580,350 Q435,357 290,349 Q145,341 0,350Z"
          fill="url(#h-res)" opacity="0.92"/>
        <motion.path initial={{opacity:0}} animate={{opacity:0.55}} transition={{delay:0.9}}
          d="M0,294 Q145,284 290,292 Q435,300 580,294 L580,350 Q435,357 290,349 Q145,341 0,350Z"
          fill="url(#h-hatch)"/>
        {/* Pre-Tertiary */}
        <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.73,duration:0.5}}
          d="M0,350 Q145,341 290,349 Q435,357 580,350 L580,408 Q435,414 290,406 Q145,398 0,408Z"
          fill="url(#h-pre)" opacity="0.78"/>
        {/* Basement */}
        <motion.path initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.82}}
          d="M0,408 Q145,398 290,406 Q435,414 580,408 L580,500 L0,500Z"
          fill="url(#h-bmt)" opacity="0.7"/>

        {/* Layer labels */}
        {[
          {y:173,t:'QUATERNARY',c:'rgba(147,197,253,0.85)'},
          {y:219,t:'MIOCENE',c:'rgba(91,155,213,0.85)'},
          {y:270,t:'EOCENE',c:'rgba(74,122,180,0.85)'},
          {y:324,t:'★ RESERVOIR',c:'rgba(251,191,36,1)'},
          {y:382,t:'PRE-TERTIARY',c:'rgba(180,130,60,0.85)'},
          {y:440,t:'BASEMENT',c:'rgba(180,170,155,0.75)'},
        ].map((l,i)=>(
          <motion.text key={i} x="10" y={l.y} fontSize="8" fill={l.c}
            fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.7"
            initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4+i*0.07}}>
            {l.t}
          </motion.text>
        ))}

        {/* Depth scale */}
        {[0,500,1000,1500,2000,2500,3000].map((d,i)=>(
          <g key={d} opacity="0.45">
            <line x1="160" y1={148+i*51.3} x2="168" y2={148+i*51.3}
              stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
            <text x="158" y={152+i*51.3} fontSize="7" fill="rgba(255,255,255,0.5)"
              textAnchor="end" fontFamily="ui-monospace,monospace">{d}m</text>
          </g>
        ))}
        <text x="158" y="143" fontSize="7" fill="rgba(255,255,255,0.35)"
          textAnchor="end" fontFamily="ui-monospace,monospace">TVDss</text>

        {/* ── WELL TRAJECTORY ── */}
        {/* Platform */}
        <motion.g initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.0}}>
          <rect x="253" y="60" width="74" height="10" rx="2" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1"/>
          <line x1="258" y1="70" x2="246" y2="105" stroke="#94a3b8" strokeWidth="2"/>
          <line x1="320" y1="70" x2="332" y2="105" stroke="#94a3b8" strokeWidth="2"/>
          {/* Derrick */}
          <line x1="290" y1="60" x2="290" y2="22" stroke="#60a5fa" strokeWidth="1.8"/>
          <line x1="278" y1="60" x2="290" y2="22" stroke="#60a5fa" strokeWidth="1.4"/>
          <line x1="302" y1="60" x2="290" y2="22" stroke="#60a5fa" strokeWidth="1.4"/>
          {[32,44,54].map(y=>(
            <line key={y} x1={290-(60-y)*0.85} y1={y} x2={290+(60-y)*0.85} y2={y}
              stroke="#60a5fa" strokeWidth="1" opacity="0.6"/>
          ))}
        </motion.g>

        {/* Well bore (vertical then deviated) */}
        <motion.path
          initial={{pathLength:0,opacity:0}}
          animate={{pathLength:1,opacity:1}}
          transition={{delay:1.15,duration:1.8,ease:'easeInOut'}}
          d="M290,105 L290,275 Q290,298 308,314 Q326,330 350,338 L420,345"
          fill="none" stroke="#F97316" strokeWidth="2.8"
          filter="url(#h-glow)"
        />
        {/* Casing shoes */}
        <motion.g initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.8}}>
          {[{x:290,y:150,r:4.5},{x:290,y:230,r:3.5}].map((c,i)=>(
            <g key={i}>
              <circle cx={c.x} cy={c.y} r={c.r+2.5} fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.4"/>
              <circle cx={c.x} cy={c.y} r={c.r} fill="#F97316" opacity="0.85"/>
            </g>
          ))}
        </motion.g>
        {/* Perforations */}
        <motion.g initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.1}}>
          {[0,1,2,3].map(i=>{
            const x=320+i*1.8, y=318+i*8
            return(
              <g key={i}>
                <line x1={x} y1={y} x2={x+18} y2={y-2}
                  stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx={x+18} cy={y-2} r="2" fill="#fbbf24"/>
              </g>
            )
          })}
          <text x="342" y="365" fontSize="7" fill="rgba(251,191,36,0.7)"
            fontFamily="ui-monospace,monospace" fontWeight="700">PERFS</text>
        </motion.g>

        {/* ── FE LOG PANEL ── */}
        <rect x="415" y="130" width="154" height="340" rx="8"
          fill="rgba(0,0,0,0.38)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

        {[
          {x:422,c:'#22C55E',l:'GR',
            d:'M437,140 L430,162 L442,184 L428,208 L440,232 L426,256 L440,280 L428,304 L442,328 L428,352 L440,376 L428,400 L437,420 L437,465'},
          {x:459,c:'#F97316',l:'RES',
            d:'M474,140 L483,164 L470,188 L484,212 L471,236 L485,260 L472,284 L486,308 L470,332 L485,356 L470,380 L484,404 L474,420 L474,465'},
          {x:496,c:'#2563EB',l:'NPHI',
            d:'M511,140 L506,166 L515,192 L504,218 L514,244 L503,270 L514,296 L504,322 L515,348 L504,374 L514,400 L504,426 L511,465'},
          {x:533,c:'#7C3AED',l:'RHOB',
            d:'M548,140 L556,168 L543,196 L558,224 L543,252 L558,280 L543,308 L557,336 L542,364 L556,392 L542,420 L548,465'},
        ].map((tr,i)=>(
          <g key={i}>
            <rect x={tr.x} y="132" width="30" height="333" rx="4" fill="rgba(255,255,255,0.02)"/>
            <text x={tr.x+15} y="145" fontSize="6.5" fill={tr.c} textAnchor="middle"
              fontFamily="ui-monospace,monospace" fontWeight="800">{tr.l}</text>
            <line x1={tr.x+30} y1="134" x2={tr.x+30} y2="462"
              stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <motion.path
              initial={{pathLength:0,opacity:0}}
              animate={{pathLength:1,opacity:0.92}}
              transition={{delay:0.85+i*0.15,duration:2.0}}
              d={tr.d} fill="none" stroke={tr.c} strokeWidth="1.7"/>
            {/* Reservoir highlight per track */}
            <motion.rect x={tr.x+1} y="294" width="28" height="56"
              fill={tr.c} fillOpacity={0.07}
              initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.9}}/>
          </g>
        ))}

        {/* Pay zone label on log panel */}
        <motion.text x="492" y="289" fontSize="6" fill="rgba(251,191,36,0.75)"
          textAnchor="middle" fontFamily="ui-monospace,monospace" fontWeight="700"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.0}}>
          PAY ZONE
        </motion.text>
        <motion.rect x="416" y="294" width="152" height="56" rx="3"
          fill="none" stroke="rgba(251,191,36,0.3)" strokeWidth="1"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.9}}/>

        {/* ── REGIONAL NETWORK (top-left) ── */}
        <motion.g initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.8}}>
          <ellipse cx="82" cy="58" rx="72" ry="48"
            fill="none" stroke="rgba(37,99,235,0.22)" strokeWidth="1" strokeDasharray="3 2"/>
          {[
            {d:"M50,38 L62,32 L74,38 L76,50 L65,57 L52,53Z",f:"rgba(37,99,235,0.4)"},
            {d:"M78,50 L92,46 L101,52 L99,64 L87,68 L77,61Z",f:"rgba(37,99,235,0.35)"},
            {d:"M42,58 L55,55 L60,64 L56,76 L44,77 L37,68Z",f:"rgba(34,197,94,0.38)"},
            {d:"M100,36 L112,32 L120,40 L117,52 L105,53 L97,44Z",f:"rgba(34,197,94,0.33)"},
            {d:"M115,52 L126,50 L132,58 L128,68 L116,66Z",f:"rgba(37,99,235,0.28)"},
          ].map((s,i)=>(
            <path key={i} d={s.d} fill={s.f} stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
          ))}
          {[
            {cx:58,cy:45,c:'#22C55E'},{cx:88,cy:56,c:'#F97316'},
            {cx:48,cy:66,c:'#2563EB'},{cx:107,cy:42,c:'#22C55E'},
            {cx:121,cy:57,c:'#7C3AED'},{cx:70,cy:80,c:'#F97316'},
          ].map((n,i)=>(
            <motion.g key={i}
              initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}}
              transition={{delay:0.7+i*0.1,type:'spring'}}>
              <circle cx={n.cx} cy={n.cy} r={7} fill={n.c} opacity={0.18}/>
              <circle cx={n.cx} cy={n.cy} r={4.5} fill={n.c} opacity={0.92}/>
            </motion.g>
          ))}
          <motion.g initial={{opacity:0}} animate={{opacity:0.45}} transition={{delay:1.3}}>
            {[[58,45,88,56],[88,56,48,66],[88,56,107,42],[107,42,121,57],[88,56,70,80]].map(([x1,y1,x2,y2],i)=>(
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#F97316" strokeWidth="1.1" strokeDasharray="2 2"/>
            ))}
          </motion.g>
          <text x="82" y="100" fontSize="7.5" fill="rgba(255,255,255,0.38)"
            textAnchor="middle" fontFamily="system-ui" fontWeight="600" letterSpacing="0.4">
            REGIONAL NETWORK
          </text>
        </motion.g>

        {/* ── FLOATING BADGES ── */}
        <motion.g initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:1.9}}>
          <rect x="10" y="108" width="148" height="32" rx="7"
            fill="rgba(10,35,66,0.88)" stroke="rgba(34,197,94,0.45)" strokeWidth="1"/>
          <circle cx="27" cy="124" r="6" fill="rgba(34,197,94,0.2)"/>
          <circle cx="27" cy="124" r="3.5" fill="#22C55E"/>
          <text x="38" y="120" fontSize="9" fill="#fff" fontWeight="800" fontFamily="system-ui">3,000+</text>
          <text x="38" y="131" fontSize="7" fill="rgba(255,255,255,0.5)" fontFamily="system-ui">Members · 15+ Countries</text>
        </motion.g>

        <motion.g initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}
          transition={{delay:2.2,type:'spring'}}>
          <rect x="342" y="365" width="68" height="24" rx="6"
            fill="rgba(10,35,66,0.92)" stroke="rgba(249,115,22,0.5)" strokeWidth="1"/>
          <circle cx="353" cy="377" r="3.5" fill="#F97316">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="361" y="381" fontSize="7" fill="#fff" fontWeight="700" fontFamily="system-ui">LIVE WELL</text>
        </motion.g>

        {/* Top vignette */}
        <defs>
          <linearGradient id="h-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0A2342" stopOpacity="0.5"/>
            <stop offset="18%" stopColor="transparent"/>
          </linearGradient>
        </defs>
        <rect width="580" height="500" fill="url(#h-top)"/>
      </g>
    </svg>
  )
}

/* ══ Main Hero ════════════════════════════════════════════════════════ */
export function Hero() {
  const socials = [
    { Icon: Linkedin, href: 'https://linkedin.com/company/geofera-indonesia', label: 'LinkedIn' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Youtube,  href: '#', label: 'YouTube' },
    { Icon: Mail,     href: 'mailto:info@geofera.olinesia.com', label: 'Email' },
  ]

  return (
    <section className="relative overflow-hidden"
      style={{ background: '#0A2342', minHeight: 760, paddingTop: 64 }}>
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px,transparent 1px)', backgroundSize: '32px 32px' }}/>
      {/* Glow orb */}
      <div className="absolute pointer-events-none"
        style={{ top: '30%', right: '25%', width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(249,115,22,0.07) 0%,transparent 70%)', transform: 'translate(50%,-50%)' }}/>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 flex items-center"
        style={{ minHeight: 696, paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center w-full">

          {/* ── LEFT ── */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:0.4,delay:0.1}}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background:'rgba(249,115,22,0.12)', color:'#F97316', border:'1px solid rgba(249,115,22,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" style={{ animation:'pulse 2s infinite' }}/>
              Regional Professional Community
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.55,delay:0.18}}
              className="font-black text-white leading-[1.07] mb-5"
              style={{ fontSize:'clamp(1.875rem,4vw,3.375rem)' }}>
              Connecting{' '}
              <span style={{color:'#22C55E'}}>Geoscience,</span>
              <br/>
              <span style={{color:'#60a5fa'}}>Formation Evaluation,</span>
              <br/>
              Drilling &amp;{' '}
              <span style={{color:'#F97316'}}>Upstream</span>
              <br/>
              <span className="text-white">Professionals</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.3}}
              className="text-base leading-relaxed mb-8 max-w-md"
              style={{color:'rgba(255,255,255,0.6)'}}>
              A regional platform advancing technical excellence through knowledge sharing,
              professional development, collaboration, and innovation across the energy sector.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.45,delay:0.42}}
              className="flex flex-wrap gap-3 mb-8">
              <Link href="/register"
                className="inline-flex items-center gap-2 font-bold text-white rounded-xl px-6 py-3.5 text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-95"
                style={{background:'#F97316',boxShadow:'0 4px 20px rgba(249,115,22,0.4)'}}>
                <Users size={15}/> Join GEOFERA <ArrowRight size={13}/>
              </Link>
              <Link href="/training"
                className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3.5 text-sm transition-all hover:opacity-90 active:scale-95"
                style={{background:'rgba(255,255,255,0.07)',color:'rgba(255,255,255,0.88)',border:'1px solid rgba(255,255,255,0.15)'}}>
                <BookOpen size={14}/> Explore Training
              </Link>
              <Link href="/events"
                className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3.5 text-sm transition-all hover:opacity-90 active:scale-95"
                style={{background:'rgba(255,255,255,0.07)',color:'rgba(255,255,255,0.88)',border:'1px solid rgba(255,255,255,0.15)'}}>
                <Calendar size={14}/> Upcoming Events
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.58}}
              className="flex items-center gap-2.5">
              <span className="text-xs font-medium" style={{color:'rgba(255,255,255,0.32)'}}>
                Follow us on
              </span>
              {socials.map(({Icon,href,label})=>(
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:border-[#F97316]"
                  style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.5)'}}>
                  <Icon size={14}/>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Visualization ── */}
          <motion.div
            initial={{opacity:0,x:28}} animate={{opacity:1,x:0}} transition={{duration:0.7,delay:0.22}}
            className="order-1 lg:order-2 relative"
            style={{
              borderRadius:16,overflow:'hidden',
              boxShadow:'0 24px 80px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.05)',
              height:'clamp(280px,48vw,500px)',
            }}>
            <TechVisualization/>
          </motion.div>
        </div>
      </div>

      {/* Wave to white */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{width:'100%',height:48,display:'block'}}>
          <path d="M0,48 L0,26 Q360,4 720,26 Q1080,48 1440,26 L1440,48Z" fill="#fff"/>
        </svg>
      </div>
    </section>
  )
}
