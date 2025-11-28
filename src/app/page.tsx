"use client";

import { ModeSwitcher } from "@/components/mode-switcher";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { RESUME_DATA } from "@/constants/resume";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] opacity-[0.6] dark:opacity-[0.4] mask-[linear-gradient(to_bottom,white,transparent)]"></div>
      </div>
      <main className="relative z-10 w-full max-w-[700px] space-y-12">
        <Header />
        <Hero data={RESUME_DATA} />
      </main>
    </>
  );
}
