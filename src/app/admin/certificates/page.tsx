'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Download, Search, Send, CheckCircle, Clock, FileText } from 'lucide-react';

const CERTIFICATES = [
  { id: 'CERT-2026-0041', recipient: 'Ahmad Fauzi', training: 'Wellsite Geology Fundamentals', completedDate: 'Apr 16, 2026', issuedDate: 'Apr 18, 2026', level: 'Intermediate', status: 'Issued', delivered: true },
  { id: 'CERT-2026-0040', recipient: 'Sari Wulandari', training: 'Formation Evaluation Intensive', completedDate: 'Apr 10, 2026', issuedDate: 'Apr 12, 2026', level: 'Advanced', status: 'Issued', delivered: true },
  { id: 'CERT-2026-0039', recipient: 'Dimas Ardiansyah', training: 'Mud Logging Operations', completedDate: 'Mar 14, 2026', issuedDate: 'Mar 16, 2026', level: 'Foundation', status: 'Issued', delivered: false },
  { id: 'CERT-2026-0038', recipient: 'Nurul Hidayah', training: 'Advanced Petrophysics: Log Interpretation', completedDate: 'Jun 16, 2026', issuedDate: null, level: 'Advanced', status: 'Pending', delivered: false },
  { id: 'CERT-2026-0037', recipient: 'Rizky Pratama', training: 'Advanced Petrophysics: Log Interpretation', completedDate: 'Jun 16, 2026', issuedDate: null, level: 'Advanced', status: 'Pending', delivered: false },
];

const levelColors: Record<string, string> = {
  Foundation: 'bg-green-500/20 text-green-300',
  Intermediate: 'bg-blue-500/20 text-blue-300',
  Advanced: 'bg-purple-500/20 text-purple-300',
};

export default function AdminCertificatesPage() {
  const [search, setSearch] = useState('');

  const filtered = CERTIFICATES.filter(c =>
    !search ||
    c.recipient.toLowerCase().includes(search.toLowerCase()) ||
    c.id.toLowerCase().includes(search.toLowerCase()) ||
    c.training.toLowerCase().includes(search.toLowerCase())
  );

  const pending = CERTIFICATES.filter(c => c.status === 'Pending').length;
  const issued = CERTIFICATES.filter(c => c.status === 'Issued').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-display font-bold text-2xl">Certificate Management</h1>
          <p className="text-navy-400 text-sm mt-1">Issue and manage training certificates</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline text-sm flex items-center gap-2">
            <Download size={14} /> Export
          </button>
          <button className="btn-primary text-sm flex items-center gap-2">
            <Award size={14} /> Issue Selected
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="glass-card p-4 text-center">
          <Award size={18} className="text-gold-400 mx-auto mb-2" />
          <div className="text-white font-bold text-xl">{CERTIFICATES.length}</div>
          <div className="text-navy-400 text-xs">Total Certificates</div>
        </div>
        <div className="glass-card p-4 text-center">
          <CheckCircle size={18} className="text-green-400 mx-auto mb-2" />
          <div className="text-white font-bold text-xl">{issued}</div>
          <div className="text-navy-400 text-xs">Issued</div>
        </div>
        <div className="glass-card p-4 text-center">
          <Clock size={18} className="text-yellow-400 mx-auto mb-2" />
          <div className="text-yellow-400 font-bold text-xl">{pending}</div>
          <div className="text-navy-400 text-xs">Pending Issuance</div>
        </div>
        <div className="glass-card p-4 text-center">
          <Send size={18} className="text-blue-400 mx-auto mb-2" />
          <div className="text-white font-bold text-xl">{CERTIFICATES.filter(c => c.delivered).length}</div>
          <div className="text-navy-400 text-xs">Delivered to Email</div>
        </div>
      </div>

      {/* Pending alert */}
      {pending > 0 && (
        <div className="glass-card p-4 border-yellow-500/30 bg-yellow-500/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock size={16} className="text-yellow-400" />
              <p className="text-yellow-300 text-sm">
                <strong>{pending} certificate{pending > 1 ? 's' : ''}</strong> ready to be issued. Participants have completed their training.
              </p>
            </div>
            <button className="btn-primary text-xs px-4">Issue All Pending</button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="glass-card p-4">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search certificates..."
            className="input-base pl-9 w-full text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-700/50">
                {['Certificate ID', 'Recipient', 'Training Program', 'Level', 'Completed', 'Issued Date', 'Status', 'Actions'].map(h => (
                  <th key={h} className="text-left px-5 py-3.5 text-navy-400 text-xs font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((cert, i) => (
                <motion.tr
                  key={cert.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-navy-800/50 hover:bg-navy-800/30 transition-colors"
                >
                  <td className="px-5 py-4">
                    <span className="text-navy-300 text-xs font-mono">{cert.id}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-white text-sm font-medium">{cert.recipient}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-navy-300 text-sm line-clamp-1">{cert.training}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${levelColors[cert.level]}`}>
                      {cert.level}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-navy-400 text-sm">{cert.completedDate}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-navy-400 text-sm">{cert.issuedDate || '—'}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 w-fit ${
                      cert.status === 'Issued' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {cert.status === 'Issued' ? <CheckCircle size={10} /> : <Clock size={10} />}
                      {cert.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 text-navy-500 hover:text-white rounded-lg hover:bg-navy-700 transition-colors" title="Preview">
                        <FileText size={13} />
                      </button>
                      <button className="p-1.5 text-navy-500 hover:text-white rounded-lg hover:bg-navy-700 transition-colors" title="Download">
                        <Download size={13} />
                      </button>
                      {cert.status === 'Issued' && (
                        <button className="p-1.5 text-navy-500 hover:text-blue-400 rounded-lg hover:bg-navy-700 transition-colors" title="Send to Email">
                          <Send size={13} />
                        </button>
                      )}
                      {cert.status === 'Pending' && (
                        <button className="px-2.5 py-1 bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 rounded text-xs transition-colors">
                          Issue
                        </button>
                      )}
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
