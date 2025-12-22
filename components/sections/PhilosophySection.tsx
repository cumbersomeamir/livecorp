'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';
import RadialDial from '../ui/RadialDial';

const modes = [
  { label: 'RULE-OUT', value: 33.3, color: '#34F5C5' },
  { label: 'MINIMAL PANEL', value: 33.3, color: '#2DE2FF' },
  { label: 'ESCALATION', value: 33.3, color: '#FFB020' },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="03/10"
          label="MODULE: CORE PHILOSOPHY"
          title="Test Minimization = Safe Decision Framing"
          subtitle="Operating before diagnostics influences ordering behavior."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Left: Detection-First AI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HUDPanel className="p-8" withBrackets>
              <div className="mono text-xs text-hud-warning mb-4">DETECTION-FIRST AI</div>
              <h3 className="text-2xl font-semibold mb-4">Sits alongside tests</h3>
              <p className="text-hud-text-muted mb-4">
                Traditional AI systems analyze test results after they are ordered. They detect patterns in existing data but do not prevent unnecessary testing.
              </p>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Analyzes post-test results</li>
                <li>• Does not reduce test volume</li>
                <li>• Adds computational overhead</li>
              </ul>
            </HUDPanel>
          </motion.div>

          {/* Right: Decision Framing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HUDPanel className="p-8" withBrackets glow="teal">
              <div className="mono text-xs text-hud-glow-teal mb-4">DECISION FRAMING (LIVE CORP)</div>
              <h3 className="text-2xl font-semibold mb-4">Before tests</h3>
              <p className="text-hud-text-muted mb-4">
                Live Corp operates in the pre-diagnostic space, using low-cost inputs to frame decisions before expensive tests are ordered.
              </p>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Operates before test ordering</li>
                <li>• Reduces unnecessary test volume</li>
                <li>• Influences clinician behavior</li>
              </ul>
            </HUDPanel>
          </motion.div>
        </div>

        {/* Tri-Radial Dial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-col items-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Three Operating Modes</h3>
          <div className="relative">
            <RadialDial segments={modes} size={300} strokeWidth={12}>
              <div className="text-center">
                <div className="mono text-xs text-hud-text-muted mb-2">MODE SELECTION</div>
                <div className="text-sm text-hud-text-primary">Based on risk assessment</div>
              </div>
            </RadialDial>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 w-full max-w-3xl">
            {modes.map((mode, index) => (
              <HUDPanel key={index} className="p-4 text-center">
                <div className="mono text-xs mb-2" style={{ color: mode.color }}>
                  {mode.label}
                </div>
                <p className="text-xs text-hud-text-muted">
                  {index === 0 && 'Low-risk, no immediate test'}
                  {index === 1 && 'Smallest cheapest highest-yield test'}
                  {index === 2 && 'Red flags, urgent care'}
                </p>
              </HUDPanel>
            ))}
          </div>
        </motion.div>

        {/* Hard Rule Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <HUDPanel className="p-8 border-2 border-hud-critical/50" glow="none">
            <div className="mono text-xs text-hud-critical mb-4">HARD RULE</div>
            <p className="text-xl font-semibold text-hud-text-primary">
              If uncertainty is high: ABSTAIN. Recommend clinician evaluation. No forced reassurance.
            </p>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

