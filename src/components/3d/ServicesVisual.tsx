import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Box, Code, Cpu, ShoppingBag, Layers, Terminal, Sparkles } from 'lucide-react';

interface ServicesVisualProps {
  activeServiceId: string;
}

export const ServicesVisual: React.FC<ServicesVisualProps> = ({ activeServiceId }) => {
  return (
    <div className="w-full h-[380px] lg:h-[480px] glass-panel rounded-3xl p-6 relative overflow-hidden flex items-center justify-center border border-[#DCD9D2] shadow-sm bg-[#FAF8F5]">
      {/* Subtle warm ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B7A98F]/10 via-transparent to-transparent pointer-events-none" />

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
          <div className="w-full bg-[#F0ECE1] rounded-t-xl p-3 flex items-center justify-between border-b border-[#DCD9D2]">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#171717]/20 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#171717]/20 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#171717]/20 inline-block" />
            </div>
            <div className="bg-[#FAF8F5] px-4 py-1 rounded-full text-xs font-mono text-[#6F6F6A] flex items-center gap-2 border border-[#DCD9D2]">
              <Globe className="w-3 h-3 text-[#171717]" />
              kinetix-flagship.design
            </div>
            <div className="text-[10px] text-[#6F6F6A] font-mono">Bespoke UI</div>
          </div>

          <div className="flex-1 bg-[#FAF8F5] p-6 relative overflow-hidden flex flex-col justify-between border-x border-b border-[#DCD9D2] rounded-b-xl">
            <div className="space-y-4">
              <div className="h-7 w-2/3 bg-[#171717]/10 rounded" />
              <div className="h-3 w-1/3 bg-[#171717]/5 rounded" />
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="h-24 glass-panel rounded-xl p-3 flex flex-col justify-between border border-[#DCD9D2]">
                  <div className="w-5 h-5 rounded bg-[#171717]" />
                  <div className="h-2 w-3/4 bg-[#171717]/10 rounded" />
                </div>
                <div className="h-24 glass-panel rounded-xl p-3 flex flex-col justify-between border border-[#DCD9D2]">
                  <div className="w-5 h-5 rounded bg-[#B7A98F]" />
                  <div className="h-2 w-1/2 bg-[#171717]/10 rounded" />
                </div>
              </div>
            </div>
            <div className="text-xs font-mono text-[#6F6F6A] pt-4 border-t border-[#DCD9D2] flex justify-between">
              <span>Next.js 15 & React</span>
              <span className="text-[#171717] font-semibold">100/100 Lighthouse</span>
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
            <div className="absolute inset-0 rounded-2xl border border-[#B7A98F] glass-panel flex items-center justify-center transform rotate-45 shadow-sm">
              <Box className="w-12 h-12 text-[#171717] animate-spin" style={{ animationDuration: '18s' }} />
            </div>
            <div className="absolute inset-0 rounded-2xl border border-[#DCD9D2] glass-panel transform -rotate-12 translate-z-10">
              <Sparkles className="w-6 h-6 text-[#B7A98F] absolute top-3 right-3" />
            </div>
          </div>
          <div className="mt-8 text-center space-y-1">
            <p className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">WebGL & R3F</p>
            <p className="text-sm font-semibold text-[#171717]">Physical Glass & Camera Choreography</p>
          </div>
        </motion.div>
      )}

      {/* Service 03: AI & Automation */}
      {activeServiceId === 'ai-automation' && (
        <motion.div
          key="ai-automation"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex flex-col justify-between p-6 relative z-10"
        >
          <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#171717]" />
              <span className="font-mono text-xs text-[#171717] font-semibold">Autonomous Workflow Pipeline</span>
            </div>
            <span className="text-xs font-mono text-[#6F6F6A]">n8n & LLM API</span>
          </div>

          <div className="py-6 flex items-center justify-between px-4">
            <div className="w-14 h-14 rounded-2xl glass-panel border border-[#DCD9D2] flex items-center justify-center text-[#171717] shadow-sm">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#171717] to-[#B7A98F] mx-4 relative">
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-[#171717]" />
            </div>
            <div className="w-14 h-14 rounded-2xl glass-panel border border-[#DCD9D2] flex items-center justify-center text-[#B7A98F] shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#F0ECE1] p-4 rounded-xl border border-[#DCD9D2] space-y-2 text-xs font-mono text-[#6F6F6A]">
            <div className="flex justify-between">
              <span>Task Orchestration:</span>
              <span className="text-[#171717] font-medium">Active Node Execution</span>
            </div>
            <div className="flex justify-between">
              <span>Operational Efficiency:</span>
              <span className="text-[#171717] font-medium">Automated Data Retrieval</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Service 04: Web Applications */}
      {activeServiceId === 'web-applications' && (
        <motion.div
          key="web-applications"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex flex-col justify-between p-6 relative z-10"
        >
          <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-[#171717]" />
              <span className="font-mono text-xs text-[#171717] font-semibold">Software Architecture</span>
            </div>
            <span className="text-xs font-mono text-[#6F6F6A]">TypeScript API</span>
          </div>

          <div className="space-y-3 font-mono text-xs text-[#171717] bg-[#F0ECE1] p-4 rounded-xl border border-[#DCD9D2]">
            <div className="flex items-center gap-2 text-[#171717] font-semibold">
              <Terminal className="w-4 h-4 text-[#B7A98F]" />
              <span>const app = new KinetixAppEngine();</span>
            </div>
            <p className="text-[#6F6F6A] pl-6">// High Throughput Edge Infrastructure</p>
            <p className="text-[#171717] pl-6">{'await app.sync({ state: "REALTIME" });'}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="glass-panel p-3 rounded-xl border border-[#DCD9D2]">
              <div className="text-[#6F6F6A]">Latency</div>
              <div className="text-base font-bold text-[#171717] mt-1">&lt; 15ms</div>
            </div>
            <div className="glass-panel p-3 rounded-xl border border-[#DCD9D2]">
              <div className="text-[#6F6F6A]">Architecture</div>
              <div className="text-base font-bold text-[#171717] mt-1">Microservices</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Service 05: E-Commerce */}
      {activeServiceId === 'ecommerce' && (
        <motion.div
          key="ecommerce"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex flex-col justify-between p-6 relative z-10"
        >
          <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#171717]" />
              <span className="font-mono text-xs text-[#171717] font-semibold">Headless Digital Storefront</span>
            </div>
            <span className="text-xs font-mono text-[#6F6F6A]">Shopify & Custom Cart</span>
          </div>

          <div className="flex-1 flex items-center justify-between gap-4 py-4">
            <div className="w-1/2 h-full glass-panel rounded-xl p-4 flex flex-col justify-between border border-[#DCD9D2]">
              <div className="w-full h-24 bg-[#F0ECE1] rounded-lg flex items-center justify-center border border-[#DCD9D2]">
                <Box className="w-8 h-8 text-[#171717]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#171717]">3D Product Configurator</div>
                <div className="text-[10px] text-[#6F6F6A] font-mono">Real-time Rendering</div>
              </div>
            </div>

            <div className="w-1/2 space-y-3">
              <div className="glass-panel p-3 rounded-lg text-xs font-mono flex justify-between border border-[#DCD9D2]">
                <span className="text-[#6F6F6A]">Checkout Speed</span>
                <span className="text-[#171717] font-semibold">Instant</span>
              </div>
              <button className="w-full py-3 bg-[#171717] text-[#F5F3EE] font-bold text-xs rounded-xl uppercase tracking-wider hover:bg-[#26272B] transition-colors">
                PURCHASE EXPERIENCE
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Service 06: Digital Products */}
      {activeServiceId === 'digital-products' && (
        <motion.div
          key="digital-products"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex flex-col justify-between p-6 relative z-10"
        >
          <div className="flex items-center justify-between border-b border-[#DCD9D2] pb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#171717]" />
              <span className="font-mono text-xs text-[#171717] font-semibold">Product System Architecture</span>
            </div>
            <span className="text-xs font-mono text-[#6F6F6A]">End-to-End Design</span>
          </div>

          <div className="space-y-3 py-2">
            {['01 Discovery & Strategy', '02 Design System Architecture', '03 Full-Stack Engineering', '04 Global Launch'].map((step, idx) => (
              <div key={idx} className="glass-panel p-3 rounded-xl border border-[#DCD9D2] flex items-center justify-between text-xs font-mono">
                <span className="text-[#171717] font-medium">{step}</span>
                <span className="text-[#6F6F6A]">STAGE 0{idx + 1}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};
