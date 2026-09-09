import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { playHoverSound, playClickSound } from '../../utils/audio';

interface MarqueeSectionProps {
  onProjectClick?: () => void;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ onProjectClick }) => {
  const marqueeItems = [
    { text: 'NĀṬYAŚĀSTRA GURUKULAM (नाट्यशास्त्र गुरुकुलम्)', tag: 'STATECRAFT PORTAL', highlight: true, url: 'https://www.natyasastragurukulam.org/' },
    { text: 'RENUKA TOUR & TRAVELS', tag: 'PORTAL', highlight: true, url: 'https://renukatourandtravels.com/' },
    { text: 'MHATRE TRADERS', tag: 'B2B PLATFORM', highlight: true, url: 'https://mhatretraders.com/' },
    { text: '3D WEBGL GRAPHICS', tag: 'EXPERIENCE', highlight: false },
    { text: 'AI & AUTOMATION PIPELINES', tag: 'SYSTEMS', highlight: false },
    { text: 'BESPOKE DIGITAL FLAGSHIPS', tag: 'DESIGN', highlight: false },
  ];

  return (
    <section className="w-full relative z-20 border-y border-[#DCD9D2] bg-[#FAF8F5] py-7 overflow-hidden">
      {/* Top Subtle Label */}
      <div className="max-w-7xl mx-auto px-8 pb-3 flex items-center justify-between text-[11px] font-mono text-[#6F6F6A] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B7A98F]" />
          <span>PRODUCTION CLIENTS & CAPABILITIES</span>
        </div>
        <div className="hidden sm:block text-[10px] text-[#B7A98F]">
          ENTERPRISE ARCHITECTURE
        </div>
      </div>

      {/* Infinite Horizontal Sliding Marquee */}
      <div className="w-full overflow-hidden whitespace-nowrap group">
        <div className="inline-flex animate-marquee group-hover:[animation-play-state:paused] gap-8 items-center text-xl sm:text-3xl font-semibold font-display tracking-tight text-[#171717]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-4">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#171717] text-[#F5F3EE] hover:bg-[#B7A98F] hover:text-[#171717] transition-all duration-300 shadow-sm font-display"
                >
                  <span>{item.text}</span>
                  <span className="text-[10px] font-mono bg-[#FAF8F5]/20 px-2 py-0.5 rounded text-[#B7A98F] group-hover:text-[#171717]">
                    {item.tag}
                  </span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    if (onProjectClick) onProjectClick();
                  }}
                  onMouseEnter={playHoverSound}
                  className="inline-flex items-center gap-3 text-[#171717]/80 hover:text-[#171717] transition-colors text-left"
                >
                  <span>{item.text}</span>
                  <span className="text-xs font-mono text-[#6F6F6A] border border-[#DCD9D2] px-2 py-0.5 rounded bg-[#F5F3EE]">
                    {item.tag}
                  </span>
                </button>
              )}

              <span className="text-[#B7A98F] text-lg font-serif">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
