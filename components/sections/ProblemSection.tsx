'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const problems = [
  {
    title: 'Defensive Ordering',
    description: 'Clinicians order tests to protect against liability, not because they expect actionable results.',
  },
  {
    title: 'Multiple Normal Results',
    description: 'Patients receive multiple normal test results, paying for certainty that was never in question.',
  },
  {
    title: 'Uncertainty and Delay',
    description: 'Lack of pre-diagnostic clarity leads to delayed decision-making and patient anxiety.',
  },
  {
    title: 'Lack of Personalization',
    description: 'Standard panels ignore individual risk profiles, leading to over-testing for low-risk cases.',
  },
  {
    title: 'Systemic Waste',
    description: 'Healthcare systems bear unnecessary costs that could be redirected to high-yield diagnostics.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="02/10"
          label="MODULE: PROBLEM SPACE"
          title="The Problem"
          subtitle="Diagnostic waste occurs when tests are ordered without clear clinical justification."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HUDPanel className="p-6 h-full" withBrackets>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mono text-xs text-hud-glow-cyan">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-semibold text-hud-text-primary">{problem.title}</h3>
                </div>
                <p className="text-sm text-hud-text-muted leading-relaxed">{problem.description}</p>
              </HUDPanel>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <HUDPanel className="p-6" withScanline>
            <p className="mono text-xs text-hud-text-muted mb-2">
              Digital triage tools can drive major cost savings by 2030 (industry analyses).
            </p>
            <p className="text-xl font-semibold text-hud-text-primary">
              Healthcare should not bill people for uncertainty.
            </p>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

