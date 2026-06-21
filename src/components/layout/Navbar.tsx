'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown, Search, User } from 'lucide-react'
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
    { label: 'Geosteering', href: '/training?cat=GEOSTEERING' },
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
        style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
        <div className="container-tight">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <img src="/geofera-logo.png" alt="GEOFERA" className="object-contain" style={{ height: 44, width: 'auto' }}/>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div key={item.href} className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href={item.href}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: pathname === item.href ? '#F97316' : '#374151',
                      borderBottom: pathname === item.href ? '2px solid #F97316' : '2px solid transparent',
                    }}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={13} style={{ transform: openDropdown === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}/>
                    )}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.12 }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden z-50"
                      style={{ minWidth: 200 }}
                    >
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#F97316] hover:bg-orange-50 transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                <Search size={17}/>
              </button>

              {session ? (
                <Link href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                  <User size={15}/> Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                    Login
                  </Link>
                  <Link href="/register"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                    style={{ background: '#F97316', boxShadow: '0 2px 12px rgba(249,115,22,0.35)' }}>
                    <User size={14}/> Join GEOFERA
                  </Link>
                </>
              )}

              <button onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)}/>
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-white overflow-y-auto" style={{ paddingTop: 80 }}>
              <div className="px-6 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-base font-medium text-gray-700 border-b border-gray-100 hover:text-[#F97316] transition-colors">
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link href="/register" onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white"
                    style={{ background: '#F97316' }}>
                    <User size={15}/> Join GEOFERA
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
