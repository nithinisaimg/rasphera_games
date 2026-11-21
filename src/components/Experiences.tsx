import React, { useState } from 'react';
import { experiences } from '../data/experiences';
import { Clock, Users, Target, ArrowRight, Check, Sparkles } from 'lucide-react';

interface ExperiencesProps {
  onOpenBooking: () => void;
  onSelectExperience: (experienceId: string) => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onOpenBooking, onSelectExperience }) => {
  // Interactive Calculator State
  const [calcGroupSize, setCalcGroupSize] = useState<number>(35);
  const [calcGoal, setCalcGoal] = useState<'icebreaker' | 'wellness' | 'corporate'>('wellness');

  const getRecommendedExperience = () => {
    if (calcGoal === 'icebreaker') return experiences[0];
    if (calcGoal === 'wellness') return experiences[1];
    return experiences[2];
  };

  const recommended = getRecommendedExperience();

  return (
    <section id="experiences" className="py-20 md:py-32 relative bg-rasphera-cream overflow-hidden">
      
      {/* Background subtle textures */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rasphera-peach/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline matching PDF: EXPERIENCES THAT BRING PEOPLE TOGETHER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          <div className="inline-block relative">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight font-extrabold text-stroke-orange-thick select-none leading-none">
              EXPERIENCES THAT
            </h2>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight font-extrabold text-rasphera-orange leading-none -mt-2 sm:-mt-4">
              BRING PEOPLE TOGETHER
            </h2>
          </div>

          <p className="mt-6 font-body text-base sm:text-lg md:text-xl text-rasphera-brown max-w-3xl mx-auto leading-relaxed font-medium">
            We curate interactive gaming experiences tailored to different audiences, occasions, and event sizes. Whether it's a short team-building session or a full-day corporate engagement, <strong className="text-rasphera-dark">Rasphera brings everything together to create an unforgettable experience.</strong>
          </p>

        </div>

        {/* 3 Main Experience Cards from PDF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {experiences.map((exp) => {
            const isFeatured = exp.featured;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col justify-between rounded-2xl border-3 border-rasphera-dark p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2.5 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#FFE8DC] via-white to-white shadow-solid-xl border-rasphera-dark md:-translate-y-2 hover:shadow-solid-orange'
                    : 'bg-white shadow-solid-lg hover:shadow-solid-orange'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rasphera-orange text-white text-xs font-display tracking-widest uppercase px-4 py-1 rounded-full border-2 border-rasphera-dark shadow-solid font-bold flex items-center gap-1.5 whitespace-nowrap animate-pulse-subtle">
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular Format</span>
                  </div>
                )}

                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-rasphera-dark text-white">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-bold text-rasphera-orange flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl sm:text-4xl text-rasphera-dark font-black tracking-tight mb-3">
                    {exp.name}
                  </h3>

                  {/* PDF Core Description */}
                  <p className="font-body text-sm sm:text-base text-rasphera-brown font-semibold mb-6 pb-4 border-b-2 border-dashed border-rasphera-dark/15">
                    {exp.description}
                  </p>

                  {/* Target Audience & Size */}
                  <div className="space-y-2 mb-6 text-xs text-rasphera-dark">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-rasphera-orange flex-shrink-0" />
                      <span><strong>Group Size:</strong> {exp.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-rasphera-orange flex-shrink-0" />
                      <span><strong>Ideal For:</strong> {exp.idealFor}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rasphera-dark/60 font-bold block">
                      Key Inclusions:
                    </span>
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-rasphera-dark/90 font-medium">
                        <Check className="w-4 h-4 text-rasphera-orange flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => {
                      onSelectExperience(exp.id);
                      onOpenBooking();
                    }}
                    className={`w-full py-3 px-4 rounded-xl border-2 border-rasphera-dark font-display text-base uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-rasphera-orange hover:bg-rasphera-orange-hover text-white box-solid-shadow'
                        : 'bg-rasphera-cream hover:bg-rasphera-peach text-rasphera-dark box-solid-shadow'
                    }`}
                  >
                    <span>Request {exp.name.split(' ')[0]} Lab</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Experience Selector Widget */}
        <div className="bg-gradient-to-br from-rasphera-dark to-rasphera-brown text-white border-3 border-rasphera-dark rounded-3xl p-6 sm:p-10 shadow-solid-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/15 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono text-rasphera-peach font-bold uppercase tracking-widest block mb-1">
                Interactive Assistant
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-white font-black tracking-tight">
                Plan Your Team Engagement
              </h3>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs font-mono">
              ⚡ Instant Recommendation
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Controls: Sliders and Toggles */}
            <div className="space-y-6">
              
              {/* Group Size Slider */}
              <div>
                <div className="flex items-center justify-between text-sm font-semibold mb-2">
                  <span>Estimated Participants:</span>
                  <span className="text-rasphera-peach font-mono font-bold text-lg">
                    {calcGroupSize} People
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={calcGroupSize}
                  onChange={(e) => setCalcGroupSize(Number(e.target.value))}
                  className="w-full accent-rasphera-orange cursor-pointer h-2 bg-white/20 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-white/50 font-mono mt-1">
                  <span>10 (Small team)</span>
                  <span>100 (Department)</span>
                  <span>200+ (Summit)</span>
                </div>
              </div>

              {/* Goal Selector */}
              <div>
                <span className="block text-sm font-semibold mb-2">Primary Objective:</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCalcGoal('icebreaker')}
                    className={`py-2 px-2.5 rounded-lg border text-xs font-bold transition-all text-center ${
                      calcGoal === 'icebreaker'
                        ? 'bg-rasphera-orange border-rasphera-orange text-white shadow-sm'
                        : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    Quick Reset
                  </button>
                  <button
                    onClick={() => setCalcGoal('wellness')}
                    className={`py-2 px-2.5 rounded-lg border text-xs font-bold transition-all text-center ${
                      calcGoal === 'wellness'
                        ? 'bg-rasphera-orange border-rasphera-orange text-white shadow-sm'
                        : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    Team Wellness
                  </button>
                  <button
                    onClick={() => setCalcGoal('corporate')}
                    className={`py-2 px-2.5 rounded-lg border text-xs font-bold transition-all text-center ${
                      calcGoal === 'corporate'
                        ? 'bg-rasphera-orange border-rasphera-orange text-white shadow-sm'
                        : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    Strategy Summit
                  </button>
                </div>
              </div>

            </div>

            {/* Right Recommendation Card */}
            <div className="bg-white/10 border-2 border-white/20 rounded-2xl p-6">
              <span className="text-[11px] font-mono text-rasphera-peach uppercase font-bold tracking-wider">
                Tailored Match
              </span>
              <h4 className="font-display text-2xl sm:text-3xl text-white font-bold mt-1 mb-2">
                {recommended.name}
              </h4>
              <p className="text-xs sm:text-sm text-white/80 mb-4">
                {recommended.description}
              </p>
              
              <div className="space-y-1.5 text-xs text-rasphera-peach font-mono mb-6">
                <div>• Suggested Facilitators: {Math.max(2, Math.ceil(calcGroupSize / 25))} Experts</div>
                <div>• Games Deployed: {calcGroupSize > 50 ? '15-20 Handcrafted Stations' : '8-12 Handcrafted Stations'}</div>
                <div>• Recommended Duration: {recommended.duration}</div>
              </div>

              <button
                onClick={() => {
                  onSelectExperience(recommended.id);
                  onOpenBooking();
                }}
                className="w-full bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display text-base uppercase tracking-wider py-3 px-4 rounded-xl border-2 border-white/30 shadow-md transition-all font-bold"
              >
                Book This Recommended Plan
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
