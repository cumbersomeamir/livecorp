'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

export default function RespiratoryService() {
  return (
    <div className="min-h-screen pt-20">
      {/* Sticky Header - Different Layout */}
      <div className="sticky top-0 z-40 bg-hud-bg-primary/90 backdrop-blur-hud border-b border-hud-line-secondary">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 border-2 border-hud-glow-teal rounded-full flex items-center justify-center">
                <span className="mono text-xs text-hud-glow-teal">SVC-02</span>
              </div>
              <div>
                <div className="mono text-xs text-hud-glow-cyan mb-1">RESPIRATORY TRIAGE WING</div>
                <h1 className="text-2xl font-semibold">Pulmonary Flow Console</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="mono text-xs text-hud-glow-teal">STATUS: ACTIVE</div>
              <div className="mono text-xs text-hud-text-muted">MODE: ESCALATION ENABLED</div>
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
        {/* Hero - Pulmonary Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 min-h-[500px] relative"
        >
          <HUDPanel className="p-8 h-full" withBrackets>
            {/* Horizontal Airflow Streams */}
            <div className="absolute inset-0 overflow-hidden">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="absolute w-full h-2 bg-gradient-to-r from-transparent via-hud-glow-cyan to-transparent opacity-30"
                  style={{
                    top: `${15 + i * 12}%`,
                    animation: `flow-${i % 2 === 0 ? 'left' : 'right'} 4s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>

            {/* Audio Spectrogram Planes */}
            <div className="absolute inset-0 flex items-center justify-center pt-20">
              <div className="grid grid-cols-12 gap-1 w-full max-w-4xl">
                {Array.from({ length: 120 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-hud-glow-teal/40"
                    style={{
                      height: `${20 + Math.sin(i * 0.15) * 40}px`,
                      animation: 'spectrogram-pulse 2s ease-in-out infinite',
                      animationDelay: `${(i % 12) * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Oxygen Saturation Telemetry */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="mono text-xs text-hud-text-muted mb-2">SpO₂ TREND — 24 HOUR</div>
              <div className="h-20 border border-hud-line-primary relative bg-hud-bg-secondary/50">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 80">
                  <path
                    d="M 0 40 Q 100 30, 200 40 T 400 40 T 600 40 T 800 40"
                    fill="none"
                    stroke="#34F5C5"
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                  <path
                    d="M 0 50 Q 100 45, 200 50 T 400 50 T 600 50 T 800 50"
                    fill="none"
                    stroke="#2DE2FF"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                </svg>
                <div className="absolute top-2 left-4 mono text-xs text-hud-glow-teal">98%</div>
                <div className="absolute top-2 right-4 mono text-xs text-hud-text-muted">Current</div>
              </div>
            </div>
          </HUDPanel>
        </motion.div>

        {/* Problem - Two Column Layout */}
        <SectionHeader
          sectionId="01/14"
          label="MODULE: PROBLEM SPACE"
          title="The Problem"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6 md:col-span-2" withBrackets>
            <p className="text-hud-text-muted mb-4">
              Mild respiratory symptoms trigger X-rays and antibiotics.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mono text-xs text-hud-warning mb-2">OVER-ORDERING</div>
                <ul className="space-y-1 text-sm text-hud-text-muted">
                  <li>• Chest X-rays for colds</li>
                  <li>• Antibiotics without indication</li>
                  <li>• Repeat imaging for stable cases</li>
                </ul>
              </div>
              <div>
                <div className="mono text-xs text-hud-warning mb-2">COST IMPACT</div>
                <ul className="space-y-1 text-sm text-hud-text-muted">
                  <li>• $180 per unnecessary X-ray</li>
                  <li>• $50 per unnecessary antibiotic</li>
                  <li>• Delayed care for true cases</li>
                </ul>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-3">REDUCTION TARGET</div>
            <div className="text-4xl font-semibold text-hud-glow-cyan mb-2">35-50%</div>
            <div className="mono text-xs text-hud-text-muted">Low-yield imaging</div>
            <div className="mt-4 pt-4 border-t border-hud-line-secondary">
              <div className="text-2xl font-semibold text-hud-glow-teal">$1.8M</div>
              <div className="mono text-xs text-hud-text-muted">savings per 10K patients</div>
            </div>
          </HUDPanel>
        </div>

        {/* Clinical Scenarios - Different Layout */}
        <SectionHeader
          sectionId="02/14"
          label="MODULE: CLINICAL SCENARIOS"
          title="Respiratory Presentations"
          className="mt-16"
        />
        <div className="space-y-4 mt-6">
          {[
            {
              presentation: 'Acute Cough',
              duration: '<7 days',
              vitals: 'Normal',
              typical: 'Chest X-ray ordered',
              recommendation: 'Home care, no imaging',
              risk: 'Low',
            },
            {
              presentation: 'Chronic Cough',
              duration: '>3 weeks',
              vitals: 'Normal',
              typical: 'Chest X-ray + antibiotics',
              recommendation: 'Minimal panel: SpO₂ only',
              risk: 'Low-Moderate',
            },
            {
              presentation: 'Dyspnea',
              duration: 'Variable',
              vitals: 'Abnormal SpO₂',
              typical: 'Immediate imaging',
              recommendation: 'ESCALATE — urgent care',
              risk: 'High',
            },
          ].map((scenario, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1559757148-5c350d0d3c56' : i === 1 ? '1576091160399-112ba8d25d1f' : '1551601651-2a8555f1a136'}?w=800&h=400&fit=crop`}
                  alt={scenario.presentation}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">CASE {i + 1}</div>
              </div>
              <div className="grid md:grid-cols-5 gap-4 items-center">
                <div>
                  <div className="text-lg font-semibold">{scenario.presentation}</div>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Duration</div>
                  <div className="text-sm">{scenario.duration}</div>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Vitals</div>
                  <div className="text-sm">{scenario.vitals}</div>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Typical Action</div>
                  <div className="text-xs text-hud-warning">{scenario.typical}</div>
                </div>
                <div className="text-right">
                  <div className="mono text-xs text-hud-glow-teal mb-1">{scenario.recommendation}</div>
                  <div className="status-tag">{scenario.risk}</div>
                </div>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* Inputs - Visual Grid */}
        <SectionHeader
          sectionId="03/14"
          label="MODULE: INPUTS"
          title="Input Sources"
          className="mt-16"
        />
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {[
            { name: 'Cough Audio', detail: 'Frequency analysis, duration patterns', icon: '🎤', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop' },
            { name: 'Breath Sounds', detail: 'Wheezing, crackles, stridor detection', icon: '🔊', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop' },
            { name: 'SpO₂ Trends', detail: 'Continuous monitoring, desaturation events', icon: '📊', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
            { name: 'Symptoms', detail: 'Structured questionnaire, severity scoring', icon: '📝', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
          ].map((input, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={input.image}
                  alt={input.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/60 to-transparent" />
              </div>
              <div className="mono text-xs text-hud-glow-cyan mb-2 text-center">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="text-lg font-semibold mb-2 text-center">{input.name}</h3>
              <p className="text-xs text-hud-text-muted text-center">{input.detail}</p>
            </HUDPanel>
          ))}
        </div>

        {/* Signal Processing - Flow Diagram */}
        <SectionHeader
          sectionId="04/14"
          label="MODULE: PROCESSING"
          title="Audio & Signal Processing Pipeline"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-6 gap-4 mb-8">
            {['Capture', 'Filter', 'FFT', 'Classify', 'Fuse', 'Output'].map((stage, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 border-2 border-hud-glow-teal rounded-lg flex items-center justify-center mb-3">
                  <span className="mono text-xs text-hud-glow-teal">{i + 1}</span>
                </div>
                <div className="mono text-xs text-hud-text-muted text-center">{stage}</div>
                {i < 5 && (
                  <div className="absolute w-full h-0.5 bg-hud-line-primary top-10" style={{ left: `${i * 16.66 + 8.33}%`, width: '16.66%' }} />
                )}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-3">AUDIO ANALYSIS</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Frequency domain analysis (FFT)</li>
                <li>• Pattern recognition for cough types</li>
                <li>• Breath sound classification</li>
                <li>• Noise cancellation algorithms</li>
              </ul>
            </div>
            <div>
              <div className="mono text-xs text-hud-glow-teal mb-3">OXIMETRY PROCESSING</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Trend analysis over 24-48 hours</li>
                <li>• Desaturation event detection</li>
                <li>• Motion artifact filtering</li>
                <li>• Confidence scoring</li>
              </ul>
            </div>
          </div>
        </HUDPanel>

        {/* Engine Output - Detailed */}
        <SectionHeader
          sectionId="05/14"
          label="MODULE: OUTPUT"
          title="Engine Output & Recommendations"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets glow="teal">
            <div className="mono text-xs text-hud-glow-teal mb-4">HOME CARE PATHWAY</div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Confidence</div>
                <div className="text-xl font-semibold text-hud-glow-teal">82%</div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Recommendation</div>
                <div className="text-sm text-hud-text-primary">Symptomatic care, no imaging</div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Follow-up</div>
                <div className="text-sm text-hud-text-muted">Reassess in 48h if worsening</div>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-4">CLINIC PATHWAY</div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Confidence</div>
                <div className="text-xl font-semibold text-hud-glow-cyan">65%</div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Recommendation</div>
                <div className="text-sm text-hud-text-primary">Clinical evaluation, consider imaging</div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Tests</div>
                <div className="text-sm text-hud-text-muted">SpO₂, basic vitals only</div>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6 border-2 border-hud-critical/50" withBrackets>
            <div className="mono text-xs text-hud-critical mb-4">ESCALATION PATHWAY</div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Triggers</div>
                <div className="text-sm text-hud-text-primary">Fever, hypoxia, chest pain</div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Action</div>
                <div className="text-sm text-hud-critical">IMMEDIATE CARE</div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Imaging</div>
                <div className="text-sm text-hud-text-muted">Chest X-ray indicated</div>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* Test Minimization Impact - Visual Charts */}
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
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-hud-text-muted">Chest X-rays</span>
                    <span className="mono text-sm text-hud-glow-teal">-42%</span>
                  </div>
                  <div className="h-3 bg-hud-line-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-hud-glow-teal" style={{ width: '58%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-hud-text-muted">Antibiotic Prescriptions</span>
                    <span className="mono text-sm text-hud-glow-teal">-38%</span>
                  </div>
                  <div className="h-3 bg-hud-line-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-hud-glow-teal" style={{ width: '62%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-hud-text-muted">Repeat Visits</span>
                    <span className="mono text-sm text-hud-glow-teal">-25%</span>
                  </div>
                  <div className="h-3 bg-hud-line-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-hud-glow-teal" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Cost Analysis</h3>
              <div className="space-y-4">
                <HUDPanel className="p-4" withBrackets>
                  <div className="flex items-center justify-between mb-2">
                    <div className="mono text-xs text-hud-text-muted">Per Patient</div>
                    <div className="text-2xl font-semibold text-hud-glow-cyan">$180</div>
                  </div>
                  <div className="text-xs text-hud-text-muted">Average reduction</div>
                </HUDPanel>
                <HUDPanel className="p-4" withBrackets>
                  <div className="flex items-center justify-between mb-2">
                    <div className="mono text-xs text-hud-text-muted">Per 10K Patients</div>
                    <div className="text-2xl font-semibold text-hud-glow-teal">$1.8M</div>
                  </div>
                  <div className="text-xs text-hud-text-muted">Annual savings</div>
                </HUDPanel>
                <HUDPanel className="p-4" withBrackets>
                  <div className="flex items-center justify-between mb-2">
                    <div className="mono text-xs text-hud-text-muted">ROI</div>
                    <div className="text-2xl font-semibold text-hud-glow-teal">4.2x</div>
                  </div>
                  <div className="text-xs text-hud-text-muted">Return on investment</div>
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
                { time: 'T+0', title: 'Patient Presents', detail: 'Respiratory symptoms reported' },
                { time: 'T+2min', title: 'Audio Capture', detail: 'Cough audio, breath sounds recorded' },
                { time: 'T+3min', title: 'Vitals Sync', detail: 'SpO₂ trends, HR, BP integrated' },
                { time: 'T+5min', title: 'Signal Processing', detail: 'FFT analysis, pattern recognition' },
                { time: 'T+7min', title: 'Risk Assessment', detail: 'Engine generates pathway recommendation' },
                { time: 'T+8min', title: 'Clinician Review', detail: 'Override available, decision logged' },
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

        {/* Safety Triggers - Expanded */}
        <SectionHeader
          sectionId="08/14"
          label="MODULE: SAFETY"
          title="Safety Triggers & Escalation Criteria"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6 border-2 border-hud-critical/50" withBrackets>
            <div className="mono text-xs text-hud-critical mb-4">IMMEDIATE ESCALATION</div>
            <ul className="space-y-3">
              {['Fever >38.5°C', 'SpO₂ <92%', 'Chest pain', 'Hemoptysis', 'Severe dyspnea'].map((trigger, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-critical mt-1">⚠</span>
                  <span className="text-sm text-hud-text-muted">{trigger}</span>
                </li>
              ))}
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6 border-2 border-hud-warning/50" withBrackets>
            <div className="mono text-xs text-hud-warning mb-4">CAUTION FLAGS</div>
            <ul className="space-y-3">
              {['Age >65', 'Comorbidities', 'Immunocompromised', 'Recent travel'].map((flag, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-warning mt-1">→</span>
                  <span className="text-sm text-hud-text-muted">{flag}</span>
                </li>
              ))}
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-teal mb-4">MONITORING PROTOCOL</div>
            <ul className="space-y-3">
              {['Home care with SpO₂ monitoring', 'Reassess in 48 hours', 'Escalate if worsening', 'No antibiotics unless indicated'].map((protocol, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-teal mt-1">✓</span>
                  <span className="text-sm text-hud-text-muted">{protocol}</span>
                </li>
              ))}
            </ul>
          </HUDPanel>
        </div>

        {/* Use Cases - Different Format */}
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
              scenario: 'Acute cough evaluation',
              before: 'Chest X-ray + antibiotics',
              after: 'Home care, no imaging',
              savings: '$230 per case',
            },
            {
              setting: 'Urgent Care',
              scenario: 'Respiratory triage',
              before: 'Routine imaging for all',
              after: 'Selective imaging only',
              savings: '40% reduction',
            },
            {
              setting: 'Telemedicine',
              scenario: 'Remote respiratory assessment',
              before: 'In-person visit required',
              after: 'Audio + SpO₂ sufficient',
              savings: '60% avoid visits',
            },
            {
              setting: 'Pediatric Care',
              scenario: 'Childhood respiratory symptoms',
              before: 'Immediate X-ray',
              after: 'Observation first',
              savings: 'Reduce radiation exposure',
            },
          ].map((useCase, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-48 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1576091160399-112ba8d25d1f' : i === 1 ? '1551601651-2a8555f1a136' : i === 2 ? '1454165804606-c3d57bc86b40' : '1559757148-5c350d0d3c56'}?w=600&h=400&fit=crop`}
                  alt={useCase.setting}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">USE CASE {i + 1}</div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{useCase.setting}</h3>
              <div className="space-y-2 mb-4">
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Scenario</div>
                  <div className="text-sm text-hud-text-primary">{useCase.scenario}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-hud-line-secondary">
                  <div>
                    <div className="mono text-xs text-hud-warning mb-1">Before</div>
                    <div className="text-xs text-hud-text-muted">{useCase.before}</div>
                  </div>
                  <div>
                    <div className="mono text-xs text-hud-glow-teal mb-1">After</div>
                    <div className="text-xs text-hud-text-muted">{useCase.after}</div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-glow-teal">{useCase.savings}</div>
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
              <li>• Frequency range: 20Hz-20kHz</li>
              <li>• FFT window: 2048 samples</li>
              <li>• Noise reduction: Auto</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">OXIMETRY</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Sampling: 1Hz continuous</li>
              <li>• Accuracy: ±2%</li>
              <li>• Motion artifact: Filtered</li>
              <li>• Trend analysis: 24-48h</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">ML MODELS</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Cough classifier: v2.3.1</li>
              <li>• Breath sound: v1.9.4</li>
              <li>• Risk calculator: v3.1.2</li>
              <li>• Confidence: 78% threshold</li>
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
              { metric: 'Accuracy', value: '89%', detail: 'Validated on 15K cases' },
              { metric: 'Sensitivity', value: '94%', detail: 'True positive rate' },
              { metric: 'Specificity', value: '86%', detail: 'True negative rate' },
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
                  <div className="mono text-xs text-hud-glow-cyan mb-2">POST /api/respiratory/assess</div>
                  <div className="text-xs text-hud-text-muted mb-2">Submit audio, SpO₂, symptoms</div>
                  <div className="mono text-xs text-hud-text-muted">Returns: Pathway recommendation</div>
                </div>
                <div className="p-4 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-2">GET /api/respiratory/status</div>
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
              case: 'Case 1: Acute Cough',
              patient: '45-year-old, healthy',
              presentation: '3-day cough, no fever, normal vitals',
              traditional: 'Chest X-ray ordered',
              livecorp: 'Home care pathway, no imaging',
              outcome: 'Resolved in 5 days, $180 saved',
            },
            {
              case: 'Case 2: Chronic Cough',
              patient: '62-year-old, smoker',
              presentation: '4-week cough, normal SpO₂',
              traditional: 'X-ray + antibiotics',
              livecorp: 'Minimal panel, defer antibiotics',
              outcome: 'No imaging needed, $230 saved',
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
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="mono text-xs text-hud-warning mb-2">TRADITIONAL</div>
                      <div className="text-xs text-hud-text-muted">{study.traditional}</div>
                    </div>
                    <div>
                      <div className="mono text-xs text-hud-glow-teal mb-2">LIVE CORP</div>
                      <div className="text-xs text-hud-text-muted">{study.livecorp}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-hud-line-secondary">
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
        @keyframes flow-left {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        @keyframes flow-right {
          0%, 100% { transform: translateX(100%); }
          50% { transform: translateX(-100%); }
        }
        @keyframes spectrogram-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
