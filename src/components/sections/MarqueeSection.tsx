import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { playHoverSound, playClickSound } from '../../utils/audio';

interface MarqueeSectionProps {
  onProjectClick?: () => void;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ onProjectClick }) => {
  const marqueeItems = [
    { text: 'RENUKA TOUR & TRAVELS', tag: 'PORTAL', highlight: true, url: 'https://www.renukatourandtravels.com/' },
    { text: 'MHATRE TRADERS', tag: 'B2B CATALOG', highlight: true, url: 'https://www.mhatretraders.com/' },
    { text: 'NĀṬYAŚĀSTRA GURUKULAM', tag: 'CULTURAL INSTITUTION', highlight: true, url: 'https://natyasastragurukulam.org/' },
    { text: '3D WEBGL GRAPHICS', tag: 'EXPERIENCE', highlight: false },
    { text: 'AI & AUTOMATION PIPELINES', tag: 'SYSTEMS', highlight: false },
    { text: 'BESPOKE DIGITAL ASSETS', tag: 'ENGINEERING', highlight: false },
  ];

  return (
    <section className="w-full relative z-20 border-y border-[#B8B3A9]/50 bg-[#E5E1D8] py-6 overflow-hidden">
      {/* Top Label */}
      <div className="max-w-7xl mx-auto px-8 pb-3 flex items-center justify-between text-[11px] font-mono text-[#737565] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#9A8064]" />
          <span>REAL PRODUCTION CLIENTS & ASSETS</span>
        </div>
        <div className="hidden sm:block text-[10px] text-[#9A8064]">
          QUIET LUXURY ENGINE
        </div>
      </div>

      {/* Infinite Horizontal Sliding Marquee */}
      <div className="w-full overflow-hidden whitespace-nowrap group">
        <div className="inline-flex animate-marquee group-hover:[animation-play-state:paused] gap-8 items-center text-xl sm:text-2xl font-semibold font-display tracking-tight text-[#242321]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-4">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#242321] text-[#F4F1EA] hover:bg-[#737565] transition-all duration-300 shadow-sm font-display text-sm"
                >
                  <span>{item.text}</span>
                  <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded text-[#9A8064]">
                    {item.tag}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    if (onProjectClick) onProjectClick();
                  }}
                  onMouseEnter={playHoverSound}
                  className="inline-flex items-center gap-3 text-[#242321]/80 hover:text-[#242321] transition-colors text-left"
                >
                  <span>{item.text}</span>
                  <span className="text-xs font-mono text-[#918B80] border border-[#B8B3A9]/60 px-2 py-0.5 rounded bg-[#F4F1EA]">
                    {item.tag}
                  </span>
                </button>
              )}

              <span className="text-[#9A8064] text-base font-serif">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
