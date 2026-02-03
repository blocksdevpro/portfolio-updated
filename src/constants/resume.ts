import { ResumeData } from "@/types/resume";

export const RESUME_DATA: ResumeData = {
  name: "Uttam Kumbhakar",
  title: "Junior Backend Developer",
  avatar:
    "https://40ar4rk0hv.ufs.sh/f/9Pu2ZyQIW8BFkxw2CxtHqGNu7tCzy62FwhZjiv9UlmR30p15",

  location: "Dhanbad (JH), India",
  email: "mail@blocksdev.pro",
  website: "https://blocksdev.pro",
  summary:
    "Junior Backend Developer with hands-on experience building and deploying scalable APIs using FastAPI and NestJS. Skilled in authentication systems, PostgreSQL database design, and integrating third-party APIs like Pipedrive. Worked as part of a 4-person engineering team, contributing to a multi-tenant sales portal and deploying services on DigitalOcean. Passionate about backend engineering, automation, and continuously improving technical skills.",
  pronouns: "he/him",
  socials: {
    website: "https://blocksdev.pro",
    github: "https://github.com/blocksdevpro",
    linkedin: "https://www.linkedin.com/in/uttam-kumbhakar/",
    twitter: "https://x.com/blocksdevpro",
  },
  skills: [
    "FastAPI",
    "NestJS",
    "PostgreSQL",
    "JWT & OAuth 2.0",
    "API Development",
    "DigitalOcean",
    "Backend Engineering",
    "Web3",
    "Docker",
    "Git",
  ],
  experience: [
    {
      title: "Junior Backend Developer",
      company: "Async Integrations d.o.o.",
      period: "March 2025 – August 2025",
      description: "Remote (Zagreb, Croatia)",
      details: [
        "Developed and maintained scalable REST APIs using FastAPI and NestJS.",
        "Designed and optimized PostgreSQL schemas, queries, and migrations.",
        "Implemented secure authentication flows including JWT and OAuth 2.0.",
        "Integrated third-party services such as Pipedrive CRM into backend systems.",
        "Deployed and managed backend applications on DigitalOcean infrastructure.",
        "Built core backend modules for a multi-tenant sales portal platform.",
        "Collaborated with a 4-person development team and participated in code reviews.",
      ],
    },
  ],
  projects: [
    {
      title: "FastQ | Lightweight Background Task Library",
      description:
        "Production-ready background task library for FastAPI with Redis/Memory backends, smart retry logic, and distributed worker support. Built following SOLID principles with ~500 LOC.",
      tech: ["Python", "Redis", "Async/Await", "Task Queue"],
      date: "Feb 2026 - Present",
      links: {
        github: "https://github.com/blocksdevpro/fastq",
      },
    },
    {
      title: "Calorine | AI Nutrition Tracker",
      description:
        "Snap photos of meals and get instant nutritional breakdowns. AI-powered platform converting visual data into macro feedback with smart journaling and analytics. Helps users achieve dietary goals without manual entry.",
      tech: ["NextJS", "FastAPI", "Postgres", "OpenAI"],
      date: "Feb 2026 - Present",
      links: {
        production: "https://calorine.in",
      },
    },
    {
      title: "Tron Payments API",
      description:
        "A fully automated Crypto Deposit & Webhook System built to solve limitations of existing gateways. Supports TRX and TRC-20 tokens with complete flexibility.",
      tech: ["FastAPI", "Blockchain", "Tron/TRC-20", "Webhooks", "Redis"],
      date: "Feb 2022 – Nov 2023",
    },
  ],
  education: [
    {
      school: "PK ROY MEMORIAL COLLEGE",
      degree: "B.Com",
      year: "Feb 2028 (Expected)",
    },
  ],
  languages: [
    { language: "English", level: "Basic" },
    { language: "Hindi", level: "Native" },
  ],
};
