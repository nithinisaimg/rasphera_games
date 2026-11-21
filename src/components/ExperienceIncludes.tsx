import React from 'react';
import { experienceInclusions } from '../data/experiences';
import { Sparkles, Dices, SlidersHorizontal, TreePine, FileBarChart, CheckCircle2 } from 'lucide-react';

export const ExperienceIncludes: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-rasphera-orange" />;
      case 'Dices':
        return <Dices className="w-8 h-8 text-rasphera-orange" />;
      case 'SlidersHorizontal':
        return <SlidersHorizontal className="w-8 h-8 text-rasphera-orange" />;
      case 'TreePine':
        return <TreePine className="w-8 h-8 text-rasphera-orange" />;
      case 'FileBarChart':
        return <FileBarChart className="w-8 h-8 text-rasphera-orange" />;
      default:
        return <CheckCircle2 className="w-8 h-8 text-rasphera-orange" />;
    }
  };

  return (
    <section id="inclusions" className="py-20 md:py-28 bg-[#FFF8EF] border-b-2 border-rasphera-dark/15 relative overflow-hidden bg-dot-pattern">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline matching PDF: WHAT EVERY EXPERIENCE INCLUDES */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="font-hand text-2xl sm:text-3xl text-rasphera-orange font-bold transform -rotate-1 inline-block">
            Our Standard of Excellence
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-rasphera-dark font-black tracking-tight mt-1 uppercase">
            WHAT EVERY EXPERIENCE <span className="text-rasphera-orange">INCLUDES</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-rasphera-brown font-medium max-w-2xl mx-auto">
            From intimate leadership retreats to 300+ player corporate summits, every single Rasphera booking arrives fully equipped with our five signature touchpoints.
          </p>
        </div>

        {/* 5 Inclusions Illustrated Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {experienceInclusions.map((item, idx) => {
            const isFullSpan = idx === 4; // 5th item spans nicely on large screens

            return (
              <div
                key={item.id}
                className={`bg-white border-3 border-rasphera-dark rounded-2xl p-6 sm:p-8 shadow-solid-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-solid-orange flex flex-col justify-between group ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-r from-white via-white to-rasphera-peach/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-black text-rasphera-orange group-hover:scale-105 transition-transform inline-block">
                      {item.number}
                    </span>
                    <div className="p-3 bg-rasphera-cream rounded-xl border-2 border-rasphera-dark shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-rasphera-orange uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="font-display text-2xl text-rasphera-dark font-bold tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-rasphera-brown leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rasphera-dark/10 flex items-center justify-between text-xs font-mono text-rasphera-dark/60 font-bold">
                  <span>Guaranteed Included</span>
                  <span className="text-rasphera-orange">✓ 100% Rasphera Standard</span>
                </div>
              </div>
            );
          })}

          {/* Quick Bonus Metric Card to round off the 6-pack grid on desktop */}
          <div className="bg-rasphera-orange border-3 border-rasphera-dark rounded-2xl p-6 sm:p-8 shadow-solid-lg text-white flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/80 block mb-2">
                Corporate Assurance
              </span>
              <h3 className="font-display text-3xl text-white font-black leading-tight mb-3">
                Zero Setup Hassle for You.
              </h3>
              <p className="text-sm text-white/90 leading-relaxed font-medium">
                Our facilitators handle the complete delivery, setup, staging, tournament moderation, and takedown. You simply show up, play, and connect.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-display tracking-wider uppercase">
              <span>Turnkey Entertainment</span>
              <span>★★★★★</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
