import React from 'react';
import { motion } from 'framer-motion';

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-radial-vignette" />

      {/* Floating Ambient Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] left-[15%] w-[550px] h-[550px] rounded-full bg-purple-600/15 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 40, 0],
          scale: [0.95, 1.08, 1, 0.95],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[10%] left-[30%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px]"
      />
    </div>
  );
}
