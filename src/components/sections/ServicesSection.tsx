import React, { useState } from 'react';
import { SERVICES, type Service } from '../../data/agencyData';
import { ServicesVisual } from '../3d/ServicesVisual';
import { playHoverSound, playClickSound } from '../../utils/audio';
import { ArrowRight, Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  return (
    <section className="py-28 px-8 relative border-t border-[#DCD9D2] bg-[#F5F3EE] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCD9D2] pb-8">
          <div>
            <span className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">[ WHAT WE DO ]</span>
            <h2 className="text-4xl sm:text-6xl font-bold font-display text-[#171717] mt-2">
              OUR CAPABILITIES.
            </h2>
          </div>
          <p className="text-[#6F6F6A] text-sm max-w-md font-light">
            We architect digital flagships, 3D interactive spaces, and automated AI logic engineered for ambitious brands.
          </p>
        </div>

        {/* Interactive List + Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Service Menu */}
          <div className="lg:col-span-6 space-y-3">
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
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'glass-panel border-[#171717] bg-[#FAF8F5] shadow-sm'
                      : 'border-[#DCD9D2]/70 hover:border-[#171717]/30 bg-transparent'
                  }`}
                  data-cursor={service.title}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-semibold ${isActive ? 'text-[#171717]' : 'text-[#6F6F6A]'}`}>
                        {service.number}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-semibold font-display ${isActive ? 'text-[#171717]' : 'text-[#6F6F6A]'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[#171717] translate-x-1.5' : 'text-[#6F6F6A]/50'}`} />
                  </div>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-[#DCD9D2] space-y-3">
                      <p className="text-sm text-[#6F6F6A] font-light leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#171717]">
                            <Check className="w-3.5 h-3.5 text-[#B7A98F]" />
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

          {/* Right Live 3D Visualizer */}
          <div className="lg:col-span-6 sticky top-32">
            <ServicesVisual activeServiceId={activeServiceId} />
          </div>
        </div>
      </div>
    </section>
  );
};
