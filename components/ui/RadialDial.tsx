'use client';

import { ReactNode } from 'react';

interface RadialDialProps {
  segments: Array<{
    label: string;
    value: number;
    color?: string;
  }>;
  size?: number;
  strokeWidth?: number;
  className?: string;
  children?: ReactNode;
}

export default function RadialDial({
  segments,
  size = 200,
  strokeWidth = 8,
  className = '',
  children,
}: RadialDialProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let currentOffset = 0;

  return (
    <div className={`radial-dial ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {segments.map((segment, index) => {
          const segmentLength = (segment.value / 100) * circumference;
          const offset = currentOffset;
          currentOffset += segmentLength;

          return (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={segment.color || 'rgba(120, 180, 255, 0.3)'}
              strokeWidth={strokeWidth}
              strokeDasharray={segmentLength}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          );
        })}
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

