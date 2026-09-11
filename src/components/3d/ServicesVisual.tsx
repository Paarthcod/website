import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Box, Code, Cpu, ShoppingBag, Layers, Sparkles } from 'lucide-react';

interface ServicesVisualProps {
  activeServiceId: string;
}

export const ServicesVisual: React.FC<ServicesVisualProps> = ({ activeServiceId }) => {
  return (
    <div className="w-full h-[380px] lg:h-[480px] rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#B8B3A9]/60 shadow-md bg-[#F4F1EA]">
      {/* Subtle warm ambient light blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9A8064]/10 via-transparent to-transparent pointer-events-none" />

      {/* Service 01: Website Design & Development */}
      {activeServiceId === 'website-design' && (
        <motion.div
          key="website-design"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex flex-col justify-between relative z-10"
        >
          <div className="w-full bg-[#E5E1D8] rounded-t-xl p-3 flex items-center justify-between border-b border-[#B8B3A9]/40">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#242321]/30 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#242321]/30 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#242321]/30 inline-block" />
            </div>
            <div className="bg-[#F4F1EA] px-4 py-1 rounded-full text-xs font-mono text-[#918B80] flex items-center gap-2 border border-[#B8B3A9]/50">
              <Globe className="w-3 h-3 text-[#737565]" />
              kinetix-flagship.design
            </div>
            <div className="text-[10px] text-[#918B80] font-mono">Bespoke UI</div>
          </div>

          <div className="flex-1 bg-[#F4F1EA] p-6 relative overflow-hidden flex flex-col justify-between border-x border-b border-[#B8B3A9]/40 rounded-b-xl">
            <div className="space-y-4">
              <div className="h-7 w-2/3 bg-[#242321]/10 rounded" />
              <div className="h-3 w-1/3 bg-[#242321]/5 rounded" />
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="h-24 bg-white/70 rounded-xl p-3 flex flex-col justify-between border border-[#B8B3A9]/40">
                  <div className="w-5 h-5 rounded bg-[#242321]" />
                  <div className="h-2 w-3/4 bg-[#242321]/10 rounded" />
                </div>
                <div className="h-24 bg-white/70 rounded-xl p-3 flex flex-col justify-between border border-[#B8B3A9]/40">
                  <div className="w-5 h-5 rounded bg-[#9A8064]" />
                  <div className="h-2 w-1/2 bg-[#242321]/10 rounded" />
                </div>
              </div>
            </div>
            <div className="text-xs font-mono text-[#918B80] pt-4 border-t border-[#B8B3A9]/30 flex justify-between">
              <span>Clean Code & Custom Engine</span>
              <span className="text-[#242321] font-semibold">100/100 Core Web Vitals</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Service 02: 3D & Interactive Experiences */}
      {activeServiceId === '3d-interactive' && (
        <motion.div
          key="3d-interactive"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex flex-col items-center justify-center relative z-10"
        >
          <div className="relative w-40 h-40 preserve-3d animate-float-slow">
            <div className="absolute inset-0 rounded-2xl border border-[#9A8064] bg-white/70 flex items-center justify-center transform rotate-45 shadow-sm">
              <Box className="w-12 h-12 text-[#242321] animate-spin" style={{ animationDuration: '18s' }} />
            </div>
            <div className="absolute inset-0 rounded-2xl border border-[#B8B3A9] bg-[#E5E1D8]/60 transform -rotate-12 translate-z-10">
              <Sparkles className="w-6 h-6 text-[#9A8064] absolute top-3 right-3" />
            </div>
          </div>
          <div className="mt-8 text-center space-y-1">
            <p className="text-xs font-mono text-[#918B80] uppercase tracking-widest">WebGL & Real-Time Shaders</p>
            <h4 className="text-lg font-semibold font-display text-[#242321]">Immersive Product Environments</h4>
          </div>
        </motion.div>
      )}

      {/* Service 03: Full-Stack Web Applications */}
      {activeServiceId === 'web-apps' && (
        <motion.div
          key="web-apps"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex flex-col justify-between relative z-10"
        >
          <div className="bg-[#151514] text-[#F4F1EA] p-4 rounded-xl font-mono text-xs space-y-2 border border-[#242321]">
            <div className="flex items-center gap-2 text-[#9A8064]">
              <Code className="w-4 h-4" />
              <span>kinetix.config.ts</span>
            </div>
            <div className="text-[#918B80]">
              <span className="text-[#737565]">export const</span> app = createSystem(&#123;
              <br />
              &nbsp;&nbsp;architecture: <span className="text-[#A47F68]">'Bespoke Pipeline'</span>,
              <br />
              &nbsp;&nbsp;database: <span className="text-[#A47F68]">'PostgreSQL + Redis'</span>,
              <br />
              &nbsp;&nbsp;performance: <span className="text-[#9A8064]">'Instant'</span>
              <br />
              &#125;);
            </div>
          </div>

          <div className="p-4 bg-white/70 rounded-xl border border-[#B8B3A9]/40 flex items-center justify-between text-xs font-mono">
            <span className="text-[#918B80]">STATUS</span>
            <span className="text-[#737565] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#737565] animate-ping" />
              PRODUCTION READY
            </span>
          </div>
        </motion.div>
      )}

      {/* Service 04: E-Commerce & Growth Engines */}
      {activeServiceId === 'ecommerce' && (
        <motion.div
          key="ecommerce"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex flex-col justify-between relative z-10 p-4"
        >
          <div className="flex items-center justify-between border-b border-[#B8B3A9]/40 pb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#9A8064]" />
              <span className="font-display font-semibold text-[#242321]">LUXURY E-COMMERCE</span>
            </div>
            <span className="text-xs font-mono text-[#737565] bg-[#E5E1D8] px-2.5 py-1 rounded">
              High Conversion
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="p-4 bg-white/70 rounded-xl border border-[#B8B3A9]/40 space-y-1">
              <span className="text-[10px] font-mono text-[#918B80]">CHECKOUT SPEED</span>
              <div className="text-xl font-bold font-display text-[#242321]">&lt; 1.2s</div>
            </div>
            <div className="p-4 bg-white/70 rounded-xl border border-[#B8B3A9]/40 space-y-1">
              <span className="text-[10px] font-mono text-[#918B80]">SECURITY STACK</span>
              <div className="text-xl font-bold font-display text-[#737565]">PCI Level 1</div>
            </div>
          </div>

          <div className="text-xs font-mono text-[#918B80] text-center pt-2">
            Seamless Shopify Plus & Custom Headless Commerce
          </div>
        </motion.div>
      )}
    </div>
  );
};
