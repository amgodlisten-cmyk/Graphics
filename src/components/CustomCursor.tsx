import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

interface CustomCursorProps {
  accentColor: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ accentColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for cursor trailing effect
  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });

  const dotX = useSpring(0, { damping: 40, stiffness: 800 });
  const dotY = useSpring(0, { damping: 40, stiffness: 800 });

  useEffect(() => {
    // Detect touch device or reduced motion
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (touchCheck || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer');
      setIsHovering(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer subtle halo ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border transition-transform duration-150 ease-out"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: accentColor,
          width: isHovering ? 48 : 28,
          height: isHovering ? 48 : 28,
          backgroundColor: isHovering ? `${accentColor}1A` : 'transparent',
          boxShadow: isHovering ? `0 0 20px ${accentColor}40` : 'none',
        }}
      />
      {/* Precision inner center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 4,
          height: 4,
          backgroundColor: accentColor,
        }}
      />
    </>
  );
};
