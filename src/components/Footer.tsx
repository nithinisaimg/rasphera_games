import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-rasphera-dark text-white border-t-4 border-rasphera-dark pt-12 pb-8 relative overflow-hidden">
      
      {/* Decorative Warm Ambient Light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rasphera-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Unified Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
          
          {/* Brand & Mission Column (lg: col-span-6) */}
          <div className="md:col-span-2 lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Decreased RASPHERA Games... (decreased to a sleek, balanced, brand-first size) */}
              <div className="inline-flex items-baseline flex-wrap gap-2 sm:gap-3">
                <span className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl text-rasphera-orange font-black leading-none drop-shadow-sm">
                  RASPHERA
                </span>
                <span className="font-hand text-2xl sm:text-3xl md:text-4xl text-white font-black transform -rotate-6 inline-block">
                  Games...
                </span>
              </div>

              {/* Tagline: PLAY. CONNECT. CREATE. */}
              <div className="font-display text-sm sm:text-base md:text-lg text-rasphera-peach tracking-wider uppercase font-black mt-2">
                PLAY. CONNECT. CREATE.
              </div>

              {/* Description */}
              <p className="font-body text-xs sm:text-sm md:text-base text-white/75 leading-relaxed font-normal max-w-lg mt-3">
                Transforming corporate wellness through empathetic play. Bringing people together through creativity, collaboration, and meaningful gaming experiences.
              </p>
            </div>

            {/* Origin & Location Badge */}
            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-white/60">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-rasphera-peach">
                <span className="w-1.5 h-1.5 rounded-full bg-rasphera-orange animate-pulse" />
                Bangalore, India
              </span>
              <span>•</span>
              <span>Handcrafted Wooden Games</span>
            </div>
          </div>

          {/* Quick Links Column (lg: col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-wider text-white font-bold mb-4 border-b border-rasphera-orange/40 pb-1.5 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-white/80">
              <li>
                <a href="#story" className="hover:text-rasphera-orange transition-colors flex items-center gap-2">
                  <span className="text-rasphera-orange">›</span> History & Story
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-rasphera-orange transition-colors flex items-center gap-2">
                  <span className="text-rasphera-orange">›</span> What We Do
                </a>
              </li>
              <li>
                <a href="#game-lab" className="hover:text-rasphera-orange transition-colors flex items-center gap-2">
                  <span className="text-rasphera-orange">›</span> Quick Play Lab
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-rasphera-orange transition-colors flex items-center gap-2">
                  <span className="text-rasphera-orange">›</span> Experience Packages
                </a>
              </li>
              <li>
                <a href="#inclusions" className="hover:text-rasphera-orange transition-colors flex items-center gap-2">
                  <span className="text-rasphera-orange">›</span> What Every Experience Includes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rasphera-orange transition-colors flex items-center gap-2">
                  <span className="text-rasphera-orange">›</span> Contact & Booking
                </a>
              </li>
              <li className="pt-2 border-t border-white/10">
                <a href="#404" className="text-white/40 hover:text-rasphera-orange transition-colors flex items-center gap-2 text-[11px]">
                  <span className="text-rasphera-orange/60">›</span> 404 Error Page
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us Column (lg: col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-wider text-white font-bold mb-4 border-b border-rasphera-orange/40 pb-1.5 inline-block">
              Connect With Us
            </h4>
            <p className="text-xs text-white/70 mb-4">
              Book your team experience or discover our original wooden game catalog.
            </p>

            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.instagram.com/rasphera.games?utm_source=ig_web_button_share_sheet&jplx=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-rasphera-orange hover:text-white border border-white/10 transition-all text-xs sm:text-sm font-semibold group"
                >
                  <svg className="w-4 h-4 text-rasphera-peach group-hover:text-white fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                  <span className="text-xs text-white/50 ml-auto font-mono">@rasphera.games</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:raspheragames@gmail.com"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-rasphera-orange hover:text-white border border-white/10 transition-all text-xs sm:text-sm font-semibold group"
                >
                  <Mail className="w-4 h-4 text-rasphera-peach group-hover:text-white shrink-0" />
                  <span>Gmail</span>
                  <span className="text-xs text-white/50 ml-auto font-mono">raspheragames@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top in single line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div>
            © {new Date().getFullYear()} RASPHERA Games. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-white/50">
            <span>Crafted with timber, empathy & play</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-rasphera-orange text-white transition-all font-display uppercase tracking-wider text-xs font-bold group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
