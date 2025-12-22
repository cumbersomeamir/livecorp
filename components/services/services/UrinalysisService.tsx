'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

const dipstickColors = [
  { name: 'LEU', color: '#FFB020', value: 'Neg' },
  { name: 'NIT', color: '#FF3B3B', value: 'Neg' },
  { name: 'PRO', color: '#2DE2FF', value: 'Trace' },
  { name: 'GLU', color: '#34F5C5', value: 'Neg' },
  { name: 'KET', color: '#FFB020', value: 'Neg' },
  { name: 'BIL', color: '#FFB020', value: 'Neg' },
  { name: 'BLD', color: '#FF3B3B', value: 'Neg' },
  { name: 'SG', color: '#2DE2FF', value: '1.010' },
];

export default function UrinalysisService() {
  return (
    <div className="min-h-screen pt-20">
      {/* Sticky Header - Colorimetric Theme */}
      <div className="sticky top-0 z-40 bg-hud-bg-primary/90 backdrop-blur-hud border-b-2 border-hud-glow-teal/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 gap-1 w-12 h-12">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="border border-hud-glow-teal/50" style={{ backgroundColor: dipstickColors[i]?.color + '20' }} />
                ))}
              </div>
              <div>
                <div className="mono text-xs text-hud-glow-cyan mb-1">MODULE ID: SVC-04</div>
                <h1 className="text-2xl font-semibold">Urinalysis & Infection Wing</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="mono text-xs text-hud-glow-teal">STATUS: ACTIVE</div>
              <div className="mono text-xs text-hud-text-muted">COLORIMETRIC MODE</div>
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
        {/* Hero - Colorimetric Pattern Interpreter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <HUDPanel className="p-8" withBrackets>
            {/* Dipstick Alignment Frame */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="mono text-xs text-hud-text-muted mb-2 text-center">DIPSTICK ANALYSIS</div>
                <div className="w-full max-w-4xl h-20 border-2 border-hud-glow-teal relative">
                  {/* Color-indexed Grid */}
                  <div className="absolute inset-0 flex">
                    {dipstickColors.map((item, i) => (
                      <div
                        key={i}
                        className="flex-1 border-r border-hud-line-primary last:border-r-0 flex flex-col items-center justify-center relative"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <div
                          className="w-full h-12 mb-1 transition-all"
                          style={{ backgroundColor: item.color, opacity: 0.7 }}
                        />
                        <div className="mono text-xs text-hud-text-muted">{item.name}</div>
                        <div className="mono text-xs text-hud-glow-teal mt-1">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Calibration Strips */}
                <div className="absolute -top-8 left-0 right-0 flex justify-between">
                  <div className="mono text-xs text-hud-text-muted">REFERENCE</div>
                  <div className="mono text-xs text-hud-text-muted">SAMPLE</div>
                </div>
              </div>
            </div>

            {/* Pattern Matching Overlay */}
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <HUDPanel key={i} className="p-4" withBrackets>
                  <div className="mono text-xs text-hud-glow-cyan mb-2">PATTERN {i + 1}</div>
                  <div className="h-16 bg-gradient-to-r from-hud-glow-cyan/20 via-hud-glow-teal/20 to-hud-glow-cyan/20 mb-2" />
                  <div className="mono text-xs text-hud-text-muted text-center">
                    {i === 0 && 'Normal'}
                    {i === 1 && 'UTI Suspected'}
                    {i === 2 && 'Dehydration'}
                    {i === 3 && 'Proteinuria'}
                  </div>
                </HUDPanel>
              ))}
            </div>
          </HUDPanel>
        </motion.div>

        {/* Problem - Split Layout */}
        <SectionHeader
          sectionId="01/13"
          label="MODULE: PROBLEM SPACE"
          title="The Problem"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <p className="text-hud-text-muted mb-4">
              Lab urinalysis over-ordered for simple symptoms.
            </p>
            <div className="space-y-2 text-sm text-hud-text-muted">
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Routine urinalysis for asymptomatic patients</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Repeat testing without indication</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Lab urinalysis when dipstick sufficient</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-3">IMPACT METRICS</div>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-semibold text-hud-glow-cyan mb-1">45-65%</div>
                <div className="mono text-xs text-hud-text-muted">Reduction in lab urinalysis</div>
              </div>
              <div className="pt-4 border-t border-hud-line-secondary">
                <div className="text-2xl font-semibold text-hud-glow-teal mb-1">$950K</div>
                <div className="mono text-xs text-hud-text-muted">Savings per 10K patients</div>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* Clinical Scenarios */}
        <SectionHeader
          sectionId="02/13"
          label="MODULE: CLINICAL SCENARIOS"
          title="When This Service Applies"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              scenario: 'UTI Symptoms',
              presentation: 'Dysuria, frequency, no fever',
              typical: 'Lab urinalysis + culture',
              recommendation: 'Dipstick first, defer culture if negative',
              risk: 'Low',
            },
            {
              scenario: 'Asymptomatic Screening',
              presentation: 'Routine checkup, no symptoms',
              typical: 'Routine urinalysis ordered',
              recommendation: 'Defer, no indication',
              risk: 'Very Low',
            },
            {
              scenario: 'Follow-up Testing',
              presentation: 'Previous normal, stable symptoms',
              typical: 'Repeat lab urinalysis',
              recommendation: 'Dipstick sufficient if stable',
              risk: 'Low',
            },
          ].map((item, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1576091160399-112ba8d25d1f' : i === 1 ? '1559757148-5c350d0d3c56' : '1551601651-2a8555f1a136'}?w=400&h=300&fit=crop`}
                  alt={item.scenario}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/70 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">SCENARIO {i + 1}</div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.scenario}</h3>
              <div className="space-y-2 mb-4">
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-1">Presentation</div>
                  <div className="text-xs text-hud-text-muted">{item.presentation}</div>
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

        {/* Inputs */}
        <SectionHeader
          sectionId="03/13"
          label="MODULE: INPUTS"
          title="Input Sources"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            {
              name: 'Dipstick Camera Capture',
              detail: 'Colorimetric analysis of test strips',
              technical: 'RGB analysis, color matching algorithms',
              icon: '📸',
            },
            {
              name: 'Symptoms',
              detail: 'Structured questionnaire, severity scoring',
              technical: 'UTI symptom score, pain scale',
              icon: '📝',
            },
          ].map((input, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1551288049-bebda4e38f71' : '1454165804606-c3d57bc86b40'}?w=400&h=300&fit=crop`}
                  alt={input.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
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

        {/* Color Processing Pipeline */}
        <SectionHeader
          sectionId="04/13"
          label="MODULE: PROCESSING"
          title="Colorimetric Analysis Pipeline"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {['Capture', 'Calibrate', 'Match', 'Interpret'].map((stage, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-hud-glow-teal rounded-lg flex items-center justify-center mb-3">
                  <span className="mono text-xs text-hud-glow-teal">{i + 1}</span>
                </div>
                <div className="mono text-xs text-hud-text-muted text-center">{stage}</div>
                {i < 3 && (
                  <div className="absolute w-full h-0.5 bg-hud-line-primary top-8" style={{ left: `${i * 25 + 12.5}%`, width: '25%' }} />
                )}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-3">COLOR ANALYSIS</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• RGB color space extraction</li>
                <li>• Reference strip calibration</li>
                <li>• Color matching algorithms</li>
                <li>• Lighting condition normalization</li>
              </ul>
            </div>
            <div>
              <div className="mono text-xs text-hud-glow-teal mb-3">INTERPRETATION</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Pattern recognition</li>
                <li>• Clinical correlation</li>
                <li>• Risk stratification</li>
                <li>• Recommendation generation</li>
              </ul>
            </div>
          </div>
        </HUDPanel>

        {/* Engine Output */}
        <SectionHeader
          sectionId="05/13"
          label="MODULE: OUTPUT"
          title="Engine Output"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets glow="teal">
            <div className="mono text-xs text-hud-glow-teal mb-4">DIPSTICK INTERPRETATION</div>
            <div className="space-y-3">
              {[
                { param: 'LEU', result: 'Negative', color: 'hud-glow-teal' },
                { param: 'NIT', result: 'Negative', color: 'hud-glow-teal' },
                { param: 'PRO', result: 'Trace', color: 'hud-warning' },
                { param: 'BLD', result: 'Negative', color: 'hud-glow-teal' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-hud-text-muted">{item.param}</span>
                  <span className={`mono text-sm text-${item.color}`}>{item.result}</span>
                </div>
              ))}
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-text-muted mb-4">RECOMMENDATION</div>
            <div className="space-y-3">
              <div>
                <div className="text-lg font-semibold text-hud-text-primary mb-2">Retest / Treat / Escalate</div>
                <p className="text-sm text-hud-text-muted">
                  Based on dipstick results and symptoms, determine next step.
                </p>
              </div>
              <div className="pt-3 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-glow-teal">Confidence: 85%</div>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-text-muted mb-4">NEXT ACTIONS</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• If positive: Consider treatment</li>
              <li>• If negative: Defer lab urinalysis</li>
              <li>• If uncertain: Escalate to clinician</li>
              <li>• Monitor symptoms if stable</li>
            </ul>
          </HUDPanel>
        </div>

        {/* Test Minimization Impact */}
        <SectionHeader
          sectionId="06/13"
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
                  { label: 'Lab Urinalysis', reduction: '58%', width: '42%' },
                  { label: 'Urine Cultures', reduction: '52%', width: '48%' },
                  { label: 'Repeat Visits', reduction: '35%', width: '65%' },
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
                  <div className="text-3xl font-semibold text-hud-glow-cyan mb-1">$95</div>
                  <div className="text-xs text-hud-text-muted">Average reduction</div>
                </HUDPanel>
                <HUDPanel className="p-5" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-2">Per 10K Patients</div>
                  <div className="text-3xl font-semibold text-hud-glow-teal mb-1">$950K</div>
                  <div className="text-xs text-hud-text-muted">Annual savings</div>
                </HUDPanel>
              </div>
            </div>
          </div>
        </HUDPanel>

        {/* Workflow */}
        <SectionHeader
          sectionId="07/13"
          label="MODULE: WORKFLOW"
          title="Clinical Workflow Integration"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Patient Presents', detail: 'UTI symptoms or routine screening' },
              { step: '2', title: 'Dipstick Capture', detail: 'Camera captures test strip image' },
              { step: '3', title: 'Color Analysis', detail: 'RGB analysis, pattern matching' },
              { step: '4', title: 'Interpretation', detail: 'Engine generates recommendation' },
              { step: '5', title: 'Decision', detail: 'Retest, treat, or escalate' },
              { step: '6', title: 'Follow-up', detail: 'Monitor or defer lab testing' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-hud-glow-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="mono text-sm text-hud-glow-teal">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-hud-text-muted">{item.detail}</p>
                </div>
                {i < 5 && (
                  <div className="absolute left-6 w-0.5 h-8 bg-hud-line-primary" style={{ top: `${(i + 1) * 80}px` }} />
                )}
              </div>
            ))}
          </div>
        </HUDPanel>

        {/* Safety Triggers */}
        <SectionHeader
          sectionId="08/13"
          label="MODULE: SAFETY"
          title="Safety Triggers & Escalation"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6 border-2 border-hud-critical/50" withBrackets>
            <div className="mono text-xs text-hud-critical mb-4">IMMEDIATE ESCALATION</div>
            <ul className="space-y-3">
              {['Pregnancy', 'Fever >38.5°C', 'Flank pain', 'Hematuria', 'Systemic symptoms'].map((trigger, i) => (
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
              {['Recurrent UTIs', 'Diabetes', 'Immunocompromised', 'Recent antibiotics'].map((flag, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-warning mt-1">→</span>
                  <span className="text-sm text-hud-text-muted">{flag}</span>
                </li>
              ))}
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-teal mb-4">MONITORING</div>
            <ul className="space-y-3">
              {['Home care if low risk', 'Reassess in 48h', 'Escalate if worsening', 'Defer lab if stable'].map((protocol, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-teal mt-1">✓</span>
                  <span className="text-sm text-hud-text-muted">{protocol}</span>
                </li>
              ))}
            </ul>
          </HUDPanel>
        </div>

        {/* Use Cases */}
        <SectionHeader
          sectionId="09/13"
          label="MODULE: USE CASES"
          title="Real-World Applications"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            {
              setting: 'Primary Care',
              scenario: 'UTI symptoms evaluation',
              traditional: 'Lab urinalysis + culture',
              livecorp: 'Dipstick first, defer culture if negative',
              outcome: '$65 saved per case',
            },
            {
              setting: 'Urgent Care',
              scenario: 'Dysuria workup',
              traditional: 'Immediate lab testing',
              livecorp: 'Dipstick screening, selective lab',
              outcome: '40% reduction in lab tests',
            },
            {
              setting: 'Telemedicine',
              scenario: 'Remote UTI assessment',
              traditional: 'In-person visit required',
              livecorp: 'Camera dipstick, home care',
              outcome: '55% avoid visits',
            },
            {
              setting: 'Pediatric Care',
              scenario: 'Child UTI symptoms',
              traditional: 'Routine lab urinalysis',
              livecorp: 'Dipstick screening first',
              outcome: 'Reduce invasive testing',
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
          sectionId="10/13"
          label="MODULE: TECHNICAL"
          title="Technical Specifications"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">IMAGE PROCESSING</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Resolution: 1080p minimum</li>
              <li>• Color space: RGB</li>
              <li>• Calibration: Reference strip</li>
              <li>• Matching: Pattern recognition</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">ML MODELS</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Color classifier: v1.8.3</li>
              <li>• Pattern matcher: v2.1.1</li>
              <li>• Risk calculator: v2.9.2</li>
              <li>• Confidence: 80% threshold</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">PERFORMANCE</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Processing: &lt;2s</li>
              <li>• Accuracy: 87% (validated)</li>
              <li>• Sensitivity: 91%</li>
              <li>• Specificity: 84%</li>
            </ul>
          </HUDPanel>
        </div>

        {/* Performance Metrics */}
        <SectionHeader
          sectionId="11/13"
          label="MODULE: PERFORMANCE"
          title="Performance Metrics"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: 'Accuracy', value: '87%', detail: 'Validated on 12K cases' },
              { metric: 'Sensitivity', value: '91%', detail: 'True positive rate' },
              { metric: 'Specificity', value: '84%', detail: 'True negative rate' },
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

        {/* Integration Guide */}
        <SectionHeader
          sectionId="12/13"
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
                  <div className="mono text-xs text-hud-glow-cyan mb-2">POST /api/urinalysis/assess</div>
                  <div className="text-xs text-hud-text-muted mb-2">Submit dipstick image, symptoms</div>
                  <div className="mono text-xs text-hud-text-muted">Returns: Interpretation + recommendation</div>
                </div>
                <div className="p-4 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-2">GET /api/urinalysis/status</div>
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

        {/* How This Service Fits */}
        <SectionHeader
          sectionId="13/13"
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
    </div>
  );
}
