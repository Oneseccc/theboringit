"use client";

import Particles from "@/components/particles";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load Cal Sans font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={50}
        staticity={50}
        refresh={false}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen items-center justify-center">
        {/* Navigation - positioned just above the heading */}
        <nav className="flex justify-center gap-8 mb-4 text-zinc-400 text-sm">
          <a href="#projects" className="hover:text-zinc-100 transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors duration-300">
            Contact
          </a>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-4">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
            TheBoringIT
          </h1>
          <p className="text-zinc-400 text-lg text-center max-w-2xl">
            I&apos;m automating TheBoringIT to take the boring and expensive manual work out of your business.
          </p>
        </main>
      </div>
    </div>
  );
}
