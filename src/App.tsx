import { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { TravelingDice } from './components/TravelingDice';
import { RunningBoard } from './components/RunningBoard';
import { WhatWeDo } from './components/WhatWeDo';
import { QuickPlayGame } from './components/QuickPlayGame';
import { Experiences } from './components/Experiences';
import { ExperienceIncludes } from './components/ExperienceIncludes';
import { CommunityBanner } from './components/CommunityBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import confetti from 'canvas-confetti';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<string>('half-day-retreat');

  // Shared Interactive Wooden Dice State
  const [diceRoll, setDiceRoll] = useState<number>(6);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [diceQuote, setDiceQuote] = useState<string>("Click to roll! Every roll sparks an idea.");

  const heroStoryContainerRef = useRef<HTMLDivElement>(null);

  // Smoothly scroll to target section when hash is present
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 200);
      }
    }
  }, []);

  const rollQuotes = [
    "1 — Strategy: Challenge your next move!",
    "2 — Empathy: Connect before you compete.",
    "3 — Focus: Find stillness in the chaos.",
    "4 — Teamwork: No tower stands with one block.",
    "5 — Curiosity: Wonder opens every lock.",
    "6 — Pure Joy: Play is serious business!"
  ];

  const handleRollDice = () => {
    if (isRolling) return;
    setIsRolling(true);

    // Synthesize physical wooden clack sound via Web Audio API
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.09);
      }
    } catch {
      // Audio autoplay policy fallback
    }

    let count = 0;
    const interval = setInterval(() => {
      setDiceRoll(Math.floor(Math.random() * 6) + 1);
      count++;
      if (count > 7) {
        clearInterval(interval);
        const finalVal = Math.floor(Math.random() * 6) + 1;
        setDiceRoll(finalVal);
        setDiceQuote(rollQuotes[finalVal - 1]);
        setIsRolling(false);
        confetti({
          particleCount: 28,
          spread: 48,
          origin: { y: 0.55 },
          colors: ['#FF7417', '#FFB58A', '#38251C', '#FFF8EF']
        });
      }
    }, 70);
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSelectExperience = (expId: string) => {
    setSelectedExperience(expId);
  };

  return (
    <div className="min-h-screen bg-rasphera-cream text-rasphera-dark flex flex-col font-body selection:bg-rasphera-orange selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Flow matching Brand Architecture */}
      <main className="flex-grow">
        {/* Continuous Landing Page & History Container with Seamless Scroll-Driven Dice Journey */}
        <div ref={heroStoryContainerRef} className="relative">
          {/* 1. Hero Section (Landing Page) */}
          <Hero onOpenBooking={handleOpenBooking} diceQuote={diceQuote} />

          {/* 2. Our Story (History & Brand Equation) */}
          <OurStory />

          {/* Traveling Wooden Dice: Glides & rolls smoothly from Hero RASPHERA letters to the top-right corner of the 'Y' in HISTORY */}
          <TravelingDice
            containerRef={heroStoryContainerRef}
            diceRoll={diceRoll}
            isRolling={isRolling}
            onRollDice={handleRollDice}
          />
        </div>

        {/* Running Board Marquee (Between History & What We Do) */}
        <RunningBoard />

        {/* 3. What We Do (4 Categories & Philosophy) */}
        <WhatWeDo />

        {/* 4. Interactive Quick Play Game Lab */}
        <QuickPlayGame onOpenBooking={handleOpenBooking} />

        {/* 5. Experiences That Bring People Together & Interactive Planner */}
        <Experiences
          onOpenBooking={handleOpenBooking}
          onSelectExperience={handleSelectExperience}
        />

        {/* 6. What Every Experience Includes */}
        <ExperienceIncludes />

        {/* 7. Community Panoramic Illustration Banner */}
        <CommunityBanner />

        {/* 8. Final Call To Action (Let's Make Play Matter) */}
        <ContactSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Booking & Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialExperienceId={selectedExperience}
      />
    </div>
  );
}

export default App;
