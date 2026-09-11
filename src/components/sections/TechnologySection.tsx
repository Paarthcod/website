import React, { useState } from 'react';
import { TECH_CATEGORIES, type TechCategory } from '../../data/agencyData';
import { playHoverSound, playClickSound } from '../../utils/audio';
import { Cpu, Terminal, Layers } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory>(TECH_CATEGORIES[0]);

  return (
    <section className="py-32 px-8 relative border-t border-[#242321] bg-[#151514] text-[#F4F1EA] overflow-hidden">
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(184,179,169,0.12)_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#242321] pb-8">
          <div>
            <span className="text-xs font-mono text-[#9A8064] uppercase tracking-widest">[ 05 // SYSTEM INFRASTRUCTURE ]</span>
            <h2 className="text-4xl sm:text-6xl font-semibold font-display text-[#F4F1EA] mt-2 tracking-tight">
              GROWTH STACK<span className="text-[#9A8064]">.</span>
            </h2>
          </div>
          <p className="text-[#918B80] text-sm max-w-md leading-relaxed font-normal">
            Zero bloat, zero technical debt. Exploring the technology matrix across frontend engines, 3D graphics, and tracking pipelines.
          </p>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {TECH_CATEGORIES.map((cat) => {
            const isSelected = activeCategory.category === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => {
                  playClickSound();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => {
                  playHoverSound();
                  setActiveCategory(cat);
                }}
                className={`px-6 py-2.5 rounded-full font-mono text-xs tracking-wider transition-all border ${
                  isSelected
                    ? 'bg-[#F4F1EA] text-[#242321] font-semibold border-[#F4F1EA] shadow-md'
                    : 'bg-[#242321]/60 text-[#918B80] border-[#242321] hover:border-[#737565] hover:text-[#F4F1EA]'
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeCategory.technologies.map((tech) => (
            <div
              key={tech.name}
              onMouseEnter={playHoverSound}
              className="p-6 rounded-2xl bg-[#242321]/80 border border-[#242321] hover:border-[#737565] space-y-4 transition-all"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold font-display text-[#F4F1EA]">{tech.name}</h3>
                <span className="text-[10px] font-mono text-[#9A8064] bg-[#151514] px-2.5 py-0.5 rounded border border-[#242321]">
                  {activeCategory.category}
                </span>
              </div>
              <p className="text-xs text-[#918B80] leading-relaxed">
                {tech.description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-[#918B80]">
                <span>INTEGRATES:</span>
                <span className="text-[#F4F1EA] font-medium">{tech.connectedTo.join(' • ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
