'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, CheckCircle, Clock, XCircle, DollarSign, TrendingUp } from 'lucide-react';

const PAYMENTS = [
  { id: 'PAY-2026-0042', user: 'Ahmad Fauzi', email: 'ahmad.fauzi@slb.com', item: 'Advanced Petrophysics Training', type: 'Training', amount: 2750000, date: 'Jun 5, 2026', status: 'Confirmed', method: 'BCA Transfer' },
  { id: 'PAY-2026-0041', user: 'Sari Wulandari', email: 'sari@chevron.com', item: 'GEOFERA Mid-Year Forum 2026', type: 'Event', amount: 500000, date: 'Jun 4, 2026', status: 'Confirmed', method: 'Mandiri Transfer' },
  { id: 'PAY-2026-0040', user: 'Rizky Pratama', email: 'rizky@hal.com', item: 'Formation Evaluation Intensive', type: 'Training', amount: 3500000, date: 'Jun 3, 2026', status: 'Pending', method: 'BNI Transfer' },
  { id: 'PAY-2026-0039', user: 'Dimas Ardiansyah', email: 'dimas@vaalco.com', item: 'Wellsite Geology Workshop', type: 'Training', amount: 1800000, date: 'Jun 2, 2026', status: 'Confirmed', method: 'BCA Transfer' },
  { id: 'PAY-2026-0038', user: 'Fitria Handayani', email: 'fitria@total.com', item: 'Advanced Petrophysics Training', type: 'Training', amount: 2750000, date: 'Jun 1, 2026', status: 'Pending', method: 'BRI Transfer' },
  { id: 'PAY-2026-0037', user: 'Test Account', email: 'test@test.com', item: 'Geosteering Workshop', type: 'Training', amount: 2200000, date: 'May 30, 2026', status: 'Rejected', method: 'BCA Transfer' },
];

const statusConfig = {
  Confirmed: { color: 'bg-green-500/20 text-green-300', icon: CheckCircle },
  Pending: { color: 'bg-yellow-500/20 text-yellow-300', icon: Clock },
  Rejected: { color: 'bg-red-500/20 text-red-300', icon: XCircle },
};

export default function AdminPaymentsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const confirmed = PAYMENTS.filter(p => p.status === 'Confirmed');
  const totalRevenue = confirmed.reduce((sum, p) => sum + p.amount, 0);
  const pending = PAYMENTS.filter(p => p.status === 'Pending').length;

  const filtered = PAYMENTS.filter(p => {
    const matchSearch = !search || p.user.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()) || p.item.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-display font-bold text-2xl">Payment Tracking</h1>
          <p className="text-navy-400 text-sm mt-1">All transaction records</p>
        </div>
        <button className="btn-outline text-sm flex items-center gap-2">
          <Download size={14} /> Export to Excel
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="glass-card p-5">
          <DollarSign size={18} className="text-gold-400 mb-2" />
          <div className="text-white font-bold text-xl">IDR {(totalRevenue / 1000000).toFixed(1)}M</div>
          <div className="text-navy-400 text-xs">Total Revenue (Confirmed)</div>
        </div>
        <div className="glass-card p-5">
          <TrendingUp size={18} className="text-green-400 mb-2" />
          <div className="text-white font-bold text-xl">{confirmed.length}</div>
          <div className="text-navy-400 text-xs">Confirmed Payments</div>
        </div>
        <div className="glass-card p-5">
          <Clock size={18} className="text-yellow-400 mb-2" />
          <div className="text-yellow-400 font-bold text-xl">{pending}</div>
          <div className="text-navy-400 text-xs">Pending Verification</div>
        </div>
        <div className="glass-card p-5">
          <CheckCircle size={18} className="text-blue-400 mb-2" />
          <div className="text-white font-bold text-xl">{PAYMENTS.length}</div>
          <div className="text-navy-400 text-xs">Total Transactions</div>
        </div>
      </div>

      {/* Pending alert */}
      {pending > 0 && (
        <div className="glass-card p-4 border-yellow-500/30 bg-yellow-500/5">
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-yellow-400 flex-shrink-0" />
            <p className="text-yellow-300 text-sm">
              <strong>{pending} payment{pending > 1 ? 's' : ''}</strong> awaiting verification. Review and confirm manually below.
            </p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="glass-card p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, payment ID, or item..."
              className="input-base pl-9 w-full text-sm"
            />
          </div>
          <div className="flex gap-2">
            {['All', 'Confirmed', 'Pending', 'Rejected'].map(s => (
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
                {['Transaction ID', 'Participant', 'Item', 'Amount', 'Method', 'Date', 'Status', 'Action'].map(h => (
                  <th key={h} className="text-left px-5 py-3.5 text-navy-400 text-xs font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((payment, i) => {
                const StatusIcon = statusConfig[payment.status as keyof typeof statusConfig]?.icon;
                return (
                  <motion.tr
                    key={payment.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-navy-800/50 hover:bg-navy-800/30 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <span className="text-navy-300 text-xs font-mono">{payment.id}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div>
                        <p className="text-white text-sm font-medium">{payment.user}</p>
                        <p className="text-navy-500 text-xs">{payment.email}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div>
                        <p className="text-navy-200 text-sm line-clamp-1">{payment.item}</p>
                        <span className="text-navy-500 text-xs">{payment.type}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-white font-semibold text-sm">
                        IDR {payment.amount.toLocaleString('id-ID')}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-navy-400 text-sm">{payment.method}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-navy-400 text-sm">{payment.date}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 w-fit ${
                        statusConfig[payment.status as keyof typeof statusConfig]?.color
                      }`}>
                        <StatusIcon size={10} /> {payment.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      {payment.status === 'Pending' && (
                        <div className="flex gap-1">
                          <button className="px-2.5 py-1 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded text-xs transition-colors">
                            Confirm
                          </button>
                          <button className="px-2.5 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded text-xs transition-colors">
                            Reject
                          </button>
                        </div>
                      )}
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
