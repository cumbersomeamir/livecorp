'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

export default function CardiacService() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ringRef.current) {
      const rings = ringRef.current.querySelectorAll('.oscilloscope-ring');
      rings.forEach((ring, i) => {
        (ring as HTMLElement).style.animationDelay = `${i * 0.5}s`;
      });
    }
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-hud-bg-primary/90 backdrop-blur-hud border-b border-hud-line-secondary">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-1">MODULE ID: SVC-01</div>
              <h1 className="text-2xl font-semibold">Cardiac Pre-Screening Wing</h1>
            </div>
            <div className="mono text-xs text-hud-glow-teal">STATUS: ACTIVE</div>
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
        {/* Hero Visualization - Oscilloscope */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 flex items-center justify-center min-h-[500px] relative"
        >
          <div ref={ringRef} className="relative w-full h-full">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="oscilloscope-ring absolute border border-hud-glow-cyan/30 rounded-full"
                style={{
                  width: `${100 - i * 12}%`,
                  height: `${100 - i * 12}%`,
                  left: `${i * 6}%`,
                  top: `${i * 6}%`,
                  animation: 'pulse-glow 3s ease-in-out infinite',
                }}
              />
            ))}
            
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="ecg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2DE2FF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#34F5C5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2DE2FF" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <path
                d="M 50 200 Q 100 150, 150 200 T 250 200 T 350 200"
                fill="none"
                stroke="url(#ecg-gradient)"
                strokeWidth="3"
                className="animate-pulse"
              />
              <path
                d="M 50 250 Q 100 200, 150 250 T 250 250 T 350 250"
                fill="none"
                stroke="#34F5C5"
                strokeWidth="2"
                opacity="0.4"
                style={{ animationDelay: '0.5s' }}
                className="animate-pulse"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-2 border-hud-glow-cyan rounded-full flex items-center justify-center">
                <div className="w-28 h-28 border border-hud-glow-teal/50 rounded-full" />
              </div>
            </div>

            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x = 200 + Math.cos(rad) * 180;
              const y = 200 + Math.sin(rad) * 180;
              return (
                <div
                  key={angle}
                  className="absolute w-1 h-12 bg-hud-glow-cyan/40"
                  style={{
                    left: `${(x / 400) * 100}%`,
                    top: `${(y / 400) * 100}%`,
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    transformOrigin: 'center bottom',
                  }}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Problem */}
        <SectionHeader
          sectionId="01/12"
          label="MODULE: PROBLEM SPACE"
          title="The Problem"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <p className="text-hud-text-muted mb-4">
              Low-risk cardiac symptoms lead to excessive ECGs, echoes, referrals.
            </p>
            <div className="space-y-2 text-sm text-hud-text-muted">
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning">→</span>
                <span>Defensive ordering of cardiac panels</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning">→</span>
                <span>Repeat ECGs for stable patients</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning">→</span>
                <span>Unnecessary echocardiogram referrals</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-3">IMPACT METRICS</div>
            <div className="space-y-3">
              <div>
                <div className="mono text-xs text-hud-text-muted">Unnecessary ECGs</div>
                <div className="text-2xl font-semibold text-hud-glow-cyan">40-60%</div>
              </div>
              <div>
                <div className="mono text-xs text-hud-text-muted">Cost Reduction</div>
                <div className="text-2xl font-semibold text-hud-glow-teal">$2.1M</div>
                <div className="mono text-xs text-hud-text-muted">per 10K patients</div>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* Clinical Scenarios */}
        <SectionHeader
          sectionId="02/12"
          label="MODULE: CLINICAL SCENARIOS"
          title="When This Service Applies"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              scenario: 'Palpitations',
              description: 'Intermittent palpitations without syncope or chest pain',
              risk: 'Low',
              action: 'Rule-out mode, no immediate ECG',
              image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
            },
            {
              scenario: 'Chest Discomfort',
              description: 'Atypical chest discomfort, normal vitals, no radiation',
              risk: 'Moderate',
              action: 'Minimal panel: single ECG, defer echo',
              image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
            },
            {
              scenario: 'Fatigue',
              description: 'Generalized fatigue with normal exam findings',
              risk: 'Low',
              action: 'Rule-out mode, continue monitoring',
              image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
            },
          ].map((item, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-48 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.scenario}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">SCENARIO {i + 1}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.scenario}</h3>
              <p className="text-sm text-hud-text-muted mb-4">{item.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-hud-line-secondary">
                <div>
                  <div className="mono text-xs text-hud-text-muted">Risk</div>
                  <div className="text-sm font-semibold text-hud-glow-teal">{item.risk}</div>
                </div>
                <div className="text-right">
                  <div className="mono text-xs text-hud-text-muted">Action</div>
                  <div className="text-xs text-hud-text-muted">{item.action}</div>
                </div>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* Inputs */}
        <SectionHeader
          sectionId="03/12"
          label="MODULE: INPUTS"
          title="Input Sources"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {[
            { 
              name: 'Wearable ECG', 
              icon: '📊', 
              detail: 'Continuous rhythm monitoring',
              image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
            },
            { 
              name: 'Digital Stethoscope', 
              icon: '🎤', 
              detail: 'Heart sound analysis',
              image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=400&h=300&fit=crop',
            },
            { 
              name: 'Vitals', 
              icon: '📈', 
              detail: 'HR, BP, SpO₂ trends',
              image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
            },
            { 
              name: 'Symptoms', 
              icon: '📝', 
              detail: 'Structured questionnaire',
              image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
            },
          ].map((input, i) => (
            <HUDPanel key={i} className="p-6 text-center" withBrackets>
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
              <div className="mono text-xs text-hud-glow-cyan mb-2">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="text-lg font-semibold mb-2">{input.name}</h3>
              <p className="text-xs text-hud-text-muted">{input.detail}</p>
            </HUDPanel>
          ))}
        </div>

        {/* Signal Processing Diagram */}
        <SectionHeader
          sectionId="04/12"
          label="MODULE: SIGNAL PROCESSING"
          title="How Signals Are Processed"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          {/* Visual Pipeline Diagram */}
          <div className="mb-8">
            <svg className="w-full h-32" viewBox="0 0 800 120">
              <defs>
                <linearGradient id="pipeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2DE2FF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#34F5C5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2DE2FF" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Pipeline Flow */}
              <path d="M 50 60 L 750 60" stroke="url(#pipeline-gradient)" strokeWidth="3" fill="none" />
              {/* Processing Nodes */}
              {[
                { x: 150, label: 'Capture' },
                { x: 300, label: 'Filter' },
                { x: 450, label: 'Analyze' },
                { x: 600, label: 'Fuse' },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.x} cy="60" r="20" fill="#2DE2FF" opacity="0.3" />
                  <circle cx={node.x} cy="60" r="12" fill="#34F5C5" opacity="0.6" />
                  <text x={node.x} y="100" textAnchor="middle" className="mono text-xs fill-hud-text-muted">
                    {node.label}
                  </text>
                </g>
              ))}
              {/* Output Node */}
              <g>
                <rect x="700" y="40" width="40" height="40" fill="#2DE2FF" opacity="0.4" rx="4" />
                <text x="720" y="100" textAnchor="middle" className="mono text-xs fill-hud-text-muted">Output</text>
              </g>
            </svg>
          </div>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {['Capture', 'Filter', 'Analyze', 'Fuse', 'Output'].map((stage, i) => (
              <div key={i} className="flex flex-col items-center relative">
                <div className="w-16 h-16 border-2 border-hud-glow-cyan rounded-full flex items-center justify-center mb-3">
                  <span className="mono text-xs text-hud-glow-cyan">{i + 1}</span>
                </div>
                <div className="mono text-xs text-hud-text-muted text-center">{stage}</div>
              </div>
            ))}
            <div className="absolute top-8 left-16 right-16 h-0.5 bg-hud-line-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-2">NOISE REJECTION</div>
              <p className="text-sm text-hud-text-muted mb-4">
                Motion artifacts, electrical interference, and poor contact signals are automatically filtered out.
              </p>
              {/* Noise Filter Visualization */}
              <div className="h-16 border border-hud-line-primary relative bg-hud-bg-secondary/50">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
                  <path
                    d="M 0 30 Q 25 10, 50 30 T 100 30 T 150 30 T 200 30"
                    fill="none"
                    stroke="#FF3B3B"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <path
                    d="M 0 30 Q 25 25, 50 30 T 100 30 T 150 30 T 200 30"
                    fill="none"
                    stroke="#34F5C5"
                    strokeWidth="2"
                    opacity="0.8"
                  />
                  <text x="100" y="50" textAnchor="middle" className="mono text-xs fill-hud-text-muted">Filtered</text>
                </svg>
              </div>
            </div>
            <div>
              <div className="mono text-xs text-hud-glow-teal mb-2">QUALITY SCORING</div>
              <p className="text-sm text-hud-text-muted mb-4">
                Each signal receives a confidence score. Low-quality inputs trigger abstention.
              </p>
              {/* Quality Score Visualization */}
              <div className="space-y-2">
                {[
                  { label: 'ECG Signal', score: 92, color: 'hud-glow-teal' },
                  { label: 'Audio', score: 78, color: 'hud-glow-cyan' },
                  { label: 'Vitals', score: 85, color: 'hud-glow-teal' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="mono text-xs text-hud-text-muted">{item.label}</span>
                      <span className={`mono text-xs text-${item.color}`}>{item.score}%</span>
                    </div>
                    <div className="h-1 bg-hud-line-secondary rounded-full overflow-hidden">
                      <div className={`h-full bg-${item.color}`} style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HUDPanel>

        {/* Engine Output */}
        <SectionHeader
          sectionId="05/12"
          label="MODULE: OUTPUT"
          title="Engine Output"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets glow="teal">
            <div className="mono text-xs text-hud-glow-teal mb-3">ARRHYTHMIA RISK</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-hud-text-muted">AF Risk</span>
                <span className="mono text-sm text-hud-glow-teal">Low</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-hud-text-muted">PVC Risk</span>
                <span className="mono text-sm text-hud-glow-teal">Minimal</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-hud-text-muted">Bradycardia</span>
                <span className="mono text-sm text-hud-glow-teal">None</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-3">MURMUR FLAGS</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-hud-text-muted">Systolic</span>
                <span className="mono text-sm text-hud-glow-cyan">Not Detected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-hud-text-muted">Diastolic</span>
                <span className="mono text-sm text-hud-glow-cyan">Not Detected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-hud-text-muted">Confidence</span>
                <span className="mono text-sm text-hud-glow-cyan">78%</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-text-muted mb-3">NEXT STEP</div>
            <p className="text-sm text-hud-text-primary mb-2">No immediate test required</p>
            <p className="text-xs text-hud-text-muted">
              Continue monitoring. Escalate if symptoms worsen or new red flags appear.
            </p>
          </HUDPanel>
        </div>

        {/* Test Minimization Impact */}
        <SectionHeader
          sectionId="06/12"
          label="MODULE: IMPACT"
          title="Test Minimization Impact"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Reduction Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-hud-text-muted">Repeat ECGs</span>
                    <span className="mono text-sm text-hud-glow-teal">-45%</span>
                  </div>
                  <div className="h-2 bg-hud-line-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-hud-glow-teal" style={{ width: '55%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-hud-text-muted">Echocardiograms</span>
                    <span className="mono text-sm text-hud-glow-teal">-60%</span>
                  </div>
                  <div className="h-2 bg-hud-line-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-hud-glow-teal" style={{ width: '40%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-hud-text-muted">Cardiac Referrals</span>
                    <span className="mono text-sm text-hud-glow-teal">-38%</span>
                  </div>
                  <div className="h-2 bg-hud-line-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-hud-glow-teal" style={{ width: '62%' }} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cost Savings</h3>
              <div className="space-y-4">
                <HUDPanel className="p-4" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-1">Per Patient</div>
                  <div className="text-2xl font-semibold text-hud-glow-cyan">$210</div>
                  <div className="mono text-xs text-hud-text-muted mt-1">average reduction</div>
                </HUDPanel>
                <HUDPanel className="p-4" withBrackets>
                  <div className="mono text-xs text-hud-text-muted mb-1">Per 10K Patients</div>
                  <div className="text-2xl font-semibold text-hud-glow-teal">$2.1M</div>
                  <div className="mono text-xs text-hud-text-muted mt-1">annual savings</div>
                </HUDPanel>
              </div>
            </div>
          </div>
        </HUDPanel>

        {/* Workflow Diagram */}
        <SectionHeader
          sectionId="07/12"
          label="MODULE: WORKFLOW"
          title="Clinical Workflow Integration"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          {/* Visual Workflow Diagram */}
          <div className="mb-8">
            <svg className="w-full h-48" viewBox="0 0 800 200">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#2DE2FF" />
                </marker>
              </defs>
              {/* Flow Lines */}
              <path d="M 100 100 L 200 100" stroke="#2DE2FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 250 100 L 350 100" stroke="#2DE2FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 400 100 L 500 100" stroke="#2DE2FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 550 100 L 650 100" stroke="#2DE2FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 700 100 L 750 100" stroke="#2DE2FF" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
              {/* Workflow Nodes */}
              {[
                { x: 100, y: 100, label: 'Patient', icon: '👤' },
                { x: 200, y: 100, label: 'Inputs', icon: '📊' },
                { x: 350, y: 100, label: 'Process', icon: '⚙️' },
                { x: 500, y: 100, label: 'Output', icon: '📤' },
                { x: 650, y: 100, label: 'Review', icon: '👨‍⚕️' },
                { x: 750, y: 100, label: 'Action', icon: '✅' },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.x} cy={node.y} r="30" fill="#2DE2FF" opacity="0.2" />
                  <circle cx={node.x} cy={node.y} r="20" fill="#34F5C5" opacity="0.4" />
                  <text x={node.x} y={node.y + 5} textAnchor="middle" className="text-lg">{node.icon}</text>
                  <text x={node.x} y={node.y + 50} textAnchor="middle" className="mono text-xs fill-hud-text-muted">
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Patient Presents', detail: 'Symptoms reported, vitals captured' },
              { step: '2', title: 'Input Collection', detail: 'Wearable data, audio, vitals synced' },
              { step: '3', title: 'Signal Validation', detail: 'Quality checks, noise filtering' },
              { step: '4', title: 'Risk Assessment', detail: 'Engine processes, generates risk band' },
              { step: '5', title: 'Recommendation', detail: 'Rule-out, minimal panel, or escalate' },
              { step: '6', title: 'Clinician Review', detail: 'Override available, decision logged' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 relative">
                <div className="w-12 h-12 border-2 border-hud-glow-cyan rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="mono text-sm text-hud-glow-cyan">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-hud-text-muted">{item.detail}</p>
                </div>
                {i < 5 && (
                  <div className="absolute left-6 w-0.5 h-12 bg-hud-line-primary" style={{ top: '48px' }} />
                )}
              </div>
            ))}
          </div>
        </HUDPanel>

        {/* Safety Triggers */}
        <SectionHeader
          sectionId="08/12"
          label="MODULE: SAFETY"
          title="Safety Triggers & Escalation"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6 border-2 border-hud-critical/50" withBrackets>
            <div className="mono text-xs text-hud-critical mb-4">IMMEDIATE ESCALATION</div>
            <ul className="space-y-3">
              {['Chest pain with radiation', 'Syncope or near-syncope', 'Severe dyspnoea', 'Abnormal vitals (HR <40 or >150)', 'Hemodynamic instability'].map((trigger, i) => (
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
              {['Age >65 with new symptoms', 'Family history of sudden cardiac death', 'Known cardiac disease', 'Multiple risk factors'].map((flag, i) => (
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
          sectionId="09/12"
          label="MODULE: USE CASES"
          title="Real-World Applications"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: 'Primary Care Triage',
              description: 'Screen low-risk chest discomfort before ordering ECGs',
              benefit: 'Reduces unnecessary cardiac workups by 50%',
              image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
            },
            {
              title: 'Emergency Department',
              description: 'Rapid risk stratification for non-urgent cardiac complaints',
              benefit: 'Faster disposition, reduced ED boarding',
              image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
            },
            {
              title: 'Telemedicine',
              description: 'Remote cardiac assessment using wearable data',
              benefit: 'Enables safe home monitoring protocols',
              image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            },
            {
              title: 'Pre-Operative Screening',
              description: 'Cardiac risk assessment before non-cardiac surgery',
              benefit: 'Avoids unnecessary pre-op cardiac consults',
              image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
            },
          ].map((useCase, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-48 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">USE CASE {i + 1}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-hud-text-muted mb-4">{useCase.description}</p>
              <div className="pt-4 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-glow-teal">{useCase.benefit}</div>
              </div>
            </HUDPanel>
          ))}
        </div>

        {/* Technical Specifications */}
        <SectionHeader
          sectionId="10/12"
          label="MODULE: TECHNICAL"
          title="Technical Specifications"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                alt="Signal Processing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/70 to-transparent" />
            </div>
            <div className="mono text-xs text-hud-glow-cyan mb-3">SIGNAL PROCESSING</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Sampling rate: 250Hz</li>
              <li>• Noise floor: -40dB</li>
              <li>• Frequency range: 0.5-40Hz</li>
              <li>• Artifact rejection: Auto</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                alt="ML Models"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/70 to-transparent" />
            </div>
            <div className="mono text-xs text-hud-glow-cyan mb-3">ML MODELS</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Arrhythmia classifier: v2.1.3</li>
              <li>• Murmur detector: v1.8.2</li>
              <li>• Risk calculator: v3.0.1</li>
              <li>• Confidence threshold: 75%</li>
            </ul>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                alt="Performance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/70 to-transparent" />
            </div>
            <div className="mono text-xs text-hud-glow-cyan mb-3">PERFORMANCE</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Processing time: &lt;2s</li>
              <li>• Accuracy: 87% (validated)</li>
              <li>• Sensitivity: 92%</li>
              <li>• Specificity: 84%</li>
            </ul>
          </HUDPanel>
        </div>

        {/* Integration Guide */}
        <SectionHeader
          sectionId="11/12"
          label="MODULE: INTEGRATION"
          title="Integration & Deployment"
          className="mt-16"
        />
        <HUDPanel className="p-8 mt-6" withBrackets>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">API Endpoints</h3>
              <div className="space-y-3">
                <div className="p-3 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-1">POST /api/cardiac/assess</div>
                  <div className="text-xs text-hud-text-muted">Submit inputs, receive risk assessment</div>
                </div>
                <div className="p-3 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-1">GET /api/cardiac/status</div>
                  <div className="text-xs text-hud-text-muted">Check processing status</div>
                </div>
                <div className="p-3 bg-hud-bg-secondary border border-hud-line-primary rounded">
                  <div className="mono text-xs text-hud-glow-cyan mb-1">GET /api/cardiac/history</div>
                  <div className="text-xs text-hud-text-muted">Retrieve assessment history</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Deployment Options</h3>
              <div className="space-y-3">
                <HUDPanel className="p-4" withBrackets>
                  <div className="mono text-xs text-hud-glow-teal mb-2">CLOUD</div>
                  <div className="text-sm text-hud-text-muted">SaaS deployment, HIPAA-compliant</div>
                </HUDPanel>
                <HUDPanel className="p-4" withBrackets>
                  <div className="mono text-xs text-hud-glow-teal mb-2">ON-PREMISE</div>
                  <div className="text-sm text-hud-text-muted">Self-hosted, full control</div>
                </HUDPanel>
                <HUDPanel className="p-4" withBrackets>
                  <div className="mono text-xs text-hud-glow-teal mb-2">HYBRID</div>
                  <div className="text-sm text-hud-text-muted">Edge processing, cloud analytics</div>
                </HUDPanel>
              </div>
            </div>
          </div>
        </HUDPanel>

        {/* How This Service Fits */}
        <SectionHeader
          sectionId="12/12"
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
