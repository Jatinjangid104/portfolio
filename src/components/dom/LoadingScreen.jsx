"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePortfolioStore } from "@/store";
import { COLORS } from "@/lib/design-tokens"; // FIXED: Import the COLORS object

const BOOT_LINES = [
  "[INIT] gsap-config :: ScrollTrigger registered",
  "[INIT] lenis-config :: RAF synchronized",
  "[INIT] store :: schema validated",
  "[READY] Launching experience",
];

const containerVariants = {
  animate: { transition: { staggerChildren: 0.35 } },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const lineVariants = {
  initial: { opacity: 0, x: -12 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const LoadingScreen = () => {
  const isLoaded = usePortfolioStore((s) => s.isLoaded);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="loading-screen"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: COLORS.void, // FIXED: Use COLORS.void
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 clamp(2rem, 8vw, 8rem)",
            pointerEvents: "auto",
          }}
        >
          {BOOT_LINES.map((line, i) => (
            <motion.p
              key={i}
              variants={lineVariants}
              style={{
                color: COLORS.neon_cyan, // FIXED: Use COLORS.neon_cyan
                fontFamily: "monospace",
                fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                margin: "0.35em 0",
                letterSpacing: "0.04em",
              }}
            >
              {line} {/* FIXED: Actually render the text */}
            </motion.p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};