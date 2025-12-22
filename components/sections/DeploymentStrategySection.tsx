'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const components = [
  { component: 'ECG models', cpu: '✓', gpu: 'Optional', edge: '✓' },
  { component: 'Audio analysis', cpu: '✓', gpu: 'Optional', edge: '✓' },
  { component: 'Vision screening', cpu: '✓', gpu: 'Optional', edge: '✓' },
  { component: 'Risk fusion', cpu: '✓', gpu: '—', edge: '✓' },
  { component: 'Imaging gateway', cpu: 'Optional', gpu: '✓', edge: '—' },
];

const deploymentSettings = [
  'OPDs',
  'Clinics',
  'Mobile vans',
  'Rural health settings',
];

export default function DeploymentStrategySection() {
  return (
    <section id="deployment-strategy" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="11/18"
          label="MODULE: CPU-FIRST DEPLOYMENT"
          title="Built for Real-World Infrastructure"
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
                Live Corp is designed to run in resource-constrained environments.
              </p>
              <div className="pt-4 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-glow-cyan mb-4">DEPLOYMENT PRINCIPLES</div>
                <div className="grid md:grid-cols-2 gap-4">
                  {['CPU-first inference', 'Edge-capable workflows', 'Offline-tolerant capture', 'Cloud optional, not mandatory'].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mono text-xs text-hud-glow-teal mt-1">✓</span>
                      <span className="text-sm">{item}</span>
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
          <HUDPanel className="p-8" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-6">HARDWARE COMPATIBILITY</div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-hud-line-primary">
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Component</th>
                    <th className="text-center py-3 px-4 mono text-xs text-hud-glow-cyan">CPU</th>
                    <th className="text-center py-3 px-4 mono text-xs text-hud-glow-cyan">GPU</th>
                    <th className="text-center py-3 px-4 mono text-xs text-hud-glow-cyan">Edge</th>
                  </tr>
                </thead>
                <tbody>
                  {components.map((item, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30 transition-colors"
                    >
                      <td className="py-4 px-4 mono text-sm text-hud-text-primary font-semibold">{item.component}</td>
                      <td className="py-4 px-4 text-center text-sm text-hud-glow-teal">{item.cpu}</td>
                      <td className="py-4 px-4 text-center text-sm text-hud-text-muted">{item.gpu}</td>
                      <td className="py-4 px-4 text-center text-sm text-hud-glow-teal">{item.edge}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-6 border-t border-hud-line-secondary">
              <div className="mono text-xs text-hud-glow-cyan mb-4">THIS ENABLES DEPLOYMENT IN:</div>
              <div className="grid md:grid-cols-2 gap-3">
                {deploymentSettings.map((setting, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="mono text-xs text-hud-glow-teal">→</span>
                    <span className="text-sm text-hud-text-muted">{setting}</span>
                  </div>
                ))}
              </div>
            </div>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

