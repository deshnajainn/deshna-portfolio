"use client";

import { motion } from "framer-motion";
import { about, personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b-4 border-[#1A1A2E] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="font-mono text-xs tracking-widest uppercase text-[#E84393] mb-12"
        >
          02 / About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left — initials block + meta */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4"
          >
            {/* Brutalist initials avatar */}
            <div
              className="w-28 h-28 border-4 border-[#1A1A2E] bg-[#1A1A2E] flex items-center justify-center mb-6 select-none"
            >
              <span
                className="text-[#F5F0E8] font-black text-4xl tracking-tighter"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {personalInfo.initials}
              </span>
            </div>

            <div className="border-l-4 border-[#FF6B35] pl-4 space-y-1.5 mb-8">
              <p className="font-mono text-xs text-[#1A1A2E]/55">{personalInfo.location}</p>
              <p className="font-mono text-xs text-[#1A1A2E]/55 leading-relaxed">
                {personalInfo.education}
              </p>
            </div>

            {/* Current status pill */}
            <div className="inline-flex items-center gap-2 border-2 border-[#1A1A2E] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-[#1A1A2E] uppercase tracking-wider">
                @{personalInfo.company}
              </span>
            </div>
          </motion.div>

          {/* Right — story + stats */}
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-black text-4xl md:text-5xl text-[#1A1A2E] leading-tight tracking-tight mb-8"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Full stack.{" "}
              <span className="text-[#E84393]">Full throttle.</span>
            </motion.h2>

            <div className="space-y-5 mb-12">
              {about.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className={`leading-relaxed ${
                    i === about.paragraphs.length - 1
                      ? "font-semibold text-[#1A1A2E] text-lg italic border-l-4 border-[#E84393] pl-4"
                      : "text-[#1A1A2E]/65 text-base"
                  }`}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 border-2 border-[#1A1A2E]"
            >
              {[
                { num: "4+", label: "months in prod" },
                { num: "3+", label: "systems shipped" },
                { num: "1wk", label: "after final exams" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`p-6 text-center ${i < 2 ? "border-r-2 border-[#1A1A2E]" : ""}`}
                >
                  <p
                    className="font-black text-3xl text-[#E84393]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {stat.num}
                  </p>
                  <p className="font-mono text-[11px] text-[#1A1A2E]/45 uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
