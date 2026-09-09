import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap, Target } from 'lucide-react';
import { playHoverSound } from '../../utils/audio';

export const WhyUsSection: React.FC = () => {
  const statements = [
    {
      title: 'DESIGN WITH PURPOSE.',
      subtitle: 'Form follows emotion and function.',
      description: 'Visual flair is worthless if it does not sell. Every user journey, layout grid, and typography choice is strategically mapped to command respect from high-value clients.',
      icon: Target,
    },
    {
      title: 'TECHNOLOGY WITH INTENTION.',
      subtitle: 'Sub-50ms latency. Zero bloat.',
      description: 'Underneath our physical glass animations is clean TypeScript, Next.js, and Three.js hardware-accelerated code built to execute flawlessly across devices.',
      icon: Zap,
    },
    {
      title: 'EXPERIENCES PEOPLE REMEMBER.',
      subtitle: 'Digital flagships that endure.',
      description: 'We fuse oversized typography, physical 3D WebGL, and kinetic motion into continuous storytelling that makes your brand impossible to scroll past.',
      icon: Sparkles,
    },
    {
      title: 'NO COOKIE-CUTTER DIGITAL PRODUCTS.',
      subtitle: '100% bespoke engineering.',
      description: 'We never use generic templates or page builder crutches. Every pixel, shader, and interaction is engineered uniquely for your brand strategy.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-28 px-8 relative border-t border-[#DCD9D2] bg-[#F5F3EE] overflow-hidden text-[#171717]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">[ OUR APPROACH ]</span>
          <h2 className="text-4xl sm:text-6xl font-bold font-display text-[#171717]">
            THE DIGITAL UNFAIR ADVANTAGE.
          </h2>
          <p className="text-[#6F6F6A] text-sm sm:text-base font-light">
            We don't settle for "good enough". Here is why ambitious founders and brands partner with KINETIX.
          </p>
        </div>

        {/* 4 Large Typography Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {statements.map((st, idx) => {
            const IconComponent = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={playHoverSound}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#DCD9D2] space-y-6 glass-panel-hover"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#DCD9D2] flex items-center justify-center text-[#171717] shadow-sm">
                    <IconComponent className="w-5 h-5 text-[#B7A98F]" />
                  </div>
                  <span className="font-mono text-xs text-[#6F6F6A] font-semibold">0{idx + 1}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#171717]">
                    {st.title}
                  </h3>
                  <div className="text-xs font-mono text-[#6F6F6A] font-medium">
                    {st.subtitle}
                  </div>
                </div>

                <p className="text-[#6F6F6A] text-sm font-light leading-relaxed">
                  {st.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
