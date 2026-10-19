"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiRedis,
  SiPostgresql, SiMysql, SiCockroachlabs,
  SiGit, SiGithub, SiPostman, SiVercel, SiDbeaver,
  SiNestjs, SiDocker, SiGooglegemini, SiFlask, SiClaude, SiClaudecode,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

interface ToolItem {
  name: string;
  icon?: IconType;
  color: string;
}

interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  accentColor: string;
  tools: ToolItem[];
  learning?: boolean;
}

const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Core syntax & logic",
    accentColor: "#E84393",
    tools: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python",     icon: SiPython,     color: "#3776AB" },
      { name: "C++",        icon: SiCplusplus,  color: "#00599C" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Modern client-side UI",
    accentColor: "#FF6B35",
    tools: [
      { name: "React.js",    icon: SiReact,       color: "#61DAFB" },
      { name: "Next.js",     icon: SiNextdotjs,   color: "#1A1A2E" },
      { name: "Tailwind CSS",icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5",       icon: SiHtml5,       color: "#E34F26" },
      { name: "CSS3",        icon: SiCss,         color: "#1572B6" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    subtitle: "High-throughput server systems",
    accentColor: "#E84393",
    tools: [
      { name: "Node.js",    icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress,   color: "#1A1A2E" },
      { name: "NestJS",     icon: SiNestjs,    color: "#E0234E" },
      { name: "Redis",      icon: SiRedis,     color: "#FF4438" },
      { name: "REST APIs",                     color: "#E84393" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    subtitle: "Relational, distributed & cache",
    accentColor: "#FF6B35",
    tools: [
      { name: "PostgreSQL",  icon: SiPostgresql,    color: "#4169E1" },
      { name: "CockroachDB", icon: SiCockroachlabs, color: "#6933FF" },
      { name: "MySQL",       icon: SiMysql,         color: "#4479A1" },
      { name: "DBeaver",     icon: SiDbeaver,       color: "#3A7BD5" },
    ],
  },
  {
    id: "ai",
    title: "AI & Integrations",
    subtitle: "Generative AI & 3rd party APIs",
    accentColor: "#E84393",
    tools: [
      { name: "Gemini API",            icon: SiGooglegemini, color: "#8E75B2" },
      { name: "Claude",                icon: SiClaude,       color: "#D97757" },
      { name: "Claude Code",           icon: SiClaudecode,   color: "#D97757" },
      { name: "Prompt Engineering",                          color: "#E84393" },
      { name: "Agentic AI",                                  color: "#E84393" },
      { name: "Workflow Automation",                         color: "#FF6B35" },
      { name: "3rd Party APIs",                              color: "#FF6B35" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    subtitle: "Dev velocity & collaboration",
    accentColor: "#FF6B35",
    tools: [
      { name: "Git",     icon: SiGit,     color: "#F05032" },
      { name: "GitHub",  icon: SiGithub,  color: "#1A1A2E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Vercel",  icon: SiVercel,  color: "#1A1A2E" },
    ],
  },
  {
    id: "learning",
    title: "Currently Learning",
    subtitle: "Active exploration",
    accentColor: "#FF6B35",
    learning: true,
    tools: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS",    icon: FaAws,    color: "#FF9900" },
      { name: "Flask",  icon: SiFlask,  color: "#000000" },
    ],
  },
];

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border-2 border-[#1A1A2E] bg-[#F5F0E8] overflow-hidden flex flex-col
                 hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Cursor spotlight glow — pink/orange per group */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, ${group.accentColor}12, transparent 70%)`,
        }}
      />

      {/* Top accent stripe */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: group.accentColor }}
      />

      <div className="p-6 flex flex-col flex-1 relative z-10">
        {/* Card header */}
        <div className="mb-5">
          <div className="flex items-start justify-between mb-1">
            <h3
              className="font-black text-lg text-[#1A1A2E] leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {group.title}
            </h3>
            {group.learning && (
              <span className="font-mono text-[10px] border border-[#FF6B35] text-[#FF6B35] px-2 py-0.5 uppercase tracking-widest ml-2 flex-shrink-0">
                Learning
              </span>
            )}
          </div>
          <p className="font-mono text-xs text-[#1A1A2E]/40 uppercase tracking-wide">
            {group.subtitle}
          </p>
        </div>

        {/* Tool chips with icons */}
        <div className="flex flex-wrap gap-2 flex-1">
          {group.tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-[#1A1A2E]/15
                           bg-[#1A1A2E]/[0.03] hover:bg-[#1A1A2E]/[0.08] hover:border-[#1A1A2E]/30
                           transition-all duration-150 cursor-default select-none group/chip"
              >
                {Icon ? (
                  <Icon
                    size={13}
                    style={{ color: tool.color }}
                    className="flex-shrink-0 group-hover/chip:scale-110 transition-transform duration-150"
                  />
                ) : (
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: tool.color }}
                  />
                )}
                <span className="font-mono text-xs text-[#1A1A2E]/70 group-hover/chip:text-[#1A1A2E]">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom count */}
        <div className="mt-5 pt-4 border-t border-[#1A1A2E]/10 flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#1A1A2E]/35">
            {group.tools.length} {group.tools.length === 1 ? "tool" : "tools"}
          </span>
          {/* Animated accent bar on hover */}
          <div
            className="h-0.5 w-0 group-hover:w-8 transition-all duration-400 rounded-full"
            style={{ backgroundColor: group.accentColor }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="border-b-4 border-[#1A1A2E] py-24 md:py-32 bg-[#1A1A2E]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-[#E84393] mb-4">
            03 / Tech Stack
          </p>
          <h2
            className="font-black text-4xl md:text-5xl text-[#F5F0E8] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            My <span className="text-[#FF6B35]">Toolkit</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
