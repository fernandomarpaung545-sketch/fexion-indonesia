'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Search, User, LogIn } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { AnimatePresence, motion } from 'framer-motion'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Training', href: '/training', sub: [
    { label: 'Formation Evaluation', href: '/training?cat=FORMATION_EVALUATION' },
    { label: 'Petrophysics & Log Analysis', href: '/training?cat=PETROPHYSICS' },
    { label: 'Wellsite Geology', href: '/training?cat=WELLSITE_GEOLOGY' },
    { label: 'Geosteering Workshop', href: '/training?cat=GEOSTEERING' },
    { label: 'Drilling Optimization', href: '/training?cat=DRILLING_SUBSURFACE' },
  ]},
  { label: 'Events', href: '/events', sub: [
    { label: 'Webinars', href: '/events?type=WEBINAR' },
    { label: 'Workshops', href: '/events?type=WORKSHOP' },
    { label: 'Conferences', href: '/events?type=CONFERENCE' },
    { label: 'Technical Talks', href: '/events?type=TECHNICAL_TALK' },
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
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: '#fff',
          borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
          height: 64,
        }}
      >
        <div className="container-geo h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img src="/geofera-logo.png" alt="GEOFERA by OliNesia"
              style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            {nav.map(item => {
              const active = pathname === item.href
              return (
                <div key={item.href} className="relative"
                  onMouseEnter={() => item.sub && setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <Link href={item.href}
                    className="flex items-center gap-1 px-3 text-sm font-medium transition-colors duration-150"
                    style={{
                      height: 64,
                      color: active ? '#F97316' : '#374151',
                      borderBottom: active ? '2.5px solid #F97316' : '2.5px solid transparent',
                    }}
                  >
                    {item.label}
                    {item.sub && (
                      <ChevronDown size={12}
                        style={{ color: '#9ca3af', transform: dropdown === item.label ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }} />
                    )}
                  </Link>

                  {item.sub && dropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.12 }}
                      className="absolute top-full left-0 bg-white rounded-b-xl border border-t-0 border-gray-200 shadow-lg overflow-hidden z-50"
                      style={{ minWidth: 220 }}
                    >
                      {item.sub.map(s => (
                        <Link key={s.href} href={s.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-orange-50 hover:text-[#F97316] transition-colors">
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
          <div className="flex items-center gap-1.5">
            {session ? (
              <Link href="/dashboard" className="btn btn-sm btn-outline hidden sm:inline-flex">
                <User size={13} /> Dashboard
              </Link>
            ) : (
              <>
                <Link href="/login"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                  <LogIn size={14} /> Login
                </Link>
                <Link href="/register" className="btn btn-primary btn-sm">
                  <User size={13} /> Join GEOFERA
                </Link>
              </>
            )}
            <button aria-label="Search"
              className="p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors">
              <Search size={17} />
            </button>
            <button className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl" style={{ paddingTop: 72 }}>
              <div className="overflow-y-auto h-full px-4 pb-8">
                {nav.map(item => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                    className="flex items-center h-12 text-base font-medium border-b border-gray-100 transition-colors"
                    style={{ color: pathname === item.href ? '#F97316' : '#111827' }}>
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Link href="/register" onClick={() => setOpen(false)}
                    className="btn btn-primary w-full justify-center">
                    <User size={15} /> Join GEOFERA
                  </Link>
                  <Link href="/login" onClick={() => setOpen(false)}
                    className="btn btn-outline w-full justify-center">
                    <LogIn size={15} /> Login
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
