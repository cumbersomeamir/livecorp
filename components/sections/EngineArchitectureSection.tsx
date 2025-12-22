'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stages = [
  {
    id: 'inputs',
    title: 'Inputs Layer',
    items: [
      'Phone camera',
      'Microphone',
      'Wearables',
      'Vitals',
      'Dipsticks',
      'Structured symptoms',
    ],
  },
  {
    id: 'validation',
    title: 'Signal Validation',
    items: [
      'Capture guidance',
      'Noise rejection',
      'Confidence scoring',
      'Abstain if low quality',
    ],
  },
  {
    id: 'fusion',
    title: 'Multimodal Fusion',
    items: [
      'Probability fusion',
      'Rule-constrained ML',
      'Confidence thresholds',
      'Robust to missing data',
    ],
  },
  {
    id: 'output',
    title: 'Output Layer',
    items: [
      'Risk band (Low/Moderate/High)',
      'Confidence score',
      'Minimum next step',
      'Safety notes',
      'Escalation triggers',
    ],
  },
];

export default function EngineArchitectureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      stages.forEach((stage, index) => {
        const element = stageRefs.current[index];
        if (!element) return;

        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="engine" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <SectionHeader
          sectionId="06/10"
          label="MODULE: ENGINE ARCHITECTURE"
          title="The Test-Minimization Engine"
          subtitle="A scrolling narrative of how inputs become safe decisions."
        />

        <div className="mt-16 space-y-12">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              ref={(el) => {
                stageRefs.current[index] = el;
              }}
              className="relative"
            >
              {/* Connection Line */}
              {index > 0 && (
                <div className="absolute left-8 top-0 w-0.5 h-12 bg-hud-line-primary opacity-30" />
              )}

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="mono text-xs text-hud-glow-cyan w-24 flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <HUDPanel className="p-8" withBrackets glow={index === stages.length - 1 ? 'teal' : 'none'}>
                    <h3 className="text-2xl font-semibold mb-6 text-hud-text-primary">{stage.title}</h3>
                    <ul className="space-y-3">
                      {stage.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                          <span className="text-hud-text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </HUDPanel>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <HUDPanel className="p-6" withScanline>
            <p className="mono text-xs text-hud-text-muted text-center">
              No diagnosis labels shown to patients.
            </p>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

