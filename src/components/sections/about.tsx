"use client";
import React, { useState, useEffect } from "react";
import { ResumeData } from "@/types/resume";

interface AboutProps {
  data: ResumeData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  // Generate mock contribution data on client-side to avoid hydration mismatch
  const [contributionBoxes, setContributionBoxes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const levels = [
      "bg-gray-100 dark:bg-zinc-900",
      "bg-green-200 dark:bg-green-900",
      "bg-green-400 dark:bg-green-700",
      "bg-green-500 dark:bg-green-600",
    ];
    
    const boxes = Array.from({ length: 364 }).map((_, i) => {
      const rand = Math.random();
      let colorClass = levels[0];
      if (rand > 0.9) colorClass = levels[3];
      else if (rand > 0.8) colorClass = levels[2];
      else if (rand > 0.6) colorClass = levels[1];
      return (
        <div
          key={i}
          className={`w-full aspect-square rounded-[1px] ${colorClass}`}
        />
      );
    });
    setContributionBoxes(boxes);
  }, []);

  return (
    <section className="space-y-4 animate-fade-in delay-300">
      <h2 className="text-xl font-bold text-foreground">About</h2>
      <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed">
        <p>{data.summary}</p>
      </div>

      {/* Mock Contribution Graph */}
      <div className="mt-6 select-none">
        <div className="flex justify-between items-end mb-2 text-xs text-muted-foreground">
          <span>Backend activity in 2024</span>
          <div className="flex items-center gap-1">
            <span>Less</span>
            <div className="w-2 h-2 bg-gray-200 dark:bg-gray-800 rounded-[1px]"></div>
            <div className="w-2 h-2 bg-green-200 dark:bg-green-900 rounded-[1px]"></div>
            <div className="w-2 h-2 bg-green-400 dark:bg-green-700 rounded-[1px]"></div>
            <div className="w-2 h-2 bg-green-600 dark:bg-green-500 rounded-[1px]"></div>
            <span>More</span>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(52,1fr)] gap-[2px] h-28 overflow-hidden opacity-80">
          {contributionBoxes}
        </div>
      </div>
    </section>
  );
};
