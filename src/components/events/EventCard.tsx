'use client'
// src/components/events/EventCard.tsx

import Link from 'next/link'
import { Calendar, MapPin, Monitor, Users, Clock, ArrowRight } from 'lucide-react'
import { format, formatDistanceToNow, isPast, isFuture } from 'date-fns'
import { id as idLocale } from 'date-fns/locale'
import type { Event } from '@/types'
import { eventTypeLabels } from '@/data/dummy'

interface EventCardProps {
  event: Partial<Event>
  featured?: boolean
}

const eventTypeColors: Record<string, string> = {
  CONFERENCE: 'bg-crimson-500/15 text-crimson-500',
  WEBINAR: 'bg-blue-500/15 text-blue-400',
  WORKSHOP: 'bg-gold-500/15 text-gold-600 dark:text-gold-400',
  TECHNICAL_SHARING: 'bg-emerald-500/15 text-emerald-500',
  NETWORKING: 'bg-purple-500/15 text-purple-400',
  FIELD_TRIP: 'bg-orange-500/15 text-orange-400',
}

export function EventCard({ event, featured = false }: EventCardProps) {
  const { title, slug, shortDescription, type, thumbnail, startDate, endDate, venue, city, isOnline, maxAttendees, priceRegular, isFree, _count } = event

  const isUpcoming = startDate ? isFuture(new Date(startDate)) : false
  const isPastEvent = startDate ? isPast(new Date(startDate)) : false
  const daysUntil = startDate && isUpcoming ? formatDistanceToNow(new Date(startDate), { addSuffix: true }) : null

  if (featured) {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/[0.06] group">
        {/* Background image */}
        {thumbnail && (
          <div className="absolute inset-0">
            <img src={thumbnail} alt={title} className="w-full h-full object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />
          </div>
        )}

        <div className="relative p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {type && (
              <span className={`tag-base text-[11px] ${eventTypeColors[type] || 'bg-white/10 text-white/60'}`}>
                {eventTypeLabels[type] || type}
              </span>
            )}
            {isFree ? (
              <span className="tag-base text-[11px] bg-emerald-500/15 text-emerald-500">Free</span>
            ) : null}
            {isUpcoming && daysUntil && (
              <span className="tag-base text-[11px] bg-gold-500/15 text-gold-400">
                <Clock size={10} className="mr-1" /> {daysUntil}
              </span>
            )}
          </div>

          <h3 className="font-display font-black text-2xl md:text-3xl text-white leading-tight mb-3">
            {title}
          </h3>

          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-lg">
            {shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/50">
            {startDate && (
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-crimson-500" />
                {format(new Date(startDate), 'EEEE, d MMMM yyyy', { locale: idLocale })}
              </div>
            )}
            <div className="flex items-center gap-2">
              {isOnline ? (
                <><Monitor size={14} className="text-crimson-500" /> Online Event</>
              ) : (
                <><MapPin size={14} className="text-crimson-500" /> {venue ? `${venue}, ${city}` : city}</>
              )}
            </div>
            {_count && (
              <div className="flex items-center gap-2">
                <Users size={14} className="text-crimson-500" />
                {_count.registrations} registered{maxAttendees ? ` / ${maxAttendees}` : ''}
              </div>
            )}
          </div>

          <Link href={`/events/${slug}`} className="btn-primary">
            Register Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="card-base card-hover group overflow-hidden flex flex-col">
      {/* Thumbnail */}
      <div className="relative h-40 bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />

        <div className="absolute top-3 left-3 flex gap-1.5">
          {type && (
            <span className={`tag-base text-[10px] ${eventTypeColors[type] || 'bg-white/10 text-white/60'}`}>
              {eventTypeLabels[type] || type}
            </span>
          )}
        </div>

        {startDate && isUpcoming && daysUntil && (
          <div className="absolute bottom-3 right-3 glass-card-dark rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gold-400">
            {daysUntil}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-sm text-[var(--text-primary)] leading-snug mb-2 line-clamp-2 group-hover:text-crimson-500 transition-colors">
          {title}
        </h3>

        <div className="space-y-2 mb-4 flex-1">
          {startDate && (
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <Calendar size={12} className="text-crimson-500 flex-shrink-0" />
              {format(new Date(startDate), 'd MMM yyyy', { locale: idLocale })}
            </div>
          )}
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            {isOnline ? (
              <><Monitor size={12} className="text-crimson-500 flex-shrink-0" /> Online</>
            ) : (
              <><MapPin size={12} className="text-crimson-500 flex-shrink-0" /> {city || 'TBA'}</>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)] mt-auto">
          {isFree ? (
            <span className="tag-green text-[10px]">Free</span>
          ) : (
            <span className="text-sm font-bold text-[var(--text-primary)]">
              IDR {(priceRegular || 0).toLocaleString('id-ID')}
            </span>
          )}
          <Link
            href={`/events/${slug}`}
            className="flex items-center gap-1 text-xs font-semibold text-crimson-500 hover:text-crimson-400 transition-colors group/btn"
          >
            Details <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
