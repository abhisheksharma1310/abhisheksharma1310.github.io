export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
}

export interface SkillItem {
  name: string;
  icon: string; // Lucide icon string identifier
}

export interface SkillDomain {
  frontend: SkillItem[];
  backend: SkillItem[];
  database: SkillItem[];
  iot: SkillItem[];
  cloud: SkillItem[];
  devops: SkillItem[];
}

export interface Experience {
  id: string;
  date: string;
  company: string;
  role: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Freelance';
  description: string[];
}

export interface ProjectProduct {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  photoUrl: string;
  videoUrl?: string; // Cloudinary MP4 link
  links: { live?: string; github?: string };
  type?: 'fullstack' | 'frontend' | 'backend' | 'iot' | 'cloud' | 'embedded'; // For filtering
  featured?: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  gallery: string[]; // Array of Cloudinary photo URLs
}
