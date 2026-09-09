import React from 'react';
import { motion } from 'framer-motion';
import { PHILOSOPHY_POINTS } from '../data/agencyData';
import { playHoverSound } from '../utils/audio';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full pt-36 pb-28 px-8 space-y-28 bg-[#F5F3EE] text-[#171717]">
      {/* About Hero */}
      <section className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest font-medium"
        >
          [ ABOUT KINETIX ]
        </motion.div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight font-display text-[#171717] leading-none">
          WE THINK IN SYSTEMS. <br />
          <span className="text-[#6F6F6A]">WE DESIGN IN EXPERIENCES.</span>
        </h1>

        <p className="text-[#6F6F6A] text-lg sm:text-xl max-w-3xl leading-relaxed font-light">
          Founded by creative developers, 3D artists, and AI architects, KINETIX is a next-generation studio. We build custom websites, WebGL applications, and autonomous systems engineered for ambitious brands.
        </p>
      </section>

      {/* Editorial Philosophy Sequence */}
      <section className="max-w-7xl mx-auto space-y-16">
        <div className="border-b border-[#DCD9D2] pb-6">
          <span className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">[ OUR PHILOSOPHY ]</span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#171717] mt-2">
            EDITORIAL MANIFESTO.
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
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#DCD9D2] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-hover"
            >
              <div className="lg:col-span-5 space-y-1">
                <span className="text-xs font-mono text-[#6F6F6A] font-semibold">STATEMENT 0{idx + 1}</span>
                <h3 className="text-3xl sm:text-4xl font-bold font-display text-[#171717]">{item.title}</h3>
                <div className="text-xs font-mono text-[#6F6F6A] font-medium">{item.subtitle}</div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm text-[#6F6F6A] font-light leading-relaxed">
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
