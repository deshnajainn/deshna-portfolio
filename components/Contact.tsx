"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b-4 border-[#1A1A2E]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs tracking-widest uppercase text-[#E84393] mb-4">
              06 / Contact
            </p>
            <h2
              className="font-black text-5xl md:text-6xl lg:text-7xl text-[#1A1A2E] leading-none tracking-tighter mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Let&apos;s build
              <br />
              <span className="text-[#E84393]">something.</span>
            </h2>
            <p className="text-[#1A1A2E]/60 text-lg max-w-md leading-relaxed">
              Open to backend roles, full-stack opportunities, and interesting problems.
              Don&apos;t overthink the message — just say hi.
            </p>

            {/* Availability indicator */}
            <div className="mt-10 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="font-mono text-sm text-[#1A1A2E]/50">
                Currently available · Indore, India
              </span>
            </div>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 border-2 border-[#1A1A2E]"
          >
            {[
              { label: "Email",    value: personalInfo.email,       href: `mailto:${personalInfo.email}`, copyable: true },
              { label: "GitHub",   value: "deshnajainn",             href: personalInfo.github,            copyable: false },
              { label: "LinkedIn", value: "deshnajain2222",          href: personalInfo.linkedin,          copyable: false },
            ].map((link, i) => (
              <div
                key={i}
                className={`border-b-2 border-[#1A1A2E] last:border-b-0 group`}
              >
                {link.copyable ? (
                  <div className="flex items-center justify-between p-6 hover:bg-[#1A1A2E] transition-all duration-200 cursor-pointer"
                    onClick={handleCopy}
                  >
                    <div>
                      <p className="font-mono text-xs text-[#1A1A2E]/40 group-hover:text-[#F5F0E8]/40 uppercase tracking-widest mb-1">
                        {link.label}
                      </p>
                      <p className="font-bold text-[#1A1A2E] group-hover:text-[#F5F0E8] transition-colors duration-200 text-sm">
                        {link.value}
                      </p>
                    </div>
                    <span className="font-mono text-xs border border-[#1A1A2E] group-hover:border-[#E84393] text-[#1A1A2E] group-hover:text-[#E84393] px-2 py-1 transition-all duration-200">
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 hover:bg-[#1A1A2E] transition-all duration-200"
                  >
                    <div>
                      <p className="font-mono text-xs text-[#1A1A2E]/40 group-hover:text-[#F5F0E8]/40 uppercase tracking-widest mb-1">
                        {link.label}
                      </p>
                      <p className="font-bold text-[#1A1A2E] group-hover:text-[#F5F0E8] transition-colors duration-200">
                        {link.value}
                      </p>
                    </div>
                    <span className="text-[#E84393] text-2xl font-black group-hover:translate-x-1 transition-transform duration-200">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
