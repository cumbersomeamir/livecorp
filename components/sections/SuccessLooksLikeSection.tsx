'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const successMetrics = [
  'Fewer unnecessary tests',
  'Earlier escalation of true risk',
  'Lower financial burden on patients',
  'Increased clinician confidence',
  'Higher trust in care pathways',
];

export default function SuccessLooksLikeSection() {
  return (
    <section id="success" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="14/18"
          label="MODULE: SUCCESS DEFINITION"
          title="Defining Success"
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
                Success is not higher detection counts.
              </p>
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
            <div className="mono text-xs text-hud-glow-teal mb-6">SUCCESS IS:</div>
            <div className="space-y-4">
              {successMetrics.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span className="text-lg text-hud-text-primary">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-hud-line-secondary">
              <p className="text-sm text-hud-text-muted text-center">
                Live Corp measures success by what is avoided safely, not what is detected.
              </p>
            </div>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

