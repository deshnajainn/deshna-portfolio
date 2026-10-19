"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

// Helper function to subtly bold specific technical keywords without altering wording
function highlightTechKeywords(text: string) {
  // Ordered by length descending so multi-word terms match before sub-terms
  const keywords = [
    "Firebase Cloud Messaging (FCM)",
    "Firebase Cloud Messaging",
    "WhatsApp messaging APIs",
    "WhatsApp API",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "REST API",
    "Node.js",
    "Postman",
    "DBeaver",
    "GitHub",
    "Axios",
    "Redis",
    "Git",
    "SQL",
    "FCM",
  ];

  // Build regex matching any of the keywords
  const escaped = keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");

  const parts = text.split(regex);
  return parts.map((part, index) => {
    if (keywords.includes(part)) {
      return (
        <strong key={index} className="font-bold text-[#1A1A2E]">
          {part}
        </strong>
      );
    }
    return part;
  });
}

export default function Experience() {
  return (
    <section id="experience" className="border-b-4 border-[#1A1A2E] py-24 md:py-32">
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
            04 / Experience
          </p>
          <h2
            className="font-black text-4xl md:text-5xl text-[#1A1A2E] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Experience —{" "}
            <span className="text-[#E84393]">out in the field</span>
          </h2>
        </motion.div>

        {/* Experience card */}
        <div className="space-y-0">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-2 border-[#1A1A2E] grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left sidebar */}
              <div className="lg:col-span-4 p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#1A1A2E] bg-[#1A1A2E]/[0.03]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#E84393] mt-1.5 flex-shrink-0" />
                  <div>
                    <p
                      className="font-black text-lg text-[#1A1A2E] leading-tight"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {job.company}
                    </p>
                    <span className="font-mono text-xs bg-[#E84393] text-[#F5F0E8] px-2 py-0.5 uppercase tracking-widest mt-1 inline-block">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="space-y-1 mt-5 border-l-4 border-[#FF6B35] pl-3">
                  <p className="font-mono text-sm text-[#1A1A2E]/60">{job.period}</p>
                  <p className="font-mono text-sm text-[#1A1A2E]/60">{job.location}</p>
                </div>
              </div>

              {/* Right — highlights */}
              <div className="lg:col-span-8 p-8">
                <h3
                  className="font-black text-2xl text-[#1A1A2E] mb-6"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {job.role}
                </h3>
                <ul className="space-y-3">
                  {job.highlights.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.25 + j * 0.06 }}
                      className="flex items-start gap-3 text-[#1A1A2E]/75"
                    >
                      <span className="text-[#FF6B35] font-bold mt-0.5 flex-shrink-0">→</span>
                      <span className="leading-relaxed text-sm">
                        {highlightTechKeywords(point)}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stack tags */}
                <div className="mt-6 pt-5 border-t border-[#1A1A2E]/10 flex flex-wrap gap-2">
                  {["TypeScript","Node.js","Express.js","Redis","CockroachDB","PostgreSQL","Postman","Git"].map((t) => (
                    <span key={t} className="font-mono text-xs border border-[#1A1A2E]/20 text-[#1A1A2E]/55 px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
