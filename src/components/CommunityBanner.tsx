import React from 'react';
import { motion } from 'framer-motion';

export const CommunityBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#FFF0DE] border-t-3 border-b-3 border-rasphera-dark py-12 px-4 relative overflow-hidden select-none">
      
      {/* Decorative Top Pill */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <span className="font-hand text-2xl sm:text-3xl text-rasphera-orange font-bold transform -rotate-1 inline-block">
          The Rasphera Community in Action
        </span>
        <h3 className="font-display text-3xl sm:text-4xl text-rasphera-dark font-black tracking-tight">
          WHERE MINDS UNWIND & BONDS TAKE SHAPE
        </h3>
      </div>

      {/* Panoramic Illustrated Scene (Recreating the PDF's iconic community artwork) */}
      <div className="max-w-6xl mx-auto relative bg-[#FCE6D2] border-3 border-rasphera-dark rounded-3xl p-6 sm:p-10 shadow-solid-xl overflow-hidden">
        
        {/* Floating playful speech bubbles */}
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-4 left-10 sm:left-24 bg-white border-2 border-rasphera-dark rounded-2xl px-3 py-1.5 shadow-solid text-xs font-hand font-bold text-rasphera-dark z-20"
        >
          "Rotate the gear 45 degrees!" 💡
        </motion.div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute top-8 right-12 sm:right-28 bg-white border-2 border-rasphera-dark rounded-2xl px-3 py-1.5 shadow-solid text-xs font-hand font-bold text-rasphera-orange z-20"
        >
          "Don't breathe! One more block!" 🪵
        </motion.div>

        <motion.div 
          animate={{ y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
          className="hidden md:block absolute bottom-8 left-1/3 bg-rasphera-orange text-white border-2 border-rasphera-dark rounded-2xl px-3 py-1.5 shadow-solid text-xs font-hand font-bold z-20"
        >
          "Best corporate offsite ever!" 🎉
        </motion.div>

        {/* Illustrated Characters Vector Representation */}
        <div className="relative z-10 flex flex-wrap items-end justify-center gap-6 sm:gap-10 pt-8 pb-4">
          
          {/* Station 1: Two People Solving an Easel Wooden Tangram Puzzle */}
          <div className="flex flex-col items-center">
            {/* The Easel & Tangram */}
            <div className="w-24 sm:w-32 h-28 sm:h-36 bg-[#D8935D] border-3 border-rasphera-dark rounded-lg p-2 relative shadow-md flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1 w-full h-full p-1 bg-[#BF7339] rounded border border-rasphera-dark">
                <div className="bg-[#FFB58A] rounded-sm transform rotate-45 scale-75 border border-rasphera-dark"></div>
                <div className="bg-white rounded-sm border border-rasphera-dark"></div>
                <div className="bg-[#171412] rounded-sm border border-white/50"></div>
                <div className="bg-[#FF7417] rounded-sm border border-rasphera-dark"></div>
              </div>
              {/* Wooden easel legs */}
              <div className="absolute -bottom-4 left-2 w-1.5 h-6 bg-rasphera-brown border border-rasphera-dark"></div>
              <div className="absolute -bottom-4 right-2 w-1.5 h-6 bg-rasphera-brown border border-rasphera-dark"></div>
            </div>
            
            {/* Players standing near easel */}
            <div className="flex gap-2 -mt-3">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFD3B5] border-2 border-rasphera-dark flex items-center justify-center text-lg shadow-sm">
                  🧢
                </div>
                <div className="w-8 h-10 bg-rasphera-orange rounded-t-lg border-2 border-rasphera-dark"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F5C29B] border-2 border-rasphera-dark flex items-center justify-center text-lg shadow-sm">
                  👩‍💼
                </div>
                <div className="w-8 h-10 bg-[#38251C] rounded-t-lg border-2 border-rasphera-dark"></div>
              </div>
            </div>
            <span className="text-[11px] font-display uppercase tracking-wider text-rasphera-brown font-bold mt-2">
              Spatial Puzzles
            </span>
          </div>

          {/* Station 2: Central Group Cheering over Tabletop Strategy Game */}
          <div className="flex flex-col items-center">
            
            {/* Character Celebrations */}
            <div className="flex items-end gap-3 mb-2">
              <div className="flex flex-col items-center transform -rotate-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFE0CC] border-2 border-rasphera-dark flex items-center justify-center text-2xl shadow-sm">
                  😄
                </div>
                <div className="w-10 h-12 bg-rasphera-orange rounded-t-xl border-2 border-rasphera-dark"></div>
              </div>

              {/* Master facilitator with smile */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFB58A] border-3 border-rasphera-dark flex items-center justify-center text-3xl shadow-solid">
                  🤩
                </div>
                <div className="w-12 h-14 bg-rasphera-dark rounded-t-xl border-2 border-rasphera-dark text-white text-[9px] font-mono flex items-center justify-center font-bold">
                  FACILITATOR
                </div>
              </div>

              <div className="flex flex-col items-center transform rotate-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F8CDA8] border-2 border-rasphera-dark flex items-center justify-center text-2xl shadow-sm">
                  🙌
                </div>
                <div className="w-10 h-12 bg-[#5A3D30] rounded-t-xl border-2 border-rasphera-dark"></div>
              </div>
            </div>

            {/* Central Wooden Game Table with labyrinth */}
            <div className="w-48 sm:w-64 h-8 bg-[#8C5229] border-3 border-rasphera-dark rounded-xl shadow-solid flex items-center justify-center text-white text-xs font-mono font-bold">
              🎲 RASPHERA TACTILE ARENA 🪵
            </div>

            <span className="text-[11px] font-display uppercase tracking-wider text-rasphera-orange font-bold mt-2">
              Interactive Team Tabletop
            </span>
          </div>

          {/* Station 3: Tumbling Hardwood Jenga-Style Tower */}
          <div className="flex flex-col items-center">
            
            {/* Hardwood Tower Stack */}
            <div className="flex flex-col gap-1 items-center mb-1">
              <div className="w-10 h-3 bg-[#E0A06B] border border-rasphera-dark rounded-sm"></div>
              <div className="w-10 h-3 bg-[#C87E44] border border-rasphera-dark rounded-sm transform translate-x-1"></div>
              <div className="w-10 h-3 bg-[#E0A06B] border border-rasphera-dark rounded-sm"></div>
              <div className="w-10 h-3 bg-[#B06428] border border-rasphera-dark rounded-sm transform -translate-x-1"></div>
              <div className="w-10 h-3 bg-[#E0A06B] border border-rasphera-dark rounded-sm"></div>
              <div className="w-10 h-3 bg-[#C87E44] border border-rasphera-dark rounded-sm"></div>
            </div>

            {/* Players with hands outstretched */}
            <div className="flex gap-2">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFE5D3] border-2 border-rasphera-dark flex items-center justify-center text-lg shadow-sm">
                  😲
                </div>
                <div className="w-8 h-10 bg-rasphera-orange rounded-t-lg border-2 border-rasphera-dark"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F5C29B] border-2 border-rasphera-dark flex items-center justify-center text-lg shadow-sm">
                  👏
                </div>
                <div className="w-8 h-10 bg-[#38251C] rounded-t-lg border-2 border-rasphera-dark"></div>
              </div>
            </div>
            
            <span className="text-[11px] font-display uppercase tracking-wider text-rasphera-brown font-bold mt-2">
              Tension & Balance Tower
            </span>
          </div>

        </div>

        {/* Bottom Grass / Floor Base Line */}
        <div className="w-full h-3 bg-[#D48B55] border-t-2 border-rasphera-dark mt-4 rounded-full"></div>

      </div>

    </div>
  );
};
