import React from 'react';

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

      {/* Clean Card Container - Preserved for future custom content */}
      <div className="max-w-6xl mx-auto relative bg-[#FCE6D2] border-3 border-rasphera-dark rounded-3xl shadow-solid-xl min-h-[220px] sm:min-h-[280px] md:min-h-[320px] overflow-hidden">
      </div>

    </div>
  );
};
