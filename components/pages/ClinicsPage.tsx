'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';
import HUDNavbar from '../ui/HUDNavbar';
import Footer from '../sections/Footer';

export default function ClinicsPage() {
  const workflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (workflowRef.current) {
      const steps = workflowRef.current.querySelectorAll('.workflow-step');
      steps.forEach((step, i) => {
        (step as HTMLElement).style.animationDelay = `${i * 0.2}s`;
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-hud-bg-primary text-hud-text-primary relative">
      <HUDNavbar />
      
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="mono text-xs text-hud-glow-teal mb-4">FOR CLINICS & OPDs</div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4">Clinic Integration</h1>
              <p className="text-xl text-hud-text-muted max-w-3xl mx-auto">
                Streamline OPD workflows, reduce test volumes, and standardize triage protocols.
              </p>
            </motion.div>

            {/* Workflow Visualization */}
            <motion.div
              ref={workflowRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center min-h-[500px] relative"
            >
              <div className="relative w-full">
                {/* Workflow Steps */}
                <div className="flex items-center justify-between relative">
                  {[
                    { label: 'Intake', icon: '📋' },
                    { label: 'Pre-Screen', icon: '🔍' },
                    { label: 'Decision', icon: '⚡' },
                    { label: 'Order', icon: '📊' },
                    { label: 'Review', icon: '✅' },
                  ].map((step, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div
                        className="workflow-step w-24 h-24 border-4 border-hud-glow-cyan rounded-full flex items-center justify-center bg-hud-bg-primary/50 backdrop-blur-sm mb-4"
                        style={{
                          animation: 'pulse-glow 2s ease-in-out infinite',
                        }}
                      >
                        <div className="text-3xl">{step.icon}</div>
                      </div>
                      <div className="mono text-xs text-hud-glow-cyan text-center">{step.label}</div>
                      {i < 4 && (
                        <div className="absolute top-12 left-1/2 w-full h-1 bg-hud-glow-cyan/30 transform -translate-y-1/2" style={{ left: `${(i + 1) * 20}%`, width: '20%' }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* OPD Workflow */}
          <SectionHeader
            sectionId="01/04"
            label="MODULE: WORKFLOW"
            title="OPD Workflow Integration"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">TYPICAL FLOW</div>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Patient Intake', desc: 'Capture symptoms, vitals, basic history' },
                  { step: '2', title: 'Pre-Screening', desc: 'Live Corp analyzes inputs, provides risk band' },
                  { step: '3', title: 'Decision Support', desc: 'Clinician reviews recommendation' },
                  { step: '4', title: 'Test Ordering', desc: 'Order minimal panel or defer based on risk' },
                  { step: '5', title: 'Follow-up', desc: 'Monitor and reassess as needed' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 pb-4 border-b border-hud-line-secondary last:border-0">
                    <div className="mono text-lg text-hud-glow-cyan">{item.step}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-hud-text-primary mb-1">{item.title}</div>
                      <div className="text-sm text-hud-text-muted">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </HUDPanel>
            <HUDPanel className="p-6" withBrackets glow="cyan">
              <div className="mono text-xs text-hud-glow-cyan mb-4">BENEFITS</div>
              <div className="space-y-3">
                {[
                  { metric: 'Faster Flow', value: '+30%', desc: 'Reduced wait times' },
                  { metric: 'Lower Volumes', value: '40-60%', desc: 'Fewer unnecessary tests' },
                  { metric: 'Standard Triage', value: '100%', desc: 'Consistent protocols' },
                  { metric: 'Cost Savings', value: '$2-3M', desc: 'Per 10K patients annually' },
                ].map((item, i) => (
                  <div key={i} className="pb-3 border-b border-hud-line-secondary last:border-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="mono text-xs text-hud-text-muted">{item.metric}</span>
                      <span className="text-xl font-semibold text-hud-glow-cyan">{item.value}</span>
                    </div>
                    <div className="text-xs text-hud-text-muted">{item.desc}</div>
                  </div>
                ))}
              </div>
            </HUDPanel>
          </div>

          {/* Roles */}
          <SectionHeader
            sectionId="02/04"
            label="MODULE: ROLES"
            title="User Roles & Permissions"
            className="mt-16"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                role: 'Reception Staff',
                permissions: ['Patient intake', 'Data entry', 'View basic outputs'],
                image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
              },
              {
                role: 'Clinicians',
                permissions: ['Full access', 'Override decisions', 'Review audit logs'],
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
              },
              {
                role: 'Administrators',
                permissions: ['System config', 'Protocol management', 'Analytics access'],
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
              },
            ].map((item, i) => (
              <HUDPanel key={i} className="p-6" withBrackets>
                <div className="relative w-full h-40 mb-4 rounded border border-hud-line-primary overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.role}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.role}</h3>
                <ul className="space-y-2">
                  {item.permissions.map((perm, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-hud-text-muted">
                      <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                      <span>{perm}</span>
                    </li>
                  ))}
                </ul>
              </HUDPanel>
            ))}
          </div>

          {/* Deployment Options */}
          <SectionHeader
            sectionId="03/04"
            label="MODULE: DEPLOYMENT"
            title="Deployment Options"
            className="mt-16"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              {
                type: 'Cloud-Based',
                desc: 'SaaS deployment with managed infrastructure',
                features: ['Quick setup', 'Automatic updates', 'Scalable', 'Managed security'],
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
              },
              {
                type: 'On-Premise',
                desc: 'Self-hosted deployment for maximum control',
                features: ['Full control', 'Data stays local', 'Custom config', 'Offline capable'],
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=600&h=400&fit=crop',
              },
            ].map((option, i) => (
              <HUDPanel key={i} className="p-6" withBrackets>
                <div className="relative w-full h-48 mb-4 rounded border border-hud-line-primary overflow-hidden">
                  <Image
                    src={option.image}
                    alt={option.type}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-xl font-semibold text-hud-text-primary">{option.type}</div>
                  </div>
                </div>
                <p className="text-sm text-hud-text-muted mb-4">{option.desc}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-hud-text-muted">
                      <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </HUDPanel>
            ))}
          </div>

          {/* Pilot Process */}
          <SectionHeader
            sectionId="04/04"
            label="MODULE: PILOT PROCESS"
            title="Pilot Program Process"
            className="mt-16"
          />
          <div className="mt-6">
            <HUDPanel className="p-8" withBrackets>
              <div className="space-y-8">
                {[
                  {
                    phase: 'Phase 1: Assessment',
                    duration: '2-4 weeks',
                    activities: [
                      'Clinic workflow analysis',
                      'Integration requirements',
                      'Staff training needs',
                      'Protocol configuration',
                    ],
                  },
                  {
                    phase: 'Phase 2: Setup',
                    duration: '1-2 weeks',
                    activities: [
                      'System installation',
                      'Protocol configuration',
                      'Staff training',
                      'Test data validation',
                    ],
                  },
                  {
                    phase: 'Phase 3: Pilot',
                    duration: '8-12 weeks',
                    activities: [
                      'Limited patient cohort',
                      'Data collection',
                      'Performance monitoring',
                      'Feedback collection',
                    ],
                  },
                  {
                    phase: 'Phase 4: Evaluation',
                    duration: '2-4 weeks',
                    activities: [
                      'Outcome analysis',
                      'Cost-benefit assessment',
                      'Protocol refinement',
                      'Full deployment decision',
                    ],
                  },
                ].map((phase, i) => (
                  <div key={i} className="pb-8 border-b border-hud-line-secondary last:border-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="mono text-xs text-hud-glow-cyan mb-1">PHASE {i + 1}</div>
                        <h3 className="text-xl font-semibold">{phase.phase}</h3>
                      </div>
                      <div className="mono text-xs text-hud-text-muted">{phase.duration}</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.activities.map((activity, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-hud-text-muted">
                          <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </HUDPanel>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <HUDPanel className="p-8 inline-block" withBrackets glow="cyan">
              <div className="mono text-xs text-hud-glow-cyan mb-4">READY TO START?</div>
              <h3 className="text-2xl font-semibold mb-4">Request a Pilot</h3>
              <p className="text-sm text-hud-text-muted mb-6 max-w-md">
                Contact us to discuss how Live Corp can integrate into your clinic workflow.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-hud-glow-cyan/20 border border-hud-glow-cyan text-hud-glow-cyan mono text-sm font-semibold hover:bg-hud-glow-cyan/30 transition-colors"
              >
                CONTACT US →
              </a>
            </HUDPanel>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

