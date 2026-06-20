'use client'
// src/app/admin/layout.tsx

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Users, Calendar, BookOpen, CreditCard,
  FileText, Image, Settings, Bell, LogOut, Award, BarChart3, Send
} from 'lucide-react'

const sidebarItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { section: 'Content' },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Events', href: '/admin/events', icon: Calendar },
  { label: 'Training', href: '/admin/training', icon: BookOpen },
  { label: 'Articles', href: '/admin/articles', icon: FileText },
  { label: 'Gallery', href: '/admin/gallery', icon: Image },
  { section: 'Operations' },
  { label: 'Payments', href: '/admin/payments', icon: CreditCard },
  { label: 'Certificates', href: '/admin/certificates', icon: Award },
  { label: 'Broadcast', href: '/admin/broadcast', icon: Send },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] dark:bg-navy-950 flex">
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 bg-[var(--bg-primary)] dark:bg-navy-900 border-r border-[var(--border-color)] flex flex-col">
        {/* Brand */}
        <div className="h-16 flex items-center px-5 border-b border-[var(--border-color)]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-crimson-gradient flex items-center justify-center shadow-crimson">
              <span className="text-white font-display font-black text-sm">G</span>
            </div>
            <div>
              <div className="font-display font-black text-sm text-[var(--text-primary)] leading-none">FEXION</div>
              <div className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider">Admin Panel</div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-0.5">
            {sidebarItems.map((item, i) => {
              if ('section' in item) {
                return (
                  <div key={i} className="pt-4 pb-1 px-2">
                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">
                      {item.section}
                    </span>
                  </div>
                )
              }

              const isActive = pathname === item.href
              const Icon = item.icon!

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`
                    flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
                    ${isActive
                      ? 'bg-crimson-500/10 text-crimson-500 dark:bg-crimson-500/15'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                    }
                  `}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Bottom */}
        <div className="border-t border-[var(--border-color)] p-3">
          <div className="flex items-center gap-2.5 px-3 py-2">
            <div className="w-7 h-7 rounded-full bg-crimson-gradient flex items-center justify-center text-white font-bold text-xs">A</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-[var(--text-primary)] truncate">Admin</div>
              <div className="text-[10px] text-[var(--text-muted)] truncate">admin@fexion-indonesia.org</div>
            </div>
            <button className="text-[var(--text-muted)] hover:text-crimson-500 transition-colors">
              <LogOut size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <div className="h-16 bg-[var(--bg-primary)] dark:bg-navy-900/50 border-b border-[var(--border-color)] flex items-center justify-between px-6">
          <div />
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-crimson-500" />
            </button>
            <div className="w-8 h-8 rounded-full bg-crimson-gradient flex items-center justify-center text-white font-bold text-sm">A</div>
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
