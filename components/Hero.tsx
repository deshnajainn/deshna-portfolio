"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useEffect, useState } from "react";
import InteractiveTerminal from "@/components/InteractiveTerminal";

const roles = personalInfo.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden border-b-4 border-[#1A1A2E]"
    >
      {/* Brutalist dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#1A1A2E 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Large decorative ghost initials */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none
                   text-[26vw] font-black leading-none text-[#1A1A2E]/[0.03] tracking-tighter pr-8 hidden xl:block"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        DJ
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-36 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs tracking-widest uppercase border-2 border-[#E84393] text-[#E84393] px-3 py-1">
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-black text-6xl md:text-8xl lg:text-[6.5rem] leading-[0.95] tracking-tighter text-[#1A1A2E] mb-3"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Deshna
              <br />
              <span className="text-[#E84393]">Jain.</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-mono text-lg md:text-xl text-[#1A1A2E]/60 mb-6 h-7 flex items-center gap-1"
            >
              <span>{displayed}</span>
              <span className="inline-block w-[3px] h-5 bg-[#E84393] animate-pulse" />
            </motion.div>

            {/* Tagline with orange left-border */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-base md:text-lg text-[#1A1A2E]/70 max-w-xl mb-8 leading-relaxed font-light border-l-4 border-[#FF6B35] pl-4"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center mb-8"
            >
              <a
                href="#experience"
                className="bg-[#1A1A2E] text-[#F5F0E8] font-bold px-8 py-3.5 border-4 border-[#1A1A2E]
                           hover:bg-[#E84393] hover:border-[#E84393] transition-all duration-200 uppercase tracking-widest text-xs"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-transparent text-[#1A1A2E] font-bold px-8 py-3.5 border-4 border-[#1A1A2E]
                           hover:bg-[#1A1A2E] hover:text-[#F5F0E8] transition-all duration-200 uppercase tracking-widest text-xs"
              >
                Let&apos;s Talk
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex gap-6"
            >
              {[
                { label: "GitHub ↗", href: personalInfo.github },
                { label: "LinkedIn ↗", href: personalInfo.linkedin },
                { label: "Email ↗", href: `mailto:${personalInfo.email}` },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#1A1A2E]/50 hover:text-[#E84393] transition-colors underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Terminal Box (Option 3) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 w-full"
          >
            <InteractiveTerminal />
          </motion.div>

        </div>
      </div>

      {/* Bottom-right tech label */}
      <div className="absolute bottom-6 right-8 font-mono text-[11px] text-[#1A1A2E]/30 tracking-widest uppercase hidden md:block">
        Full-Stack · Node.js · Express · Redis
      </div>
    </section>
  );
}
