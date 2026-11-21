import React from 'react';

interface RunningBoardProps {
  className?: string;
}

export const RunningBoard: React.FC<RunningBoardProps> = ({ className = '' }) => {
  // Array of repeating items for seamless infinite marquee loop
  const marqueeItems = [
    'RASPHERA GAMES',
    'RASPHERA GAMES',
    'RASPHERA GAMES',
    'RASPHERA GAMES',
    'RASPHERA GAMES',
    'RASPHERA GAMES',
    'RASPHERA GAMES',
    'RASPHERA GAMES',
    'RASPHERA GAMES',
    'RASPHERA GAMES',
  ];

  return (
    <div 
      className={`relative w-full bg-rasphera-dark py-3.5 sm:py-4 md:py-4.5 overflow-hidden select-none border-y-3 border-rasphera-dark shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_4px_12px_rgba(23,20,18,0.15)] z-20 ${className}`}
      aria-label="RASPHERA GAMES Marquee Banner"
    >
      {/* Subtle warm ambient edge vignettes */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-rasphera-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-rasphera-dark to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-default">
        {/* Track 1 */}
        <div className="flex items-center shrink-0">
          {marqueeItems.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-rasphera-orange font-black tracking-wider uppercase px-4 sm:px-6 transition-colors duration-200 hover:text-white drop-shadow-[0_2px_10px_rgba(255,116,23,0.35)]">
                {item}
              </span>
              <span className="text-rasphera-peach text-sm sm:text-base md:text-lg opacity-85 select-none animate-pulse">
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 (Clone for seamless -50% loop without visual pop) */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-rasphera-orange font-black tracking-wider uppercase px-4 sm:px-6 transition-colors duration-200 hover:text-white drop-shadow-[0_2px_10px_rgba(255,116,23,0.35)]">
                {item}
              </span>
              <span className="text-rasphera-peach text-sm sm:text-base md:text-lg opacity-85 select-none animate-pulse">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
