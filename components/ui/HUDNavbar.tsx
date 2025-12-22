'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HUDNavbar() {
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/trust', label: 'TRUST' },
    { href: '/clinics', label: 'CLINICS' },
    { href: '/patients', label: 'PATIENTS' },
    { href: '/developers', label: 'DEVELOPERS' },
    { href: '/contact', label: 'CONTACT' },
  ];

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
            <Link href="/" className="mono text-sm font-semibold text-hud-glow-cyan hover:text-hud-glow-teal transition-colors">
              LIVE CORP
            </Link>
            <div className="hidden lg:flex items-center gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mono text-xs transition-colors ${
                      isActive
                        ? 'text-hud-glow-cyan'
                        : 'text-hud-text-muted hover:text-hud-text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mono text-xs text-hud-text-muted hidden md:block">
            {Math.floor(scrollY)}px
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="mono text-xs text-hud-text-muted">
              MENU
            </button>
          </div>
        </div>
      </div>
      <div className="scan-line" aria-hidden="true" />
    </motion.nav>
  );
}

