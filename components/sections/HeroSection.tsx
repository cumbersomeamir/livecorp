'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import TestMinimizationEngine from '../3d/TestMinimizationEngine';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mono text-xs text-hud-glow-teal mb-4">SYSTEM STATUS: ACTIVE</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-hud-text-primary">
              LIVE CORP
            </h1>
            <div className="mono text-xl text-hud-glow-cyan mb-6">Clarity before cost.</div>
            <p className="text-lg text-hud-text-muted mb-8 max-w-xl">
              Pre-diagnostic decision support that reduces unnecessary tests using clinically validated machine learning.
            </p>
            <p className="text-sm text-hud-text-muted mb-8 italic">
              Not a diagnosis. Not treatment. Designed to abstain when uncertain.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-hud-glow-cyan/20 border border-hud-glow-cyan text-hud-glow-cyan mono text-sm font-semibold hover:bg-hud-glow-cyan/30 transition-colors"
              >
                Try Pre-Screening Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-hud-line-primary text-hud-text-primary mono text-sm font-semibold hover:bg-hud-panel transition-colors"
              >
                Request Clinic Demo
              </motion.button>
            </div>

            {/* System Status Cluster */}
            <HUDPanel className="p-4 mt-8" withBrackets>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between">
                  <span className="mono text-xs text-hud-text-muted">MODE:</span>
                  <span className="mono text-xs text-hud-glow-teal">RULE-OUT / MINIMAL PANEL / ESCALATION</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="mono text-xs text-hud-text-muted">POLICY:</span>
                  <span className="mono text-xs text-hud-glow-teal">ABSTAIN-WHEN-UNCERTAIN</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="mono text-xs text-hud-text-muted">OUTPUT:</span>
                  <span className="mono text-xs text-hud-glow-teal">RISK BAND + CONFIDENCE + NEXT STEP</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="mono text-xs text-hud-text-muted">PRIVACY:</span>
                  <span className="mono text-xs text-hud-glow-teal">HIPAA-READY • DPDP • GDPR • SOC2 ROADMAP</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-hud-line-secondary">
                <p className="mono text-xs text-hud-text-muted">Illustrative UI — not medical advice.</p>
              </div>
            </HUDPanel>
          </motion.div>

          {/* Right: 3D Engine */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HUDPanel className="p-6" withScanline glow="cyan">
              <TestMinimizationEngine />
            </HUDPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
