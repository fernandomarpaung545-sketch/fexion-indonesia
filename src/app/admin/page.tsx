'use client'
// src/app/admin/page.tsx

import { Users, Calendar, BookOpen, DollarSign, TrendingUp, UserCheck, Activity, Award } from 'lucide-react'

const statsCards = [
  { label: 'Total Members', value: '2,847', change: '+124', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'Upcoming Events', value: '8', change: '+2', icon: Calendar, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { label: 'Active Trainings', value: '12', change: '+3', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { label: 'Monthly Revenue', value: 'IDR 48.2M', change: '+18%', icon: DollarSign, color: 'text-gold-500', bg: 'bg-gold-500/10' },
  { label: 'New Members (MTD)', value: '124', change: '+31%', icon: UserCheck, color: 'text-crimson-500', bg: 'bg-crimson-500/10' },
  { label: 'Certificates Issued', value: '1,204', change: '+67', icon: Award, color: 'text-orange-500', bg: 'bg-orange-500/10' },
]

const recentRegistrations = [
  { name: 'Agus Santoso', event: 'Advanced Petrophysical Log Analysis', date: '2 min ago', status: 'PENDING' },
  { name: 'Ratna Dewi', event: 'GOFEW Annual Conference 2025', date: '15 min ago', status: 'CONFIRMED' },
  { name: 'Budi Pratama', event: 'Geosteering in Thin-Bed Reservoirs', date: '1 hr ago', status: 'CONFIRMED' },
  { name: 'Sari Indah', event: 'Formation Evaluation Fundamentals', date: '2 hrs ago', status: 'PENDING' },
  { name: 'Doni Kusuma', event: 'CCS Site Characterization', date: '3 hrs ago', status: 'CONFIRMED' },
]

const statusColors: Record<string, string> = {
  PENDING: 'bg-gold-500/15 text-gold-500',
  CONFIRMED: 'bg-emerald-500/15 text-emerald-500',
  REJECTED: 'bg-crimson-500/15 text-crimson-500',
}

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-bold text-2xl text-[var(--text-primary)]">Dashboard Overview</h1>
        <p className="text-[var(--text-muted)] text-sm mt-1">GOFEW Indonesia — Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {statsCards.map((stat) => (
          <div key={stat.label} className="card-base p-5">
            <div className={`w-9 h-9 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
              <stat.icon size={18} className={stat.color} />
            </div>
            <div className="font-display font-bold text-xl text-[var(--text-primary)]">{stat.value}</div>
            <div className="text-xs text-[var(--text-muted)] mb-1">{stat.label}</div>
            <div className="text-[11px] font-semibold text-emerald-500">{stat.change} this month</div>
          </div>
        ))}
      </div>

      {/* Recent Activity + Quick Actions */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Registrations */}
        <div className="lg:col-span-2 card-base">
          <div className="px-6 py-4 border-b border-[var(--border-color)] flex items-center justify-between">
            <h2 className="font-semibold text-[var(--text-primary)]">Recent Registrations</h2>
            <button className="text-xs text-crimson-500 hover:text-crimson-400">View All</button>
          </div>
          <div className="divide-y divide-[var(--border-color)]">
            {recentRegistrations.map((reg, i) => (
              <div key={i} className="px-6 py-4 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-crimson-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {reg.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-[var(--text-primary)] truncate">{reg.name}</div>
                  <div className="text-xs text-[var(--text-muted)] truncate">{reg.event}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className={`tag-base text-[10px] ${statusColors[reg.status]}`}>{reg.status}</span>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1">{reg.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card-base p-6">
          <h2 className="font-semibold text-[var(--text-primary)] mb-5">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { label: 'Create New Event', icon: Calendar, href: '/admin/events/new', color: 'text-purple-500' },
              { label: 'Add Training', icon: BookOpen, href: '/admin/training/new', color: 'text-emerald-500' },
              { label: 'Approve Payments', icon: DollarSign, href: '/admin/payments', color: 'text-gold-500', badge: '5' },
              { label: 'Export Member List', icon: Users, href: '/admin/users/export', color: 'text-blue-500' },
              { label: 'Generate Certificates', icon: Award, href: '/admin/certificates', color: 'text-orange-500' },
              { label: 'Send Broadcast', icon: Activity, href: '/admin/broadcast', color: 'text-crimson-500' },
            ].map(({ label, icon: Icon, href, color, badge }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors group"
              >
                <Icon size={16} className={color} />
                <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors flex-1">
                  {label}
                </span>
                {badge && (
                  <span className="w-5 h-5 rounded-full bg-crimson-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
