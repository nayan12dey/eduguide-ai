"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Database, Brain, Globe, Shield } from "lucide-react";
import { Button } from "@heroui/react";

const skills = [
  { name: "React", icon: Code2, color: "text-blue-400", bg: "bg-blue-400/10", delay: 0 },
  { name: "AI", icon: Brain, color: "text-purple-400", bg: "bg-purple-400/10", delay: 0.2 },
  { name: "Solidity", icon: Database, color: "text-indigo-400", bg: "bg-indigo-400/10", delay: 0.4 },
  { name: "Next.js", icon: Globe, color: "text-slate-200", bg: "bg-slate-200/10", delay: 0.1 },
  { name: "Machine Learning", icon: Cpu, color: "text-teal-400", bg: "bg-teal-400/10", delay: 0.5 },
  { name: "Cybersecurity", icon: Shield, color: "text-red-400", bg: "bg-red-400/10", delay: 0.3 },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-[70vh] w-full bg-slate-900 overflow-hidden flex items-center py-20">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content Area */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
              Master the Future with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">
                EduGuide AI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Your personalized AI-driven roadmap to mastering cutting-edge technologies. 
              Learn smarter, build faster, and achieve your goals with guided paths.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                color="primary"
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-500/30 px-8 py-6 text-lg border-0"
                endContent={
                  <Sparkles className="w-6 h-6 text-teal-300 animate-pulse ml-2" />
                }
              >
                Get AI Roadmap
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Anti-Gravity Canvas Area */}
        <div 
          ref={containerRef}
          className="flex-1 w-full h-[450px] md:h-[550px] relative rounded-3xl border border-slate-800/60 bg-slate-800/10 backdrop-blur-sm overflow-hidden shadow-2xl shadow-indigo-900/10"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            // Distribute badges across the canvas pseudo-randomly
            const top = `${15 + (index * 25) % 60}%`;
            const left = `${10 + (index * 30) % 70}%`;
            
            return (
              <motion.div
                key={skill.name}
                drag
                dragConstraints={containerRef}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -15, 0] 
                }}
                transition={{
                  opacity: { duration: 0.5, delay: skill.delay },
                  scale: { duration: 0.5, delay: skill.delay },
                  y: {
                    duration: 3 + index * 0.5, // slightly different speeds for organic feel
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: skill.delay
                  }
                }}
                className={`absolute cursor-grab active:cursor-grabbing p-4 rounded-2xl border border-slate-700/50 ${skill.bg} backdrop-blur-md shadow-xl flex flex-col items-center gap-3 select-none hover:border-slate-600/80 transition-colors duration-300 z-20 hover:z-30`}
                style={{ top, left }}
              >
                <div className={`p-3 rounded-xl bg-slate-900/60 ${skill.color} shadow-inner shadow-black/50`}>
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-semibold text-slate-200 tracking-wide">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
