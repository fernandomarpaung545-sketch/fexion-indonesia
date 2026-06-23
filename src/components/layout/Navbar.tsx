'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Search, Menu, X, User, ChevronDown } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { AnimatePresence, motion } from 'framer-motion'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Training', href: '/training', sub: [
    { label: 'All Trainings', href: '/training' },
    { label: 'Formation Evaluation', href: '/training?cat=FORMATION_EVALUATION' },
    { label: 'Petrophysics', href: '/training?cat=PETROPHYSICS' },
    { label: 'Wellsite Geology', href: '/training?cat=WELLSITE_GEOLOGY' },
  ]},
  { label: 'Events', href: '/events', sub: [
    { label: 'All Events', href: '/events' },
    { label: 'Webinars', href: '/events?type=WEBINAR' },
    { label: 'Workshops', href: '/events?type=WORKSHOP' },
    { label: 'Conferences', href: '/events?type=CONFERENCE' },
  ]},
  { label: 'Community', href: '/community' },
  { label: 'Knowledge Hub', href: '/knowledge' },
  { label: 'Membership', href: '/register' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const [dd, setDd] = useState<string|null>(null)

  return (
    <>
      <header style={{
        position:'fixed', top:0, left:0, right:0, zIndex:50,
        height:72, background:'#fff',
        borderBottom:'1px solid #e5e7eb',
        boxShadow:'0 1px 6px rgba(0,0,0,0.06)',
      }}>
        <div style={{
          maxWidth:1280, margin:'0 auto', padding:'0 1.5rem',
          height:'100%', display:'flex', alignItems:'center', justifyContent:'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display:'flex', alignItems:'center', textDecoration:'none', flexShrink:0 }}>
            <img src="/geofera-logo.png" alt="GEOFERA by OliNesia"
              style={{ height:60, width:'auto', objectFit:'contain' }}/>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex" style={{ display:'flex', alignItems:'center', flex:1, justifyContent:'center' }}>
            {nav.map(item => {
              const active = pathname === item.href
              return (
                <div key={item.href} style={{ position:'relative' }}
                  onMouseEnter={() => item.sub && setDd(item.label)}
                  onMouseLeave={() => setDd(null)}>
                  <Link href={item.href} style={{
                    display:'flex', alignItems:'center', gap:3,
                    height:64, padding:'0 0.75rem',
                    fontSize:'0.875rem', fontWeight: active ? 600 : 500,
                    color: active ? '#F97316' : '#374151',
                    textDecoration:'none',
                    borderBottom: active ? '2.5px solid #F97316' : '2.5px solid transparent',
                    whiteSpace:'nowrap',
                  }}>
                    {item.label}
                    {item.sub && <ChevronDown size={12} style={{ color:'#9ca3af' }}/>}
                  </Link>
                  {item.sub && dd === item.label && (
                    <motion.div initial={{opacity:0,y:4}} animate={{opacity:1,y:0}}
                      transition={{duration:0.12}}
                      style={{
                        position:'absolute', top:'100%', left:0, zIndex:100,
                        background:'#fff', borderRadius:'0 0 10px 10px',
                        border:'1px solid #e5e7eb', borderTop:'none',
                        boxShadow:'0 8px 24px rgba(0,0,0,0.1)', minWidth:200, overflow:'hidden',
                      }}>
                      {item.sub.map(s => (
                        <Link key={s.href} href={s.href} style={{
                          display:'block', padding:'0.625rem 1rem',
                          fontSize:'0.8125rem', color:'#4b5563', textDecoration:'none',
                        }}
                          onMouseEnter={e=>{e.currentTarget.style.background='#fff7ed';e.currentTarget.style.color='#F97316'}}
                          onMouseLeave={e=>{e.currentTarget.style.background='';e.currentTarget.style.color='#4b5563'}}>
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Right */}
          <div style={{ display:'flex', alignItems:'center', gap:8, flexShrink:0 }}>
            {session ? (
              <Link href="/dashboard" style={{
                display:'inline-flex', alignItems:'center', gap:6,
                padding:'0.5rem 1rem', borderRadius:8,
                background:'#f3f4f6', color:'#374151', fontWeight:600,
                fontSize:'0.875rem', textDecoration:'none',
              }}><User size={14}/> Dashboard</Link>
            ) : (
              <Link href="/register" style={{
                display:'inline-flex', alignItems:'center', gap:6,
                padding:'0.5625rem 1.25rem', borderRadius:8,
                background:'#F97316', color:'#fff', fontWeight:700,
                fontSize:'0.875rem', textDecoration:'none',
                boxShadow:'0 2px 10px rgba(249,115,22,0.32)',
              }}><User size={14}/> Join GEOFERA</Link>
            )}
            <button style={{ padding:'0.5rem', border:'none', background:'transparent',
              cursor:'pointer', color:'#6b7280', display:'flex', alignItems:'center' }}>
              <Search size={18}/>
            </button>
            <button className="lg:hidden" onClick={() => setOpen(!open)}
              style={{ padding:'0.5rem', border:'none', background:'transparent',
                cursor:'pointer', display:'flex', alignItems:'center', color:'#374151' }}>
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,x:'100%'}} animate={{opacity:1,x:0}}
            exit={{opacity:0,x:'100%'}} transition={{duration:0.2}}
            style={{ position:'fixed', inset:0, zIndex:40 }}>
            <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.45)' }}
              onClick={() => setOpen(false)}/>
            <div style={{ position:'absolute', right:0, top:0, bottom:0, width:280,
              background:'#fff', paddingTop:72, overflowY:'auto' }}>
              {nav.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  style={{ display:'block', padding:'0.875rem 1.5rem',
                    fontSize:'1rem', fontWeight:500,
                    color: pathname === item.href ? '#F97316' : '#111827',
                    textDecoration:'none', borderBottom:'1px solid #f3f4f6' }}>
                  {item.label}
                </Link>
              ))}
              <div style={{ padding:'1.25rem 1.5rem' }}>
                <Link href="/register" onClick={() => setOpen(false)}
                  style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6,
                    padding:'0.75rem', borderRadius:8, background:'#F97316',
                    color:'#fff', fontWeight:700, fontSize:'0.9375rem', textDecoration:'none' }}>
                  <User size={16}/> Join GEOFERA
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
