import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../data/agencyData';
import { playHoverSound } from '../../utils/audio';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-28 px-8 relative border-t border-[#DCD9D2] bg-[#F5F3EE] overflow-hidden text-[#171717]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCD9D2] pb-8">
          <div>
            <span className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">[ HOW WE WORK ]</span>
            <h2 className="text-4xl sm:text-6xl font-bold font-display text-[#171717] mt-2">
              OUR 5-STEP PROCESS.
            </h2>
          </div>
          <p className="text-[#6F6F6A] text-sm max-w-md font-light">
            From initial strategy discovery to global deployment, our engineering framework guarantees on-time excellence.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={playHoverSound}
              className="glass-panel p-6 rounded-2xl border border-[#DCD9D2] space-y-6 flex flex-col justify-between group hover:border-[#171717]/40 transition-all shadow-sm"
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#DCD9D2] pb-4">
                  <span className="font-mono text-3xl font-extrabold text-[#171717]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#6F6F6A] uppercase font-semibold">STAGE 0{idx + 1}</span>
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-semibold font-display text-[#171717] group-hover:text-[#6F6F6A] transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-[#6F6F6A] font-medium">{step.subtitle}</div>
                </div>

                <p className="mt-4 text-xs text-[#6F6F6A] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="w-full bg-[#DCD9D2] h-0.5 rounded-full overflow-hidden">
                <div className="bg-[#171717] h-full w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
