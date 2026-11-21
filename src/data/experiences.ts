import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'quick-play-lab',
    name: 'Quick Play Lab',
    badge: 'High-Energy Icebreaker',
    duration: '45 – 90 Minutes',
    idealFor: 'Team kick-offs, agile standups, conference breaks & celebrations',
    groupSize: '10 – 100+ Participants',
    description: 'A refreshing experience designed to spark focus, laughter, and team bonding.',
    highlights: [
      'Rapid-fire wooden puzzle solving challenges',
      'High-speed balance & concentration rounds',
      'Immediate laughter, dopamine & mental reset',
      'Facilitated micro-tournaments with leaderboard',
      'Zero screen time, 100% real-world tactile joy'
    ],
    color: '#FF7417',
    accentBg: '#FFF8EF',
  },
  {
    id: 'half-day-retreat',
    name: 'Half-Day Wellness Retreat',
    badge: 'Deep Team Harmony',
    duration: '3 – 4 Hours',
    idealFor: 'Departmental retreats, quarterly reviews & leadership workshops',
    groupSize: '15 – 150 Participants',
    description: 'A deeper team experience blending logic, creativity, collaboration, and connection.',
    highlights: [
      'Multi-station collaborative puzzle trails',
      'Mindful craftsmanship & tactile problem solving',
      'Cross-functional communication exercises',
      'Reflective debrief on team problem-solving dynamics',
      'Custom wooden team trophy & souvenir tokens'
    ],
    color: '#38251C',
    accentBg: '#FFE8DC',
    featured: true,
  },
  {
    id: 'full-day-corporate',
    name: 'Full-Day Corporate Experience',
    badge: 'Flagship Immersion',
    duration: '6 – 8 Hours (Full Day)',
    idealFor: 'Annual company summits, executive offsites & culture transformations',
    groupSize: '25 – 300+ Participants',
    description: 'A curated multi-game experience designed to encourage strategic thinking, empathy, teamwork, and innovation.',
    highlights: [
      'Full suite of 20+ original Rasphera wooden games',
      'Custom-tailored game narratives aligned to corporate goals',
      'Structured strategy, memory, and creative stages',
      'Dedicated master play facilitators & coaches',
      'Comprehensive Engagement & Cognitive Impact Summary report'
    ],
    color: '#FF7417',
    accentBg: '#FFF8EF',
  }
];

export const experienceInclusions = [
  {
    id: 'facilitators',
    title: 'Professional Play Facilitators',
    subtitle: 'Experienced Game Masters',
    description: 'Energetic, empathetic hosts who explain rules, guide gameplay, foster psychological safety, and ensure every participant feels welcomed and energized.',
    icon: 'Sparkles',
    number: '01'
  },
  {
    id: 'original-games',
    title: '20+ Original Rasphera Games',
    subtitle: 'Proprietary Game Library',
    description: 'Artfully handcrafted wooden games spanning strategy, balance, memory, wordplay, and dexterity that you will not find in any toy store.',
    icon: 'Dices',
    number: '02'
  },
  {
    id: 'customizable',
    title: 'Customizable Activities for Every Group',
    subtitle: 'Tailored to Your Team Goals',
    description: 'Whether your objective is stress relief, breaking department silos, or testing strategic grit, we curate the specific game flow to match your goals.',
    icon: 'SlidersHorizontal',
    number: '03'
  },
  {
    id: 'eco-friendly',
    title: 'Eco-Friendly & Reusable Wooden Kits',
    subtitle: 'Sustainable Craftsmanship',
    description: 'Crafted from ethically sourced, durable hardwoods with smooth non-toxic natural finishes. Zero single-use plastic, built to last for generations.',
    icon: 'TreePine',
    number: '04'
  },
  {
    id: 'impact-summary',
    title: 'Engagement and Impact Summary',
    subtitle: 'Tangible Cultural Metrics',
    description: 'A post-event visual report capturing group dynamics, collaboration breakthroughs, participant feedback, and memorable photo highlights.',
    icon: 'FileBarChart',
    number: '05'
  }
];
