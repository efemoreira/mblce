// Types for MBL Ceará website

export interface EventScheduleItem {
  time: string;
  activity: string;
  description?: string;
  speaker?: string;
}

export interface EventSpeaker {
  id: string;
  name: string;
  title: string;
  bio?: string;
  image?: string;
}

export interface EventDetails {
  whatToExpect?: string;
  schedule?: EventScheduleItem[];
  speakers?: EventSpeaker[];
  highlights?: string[];
  objectives?: string[];
  multiDay?: {
    [key: string]: {
      date: string;
      title: string;
      schedule: EventScheduleItem[];
    }
  };
}

export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string; // Para eventos de múltiplos dias
  location: string;
  description: string;
  image: string;
  link?: string;
  isHighlight?: boolean;
  tags?: string[];
  details?: EventDetails;
  registrationUrl?: string;
  isActive?: boolean; // Para controlar se o evento deve ser mostrado
}

export interface Person {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  socialMedia?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags?: string[];
}

export interface Denuncia {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  status: 'pendente' | 'em_analise' | 'resolvida' | 'arquivada';
  isPublic: boolean;
  image?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  subject?: string;
  size?: 'P' | 'M' | 'G' | 'GG' | 'XG';
}

export interface MenuItem {
  name: string;
  path: string;
  isExternal?: boolean;
}

export interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
}

export interface WPPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  category: string;
  yoast_head_json?: {
    author?: string;
    og_image?: OG_Image[];
  };
}

interface OG_Image {
  url: string;
  width?: number;
  height?: number;
}

export interface Reel {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  // description?: string;
  // date?: string;
  // tags?: string[];
}
