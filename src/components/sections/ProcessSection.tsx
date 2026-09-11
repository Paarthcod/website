import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../data/agencyData';
import { playHoverSound } from '../../utils/audio';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-32 px-8 relative border-t border-[#B8B3A9]/40 bg-[#E5E1D8] text-[#242321] overflow-hidden">
      {/* Subtle Paper Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#B8B3A9_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#B8B3A9]/50 pb-8">
          <div>
            <span className="text-xs font-mono text-[#737565] uppercase tracking-widest">[ 05 // METHODOLOGY & FRAMEWORK ]</span>
            <h2 className="text-4xl sm:text-6xl font-semibold font-display text-[#242321] mt-2 tracking-tight">
              HOW WE WORK<span className="text-[#9A8064]">.</span>
            </h2>
          </div>
          <p className="text-[#918B80] text-sm max-w-md leading-relaxed font-normal">
            Predictable engineering. Zero guesswork. We eliminate the friction, delays, and ambiguity traditional agencies introduce.
          </p>
        </div>

        {/* Interactive Linear Process Timeline (Prompt Section 25) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Horizontal Axis Line Accent */}
          <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[2px] bg-[#B8B3A9]/50 z-0" />

          {PROCESS_STEPS.slice(0, 4).map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={playHoverSound}
              className="p-6 rounded-2xl bg-[#F4F1EA] border border-[#B8B3A9]/50 space-y-6 flex flex-col justify-between group hover:border-[#737565] transition-all shadow-sm relative z-10"
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#B8B3A9]/30 pb-4">
                  <div className="w-9 h-9 rounded-full bg-[#242321] text-[#F4F1EA] font-mono text-xs font-bold flex items-center justify-center border border-[#9A8064]">
                    0{idx + 1}
                  </div>
                  <span className="text-[10px] font-mono text-[#737565] uppercase font-semibold">STAGE 0{idx + 1}</span>
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-lg font-semibold font-display text-[#242321] group-hover:text-[#737565] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-[#918B80] font-medium">{step.subtitle}</div>
                </div>

                <p className="mt-4 text-xs text-[#918B80] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="w-full bg-[#B8B3A9]/40 h-1 rounded-full overflow-hidden">
                <div className="bg-[#737565] h-full w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
