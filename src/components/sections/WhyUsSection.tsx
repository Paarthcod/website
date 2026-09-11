import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap, Target, Eye, Compass, Cpu, Layers } from 'lucide-react';
import { playHoverSound, playClickSound } from '../../utils/audio';

export const WhyUsSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const manifestoItems = [
    { word: 'WE QUESTION.', desc: 'Deconstructing existing industry paradigms, technical debt, and superficial design clichés before writing code.' },
    { word: 'WE EXPERIMENT.', desc: 'Fusing physical materials, 3D WebGL, and unexpected UI behaviors into custom digital interactions.' },
    { word: 'WE DESIGN.', desc: 'Creating calm quiet luxury interfaces with large typography, generous white space, and editorial hierarchy.' },
    { word: 'WE ENGINEER.', desc: 'Building high-speed custom code engines, clean schemas, and zero-bloat digital assets.' },
    { word: 'WE BUILD.', desc: 'Transforming digital presences into long-term compounding business equity for ambitious founders.' },
  ];

  return (
    <section id="about" className="py-36 px-8 relative border-t border-[#242321] bg-[#151514] text-[#F4F1EA] overflow-hidden">
      {/* Subtle Tactile Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(184,179,169,0.12)_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#242321] pb-8">
          <div>
            <span className="text-xs font-mono text-[#9A8064] uppercase tracking-widest">[ 02 // STUDIO MANIFESTO ]</span>
            <h2 className="text-4xl sm:text-6xl font-semibold font-display text-[#F4F1EA] mt-2 tracking-tight">
              PHILOSOPHY & MINDSET<span className="text-[#9A8064]">.</span>
            </h2>
          </div>
          <p className="text-[#918B80] text-sm max-w-md leading-relaxed font-normal">
            We are not a traditional agency. We are a specialized creative technology studio building digital infrastructure for serious enterprises.
          </p>
        </div>

        {/* Giant Vertical Manifesto (Prompt Sections 23 & 24) */}
        <div className="space-y-6">
          {manifestoItems.map((item, idx) => {
            const isHovered = activeItem === idx;
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => {
                  playHoverSound();
                  setActiveItem(idx);
                }}
                onMouseLeave={() => setActiveItem(null)}
                className={`p-8 sm:p-10 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  isHovered
                    ? 'bg-[#242321] border-[#9A8064] shadow-2xl translate-x-3'
                    : 'bg-[#151514]/80 border-[#242321] opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs font-bold text-[#9A8064]">0{idx + 1}</span>
                    <h3
                      className={`font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight transition-colors ${
                        isHovered ? 'text-[#F4F1EA]' : 'text-[#918B80]'
                      }`}
                    >
                      {item.word}
                    </h3>
                  </div>

                  <p className="text-sm text-[#918B80] max-w-md leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Pillars Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#242321]">
          {[
            { tag: 'PRECISION', text: 'Engineering-led architecture over subjective visual opinions.' },
            { tag: 'INTEGRATION', text: 'Connecting website assets directly with search, analytics, & ad networks.' },
            { tag: 'ZERO BLOAT', text: 'No bloated page builders. Pure custom code engines.' },
            { tag: 'COMPOUNDING', text: 'Building long-term digital equity that scales with your business.' },
          ].map((pillar, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#242321]/60 border border-[#242321] space-y-2">
              <span className="font-mono text-[10px] font-bold text-[#9A8064] tracking-widest">{pillar.tag}</span>
              <p className="text-xs text-[#918B80] leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
