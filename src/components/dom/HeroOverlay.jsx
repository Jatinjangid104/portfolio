"use client";

import { useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { usePortfolioStore } from '@/store';
import { NEON_CYAN, CHROME } from '@/lib/design-tokens';

export const HeroOverlay = () => {
  const scrollProgress = usePortfolioStore((state) => state.scrollProgress);
  const motionProgress = useMotionValue(0);

  // Synchronize the raw number to the MotionValue
  useEffect(() => {
    motionProgress.set(scrollProgress);
  }, [scrollProgress, motionProgress]);

  // FIX: useTransform now watches 'motionProgress' (the object), NOT 'scrollProgress' (the number)
  const opacity = useTransform(motionProgress, [0, 0.15], [1, 0]);
  const y = useTransform(motionProgress, [0, 0.15], [0, -100]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
    >
      <h1 
        className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none"
        style={{ color: NEON_CYAN, textShadow: `0 0 30px ${NEON_CYAN}66` }}
      >
        JATIN JANGID
      </h1>
      
      <h2 
        className="text-lg md:text-xl font-mono tracking-[0.3em] mt-4 opacity-80"
        style={{ color: CHROME }}
      >
        SENIOR DATA ENGINEER | 0.1% ARCHITECT
      </h2>

      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '300px' }}
        transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
        className="h-[1px] mt-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />
    </motion.div>
  );
};
