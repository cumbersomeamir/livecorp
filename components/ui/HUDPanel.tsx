'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HUDPanelProps {
  children: ReactNode;
  className?: string;
  withBrackets?: boolean;
  withScanline?: boolean;
  glow?: 'cyan' | 'teal' | 'red' | 'none';
  onClick?: () => void;
}

export default function HUDPanel({
  children,
  className = '',
  withBrackets = false,
  withScanline = false,
  glow = 'none',
  onClick,
}: HUDPanelProps) {
  const glowClass = 
    glow === 'cyan' ? 'shadow-hud-glow' : 
    glow === 'teal' ? 'shadow-hud-glow-teal' : 
    glow === 'red' ? 'shadow-hud-glow-red' : 
    '';
  
  return (
    <motion.div
      className={`hud-panel ${glowClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onClick={onClick}
    >
      {withScanline && (
        <div className="scan-line" aria-hidden="true" />
      )}
      {withBrackets && (
        <div className="hud-brackets" aria-hidden="true" />
      )}
      {children}
    </motion.div>
  );
}

