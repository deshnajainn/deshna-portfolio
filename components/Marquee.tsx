"use client";

const items = [
  "BACKEND ARCHITECTURE",
  "NODE.JS & EXPRESS",
  "REDIS PUB/SUB",
  "COCKROACHDB & POSTGRESQL",
  "PRODUCTION SYSTEMS",
  "REST APIS & JWT",
  "AGENTIC WORKFLOWS",
  "NEXT.JS & REACT",
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden border-b-4 border-[#1A1A2E] bg-[#FF6B35] py-3.5 select-none flex">
      {/* Track 1 */}
      <div className="flex shrink-0 animate-marquee items-center">
        {items.map((text, idx) => (
          <div key={`track1-${idx}`} className="flex items-center mx-5 font-mono text-xs font-black tracking-widest text-[#1A1A2E] uppercase">
            <span>{text}</span>
            <span className="ml-5 text-[#F5F0E8] text-base">✦</span>
          </div>
        ))}
      </div>

      {/* Track 2 (Identical mirror seamlessly following Track 1) */}
      <div className="flex shrink-0 animate-marquee items-center" aria-hidden="true">
        {items.map((text, idx) => (
          <div key={`track2-${idx}`} className="flex items-center mx-5 font-mono text-xs font-black tracking-widest text-[#1A1A2E] uppercase">
            <span>{text}</span>
            <span className="ml-5 text-[#F5F0E8] text-base">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
