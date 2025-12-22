'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const canOutput = [
  'Risk band (Low / Moderate / High)',
  'Confidence score',
  'Minimum next step',
  'Escalation triggers',
  'Safety notes',
];

const willNeverOutput = [
  'Disease diagnosis',
  'Disease labels to patients',
  'Treatment recommendations',
  'Medication suggestions',
  'Numerical lab values',
  'Definitive clinical conclusions',
];

export default function DecisionBoundariesSection() {
  return (
    <section id="decision-boundaries" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="08/18"
          label="MODULE: CLINICAL DECISION BOUNDARIES"
          title="Explicit Decision Boundaries"
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
                Live Corp enforces strict boundaries on what it will and will not output.
              </p>
              <p>
                The system is intentionally constrained to avoid unsafe extrapolation.
              </p>
            </div>
          </HUDPanel>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HUDPanel className="p-8 border-2 border-hud-glow-teal/50" withBrackets>
              <div className="mono text-xs text-hud-glow-teal mb-6">WHAT THE SYSTEM CAN OUTPUT</div>
              <ul className="space-y-3">
                {canOutput.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mono text-xs text-hud-glow-teal mt-1">✓</span>
                    <span className="text-sm text-hud-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </HUDPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HUDPanel className="p-8 border-2 border-hud-critical/50" withBrackets>
              <div className="mono text-xs text-hud-critical mb-6">WHAT THE SYSTEM WILL NEVER OUTPUT</div>
              <ul className="space-y-3">
                {willNeverOutput.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mono text-xs text-hud-critical mt-1">✗</span>
                    <span className="text-sm text-hud-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </HUDPanel>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <HUDPanel className="p-8 border-4 border-hud-critical/50" withBrackets>
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚠</div>
              <div className="flex-1">
                <div className="mono text-xs text-hud-critical mb-4">HARD SAFETY RULE</div>
                <p className="text-2xl font-semibold text-hud-text-primary mb-2">
                  If confidence &lt; threshold → ABSTAIN
                </p>
                <p className="text-sm text-hud-text-muted">
                  No reassurance. No optimization. No forced pathway.
                </p>
              </div>
            </div>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

