'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HUDPanel from '../ui/HUDPanel';
import HUDNavbar from '../ui/HUDNavbar';
import Footer from '../sections/Footer';

const services = [
  {
    slug: 'cardiac-pre-screening',
    name: 'Cardiac Pre-Screening Wing',
    problem: 'Low-risk cardiac symptoms lead to excessive ECGs, echoes, referrals.',
    inputs: ['Wearable ECG', 'Digital Stethoscope', 'Vitals', 'Symptoms'],
    status: 'LOW-RISK RULE-OUT',
    moduleId: 'SVC-01',
  },
  {
    slug: 'respiratory-triage',
    name: 'Respiratory Triage Wing',
    problem: 'Mild respiratory symptoms trigger X-rays and antibiotics.',
    inputs: ['Cough Audio', 'Breath Sounds', 'SpO₂', 'Symptoms'],
    status: 'ESCALATION ENABLED',
    moduleId: 'SVC-02',
  },
  {
    slug: 'hematology-blood-panel',
    name: 'Hematology & Blood Panel Minimization Wing',
    problem: 'Routine CBCs ordered broadly with low yield.',
    inputs: ['Smartphone Camera', 'Demographics', 'Vitals'],
    status: 'OPTICAL SCREENING',
    moduleId: 'SVC-03',
  },
  {
    slug: 'urinalysis-infection',
    name: 'Urinalysis & Infection Wing',
    problem: 'Lab urinalysis over-ordered for simple symptoms.',
    inputs: ['Dipstick Camera', 'Symptoms'],
    status: 'COLORIMETRIC ANALYSIS',
    moduleId: 'SVC-04',
  },
  {
    slug: 'sleep-fatigue-screening',
    name: 'Sleep & Fatigue Screening Wing',
    problem: 'Sleep studies ordered late or unnecessarily.',
    inputs: ['Overnight Audio', 'Motion Proxies', 'Questionnaires'],
    status: 'CIRCADIAN MAPPING',
    moduleId: 'SVC-05',
  },
  {
    slug: 'imaging-gateway',
    name: 'Imaging Gateway Wing',
    problem: 'Imaging ordered without triage overloads radiology.',
    inputs: ['Engine Flags Only'],
    status: 'GATE CONTROL',
    moduleId: 'SVC-06',
  },
];

export default function ServicesHangar() {
  return (
    <main className="min-h-screen bg-hud-bg-primary text-hud-text-primary relative">
      <HUDNavbar />
      
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mono text-xs text-hud-glow-teal mb-4">LIVE CORP — SERVICE ECOSYSTEM</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">Services</h1>
            <p className="text-xl text-hud-text-muted mb-4 max-w-3xl mx-auto">
              Pre-diagnostic intelligence systems designed to reduce unnecessary tests safely.
            </p>
            <p className="mono text-xs text-hud-text-muted">
              Not diagnosis. Not treatment. Human-in-the-loop. Abstains when uncertain.
            </p>
          </motion.div>

          {/* Service Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <HUDPanel
                    className="p-6 h-full hover:border-hud-glow-cyan transition-all cursor-pointer group"
                    withBrackets
                    withScanline
                  >
                    <div className="mono text-xs text-hud-glow-cyan mb-3">{service.moduleId}</div>
                    <h3 className="text-xl font-semibold mb-3 text-hud-text-primary group-hover:text-hud-glow-cyan transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-hud-text-muted mb-4 leading-relaxed">{service.problem}</p>
                    
                    <div className="mb-4">
                      <div className="mono text-xs text-hud-text-muted mb-2">INPUTS:</div>
                      <div className="flex flex-wrap gap-2">
                        {service.inputs.map((input, i) => (
                          <span key={i} className="mono text-xs px-2 py-1 border border-hud-line-primary text-hud-text-muted">
                            {input}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="status-tag">{service.status}</span>
                    </div>

                    <div className="pt-4 border-t border-hud-line-secondary">
                      <span className="mono text-xs text-hud-glow-cyan group-hover:text-hud-glow-teal transition-colors">
                        ENTER MODULE →
                      </span>
                    </div>
                  </HUDPanel>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <HUDPanel className="p-6 inline-block">
              <p className="mono text-xs text-hud-text-muted max-w-3xl">
                Each service operates before diagnostics. All outputs are risk-based, safety-constrained, and clinician-overrideable.
              </p>
            </HUDPanel>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

