'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const performanceData = [
  {
    useCase: 'ECG arrhythmia screening',
    performance: '95–99% sensitivity',
    role: 'Rule-out',
  },
  {
    useCase: 'TB / pneumonia triage',
    performance: '85–95% AUC',
    role: 'Pre-screen',
  },
  {
    useCase: 'Anemia risk screening',
    performance: '80–90% sensitivity',
    role: 'Panel minimization',
  },
  {
    useCase: 'Dipstick interpretation',
    performance: '90%+ agreement',
    role: 'Lab avoidance',
  },
  {
    useCase: 'Sleep apnea risk',
    performance: '75–85% AUC',
    role: 'Referral gating',
  },
];

export default function AccuracyPerformanceSection() {
  return (
    <section id="accuracy-performance" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="10/18"
          label="MODULE: ACCURACY & PERFORMANCE"
          title="Accuracy, Performance, and Reality"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <HUDPanel className="p-8" withBrackets>
            <div className="space-y-6 text-hud-text-muted">
              <p className="text-lg">
                Live Corp does not claim perfect accuracy.
              </p>
              <p>
                Performance varies by:
              </p>
              <div className="grid md:grid-cols-2 gap-4 pl-6">
                {['Input quality', 'Population', 'Use case', 'Risk threshold'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
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
          <HUDPanel className="p-8" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-6">REAL-WORLD PERFORMANCE RANGES</div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-hud-line-primary">
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Use Case</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Typical Performance Range</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((item, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30 transition-colors"
                    >
                      <td className="py-4 px-4 mono text-sm text-hud-text-primary font-semibold">{item.useCase}</td>
                      <td className="py-4 px-4 text-sm text-hud-glow-teal">{item.performance}</td>
                      <td className="py-4 px-4 text-sm text-hud-text-muted">{item.role}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-6 border-t border-hud-line-secondary">
              <p className="text-sm text-hud-text-muted text-center">
                These models are assistive, not definitive.
                Performance is improved through multimodal fusion, not single-signal reliance.
              </p>
            </div>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

