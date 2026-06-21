// src/app/events/page.tsx

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { EventCard } from '@/components/events/EventCard'
import { upcomingEvents } from '@/data/dummy'
import { Calendar, Filter } from 'lucide-react'

export default function EventsPage() {
  const featured = upcomingEvents[0]
  const others = upcomingEvents.slice(1)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-primary)]">
        {/* Header */}
        <div className="bg-navy-950 pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="container-tight relative">
            <span className="tag-crimson mb-4 inline-flex">Events</span>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
              GEOFERA Events Calendar
            </h1>
            <p className="text-lg text-white/55 max-w-2xl">
              Conferences, webinars, workshops, and technical sharing sessions — connect, learn, and contribute.
            </p>
          </div>
        </div>

        {/* Event type filter */}
        <div className="sticky top-16 z-30 bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-color)] py-4">
          <div className="container-tight flex items-center gap-2 flex-wrap">
            {['All', 'Conference', 'Webinar', 'Workshop', 'Technical Sharing', 'Networking'].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  type === 'All'
                    ? 'bg-crimson-500 text-white'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)] hover:text-[var(--text-primary)]'
                }`}
              >
                {type}
              </button>
            ))}
            <div className="ml-auto flex gap-2">
              <select className="input-base text-xs py-2 w-auto">
                <option>All Dates</option>
                <option>This Month</option>
                <option>Next 3 Months</option>
                <option>Past Events</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container-tight py-12">
          {/* Featured event */}
          {featured && (
            <div className="mb-10">
              <h2 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Featured Event</h2>
              <EventCard event={featured} featured />
            </div>
          )}

          {/* Other events */}
          <div>
            <h2 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">All Upcoming Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {others.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
