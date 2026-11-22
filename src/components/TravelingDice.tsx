import React, { useEffect, useState, useRef } from 'react';

interface TravelingDiceProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  diceRoll: number;
  isRolling: boolean;
  onRollDice: () => void;
}

export const TravelingDice: React.FC<TravelingDiceProps> = ({
  containerRef,
  diceRoll,
  isRolling,
  onRollDice,
}) => {
  const [style, setStyle] = useState<{
    x: number;
    y: number;
    rotation: number;
    scale: number;
    isDockedOnHistory: boolean;
    ready: boolean;
  }>({
    x: 0,
    y: 0,
    rotation: 12,
    scale: 1,
    isDockedOnHistory: false,
    ready: false,
  });

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const updateMotion = () => {
      animFrameIdRef.current = null;
      const container = containerRef.current;
      const startEl = document.getElementById('hero-dice-anchor');
      const endEl = document.getElementById('history-dice-target');

      if (!container || !startEl || !endEl) {
        animFrameIdRef.current = requestAnimationFrame(updateMotion);
        return;
      }

      const cRect = container.getBoundingClientRect();
      const sRect = startEl.getBoundingClientRect();
      const eRect = endEl.getBoundingClientRect();

      // Start and end positions relative to the container
      const startX = sRect.left - cRect.left;
      const startY = sRect.top - cRect.top;
      const endX = eRect.left - cRect.left;
      const endY = eRect.top - cRect.top;

      // Scroll progress mapping:
      // Start: scrollY = 0
      // Target: when the HISTORY title arrives in the upper third of the viewport
      const scrollY = window.scrollY;
      const targetScroll = Math.max(180, endY - window.innerHeight * 0.32);
      const rawProgress = Math.min(1, Math.max(0, scrollY / targetScroll));

      targetProgressRef.current = rawProgress;

      // Silky smooth physical lerp
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0008) {
        currentProgressRef.current += diff * 0.15;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const p = currentProgressRef.current;

      // Smooth flight trajectory
      const curX = startX + (endX - startX) * p;
      // Parabolic upward arc during mid-flight tumble
      const arcY = -Math.sin(p * Math.PI) * 48;
      const curY = startY + (endY - startY) * p + arcY;

      // Continuous rotational roll: 12deg -> 732deg (2 full rolls) -> settles at 12deg
      const rot = 12 + p * 720;

      // Subtle 3D lift in perspective
      const scale = 1 + Math.sin(p * Math.PI) * 0.14;

      setStyle({
        x: curX,
        y: curY,
        rotation: rot,
        scale: scale,
        isDockedOnHistory: p >= 0.98,
        ready: true,
      });

      // Continue animation loop if still interpolating or user is scrolling
      if (Math.abs(diff) > 0.0008) {
        animFrameIdRef.current = requestAnimationFrame(updateMotion);
      }
    };

    const wakeLoop = () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      animFrameIdRef.current = requestAnimationFrame(updateMotion);
    };

    // Run immediately and schedule frame
    updateMotion();
    wakeLoop();

    // Trigger multiple layout checks to handle font/asset rendering settling
    const t1 = setTimeout(wakeLoop, 50);
    const t2 = setTimeout(wakeLoop, 150);
    const t3 = setTimeout(wakeLoop, 350);
    const t4 = setTimeout(wakeLoop, 700);

    if (document.fonts) {
      document.fonts.ready.then(() => {
        wakeLoop();
      });
    }

    // Observe size changes of the container and anchors
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        wakeLoop();
      });
      const container = containerRef.current;
      const startEl = document.getElementById('hero-dice-anchor');
      const endEl = document.getElementById('history-dice-target');
      if (container) resizeObserver.observe(container);
      if (startEl) resizeObserver.observe(startEl);
      if (endEl) resizeObserver.observe(endEl);
    }

    window.addEventListener('scroll', wakeLoop, { passive: true });
    window.addEventListener('resize', wakeLoop);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener('scroll', wakeLoop);
      window.removeEventListener('resize', wakeLoop);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    };
  }, [containerRef]);

  if (!style.ready) {
    return null;
  }

  return (
    <div
      onClick={onRollDice}
      title="Click to roll the RASPHERA wooden dice!"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        transform: `translate3d(${style.x}px, ${style.y}px, 0px) rotate(${style.rotation}deg) scale(${style.scale})`,
        zIndex: 35,
        cursor: 'pointer',
        touchAction: 'manipulation',
        willChange: 'transform',
      }}
      className="group select-none"
    >
      <div
        className={`w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-rasphera-dark rounded-xl sm:rounded-2xl border-2 sm:border-3 border-rasphera-orange shadow-solid-lg flex items-center justify-center transform group-hover:scale-110 transition-transform ${
          isRolling ? 'animate-spin' : 'animate-dice-float'
        }`}
      >
        {/* Mathematically centered dice face pips for all numbers (1-6) */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full select-none pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {diceRoll === 1 && (
            <circle cx="50" cy="50" r="11" fill="white" />
          )}

          {diceRoll === 2 && (
            <>
              <circle cx="28" cy="28" r="8.5" fill="white" />
              <circle cx="72" cy="72" r="8.5" fill="white" />
            </>
          )}

          {diceRoll === 3 && (
            <>
              <circle cx="26" cy="26" r="8" fill="white" />
              <circle cx="50" cy="50" r="8" fill="white" />
              <circle cx="74" cy="74" r="8" fill="white" />
            </>
          )}

          {diceRoll === 4 && (
            <>
              <circle cx="28" cy="28" r="8" fill="white" />
              <circle cx="72" cy="28" r="8" fill="white" />
              <circle cx="28" cy="72" r="8" fill="white" />
              <circle cx="72" cy="72" r="8" fill="white" />
            </>
          )}

          {diceRoll === 5 && (
            <>
              <circle cx="26" cy="26" r="7.5" fill="white" />
              <circle cx="74" cy="26" r="7.5" fill="white" />
              <circle cx="50" cy="50" r="7.5" fill="white" />
              <circle cx="26" cy="74" r="7.5" fill="white" />
              <circle cx="74" cy="74" r="7.5" fill="white" />
            </>
          )}

          {diceRoll === 6 && (
            <>
              <circle cx="28" cy="24" r="7" fill="white" />
              <circle cx="72" cy="24" r="7" fill="white" />
              <circle cx="28" cy="50" r="7" fill="white" />
              <circle cx="72" cy="50" r="7" fill="white" />
              <circle cx="28" cy="76" r="7" fill="white" />
              <circle cx="72" cy="76" r="7" fill="white" />
            </>
          )}
        </svg>
      </div>

      {/* Interactive Tooltip Pill with subtle bounce / pulse */}
      <span className="hidden sm:inline-flex items-center gap-1 absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-[11px] font-hand font-bold text-rasphera-orange bg-white px-2.5 py-0.5 rounded-full border border-rasphera-dark shadow-solid opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all pointer-events-none animate-pulse-subtle">
        <span>🎲</span>
        <span>{style.isDockedOnHistory ? 'Roll on Y!' : 'Roll me!'}</span>
      </span>
    </div>
  );
};
