'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image, Video, Calendar, ZoomIn } from 'lucide-react';

const CATEGORIES = ['All', 'Conference', 'Workshop', 'Webinar', 'Site Visit', 'Awards'];

const GALLERY_ITEMS = [
  { id: '1', type: 'photo', category: 'Conference', title: 'GEOFERA Annual Symposium 2025', event: 'Annual Symposium', date: 'Nov 2025', span: 'col-span-2 row-span-2', color: 'from-blue-900 to-navy-950' },
  { id: '2', type: 'photo', category: 'Workshop', title: 'Petrophysics Workshop — Jakarta', event: 'Training Workshop', date: 'Sep 2025', span: 'col-span-1 row-span-1', color: 'from-purple-900 to-navy-950' },
  { id: '3', type: 'video', category: 'Webinar', title: 'Formation Evaluation Webinar Highlights', event: 'Online Webinar', date: 'Aug 2025', span: 'col-span-1 row-span-1', color: 'from-teal-900 to-navy-950' },
  { id: '4', type: 'photo', category: 'Workshop', title: 'Mud Logging Field Workshop — Balikpapan', event: 'Field Workshop', date: 'Jul 2025', span: 'col-span-1 row-span-1', color: 'from-green-900 to-navy-950' },
  { id: '5', type: 'photo', category: 'Conference', title: 'GEOFERA × IATMI Technical Sharing', event: 'Joint Session', date: 'Jun 2025', span: 'col-span-1 row-span-1', color: 'from-crimson-900 to-navy-950' },
  { id: '6', type: 'photo', category: 'Site Visit', title: 'Pertamina Well Site Visit — South Sumatra', event: 'Field Study', date: 'May 2025', span: 'col-span-1 row-span-2', color: 'from-orange-900 to-navy-950' },
  { id: '7', type: 'video', category: 'Conference', title: 'Opening Ceremony Highlights Reel', event: 'Annual Symposium', date: 'Nov 2025', span: 'col-span-2 row-span-1', color: 'from-indigo-900 to-navy-950' },
  { id: '8', type: 'photo', category: 'Awards', title: 'GEOFERA Excellence Awards Ceremony', event: 'Awards Night', date: 'Nov 2025', span: 'col-span-1 row-span-1', color: 'from-gold-900 to-navy-950' },
  { id: '9', type: 'photo', category: 'Workshop', title: 'Geosteering Simulation Workshop', event: 'Technical Workshop', date: 'Apr 2025', span: 'col-span-1 row-span-1', color: 'from-cyan-900 to-navy-950' },
  { id: '10', type: 'photo', category: 'Webinar', title: 'CCS Technology Forum Panel', event: 'Online Forum', date: 'Mar 2025', span: 'col-span-1 row-span-1', color: 'from-emerald-900 to-navy-950' },
  { id: '11', type: 'photo', category: 'Site Visit', title: 'Offshore Platform Technical Visit', event: 'Field Study', date: 'Feb 2025', span: 'col-span-2 row-span-1', color: 'from-sky-900 to-navy-950' },
];

const eventStats = [
  { label: 'Events Documented', value: '45+', icon: Calendar },
  { label: 'Photos', value: '1,200+', icon: Image },
  { label: 'Video Highlights', value: '28', icon: Video },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filtered = GALLERY_ITEMS.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag-crimson mb-4 inline-block">Gallery</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Moments That <span className="text-gradient">Matter</span>
            </h1>
            <p className="text-navy-300 text-lg max-w-xl mx-auto">
              From technical workshops to annual symposiums — every event, every connection, every breakthrough documented.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center gap-8"
          >
            {eventStats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon size={20} className="text-crimson-400 mx-auto mb-1.5" />
                <div className="text-white font-bold text-2xl">{value}</div>
                <div className="text-navy-400 text-xs">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-base pt-0">
        <div className="container-xl">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-crimson-600 text-white shadow-lg shadow-crimson-600/20'
                    : 'bg-navy-800 text-navy-300 hover:bg-navy-700 border border-navy-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.04 }}
                  className={`${item.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
                  onClick={() => setLightbox(item)}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80`} />

                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                  {/* Video indicator */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                        <Play size={20} className="text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  )}

                  {/* Zoom icon */}
                  {item.type === 'photo' && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn size={14} className="text-white" />
                      </div>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded mb-1 inline-block ${
                      item.type === 'video' ? 'bg-crimson-600/80 text-white' : 'bg-navy-800/80 text-navy-300'
                    }`}>
                      {item.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">{item.title}</h3>
                    <p className="text-navy-300 text-xs mt-0.5">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightbox && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/90 backdrop-blur-md"
                  onClick={() => setLightbox(null)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative w-full max-w-2xl"
                >
                  <button
                    onClick={() => setLightbox(null)}
                    className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                  <div className={`aspect-video rounded-2xl bg-gradient-to-br ${lightbox.color} flex items-center justify-center relative overflow-hidden`}>
                    {lightbox.type === 'video' && (
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Play size={28} className="text-white ml-1" fill="white" />
                      </div>
                    )}
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-white font-semibold text-lg">{lightbox.title}</h3>
                    <p className="text-navy-400 text-sm mt-1">{lightbox.event} · {lightbox.date}</p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
