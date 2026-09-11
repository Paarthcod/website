import React, { useState } from 'react';
import { SERVICES, type Service } from '../../data/agencyData';
import { ServicesVisual } from '../3d/ServicesVisual';
import { playHoverSound, playClickSound } from '../../utils/audio';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  return (
    <section id="services" className="py-32 px-8 relative border-t border-[#B8B3A9]/40 bg-[#E5E1D8] text-[#242321] overflow-hidden">
      {/* Subtle Paper Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#B8B3A9_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#B8B3A9]/50 pb-8">
          <div>
            <span className="text-xs font-mono text-[#737565] uppercase tracking-widest">[ 03 // CAPABILITIES & ECOSYSTEM ]</span>
            <h2 className="text-4xl sm:text-6xl font-semibold font-display text-[#242321] mt-2 tracking-tight">
              CORE SERVICES<span className="text-[#9A8064]">.</span>
            </h2>
          </div>
          <p className="text-[#918B80] text-sm max-w-md leading-relaxed font-normal">
            A synchronized technical framework for digital dominance—combining custom web architecture, precision performance engineering, and intelligent customer acquisition pipelines.
          </p>
        </div>

        {/* Interactive Editorial Expandable Accordion List (Prompt Section 13) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Service Menu */}
          <div className="lg:col-span-6 space-y-4">
            {SERVICES.map((service: Service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => {
                    playClickSound();
                    setActiveServiceId(service.id);
                  }}
                  onMouseEnter={() => {
                    playHoverSound();
                    setActiveServiceId(service.id);
                  }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 border ${
                    isActive
                      ? 'bg-[#F4F1EA] border-[#737565] shadow-md translate-x-2'
                      : 'border-[#B8B3A9]/40 hover:border-[#737565]/60 bg-white/40 opacity-70 hover:opacity-100'
                  }`}
                  data-cursor={service.title}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#737565]' : 'text-[#918B80]'}`}>
                        {service.number}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-semibold font-display tracking-tight ${isActive ? 'text-[#242321]' : 'text-[#918B80]'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[#737565] translate-x-2' : 'text-[#918B80]/50'}`} />
                  </div>

                  {isActive && (
                    <div className="mt-5 pt-4 border-t border-[#B8B3A9]/30 space-y-4">
                      <p className="text-sm text-[#918B80] leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#242321]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#9A8064]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Live 3D Visualizer Container */}
          <div className="lg:col-span-6 sticky top-32">
            <ServicesVisual activeServiceId={activeServiceId} />
          </div>
        </div>
      </div>
    </section>
  );
};
