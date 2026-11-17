import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision small dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-cyan-400"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.1,
        }}
      />

      {/* Smooth outer follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-purple-400/50 bg-purple-500/10 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.8)' : 'rgba(168, 85, 247, 0.45)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.12)' : 'rgba(168, 85, 247, 0.05)',
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.2,
        }}
      />
    </>
  );
}
