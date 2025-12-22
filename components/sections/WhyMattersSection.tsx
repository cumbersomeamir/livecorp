'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const problems = [
  'Financial harm',
  'Anxiety',
  'Delay',
  'Resource exhaustion',
];

const addresses = [
  'Over-testing in OPDs',
  'Defensive ordering',
  'Lab and imaging overload',
  'Low diagnostic yield workflows',
];

const outcomes = [
  'Lower patient cost',
  'Faster clinical decisions',
  'Reduced congestion',
  'Better allocation of diagnostic capacity',
];

export default function WhyMattersSection() {
  return (
    <section id="why-matters" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="13/18"
          label="MODULE: SYSTEM-LEVEL IMPACT"
          title="Why Test Minimization Matters"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <HUDPanel className="p-8" withBrackets>
            <div className="space-y-6">
              <div>
                <div className="mono text-xs text-hud-warning mb-4">UNNECESSARY TESTING CREATES:</div>
                <div className="grid md:grid-cols-2 gap-3">
                  {problems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mono text-xs text-hud-warning mt-1">→</span>
                      <span className="text-sm text-hud-text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-glow-teal mb-4">LIVE CORP ADDRESSES:</div>
                <div className="grid md:grid-cols-2 gap-3">
                  {addresses.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mono text-xs text-hud-glow-teal mt-1">✓</span>
                      <span className="text-sm text-hud-text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </HUDPanel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <HUDPanel className="p-8 border-2 border-hud-glow-teal/50" withBrackets>
            <div className="mono text-xs text-hud-glow-teal mb-6">SYSTEM-LEVEL OUTCOMES</div>
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                  <span className="text-sm text-hud-text-primary font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

