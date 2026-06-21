'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Search, Menu, X, ChevronDown, User } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Training', href: '/training', children: [
    { label: 'All Trainings', href: '/training' },
    { label: 'Formation Evaluation', href: '/training?cat=FORMATION_EVALUATION' },
    { label: 'Petrophysics', href: '/training?cat=PETROPHYSICS' },
    { label: 'Wellsite Geology', href: '/training?cat=WELLSITE_GEOLOGY' },
    { label: 'Drilling & Subsurface', href: '/training?cat=DRILLING_SUBSURFACE' },
  ]},
  { label: 'Events', href: '/events', children: [
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#fff', borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/geofera-logo.png" alt="GEOFERA" style={{ height: 48, width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }} className="hidden lg:flex">
            {navItems.map((item) => (
              <div key={item.href} style={{ position: 'relative' }}
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={item.href} style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  padding: '0.5rem 0.75rem', borderRadius: 6,
                  fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none',
                  color: pathname === item.href ? '#f97316' : '#374151',
                  borderBottom: pathname === item.href ? '2px solid #f97316' : '2px solid transparent',
                }}>
                  {item.label}
                  {item.children && <ChevronDown size={13} style={{ transform: openDropdown === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, width: 220, background: '#fff', borderRadius: 10, border: '1px solid #e5e7eb', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', overflow: 'hidden', zIndex: 100 }}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} style={{ display: 'block', padding: '0.625rem 1rem', fontSize: '0.875rem', color: '#4b5563', textDecoration: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#fff7ed')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {session ? (
              <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0.5rem 1rem', borderRadius: 8, background: '#f3f4f6', fontSize: '0.875rem', fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
                <User size={15} /> Dashboard
              </Link>
            ) : (
              <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f97316', color: '#fff', fontWeight: 700, fontSize: '0.875rem', padding: '0.625rem 1.25rem', borderRadius: 8, textDecoration: 'none' }}>
                <User size={15} /> Join GEOFERA
              </Link>
            )}
            <button style={{ padding: '0.5rem', borderRadius: 8, border: 'none', background: 'transparent', cursor: 'pointer', color: '#6b7280' }}>
              <Search size={18} />
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', padding: '0.5rem', border: 'none', background: 'transparent', cursor: 'pointer' }} className="lg:hidden block">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.2 }}
            style={{ position: 'fixed', inset: 0, zIndex: 40 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} onClick={() => setMobileOpen(false)} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 280, background: '#fff', padding: '5rem 1.5rem 2rem', overflowY: 'auto' }}>
              {navItems.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', padding: '0.75rem 0', fontSize: '1rem', fontWeight: 500, color: '#111827', textDecoration: 'none', borderBottom: '1px solid #f3f4f6' }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
