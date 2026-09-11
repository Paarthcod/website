import React from 'react';
import { motion } from 'framer-motion';
import { PHILOSOPHY_POINTS } from '../data/agencyData';
import { playHoverSound } from '../utils/audio';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full pt-36 pb-28 px-8 space-y-28 bg-[#F4F1EA] text-[#242321]">
      {/* About Hero */}
      <section className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-mono text-[#737565] uppercase tracking-widest font-medium"
        >
          [ 02 // ABOUT KINETIX ]
        </motion.div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight font-display text-[#242321] leading-none">
          WE THINK IN SYSTEMS<span className="text-[#9A8064]">.</span> <br />
          <span className="text-[#918B80] font-normal italic">WE DESIGN IN EXPERIENCES.</span>
        </h1>

        <p className="text-[#918B80] text-lg sm:text-xl max-w-3xl leading-relaxed font-normal">
          Founded by creative developers, digital growth strategists, and 3D architects, KINETIX is a specialized studio. We build custom websites, WebGL platforms, and scalable digital infrastructure engineered for ambitious brands.
        </p>
      </section>

      {/* Editorial Philosophy Sequence */}
      <section className="max-w-7xl mx-auto space-y-16">
        <div className="border-b border-[#B8B3A9]/50 pb-6">
          <span className="text-xs font-mono text-[#737565] uppercase tracking-widest">[ MANIFESTO STATEMENTS ]</span>
          <h2 className="text-3xl sm:text-5xl font-semibold font-display text-[#242321] mt-2">
            EDITORIAL MANIFESTO<span className="text-[#9A8064]">.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {PHILOSOPHY_POINTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={playHoverSound}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#B8B3A9]/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#737565] transition-all shadow-sm"
            >
              <div className="lg:col-span-5 space-y-1">
                <span className="text-xs font-mono text-[#9A8064] font-bold">STATEMENT 0{idx + 1}</span>
                <h3 className="text-3xl sm:text-4xl font-semibold font-display text-[#242321]">{item.title}</h3>
                <div className="text-xs font-mono text-[#737565] font-medium">{item.subtitle}</div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm text-[#918B80] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
