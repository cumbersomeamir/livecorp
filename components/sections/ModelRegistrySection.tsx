'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const models = [
  {
    domain: 'Cardiac',
    task: 'ECG arrhythmia',
    model: 'PTB-XL benchmarking models',
    type: 'Open-source',
  },
  {
    domain: 'Cardiac',
    task: 'Arrhythmia classification',
    model: 'MIT-BIH CNN classifiers',
    type: 'Open-source',
  },
  {
    domain: 'Cardiac',
    task: 'Heart sound analysis',
    model: 'PhysioNet 2022 challenge models',
    type: 'Open-source',
  },
  {
    domain: 'Respiratory',
    task: 'CXR triage (gateway only)',
    model: 'TorchXRayVision',
    type: 'Open-source',
  },
  {
    domain: 'Imaging',
    task: 'Segmentation',
    model: 'nnU-Net',
    type: 'Open-source',
  },
  {
    domain: 'Imaging',
    task: 'Multi-modal pipelines',
    model: 'MONAI Model Zoo',
    type: 'Open-source',
  },
  {
    domain: 'Vision',
    task: 'Camera-based risk screening',
    model: 'TIMM pretrained backbones',
    type: 'Open-source',
  },
  {
    domain: 'Audio',
    task: 'Respiratory / sleep signals',
    model: 'wav2vec2 embeddings',
    type: 'Open-source',
  },
  {
    domain: 'Tabular',
    task: 'Risk fusion',
    model: 'Gradient boosting / logistic models',
    type: 'Open-source',
  },
];

export default function ModelRegistrySection() {
  return (
    <section id="model-registry" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="09/18"
          label="MODULE: ML MODEL REGISTRY"
          title="Model Registry (Transparency by Design)"
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
                Live Corp uses a model registry approach, where every decision module is backed by a known, versioned, auditable machine learning model.
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
          <HUDPanel className="p-8" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-6">CORE MODEL SOURCES USED</div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-hud-line-primary">
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Clinical Domain</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Task</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Model / Source</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((item, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30 transition-colors"
                    >
                      <td className="py-4 px-4 mono text-sm text-hud-text-primary font-semibold">{item.domain}</td>
                      <td className="py-4 px-4 text-sm text-hud-text-muted">{item.task}</td>
                      <td className="py-4 px-4 text-sm text-hud-glow-teal">{item.model}</td>
                      <td className="py-4 px-4 text-sm text-hud-text-muted">{item.type}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 pt-6 border-t border-hud-line-secondary">
              <div className="mono text-xs text-hud-glow-cyan mb-4">ALL MODELS ARE:</div>
              <div className="grid md:grid-cols-2 gap-4">
                {['Versioned', 'Logged', 'Performance monitored', 'Replaceable without UI changes'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="mono text-xs text-hud-glow-teal">✓</span>
                    <span className="text-sm text-hud-text-muted">{item}</span>
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

