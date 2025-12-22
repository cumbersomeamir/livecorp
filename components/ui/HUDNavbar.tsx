'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HUDNavbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-hud-bg-primary/80 backdrop-blur-hud border-b border-hud-line-secondary"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="mono text-sm font-semibold text-hud-glow-cyan">
              LIVE CORP
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#problem" className="mono text-xs text-hud-text-muted hover:text-hud-text-primary transition-colors">
                PROBLEM
              </a>
              <a href="#philosophy" className="mono text-xs text-hud-text-muted hover:text-hud-text-primary transition-colors">
                PHILOSOPHY
              </a>
              <a href="#engine" className="mono text-xs text-hud-text-muted hover:text-hud-text-primary transition-colors">
                ENGINE
              </a>
              <a href="#wings" className="mono text-xs text-hud-text-muted hover:text-hud-text-primary transition-colors">
                WINGS
              </a>
              <a href="#safety" className="mono text-xs text-hud-text-muted hover:text-hud-text-primary transition-colors">
                SAFETY
              </a>
            </div>
          </div>
          <div className="mono text-xs text-hud-text-muted">
            {Math.floor(scrollY)}px
          </div>
        </div>
      </div>
      <div className="scan-line" aria-hidden="true" />
    </motion.nav>
  );
}

