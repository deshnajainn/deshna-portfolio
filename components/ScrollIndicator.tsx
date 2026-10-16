"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("01 // HERO");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalScroll) * 100)));
        setScrollProgress(progress);
        setShowScrollTop(window.scrollY > 300);
      }

      // Detect active section
      const sections = [
        { id: "home", label: "01 // HERO" },
        { id: "about", label: "02 // ABOUT" },
        { id: "stack", label: "03 // STACK" },
        { id: "experience", label: "04 // WORK" },
        { id: "projects", label: "05 // PROJ" },
        { id: "contact", label: "06 // REACH" },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setCurrentSection(sections[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setIsLaunching(false);
    }, 900);
  };

  // Circular gauge math (radius = 18, circumference = 2 * PI * 18 ~ 113.1)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top minimal progress bar with pink fill */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#1A1A2E]/10 z-[60] pointer-events-none">
        <div
          className="h-full bg-[#E84393] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Retro floating brutalist HUD ticker (bottom-left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 border-2 border-[#1A1A2E] bg-[#F5F0E8] px-3.5 py-1.5 shadow-[3px_3px_0px_#1A1A2E] select-none">
        <span className="w-2 h-2 rounded-full bg-[#E84393] animate-pulse" />
        <span className="font-mono text-[11px] font-bold text-[#1A1A2E] tracking-wider uppercase">
          {currentSection}
        </span>
        <span className="font-mono text-[11px] text-[#1A1A2E]/35">|</span>
        <span className="font-mono text-[11px] text-[#FF6B35] font-black">
          {scrollProgress}%
        </span>
      </div>

      {/* Creative Rocket / Dial Scroll-to-Top Button (bottom-right) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 group select-none"
          >
            {/* Tooltip on hover */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest bg-[#1A1A2E] text-[#F5F0E8] px-2 py-0.5 border border-[#1A1A2E] shadow-[2px_2px_0px_#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Back to top
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="relative w-14 h-14 rounded-full border-2 border-[#1A1A2E] bg-[#F5F0E8] flex items-center justify-center shadow-[4px_4px_0px_#1A1A2E] group-hover:shadow-[2px_2px_0px_#1A1A2E] group-hover:translate-x-[2px] group-hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 cursor-pointer overflow-visible"
            >
              {/* Circular SVG Progress Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                <circle
                  cx="28"
                  cy="28"
                  r={radius}
                  className="stroke-[#1A1A2E]/10"
                  strokeWidth="2.5"
                  fill="transparent"
                />
                <circle
                  cx="28"
                  cy="28"
                  r={radius}
                  className="stroke-[#E84393] transition-all duration-150"
                  strokeWidth="2.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              {/* Animated Icon Core */}
              <div className="relative flex flex-col items-center justify-center">
                <motion.span
                  animate={
                    isLaunching
                      ? {
                          y: [-2, -26, 20, 0],
                          scale: [1, 1.3, 0.7, 1],
                          transition: { duration: 0.75, ease: "easeInOut" },
                        }
                      : {}
                  }
                  className="font-bold text-[#1A1A2E] group-hover:text-[#E84393] transition-colors flex items-center justify-center text-lg"
                >
                  ↑
                </motion.span>
                <span className="font-mono text-[9px] font-black text-[#1A1A2E]/60 group-hover:text-[#FF6B35] -mt-1 tracking-tighter">
                  {scrollProgress}%
                </span>
              </div>

              {/* Flame exhaust blast particles on click */}
              {isLaunching && (
                <motion.div
                  initial={{ opacity: 1, scale: 0.5, y: 0 }}
                  animate={{ opacity: 0, scale: 2, y: 16 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-1 w-2.5 h-2.5 rounded-full bg-[#FF6B35] pointer-events-none blur-[1px]"
                />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
