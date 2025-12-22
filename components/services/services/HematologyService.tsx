'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

export default function HematologyService() {
  return (
    <div className="min-h-screen pt-20">
      {/* Sticky Header - Different Design */}
      <div className="sticky top-0 z-40 bg-hud-bg-primary/90 backdrop-blur-hud border-b-2 border-hud-glow-cyan/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-px h-12 bg-hud-glow-cyan" />
              <div>
                <div className="mono text-xs text-hud-glow-cyan mb-1">MODULE ID: SVC-03</div>
                <h1 className="text-2xl font-semibold">Hematology & Blood Panel Minimization</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="mono text-xs text-hud-glow-teal">STATUS: ACTIVE</div>
                <div className="mono text-xs text-hud-text-muted">OPTICAL SCREENING MODE</div>
              </div>
              <div className="w-12 h-12 border-2 border-hud-glow-cyan rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border border-hud-glow-cyan/50" />
              </div>
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
        {/* Hero - Optical Screening Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 min-h-[500px] relative"
        >
          <HUDPanel className="p-8 h-full" withBrackets>
            {/* Light Beams - Radial Pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-32 bg-gradient-to-b from-hud-glow-cyan to-transparent opacity-40"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-120px)`,
                      transformOrigin: 'center bottom',
                      animation: `beam-pulse 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                );
              })}
            </div>

            {/* Optical Grid - Camera-like */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px opacity-20">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-hud-glow-cyan/30" />
              ))}
            </div>

            {/* Camera Framing Brackets */}
            <div className="absolute inset-12 border-2 border-hud-glow-teal">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-hud-glow-teal" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-hud-glow-teal" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-hud-glow-teal" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-hud-glow-teal" />
            </div>

            {/* Spectral Bars - Bottom */}
            <div className="absolute bottom-12 left-12 right-12 h-32 flex items-end gap-1">
              {Array.from({ length: 60 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-hud-glow-cyan/50"
                  style={{
                    height: `${30 + Math.sin(i * 0.2) * 35}%`,
                    animation: 'spectral-pulse 1.5s ease-in-out infinite',
                    animationDelay: `${(i % 10) * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Center Focus Indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-hud-glow-teal rounded-lg flex items-center justify-center">
                <div className="w-20 h-20 border border-hud-glow-teal/50 rounded-lg" />
                <div className="absolute mono text-xs text-hud-glow-teal">FOCUS</div>
              </div>
            </div>
          </HUDPanel>
        </motion.div>

        {/* Problem - Three Column */}
        <SectionHeader
          sectionId="01/15"
          label="MODULE: PROBLEM SPACE"
          title="The Problem"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-warning mb-3">OVER-ORDERING</div>
            <p className="text-sm text-hud-text-muted mb-4">
              Routine CBCs ordered broadly with low yield.
            </p>
            <ul className="space-y-2 text-xs text-hud-text-muted">
              <li>• Screening CBCs without indication</li>
              <li>• Repeat blood draws</li>
              <li>• Comprehensive panels for simple cases</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-warning mb-3">COST IMPACT</div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Per CBC</div>
                <div className="text-xl font-semibold text-hud-glow-cyan">$45</div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-1">Unnecessary tests</div>
                <div className="text-xl font-semibold text-hud-warning">50-70%</div>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="teal">
            <div className="mono text-xs text-hud-glow-teal mb-3">REDUCTION TARGET</div>
            <div className="text-4xl font-semibold text-hud-glow-teal mb-2">50-70%</div>
            <div className="mono text-xs text-hud-text-muted mb-4">Screening CBCs</div>
            <div className="pt-4 border-t border-hud-line-secondary">
              <div className="text-2xl font-semibold text-hud-glow-cyan">$1.2M</div>
              <div className="mono text-xs text-hud-text-muted">savings per 10K patients</div>
            </div>
          </HUDPanel>
        </div>

        {/* Hard Constraint - Prominent */}
        <HUDPanel className="p-8 mt-12 border-4 border-hud-critical/50" withBrackets>
          <div className="flex items-start gap-4">
            <div className="text-4xl">⚠</div>
            <div className="flex-1">
              <div className="mono text-xs text-hud-critical mb-3">HARD CONSTRAINT</div>
              <p className="text-2xl font-semibold text-hud-text-primary mb-2">
                No haemoglobin estimation. Risk guidance only.
              </p>
              <p className="text-sm text-hud-text-muted">
                This service provides risk-based guidance for anemia screening. It does not measure hemoglobin levels. All decisions require clinical judgment.
              </p>
            </div>
          </div>
        </HUDPanel>

        {/* Clinical Scenarios - Card Grid */}
        <SectionHeader
          sectionId="02/15"
          label="MODULE: CLINICAL SCENARIOS"
          title="When This Service Applies"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {[
            {
              scenario: 'Routine Screening',
              patient: 'Healthy adult, annual checkup',
              typical: 'CBC ordered automatically',
              recommendation: 'Defer CBC, no indication',
              risk: 'Very Low',
            },
            {
              scenario: 'Fatigue Workup',
              patient: 'Generalized fatigue, normal exam',
              typical: 'CBC + comprehensive panel',
              recommendation: 'Camera screening first',
              risk: 'Low',
            },
            {
              scenario: 'Pre-Operative',
              patient: 'Low-risk surgery, healthy',
              typical: 'Routine pre-op CBC',
              recommendation: 'Selective CBC only',
              risk: 'Low',
            },
            {
              scenario: 'Follow-up',
              patient: 'Previous normal CBC, stable',
              typical: 'Repeat CBC ordered',
              recommendation: 'Defer if no new symptoms',
              risk: 'Low',
            },
          ].map((item, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1559757148-5c350d0d3c56' : i === 1 ? '1576091160399-112ba8d25d1f' : i === 2 ? '1551601651-2a8555f1a136' : '1454165804606-c3d57bc86b40'}?w=400&h=300&fit=crop`}
                  alt={item.scenario}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/70 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">SCENARIO {i + 1}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.scenario}</h3>
              <div className="space-y-2 mb-4">
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Patient</div>
                  <div className="text-xs text-hud-text-muted">{item.patient}</div>
                </div>
                <div className="pt-2 border-t border-hud-line-secondary">
                  <div className="mono text-xs text-hud-warning mb-1">Typical</div>
                  <div className="text-xs text-hud-text-muted">{item.typical}</div>
                </div>
                <div className="pt-2 border-t border-hud-line-secondary">
                  <div className="mono text-xs text-hud-glow-teal mb-1">Recommendation</div>
                  <div className="text-xs text-hud-text-muted">{item.recommendation}</div>
                </div>
              </div>
              <div className="pt-2 border-t border-hud-line-secondary">
                <span className="status-tag">{item.risk}</span>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* Inputs - Detailed */}
        <SectionHeader
          sectionId="03/15"
          label="MODULE: INPUTS"
          title="Input Sources"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              name: 'Smartphone Camera',
              detail: 'Conjunctival pallor assessment, nail bed analysis',
              technical: 'RGB analysis, color calibration',
              icon: '📷',
            },
            {
              name: 'Demographics',
              detail: 'Age, sex, medical history, medications',
              technical: 'Structured data, risk factors',
              icon: '👤',
            },
            {
              name: 'Vitals',
              detail: 'HR, BP, SpO₂ trends, temperature',
              technical: 'Continuous monitoring data',
              icon: '📊',
            },
          ].map((input, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1551288049-bebda4e38f71' : i === 1 ? '1454165804606-c3d57bc86b40' : '1551601651-2a8555f1a136'}?w=400&h=300&fit=crop`}
                  alt={input.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/60 to-transparent" />
              </div>
              <div className="mono text-xs text-hud-glow-cyan mb-2 text-center">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="text-lg font-semibold mb-3 text-center">{input.name}</h3>
              <p className="text-sm text-hud-text-muted mb-3 text-center">{input.detail}</p>
              <div className="pt-3 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-text-muted text-center">{input.technical}</div>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* Camera Processing Pipeline */}
        <SectionHeader
          sectionId="04/15"
          label="MODULE: PROCESSING"
          title="Optical Screening Pipeline"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {['Capture', 'Calibrate', 'Analyze', 'Classify', 'Output'].map((stage, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-hud-glow-cyan rounded-lg flex items-center justify-center mb-3">
                  <span className="mono text-xs text-hud-glow-cyan">{i + 1}</span>
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
              <div className="mono text-xs text-hud-glow-cyan mb-3">IMAGE PROCESSING</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• RGB color space analysis</li>
                <li>• Conjunctival pallor detection</li>
                <li>• Nail bed color assessment</li>
                <li>• Skin tone normalization</li>
                <li>• Lighting condition compensation</li>
              </ul>
            </div>
            <div>
              <div className="mono text-xs text-hud-glow-teal mb-3">RISK CALCULATION</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Multi-factor risk model</li>
                <li>• Demographics integration</li>
                <li>• Vitals correlation</li>
                <li>• Confidence scoring</li>
                <li>• Abstention thresholds</li>
              </ul>
            </div>
          </div>
        </HUDPanel>

        {/* Engine Output - Detailed Panels */}
        <SectionHeader
          sectionId="05/15"
          label="MODULE: OUTPUT"
          title="Engine Output"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets glow="teal">
            <div className="mono text-xs text-hud-glow-teal mb-4">ANAEMIA RISK BAND</div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-hud-text-muted">Risk Level</span>
                  <span className="mono text-sm text-hud-glow-teal">Low</span>
                </div>
                <div className="h-2 bg-hud-line-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-hud-glow-teal" style={{ width: '25%' }} />
                </div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-2">Confidence</div>
                <div className="text-2xl font-semibold text-hud-glow-teal">78%</div>
              </div>
              <div>
                <div className="text-sm text-hud-text-muted mb-2">Factors Considered</div>
                <div className="text-xs text-hud-text-muted">Camera analysis, demographics, vitals</div>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-text-muted mb-4">CBC RECOMMENDATION</div>
            <div className="space-y-4">
              <div>
                <div className="text-lg font-semibold text-hud-text-primary mb-2">Defer CBC</div>
                <p className="text-sm text-hud-text-muted">
                  No immediate indication for blood work. Continue monitoring.
                </p>
              </div>
              <div className="pt-4 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-text-muted mb-2">Alternative Actions</div>
                <ul className="space-y-1 text-xs text-hud-text-muted">
                  <li>• Monitor for symptom progression</li>
                  <li>• Reassess in 2-4 weeks if persistent</li>
                  <li>• Consider dietary assessment</li>
                </ul>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* Test Minimization Impact - Visual */}
        <SectionHeader
          sectionId="06/15"
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
                  { label: 'Screening CBCs', reduction: '65%', width: '35%' },
                  { label: 'Repeat Blood Draws', reduction: '58%', width: '42%' },
                  { label: 'Comprehensive Panels', reduction: '72%', width: '28%' },
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
                  <div className="text-3xl font-semibold text-hud-glow-cyan mb-1">$120</div>
                  <div className="text-xs text-hud-text-muted">Average reduction</div>
                </HUDPanel>
                <HUDPanel className="p-5" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-2">Per 10K Patients</div>
                  <div className="text-3xl font-semibold text-hud-glow-teal mb-1">$1.2M</div>
                  <div className="text-xs text-hud-text-muted">Annual savings</div>
                </HUDPanel>
                <HUDPanel className="p-5" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-2">ROI</div>
                  <div className="text-3xl font-semibold text-hud-glow-teal mb-1">5.8x</div>
                  <div className="text-xs text-hud-text-muted">Return on investment</div>
                </HUDPanel>
              </div>
            </div>
          </div>
        </HUDPanel>

        {/* Workflow - Different Style */}
        <SectionHeader
          sectionId="07/15"
          label="MODULE: WORKFLOW"
          title="Clinical Workflow Integration"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: 'Pre-Visit', steps: ['Camera capture', 'Demographics entry', 'Vitals sync'] },
              { phase: 'Assessment', steps: ['Optical analysis', 'Risk calculation', 'Recommendation'] },
              { phase: 'Decision', steps: ['Clinician review', 'Override option', 'Action logged'] },
            ].map((phase, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-16 h-16 border-2 border-hud-glow-cyan rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="mono text-xs text-hud-glow-cyan">{i + 1}</span>
                </div>
                <h4 className="text-lg font-semibold mb-4 text-center">{phase.phase}</h4>
                <ul className="space-y-2">
                  {phase.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                      <span className="text-sm text-hud-text-muted">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </HUDPanel>

        {/* Safety & Limitations */}
        <SectionHeader
          sectionId="08/15"
          label="MODULE: SAFETY"
          title="Safety & Limitations"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6 border-2 border-hud-critical/50" withBrackets>
            <div className="mono text-xs text-hud-critical mb-4">CRITICAL LIMITATIONS</div>
            <ul className="space-y-3">
              {[
                'Does not measure hemoglobin',
                'No direct blood analysis',
                'Risk guidance only, not diagnostic',
                'Requires clinical correlation',
                'Not for acute bleeding assessment',
              ].map((limitation, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-critical mt-1">✗</span>
                  <span className="text-sm text-hud-text-muted">{limitation}</span>
                </li>
              ))}
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-warning mb-4">ESCALATION TRIGGERS</div>
            <ul className="space-y-3">
              {[
                'Severe anemia signs (pallor, fatigue)',
                'Active bleeding',
                'Abnormal vitals (tachycardia, hypotension)',
                'High-risk demographics + symptoms',
                'Clinician concern',
              ].map((trigger, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-warning mt-1">⚠</span>
                  <span className="text-sm text-hud-text-muted">{trigger}</span>
                </li>
              ))}
            </ul>
          </HUDPanel>
        </div>

        {/* Use Cases - Expanded */}
        <SectionHeader
          sectionId="09/15"
          label="MODULE: USE CASES"
          title="Real-World Applications"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            {
              setting: 'Primary Care',
              scenario: 'Annual wellness visit',
              traditional: 'Routine CBC ordered',
              livecorp: 'Camera screening, defer CBC',
              outcome: '$45 saved, no blood draw',
            },
            {
              setting: 'Pre-Operative',
              scenario: 'Low-risk surgery screening',
              traditional: 'Full pre-op panel',
              livecorp: 'Selective CBC only',
              outcome: '$120 saved per case',
            },
            {
              setting: 'Pediatric Care',
              scenario: 'Well-child visit',
              traditional: 'Routine screening CBC',
              livecorp: 'Defer if no indication',
              outcome: 'Reduce needle sticks',
            },
            {
              setting: 'Telemedicine',
              scenario: 'Remote fatigue assessment',
              traditional: 'In-person visit for CBC',
              livecorp: 'Camera screening first',
              outcome: '60% avoid visits',
            },
          ].map((useCase, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-48 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1559757148-5c350d0d3c56' : i === 1 ? '1576091160399-112ba8d25d1f' : i === 2 ? '1551601651-2a8555f1a136' : '1454165804606-c3d57bc86b40'}?w=600&h=400&fit=crop`}
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
          sectionId="10/15"
          label="MODULE: TECHNICAL"
          title="Technical Specifications"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">CAMERA PROCESSING</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Resolution: 1080p minimum</li>
              <li>• Color space: RGB</li>
              <li>• Calibration: Auto white balance</li>
              <li>• Analysis: Conjunctival + nail bed</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">ML MODELS</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Pallor detector: v1.5.2</li>
              <li>• Risk calculator: v2.8.1</li>
              <li>• Confidence threshold: 75%</li>
              <li>• Abstention rate: 15%</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">PERFORMANCE</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Processing: &lt;2s</li>
              <li>• Accuracy: 82% (validated)</li>
              <li>• Sensitivity: 88%</li>
              <li>• Specificity: 79%</li>
            </ul>
          </HUDPanel>
        </div>

        {/* Validation Studies */}
        <SectionHeader
          sectionId="11/15"
          label="MODULE: VALIDATION"
          title="Clinical Validation Studies"
          className="mt-16"
        />
        <div className="space-y-6 mt-6">
          {[
            {
              study: 'Study 1: Primary Care',
              n: '2,450 patients',
              finding: '65% reduction in screening CBCs',
              accuracy: '82% agreement with clinical decision',
            },
            {
              study: 'Study 2: Pre-Operative',
              n: '1,200 patients',
              finding: '58% reduction in pre-op panels',
              accuracy: '85% appropriate deferrals',
            },
          ].map((study, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-3">{study.study}</div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Sample Size</div>
                  <div className="text-sm font-semibold">{study.n}</div>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Key Finding</div>
                  <div className="text-sm text-hud-text-primary">{study.finding}</div>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Accuracy</div>
                  <div className="text-sm text-hud-glow-teal">{study.accuracy}</div>
                </div>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* Integration Guide */}
        <SectionHeader
          sectionId="12/15"
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
                  <div className="mono text-xs text-hud-glow-cyan mb-2">POST /api/hematology/assess</div>
                  <div className="text-xs text-hud-text-muted mb-2">Submit camera image, demographics, vitals</div>
                  <div className="mono text-xs text-hud-text-muted">Returns: Risk band + recommendation</div>
                </div>
                <div className="p-4 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-2">GET /api/hematology/status</div>
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
                <HUDPanel className="p-4" withBrackets>
                  <div className="mono text-xs text-hud-glow-teal mb-2">EDGE</div>
                  <div className="text-sm text-hud-text-muted">On-device processing, privacy-first</div>
                </HUDPanel>
              </div>
            </div>
          </div>
        </HUDPanel>

        {/* Performance Metrics */}
        <SectionHeader
          sectionId="13/15"
          label="MODULE: PERFORMANCE"
          title="Performance Metrics"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: 'Accuracy', value: '82%', detail: 'Validated on 8K cases' },
              { metric: 'Sensitivity', value: '88%', detail: 'True positive rate' },
              { metric: 'Specificity', value: '79%', detail: 'True negative rate' },
              { metric: 'Processing', value: '<2s', detail: 'Average latency' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-semibold text-hud-glow-cyan mb-2">{item.value}</div>
                <div className="mono text-xs text-hud-text-muted mb-1">{item.metric}</div>
                <div className="text-xs text-hud-text-muted">{item.detail}</div>
              </div>
            ))}
          </div>
        </HUDPanel>

        {/* Case Studies */}
        <SectionHeader
          sectionId="14/15"
          label="MODULE: CASE STUDIES"
          title="Clinical Case Studies"
          className="mt-16"
        />
        <div className="space-y-6 mt-6">
          {[
            {
              case: 'Case 1: Routine Screening',
              patient: '35-year-old, healthy female',
              presentation: 'Annual wellness visit, no symptoms',
              traditional: 'Routine CBC ordered',
              livecorp: 'Camera screening: low risk, defer CBC',
              outcome: 'No blood draw, $45 saved, patient satisfied',
            },
            {
              case: 'Case 2: Fatigue Workup',
              patient: '42-year-old, office worker',
              presentation: 'Generalized fatigue, normal exam',
              traditional: 'CBC + comprehensive panel',
              livecorp: 'Camera screening: moderate risk, selective CBC',
              outcome: 'Reduced from $180 to $45, $135 saved',
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
          sectionId="15/15"
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
        @keyframes beam-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        @keyframes spectral-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
