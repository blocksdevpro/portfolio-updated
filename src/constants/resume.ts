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
    twitter: "https://x.com/blocksdev_pro",
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
      date: "Feb 2026 - Present",
      icon: "⚡",
      description:
        "Production-ready background task library for FastAPI with Redis/Memory backends, smart retry logic, and distributed worker support. Built following SOLID principles with ~500 LOC.",
      metrics: [
        { label: "LOC", value: "~500" },
        { label: "Coverage", value: "100%" },
        { label: "Tasks/sec", value: "1K+" },
      ],
      highlights: [
        "⚡ 10x faster than Celery for simple tasks",
        "📦 Zero dependencies in memory mode",
        "🔄 Exponential backoff retry mechanism",
        "📊 Real-time task monitoring & history",
        "🐳 Docker-ready with compose setup",
        "🎯 100% test coverage with pytest",
      ],
      architecture:
        "Abstract Broker Pattern → Memory/Redis → Worker Pool (asyncio)",
      features: [
        "Smart retry with exponential backoff",
        "Complete task history tracking",
        "Distributed worker support",
        "Memory & Redis backends",
      ],
      challenges:
        "Built following SOLID principles while keeping the codebase minimal and production-ready.",
      tech: ["Python", "Redis", "Async/Await", "Task Queue", "Docker"],
      links: {
        github: "https://github.com/blocksdevpro/fastq",
      },
    },
    {
      title: "Calorine | AI Nutrition Tracker",
      date: "Feb 2026 - Present",
      icon: "🥗",
      description:
        "Snap photos of meals and get instant nutritional breakdowns. AI-powered platform converting visual data into macro feedback with smart journaling and analytics.",
      metrics: [
        { label: "Users", value: "1.2K+" },
        { label: "Accuracy", value: "95%" },
        { label: "Response", value: "<2s" },
      ],
      highlights: [
        "📸 Instant food recognition from photos",
        "🤖 AI-powered macro calculation",
        "📊 Smart journaling with progress tracking",
        "⚡ Sub-2 second image analysis",
        "🔐 Privacy-first with local storage option",
      ],
      architecture: "Next.js → FastAPI → TensorFlow/OpenAI Vision → PostgreSQL",
      features: [
        "Computer Vision: YOLOv8 + Custom food dataset",
        "Nutrition DB: 500k+ food items",
        "Smart suggestions based on dietary goals",
        "Meal pattern analysis & insights",
      ],
      tech: ["Next.js", "FastAPI", "Computer Vision", "PostgreSQL", "OpenAI"],
      links: {
        production: "https://calorine.in",
      },
    },
    {
      title: "Tron Payments API",
      date: "Feb 2022 - Nov 2023",
      icon: "💎",
      description:
        "Fully automated Crypto Deposit & Webhook System built to solve limitations of existing gateways. Supports TRX and TRC-20 tokens with complete flexibility.",
      metrics: [
        { label: "Transactions", value: "50K+" },
        { label: "Uptime", value: "99.9%" },
        { label: "Confirm", value: "<1s" },
      ],
      highlights: [
        "💸 Real-time blockchain monitoring",
        "🔔 Instant webhook notifications",
        "🔐 HD wallet generation (BIP39/BIP44)",
        "⚡ Sub-second confirmation detection",
        "📈 99.9% uptime SLA",
      ],
      features: [
        "TRX & TRC-20 token support",
        "Automatic address generation per user",
        "Transaction history & reconciliation",
        "Gas fee optimization",
      ],
      tech: ["FastAPI", "Blockchain", "Tron/TRC-20", "Webhooks", "Redis"],
    },
    ],
  education: [
    {
      school: "Binod Bihari Mahto Koyalanchal University",
      degree: "B.Com",
      year: "Feb 2028 (Expected)",
    },
  ],
  languages: [
    { language: "English", level: "Basic" },
    { language: "Hindi", level: "Native" },
  ],
};
