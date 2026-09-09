import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { playHoverSound, playClickSound } from '../../utils/audio';

interface BigCTASectionProps {
  setActiveTab: (tab: string) => void;
}

export const BigCTASection: React.FC<BigCTASectionProps> = ({ setActiveTab }) => {
  return (
    <section className="py-36 px-8 relative border-t border-[#26272B] bg-[#111214] overflow-hidden text-[#F5F3EE]">
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono text-[#B7A98F] uppercase tracking-widest font-semibold"
        >
          [ READY TO START? ]
        </motion.div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight font-display text-[#F5F3EE] leading-none">
          LET'S BUILD <br />
          <span className="text-[#B7A98F]">SOMETHING MEMORABLE.</span>
        </h2>

        <p className="text-[#9A9A94] text-lg sm:text-xl max-w-xl mx-auto font-light leading-relaxed">
          Tell us about your project vision. We will engineer a bespoke digital flagship, 3D experience, and application platform for your brand.
        </p>

        <div className="pt-6">
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={playHoverSound}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#F5F3EE] hover:bg-[#E5E3DD] text-[#171717] font-semibold text-xs tracking-wider uppercase transition-all hover:scale-[1.02] shadow-lg"
            data-cursor="BUILD NOW"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 text-[#171717]" />
          </button>
        </div>
      </div>
    </section>
  );
};
