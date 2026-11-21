import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Game Lab', href: '#game-lab' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Inclusions', href: '#inclusions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-rasphera-cream/95 backdrop-blur-md border-b-2 border-rasphera-dark py-2.5 sm:py-3 shadow-md'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-rasphera-orange via-rasphera-peach to-rasphera-orange transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with wooden dice accent */}
          <a href="#" className="flex items-center group select-none">
            <div className="relative flex items-center">
              {/* RASPHERA Wordmark */}
              <span className="font-display tracking-tight text-2xl sm:text-4xl text-rasphera-orange font-bold transition-transform group-hover:scale-105">
                RASPHERA
              </span>

              {/* Games... + Crowned Dice Integrated Lockup (Dice nestled directly above Games...) */}
              <div className="relative flex items-center -ml-1 sm:-ml-1.5">
                {/* Crowned Dice placed above Games... moved down so crown is fully visible */}
                <div className="absolute -top-1.5 sm:-top-2.5 md:-top-3 left-1 sm:left-2 z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 pointer-events-none">
                  <img
                    src="/crowned_dice.png"
                    alt="RASPHERA Crowned Wooden Dice"
                    className="h-7 sm:h-9 md:h-10 w-auto object-contain drop-shadow-md select-none"
                  />
                </div>

                {/* Handwritten 'Games...' positioned authentically along baseline */}
                <span className="font-hand text-lg sm:text-2xl text-rasphera-dark font-bold mt-1 sm:mt-2 transform -rotate-6 select-none relative z-20">
                  Games...
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-semibold text-rasphera-dark hover:text-rasphera-orange transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rasphera-orange hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center gap-2 bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display uppercase tracking-wider text-sm px-6 py-2.5 rounded-lg border-2 border-rasphera-dark box-solid-shadow box-solid-shadow-hover transition-all font-bold"
            >
              <span>LET'S TALK</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-rasphera-orange text-white text-xs font-display px-3 py-1.5 rounded-lg border-2 border-rasphera-dark box-solid-shadow font-bold"
            >
              LET'S TALK
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-rasphera-dark hover:text-rasphera-orange focus:outline-none rounded-lg border border-rasphera-dark/20 bg-white"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-5 bg-rasphera-cream border-2 border-rasphera-dark rounded-xl box-solid-shadow px-5 animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display tracking-wide text-lg text-rasphera-dark hover:text-rasphera-orange border-b border-rasphera-peach/40 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center bg-rasphera-orange text-white font-display text-base py-3 rounded-lg border-2 border-rasphera-dark box-solid-shadow font-bold"
                >
                  LET'S TALK — BOOK EXPERIENCE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
