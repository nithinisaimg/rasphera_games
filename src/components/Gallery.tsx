import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/gallery';
import type { GalleryItem } from '../types';
import { ZoomIn, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Visuals' },
    { id: 'games', label: 'Handcrafted Games' },
    { id: 'workshops', label: 'Corporate Workshops' },
    { id: 'craft', label: 'Timber Craftsmanship' },
    { id: 'moments', label: 'Wellness Moments' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="showcase" className="py-20 md:py-32 bg-rasphera-cream border-b-2 border-rasphera-dark/15 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-hand text-2xl sm:text-3xl text-rasphera-orange font-bold transform -rotate-1 inline-block">
              Tactile Aesthetics
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-rasphera-dark font-black tracking-tight mt-1">
              VISUAL <span className="text-rasphera-orange">SHOWCASE</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-rasphera-brown font-medium mt-2 max-w-xl">
              An authentic glimpse into our handcrafted wooden games, strategy puzzles, and vibrant corporate team workshops across India.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`font-display uppercase tracking-wider text-xs sm:text-sm px-4 py-2 rounded-xl border-2 border-rasphera-dark transition-all ${
                  activeCategory === c.id
                    ? 'bg-rasphera-orange text-white box-solid-shadow font-bold'
                    : 'bg-white hover:bg-rasphera-cream text-rasphera-dark shadow-sm'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry-Style Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border-3 border-rasphera-dark rounded-2xl overflow-hidden shadow-solid-lg hover:shadow-solid-orange transition-all flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Container with Zoom Trigger */}
              <div 
                onClick={() => setActiveLightbox(item)}
                className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer bg-rasphera-dark/5"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Category Tag Overlay */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border-2 border-rasphera-dark text-rasphera-dark text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  {item.categoryLabel}
                </div>

                {/* Hover Zoom Icon Badge */}
                <div className="absolute inset-0 bg-rasphera-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-rasphera-dark flex items-center justify-center text-rasphera-dark shadow-solid transform group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-5 h-5 text-rasphera-orange" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl text-rasphera-dark font-bold tracking-tight mb-2 group-hover:text-rasphera-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-rasphera-brown font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.dimensions && (
                  <div className="mt-4 pt-3 border-t border-rasphera-dark/10 flex items-center justify-between text-[11px] font-mono text-rasphera-brown font-bold">
                    <span>Dimension / Scope:</span>
                    <span className="text-rasphera-orange">{item.dimensions}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div 
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rasphera-dark/85 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-3 border-rasphera-dark rounded-2xl max-w-3xl w-full overflow-hidden shadow-solid-xl"
            >
              <div className="relative aspect-video w-full bg-rasphera-dark">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.alt}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white border-2 border-rasphera-dark flex items-center justify-center font-display text-xl hover:bg-rasphera-orange hover:text-white transition-colors shadow-solid"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-rasphera-cream">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-rasphera-orange uppercase tracking-wider">
                    {activeLightbox.categoryLabel}
                  </span>
                  {activeLightbox.dimensions && (
                    <span className="text-xs font-mono font-bold text-rasphera-dark">
                      {activeLightbox.dimensions}
                    </span>
                  )}
                </div>
                <h4 className="font-display text-2xl sm:text-3xl text-rasphera-dark font-black tracking-tight mb-2">
                  {activeLightbox.title}
                </h4>
                <p className="text-sm text-rasphera-brown leading-relaxed font-medium">
                  {activeLightbox.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
