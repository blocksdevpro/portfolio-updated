import React from "react";
import { ResumeData } from "@/types/resume";

interface ExperienceProps {
  experience: ResumeData["experience"];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="space-y-6 animate-fade-in delay-500">
      <h2 className="text-xl font-bold text-foreground">Experience</h2>

      <div className="relative border-l ml-3 space-y-10">
        {experience.map((job, index) => (
          <div key={index} className="relative pl-8 group">
            {/* fix the blue group hover effect! */}
            <div className="absolute -left-[6px] top-1 h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-muted ring-3 ring-background group-hover:bg-blue-500 transition-colors"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="font-semibold text-foreground">{job.title}</h3>
              <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                {job.period}
              </span>
            </div>
            <div className="text-sm text-foreground/70 mb-2 font-medium">
              {job.company}{" "}
              <span className="text-muted-foreground/70 font-normal">
                • {job.description}
              </span>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1 marker:text-gray-300">
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
