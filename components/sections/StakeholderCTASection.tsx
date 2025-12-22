'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const stakeholders = [
  {
    id: 'patients',
    label: 'PATIENTS',
    title: 'For Patients',
    benefits: [
      'Save money on unnecessary tests',
      'Reduce anxiety from over-testing',
      'Get clear next steps',
      'Understand your risk profile',
    ],
    cta: 'Try the demo',
    ctaLink: '#demo',
  },
  {
    id: 'clinics',
    label: 'CLINICS / OPDs',
    title: 'For Clinics',
    benefits: [
      'Faster patient flow',
      'Lower test volumes',
      'Standard triage protocols',
      'Reduced operational costs',
    ],
    cta: 'Request pilot',
    ctaLink: '#contact',
  },
  {
    id: 'doctors',
    label: 'DOCTORS',
    title: 'For Doctors',
    benefits: [
      'Reduce defensive ordering',
      'Save documentation time',
      'Evidence-based guidance',
      'Maintain clinical autonomy',
    ],
    cta: 'See documentation format',
    ctaLink: '#contact',
  },
  {
    id: 'payers',
    label: 'PAYERS',
    title: 'For Health Systems & Payers',
    benefits: [
      'Population-level cost reductions',
      'Allocate resources efficiently',
      'Reduce unnecessary claims',
      'Improve patient outcomes',
    ],
    cta: 'View cost model',
    ctaLink: '#contact',
  },
];

export default function StakeholderCTASection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="stakeholders" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="08/10"
          label="MODULE: STAKEHOLDERS"
          title="Who It's For"
          subtitle="Different stakeholders, different benefits."
        />

        <div className="mt-16">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {stakeholders.map((stakeholder, index) => (
              <button
                key={stakeholder.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 border mono text-xs transition-colors ${
                  activeTab === index
                    ? 'border-hud-glow-cyan bg-hud-glow-cyan/20 text-hud-glow-cyan'
                    : 'border-hud-line-secondary text-hud-text-muted hover:border-hud-line-primary'
                }`}
              >
                {stakeholder.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HUDPanel className="p-8" withBrackets glow="cyan">
                <div className="mono text-xs text-hud-glow-cyan mb-4">
                  {stakeholders[activeTab].label}
                </div>
                <h3 className="text-2xl font-semibold mb-6">{stakeholders[activeTab].title}</h3>
                <ul className="space-y-3 mb-8">
                  {stakeholders[activeTab].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mono text-xs text-hud-glow-teal mt-1">✓</span>
                      <span className="text-hud-text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={stakeholders[activeTab].ctaLink}
                  className="inline-block px-6 py-3 bg-hud-glow-cyan/20 border border-hud-glow-cyan text-hud-glow-cyan mono text-sm font-semibold hover:bg-hud-glow-cyan/30 transition-colors"
                >
                  {stakeholders[activeTab].cta}
                </a>
              </HUDPanel>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

