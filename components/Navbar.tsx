"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F0E8]/95 backdrop-blur-sm border-b-4 border-[#1A1A2E]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="font-black text-xl tracking-tighter text-[#1A1A2E] hover:text-[#E84393] transition-colors duration-200"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          DJ<span className="text-[#E84393]">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-[#1A1A2E]/60 hover:text-[#E84393] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-bold text-sm bg-[#1A1A2E] text-[#F5F0E8] px-5 py-2 border-2 border-[#1A1A2E]
                       hover:bg-[#E84393] hover:border-[#E84393] transition-all duration-200 uppercase tracking-widest"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A2E] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A2E] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A2E] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5F0E8] border-t-4 border-[#1A1A2E] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-[#1A1A2E] hover:text-[#E84393] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-bold text-sm bg-[#1A1A2E] text-[#F5F0E8] px-4 py-3 text-center border-2 border-[#1A1A2E]
                       hover:bg-[#E84393] hover:border-[#E84393] transition-all duration-200 uppercase tracking-widest"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
