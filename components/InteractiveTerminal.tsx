"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "api.ts", label: "api.ts" },
  { id: "redis.log", label: "redis.log" },
  { id: "developer.json", label: "developer.json" },
];

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState("api.ts");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    let content = "";
    if (activeTab === "api.ts") {
      content = `// Clean REST API endpoint with Redis cache\napp.get('/api/users/:id', async (req, res) => {\n  const cached = await redis.get(\`user:\${req.params.id}\`);\n  if (cached) return res.json(JSON.parse(cached));\n\n  const user = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id]);\n  await redis.setex(\`user:\${req.params.id}\`, 3600, JSON.stringify(user));\n  return res.json(user);\n});`;
    } else if (activeTab === "redis.log") {
      content = `[2026-10-16T11:42:01.214Z] [INFO] Connected to Redis cluster (port: 6379)\n[2026-10-16T11:42:01.320Z] [INFO] Cache ready: Hit ratio 94.2%\n[2026-10-16T11:42:04.891Z] [QUERY] GET /api/users/22 -> 1.8ms (Cache HIT)\n[2026-10-16T11:42:04.895Z] [SUCCESS] 200 OK — 0ms DB overhead`;
    } else {
      content = `{\n  "name": "Deshna Jain",\n  "role": "Software Developer Intern @ Signalz",\n  "languages": ["TypeScript", "JavaScript", "Python", "C++"],\n  "primary_stack": ["Node.js", "Express.js", "Redis", "CockroachDB", "React"],\n  "status": "Writing production backend systems"\n}`;
    }
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-4 border-[#1A1A2E] bg-[#1A1A2E] text-[#F5F0E8] overflow-hidden shadow-[6px_6px_0px_#FF6B35]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121224] border-b-2 border-[#1A1A2E] select-none">
        {/* Retro window buttons */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF6B35] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#E84393] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block" />
          <span className="font-mono text-[11px] text-[#F5F0E8]/40 ml-2 tracking-wider hidden sm:inline">
            deshna@workspace: ~
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 font-mono text-xs transition-colors duration-150 border ${
                activeTab === tab.id
                  ? "bg-[#1A1A2E] text-[#E84393] border-[#E84393]"
                  : "bg-transparent text-[#F5F0E8]/50 border-transparent hover:text-[#F5F0E8]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Copy snippet button */}
        <button
          onClick={handleCopy}
          className="font-mono text-[10px] text-[#F5F0E8]/60 hover:text-[#E84393] uppercase tracking-wider hidden sm:inline"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[190px]">
        <AnimatePresence mode="wait">
          {activeTab === "api.ts" && (
            <motion.div
              key="api"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="space-y-1"
            >
              <p className="text-[#F5F0E8]/40">// Express REST route with Redis caching</p>
              <p>
                app.<span className="text-[#FF6B35]">get</span>(
                <span className="text-[#10b981]">&apos;/api/users/:id&apos;</span>,{" "}
                <span className="text-[#E84393]">async</span> (req, res) =&gt; &#123;
              </p>
              <p className="pl-4">
                <span className="text-[#E84393]">const</span> cached ={" "}
                <span className="text-[#E84393]">await</span> redis.<span className="text-[#FF6B35]">get</span>(
                <span className="text-[#10b981]">`user:$&#123;req.params.id&#125;`</span>);
              </p>
              <p className="pl-4">
                <span className="text-[#E84393]">if</span> (cached){" "}
                <span className="text-[#E84393]">return</span> res.<span className="text-[#FF6B35]">json</span>(JSON.<span className="text-[#FF6B35]">parse</span>(cached));
              </p>
              <p className="pl-4 mt-2">
                <span className="text-[#E84393]">const</span> user ={" "}
                <span className="text-[#E84393]">await</span> db.<span className="text-[#FF6B35]">query</span>(
                <span className="text-[#10b981]">&apos;SELECT * FROM users WHERE id = $1&apos;</span>, [req.params.id]);
              </p>
              <p className="pl-4">
                <span className="text-[#E84393]">await</span> redis.<span className="text-[#FF6B35]">setex</span>(
                <span className="text-[#10b981]">`user:$&#123;req.params.id&#125;`</span>,{" "}
                <span className="text-[#FF6B35]">3600</span>, JSON.<span className="text-[#FF6B35]">stringify</span>(user));
              </p>
              <p className="pl-4">
                <span className="text-[#E84393]">return</span> res.<span className="text-[#FF6B35]">json</span>(user);
              </p>
              <p>&#125;);</p>
            </motion.div>
          )}

          {activeTab === "redis.log" && (
            <motion.div
              key="log"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="space-y-1.5 text-xs"
            >
              <p className="text-[#F5F0E8]/50">
                [11:42:01.214Z] <span className="text-[#10b981] font-bold">[INFO]</span> Connected to Redis cluster (port: 6379)
              </p>
              <p className="text-[#F5F0E8]/50">
                [11:42:01.320Z] <span className="text-[#10b981] font-bold">[INFO]</span> Cache health: 94.2% hit ratio across API routes
              </p>
              <p className="text-[#FF6B35]">
                [11:42:04.891Z] <span className="text-[#E84393] font-bold">[QUERY]</span> GET /api/users/22 → 1.8ms (Cache HIT)
              </p>
              <p className="text-[#10b981]">
                [11:42:04.895Z] <span className="font-bold">[SUCCESS]</span> 200 OK — 0ms database overhead
              </p>
              <p className="text-[#F5F0E8]/40 animate-pulse mt-2">
                &gt; listening for inbound requests..._
              </p>
            </motion.div>
          )}

          {activeTab === "developer.json" && (
            <motion.div
              key="json"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p>&#123;</p>
              <p className="pl-4">
                <span className="text-[#FF6B35]">&quot;name&quot;</span>: <span className="text-[#10b981]">&quot;Deshna Jain&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#FF6B35]">&quot;current_role&quot;</span>: <span className="text-[#10b981]">&quot;Software Developer Intern @ Signalz&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#FF6B35]">&quot;core_stack&quot;</span>: [
                <span className="text-[#10b981]">&quot;Node.js&quot;</span>,{" "}
                <span className="text-[#10b981]">&quot;Express.js&quot;</span>,{" "}
                <span className="text-[#10b981]">&quot;Redis&quot;</span>,{" "}
                <span className="text-[#10b981]">&quot;PostgreSQL&quot;</span>
                ],
              </p>
              <p className="pl-4">
                <span className="text-[#FF6B35]">&quot;focus&quot;</span>: <span className="text-[#10b981]">&quot;High-performance REST APIs, caching layers, and database queries&quot;</span>
              </p>
              <p>&#125;</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#0e0e1a] border-t border-[#1A1A2E]/50 text-[10px] font-mono text-[#F5F0E8]/40">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] inline-block animate-ping" />
          <span>production: active</span>
        </span>
        <span>Node.js · Redis · UTF-8</span>
      </div>
    </div>
  );
}
