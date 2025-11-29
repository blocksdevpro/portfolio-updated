import React from "react";
import { Link, ChevronDown } from "lucide-react";
import { ResumeData } from "@/types/resume";

interface ProjectsProps {
  projects: ResumeData["projects"];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="space-y-6 animate-fade-in"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Projects
        </h2>
        <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">
          {projects.length}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  {project.date}
                </p>
              </div>
              <div className="flex gap-2">
                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Link className="w-4 h-4 text-gray-400 hover:text-black dark:hover:text-white" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="flex items-center text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-300 border border-transparent dark:border-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 
        This button is decorative since we only have one project from the resume, 
        but kept for visual fidelity to the template requested 
      */}
      <button className="w-full py-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white border border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors flex items-center justify-center">
        Show More Projects <ChevronDown className="w-3 h-3 ml-1" />
      </button>
    </section>
  );
};
