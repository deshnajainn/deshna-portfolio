"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1A2E] py-8 border-t-4 border-[#E84393]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#F5F0E8]/30 tracking-widest">
          © 2026 {personalInfo.name} · Built with Next.js & TypeScript ☕
        </p>
        <div className="flex items-center gap-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-[#F5F0E8]/30 hover:text-[#E84393] transition-colors uppercase tracking-widest">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-[#F5F0E8]/30 hover:text-[#E84393] transition-colors uppercase tracking-widest">
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="font-mono text-xs text-[#F5F0E8]/30 hover:text-[#E84393] transition-colors uppercase tracking-widest cursor-pointer"
            aria-label="Back to top"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
