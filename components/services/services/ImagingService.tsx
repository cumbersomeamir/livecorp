'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

export default function ImagingService() {
  const [gateState, setGateState] = useState<'locked' | 'unlocked'>('locked');

  return (
    <div className="min-h-screen pt-20">
      {/* Sticky Header - Gate Control Theme */}
      <div className="sticky top-0 z-40 bg-hud-bg-primary/90 backdrop-blur-hud border-b-2 border-hud-critical/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className={`w-16 h-16 border-4 rounded-lg flex items-center justify-center ${
                  gateState === 'locked' 
                    ? 'border-hud-critical/50 bg-hud-critical/10' 
                    : 'border-hud-glow-teal/50 bg-hud-glow-teal/10'
                }`}>
                  <div className="mono text-xs text-center">
                    <div className={gateState === 'locked' ? 'text-hud-critical' : 'text-hud-glow-teal'}>
                      {gateState === 'locked' ? '🔒' : '🔓'}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mono text-xs text-hud-glow-cyan mb-1">MODULE ID: SVC-06</div>
                <h1 className="text-2xl font-semibold">Imaging Gateway Wing</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="mono text-xs text-hud-glow-teal">STATUS: ACTIVE</div>
              <div className="mono text-xs text-hud-text-muted">GATE CONTROL MODE</div>
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
        {/* Hero - Radiology Access Control Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 min-h-[500px] flex items-center justify-center"
        >
          <HUDPanel className="p-8 w-full" withBrackets>
            {/* Shield-like Geometry */}
            <div className="relative w-full max-w-2xl h-96 mx-auto">
              {/* Outer Shield Rings */}
              <div className="absolute inset-0 border-4 border-hud-glow-cyan/30 rounded-full" />
              <div className="absolute inset-8 border-2 border-hud-glow-teal/40 rounded-full" />
              <div className="absolute inset-16 border border-hud-glow-cyan/20 rounded-full" />
              
              {/* Gate State Indicator - Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-64 h-64 border-4 rounded-full flex items-center justify-center transition-all ${
                    gateState === 'locked'
                      ? 'border-hud-critical/50 bg-hud-critical/10'
                      : 'border-hud-glow-teal/50 bg-hud-glow-teal/10 animate-pulse'
                  }`}
                >
                  <div className="text-center">
                    <div className="mono text-2xl mb-2">{gateState === 'locked' ? 'LOCKED' : 'UNLOCKED'}</div>
                    <div className="mono text-xs text-hud-text-muted">GATE</div>
                  </div>
                </div>
              </div>

              {/* Scan Authorization Rings */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`absolute border rounded-full ${
                    gateState === 'locked'
                      ? 'border-hud-critical/20'
                      : 'border-hud-glow-teal/30 animate-pulse'
                  }`}
                  style={{
                    width: `${100 - i * 12}%`,
                    height: `${100 - i * 12}%`,
                    left: `${i * 6}%`,
                    top: `${i * 6}%`,
                  }}
                />
              ))}

              {/* Lock/Unlock Transition Indicator */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <button
                  onClick={() => setGateState(gateState === 'locked' ? 'unlocked' : 'locked')}
                  className="mono text-xs px-6 py-3 border border-hud-line-primary text-hud-text-primary hover:bg-hud-panel transition-colors"
                >
                  {gateState === 'locked' ? 'REQUEST ACCESS' : 'LOCK GATE'}
                </button>
              </div>

              {/* Authorization Status */}
              <div className="absolute top-8 left-8 right-8 flex justify-between">
                <div className="mono text-xs text-hud-text-muted">AUTHORIZATION REQUIRED</div>
                <div className={`mono text-xs ${gateState === 'locked' ? 'text-hud-critical' : 'text-hud-glow-teal'}`}>
                  {gateState === 'locked' ? 'PENDING' : 'GRANTED'}
                </div>
              </div>
            </div>
          </HUDPanel>
        </motion.div>

        {/* Core Rule - Prominent */}
        <HUDPanel className="p-8 mb-12 border-4 border-hud-critical/50" withBrackets>
          <div className="flex items-start gap-4">
            <div className="text-5xl">🛡️</div>
            <div className="flex-1">
              <div className="mono text-xs text-hud-critical mb-4">CORE RULE</div>
              <p className="text-3xl font-semibold text-hud-text-primary mb-4">
                Imaging is never first. It is gated.
              </p>
              <p className="text-sm text-hud-text-muted">
                All imaging requests must pass through pre-diagnostic assessment. No direct patient-initiated imaging. All decisions require clinical justification.
              </p>
            </div>
          </div>
        </HUDPanel>

        {/* Problem - Gate Metaphor */}
        <SectionHeader
          sectionId="01/13"
          label="MODULE: PROBLEM SPACE"
          title="The Problem"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <p className="text-hud-text-muted mb-4">
              Imaging ordered without triage overloads radiology.
            </p>
            <div className="space-y-2 text-sm text-hud-text-muted">
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Low-yield imaging for non-specific symptoms</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Radiology department overload</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Delayed access for urgent cases</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning mt-1">→</span>
                <span>Unnecessary radiation exposure</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-3">IMPACT METRICS</div>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-semibold text-hud-glow-cyan mb-1">25-35%</div>
                <div className="mono text-xs text-hud-text-muted">Reduction in low-yield imaging</div>
              </div>
              <div className="pt-4 border-t border-hud-line-secondary">
                <div className="text-2xl font-semibold text-hud-glow-teal mb-1">$2.8M</div>
                <div className="mono text-xs text-hud-text-muted">Savings per 10K patients</div>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* Explicit Statement */}
        <HUDPanel className="p-8 mt-12 border-2 border-hud-glow-teal/50" withBrackets>
          <div className="flex items-start gap-4">
            <div className="text-4xl">⚠️</div>
            <div className="flex-1">
              <div className="mono text-xs text-hud-glow-teal mb-3">EXPLICIT STATEMENT</div>
              <p className="text-2xl font-semibold text-hud-text-primary mb-3">
                Does not replace radiology. Optimizes imaging use only.
              </p>
              <p className="text-sm text-hud-text-muted">
                This service acts as a gatekeeper, not a replacement. All imaging decisions require radiologist interpretation. This service only optimizes when imaging is appropriate.
              </p>
            </div>
          </div>
        </HUDPanel>

        {/* Clinical Scenarios - Gate Decisions */}
        <SectionHeader
          sectionId="02/13"
          label="MODULE: CLINICAL SCENARIOS"
          title="Imaging Gate Decisions"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              scenario: 'Chest X-ray Request',
              indication: 'Non-specific chest discomfort',
              gate: 'BLOCKED',
              reason: 'No red flags, defer imaging',
              alternative: 'Clinical evaluation first',
            },
            {
              scenario: 'CT Head Request',
              indication: 'Headache, normal neuro exam',
              gate: 'BLOCKED',
              reason: 'Low-risk presentation',
              alternative: 'Observation, reassess',
            },
            {
              scenario: 'Abdominal CT',
              indication: 'Acute abdomen, abnormal vitals',
              gate: 'UNLOCKED',
              reason: 'Red flags present',
              alternative: 'Imaging indicated',
            },
          ].map((item, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1576091160399-112ba8d25d1f' : i === 1 ? '1551601651-2a8555f1a136' : '1559757148-5c350d0d3c56'}?w=400&h=300&fit=crop`}
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
                  <div className="mono text-xs text-hud-text-muted mb-1">Indication</div>
                  <div className="text-xs text-hud-text-muted">{item.indication}</div>
                </div>
                <div className="pt-2 border-t border-hud-line-secondary">
                  <div className={`mono text-xs mb-1 ${
                    item.gate === 'BLOCKED' ? 'text-hud-critical' : 'text-hud-glow-teal'
                  }`}>
                    GATE: {item.gate}
                  </div>
                  <div className="text-xs text-hud-text-muted">{item.reason}</div>
                </div>
                <div className="pt-2 border-t border-hud-line-secondary">
                  <div className="mono text-xs text-hud-glow-teal mb-1">Alternative</div>
                  <div className="text-xs text-hud-text-muted">{item.alternative}</div>
                </div>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* Inputs - Gate Requirements */}
        <SectionHeader
          sectionId="03/13"
          label="MODULE: INPUTS"
          title="Gate Input Requirements"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="text-center mb-6">
            <div className="mono text-xs text-hud-warning mb-2">CRITICAL: NO DIRECT PATIENT INITIATION</div>
            <p className="text-sm text-hud-text-muted">
              Imaging Gateway only accepts inputs from other Live Corp service modules. Patients cannot directly request imaging through this service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Engine Flags', detail: 'Risk assessments from other services', icon: '🚩' },
              { name: 'Clinical Data', detail: 'Vitals, symptoms, exam findings', icon: '📊' },
              { name: 'Service Outputs', detail: 'Recommendations from Cardiac, Respiratory, etc.', icon: '🔗' },
            ].map((input, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{input.icon}</div>
                <div className="mono text-xs text-hud-glow-cyan mb-2">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-semibold mb-2">{input.name}</h3>
                <p className="text-xs text-hud-text-muted">{input.detail}</p>
              </div>
            ))}
          </div>
        </HUDPanel>

        {/* Gate Decision Process */}
        <SectionHeader
          sectionId="04/13"
          label="MODULE: PROCESSING"
          title="Gate Decision Process"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {['Receive', 'Assess', 'Validate', 'Decide', 'Output'].map((stage, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-hud-critical/30 rounded-lg flex items-center justify-center mb-3">
                  <span className="mono text-xs text-hud-critical">{i + 1}</span>
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
              <div className="mono text-xs text-hud-glow-cyan mb-3">ASSESSMENT CRITERIA</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Red flag presence</li>
                <li>• Risk band from upstream services</li>
                <li>• Clinical urgency indicators</li>
                <li>• Alternative pathways available</li>
              </ul>
            </div>
            <div>
              <div className="mono text-xs text-hud-glow-teal mb-3">DECISION LOGIC</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• High risk + red flags = UNLOCK</li>
                <li>• Low risk + no flags = BLOCK</li>
                <li>• Moderate risk = Conditional</li>
                <li>• Uncertainty = Escalate to clinician</li>
              </ul>
            </div>
          </div>
        </HUDPanel>

        {/* Engine Output - Gate States */}
        <SectionHeader
          sectionId="05/13"
          label="MODULE: OUTPUT"
          title="Engine Output"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6 border-2 border-hud-critical/50" withBrackets>
            <div className="mono text-xs text-hud-critical mb-4">GATE: BLOCKED</div>
            <div className="space-y-3">
              <div>
                <div className="text-lg font-semibold text-hud-text-primary mb-2">Imaging Deferred</div>
                <p className="text-sm text-hud-text-muted">
                  No immediate indication. Alternative pathways recommended.
                </p>
              </div>
              <div className="pt-3 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-text-muted mb-2">Alternatives</div>
                <ul className="space-y-1 text-xs text-hud-text-muted">
                  <li>• Clinical observation</li>
                  <li>• Symptomatic treatment</li>
                  <li>• Reassess in 48-72h</li>
                </ul>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6 border-2 border-hud-warning/50" withBrackets>
            <div className="mono text-xs text-hud-warning mb-4">GATE: CONDITIONAL</div>
            <div className="space-y-3">
              <div>
                <div className="text-lg font-semibold text-hud-text-primary mb-2">Selective Imaging</div>
                <p className="text-sm text-hud-text-muted">
                  Limited imaging indicated. Specific protocol recommended.
                </p>
              </div>
              <div className="pt-3 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-text-muted mb-2">Protocol</div>
                <ul className="space-y-1 text-xs text-hud-text-muted">
                  <li>• Targeted study only</li>
                  <li>• Avoid comprehensive scans</li>
                  <li>• Clinician review required</li>
                </ul>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6 border-2 border-hud-glow-teal/50" withBrackets>
            <div className="mono text-xs text-hud-glow-teal mb-4">GATE: UNLOCKED</div>
            <div className="space-y-3">
              <div>
                <div className="text-lg font-semibold text-hud-text-primary mb-2">Imaging Recommended</div>
                <p className="text-sm text-hud-text-muted">
                  Red flags present. Imaging indicated with urgency.
                </p>
              </div>
              <div className="pt-3 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-text-muted mb-2">Priority</div>
                <ul className="space-y-1 text-xs text-hud-text-muted">
                  <li>• Urgent if acute</li>
                  <li>• Routine if stable</li>
                  <li>• Radiologist interpretation required</li>
                </ul>
              </div>
            </div>
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
                  { label: 'Low-Yield Imaging', reduction: '32%', width: '68%' },
                  { label: 'Routine CT Scans', reduction: '28%', width: '72%' },
                  { label: 'Chest X-rays', reduction: '35%', width: '65%' },
                  { label: 'Unnecessary MRIs', reduction: '25%', width: '75%' },
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
                  <div className="text-3xl font-semibold text-hud-glow-cyan mb-1">$280</div>
                  <div className="text-xs text-hud-text-muted">Average reduction</div>
                </HUDPanel>
                <HUDPanel className="p-5" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-2">Per 10K Patients</div>
                  <div className="text-3xl font-semibold text-hud-glow-teal mb-1">$2.8M</div>
                  <div className="text-xs text-hud-text-muted">Annual savings</div>
                </HUDPanel>
                <HUDPanel className="p-5" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-2">Radiology Efficiency</div>
                  <div className="text-3xl font-semibold text-hud-glow-teal mb-1">+40%</div>
                  <div className="text-xs text-hud-text-muted">Faster access for urgent cases</div>
                </HUDPanel>
              </div>
            </div>
          </div>
        </HUDPanel>

        {/* Workflow - Gate Process */}
        <SectionHeader
          sectionId="07/13"
          label="MODULE: WORKFLOW"
          title="Gate Workflow Process"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Service Module Flags', detail: 'Cardiac, Respiratory, or other service generates imaging flag' },
              { step: '2', title: 'Gate Receives Request', detail: 'Imaging Gateway receives flag + clinical data' },
              { step: '3', title: 'Assessment', detail: 'Gate evaluates red flags, risk bands, urgency' },
              { step: '4', title: 'Decision', detail: 'BLOCK, CONDITIONAL, or UNLOCK gate' },
              { step: '5', title: 'Clinician Review', detail: 'Override available, decision logged' },
              { step: '6', title: 'Radiology', detail: 'If unlocked, proceed to radiology interpretation' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 border-4 border-hud-critical/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="mono text-sm text-hud-critical">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-hud-text-muted">{item.detail}</p>
                </div>
                {i < 5 && (
                  <div className="absolute left-6 w-0.5 h-8 bg-hud-line-primary" style={{ top: `${(i + 1) * 100}px` }} />
                )}
              </div>
            ))}
          </div>
        </HUDPanel>

        {/* Safety & Limitations */}
        <SectionHeader
          sectionId="08/13"
          label="MODULE: SAFETY"
          title="Safety & Limitations"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6 border-2 border-hud-critical/50" withBrackets>
            <div className="mono text-xs text-hud-critical mb-4">CRITICAL LIMITATIONS</div>
            <ul className="space-y-3">
              {[
                'Does not replace radiology',
                'No image interpretation',
                'Gatekeeper only, not diagnostician',
                'All decisions require clinician review',
                'Override always available',
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
                'Acute symptoms + abnormal vitals',
                'Trauma or injury',
                'Neurological deficits',
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
              setting: 'Emergency Department',
              scenario: 'Chest pain triage',
              traditional: 'Routine chest X-ray for all',
              livecorp: 'Gate blocks low-risk, unlocks high-risk',
              outcome: '35% reduction, faster urgent access',
            },
            {
              setting: 'Primary Care',
              scenario: 'Headache workup',
              traditional: 'CT head ordered frequently',
              livecorp: 'Gate blocks unless red flags',
              outcome: '28% reduction in CT scans',
            },
            {
              setting: 'Urgent Care',
              scenario: 'Abdominal pain',
              traditional: 'Abdominal CT for many',
              livecorp: 'Gate conditional, selective imaging',
              outcome: '30% reduction, $280 saved per case',
            },
            {
              setting: 'Telemedicine',
              scenario: 'Remote imaging requests',
              traditional: 'In-person visit for imaging',
              livecorp: 'Gate assessment, defer if low-risk',
              outcome: '40% avoid unnecessary visits',
            },
          ].map((useCase, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-48 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1576091160399-112ba8d25d1f' : i === 1 ? '1551601651-2a8555f1a136' : i === 2 ? '1559757148-5c350d0d3c56' : '1454165804606-c3d57bc86b40'}?w=600&h=400&fit=crop`}
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
            <div className="mono text-xs text-hud-glow-cyan mb-3">GATE LOGIC</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Rule-based decision tree</li>
              <li>• Risk band integration</li>
              <li>• Red flag detection</li>
              <li>• Override logging</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">INTEGRATION</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Service module APIs</li>
              <li>• EMR integration</li>
              <li>• Radiology system links</li>
              <li>• Audit trail logging</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-3">PERFORMANCE</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Processing: &lt;1s</li>
              <li>• Decision accuracy: 92%</li>
              <li>• Override rate: 8%</li>
              <li>• System uptime: 99.9%</li>
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
              { metric: 'Block Rate', value: '32%', detail: 'Low-yield requests blocked' },
              { metric: 'Unlock Rate', value: '18%', detail: 'High-risk requests approved' },
              { metric: 'Conditional', value: '50%', detail: 'Selective imaging recommended' },
              { metric: 'Processing', value: '<1s', detail: 'Average decision time' },
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
                  <div className="mono text-xs text-hud-glow-cyan mb-2">POST /api/imaging/gate</div>
                  <div className="text-xs text-hud-text-muted mb-2">Receive flag from service module</div>
                  <div className="mono text-xs text-hud-text-muted">Returns: Gate decision (BLOCK/UNLOCK/CONDITIONAL)</div>
                </div>
                <div className="p-4 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-2">GET /api/imaging/status</div>
                  <div className="text-xs text-hud-text-muted">Check gate status</div>
                </div>
                <div className="p-4 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-2">POST /api/imaging/override</div>
                  <div className="text-xs text-hud-text-muted">Clinician override logging</div>
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
                  <div className="mono text-xs text-hud-glow-teal mb-2">HYBRID</div>
                  <div className="text-sm text-hud-text-muted">Edge gate logic, cloud analytics</div>
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
