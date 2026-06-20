'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, MapPin, Briefcase, Award, UserPlus, Globe } from 'lucide-react';
import MemberCard from '@/components/community/MemberCard';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const DISCIPLINES = [
  'All', 'Petrophysics', 'Formation Evaluation', 'Wellsite Geology',
  'Mud Logging', 'Geosteering', 'Reservoir Geology', 'CCS', 'Drilling',
];

const LOCATIONS = ['All Locations', 'Jakarta', 'Balikpapan', 'Surabaya', 'Palembang', 'Bandung', 'Batam'];

const MEMBERS = [
  { id: '1', name: 'Dr. Budi Santoso', title: 'Senior Petrophysicist', company: 'Pertamina EP', location: 'Jakarta', disciplines: ['Petrophysics', 'Formation Evaluation'], yearsExperience: 18, memberNumber: 'FEXION-00042', memberSince: '2022', isVerified: true },
  { id: '2', name: 'Ir. Dewi Rahayu', title: 'Wellsite Geologist', company: 'Medco E&P', location: 'Palembang', disciplines: ['Wellsite Geology', 'Mud Logging', 'Geosteering'], yearsExperience: 12, memberNumber: 'FEXION-00078', memberSince: '2022', isVerified: true },
  { id: '3', name: 'Ahmad Fauzi, M.T.', title: 'Formation Evaluation Engineer', company: 'Schlumberger', location: 'Balikpapan', disciplines: ['Formation Evaluation', 'Petrophysics'], yearsExperience: 9, memberNumber: 'FEXION-00115', memberSince: '2023' },
  { id: '4', name: 'Sari Wulandari', title: 'Reservoir Geologist', company: 'Chevron Pacific', location: 'Jakarta', disciplines: ['Reservoir Geology', 'Formation Evaluation'], yearsExperience: 14, memberNumber: 'FEXION-00163', memberSince: '2023', isVerified: true },
  { id: '5', name: 'Rizky Pratama', title: 'Mud Logging Engineer', company: 'Halliburton', location: 'Balikpapan', disciplines: ['Mud Logging', 'Wellsite Geology'], yearsExperience: 6, memberNumber: 'FEXION-00201', memberSince: '2023' },
  { id: '6', name: 'Dr. Hendra Kurniawan', title: 'Geosteering Specialist', company: 'Baker Hughes', location: 'Jakarta', disciplines: ['Geosteering', 'Drilling', 'Reservoir Geology'], yearsExperience: 20, memberNumber: 'FEXION-00034', memberSince: '2022', isVerified: true },
  { id: '7', name: 'Nurul Hidayah, S.T.', title: 'CCS Engineer', company: 'Shell Indonesia', location: 'Jakarta', disciplines: ['CCS', 'Reservoir Geology'], yearsExperience: 7, memberNumber: 'FEXION-00287', memberSince: '2024' },
  { id: '8', name: 'Andri Setiawan', title: 'Drilling Engineer', company: 'Pertamina Hulu Energi', location: 'Surabaya', disciplines: ['Drilling', 'Formation Evaluation'], yearsExperience: 11, memberNumber: 'FEXION-00199', memberSince: '2023' },
  { id: '9', name: 'Fitria Handayani', title: 'Petrophysicist', company: 'TotalEnergies EP', location: 'Bandung', disciplines: ['Petrophysics', 'Formation Evaluation', 'Reservoir Geology'], yearsExperience: 8, memberNumber: 'FEXION-00241', memberSince: '2023', isVerified: true },
  { id: '10', name: 'Dimas Ardiansyah', title: 'Wellsite Geologist', company: 'Vaalco Energy', location: 'Batam', disciplines: ['Wellsite Geology', 'Mud Logging'], yearsExperience: 5, memberNumber: 'FEXION-00334', memberSince: '2024' },
  { id: '11', name: 'Ratna Sari Dewi', title: 'Subsurface Integration Engineer', company: 'Eni Indonesia', location: 'Jakarta', disciplines: ['Drilling', 'Formation Evaluation', 'CCS'], yearsExperience: 13, memberNumber: 'FEXION-00089', memberSince: '2022', isVerified: true },
  { id: '12', name: 'Guntur Wibowo', title: 'Reservoir Geologist', company: 'Repsol Indonesia', location: 'Balikpapan', disciplines: ['Reservoir Geology', 'Geosteering'], yearsExperience: 10, memberNumber: 'FEXION-00156', memberSince: '2023' },
];

const communityStats = [
  { label: 'Members', value: '2,400+', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Companies', value: '180+', icon: Briefcase, color: 'text-purple-500', bg: 'bg-purple-50' },
  { label: 'Countries', value: '12', icon: Globe, color: 'text-teal-500', bg: 'bg-teal-50' },
  { label: 'Verified Experts', value: '340+', icon: Award, color: 'text-amber-500', bg: 'bg-amber-50' },
];

export default function CommunityPage() {
  const [search, setSearch] = useState('');
  const [discipline, setDiscipline] = useState('All');
  const [location, setLocation] = useState('All Locations');

  const filtered = MEMBERS.filter(m => {
    const matchSearch = !search ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.company.toLowerCase().includes(search.toLowerCase()) ||
      m.title.toLowerCase().includes(search.toLowerCase());
    const matchDiscipline = discipline === 'All' || m.disciplines.includes(discipline);
    const matchLocation = location === 'All Locations' || m.location === location;
    return matchSearch && matchDiscipline && matchLocation;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)] pt-16">
        {/* Light Hero */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-navy-900 dark:via-navy-950 dark:to-navy-900 py-16 border-b border-gray-100 dark:border-navy-800">
          <div className="container-xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="tag-crimson mb-4 inline-block">Professional Network</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Connect With <span className="text-gradient">Industry Experts</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Build meaningful professional connections across formation evaluation, geoscience, and subsurface disciplines throughout Indonesia and beyond.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {communityStats.map(({ label, value, icon: Icon, color, bg }) => (
                <div key={label} className="bg-white dark:bg-navy-800 rounded-2xl p-4 text-center shadow-sm border border-gray-100 dark:border-navy-700">
                  <div className={`w-10 h-10 ${bg} dark:bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div className="text-gray-900 dark:text-white font-bold text-xl">{value}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Directory */}
        <section className="py-10">
          <div className="container-xl">
            {/* Filters */}
            <div className="bg-white dark:bg-navy-900 border border-gray-100 dark:border-navy-700 rounded-2xl p-5 mb-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search by name, company, or role..."
                    className="input-base pl-9 w-full"
                  />
                </div>
                <select
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="input-base md:w-48"
                >
                  {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>

              {/* Discipline pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {DISCIPLINES.map(d => (
                  <button
                    key={d}
                    onClick={() => setDiscipline(d)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      discipline === d
                        ? 'bg-crimson-600 text-white shadow-sm'
                        : 'bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-700 border border-gray-200 dark:border-navy-600'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Showing <span className="text-gray-900 dark:text-white font-semibold">{filtered.length}</span> of {MEMBERS.length} members
              </p>
              <button className="btn-outline text-sm flex items-center gap-2">
                <UserPlus size={14} /> Join Community
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((member, i) => (
                <MemberCard key={member.id} member={member} index={i} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <Users size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">No members found</h3>
                <p className="text-gray-400">Try adjusting your search or filters</p>
              </div>
            )}

            {/* Join CTA */}
            <div className="mt-16 bg-gradient-to-r from-indigo-50 to-rose-50 dark:from-navy-800 dark:to-navy-900 border border-indigo-100 dark:border-navy-700 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-3">
                Are You a Formation Evaluation Professional?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-lg mx-auto">
                Join 2,400+ geoscientists and subsurface engineers in Indonesia's most active technical community.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/register" className="btn-primary">Create Free Profile</a>
                <a href="/about" className="btn-outline">Learn About Benefits</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
