'use client'
// src/components/training/TrainingCard.tsx

import Link from 'next/link'
import { Calendar, Clock, MapPin, Monitor, User, ChevronRight, Award } from 'lucide-react'
import { format } from 'date-fns'
import { id as idLocale } from 'date-fns/locale'
import type { Training } from '@/types'
import { trainingCategoryLabels } from '@/data/dummy'

interface TrainingCardProps {
  training: Partial<Training>
  variant?: 'default' | 'compact'
}

const levelColors: Record<string, string> = {
  BEGINNER: 'bg-emerald-500/15 text-emerald-500',
  INTERMEDIATE: 'bg-gold-500/15 text-gold-600 dark:text-gold-400',
  ADVANCED: 'bg-crimson-500/15 text-crimson-500',
  EXPERT: 'bg-purple-500/15 text-purple-500',
}

export function TrainingCard({ training, variant = 'default' }: TrainingCardProps) {
  const {
    title, slug, shortDescription, category, level, duration,
    thumbnail, trainerName, trainerTitle, scheduleStart,
    location, isOnline, priceRegular, priceEarlyBird, isFree, status,
  } = training

  const price = isFree ? 'Free' : priceEarlyBird
    ? `IDR ${priceEarlyBird.toLocaleString('id-ID')}`
    : `IDR ${(priceRegular || 0).toLocaleString('id-ID')}`

  return (
    <div className="card-base card-hover group flex flex-col overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-44 bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Award size={40} className="text-white/10" />
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="tag-crimson text-[10px]">
            {category ? trainingCategoryLabels[category] : 'Training'}
          </span>
        </div>

        {/* Level badge */}
        {level && (
          <div className="absolute top-3 right-3">
            <span className={`tag-base text-[10px] ${levelColors[level] || levelColors.BEGINNER}`}>
              {level.charAt(0) + level.slice(1).toLowerCase()}
            </span>
          </div>
        )}

        {/* Status overlay */}
        {status === 'FULL' && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-sm uppercase tracking-widest">Full</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-base text-[var(--text-primary)] leading-snug mb-2 line-clamp-2 group-hover:text-crimson-500 transition-colors">
          {title}
        </h3>

        <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-4">
          {shortDescription}
        </p>

        {/* Meta */}
        <div className="space-y-2 mb-5">
          {trainerName && (
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <User size={13} className="text-crimson-500 flex-shrink-0" />
              <span className="line-clamp-1">{trainerName}{trainerTitle ? ` — ${trainerTitle}` : ''}</span>
            </div>
          )}
          {scheduleStart && (
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <Calendar size={13} className="text-crimson-500 flex-shrink-0" />
              <span>{format(new Date(scheduleStart), 'd MMMM yyyy', { locale: idLocale })}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <Clock size={13} className="text-crimson-500 flex-shrink-0" />
              <span>{duration}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            {isOnline ? (
              <>
                <Monitor size={13} className="text-crimson-500 flex-shrink-0" />
                <span>Online (Zoom)</span>
              </>
            ) : (
              <>
                <MapPin size={13} className="text-crimson-500 flex-shrink-0" />
                <span className="line-clamp-1">{location || 'TBA'}</span>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
          <div>
            {isFree ? (
              <span className="tag-green text-xs">Free</span>
            ) : (
              <div>
                {priceEarlyBird && (
                  <div className="text-[10px] text-[var(--text-muted)] line-through">
                    IDR {(priceRegular || 0).toLocaleString('id-ID')}
                  </div>
                )}
                <div className="font-bold text-sm text-[var(--text-primary)]">
                  IDR {(priceEarlyBird || priceRegular || 0).toLocaleString('id-ID')}
                </div>
                {priceEarlyBird && <div className="text-[10px] text-gold-500 font-semibold">Early Bird</div>}
              </div>
            )}
          </div>

          <Link
            href={`/training/${slug}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-crimson-500 hover:text-crimson-400 transition-colors group/btn"
          >
            Register
            <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
