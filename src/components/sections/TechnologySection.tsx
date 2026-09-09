import React, { useState } from 'react';
import { TECH_CATEGORIES, type TechCategory } from '../../data/agencyData';
import { playHoverSound, playClickSound } from '../../utils/audio';

export const TechnologySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory>(TECH_CATEGORIES[0]);

  return (
    <section className="py-28 px-8 relative border-t border-[#DCD9D2] bg-[#F5F3EE] overflow-hidden text-[#171717]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCD9D2] pb-8">
          <div>
            <span className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">[ TECH ARCHITECTURE ]</span>
            <h2 className="text-4xl sm:text-6xl font-bold font-display text-[#171717] mt-2">
              TECHNOLOGY CAPABILITIES.
            </h2>
          </div>
          <p className="text-[#6F6F6A] text-sm max-w-md font-light">
            Explore our technology matrix across engineering, 3D WebGL graphics, and automated artificial intelligence pipelines.
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
                    ? 'bg-[#171717] text-[#F5F3EE] font-semibold border-[#171717]'
                    : 'glass-panel text-[#6F6F6A] border-[#DCD9D2] hover:border-[#171717]/40 hover:text-[#171717]'
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
              className="glass-panel p-6 rounded-2xl border border-[#DCD9D2] space-y-3 glass-panel-hover"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold font-display text-[#171717]">{tech.name}</h3>
                <span className="text-[10px] font-mono text-[#171717] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#DCD9D2]">
                  {activeCategory.category}
                </span>
              </div>
              <p className="text-xs text-[#6F6F6A] font-light leading-relaxed">
                {tech.description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-[#6F6F6A]">
                <span>CONNECTED:</span>
                <span className="text-[#171717] font-medium">{tech.connectedTo.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
