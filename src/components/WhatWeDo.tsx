import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { categories } from '../data/categories';
import type { GameCategory } from '../types';
import { Sparkles, Brain, Eye, Lightbulb, Users, ArrowUpRight } from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const [activeModal, setActiveModal] = useState<GameCategory | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'strategy-logic':
        return <Brain className="w-7 h-7 text-rasphera-orange" />;
      case 'memory-focus':
        return <Eye className="w-7 h-7 text-rasphera-orange" />;
      case 'creative-storytelling':
        return <Lightbulb className="w-7 h-7 text-rasphera-orange" />;
      case 'teamwork-collaboration':
        return <Users className="w-7 h-7 text-rasphera-orange" />;
      default:
        return <Sparkles className="w-7 h-7 text-rasphera-orange" />;
    }
  };

  return (
    <section id="what-we-do" className="py-20 md:py-32 relative bg-rasphera-cream overflow-hidden">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Dimensional Headline matching PDF: WHATWEDO??? */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          
          <div className="inline-block relative select-none">
            {/* Front Solid Vibrant Headline */}
            <h2 className="font-display text-6xl sm:text-8xl md:text-[9.5rem] tracking-tight font-black text-rasphera-orange leading-none drop-shadow-md">
              WHATWEDO???
            </h2>

            {/* 3D Drop Outline Underlayer */}
            <h2 
              aria-hidden="true"
              className="absolute inset-0 font-display text-6xl sm:text-8xl md:text-[9.5rem] tracking-tight font-black text-stroke-dark-thick leading-none select-none -z-10 translate-x-2 translate-y-2 text-transparent"
            >
              WHATWEDO???
            </h2>

            {/* Overlay Tagline Pill with dimensional badge shadow */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20">
              <span className="inline-flex items-center gap-2 bg-rasphera-dark text-white font-display text-xs sm:text-base md:text-lg px-6 py-2 rounded-full border-2 border-rasphera-orange shadow-[4px_4px_0px_#FF7417] uppercase tracking-wider font-bold whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-rasphera-orange animate-ping"></span>
                <span>Play. Think. Connect. Create.</span>
              </span>
            </div>
          </div>

          {/* Central Statement from the PDF */}
          <div className="mt-12 max-w-3xl mx-auto bg-white border-3 border-rasphera-dark rounded-2xl p-6 sm:p-8 shadow-solid-lg">
            <p className="font-body text-base sm:text-lg md:text-xl text-rasphera-dark leading-relaxed font-normal">
              <strong className="text-rasphera-orange font-bold">Rasphera</strong> brings people together through thoughtfully designed wooden games that combine entertainment, creativity, and meaningful engagement. Our experiences transform ordinary play into opportunities for learning, collaboration, and personal growth.
            </p>

            {/* Handwritten Philosophy Banner directly from PDF */}
            <div className="mt-6 pt-5 border-t-2 border-dashed border-rasphera-dark/20 text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-rasphera-orange font-bold block mb-1">
                OUR PHILOSOPHY
              </span>
              <p className="font-hand text-2xl sm:text-3xl text-rasphera-dark font-black tracking-wide">
                "Every game has a purpose. Every challenge creates an opportunity."
              </p>
            </div>
          </div>

        </div>

        {/* The 4 Category Cards: Asymmetric Layout as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {categories.map((cat, index) => {
            const isOrangeAccent = index % 2 === 0;
            return (
              <div
                key={cat.id}
                className={`group relative rounded-2xl border-3 border-rasphera-dark p-6 sm:p-8 transition-all hover:-translate-y-1.5 ${
                  isOrangeAccent
                    ? 'bg-gradient-to-br from-white via-white to-rasphera-peach/25 shadow-solid-lg hover:shadow-solid-orange'
                    : 'bg-gradient-to-br from-white via-white to-rasphera-cream-dark/60 shadow-solid-lg hover:shadow-solid'
                }`}
              >
                {/* Top Bar with Number & Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-4xl sm:text-5xl font-black text-rasphera-orange">
                      {cat.number}.
                    </span>
                    <div className="p-2.5 rounded-xl bg-rasphera-cream border-2 border-rasphera-dark shadow-sm group-hover:scale-110 transition-transform">
                      {getCategoryIcon(cat.id)}
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-rasphera-dark text-white rounded-md">
                    Tactile Category
                  </span>
                </div>

                {/* Title and Tagline */}
                <h3 className="font-display text-2xl sm:text-3xl text-rasphera-dark font-black tracking-tight group-hover:text-rasphera-orange transition-colors">
                  {cat.title}
                </h3>
                
                <p className="font-hand text-lg sm:text-xl text-rasphera-orange font-bold mt-1 mb-4">
                  "{cat.tagline}"
                </p>

                {/* Primary Category Description from PDF */}
                <p className="font-body text-sm sm:text-base text-rasphera-brown leading-relaxed font-medium mb-6">
                  {cat.description}
                </p>

                {/* Cognitive Skills Trained Chips */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rasphera-dark/60 font-bold block mb-2">
                    Key Cognitive Dimensions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-rasphera-cream border border-rasphera-dark/30 text-rasphera-dark"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sample Games Card Preview */}
                <div className="bg-rasphera-cream/80 border-2 border-rasphera-dark/20 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-display uppercase tracking-wider text-rasphera-dark font-bold">
                      Signature Game:
                    </span>
                    <span className="text-[11px] font-mono text-rasphera-orange font-bold">
                      {cat.sampleGames[0].players}
                    </span>
                  </div>
                  <h5 className="font-display text-lg text-rasphera-dark font-bold">
                    {cat.sampleGames[0].title}
                  </h5>
                  <p className="text-xs text-rasphera-brown mt-1">
                    {cat.sampleGames[0].description}
                  </p>
                </div>

                {/* Action button to explore category details */}
                <div className="mt-6 pt-4 border-t border-rasphera-dark/15 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModal(cat)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-display tracking-wider uppercase text-rasphera-orange group-hover:text-rasphera-dark font-bold transition-colors"
                  >
                    <span>View All Games in {cat.number}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="font-hand text-sm text-rasphera-brown font-bold">
                    100% Handcrafted
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Category Games Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rasphera-dark/70 backdrop-blur-sm">
            <div
              className="bg-rasphera-cream border-3 border-rasphera-dark rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-solid-xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between border-b-2 border-rasphera-dark pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-rasphera-orange uppercase">
                    Category {activeModal.number}
                  </span>
                  <h3 className="font-display text-3xl text-rasphera-dark font-black">
                    {activeModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-9 h-9 rounded-full bg-white border-2 border-rasphera-dark flex items-center justify-center font-display text-lg hover:bg-rasphera-orange hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm sm:text-base text-rasphera-brown mb-6 font-medium">
                {activeModal.description}
              </p>

              <h4 className="font-display text-lg text-rasphera-dark uppercase tracking-wider mb-3">
                Featured Rasphera Games in this Category:
              </h4>

              <div className="space-y-4">
                {activeModal.sampleGames.map((game, i) => (
                  <div
                    key={i}
                    className="bg-white border-2 border-rasphera-dark rounded-xl p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-display text-xl text-rasphera-orange font-bold">
                        {game.title}
                      </h5>
                      <span className="text-xs font-mono font-bold bg-rasphera-peach/40 px-2 py-0.5 rounded border border-rasphera-dark/20 text-rasphera-dark">
                        {game.players}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-rasphera-dark/70 block mb-2">
                      {game.type}
                    </span>
                    <p className="text-sm text-rasphera-brown">
                      {game.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t-2 border-rasphera-dark/20 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="bg-rasphera-orange text-white font-display uppercase tracking-wider px-6 py-2.5 rounded-xl border-2 border-rasphera-dark box-solid-shadow"
                >
                  Close Game Library
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
