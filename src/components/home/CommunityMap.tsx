'use client'
import { motion } from 'framer-motion'

const nodes = [
  { label: 'Indonesia',   color: '#F97316', x: '68%', y: '62%', size: 13, m: 1800 },
  { label: 'Malaysia',    color: '#22C55E', x: '60%', y: '55%', size: 10, m: 420  },
  { label: 'Singapore',   color: '#2563EB', x: '62%', y: '59%', size: 8,  m: 180  },
  { label: 'Thailand',    color: '#22C55E', x: '57%', y: '48%', size: 8,  m: 140  },
  { label: 'Vietnam',     color: '#F97316', x: '63%', y: '47%', size: 8,  m: 150  },
  { label: 'Philippines', color: '#2563EB', x: '73%', y: '50%', size: 8,  m: 120  },
  { label: 'Australia',   color: '#7C3AED', x: '72%', y: '75%', size: 9,  m: 95   },
  { label: 'UAE',         color: '#22C55E', x: '44%', y: '42%', size: 7,  m: 80   },
  { label: 'Norway',      color: '#2563EB', x: '48%', y: '20%', size: 6,  m: 55   },
]

const conns = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[1,3],[4,3],[0,7],[7,8],
]

export function CommunityMap() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden" style={{ background: '#0A2342' }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-widest uppercase"
            style={{ color: '#F97316' }}>
            <span className="w-4 h-0.5 bg-[#F97316] rounded"/>
            Regional Presence
          </div>
          <h2 className="font-black text-white mb-4"
            style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)' }}>
            Community Across the Region
          </h2>
          <p className="text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.5)' }}>
            From Southeast Asia to the Middle East and beyond — GEOFERA connects practitioners across 15+ countries.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div className="relative mx-auto rounded-2xl overflow-hidden"
          style={{
            maxWidth: 880, height: 360,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>

          <svg width="100%" height="100%" viewBox="0 0 880 360"
            style={{ position: 'absolute', inset: 0 }}>
            {/* Grid */}
            <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
              {[0,10,20,30,40,50,60,70,80,90,100].map(x=>(
                <line key={x} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%"/>
              ))}
              {[0,25,50,75,100].map(y=>(
                <line key={y} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`}/>
              ))}
            </g>

            {/* Connection lines */}
            {conns.map(([a,b],i)=>{
              const nA=nodes[a], nB=nodes[b]
              const x1=parseFloat(nA.x)/100*880
              const y1=parseFloat(nA.y)/100*360
              const x2=parseFloat(nB.x)/100*880
              const y2=parseFloat(nB.y)/100*360
              return(
                <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(249,115,22,0.22)" strokeWidth="1.2" strokeDasharray="4 3"
                  initial={{opacity:0}} whileInView={{opacity:1}}
                  viewport={{once:true}} transition={{delay:0.3+i*0.1,duration:0.8}}/>
              )
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((n,i)=>(
            <motion.div key={i} className="absolute"
              style={{ left:n.x, top:n.y, transform:'translate(-50%,-50%)' }}
              initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}}
              viewport={{once:true}} transition={{delay:0.15+i*0.08,type:'spring'}}>
              <div className="absolute rounded-full opacity-20"
                style={{
                  background:n.color,
                  width:n.size*3.5, height:n.size*3.5,
                  top:'50%', left:'50%', transform:'translate(-50%,-50%)',
                  animation:'ping 2s cubic-bezier(0,0,0.2,1) infinite',
                }}/>
              <div className="rounded-full relative z-10"
                style={{
                  width:n.size*2, height:n.size*2, background:n.color,
                  boxShadow:`0 0 ${n.size*1.5}px ${n.color}70`,
                }}/>
              <div className="absolute whitespace-nowrap text-center"
                style={{
                  top:n.size*2+4, left:'50%', transform:'translateX(-50%)',
                  fontSize:8, color:'rgba(255,255,255,0.6)',
                  fontWeight:600, letterSpacing:0.2,
                }}>
                {n.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 sm:mt-12">
          {[
            { v:'15+',    l:'Countries' },
            { v:'3,000+', l:'Members' },
            { v:'6',      l:'Regional Hubs' },
            { v:'50+',    l:'Partners' },
          ].map((s,i)=>(
            <motion.div key={i} className="text-center"
              initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}}
              viewport={{once:true}} transition={{delay:i*0.09}}>
              <div className="font-black text-2xl sm:text-3xl text-white mb-1">{s.v}</div>
              <div className="text-xs sm:text-sm" style={{color:'rgba(255,255,255,0.45)'}}>{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
