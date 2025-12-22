'use client';

import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section id="vision" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mono text-xs text-hud-glow-teal mb-4">16/18 • MODULE: VISION</div>
            <h2 className="text-5xl font-bold mb-6">Clarity Precedes Cost</h2>
            <div className="space-y-6 text-lg text-hud-text-muted">
              <p>
                Live Corp does not attempt to replace medicine.
                It exists to remove waste, uncertainty, and unnecessary cost before diagnostics begin.
              </p>
              <p className="text-xl font-semibold text-hud-text-primary">
                Clarity precedes cost.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center min-h-[400px]"
          >
            {/* Rotating Ring Visualization */}
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border-2 border-hud-glow-teal/30 rounded-full animate-spin" style={{ animationDuration: '25s' }} />
              <div className="absolute inset-4 border-2 border-hud-glow-cyan/50 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              <div className="absolute inset-8 border border-hud-glow-teal/40 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
