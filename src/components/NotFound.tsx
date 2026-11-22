import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  onBackToHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  return (
    <div className="h-screen w-screen relative overflow-hidden select-none bg-[#EAE8E3] flex items-center justify-center font-body">
      {/* Full-Screen Edge-to-Edge Blueprint Graphic */}
      <img
        src="/404.jpg"
        alt="404 Error: The game is on, but this page isn't. - Rasphera Games"
        className="w-full h-full object-cover object-center block pointer-events-none"
      />

      {/* Floating "Back to Play Area" Button */}
      <div className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={onBackToHome}
          className="group relative inline-flex items-center gap-2 bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display uppercase tracking-wider text-xs sm:text-sm md:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl border-2 sm:border-3 border-rasphera-dark box-solid-shadow box-solid-shadow-hover transition-all font-bold cursor-pointer shadow-lg active:translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO PLAY AREA</span>
        </button>
      </div>
    </div>
  );
};
