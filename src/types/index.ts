// Types for MBL Ceará website

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  link?: string;
  isHighlight?: boolean;
  tags?: string[];
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
