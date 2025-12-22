'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const testCategories = [
  {
    category: 'ECG',
    typicalUse: 'Routine screening for low-risk symptoms',
    intervention: 'Pre-screen via signal analysis',
    result: 'ECG deferred unless risk elevated',
  },
  {
    category: 'Chest X-ray',
    typicalUse: 'Mild respiratory symptoms',
    intervention: 'Audio + vitals triage',
    result: 'Imaging only if flagged',
  },
  {
    category: 'CBC',
    typicalUse: 'Broad screening',
    intervention: 'Risk-based anemia pre-screen',
    result: 'CBC only when indicated',
  },
  {
    category: 'Urine Culture',
    typicalUse: 'Uncomplicated urinary symptoms',
    intervention: 'Dipstick interpretation',
    result: 'Culture avoided in low-risk cases',
  },
  {
    category: 'Sleep Study',
    typicalUse: 'Fatigue/snoring',
    intervention: 'Audio + questionnaire stratification',
    result: 'Lab study only for high risk',
  },
  {
    category: 'CT/MRI',
    typicalUse: 'Defensive imaging',
    intervention: 'Escalation-only gateway',
    result: 'Imaging optimized, not expanded',
  },
];

export default function WhatReplacesSection() {
  return (
    <section id="what-replaces" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="07/18"
          label="MODULE: WHAT LIVE CORP REPLACES"
          title="What Live Corp Replaces"
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
                Live Corp is not positioned as a disease detection system.
              </p>
              <p>
                Its primary value is replacing unnecessary or premature diagnostic actions with structured pre-diagnostic decision framing.
              </p>
              <div className="pt-6 border-t border-hud-line-secondary">
                <p className="text-sm">
                  The system does not replace clinicians, laboratories, or imaging departments.
                  It replaces low-yield decision moments that trigger unnecessary cost.
                </p>
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
            <div className="mono text-xs text-hud-glow-cyan mb-6">TEST CATEGORIES REDUCED OR DEFERRED</div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-hud-line-primary">
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Test Category</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Typical Use Today</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Live Corp Intervention</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {testCategories.map((item, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30 transition-colors"
                    >
                      <td className="py-4 px-4 mono text-sm text-hud-text-primary font-semibold">{item.category}</td>
                      <td className="py-4 px-4 text-sm text-hud-text-muted">{item.typicalUse}</td>
                      <td className="py-4 px-4 text-sm text-hud-glow-teal">{item.intervention}</td>
                      <td className="py-4 px-4 text-sm text-hud-text-muted">{item.result}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-6 border-t border-hud-line-secondary">
              <p className="mono text-xs text-hud-warning text-center">
                Live Corp reduces test initiation, not test interpretation.
              </p>
            </div>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

