"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Database, Brain, Globe, Shield, ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";

const skills = [
  { name: "React", icon: Code2, color: "text-blue-400", bg: "bg-blue-400/5", border: "hover:border-blue-500/50", glow: "shadow-blue-500/10", top: "12%", left: "10%", delay: 0 },
  { name: "Next.js", icon: Globe, color: "text-slate-100", bg: "bg-slate-100/5", border: "hover:border-slate-400/50", glow: "shadow-slate-400/10", top: "18%", left: "55%", delay: 0.15 },
  { name: "AI Systems", icon: Brain, color: "text-purple-400", bg: "bg-purple-400/5", border: "hover:border-purple-500/50", glow: "shadow-purple-500/10", top: "42%", left: "32%", delay: 0.3 },
  { name: "Solidity", icon: Database, color: "text-indigo-400", bg: "bg-indigo-400/5", border: "hover:border-indigo-500/50", glow: "shadow-indigo-500/10", top: "72%", left: "8%", delay: 0.45 },
  { name: "Machine Learning", icon: Cpu, color: "text-teal-400", bg: "bg-teal-400/5", border: "hover:border-teal-500/50", glow: "shadow-teal-500/10", top: "68%", left: "62%", delay: 0.6 },
  { name: "Cybersecurity", icon: Shield, color: "text-red-400", bg: "bg-red-400/5", border: "hover:border-red-500/50", glow: "shadow-red-500/10", top: "40%", left: "74%", delay: 0.75 },
];

export function HeroSection() {
  const containerRef = useRef(null);

  return (
    <section className="relative min-h-screen w-full bg-slate-950 overflow-hidden flex items-center justify-center pt-28 pb-20">

      {/* Premium Background Architecture: Grid Patterns & Radial Glow Emissives */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full">

        {/* Left Typography & Content Engine */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Visual Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-xs font-medium tracking-wide text-indigo-300 uppercase">Next-Generation AI Learning</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Master the Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-teal-400">
                With Precision AI
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Your personalized, dynamic AI engine producing customized engineering roadmaps.
              Bypass generalized curricula—analyze your gaps, architect custom tracks, and execute code projects seamlessly.
            </p>

            {/* ইম্প্রুভড বোতাম ক্লাস্টার */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

              {/* Primary Action: Custom Path */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 text-white font-bold shadow-[0_4px_25px_rgba(99,102,241,0.35)] px-8 py-8 h-12 rounded-xl hover:opacity-95 transition-all text-xs tracking-wide group border-0"
                >
                  <span className="flex items-center justify-center gap-2 h-full w-full">
                    Generate Custom Path
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>

              {/* Secondary Action: Explore Frameworks */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="bordered"
                  className="w-full sm:w-auto h-12 px-8 py-8 border border-cyan-200 hover:border-cyan-700 hover:bg-cyan-500/5 text-slate-300 font-bold rounded-xl text-xs backdrop-blur-sm tracking-wide transition-all flex items-center justify-center"
                >
                  Explore Frameworks
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Anti-Gravity Interactive Canvas */}
        <div className="flex-1 w-full relative flex items-center justify-center min-h-[500px]">
          <div
            ref={containerRef}
            className="w-full h-[520px] max-w-[580px] relative rounded-3xl border border-slate-900 bg-slate-950/40 backdrop-blur-md overflow-hidden shadow-[20px_20px_50px_rgba(0,0,0,0.5)] group"
          >
            {/* Embedded internal canvas vector decor */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#334155_1px,transparent_1px)] [bg-size:16px_16px]" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-700" />

            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  drag
                  dragConstraints={containerRef}
                  dragElastic={0.15}
                  dragTransition={{ bounceStiffness: 500, bounceDamping: 25 }}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0]
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: skill.delay },
                    scale: { duration: 0.6, delay: skill.delay },
                    y: {
                      duration: 4 + index * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: skill.delay * 0.5
                    }
                  }}
                  className={`absolute cursor-grab active:cursor-grabbing p-4 rounded-2xl border border-slate-800/80 ${skill.bg} backdrop-blur-xl shadow-xl hover:${skill.glow} ${skill.border} transition-shadow duration-500 flex items-center gap-3.5 select-none w-auto max-w-[210px] z-20 hover:z-30`}
                  style={{ top: skill.top, left: skill.left }}
                >
                  <div className={`p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 ${skill.color} shadow-inner`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col pr-1">
                    <span className="text-xs font-bold text-white tracking-wide">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Interactive Node
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;