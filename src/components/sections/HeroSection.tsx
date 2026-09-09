import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Cpu, RefreshCw, Terminal, Sparkles } from 'lucide-react';
import { HeroCanvas } from '../3d/HeroCanvas';
import { playHoverSound, playClickSound } from '../../utils/audio';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
  onExploreWorkClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab, onExploreWorkClick }) => {
  const mousePos = useRef({ x: 0, y: 0 });
  const [isPopped, setIsPopped] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePop = () => {
    setIsPopped(true);
    try {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.5, x: 0.5 },
        colors: ['#B7A98F', '#171717', '#E5B89B', '#FAF8F5'],
        disableForReducedMotion: true,
      });
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    playClickSound();
    setIsPopped(false);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-36 pb-16 px-8 overflow-hidden bg-[#F5F3EE] text-[#171717]">
      {/* Technical 3D Holographic Coding & Laptop Canvas */}
      <HeroCanvas mousePos={mousePos} isPopped={isPopped} onPop={handlePop} />

      {/* Floating 3D Control Badge */}
      <div className="absolute top-28 right-8 z-20">
        <AnimatePresence mode="wait">
          {!isPopped ? (
            <motion.button
              key="pop-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => {
                playClickSound();
                handlePop();
              }}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:border-[#171717]/40 text-[#171717] font-mono text-xs shadow-sm transition-all hover:scale-105"
              data-cursor="OVERCLOCK"
            >
              <Cpu className="w-3.5 h-3.5 text-[#B7A98F] animate-pulse" />
              <span>CLICK CORE TO OVERCLOCK</span>
            </motion.button>
          ) : (
            <motion.button
              key="reset-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={handleReset}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#171717] text-[#F5F3EE] font-mono text-xs shadow-md transition-all hover:scale-105 hover:bg-[#26272B]"
              data-cursor="RECONNECT"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#B7A98F] animate-spin" style={{ animationDuration: '4s' }} />
              <span>RECONNECT CODE PIPELINE</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Main Composition */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto pointer-events-auto">
        <div className="max-w-4xl space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest font-medium flex items-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5 text-[#B7A98F]" />
            <span>[ CREATIVE TECHNOLOGY & CODE STUDIO ]</span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight font-display text-[#171717] leading-[0.95]"
            >
              WE BUILD DIGITAL EXPERIENCES <br />
              <span className="text-[#6F6F6A]">THAT MOVE BUSINESSES FORWARD.</span>
            </motion.h1>
          </div>

          {/* Sub-headline Services Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#171717]"
          >
            <span className="px-3 py-1 rounded-full glass-panel border border-[#DCD9D2] flex items-center gap-1.5 bg-[#FAF8F5]">
              <Sparkles className="w-3 h-3 text-[#B7A98F]" /> Web Development
            </span>
            <span className="text-[#6F6F6A]">•</span>
            <span className="px-3 py-1 rounded-full glass-panel border border-[#DCD9D2] flex items-center gap-1.5 bg-[#FAF8F5]">
              <Sparkles className="w-3 h-3 text-[#B7A98F]" /> AI & Automation
            </span>
            <span className="text-[#6F6F6A]">•</span>
            <span className="px-3 py-1 rounded-full glass-panel border border-[#DCD9D2] flex items-center gap-1.5 bg-[#FAF8F5]">
              <Sparkles className="w-3 h-3 text-[#B7A98F]" /> 3D WebGL Spaces
            </span>
            <span className="text-[#6F6F6A]">•</span>
            <span className="px-3 py-1 rounded-full glass-panel border border-[#DCD9D2] flex items-center gap-1.5 bg-[#FAF8F5]">
              <Sparkles className="w-3 h-3 text-[#B7A98F]" /> Digital Products
            </span>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#6F6F6A] text-lg sm:text-xl max-w-2xl font-light leading-relaxed"
          >
            Bespoke web applications, high-performance WebGL spaces, custom AI workflow pipelines, and software platforms engineered for ambitious brands.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 pt-4"
          >
            <button
              onClick={() => {
                playClickSound();
                onExploreWorkClick();
              }}
              onMouseEnter={playHoverSound}
              className="px-8 py-4 rounded-full bg-[#171717] hover:bg-[#26272B] text-[#F5F3EE] font-semibold text-xs tracking-wider uppercase flex items-center gap-3 transition-all hover:scale-[1.02] shadow-sm"
              data-cursor="EXPLORE"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowUpRight className="w-4 h-4 text-[#B7A98F]" />
            </button>

            <button
              onClick={() => {
                playClickSound();
                setActiveTab('contact');
              }}
              onMouseEnter={playHoverSound}
              className="px-8 py-4 rounded-full glass-panel hover:border-[#171717]/40 text-[#171717] font-semibold text-xs tracking-wider uppercase flex items-center gap-3 transition-all hover:scale-[1.02]"
              data-cursor="START"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#171717]" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex justify-between items-end pt-8 border-t border-[#DCD9D2] text-xs font-mono text-[#6F6F6A]">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 text-[#171717]" />
          <span>SCROLL TO DISCOVER ARCHITECTURE</span>
        </div>
        <div className="hidden sm:block uppercase tracking-widest text-[11px] text-[#6F6F6A]">
          HIGH-PERFORMANCE ENGINEERING & DIGITAL ART.
        </div>
      </div>
    </section>
  );
};
