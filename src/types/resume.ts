export interface Experience {
  title: string;
  company: string;
  period: string;
  description?: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  date: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface ResumeData {
  name: string;
  title: string;
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
