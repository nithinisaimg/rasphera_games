import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  onBackToHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  // Lock screen completely: prevent any scrolling, bouncing, or dragging
  useEffect(() => {
    const origBodyOverflow = document.body.style.overflow;
    const origHtmlOverflow = document.documentElement.style.overflow;
    const origBodyTouch = document.body.style.touchAction;
    const origOverscroll = document.body.style.overscrollBehavior;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    document.body.style.overscrollBehavior = 'none';
    window.scrollTo(0, 0);

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = origBodyOverflow;
      document.documentElement.style.overflow = origHtmlOverflow;
      document.body.style.touchAction = origBodyTouch;
      document.body.style.overscrollBehavior = origOverscroll;
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#E1E1E1] flex items-center justify-center overflow-hidden select-none touch-none overscroll-none font-body z-50">
      {/* Proportionally fitted container that never overflows the screen */}
      <div className="relative w-full h-full max-w-full max-h-full aspect-[1024/575] flex items-center justify-center">
        <img
          src="/404.jpg"
          alt="404 Error: The game is on, but this page isn't. - Rasphera Games"
          className="w-full h-full object-contain object-center pointer-events-none select-none block"
          draggable={false}
        />

        {/* Floating "Back to Play Area" Button anchored right in the lower grid slot below 404 ERROR */}
        <div className="absolute bottom-[6%] sm:bottom-[7%] md:bottom-[8%] left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <button
            onClick={onBackToHome}
            className="group relative inline-flex items-center gap-2 bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display uppercase tracking-wider text-xs sm:text-sm md:text-base px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl border-2 sm:border-3 border-rasphera-dark box-solid-shadow box-solid-shadow-hover transition-all font-bold cursor-pointer active:translate-y-0.5 whitespace-nowrap shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO PLAY AREA</span>
          </button>
        </div>
      </div>
    </div>
  );
};
