import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  onBackToHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen w-full bg-[#EAE8E3] relative flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 select-none overflow-hidden font-body">
      {/* Background Decorative Blur orbs matching Rasphera palette */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-rasphera-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rasphera-peach/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main 404 Blueprint Artwork Card */}
      <div className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-rasphera-dark shadow-solid-xl overflow-hidden bg-white flex flex-col items-center">
        {/* The 404 Graphic */}
        <div className="relative w-full aspect-[1024/575]">
          <img
            src="/404.jpg"
            alt="404 Error: The game is on, but this page isn't. - Rasphera Games"
            className="w-full h-full object-cover sm:object-contain block pointer-events-none"
          />

          {/* Integrated "Back to Play Area" Button perched in the lower grid area */}
          <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={onBackToHome}
              className="group relative inline-flex items-center gap-2 bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display uppercase tracking-wider text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl border-2 border-rasphera-dark box-solid-shadow box-solid-shadow-hover transition-all font-bold cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO PLAY AREA</span>
            </button>
          </div>
        </div>
      </div>

      {/* Direct Quick Link below card for convenient navigation */}
      <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-hand font-bold text-rasphera-brown text-center">
        Lost the game board?{' '}
        <button
          onClick={onBackToHome}
          className="text-rasphera-orange underline font-bold hover:text-rasphera-orange-hover cursor-pointer"
        >
          Return to RASPHERA Landing
        </button>
      </p>
    </div>
  );
};
