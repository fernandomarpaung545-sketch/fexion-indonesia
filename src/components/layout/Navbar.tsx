'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, ChevronDown, LogIn, User } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Training',
    href: '/training',
    children: [
      { label: 'All Trainings', href: '/training' },
      { label: 'Formation Evaluation', href: '/training?cat=FORMATION_EVALUATION' },
      { label: 'Petrophysics', href: '/training?cat=PETROPHYSICS' },
      { label: 'Wellsite Geology', href: '/training?cat=WELLSITE_GEOLOGY' },
      { label: 'Mud Logging', href: '/training?cat=MUD_LOGGING' },
      { label: 'Geosteering', href: '/training?cat=GEOSTEERING' },
      { label: 'Reservoir Geology', href: '/training?cat=RESERVOIR_GEOLOGY' },
      { label: 'CCS & Energy Transition', href: '/training?cat=CCS_ENERGY_TRANSITION' },
      { label: 'Drilling & Subsurface', href: '/training?cat=DRILLING_SUBSURFACE' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    children: [
      { label: 'All Events', href: '/events' },
      { label: 'Conferences', href: '/events?type=CONFERENCE' },
      { label: 'Webinars', href: '/events?type=WEBINAR' },
      { label: 'Workshops', href: '/events?type=WORKSHOP' },
    ],
  },
  { label: 'Community', href: '/community' },
  { label: 'Knowledge', href: '/knowledge' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl shadow-sm border-b border-gray-100 dark:border-navy-800'
          : 'bg-white dark:bg-navy-950 border-b border-gray-100 dark:border-navy-800'
      }`}>
        <div className="container-tight">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-crimson-gradient flex items-center justify-center shadow-md">
                <span className="text-white font-display font-black text-sm">G</span>
              </div>
              <div>
                <div className="font-display font-black text-gray-900 dark:text-white text-base leading-none">GEOFERA</div>
                <div className="text-[9px] text-gray-400 font-medium tracking-wider">Formation Evaluation Excellence</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive(item.href)
                        ? 'text-crimson-600 bg-crimson-50 dark:bg-crimson-900/20 dark:text-crimson-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={13} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.12 }}
                          className="absolute top-full left-0 mt-1.5 w-56 bg-white dark:bg-navy-900 rounded-xl border border-gray-100 dark:border-navy-700 shadow-xl overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-crimson-600 dark:hover:text-crimson-400 hover:bg-crimson-50 dark:hover:bg-crimson-900/10 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                >
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                </button>
              )}

              {session ? (
                <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white/15 transition-all">
                  <User size={15} />
                  <span className="hidden sm:block">Dashboard</span>
                </Link>
              ) : (
                <>
                  <Link href="/login" className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
                    <LogIn size={14} /> Login
                  </Link>
                  <Link href="/register" className="btn-primary text-sm px-4 py-2">
                    Join GEOFERA
                  </Link>
                </>
              )}

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-navy-900 border-l border-gray-100 dark:border-navy-800 overflow-y-auto">
              <div className="p-6 pt-20 space-y-1">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive(item.href)
                          ? 'text-crimson-600 bg-crimson-50 dark:bg-crimson-900/20'
                          : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-0.5 space-y-0.5">
                        {item.children.slice(1).map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center px-4 py-2 rounded-lg text-xs text-gray-500 dark:text-gray-400 hover:text-crimson-600 dark:hover:text-crimson-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100 dark:border-navy-700 mt-4 space-y-2">
                  <Link href="/login" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-navy-600 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <LogIn size={15} /> Login
                  </Link>
                  <Link href="/register" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 w-full btn-primary">
                    Join GEOFERA
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
