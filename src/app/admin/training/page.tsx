'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit3, Trash2, Users, Star, BookOpen } from 'lucide-react';

const TRAININGS = [
  { id: '1', title: 'Advanced Petrophysics: Log Interpretation Masterclass', category: 'Petrophysics', level: 'Advanced', duration: '3 Days', price: 2750000, registered: 38, capacity: 50, date: 'Jul 14–16, 2026', format: 'Online', rating: 4.9, status: 'Open' },
  { id: '2', title: 'Formation Evaluation Intensive Workshop', category: 'Formation Evaluation', level: 'Intermediate', duration: '2 Days', price: 3500000, registered: 22, capacity: 35, date: 'Jul 22–23, 2026', format: 'Offline', rating: 4.8, status: 'Open' },
  { id: '3', title: 'Wellsite Geology Fundamentals', category: 'Wellsite Geology', level: 'Foundation', duration: '2 Days', price: 1800000, registered: 31, capacity: 40, date: 'Aug 5–6, 2026', format: 'Hybrid', rating: 4.7, status: 'Open' },
  { id: '4', title: 'Geosteering & Well Placement Techniques', category: 'Geosteering', level: 'Advanced', duration: '4 Days', price: 4500000, registered: 18, capacity: 25, date: 'Aug 18–21, 2026', format: 'Offline', rating: 4.9, status: 'Open' },
  { id: '5', title: 'Mud Logging Operations Certificate Program', category: 'Mud Logging', level: 'Foundation', duration: '3 Days', price: 2200000, registered: 45, capacity: 45, date: 'Jun 10–12, 2026', format: 'Offline', rating: 4.6, status: 'Full' },
  { id: '6', title: 'CCS Site Characterization Workshop', category: 'CCS & Energy Transition', level: 'Intermediate', duration: '1 Day', price: 1500000, registered: 12, capacity: 30, date: 'Sep 3, 2026', format: 'Online', rating: 0, status: 'Open' },
];

const levelColors: Record<string, string> = {
  Foundation: 'bg-green-500/20 text-green-300',
  Intermediate: 'bg-blue-500/20 text-blue-300',
  Advanced: 'bg-purple-500/20 text-purple-300',
};

export default function AdminTrainingPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = TRAININGS.filter(t => {
    const matchSearch = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || t.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalRevenue = TRAININGS.reduce((sum, t) => sum + (t.price * t.registered), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-display font-bold text-2xl">Training Management</h1>
          <p className="text-navy-400 text-sm mt-1">{TRAININGS.length} active programs</p>
        </div>
        <button className="btn-primary text-sm flex items-center gap-2">
          <Plus size={14} /> Add Training
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="glass-card p-4 text-center">
          <BookOpen size={18} className="text-blue-400 mx-auto mb-2" />
          <div className="text-white font-bold text-xl">{TRAININGS.length}</div>
          <div className="text-navy-400 text-xs">Total Programs</div>
        </div>
        <div className="glass-card p-4 text-center">
          <Users size={18} className="text-green-400 mx-auto mb-2" />
          <div className="text-white font-bold text-xl">{TRAININGS.reduce((sum, t) => sum + t.registered, 0)}</div>
          <div className="text-navy-400 text-xs">Total Participants</div>
        </div>
        <div className="glass-card p-4 text-center">
          <Star size={18} className="text-gold-400 mx-auto mb-2" />
          <div className="text-white font-bold text-xl">{(TRAININGS.filter(t => t.rating > 0).reduce((sum, t) => sum + t.rating, 0) / TRAININGS.filter(t => t.rating > 0).length).toFixed(1)}</div>
          <div className="text-navy-400 text-xs">Avg. Rating</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-gold-400 font-mono text-xs mb-2">IDR</div>
          <div className="text-white font-bold text-xl">{(totalRevenue / 1000000).toFixed(0)}M</div>
          <div className="text-navy-400 text-xs">Revenue Generated</div>
        </div>
      </div>

      {/* Filter */}
      <div className="glass-card p-4 flex gap-3">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search programs..."
            className="input-base pl-9 w-full text-sm"
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Open', 'Full', 'Completed'].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                statusFilter === s ? 'bg-crimson-600 text-white' : 'bg-navy-800 text-navy-300 hover:bg-navy-700 border border-navy-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((training, i) => (
          <motion.div
            key={training.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex flex-wrap gap-1.5">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${levelColors[training.level]}`}>
                  {training.level}
                </span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                  training.status === 'Full' ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'
                }`}>
                  {training.status}
                </span>
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 text-navy-500 hover:text-white rounded-lg hover:bg-navy-700 transition-colors">
                  <Edit3 size={13} />
                </button>
                <button className="p-1.5 text-navy-500 hover:text-red-400 rounded-lg hover:bg-navy-700 transition-colors">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            <h3 className="text-white font-semibold text-sm leading-snug mb-1">{training.title}</h3>
            <p className="text-navy-500 text-xs mb-3">{training.category} · {training.duration} · {training.format}</p>

            <div className="flex items-center justify-between text-xs mb-3">
              <span className="text-navy-300">{training.date}</span>
              {training.rating > 0 && (
                <span className="flex items-center gap-1 text-gold-400">
                  <Star size={11} fill="currentColor" /> {training.rating}
                </span>
              )}
            </div>

            <div className="mb-1">
              <div className="flex justify-between text-xs mb-1 text-navy-400">
                <span>{training.registered}/{training.capacity} registered</span>
                <span>{Math.round((training.registered / training.capacity) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-navy-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${training.status === 'Full' ? 'bg-red-500' : 'bg-crimson-500'}`}
                  style={{ width: `${(training.registered / training.capacity) * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-navy-700/50 flex justify-between items-center">
              <span className="text-white font-semibold text-sm">
                IDR {training.price.toLocaleString('id-ID')}
              </span>
              <span className="text-navy-400 text-xs">
                Est. IDR {((training.price * training.registered) / 1000000).toFixed(1)}M
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
