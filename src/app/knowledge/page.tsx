'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, FileText, Download, Eye, Tag, Calendar, User, ChevronRight, TrendingUp } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Content', count: 48 },
  { id: 'petrophysics', label: 'Petrophysics', count: 14 },
  { id: 'formation-eval', label: 'Formation Evaluation', count: 11 },
  { id: 'wellsite', label: 'Wellsite Geology', count: 8 },
  { id: 'geosteering', label: 'Geosteering', count: 6 },
  { id: 'reservoir', label: 'Reservoir', count: 5 },
  { id: 'ccs', label: 'CCS & Energy', count: 4 },
];

const CONTENT_TYPES = ['All Types', 'Article', 'Technical Paper', 'Presentation', 'Case Study', 'Tutorial'];

const ARTICLES = [
  {
    id: '1', type: 'Article',
    title: 'Advanced Petrophysical Analysis in Carbonate Reservoirs: Challenges and Solutions',
    excerpt: 'A comprehensive review of modern petrophysical workflows for complex carbonate systems, covering porosity classification, saturation modeling, and pay evaluation in Indonesian fields.',
    author: 'Dr. Budi Santoso', authorTitle: 'Senior Petrophysicist, Pertamina EP',
    category: 'petrophysics', date: '28 May 2026', readTime: '12 min',
    views: 1843, downloads: 312, isFeatured: true,
    tags: ['Carbonates', 'Petrophysics', 'Saturation', 'Indonesia'],
  },
  {
    id: '2', type: 'Technical Paper',
    title: 'Real-Time Formation Evaluation Integration with LWD Data: A Sumatran Field Case Study',
    excerpt: 'This paper presents a workflow for integrating LWD resistivity and neutron-density data for real-time formation evaluation decisions in challenging pre-stack environments.',
    author: 'Ir. Dewi Rahayu', authorTitle: 'Wellsite Geologist, Medco E&P',
    category: 'formation-eval', date: '15 May 2026', readTime: '18 min',
    views: 1204, downloads: 289, isFeatured: true,
    tags: ['LWD', 'Formation Evaluation', 'Real-Time', 'Sumatra'],
  },
  {
    id: '3', type: 'Case Study',
    title: 'Geosteering Through Thin Beds: Lessons from the Mahakam Delta',
    excerpt: 'Detailed geosteering workflow used to successfully navigate a horizontal well through 1.5–3m thin sands in the Mahakam Delta, East Kalimantan, achieving 94% reservoir contact.',
    author: 'Dr. Hendra Kurniawan', authorTitle: 'Geosteering Specialist, Baker Hughes',
    category: 'geosteering', date: '8 May 2026', readTime: '14 min',
    views: 987, downloads: 178, isFeatured: false,
    tags: ['Geosteering', 'Thin Beds', 'Horizontal Well', 'Kalimantan'],
  },
  {
    id: '4', type: 'Tutorial',
    title: 'Practical Mud Logging: Identifying Show Intervals from Cuttings and Gas Data',
    excerpt: 'Step-by-step guide to mud logging interpretation including gas chromatography analysis, cuttings description techniques, and integration with mud gas data for show evaluation.',
    author: 'Rizky Pratama', authorTitle: 'Mud Logging Engineer, Halliburton',
    category: 'wellsite', date: '2 May 2026', readTime: '20 min',
    views: 2341, downloads: 567, isFeatured: false,
    tags: ['Mud Logging', 'Cuttings', 'Gas Shows', 'Tutorial'],
  },
  {
    id: '5', type: 'Presentation',
    title: 'CCS Site Characterization in Indonesia: Opportunities in Mature Field Development',
    excerpt: 'Overview of CCS site selection criteria applied to mature Indonesian oil and gas fields, evaluating storage capacity, containment integrity, and injection feasibility.',
    author: 'Nurul Hidayah, S.T.', authorTitle: 'CCS Engineer, Shell Indonesia',
    category: 'ccs', date: '24 Apr 2026', readTime: '8 min',
    views: 756, downloads: 203, isFeatured: false,
    tags: ['CCS', 'Carbon Storage', 'Site Characterization', 'Indonesia'],
  },
  {
    id: '6', type: 'Article',
    title: 'NMR Log Interpretation in Tight Clastic Reservoirs: A Practical Approach',
    excerpt: 'Comprehensive guide to NMR log interpretation for permeability estimation and fluid characterization in tight clastic formations encountered in Indonesian basins.',
    author: 'Fitria Handayani', authorTitle: 'Petrophysicist, TotalEnergies EP',
    category: 'petrophysics', date: '18 Apr 2026', readTime: '15 min',
    views: 1129, downloads: 244, isFeatured: false,
    tags: ['NMR', 'Tight Clastic', 'Permeability', 'Petrophysics'],
  },
];

const typeColors: Record<string, string> = {
  'Article': 'bg-blue-500/20 text-blue-300',
  'Technical Paper': 'bg-purple-500/20 text-purple-300',
  'Case Study': 'bg-green-500/20 text-green-300',
  'Tutorial': 'bg-gold-500/20 text-gold-300',
  'Presentation': 'bg-orange-500/20 text-orange-300',
};

export default function KnowledgePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [contentType, setContentType] = useState('All Types');

  const filtered = ARTICLES.filter(a => {
    const matchSearch = !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      a.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = category === 'all' || a.category === category;
    const matchType = contentType === 'All Types' || a.type === contentType;
    return matchSearch && matchCat && matchType;
  });

  const featured = ARTICLES.filter(a => a.isFeatured);

  return (
    <main className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
        <div className="container-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="tag-gold mb-4 inline-block">Knowledge Center</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Technical <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              Peer-reviewed articles, technical papers, case studies, and tutorials from formation evaluation professionals across Indonesia.
            </p>
          </motion.div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search articles, papers, topics, authors..."
                className="input-base pl-12 pr-4 py-4 w-full text-base rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-base pt-0">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="glass-card p-4 sticky top-24">
                <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                  <Tag size={14} /> Categories
                </h3>
                <div className="space-y-1">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        category === cat.id
                          ? 'bg-crimson-600/20 text-crimson-300 border border-crimson-500/30'
                          : 'text-navy-300 hover:bg-navy-800 hover:text-white'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className="text-xs text-navy-500">{cat.count}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-navy-700/50">
                  <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                    <TrendingUp size={14} /> Trending
                  </h3>
                  <div className="space-y-3">
                    {ARTICLES.sort((a, b) => b.views - a.views).slice(0, 3).map((a, i) => (
                      <div key={a.id} className="flex gap-2">
                        <span className="text-navy-600 font-mono text-xs mt-0.5 w-4">0{i + 1}</span>
                        <p className="text-navy-300 text-xs leading-relaxed line-clamp-2 hover:text-white cursor-pointer transition-colors">
                          {a.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main */}
            <div className="flex-1">
              {/* Type filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {CONTENT_TYPES.map(t => (
                  <button
                    key={t}
                    onClick={() => setContentType(t)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      contentType === t
                        ? 'bg-crimson-600 text-white'
                        : 'bg-navy-800 text-navy-300 hover:bg-navy-700 border border-navy-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Featured (only when no filter active) */}
              {category === 'all' && !search && contentType === 'All Types' && (
                <div className="mb-8">
                  <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <BookOpen size={16} className="text-gold-400" /> Featured Articles
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {featured.map(article => (
                      <motion.article
                        key={article.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="glass-card p-5 cursor-pointer group hover:border-gold-500/40 transition-all"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColors[article.type]}`}>
                            {article.type}
                          </span>
                          <span className="text-gold-400 text-xs">✦ Featured</span>
                        </div>
                        <h3 className="text-white font-semibold leading-snug mb-2 group-hover:text-crimson-300 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-navy-400 text-sm leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-navy-500">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1"><Eye size={11} />{article.views.toLocaleString()}</span>
                            <span className="flex items-center gap-1"><Download size={11} />{article.downloads}</span>
                          </div>
                          <span>{article.readTime} read</span>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              )}

              {/* Article list */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-white font-semibold flex items-center gap-2">
                    <FileText size={16} className="text-navy-400" />
                    {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
                  </h2>
                </div>

                <div className="space-y-4">
                  {filtered.map((article, i) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card p-6 cursor-pointer group hover:border-crimson-500/40 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-2 mb-3">
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColors[article.type]}`}>
                              {article.type}
                            </span>
                            {article.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="px-2 py-0.5 rounded text-xs bg-navy-800 text-navy-400 border border-navy-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-white font-semibold text-lg leading-snug mb-2 group-hover:text-crimson-300 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-navy-400 text-sm leading-relaxed line-clamp-2 mb-4">
                            {article.excerpt}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-navy-500">
                            <span className="flex items-center gap-1"><User size={11} />{article.author}</span>
                            <span className="flex items-center gap-1"><Calendar size={11} />{article.date}</span>
                            <span className="flex items-center gap-1"><Eye size={11} />{article.views.toLocaleString()} views</span>
                            <span className="flex items-center gap-1"><Download size={11} />{article.downloads} downloads</span>
                          </div>
                        </div>
                        <div className="flex md:flex-col gap-2 md:gap-2 flex-shrink-0">
                          <button className="btn-outline text-xs px-3 py-2 flex items-center gap-1.5">
                            <Eye size={12} /> Read
                          </button>
                          <button className="btn-secondary text-xs px-3 py-2 flex items-center gap-1.5">
                            <Download size={12} /> PDF
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {filtered.length === 0 && (
                  <div className="text-center py-20">
                    <BookOpen size={48} className="text-navy-600 mx-auto mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">No results found</h3>
                    <p className="text-navy-400">Try a different search term or category</p>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="mt-12 glass-card p-6 border-gold-500/30 bg-gradient-to-r from-navy-900 to-navy-800/50">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Share Your Expertise</h3>
                    <p className="text-navy-400 text-sm mt-1">Submit a technical article or paper and contribute to the community knowledge base.</p>
                  </div>
                  <button className="btn-primary flex-shrink-0 flex items-center gap-2">
                    Submit Article <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
