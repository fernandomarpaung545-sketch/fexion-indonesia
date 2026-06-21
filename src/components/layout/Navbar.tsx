'use client'
// Navbar — exact match to mockup
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Search, Menu, X, ChevronDown, User } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Training', href: '/training', children: [
    { label: 'All Trainings',        href: '/training' },
    { label: 'Formation Evaluation', href: '/training?cat=FORMATION_EVALUATION' },
    { label: 'Petrophysics',         href: '/training?cat=PETROPHYSICS' },
    { label: 'Wellsite Geology',     href: '/training?cat=WELLSITE_GEOLOGY' },
    { label: 'Geosteering',          href: '/training?cat=GEOSTEERING' },
    { label: 'Drilling & Subsurface',href: '/training?cat=DRILLING_SUBSURFACE' },
  ]},
  { label: 'Events', href: '/events', children: [
    { label: 'All Events',   href: '/events' },
    { label: 'Webinars',     href: '/events?type=WEBINAR' },
    { label: 'Workshops',    href: '/events?type=WORKSHOP' },
    { label: 'Conferences',  href: '/events?type=CONFERENCE' },
  ]},
  { label: 'Community',    href: '/community' },
  { label: 'Knowledge Hub',href: '/knowledge' },
  { label: 'Membership',   href: '/register' },
  { label: 'Contact',      href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string|null>(null)

  return (
    <>
      {/* ── Sticky header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', height: 64 }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}>
            <img src="/geofera-logo.png" alt="GEOFERA"
              style={{ height: 46, width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex" style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {navItems.map(item => (
              <div key={item.href} style={{ position: 'relative' }}
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={item.href} style={{
                  display: 'flex', alignItems: 'center', gap: 3,
                  padding: '0 0.75rem', height: 64,
                  fontSize: '0.875rem', fontWeight: 500,
                  color: pathname === item.href ? '#F97316' : '#374151',
                  textDecoration: 'none',
                  borderBottom: pathname === item.href ? '2.5px solid #F97316' : '2.5px solid transparent',
                  transition: 'color 0.15s',
                }}>
                  {item.label}
                  {item.children && (
                    <ChevronDown size={12} style={{
                      transform: openDropdown === item.label ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}/>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.12 }}
                    style={{
                      position: 'absolute', top: '100%', left: 0, marginTop: 0,
                      minWidth: 210, background: '#fff',
                      borderRadius: '0 0 12px 12px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      overflow: 'hidden', zIndex: 100,
                    }}
                  >
                    {item.children.map(child => (
                      <Link key={child.href} href={child.href} style={{
                        display: 'block', padding: '0.625rem 1rem',
                        fontSize: '0.8125rem', color: '#4b5563',
                        textDecoration: 'none', transition: 'all 0.12s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background='#fff7ed'; e.currentTarget.style.color='#F97316' }}
                      onMouseLeave={e => { e.currentTarget.style.background=''; e.currentTarget.style.color='#4b5563' }}
                      >{child.label}</Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {session ? (
              <Link href="/dashboard" style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '0.5rem 1rem', borderRadius: 8,
                background: '#f3f4f6', fontSize: '0.875rem', fontWeight: 600,
                color: '#374151', textDecoration: 'none',
              }}>
                <User size={14}/> Dashboard
              </Link>
            ) : (
              <>
                <Link href="/login" className="hidden sm:flex" style={{
                  alignItems: 'center', gap: 6,
                  padding: '0.5rem 0.75rem', borderRadius: 8,
                  fontSize: '0.875rem', fontWeight: 500,
                  color: '#374151', textDecoration: 'none',
                }}>
                  <User size={14}/> Login
                </Link>
                <Link href="/register" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '0.625rem 1.25rem', borderRadius: 8,
                  background: '#F97316', color: '#fff',
                  fontWeight: 700, fontSize: '0.875rem',
                  textDecoration: 'none',
                  boxShadow: '0 2px 10px rgba(249,115,22,0.35)',
                }}>
                  <User size={14}/> Join GEOFERA
                </Link>
              </>
            )}
            <button style={{
              padding: '0.5rem', borderRadius: 8, border: 'none',
              background: 'transparent', cursor: 'pointer', color: '#6b7280',
            }}>
              <Search size={18}/>
            </button>
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ padding: '0.5rem', border: 'none', background: 'transparent', cursor: 'pointer' }}
            >
              {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.22 }}
            style={{ position: 'fixed', inset: 0, zIndex: 40 }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }}
              onClick={() => setMobileOpen(false)}/>
            <div style={{
              position: 'absolute', right: 0, top: 0, bottom: 0, width: 280,
              background: '#fff', paddingTop: 80, overflowY: 'auto',
            }}>
              {navItems.map(item => (
                <Link key={item.href} href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block', padding: '0.875rem 1.5rem',
                    fontSize: '1rem', fontWeight: 500, color: '#111827',
                    textDecoration: 'none', borderBottom: '1px solid #f3f4f6',
                  }}
                >{item.label}</Link>
              ))}
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <Link href="/register"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    padding: '0.75rem', borderRadius: 8,
                    background: '#F97316', color: '#fff', fontWeight: 700,
                    fontSize: '0.9375rem', textDecoration: 'none',
                  }}
                ><User size={16}/> Join GEOFERA</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
