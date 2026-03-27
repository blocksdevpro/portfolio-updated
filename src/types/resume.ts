export interface Experience {
  title: string;
  company: string;
  period: string;
  description?: string;
  details: string[];
}

export interface Project {
  title: string;
  date: string;
  description: string;
  tech: string[];
  icon?: string; // NEW: emoji or text icon
  links?: {
    production?: string;
    github?: string;
  };
  metrics?: Array<{ label: string; value: string }>;
  highlights?: string[];
  architecture?: string;
  features?: string[];
  challenges?: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface ResumeData {
  name: string;
  title: string;
  description: string;
  avatar: string;
  location: string;
  email: string;
  website: string;
  summary: string;
  pronouns?: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  skills: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  languages: { language: string; level: string }[];
}
