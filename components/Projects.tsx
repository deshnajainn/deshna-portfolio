"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const statusConfig = {
  live:       { label: "🟢 Live",        classes: "border-emerald-500/50 text-emerald-700" },
  wip:        { label: "⟳ In Progress",  classes: "border-[#FF6B35]/50 text-[#FF6B35]" },
  soon:       { label: "◌ Coming Soon",  classes: "border-[#1A1A2E]/20 text-[#1A1A2E]/40" },
};

export default function Projects() {
  return (
    <section id="projects" className="border-b-4 border-[#1A1A2E] py-24 md:py-32 bg-[#1A1A2E]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-[#E84393] mb-4">
            05 / Works
          </p>
          <h2
            className="font-black text-4xl md:text-5xl text-[#F5F0E8] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Built and shipped.{" "}
            <span className="text-[#FF6B35]">More loading.</span>
          </h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#F5F0E8]/10">
          {projects.map((project, i) => {
            const status = statusConfig[project.status as keyof typeof statusConfig];
            const isSoon = project.status === "soon";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-8 border-b-2 border-[#F5F0E8]/10 relative group flex flex-col
                  ${i % 2 === 0 ? "md:border-r-2 md:border-[#F5F0E8]/10" : ""}
                  ${isSoon ? "opacity-50" : ""}
                `}
              >
                {/* Status + subtitle */}
                <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                  <span className={`font-mono text-xs border px-2 py-0.5 uppercase tracking-widest ${status.classes}`}>
                    {status.label}
                  </span>
                  <span className="font-mono text-xs text-[#F5F0E8]/30 uppercase tracking-widest">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className={`font-black text-xl text-[#F5F0E8] mb-3 transition-colors duration-200
                  ${!isSoon ? "group-hover:text-[#E84393]" : ""}`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {project.title}
                </h3>

                <p className="text-[#F5F0E8]/50 leading-relaxed text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-[#F5F0E8]/40 border border-[#F5F0E8]/10 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                {!isSoon && (
                  <div className="flex gap-4 mt-auto pt-4 border-t border-[#F5F0E8]/10">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-xs text-[#E84393] hover:underline underline-offset-4 uppercase tracking-widest">
                        Live ↗
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-xs text-[#F5F0E8]/40 hover:text-[#F5F0E8] hover:underline underline-offset-4 uppercase tracking-widest transition-colors">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}

                {/* Decorative corner */}
                {!isSoon && (
                  <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#E84393]/25 group-hover:border-[#E84393] transition-colors duration-200" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
