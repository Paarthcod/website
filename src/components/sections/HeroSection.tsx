import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Cpu, RefreshCw, Compass, Sparkles } from 'lucide-react';
import { HeroCanvas } from '../3d/HeroCanvas';
import { playHoverSound, playClickSound } from '../../utils/audio';

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

  const handleReset = () => {
    playClickSound();
    setIsPopped(false);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-16 px-8 overflow-hidden bg-[#F4F1EA] text-[#242321]">
      {/* Tactile Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#B8B3A9_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      {/* 3D WebGL Art Sculpture Canvas */}
      <HeroCanvas mousePos={mousePos} isPopped={isPopped} onPop={() => setIsPopped(true)} />

      {/* Top Asymmetric Metadata Badge */}
      <div className="absolute top-28 right-8 z-20 hidden sm:block">
        <AnimatePresence mode="wait">
          {!isPopped ? (
            <motion.button
              key="inspect-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => {
                playClickSound();
                setIsPopped(true);
              }}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#B8B3A9]/60 bg-[#F4F1EA]/90 backdrop-blur-md text-[#242321] font-mono text-xs shadow-sm hover:border-[#737565] transition-all hover:scale-105"
              data-cursor="INSPECT"
            >
              <Cpu className="w-3.5 h-3.5 text-[#9A8064]" />
              <span>INTERACT WITH 3D ARTIFACT</span>
            </motion.button>
          ) : (
            <motion.button
              key="reset-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={handleReset}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#242321] text-[#F4F1EA] font-mono text-xs shadow-md transition-all hover:scale-105 hover:bg-[#737565]"
              data-cursor="RESET"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#9A8064] animate-spin" style={{ animationDuration: '4s' }} />
              <span>RESET SCULPTURE STATE</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Main Asymmetric Editorial Hero Composition (Prompt Section 10 & 11) */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto pointer-events-auto">
        <div className="max-w-4xl space-y-8">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-[#918B80] uppercase tracking-widest font-medium flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#737565]" />
            <span>CREATIVE TECHNOLOGY STUDIO // 2026</span>
          </motion.div>

          {/* Giant Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-[#242321] leading-[0.98]"
          >
            WE BUILD <br />
            <span className="text-[#918B80] font-normal italic">DIGITAL</span> EXPERIENCES<span className="text-[#9A8064]">.</span>
          </motion.h1>

          {/* Supporting Subheading Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#918B80] leading-relaxed max-w-xl font-normal"
          >
            An experimental growth partner engineering bespoke web platforms, custom 3D web software, and high-conversion assets for forward-thinking enterprises.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => {
                playClickSound();
                onExploreWorkClick();
              }}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#242321] text-[#F4F1EA] hover:bg-[#737565] active:bg-[#A47F68] font-semibold text-xs tracking-wider uppercase transition-all hover:scale-105 shadow-sm"
              data-cursor="WORK"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-4 h-4 text-[#9A8064]" />
            </button>

            <button
              onClick={() => {
                playClickSound();
                setActiveTab('contact');
              }}
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-[#B8B3A9] bg-[#F4F1EA]/80 hover:bg-[#E5E1D8] text-[#242321] font-semibold text-xs tracking-wider uppercase transition-all"
              data-cursor="CONSULT"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 text-[#918B80]" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Coordinates & Meta Footer */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-[#B8B3A9]/40 pt-6 gap-4 text-xs font-mono text-[#918B80]">
        <div className="flex items-center gap-4">
          <Compass className="w-3.5 h-3.5 text-[#9A8064]" />
          <span>[37.7749° N, 122.4194° W]</span>
          <span>•</span>
          <span>SYSTEM.v26 ACTIVE</span>
        </div>

        <div className="flex items-center gap-6">
          <span>SCROLL TO DISCOVER</span>
          <div className="w-12 h-[1px] bg-[#918B80]" />
        </div>
      </div>
    </section>
  );
};
