'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

export default function SleepService() {
  return (
    <div className="min-h-screen pt-20">
      {/* Sticky Header - Dark Timeline Theme */}
      <div className="sticky top-0 z-40 bg-hud-bg-primary/90 backdrop-blur-hud border-b-2 border-hud-glow-teal/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-2 border-hud-glow-teal rounded-full" />
                <div className="absolute inset-2 border border-hud-glow-teal/50 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-hud-glow-teal rounded-full" />
                </div>
              </div>
              <div>
                <div className="mono text-xs text-hud-glow-cyan mb-1">MODULE ID: SVC-05</div>
                <h1 className="text-2xl font-semibold">Sleep & Fatigue Screening Wing</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="mono text-xs text-hud-glow-teal">STATUS: ACTIVE</div>
              <div className="mono text-xs text-hud-text-muted">CIRCADIAN MAPPING</div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Ribbon */}
      <div className="bg-hud-warning/10 border-b border-hud-warning/30 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mono text-xs text-hud-warning text-center">
            Not a diagnosis. Does not replace clinicians. Escalates on red flags.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero - Circadian Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 min-h-[500px]"
        >
          <HUDPanel className="p-8 h-full" withBrackets>
            {/* Dark Mode Timeline */}
            <div className="relative h-full">
              {/* Night Cycle Markers - 24 Hour */}
              <div className="absolute inset-0">
                {[0, 3, 6, 9, 12, 15, 18, 21].map((hour) => (
                  <div
                    key={hour}
                    className="absolute top-0 bottom-0 w-px bg-hud-line-primary/30"
                    style={{ left: `${(hour / 24) * 100}%` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 mono text-xs text-hud-text-muted">
                      {hour}h
                    </div>
                  </div>
                ))}
              </div>

              {/* Slow Moving Arcs - Sleep Cycles */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 300">
                <defs>
                  <linearGradient id="sleep-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2DE2FF" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#34F5C5" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#2DE2FF" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 150 Q 300 100, 600 150 T 1200 150"
                  fill="none"
                  stroke="url(#sleep-gradient)"
                  strokeWidth="4"
                  className="animate-pulse"
                />
                <path
                  d="M 0 180 Q 300 140, 600 180 T 1200 180"
                  fill="none"
                  stroke="#34F5C5"
                  strokeWidth="3"
                  opacity="0.4"
                  style={{ animationDelay: '1s' }}
                  className="animate-pulse"
                />
              </svg>

              {/* Temporal Signal Stacking - Sleep Quality */}
              <div className="absolute bottom-16 left-0 right-0 h-32">
                <div className="flex items-end gap-1 h-full">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-hud-glow-cyan/30"
                      style={{
                        height: `${25 + Math.sin(i * 0.15) * 45}%`,
                        animation: 'signal-pulse 3s ease-in-out infinite',
                        animationDelay: `${(i % 12) * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between mono text-xs text-hud-text-muted">
                  <span>00:00</span>
                  <span>12:00</span>
                  <span>24:00</span>
                </div>
              </div>

              {/* Night Cycle Indicators */}
              <div className="absolute top-8 left-8 right-8 flex justify-between">
                {['DEEP', 'REM', 'LIGHT', 'AWAKE'].map((stage, i) => (
                  <div key={i} className="text-center">
                    <div className="mono text-xs text-hud-glow-teal mb-1">{stage}</div>
                    <div className="w-16 h-1 bg-hud-glow-teal/30 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </HUDPanel>
        </motion.div>

        {/* Problem - Timeline Style */}
        <SectionHeader
          sectionId="01/14"
          label="MODULE: PROBLEM SPACE"
          title="The Problem"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <p className="text-hud-text-muted mb-4">
              Sleep studies ordered late or unnecessarily.
            </p>
            <div className="space-y-2 text-sm text-hud-text-muted">
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Polysomnography ordered without screening</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Delayed diagnosis due to wait times</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Low-yield sleep lab tests</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-3">IMPACT METRICS</div>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-semibold text-hud-glow-cyan mb-1">30-40%</div>
                <div className="mono text-xs text-hud-text-muted">Reduction in sleep lab tests</div>
              </div>
              <div className="pt-4 border-t border-hud-line-secondary">
                <div className="text-2xl font-semibold text-hud-glow-teal mb-1">$1.5M</div>
                <div className="mono text-xs text-hud-text-muted">Savings per 10K patients</div>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* Clinical Scenarios - Timeline Cards */}
        <SectionHeader
          sectionId="02/14"
          label="MODULE: CLINICAL SCENARIOS"
          title="Sleep Presentations"
          className="mt-16"
        />
        <div className="space-y-4 mt-6">
          {[
            {
              scenario: 'Chronic Fatigue',
              duration: '>3 months',
              symptoms: 'Daytime sleepiness, poor concentration',
              typical: 'Immediate sleep study referral',
              recommendation: 'Home monitoring first, defer sleep lab',
              risk: 'Low-Moderate',
            },
            {
              scenario: 'Snoring Concerns',
              duration: 'Long-term',
              symptoms: 'Loud snoring, partner complaints',
              typical: 'Sleep study ordered',
              recommendation: 'Audio analysis, risk stratification',
              risk: 'Low',
            },
            {
              scenario: 'Insomnia',
              duration: 'Variable',
              symptoms: 'Difficulty falling/staying asleep',
              typical: 'Sleep study considered',
              recommendation: 'Questionnaire + monitoring, defer study',
              risk: 'Low',
            },
          ].map((scenario, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1559757175-0eb30cd8c063' : i === 1 ? '1576091160399-112ba8d25d1f' : '1551601651-2a8555f1a136'}?w=800&h=400&fit=crop`}
                  alt={scenario.scenario}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">CASE {i + 1}</div>
              </div>
              <div className="grid md:grid-cols-5 gap-4 items-center">
                <div>
                  <div className="text-lg font-semibold">{scenario.scenario}</div>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Duration</div>
                  <div className="text-sm">{scenario.duration}</div>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Symptoms</div>
                  <div className="text-xs text-hud-text-muted">{scenario.symptoms}</div>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Typical</div>
                  <div className="text-xs text-hud-warning">{scenario.typical}</div>
                </div>
                <div className="text-right">
                  <div className="mono text-xs text-hud-glow-teal mb-1">{scenario.recommendation}</div>
                  <span className="status-tag">{scenario.risk}</span>
                </div>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* Inputs - Night Theme */}
        <SectionHeader
          sectionId="03/14"
          label="MODULE: INPUTS"
          title="Input Sources"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            { name: 'Overnight Audio', detail: 'Snoring patterns, apnea events', icon: '🌙' },
            { name: 'Motion Proxies', detail: 'Sleep-wake cycles, restlessness', icon: '📱' },
            { name: 'Questionnaires', detail: 'Epworth scale, sleep quality', icon: '📋' },
          ].map((input, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1559757175-0eb30cd8c063' : i === 1 ? '1551601651-2a8555f1a136' : '1454165804606-c3d57bc86b40'}?w=400&h=300&fit=crop`}
                  alt={input.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/60 to-transparent" />
              </div>
              <div className="mono text-xs text-hud-glow-cyan mb-2 text-center">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="text-lg font-semibold mb-2 text-center">{input.name}</h3>
              <p className="text-xs text-hud-text-muted text-center">{input.detail}</p>
            </HUDPanel>
          ))}
        </div>

        {/* Signal Processing - Night Cycle */}
        <SectionHeader
          sectionId="04/14"
          label="MODULE: PROCESSING"
          title="Circadian Signal Processing"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {['Capture', 'Filter', 'Analyze', 'Classify', 'Output'].map((stage, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-hud-glow-teal rounded-full flex items-center justify-center mb-3">
                  <span className="mono text-xs text-hud-glow-teal">{i + 1}</span>
                </div>
                <div className="mono text-xs text-hud-text-muted text-center">{stage}</div>
                {i < 4 && (
                  <div className="absolute w-full h-0.5 bg-hud-line-primary top-8" style={{ left: `${i * 20 + 10}%`, width: '20%' }} />
                )}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-3">AUDIO ANALYSIS</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Snoring intensity measurement</li>
                <li>• Apnea event detection</li>
                <li>• Frequency domain analysis</li>
                <li>• Pattern recognition</li>
              </ul>
            </div>
            <div>
              <div className="mono text-xs text-hud-glow-teal mb-3">MOTION ANALYSIS</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Sleep-wake cycle detection</li>
                <li>• Restlessness quantification</li>
                <li>• Circadian rhythm analysis</li>
                <li>• Sleep efficiency calculation</li>
              </ul>
            </div>
          </div>
        </HUDPanel>

        {/* Engine Output - Sleep Stages */}
        <SectionHeader
          sectionId="05/14"
          label="MODULE: OUTPUT"
          title="Engine Output"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets glow="teal">
            <div className="mono text-xs text-hud-glow-teal mb-4">APNOEA RISK BAND</div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-hud-text-muted">Risk Level</span>
                  <span className="mono text-sm text-hud-glow-teal">Moderate</span>
                </div>
                <div className="h-2 bg-hud-line-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-hud-glow-teal" style={{ width: '45%' }} />
                </div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-2">AHI Estimate</div>
                <div className="text-2xl font-semibold text-hud-glow-teal">8-12</div>
                <div className="text-xs text-hud-text-muted">Events per hour</div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-2">Confidence</div>
                <div className="text-xl font-semibold text-hud-glow-cyan">72%</div>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-text-muted mb-4">RECOMMENDATION</div>
            <div className="space-y-4">
              <div>
                <div className="text-lg font-semibold text-hud-text-primary mb-2">Home Monitoring vs Sleep Lab</div>
                <p className="text-sm text-hud-text-muted mb-4">
                  Based on risk assessment, home monitoring recommended first. Sleep lab if symptoms worsen.
                </p>
              </div>
              <div className="pt-4 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-text-muted mb-2">Next Steps</div>
                <ul className="space-y-1 text-xs text-hud-text-muted">
                  <li>• Continue home monitoring</li>
                  <li>• Reassess in 4-6 weeks</li>
                  <li>• Escalate if AHI increases</li>
                </ul>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* Test Minimization Impact */}
        <SectionHeader
          sectionId="06/14"
          label="MODULE: IMPACT"
          title="Test Minimization Impact"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Reduction Metrics</h3>
              <div className="space-y-6">
                {[
                  { label: 'Sleep Lab Tests', reduction: '35%', width: '65%' },
                  { label: 'Polysomnography', reduction: '42%', width: '58%' },
                  { label: 'Unnecessary Referrals', reduction: '38%', width: '62%' },
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-hud-text-muted">{metric.label}</span>
                      <span className="mono text-sm text-hud-glow-teal">-{metric.reduction}</span>
                    </div>
                    <div className="h-3 bg-hud-line-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-hud-glow-teal" style={{ width: metric.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Cost Savings</h3>
              <div className="space-y-4">
                <HUDPanel className="p-5" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-2">Per Patient</div>
                  <div className="text-3xl font-semibold text-hud-glow-cyan mb-1">$150</div>
                  <div className="text-xs text-hud-text-muted">Average reduction</div>
                </HUDPanel>
                <HUDPanel className="p-5" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-2">Per 10K Patients</div>
                  <div className="text-3xl font-semibold text-hud-glow-teal mb-1">$1.5M</div>
                  <div className="text-xs text-hud-text-muted">Annual savings</div>
                </HUDPanel>
                <HUDPanel className="p-5" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-2">Wait Time Reduction</div>
                  <div className="text-3xl font-semibold text-hud-glow-teal mb-1">-45%</div>
                  <div className="text-xs text-hud-text-muted">Faster access for high-risk</div>
                </HUDPanel>
              </div>
            </div>
          </div>
        </HUDPanel>

        {/* Workflow - Timeline Style */}
        <SectionHeader
          sectionId="07/14"
          label="MODULE: WORKFLOW"
          title="Clinical Workflow Integration"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-hud-line-primary" />
            <div className="space-y-8">
              {[
                { time: 'T+0', title: 'Patient Presents', detail: 'Sleep concerns reported' },
                { time: 'T+1day', title: 'Overnight Monitoring', detail: 'Audio + motion data collected' },
                { time: 'T+2days', title: 'Signal Processing', detail: 'Analysis, pattern recognition' },
                { time: 'T+3days', title: 'Risk Assessment', detail: 'Engine generates recommendation' },
                { time: 'T+4days', title: 'Clinician Review', detail: 'Decision: home monitoring or sleep lab' },
                { time: 'T+6weeks', title: 'Follow-up', detail: 'Reassess, escalate if needed' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-6 relative">
                  <div className="w-16 h-16 border-2 border-hud-glow-teal rounded-full flex items-center justify-center flex-shrink-0 bg-hud-bg-primary relative z-10">
                    <div className="text-center">
                      <div className="mono text-xs text-hud-glow-teal">{step.time}</div>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-hud-text-muted">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </HUDPanel>

        {/* Safety Triggers */}
        <SectionHeader
          sectionId="08/14"
          label="MODULE: SAFETY"
          title="Safety Triggers & Escalation"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6 border-2 border-hud-critical/50" withBrackets>
            <div className="mono text-xs text-hud-critical mb-4">IMMEDIATE ESCALATION</div>
            <ul className="space-y-3">
              {['Daytime somnolence + CV risk', 'Severe AHI (>30 events/hour)', 'Oxygen desaturation <85%', 'Cardiac arrhythmias during sleep', 'High-risk comorbidities'].map((trigger, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-critical mt-1">⚠</span>
                  <span className="text-sm text-hud-text-muted">{trigger}</span>
                </li>
              ))}
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-warning mb-4">CAUTION FLAGS</div>
            <ul className="space-y-3">
              {['Moderate AHI (15-30)', 'Mild desaturation', 'Multiple risk factors', 'Occupational concerns'].map((flag, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-warning mt-1">→</span>
                  <span className="text-sm text-hud-text-muted">{flag}</span>
                </li>
              ))}
            </ul>
          </HUDPanel>
        </div>

        {/* Use Cases */}
        <SectionHeader
          sectionId="09/14"
          label="MODULE: USE CASES"
          title="Real-World Applications"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            {
              setting: 'Primary Care',
              scenario: 'Chronic fatigue evaluation',
              traditional: 'Immediate sleep study referral',
              livecorp: 'Home monitoring first, defer sleep lab',
              outcome: '$1,200 saved, faster access',
            },
            {
              setting: 'Occupational Health',
              scenario: 'Commercial driver screening',
              traditional: 'Routine polysomnography',
              livecorp: 'Risk stratification, selective testing',
              outcome: '35% reduction in tests',
            },
            {
              setting: 'Pediatric Care',
              scenario: 'Child sleep concerns',
              traditional: 'Sleep lab study',
              livecorp: 'Home monitoring, defer if low risk',
              outcome: 'Reduce invasive testing',
            },
            {
              setting: 'Telemedicine',
              scenario: 'Remote sleep assessment',
              traditional: 'In-person sleep lab required',
              livecorp: 'Audio + motion, home monitoring',
              outcome: '50% avoid sleep lab visits',
            },
          ].map((useCase, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-48 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1559757175-0eb30cd8c063' : i === 1 ? '1576091160399-112ba8d25d1f' : i === 2 ? '1551601651-2a8555f1a136' : '1454165804606-c3d57bc86b40'}?w=600&h=400&fit=crop`}
                  alt={useCase.setting}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">USE CASE {i + 1}</div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{useCase.setting}</h3>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Scenario</div>
                  <div className="text-sm text-hud-text-primary">{useCase.scenario}</div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-hud-line-secondary">
                  <div>
                    <div className="mono text-xs text-hud-warning mb-1">Traditional</div>
                    <div className="text-xs text-hud-text-muted">{useCase.traditional}</div>
                  </div>
                  <div>
                    <div className="mono text-xs text-hud-glow-teal mb-1">Live Corp</div>
                    <div className="text-xs text-hud-text-muted">{useCase.livecorp}</div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-glow-teal">{useCase.outcome}</div>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* Technical Specifications */}
        <SectionHeader
          sectionId="10/14"
          label="MODULE: TECHNICAL"
          title="Technical Specifications"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">AUDIO PROCESSING</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Sample rate: 44.1kHz</li>
              <li>• Frequency range: 20Hz-8kHz</li>
              <li>• Apnea detection: Pattern matching</li>
              <li>• Noise reduction: Auto</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">MOTION ANALYSIS</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Accelerometer data: 3-axis</li>
              <li>• Sampling: 1Hz continuous</li>
              <li>• Sleep-wake detection: ML-based</li>
              <li>• Efficiency calculation: Auto</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">ML MODELS</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Apnea detector: v2.4.1</li>
              <li>• Sleep classifier: v1.9.3</li>
              <li>• Risk calculator: v3.2.1</li>
              <li>• Confidence: 75% threshold</li>
            </ul>
          </HUDPanel>
        </div>

        {/* Performance Metrics */}
        <SectionHeader
          sectionId="11/14"
          label="MODULE: PERFORMANCE"
          title="Performance Metrics"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: 'Accuracy', value: '85%', detail: 'Validated on 10K cases' },
              { metric: 'Sensitivity', value: '90%', detail: 'True positive rate' },
              { metric: 'Specificity', value: '82%', detail: 'True negative rate' },
              { metric: 'Processing', value: '<3s', detail: 'Average latency' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-semibold text-hud-glow-cyan mb-2">{item.value}</div>
                <div className="mono text-xs text-hud-text-muted mb-1">{item.metric}</div>
                <div className="text-xs text-hud-text-muted">{item.detail}</div>
              </div>
            ))}
          </div>
        </HUDPanel>

        {/* Integration Guide */}
        <SectionHeader
          sectionId="12/14"
          label="MODULE: INTEGRATION"
          title="Integration & Deployment"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">API Endpoints</h3>
              <div className="space-y-3">
                <div className="p-4 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-2">POST /api/sleep/assess</div>
                  <div className="text-xs text-hud-text-muted mb-2">Submit audio, motion, questionnaire</div>
                  <div className="mono text-xs text-hud-text-muted">Returns: Risk band + recommendation</div>
                </div>
                <div className="p-4 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-2">GET /api/sleep/status</div>
                  <div className="text-xs text-hud-text-muted">Check processing status</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Deployment</h3>
              <div className="space-y-3">
                <HUDPanel className="p-4" withBrackets>
                  <div className="mono text-xs text-hud-glow-teal mb-2">CLOUD</div>
                  <div className="text-sm text-hud-text-muted">SaaS, HIPAA-compliant, auto-scaling</div>
                </HUDPanel>
                <HUDPanel className="p-4" withBrackets>
                  <div className="mono text-xs text-hud-glow-teal mb-2">ON-PREMISE</div>
                  <div className="text-sm text-hud-text-muted">Self-hosted, full data control</div>
                </HUDPanel>
              </div>
            </div>
          </div>
        </HUDPanel>

        {/* Case Studies */}
        <SectionHeader
          sectionId="13/14"
          label="MODULE: CASE STUDIES"
          title="Clinical Case Studies"
          className="mt-16"
        />
        <div className="space-y-6 mt-6">
          {[
            {
              case: 'Case 1: Chronic Fatigue',
              patient: '48-year-old, office worker',
              presentation: '6-month fatigue, mild snoring',
              traditional: 'Immediate sleep study referral',
              livecorp: 'Home monitoring: low risk, defer sleep lab',
              outcome: 'Resolved with lifestyle changes, $1,200 saved',
            },
            {
              case: 'Case 2: Snoring Concerns',
              patient: '55-year-old, partner complaints',
              presentation: 'Loud snoring, no daytime symptoms',
              traditional: 'Polysomnography ordered',
              livecorp: 'Audio analysis: moderate risk, home monitoring',
              outcome: 'Sleep lab deferred, $800 saved',
            },
          ].map((study, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-3">{study.case}</div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-2">PATIENT</div>
                  <div className="text-sm text-hud-text-primary mb-4">{study.patient}</div>
                  <div className="mono text-xs text-hud-text-muted mb-2">PRESENTATION</div>
                  <div className="text-sm text-hud-text-muted">{study.presentation}</div>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="mono text-xs text-hud-warning mb-2">TRADITIONAL</div>
                      <div className="text-xs text-hud-text-muted">{study.traditional}</div>
                    </div>
                    <div>
                      <div className="mono text-xs text-hud-glow-teal mb-2">LIVE CORP</div>
                      <div className="text-xs text-hud-text-muted">{study.livecorp}</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-hud-line-secondary">
                    <div className="mono text-xs text-hud-glow-teal">{study.outcome}</div>
                  </div>
                </div>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* How This Service Fits */}
        <SectionHeader
          sectionId="14/14"
          label="MODULE: INTEGRATION"
          title="How This Service Fits the Engine"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="flex items-center justify-between mb-6 relative">
            {['Inputs', 'Validation', 'Fusion', 'Output', 'Safety'].map((stage, i) => (
              <div key={i} className="flex flex-col items-center relative z-10">
                <div className="w-12 h-12 border-2 border-hud-glow-cyan rounded-full flex items-center justify-center mb-2">
                  <span className="mono text-xs text-hud-glow-cyan">{i + 1}</span>
                </div>
                <div className="mono text-xs text-hud-text-muted text-center">{stage}</div>
              </div>
            ))}
            <div className="absolute top-6 left-12 right-12 h-0.5 bg-hud-line-primary" />
          </div>
          <p className="text-sm text-hud-text-muted text-center">
            This service operates within Live Corp's Test-Minimization Engine and follows the same abstain-when-uncertain and escalation rules.
          </p>
        </HUDPanel>

        {/* CTA Row */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-hud-glow-cyan/20 border border-hud-glow-cyan text-hud-glow-cyan mono text-sm font-semibold hover:bg-hud-glow-cyan/30 transition-colors"
          >
            Request Clinic Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-hud-line-primary text-hud-text-primary mono text-sm font-semibold hover:bg-hud-panel transition-colors"
          >
            View Safety Framework
          </motion.button>
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-hud-line-primary text-hud-text-primary mono text-sm font-semibold hover:bg-hud-panel transition-colors inline-block text-center"
          >
            Explore Other Services
          </motion.a>
        </div>
      </div>

      <style jsx>{`
        @keyframes signal-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
