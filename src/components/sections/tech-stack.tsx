import React from "react";
import {
  Code2,
  Database,
  Server,
  Lock,
  Globe,
  Container,
  GitBranch,
  Terminal,
  Cpu,
  Cloud,
  Zap,
} from "lucide-react";

interface TechStackProps {
  skills: string[];
}

export const TechStack: React.FC<TechStackProps> = ({ skills }) => {
  const getIcon = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("fastapi") || s.includes("python"))
      return <Zap className="w-3 h-3" />;
    if (s.includes("nest") || s.includes("node"))
      return <Server className="w-3 h-3" />;
    if (s.includes("sql") || s.includes("data"))
      return <Database className="w-3 h-3" />;
    if (s.includes("docker") || s.includes("ocean"))
      return <Container className="w-3 h-3" />;
    if (s.includes("auth") || s.includes("jwt"))
      return <Lock className="w-3 h-3" />;
    if (s.includes("web3") || s.includes("chain"))
      return <Globe className="w-3 h-3" />;
    if (s.includes("git")) return <GitBranch className="w-3 h-3" />;
    if (s.includes("api")) return <Cloud className="w-3 h-3" />;
    if (s.includes("backend")) return <Cpu className="w-3 h-3" />;
    return <Terminal className="w-3 h-3" />;
  };

  const getColorClass = (skill: string) => {
    const s = skill.toLowerCase();

    // FastAPI: Teal/Green - Increased intensity
    if (s.includes("fastapi"))
      return "bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800";

    // NestJS: Red/Rose - Increased intensity
    if (s.includes("nest"))
      return "bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800";

    // PostgreSQL: Blue
    if (s.includes("postgre") || s.includes("sql"))
      return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800";

    // Auth/Security: Purple/Violet
    if (s.includes("jwt") || s.includes("auth"))
      return "bg-violet-100 text-violet-800 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800";

    // Infrastructure: Sky/Cyan
    if (s.includes("docker") || s.includes("ocean"))
      return "bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800";

    // Web3: Indigo
    if (s.includes("web3"))
      return "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800";

    // Git: Orange
    if (s.includes("git"))
      return "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800";

    // API/Development: Amber/Yellow (New)
    if (s.includes("api") || s.includes("development"))
      return "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800";

    // Default: Gray/Zinc
    return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700";
  };

  return (
    <section
      className="space-y-4 animate-fade-in delay-400"
    >
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border text-xs font-medium transition-all duration-300 cursor-default hover:scale-105 ${getColorClass(
              skill
            )}`}
          >
            {getIcon(skill)} {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
