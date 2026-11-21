import React from 'react';
import { ArrowDown, Sparkles, Dices } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  diceQuote?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenBooking, 
  diceQuote = "Click to roll! Every roll sparks an idea." 
}) => {

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center overflow-hidden bg-dot-pattern px-3 sm:px-6">
      {/* Decorative Background Geometric Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-rasphera-peach/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rasphera-orange/15 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Floating Decorative Wooden Blocks with Smooth Bobbing Animation */}
      <div className="hidden lg:flex absolute top-36 left-12 w-16 h-16 bg-[#D48B55] border-3 border-rasphera-dark rounded-xl shadow-solid items-center justify-center text-white font-display text-xs select-none animate-float">
        PLAY
      </div>

      <div className="hidden lg:flex absolute top-44 right-16 w-20 h-20 bg-rasphera-peach border-3 border-rasphera-dark rounded-2xl shadow-solid-lg items-center justify-center font-display text-rasphera-dark text-sm select-none animate-float-reverse">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-rasphera-peach/40 border-2 border-rasphera-dark text-rasphera-dark font-display tracking-wider text-[11px] sm:text-xs md:text-sm uppercase mb-4 sm:mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-rasphera-orange fill-rasphera-orange flex-shrink-0" />
          <span>Interactive Wooden Gaming Experiences</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-rasphera-orange"></span>
          <span className="hidden sm:inline-block text-rasphera-orange font-bold">Bangalore & Pan-India</span>
        </div>

        {/* HERO TITLE - The Iconic PDF Branding */}
        <div className="relative max-w-5xl mx-auto select-none my-1 sm:my-2 w-full flex justify-center">
          {/* Main Giant Lettering with Integrated 3D Wooden Dice */}
          <div className="relative inline-block px-4">
            <h1 className="font-display text-[3.8rem] sm:text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-tight font-extrabold text-rasphera-orange drop-shadow-md">
              RASPHERA
            </h1>
            
            {/* Outline Underlayer for editorial depth */}
            <h1 
              aria-hidden="true"
              className="absolute inset-0 px-4 font-display text-[3.8rem] sm:text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-tight font-extrabold text-stroke-dark-thick -z-10 translate-x-1 sm:translate-x-2 translate-y-1 sm:translate-y-2 select-none"
            >
              RASPHERA
            </h1>

            {/* Handwritten 'Games...' positioned authentically like the PDF */}
            <span className="absolute -bottom-2 sm:-bottom-7 left-3 sm:left-6 font-hand text-3xl sm:text-5xl md:text-6xl text-rasphera-dark font-black transform -rotate-6 z-20">
              Games...
            </span>

            {/* Anchor Point for the Traveling Wooden Dice on the RASPHERA letters */}
            <div 
              id="hero-dice-anchor"
              className="absolute -top-3 sm:-top-8 right-1/4 sm:right-1/3 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Four Pillar Tagline as in PDF */}
        <div className="mt-4 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 font-display text-base sm:text-2xl md:text-3xl text-rasphera-dark tracking-wide uppercase">
          <span className="text-rasphera-orange font-black">PLAY.</span>
          <span className="text-rasphera-dark font-black">THINK.</span>
          <span className="text-rasphera-orange font-black">CONNECT.</span>
          <span className="text-rasphera-dark font-black">CREATE.</span>
        </div>

        {/* Dice Interactive Result Pill */}
        <div className="mt-2.5 sm:mt-3 inline-flex items-center gap-2 bg-rasphera-cream-dark/90 px-3.5 py-1 rounded-full border border-rasphera-brown/30 text-xs sm:text-sm font-hand font-bold text-rasphera-brown">
          <Dices className="w-3.5 h-3.5 text-rasphera-orange flex-shrink-0" />
          <span>{diceQuote}</span>
        </div>

        {/* Description from Brand Document */}
        <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-base md:text-xl text-rasphera-brown leading-relaxed font-body font-medium px-2">
          Bringing people together through <span className="font-bold text-rasphera-dark underline decoration-rasphera-orange decoration-2">creativity</span>, <span className="font-bold text-rasphera-dark underline decoration-rasphera-peach decoration-2">collaboration</span>, and meaningful, screen-free wooden gaming experiences.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#experiences"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display text-base sm:text-lg uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border-2 sm:border-3 border-rasphera-dark box-solid-shadow box-solid-shadow-hover transition-all font-bold"
          >
            <span>Explore Our Experiences</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-rasphera-cream text-rasphera-dark font-display text-base sm:text-lg uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border-2 sm:border-3 border-rasphera-dark box-solid-shadow box-solid-shadow-hover transition-all font-bold"
          >
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Authentic Highlights Badges with Interactive Hover Elevation */}
        <div className="mt-8 sm:mt-14 pt-6 sm:pt-8 border-t-2 border-rasphera-dark/15 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 max-w-4xl w-full">
          <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white border-2 border-rasphera-dark shadow-solid hover:-translate-y-1.5 hover:shadow-solid-orange transition-all duration-300 cursor-default group">
            <span className="font-display text-2xl sm:text-4xl text-rasphera-orange font-black group-hover:scale-105 transition-transform">20+</span>
            <span className="text-[10px] sm:text-sm font-bold text-rasphera-dark mt-0.5 sm:mt-1">Original Wooden Games</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white border-2 border-rasphera-dark shadow-solid hover:-translate-y-1.5 hover:shadow-solid-orange transition-all duration-300 cursor-default group">
            <span className="font-display text-2xl sm:text-4xl text-rasphera-dark font-black group-hover:scale-105 transition-transform">100%</span>
            <span className="text-[10px] sm:text-sm font-bold text-rasphera-dark mt-0.5 sm:mt-1">Screen-Free Tactile Play</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white border-2 border-rasphera-dark shadow-solid hover:-translate-y-1.5 hover:shadow-solid-orange transition-all duration-300 cursor-default group">
            <span className="font-display text-2xl sm:text-4xl text-rasphera-orange font-black group-hover:scale-105 transition-transform">5,000+</span>
            <span className="text-[10px] sm:text-sm font-bold text-rasphera-dark mt-0.5 sm:mt-1">Players Connected</span>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white border-2 border-rasphera-dark shadow-solid hover:-translate-y-1.5 hover:shadow-solid-orange transition-all duration-300 cursor-default group">
            <span className="font-display text-2xl sm:text-4xl text-rasphera-dark font-black group-hover:scale-105 transition-transform">100%</span>
            <span className="text-[10px] sm:text-sm font-bold text-rasphera-dark mt-0.5 sm:mt-1">Eco-Friendly Hardwood</span>
          </div>
        </div>

      </div>
    </section>
  );
};
