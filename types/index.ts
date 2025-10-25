import { IconType } from 'react-icons';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'methodologies';
  icon?: IconType;
  color?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
}
