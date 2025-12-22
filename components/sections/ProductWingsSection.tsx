'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

const wings = [
  {
    name: 'Cardiac Pre-Screening Wing',
    problem: 'Reduce unnecessary ECGs and cardiac panels for low-risk presentations.',
    inputs: ['Camera', 'Mic', 'Wearable', 'Vitals'],
    reductions: 'Reduces cardiac panel ordering by 40-60% in low-risk cases.',
    outputs: 'Risk band classification, confidence score, minimal next step.',
    safetyTriggers: 'Chest pain with radiation, syncope, abnormal vitals → escalate.',
  },
  {
    name: 'Respiratory Triage Wing',
    problem: 'Minimize chest X-rays and respiratory panels for common cold presentations.',
    inputs: ['Camera', 'Mic', 'Vitals', 'Questionnaire'],
    reductions: 'Reduces imaging and respiratory panels by 35-50%.',
    outputs: 'Respiratory risk assessment, infection likelihood, escalation flags.',
    safetyTriggers: 'Dyspnea, hypoxia, hemoptysis → immediate escalation.',
  },
  {
    name: 'Hematology & Blood Panel Minimization Wing',
    problem: 'Avoid comprehensive metabolic panels when targeted tests suffice.',
    inputs: ['Camera', 'Vitals', 'Dipstick', 'Questionnaire'],
    reductions: 'Reduces full panel ordering by 50-70% through targeted selection.',
    outputs: 'Minimal panel recommendation, risk stratification, follow-up guidance.',
    safetyTriggers: 'Severe anemia signs, bleeding, abnormal vitals → escalate.',
  },
  {
    name: 'Urinalysis & Infection Wing',
    problem: 'Reduce unnecessary urine cultures and infection panels.',
    inputs: ['Camera', 'Dipstick', 'Questionnaire'],
    reductions: 'Reduces urine culture ordering by 45-65% in asymptomatic cases.',
    outputs: 'Infection likelihood, dipstick interpretation, escalation criteria.',
    safetyTriggers: 'Fever, flank pain, systemic symptoms → escalate.',
  },
  {
    name: 'Sleep & Fatigue Screening Wing',
    problem: 'Frame sleep study decisions before expensive polysomnography.',
    inputs: ['Wearable', 'Questionnaire', 'Vitals'],
    reductions: 'Reduces unnecessary sleep studies by 30-40%.',
    outputs: 'Sleep quality assessment, fatigue risk, referral guidance.',
    safetyTriggers: 'Severe daytime sleepiness, apnea events → escalate.',
  },
  {
    name: 'Imaging Gateway Wing',
    problem: 'Optimize imaging use without replacing radiology interpretation.',
    inputs: ['Camera', 'Questionnaire', 'Vitals'],
    reductions: 'Reduces low-yield imaging by 25-35% through pre-screening.',
    outputs: 'Imaging necessity score, alternative pathways, escalation flags.',
    safetyTriggers: 'Trauma, neurological deficits, acute abdomen → escalate.',
    note: 'Optimizes imaging use — does not replace radiology.',
  },
];

export default function ProductWingsSection() {
  return (
    <section id="wings" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="05/10"
          label="MODULE: PRODUCT WINGS"
          title="Six Wings"
          subtitle="Specialized modules for different clinical domains."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wings.map((wing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HUDPanel className="p-6 h-full" withBrackets>
                <div className="mono text-xs text-hud-glow-cyan mb-3">
                  WING {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-hud-text-primary">{wing.name}</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="mono text-xs text-hud-text-muted">Problem:</span>
                    <p className="text-hud-text-muted mt-1">{wing.problem}</p>
                  </div>
                  
                  <div>
                    <span className="mono text-xs text-hud-text-muted">Inputs:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {wing.inputs.map((input, i) => (
                        <span key={i} className="mono text-xs px-2 py-1 border border-hud-line-primary text-hud-text-muted">
                          {input}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="mono text-xs text-hud-text-muted">Reductions:</span>
                    <p className="text-hud-text-muted mt-1">{wing.reductions}</p>
                  </div>
                  
                  <div>
                    <span className="mono text-xs text-hud-text-muted">Outputs:</span>
                    <p className="text-hud-text-muted mt-1">{wing.outputs}</p>
                  </div>
                  
                  <div>
                    <span className="mono text-xs text-hud-warning">Safety Triggers:</span>
                    <p className="text-hud-text-muted mt-1">{wing.safetyTriggers}</p>
                  </div>
                  
                  {wing.note && (
                    <div className="pt-2 border-t border-hud-line-secondary">
                      <p className="mono text-xs text-hud-glow-teal">{wing.note}</p>
                    </div>
                  )}
                </div>
              </HUDPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

