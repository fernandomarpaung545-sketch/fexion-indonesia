'use client';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Award, FileText, Bell, Settings, ChevronRight, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const UPCOMING = [
  { id: '1', type: 'Training', title: 'Advanced Petrophysics Log Interpretation', date: 'Jul 14–16, 2026', status: 'Confirmed', color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: '2', type: 'Event', title: 'GOFEW Mid-Year Technical Forum 2026', date: 'Jul 28, 2026', status: 'Registered', color: 'text-green-400', bg: 'bg-green-500/20' },
];

const RECENT_ACTIVITY = [
  { id: '1', text: 'Certificate issued for Wellsite Geology Fundamentals', time: '2 days ago', icon: Award, color: 'text-gold-400' },
  { id: '2', text: 'Registration confirmed for Technical Forum', time: '5 days ago', icon: CheckCircle, color: 'text-green-400' },
  { id: '3', text: 'Article "NMR Log Interpretation" bookmarked', time: '1 week ago', icon: BookOpen, color: 'text-blue-400' },
  { id: '4', text: 'Profile updated with new expertise tags', time: '2 weeks ago', icon: Settings, color: 'text-navy-400' },
];

const STATS = [
  { label: 'Trainings Completed', value: '4', icon: BookOpen, color: 'from-blue-600/20 to-blue-800/20 border-blue-500/20' },
  { label: 'Events Attended', value: '7', icon: Calendar, color: 'from-purple-600/20 to-purple-800/20 border-purple-500/20' },
  { label: 'Certificates Earned', value: '4', icon: Award, color: 'from-gold-600/20 to-gold-800/20 border-gold-500/20' },
  { label: 'Articles Saved', value: '12', icon: FileText, color: 'from-teal-600/20 to-teal-800/20 border-teal-500/20' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-navy-950 pt-20">
      <div className="container-xl py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start justify-between mb-8"
        >
          <div>
            <p className="text-navy-400 text-sm mb-1">Welcome back,</p>
            <h1 className="text-white font-display font-bold text-3xl">Ahmad Fauzi</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="tag-gold text-xs">GOFEW-00115</span>
              <span className="text-navy-400 text-sm">Formation Evaluation Engineer · Schlumberger</span>
            </div>
          </div>
          <button className="relative p-2.5 rounded-xl bg-navy-800 border border-navy-700 text-navy-300 hover:text-white transition-colors">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-crimson-500 rounded-full" />
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {STATS.map(({ label, value, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-gradient-to-br ${color} border rounded-2xl p-5`}
            >
              <Icon size={20} className="text-white/70 mb-3" />
              <div className="text-white font-bold text-2xl">{value}</div>
              <div className="text-navy-300 text-sm mt-0.5">{label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-crimson-400" />
                Upcoming Registrations
              </h2>
              <div className="space-y-3">
                {UPCOMING.map(item => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-navy-800/50 rounded-xl border border-navy-700/50">
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium ${item.bg} ${item.color}`}>
                      {item.type}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{item.title}</p>
                      <p className="text-navy-400 text-xs mt-0.5 flex items-center gap-1">
                        <Clock size={10} /> {item.date}
                      </p>
                    </div>
                    <span className="text-green-400 text-xs font-medium flex items-center gap-1">
                      <CheckCircle size={11} /> {item.status}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/training" className="mt-4 text-crimson-400 text-sm hover:text-crimson-300 flex items-center gap-1 transition-colors">
                Browse more training <ChevronRight size={14} />
              </Link>
            </div>

            {/* Certificates */}
            <div className="glass-card p-6">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Award size={16} className="text-gold-400" />
                My Certificates
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: 'Wellsite Geology Fundamentals', date: 'Apr 2026', level: 'Intermediate' },
                  { title: 'Formation Evaluation Core', date: 'Feb 2026', level: 'Advanced' },
                  { title: 'Petrophysics Essentials', date: 'Nov 2025', level: 'Foundation' },
                  { title: 'Mud Logging Operations', date: 'Aug 2025', level: 'Foundation' },
                ].map(cert => (
                  <div key={cert.title} className="p-4 bg-gradient-to-br from-gold-900/30 to-navy-900 border border-gold-700/20 rounded-xl group cursor-pointer hover:border-gold-500/40 transition-all">
                    <Award size={16} className="text-gold-400 mb-2" />
                    <p className="text-white text-xs font-medium leading-snug mb-1">{cert.title}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-navy-400 text-xs">{cert.date}</span>
                      <span className="text-gold-500 text-xs">{cert.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile completion */}
            <div className="glass-card p-5">
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <TrendingUp size={14} className="text-blue-400" />
                Profile Strength
              </h3>
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-navy-300">78% complete</span>
                  <span className="text-blue-400">Good</span>
                </div>
                <div className="h-2 bg-navy-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
              <div className="space-y-2 mt-4">
                {[
                  { item: 'Add profile photo', done: false },
                  { item: 'Link LinkedIn profile', done: false },
                  { item: 'Add 3 expertise tags', done: true },
                  { item: 'Complete bio', done: true },
                ].map(({ item, done }) => (
                  <div key={item} className={`flex items-center gap-2 text-xs ${done ? 'text-navy-500 line-through' : 'text-navy-300'}`}>
                    <CheckCircle size={12} className={done ? 'text-green-500' : 'text-navy-600'} />
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn-outline w-full text-xs mt-4 justify-center">
                Complete Profile
              </button>
            </div>

            {/* Recent activity */}
            <div className="glass-card p-5">
              <h3 className="text-white font-semibold text-sm mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {RECENT_ACTIVITY.map(({ id, text, time, icon: Icon, color }) => (
                  <div key={id} className="flex items-start gap-3">
                    <Icon size={14} className={`${color} flex-shrink-0 mt-0.5`} />
                    <div>
                      <p className="text-navy-300 text-xs leading-relaxed">{text}</p>
                      <p className="text-navy-600 text-xs mt-0.5">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="glass-card p-5">
              <h3 className="text-white font-semibold text-sm mb-3">Quick Access</h3>
              <div className="space-y-1">
                {[
                  { href: '/training', label: 'Browse Training', icon: BookOpen },
                  { href: '/events', label: 'Upcoming Events', icon: Calendar },
                  { href: '/knowledge', label: 'Knowledge Center', icon: FileText },
                  { href: '/community', label: 'Member Directory', icon: ChevronRight },
                ].map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-navy-300 hover:bg-navy-800 hover:text-white transition-colors text-sm"
                  >
                    <span className="flex items-center gap-2"><Icon size={14} /> {label}</span>
                    <ChevronRight size={12} className="text-navy-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
