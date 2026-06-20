'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, UserPlus, Download, CheckCircle, Clock, XCircle, MoreHorizontal, Shield } from 'lucide-react';

const USERS = [
  { id: '1', name: 'Dr. Budi Santoso', email: 'budi.santoso@pertamina.com', company: 'Pertamina EP', role: 'Member', status: 'Active', joined: '15 Jan 2022', memberNo: 'GOFEW-00042', verified: true },
  { id: '2', name: 'Ir. Dewi Rahayu', email: 'dewi.rahayu@medco.com', company: 'Medco E&P', role: 'Member', status: 'Active', joined: '20 Feb 2022', memberNo: 'GOFEW-00078', verified: true },
  { id: '3', name: 'Ahmad Fauzi', email: 'ahmad.fauzi@slb.com', company: 'Schlumberger', role: 'Member', status: 'Active', joined: '3 May 2023', memberNo: 'GOFEW-00115', verified: false },
  { id: '4', name: 'Sari Wulandari', email: 'sari.wulandari@chevron.com', company: 'Chevron Pacific', role: 'Moderator', status: 'Active', joined: '11 Jun 2023', memberNo: 'GOFEW-00163', verified: true },
  { id: '5', name: 'Rizky Pratama', email: 'rizky.pratama@hal.com', company: 'Halliburton', role: 'Member', status: 'Pending', joined: '8 Dec 2023', memberNo: 'GOFEW-00201', verified: false },
  { id: '6', name: 'Nurul Hidayah', email: 'nurul.hidayah@shell.com', company: 'Shell Indonesia', role: 'Member', status: 'Active', joined: '14 Mar 2024', memberNo: 'GOFEW-00287', verified: false },
  { id: '7', name: 'Andri Setiawan', email: 'andri.s@phe.com', company: 'Pertamina Hulu Energi', role: 'Member', status: 'Active', joined: '25 Sep 2023', memberNo: 'GOFEW-00199', verified: false },
  { id: '8', name: 'Test User', email: 'test@example.com', company: 'Unknown', role: 'Member', status: 'Suspended', joined: '1 Jan 2024', memberNo: 'GOFEW-00350', verified: false },
];

const statusConfig = {
  Active: { color: 'bg-green-500/20 text-green-300', icon: CheckCircle },
  Pending: { color: 'bg-yellow-500/20 text-yellow-300', icon: Clock },
  Suspended: { color: 'bg-red-500/20 text-red-300', icon: XCircle },
};

export default function AdminUsersPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = USERS.filter(u => {
    const matchSearch = !search || u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) || u.memberNo.includes(search);
    const matchStatus = statusFilter === 'All' || u.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-display font-bold text-2xl">User Management</h1>
          <p className="text-navy-400 text-sm mt-1">{USERS.length} total members</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-outline text-sm flex items-center gap-2">
            <Download size={14} /> Export
          </button>
          <button className="btn-primary text-sm flex items-center gap-2">
            <UserPlus size={14} /> Add Member
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Members', value: USERS.length, color: 'text-white' },
          { label: 'Active', value: USERS.filter(u => u.status === 'Active').length, color: 'text-green-400' },
          { label: 'Pending', value: USERS.filter(u => u.status === 'Pending').length, color: 'text-yellow-400' },
          { label: 'Verified', value: USERS.filter(u => u.verified).length, color: 'text-gold-400' },
        ].map(({ label, value, color }) => (
          <div key={label} className="glass-card p-4 text-center">
            <div className={`font-bold text-2xl ${color}`}>{value}</div>
            <div className="text-navy-400 text-xs mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="glass-card p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, email, or member number..."
              className="input-base pl-9 w-full text-sm"
            />
          </div>
          <div className="flex gap-2">
            {['All', 'Active', 'Pending', 'Suspended'].map(s => (
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
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-700/50">
                <th className="text-left px-5 py-3.5 text-navy-400 text-xs font-medium">Member</th>
                <th className="text-left px-5 py-3.5 text-navy-400 text-xs font-medium">Member No.</th>
                <th className="text-left px-5 py-3.5 text-navy-400 text-xs font-medium">Company</th>
                <th className="text-left px-5 py-3.5 text-navy-400 text-xs font-medium">Role</th>
                <th className="text-left px-5 py-3.5 text-navy-400 text-xs font-medium">Status</th>
                <th className="text-left px-5 py-3.5 text-navy-400 text-xs font-medium">Joined</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((user, i) => {
                const StatusIcon = statusConfig[user.status as keyof typeof statusConfig]?.icon;
                return (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-navy-800/50 hover:bg-navy-800/30 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-white text-sm font-medium">{user.name}</span>
                            {user.verified && <Shield size={11} className="text-gold-400" />}
                          </div>
                          <span className="text-navy-400 text-xs">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-navy-300 text-sm font-mono">{user.memberNo}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-navy-300 text-sm">{user.company}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        user.role === 'Moderator' ? 'bg-purple-500/20 text-purple-300' : 'bg-navy-700 text-navy-300'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 w-fit ${
                        statusConfig[user.status as keyof typeof statusConfig]?.color
                      }`}>
                        <StatusIcon size={10} />
                        {user.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-navy-400 text-sm">{user.joined}</span>
                    </td>
                    <td className="px-5 py-4">
                      <button className="text-navy-500 hover:text-white transition-colors p-1">
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
