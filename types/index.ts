export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  companiesWorked: number;
  technologiesMastered: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'methodologies';
  icon?: string;
  color?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'fullstack' | 'other';
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
  location?: string;
}

export interface NavigationItem {
  href: string;
  labelKey: string;
}

export interface CVFiles {
  en: string;
  fr: string;
}
