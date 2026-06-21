'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Calendar, Users, MapPin, Edit3, Trash2, Eye, MoreHorizontal } from 'lucide-react';

const EVENTS = [
  { id: '1', title: 'GEOFERA Mid-Year Technical Forum 2026', type: 'Conference', date: 'Jul 28, 2026', location: 'Jakarta', registered: 142, capacity: 200, status: 'Open', featured: true },
  { id: '2', title: 'Advanced Petrophysics Training Workshop', type: 'Workshop', date: 'Jul 14–16, 2026', location: 'Online', registered: 38, capacity: 50, status: 'Open', featured: false },
  { id: '3', title: 'Geosteering & Well Placement Webinar', type: 'Webinar', date: 'Jun 20, 2026', location: 'Online', registered: 67, capacity: 100, status: 'Open', featured: false },
  { id: '4', title: 'GEOFERA Annual Symposium 2025', type: 'Conference', date: 'Nov 14–15, 2025', location: 'Jakarta', registered: 387, capacity: 400, status: 'Completed', featured: false },
  { id: '5', title: 'CCS Technology Forum', type: 'Webinar', date: 'Mar 20, 2025', location: 'Online', registered: 204, capacity: 300, status: 'Completed', featured: false },
];

const typeColors: Record<string, string> = {
  Conference: 'bg-blue-500/20 text-blue-300',
  Workshop: 'bg-purple-500/20 text-purple-300',
  Webinar: 'bg-teal-500/20 text-teal-300',
};

const statusColors: Record<string, string> = {
  Open: 'bg-green-500/20 text-green-300',
  Completed: 'bg-navy-700 text-navy-400',
  Cancelled: 'bg-red-500/20 text-red-300',
};

export default function AdminEventsPage() {
  const [search, setSearch] = useState('');

  const filtered = EVENTS.filter(e =>
    !search || e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-display font-bold text-2xl">Event Management</h1>
          <p className="text-navy-400 text-sm mt-1">{EVENTS.length} total events</p>
        </div>
        <button className="btn-primary text-sm flex items-center gap-2">
          <Plus size={14} /> Create Event
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Events', value: EVENTS.length },
          { label: 'Active Events', value: EVENTS.filter(e => e.status === 'Open').length },
          { label: 'Total Registrations', value: EVENTS.reduce((sum, e) => sum + e.registered, 0).toLocaleString() },
          { label: 'Avg. Fill Rate', value: Math.round(EVENTS.reduce((sum, e) => sum + (e.registered / e.capacity) * 100, 0) / EVENTS.length) + '%' },
        ].map(({ label, value }) => (
          <div key={label} className="glass-card p-4 text-center">
            <div className="text-white font-bold text-2xl">{value}</div>
            <div className="text-navy-400 text-xs mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="glass-card p-4">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search events..."
            className="input-base pl-9 w-full text-sm"
          />
        </div>
      </div>

      {/* Events table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-700/50">
                {['Event', 'Type', 'Date', 'Location', 'Registrations', 'Status', ''].map(h => (
                  <th key={h} className="text-left px-5 py-3.5 text-navy-400 text-xs font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((event, i) => (
                <motion.tr
                  key={event.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-navy-800/50 hover:bg-navy-800/30 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {event.featured && <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />}
                      <span className="text-white text-sm font-medium line-clamp-1">{event.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColors[event.type]}`}>
                      {event.type}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-navy-300 text-sm flex items-center gap-1.5">
                      <Calendar size={12} className="text-navy-500" /> {event.date}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-navy-300 text-sm flex items-center gap-1.5">
                      <MapPin size={12} className="text-navy-500" /> {event.location}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-navy-300 flex items-center gap-1">
                          <Users size={11} /> {event.registered}/{event.capacity}
                        </span>
                        <span className="text-navy-500">{Math.round((event.registered / event.capacity) * 100)}%</span>
                      </div>
                      <div className="h-1.5 bg-navy-800 rounded-full overflow-hidden w-24">
                        <div
                          className="h-full bg-crimson-500 rounded-full"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColors[event.status]}`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 text-navy-500 hover:text-white transition-colors rounded-lg hover:bg-navy-700">
                        <Eye size={14} />
                      </button>
                      <button className="p-1.5 text-navy-500 hover:text-white transition-colors rounded-lg hover:bg-navy-700">
                        <Edit3 size={14} />
                      </button>
                      <button className="p-1.5 text-navy-500 hover:text-red-400 transition-colors rounded-lg hover:bg-navy-700">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
