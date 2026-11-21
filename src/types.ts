export interface Experience {
  id: string;
  name: string;
  badge: string;
  duration: string;
  idealFor: string;
  groupSize: string;
  description: string;
  highlights: string[];
  color: string;
  accentBg: string;
  featured?: boolean;
}

export interface GameCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  sampleGames: {
    title: string;
    type: string;
    description: string;
    players: string;
  }[];
  color: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'games' | 'workshops' | 'craft' | 'moments';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  dimensions?: string;
}

export interface BookingFormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  experienceType: string;
  groupSize: string;
  preferredDate: string;
  notes: string;
}
