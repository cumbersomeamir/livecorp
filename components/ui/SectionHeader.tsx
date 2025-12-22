'use client';

import { ReactNode } from 'react';

interface SectionHeaderProps {
  sectionId: string;
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  sectionId,
  label,
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-4 mb-2">
        <span className="mono text-xs text-hud-text-muted">{sectionId}</span>
        <span className="microcopy">{label}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-semibold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-lg text-hud-text-muted max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}

