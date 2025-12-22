'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';
import RadialDial from '../ui/RadialDial';

const steps = [
  {
    id: 1,
    title: 'Select Symptom Category',
    options: ['Cardiac', 'Respiratory', 'Blood', 'Urine', 'Sleep', 'Imaging Gateway'],
  },
  {
    id: 2,
    title: 'Select Available Inputs',
    options: ['Camera', 'Mic', 'Wearable', 'Vitals', 'Dipstick', 'Questionnaire'],
  },
  {
    id: 3,
    title: 'Signal Quality Check',
    status: 'pass' as const,
  },
  {
    id: 4,
    title: 'Output',
    output: {
      riskBand: 'Low',
      confidence: 78,
      nextStep: 'No immediate test required',
      safetyNotes: 'Continue monitoring. Escalate if symptoms worsen.',
    },
  },
];

export default function InteractiveDemoSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAbstain, setShowAbstain] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string[]>>({});

  const handleOptionSelect = (stepId: number, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [stepId]: prev[stepId]?.includes(option)
        ? prev[stepId].filter((o) => o !== option)
        : [...(prev[stepId] || []), option],
    }));
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section id="demo" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          sectionId="04/10"
          label="MODULE: INTERACTIVE DEMO"
          title="How the Engine Thinks"
          subtitle="A guided, non-medical demonstration of decision framing."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <HUDPanel className="p-8" withScanline>
            {/* Progress Ring */}
            <div className="flex justify-center mb-8">
              <RadialDial
                segments={[{ label: 'Progress', value: progress, color: '#2DE2FF' }]}
                size={120}
                strokeWidth={8}
              >
                <div className="mono text-xs text-hud-text-muted">
                  {currentStep + 1}/{steps.length}
                </div>
              </RadialDial>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {showAbstain ? (
                <motion.div
                  key="abstain"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <div className="mono text-xs text-hud-critical mb-4">ABSTAIN EXAMPLE</div>
                  <HUDPanel className="p-6 border-2 border-hud-critical/50">
                    <p className="text-lg font-semibold mb-4">Insufficient Confidence → Escalate</p>
                    <p className="text-sm text-hud-text-muted mb-4">
                      When signal quality is low or confidence thresholds are not met, Live Corp abstains from making recommendations.
                    </p>
                    <p className="mono text-xs text-hud-text-muted">
                      RECOMMENDATION: Clinical evaluation required.
                    </p>
                  </HUDPanel>
                  <button
                    onClick={() => setShowAbstain(false)}
                    className="mt-6 px-4 py-2 border border-hud-line-primary text-hud-text-primary mono text-xs hover:bg-hud-panel transition-colors"
                  >
                    Return to Demo
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {currentStep < 2 ? (
                    <div>
                      <h3 className="text-xl font-semibold mb-6">{steps[currentStep].title}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {steps[currentStep].options?.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleOptionSelect(steps[currentStep].id, option)}
                            className={`p-4 border mono text-xs transition-colors ${
                              selectedOptions[steps[currentStep].id]?.includes(option)
                                ? 'border-hud-glow-cyan bg-hud-glow-cyan/20 text-hud-glow-cyan'
                                : 'border-hud-line-secondary text-hud-text-muted hover:border-hud-line-primary'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : currentStep === 2 ? (
                    <div>
                      <h3 className="text-xl font-semibold mb-6">{steps[currentStep].title}</h3>
                      <HUDPanel className="p-6 mb-6" glow="teal">
                        <div className="flex items-center justify-between">
                          <span className="mono text-xs text-hud-text-muted">Status:</span>
                          <span className="mono text-xs text-hud-glow-teal">PASS</span>
                        </div>
                        <div className="mt-4 text-sm text-hud-text-muted">
                          Signal quality meets confidence thresholds. Proceeding to output.
                        </div>
                      </HUDPanel>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-semibold mb-6">{steps[currentStep].title}</h3>
                      <HUDPanel className="p-6 space-y-4">
                        <div>
                          <span className="mono text-xs text-hud-text-muted">Risk Band:</span>
                          <span className="mono text-sm text-hud-glow-teal ml-2">
                            {steps[currentStep].output?.riskBand}
                          </span>
                        </div>
                        <div>
                          <span className="mono text-xs text-hud-text-muted">Confidence:</span>
                          <span className="mono text-sm text-hud-glow-cyan ml-2">
                            {steps[currentStep].output?.confidence}%
                          </span>
                        </div>
                        <div>
                          <span className="mono text-xs text-hud-text-muted">Minimum Next Step:</span>
                          <p className="text-sm text-hud-text-primary mt-1">
                            {steps[currentStep].output?.nextStep}
                          </p>
                        </div>
                        <div>
                          <span className="mono text-xs text-hud-text-muted">Safety Notes:</span>
                          <p className="text-sm text-hud-text-muted mt-1">
                            {steps[currentStep].output?.safetyNotes}
                          </p>
                        </div>
                      </HUDPanel>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                      disabled={currentStep === 0}
                      className="px-4 py-2 border border-hud-line-primary text-hud-text-primary mono text-xs disabled:opacity-30 disabled:cursor-not-allowed hover:bg-hud-panel transition-colors"
                    >
                      ← Previous
                    </button>
                    {currentStep < steps.length - 1 ? (
                      <button
                        onClick={() => setCurrentStep(currentStep + 1)}
                        className="px-4 py-2 bg-hud-glow-cyan/20 border border-hud-glow-cyan text-hud-glow-cyan mono text-xs hover:bg-hud-glow-cyan/30 transition-colors"
                      >
                        Next →
                      </button>
                    ) : (
                      <button
                        onClick={() => setCurrentStep(0)}
                        className="px-4 py-2 border border-hud-line-primary text-hud-text-primary mono text-xs hover:bg-hud-panel transition-colors"
                      >
                        Restart
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Abstain Toggle */}
            {!showAbstain && (
              <div className="mt-6 pt-6 border-t border-hud-line-secondary">
                <button
                  onClick={() => setShowAbstain(true)}
                  className="mono text-xs text-hud-warning hover:text-hud-critical transition-colors"
                >
                  View Abstain Example →
                </button>
              </div>
            )}

            {/* Disclaimer */}
            <div className="mt-6 pt-6 border-t border-hud-line-secondary">
              <p className="mono text-xs text-hud-text-muted text-center">
                This is a product demonstration UI. Not medical advice.
              </p>
            </div>
          </HUDPanel>
        </motion.div>
      </div>
    </section>
  );
}

