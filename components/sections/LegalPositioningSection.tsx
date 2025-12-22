'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const isNot = [
  'Not an autonomous medical device',
  'Not a diagnostic tool',
  'Not a treatment system',
];

const isDesigned = [
  'Support clinician judgment',
  'Improve ordering decisions',
  'Reduce unnecessary diagnostics',
];

export default function LegalPositioningSection() {
  return (
    <section id="legal-positioning" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="15/18"
          label="MODULE: REGULATORY POSITIONING"
          title="Regulatory Positioning"
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
                Live Corp is a pre-diagnostic decision support system.
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
            <HUDPanel className="p-8 border-2 border-hud-critical/50" withBrackets>
              <div className="mono text-xs text-hud-critical mb-6">IT IS:</div>
              <ul className="space-y-3">
                {isNot.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mono text-xs text-hud-critical mt-1">✗</span>
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
            <HUDPanel className="p-8 border-2 border-hud-glow-teal/50" withBrackets>
              <div className="mono text-xs text-hud-glow-teal mb-6">IT IS DESIGNED TO:</div>
              <ul className="space-y-3">
                {isDesigned.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mono text-xs text-hud-glow-teal mt-1">✓</span>
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
          <HUDPanel className="p-8" withBrackets>
            <p className="text-center text-lg text-hud-text-muted">
              All outputs are advisory and subject to human review.
            </p>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

