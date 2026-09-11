import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 500);
          }, 150);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 18) + 8;
        return next > 100 ? 100 : next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 bg-[#F4F1EA] flex flex-col justify-between p-8 lg:p-16 select-none"
        >
          <div className="flex justify-between items-center text-xs font-mono text-[#918B80]">
            <span className="text-[#242321] font-semibold tracking-widest">KINETIX STUDIO</span>
            <span>SYSTEM INITIALIZING</span>
          </div>

          <div className="my-auto space-y-6 max-w-4xl">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#242321] font-display"
              >
                INFRASTRUCTURE FOR DIGITAL GROWTH<span className="text-[#9A8064]">.</span>
              </motion.h1>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex-1 h-0.5 bg-[#B8B3A9]/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#737565] transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-xl font-medium text-[#9A8064] min-w-[60px] text-right">
                {progress}%
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs font-mono text-[#918B80]">
            <span>QUIET LUXURY // CRAZY INTERACTION</span>
            <span>VOL. 2026 PRIVATE DISTRIBUTION</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
