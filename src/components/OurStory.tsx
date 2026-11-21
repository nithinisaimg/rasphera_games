import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-32 relative bg-rasphera-cream overflow-hidden">
      {/* Editorial Decorative Background Details */}
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-rasphera-peach/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-rasphera-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline matching PDF - Prominent 3D "HISTORY" with dynamic overlay badge */}
        <div className="mb-16 text-center md:text-left relative">
          <div className="inline-block relative group">
            
            {/* Giant 3D "HISTORY" headline - completely visible, vibrant & dimensional */}
            <div className="relative inline-block select-none">
              <h2 className="font-display text-7xl sm:text-9xl md:text-[10rem] lg:text-[11.5rem] tracking-tight font-black text-rasphera-orange leading-none drop-shadow-md">
                HISTORY
              </h2>
              
              {/* Target Anchor for Traveling Dice Landing on the right corner of the 'Y' */}
              <div 
                id="history-dice-target"
                className="absolute -top-3 sm:-top-7 md:-top-9 right-0 sm:right-1 md:right-2 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 pointer-events-none"
                aria-hidden="true"
              />
              
              {/* 3D Drop Outline Underlayer for solid editorial depth */}
              <h2 
                aria-hidden="true"
                className="absolute inset-0 font-display text-7xl sm:text-9xl md:text-[10rem] lg:text-[11.5rem] tracking-tight font-black text-stroke-dark-thick leading-none select-none -z-10 translate-x-2 sm:translate-x-2.5 translate-y-2 sm:translate-y-2.5 text-transparent"
              >
                HISTORY
              </h2>

              {/* Subtle Warm Peach Ambient Layer */}
              <h2 
                aria-hidden="true"
                className="absolute inset-0 font-display text-7xl sm:text-9xl md:text-[10rem] lg:text-[11.5rem] tracking-tight font-black text-[#FFB58A] leading-none select-none -z-20 -translate-x-1 -translate-y-1 opacity-50"
              >
                HISTORY
              </h2>
            </div>

            {/* The Overlay Badge: "EVERY GAME HAS A STORY." with layered effects, glowing accent, and interactive hover */}
            <div className="relative md:absolute -bottom-4 md:-bottom-7 left-0 md:left-4 z-20 mt-4 md:mt-0">
              <div className="inline-flex items-center gap-3 px-5 sm:px-8 py-2.5 sm:py-3.5 bg-white/95 backdrop-blur-md border-3 border-rasphera-dark rounded-xl shadow-[5px_5px_0px_#171412,8px_8px_0px_#FF7417] transform -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 group-hover:shadow-[7px_7px_0px_#171412,11px_11px_0px_#FF7417] cursor-default">
                
                {/* Glowing Orange Wooden Indicator */}
                <div className="w-4 h-4 rounded-full bg-rasphera-orange flex items-center justify-center animate-pulse shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </div>

                <span className="font-display text-xl sm:text-3xl md:text-4xl text-rasphera-dark font-black tracking-wide uppercase">
                  EVERY GAME HAS A <span className="text-rasphera-orange underline decoration-4 decoration-rasphera-peach underline-offset-4">STORY.</span>
                </span>

                <span className="hidden sm:inline-block font-hand text-xl text-rasphera-brown font-bold ml-1">
                  ✦
                </span>
              </div>
            </div>

          </div>

          <p className="mt-8 md:mt-10 font-hand text-2xl sm:text-3xl text-rasphera-brown font-bold transform -rotate-1">
            "Behind every wooden block lies a shared human vision."
          </p>
        </div>

        {/* Main Content Grid: Asymmetric Layout matching the PDF reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Polaroids & Illustrated Founders (Lg: col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* Founders Polaroids Cluster */}
            <div className="relative w-full max-w-md mx-auto pt-6 pb-4">
              
              {/* Polaroid 1: Founder Rajesh */}
              <motion.div 
                whileHover={{ scale: 1.03, rotate: -3 }}
                transition={{ duration: 0.2 }}
                className="w-56 sm:w-64 bg-white p-3.5 pb-6 border-3 border-rasphera-dark rounded-xl shadow-solid-lg transform -rotate-6 relative z-10 mx-auto sm:ml-0"
              >
                {/* Washi tape visual effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-rasphera-peach/80 border border-rasphera-dark/30 transform -rotate-2"></div>
                
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-rasphera-dark/40 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 relative">
                  {/* Stylized Illustrated Founder Rajesh */}
                  <div className="w-20 h-20 rounded-full bg-rasphera-dark flex items-center justify-center text-white font-display text-2xl border-2 border-rasphera-orange shadow-md relative">
                    <span className="text-rasphera-orange font-black">RA</span>
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-rasphera-orange rounded-full flex items-center justify-center text-white text-xs">
                      🪵
                    </span>
                  </div>
                  <span className="mt-2 text-xs font-mono font-bold text-rasphera-brown uppercase tracking-wider">Master Craftsman</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="inline-block bg-rasphera-dark text-white text-[10px] font-display uppercase tracking-widest px-2 py-0.5 rounded">
                      FOUNDER
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl text-rasphera-dark font-bold tracking-tight">
                      RAJESH
                    </h4>
                  </div>
                  <span className="font-hand text-lg text-rasphera-orange font-bold">Creative Vision</span>
                </div>
              </motion.div>

              {/* Polaroid 2: Co-Founder Spandana */}
              <motion.div 
                whileHover={{ scale: 1.03, rotate: 6 }}
                transition={{ duration: 0.2 }}
                className="w-56 sm:w-64 bg-white p-3.5 pb-6 border-3 border-rasphera-dark rounded-xl shadow-solid-lg transform rotate-6 relative z-20 -mt-12 ml-auto sm:mr-0"
              >
                {/* Washi tape visual effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-rasphera-orange/70 border border-rasphera-dark/30 transform rotate-3"></div>

                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-peach-100 border-2 border-rasphera-dark/40 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 relative">
                  {/* Stylized Illustrated Co-Founder Spandana */}
                  <div className="w-20 h-20 rounded-full bg-rasphera-orange flex items-center justify-center text-white font-display text-2xl border-2 border-rasphera-dark shadow-md relative">
                    <span className="text-white font-black">SP</span>
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-rasphera-dark rounded-full flex items-center justify-center text-white text-xs">
                      ✨
                    </span>
                  </div>
                  <span className="mt-2 text-xs font-mono font-bold text-rasphera-brown uppercase tracking-wider">Experience Architect</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="inline-block bg-rasphera-orange text-white text-[10px] font-display uppercase tracking-widest px-2 py-0.5 rounded">
                      CO-FOUNDER
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl text-rasphera-dark font-bold tracking-tight">
                      SPANDANA
                    </h4>
                  </div>
                  <span className="font-hand text-lg text-rasphera-dark font-bold">People & Culture</span>
                </div>
              </motion.div>

              {/* Central Cartoon Illustration Card: Two Friends Playing Wooden Board Game */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-4 bg-rasphera-peach/40 border-3 border-rasphera-dark rounded-2xl p-4 shadow-solid relative"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white rounded-xl border-2 border-rasphera-dark flex items-center justify-center text-3xl shadow-sm">
                    🎲
                  </div>
                  <div>
                    <span className="font-hand text-lg text-rasphera-orange font-bold">Joy in Every Move</span>
                    <h5 className="font-display text-lg text-rasphera-dark font-bold">
                      THE SPARK OF TACTILE PLAY
                    </h5>
                    <p className="text-xs text-rasphera-brown">
                      Born from a shared love for timeless timber craftsmanship & game night camaraderie.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Right Column: Editorial History Card with The Formula (Lg: col-span-7) */}
          <div className="lg:col-span-7">
            
            {/* The Signature Orange & Peach Editorial Box matching PDF layout */}
            <div className="bg-gradient-to-br from-[#FFB58A]/50 to-[#FF8C38]/20 border-3 border-rasphera-dark rounded-2xl p-6 sm:p-8 md:p-10 shadow-solid-lg relative">
              
              {/* Header Box */}
              <div className="border-b-2 border-rasphera-dark/20 pb-6 mb-6">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-rasphera-dark/70">
                  Origin Chronicle
                </span>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-rasphera-dark font-black tracking-tight mt-1">
                  The History of <span className="text-rasphera-orange">RASPHERA</span>.
                </h3>
                
                {/* Founder Names Header */}
                <div className="mt-3 flex items-center gap-4 font-display text-lg sm:text-xl text-rasphera-dark">
                  <span className="bg-white px-3 py-1 rounded-md border border-rasphera-dark shadow-sm">
                    RAJESH
                  </span>
                  <span className="text-rasphera-orange font-bold text-xl">+</span>
                  <span className="bg-white px-3 py-1 rounded-md border border-rasphera-dark shadow-sm">
                    SPANDANA
                  </span>
                </div>
              </div>

              {/* The Formula Breakdown Section: RA + SP + HERA = RASPHERA */}
              <div className="bg-white/90 border-2 border-rasphera-dark rounded-xl p-5 mb-6 shadow-sm">
                <span className="text-xs font-display tracking-widest uppercase text-rasphera-orange font-bold block mb-2">
                  THE NAME FORMULA
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center my-3">
                  <div className="bg-rasphera-cream p-3 rounded-lg border-2 border-rasphera-dark hover:-translate-y-1 hover:shadow-solid hover:border-rasphera-orange transition-all duration-200 cursor-default group">
                    <span className="font-display text-2xl sm:text-3xl text-rasphera-orange font-black group-hover:scale-110 transition-transform inline-block">RA</span>
                    <p className="text-xs font-bold text-rasphera-dark mt-1">Rajesh</p>
                    <p className="text-[11px] text-rasphera-brown font-medium">Founder</p>
                  </div>
                  <div className="bg-rasphera-cream p-3 rounded-lg border-2 border-rasphera-dark hover:-translate-y-1 hover:shadow-solid hover:border-rasphera-orange transition-all duration-200 cursor-default group">
                    <span className="font-display text-2xl sm:text-3xl text-rasphera-orange font-black group-hover:scale-110 transition-transform inline-block">SP</span>
                    <p className="text-xs font-bold text-rasphera-dark mt-1">Spandhana</p>
                    <p className="text-[11px] text-rasphera-brown font-medium">Co-Founder</p>
                  </div>
                  <div className="bg-rasphera-cream p-3 rounded-lg border-2 border-rasphera-dark hover:-translate-y-1 hover:shadow-solid hover:border-rasphera-orange transition-all duration-200 cursor-default group">
                    <span className="font-display text-2xl sm:text-3xl text-rasphera-orange font-black group-hover:scale-110 transition-transform inline-block">HERA</span>
                    <p className="text-xs font-bold text-rasphera-dark mt-1">Egyptian Deity</p>
                    <p className="text-[11px] text-rasphera-brown font-medium">Gaming & Fun</p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-rasphera-peach/30 rounded-lg border border-rasphera-dark/30 text-center hover:bg-rasphera-peach/50 transition-colors">
                  <span className="font-display text-xl sm:text-2xl text-rasphera-dark tracking-wide font-black">
                    RA + SP + HERA = <span className="text-rasphera-orange">RASPHERA</span>
                  </span>
                  <p className="text-xs text-rasphera-brown mt-1">
                    A name that symbolizes the identity, creativity, and shared vision behind the brand.
                  </p>
                </div>
              </div>

              {/* Brand Narrative Paragraphs directly from the PDF */}
              <div className="space-y-6 text-rasphera-brown text-sm sm:text-base leading-relaxed">
                
                <div>
                  <h4 className="font-display text-xl text-rasphera-dark uppercase tracking-wider flex items-center gap-2 mb-2">
                    <Compass className="w-5 h-5 text-rasphera-orange" />
                    <span>Our Vision</span>
                  </h4>
                  <p className="bg-white/60 p-4 rounded-xl border border-rasphera-dark/20 text-rasphera-dark font-medium">
                    Our vision is to create a unique, multi-platform experience in the world of wooden toys and interactive entertainment, bringing together creativity, learning, and fun for people of all ages. We aim to redefine traditional play through innovative experiences that inspire imagination, curiosity, and meaningful engagement.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-xl text-rasphera-dark uppercase tracking-wider flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-rasphera-orange" />
                    <span>What We Offer</span>
                  </h4>
                  <div className="bg-white/60 p-4 rounded-xl border border-rasphera-dark/20 space-y-2">
                    <p>
                      Rasphera provides engaging and interactive wooden gaming experiences designed for events of every scale, from intimate gatherings and small-scale celebrations to large-scale corporate and public events.
                    </p>
                    <p>
                      We offer comprehensive entertainment solutions featuring thoughtfully designed wooden games that blend logic, creativity, problem-solving, and interactive brainstorming. By combining traditional craftsmanship with innovative gameplay, we create memorable experiences that challenge the mind, encourage collaboration, and bring people together through the joy of play.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
