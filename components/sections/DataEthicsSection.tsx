'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const principles = [
  'Collect only what is required',
  'Process only for stated purpose',
  'Retain only as long as needed',
  'Delete on request',
  'Never monetize patient data',
];

const safeguards = [
  'No diagnosis language',
  'No fear-based outputs',
  'No hidden escalation',
  'Clear next-step framing',
];

export default function DataEthicsSection() {
  return (
    <section id="data-ethics" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="12/18"
          label="MODULE: DATA ETHICS"
          title="Data Ethics and Patient Protection"
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
                Live Corp follows a data minimization philosophy.
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
            <HUDPanel className="p-8" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-6">PRINCIPLES</div>
              <ul className="space-y-3">
                {principles.map((item, i) => (
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
            <HUDPanel className="p-8" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-6">PATIENT-FACING SAFEGUARDS</div>
              <ul className="space-y-3">
                {safeguards.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mono text-xs text-hud-glow-teal mt-1">✓</span>
                    <span className="text-sm text-hud-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </HUDPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

