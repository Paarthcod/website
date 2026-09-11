import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center border transition-all duration-150 ease-out hidden md:flex"
      animate={{
        x: mousePosition.x - (isHovered ? 45 : 8),
        y: mousePosition.y - (isHovered ? 45 : 8),
        width: isHovered ? 90 : 16,
        height: isHovered ? 90 : 16,
        backgroundColor: isHovered ? 'rgba(36, 35, 33, 0.92)' : 'rgba(115, 117, 101, 0.6)',
        borderColor: isHovered ? '#9A8064' : '#B8B3A9',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
    >
      {isHovered && (
        <span className="text-[9px] font-mono font-bold text-[#F4F1EA] tracking-wider uppercase text-center px-1">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
