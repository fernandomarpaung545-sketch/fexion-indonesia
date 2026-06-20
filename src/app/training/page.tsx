'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { TrainingCard } from '@/components/training/TrainingCard'
import { featuredTrainings, trainingCategoryLabels } from '@/data/dummy'
import { Search } from 'lucide-react'
import { useState, useMemo } from 'react'

export default function TrainingPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [activeLevel, setActiveLevel] = useState('')
  const [activeFormat, setActiveFormat] = useState('')
  const [sortBy, setSortBy] = useState('latest')

  const allTrainings = [...featuredTrainings, ...featuredTrainings].map((t, i) => ({
    ...t,
    id: `${t.id}-${i}`,
  }))

  const filtered = useMemo(() => {
    let result = allTrainings

    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(t =>
        t.title?.toLowerCase().includes(q) ||
        t.shortDescription?.toLowerCase().includes(q) ||
        t.trainerName?.toLowerCase().includes(q) ||
        t.category?.toLowerCase().includes(q)
      )
    }

    // Category
    if (activeCategory !== 'ALL') {
      result = result.filter(t => t.category === activeCategory)
    }

    // Level
    if (activeLevel) {
      result = result.filter(t => t.level === activeLevel)
    }

    // Format
    if (activeFormat === 'online') {
      result = result.filter(t => t.isOnline === true)
    } else if (activeFormat === 'offline') {
      result = result.filter(t => t.isOnline === false)
    }

    // Sort
    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => (a.priceRegular ?? 0) - (b.priceRegular ?? 0))
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => (b.priceRegular ?? 0) - (a.priceRegular ?? 0))
    }

    return result
  }, [search, activeCategory, activeLevel, activeFormat, sortBy])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)]">
        {/* Page Header */}
        <div className="bg-navy-950 pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="container-tight relative">
            <span className="tag-crimson mb-4 inline-flex">Technical Training</span>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
              GOFEW Training Programs
            </h1>
            <p className="text-lg text-white/55 max-w-2xl">
              Industry-led technical training across eight subsurface disciplines. Delivered by Indonesia's foremost practitioners.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-16 z-30 bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-color)] py-4">
          <div className="container-tight">
            <div className="flex flex-col gap-3">
              {/* Row 1: Search + Level + Format + Sort */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search trainings..."
                    className="input-base pl-9 text-sm py-2.5 w-full"
                  />
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <select
                    value={activeLevel}
                    onChange={e => setActiveLevel(e.target.value)}
                    className="input-base text-sm py-2 w-auto"
                  >
                    <option value="">All Levels</option>
                    <option value="BEGINNER">Beginner</option>
                    <option value="INTERMEDIATE">Intermediate</option>
                    <option value="ADVANCED">Advanced</option>
                  </select>
                  <select
                    value={activeFormat}
                    onChange={e => setActiveFormat(e.target.value)}
                    className="input-base text-sm py-2 w-auto"
                  >
                    <option value="">All Formats</option>
                    <option value="online">Online</option>
                    <option value="offline">In-Person</option>
                  </select>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="input-base text-sm py-2 w-auto"
                  >
                    <option value="latest">Latest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Category pills */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setActiveCategory('ALL')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === 'ALL'
                      ? 'bg-crimson-600 text-white shadow-lg'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                  }`}
                >
                  All
                </button>
                {Object.entries(trainingCategoryLabels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeCategory === key
                        ? 'bg-crimson-600 text-white shadow-lg'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Training Grid */}
        <div className="container-tight py-12">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[var(--text-muted)]">
              Showing <span className="font-semibold text-[var(--text-primary)]">{filtered.length}</span> trainings
              {activeCategory !== 'ALL' && (
                <span> in <span className="text-crimson-400">{trainingCategoryLabels[activeCategory]}</span></span>
              )}
            </p>
            {(activeCategory !== 'ALL' || search || activeLevel || activeFormat) && (
              <button
                onClick={() => {
                  setActiveCategory('ALL')
                  setSearch('')
                  setActiveLevel('')
                  setActiveFormat('')
                }}
                className="text-xs text-crimson-400 hover:text-crimson-300 underline transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((training) => (
                <TrainingCard key={training.id} training={training} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-[var(--text-muted)] text-lg mb-2">No trainings found</p>
              <p className="text-[var(--text-muted)] text-sm mb-6">Try adjusting your filters or search term</p>
              <button
                onClick={() => { setActiveCategory('ALL'); setSearch(''); setActiveLevel(''); setActiveFormat(''); }}
                className="btn-outline px-6"
              >
                Clear filters
              </button>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-outline px-8">Load More Trainings</button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
