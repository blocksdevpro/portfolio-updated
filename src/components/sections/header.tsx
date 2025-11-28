import React from "react";
import { ModeSwitcher } from "../mode-switcher";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-8 animate-fade-in">
      <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
        <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-md">
          <span className="font-mono">UK</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
        <a href="#projects" className="hover:text-primary transition-colors">
          Projects
        </a>
        <a href="#experience" className="hover:text-primary transition-colors">
          Experience
        </a>
        <ModeSwitcher />
      </div>
    </header>
  );
};
