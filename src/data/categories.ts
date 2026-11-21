import type { GameCategory } from '../types';

export const categories: GameCategory[] = [
  {
    id: 'strategy-logic',
    number: '01',
    title: 'Strategy & Logic Games',
    tagline: 'Sharpen Reasoning & Tactical Forethought',
    description: 'Challenge minds through puzzles, strategy, logical reasoning, and problem-solving activities.',
    skills: ['Analytical Deduction', 'Tactical Planning', 'Spatial Optimization', 'Pattern Recognition'],
    sampleGames: [
      {
        title: 'The Labyrinth of Hera',
        type: 'Tactical Maze & Pivot Puzzle',
        description: 'Navigate interlocking hardwood gears to route the sacred marble through shifting geometric chambers.',
        players: '1 - 2 Players'
      },
      {
        title: 'Tetra-Lock Matrix',
        type: '3D Spatial Geometry',
        description: 'Construct a self-supporting pyramid using only six asymmetric notched wooden blocks.',
        players: '1 - 4 Players'
      }
    ],
    color: '#FF7417'
  },
  {
    id: 'memory-focus',
    number: '02',
    title: 'Memory & Focus Games',
    tagline: 'Quiet the Noise, Elevate Attention',
    description: 'Strengthen concentration, observation, memory, and quick-thinking abilities.',
    skills: ['Working Memory', 'Visual Observation', 'Sustained Focus', 'Rapid Processing'],
    sampleGames: [
      {
        title: 'Echo Grid Blocks',
        type: 'Sensory Pattern Recall',
        description: 'Replicate hidden geometric arrangements using tactile touch and rapid visual memory sequences.',
        players: '2 - 6 Players'
      },
      {
        title: 'Chronos Dominoes',
        type: 'Speed & Sequential Matching',
        description: 'Race against time and opponents to align symbol trails before the pendulum completes its arc.',
        players: '2 - 4 Players'
      }
    ],
    color: '#38251C'
  },
  {
    id: 'creative-storytelling',
    number: '03',
    title: 'Creative & Storytelling Games',
    tagline: 'Ignite Imagination & Shared Expression',
    description: 'Encourage imagination, communication, and creative expression through interactive play.',
    skills: ['Improvised Narrative', 'Creative Synthesis', 'Empathetic Listening', 'Lateral Thinking'],
    sampleGames: [
      {
        title: 'Fable Totems',
        type: 'Narrative Tile Stacking',
        description: 'Stack carved wooden pictogram blocks, improvising chapters of an epic tale with each piece placed.',
        players: '3 - 8 Players'
      },
      {
        title: 'Metaphor Blocks',
        type: 'Abstract Expression Challenge',
        description: 'Convey complex team emotions or business concepts using minimal geometric wooden shapes.',
        players: '4 - 10 Players'
      }
    ],
    color: '#FF7417'
  },
  {
    id: 'teamwork-collaboration',
    number: '04',
    title: 'Teamwork & Collaboration',
    tagline: 'Build Unshakable Trust & Synchrony',
    description: 'Build trust, patience, coordination, and stronger connections through group challenges.',
    skills: ['Collective Coordination', 'Active Listening', 'Patience & Support', 'Shared Accountability'],
    sampleGames: [
      {
        title: 'The Great Canopy Tower',
        type: 'Multi-Rope Suspension Balance',
        description: 'Six teammates hold tension strings to maneuver a crane hook and assemble a swaying hardwood tower.',
        players: '4 - 12 Players'
      },
      {
        title: 'Synapse Bridge',
        type: 'Blind Cooperative Assembly',
        description: 'Half the team directs verbally while the other half builds an arch bridge without visual confirmation.',
        players: '6 - 16 Players'
      }
    ],
    color: '#38251C'
  }
];
