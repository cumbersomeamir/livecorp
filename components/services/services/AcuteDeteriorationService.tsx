'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

export default function AcuteDeteriorationService() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      const lines = timelineRef.current.querySelectorAll('.timeline-line');
      lines.forEach((line, i) => {
        (line as HTMLElement).style.animationDelay = `${i * 0.2}s`;
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
              <div className="mono text-xs text-hud-glow-cyan mb-1">MODULE ID: SVC-07</div>
              <h1 className="text-2xl font-semibold">Acute Deterioration & Sepsis Early Warning Wing</h1>
            </div>
            <div className="mono text-xs text-hud-warning">STATUS: PILOT</div>
          </div>
        </div>
      </div>

      {/* Safety Ribbon */}
      <div className="bg-hud-critical/10 border-b border-hud-critical/30 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mono text-xs text-hud-critical text-center">
            Not a sepsis diagnosis. Not a replacement for labs. Designed to reduce waste while escalating risk earlier.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Visualization - Vital Signs Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 flex items-center justify-center min-h-[500px] relative"
        >
          <div ref={timelineRef} className="relative w-full h-full">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border-l border-hud-line-primary"
                  style={{ left: `${(i + 1) * 10}%`, top: 0, bottom: 0 }}
                />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border-t border-hud-line-primary"
                  style={{ top: `${(i + 1) * 12.5}%`, left: 0, right: 0 }}
                />
              ))}
            </div>

            {/* Vital Signs Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
              <defs>
                <linearGradient id="vital-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF3B3B" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#FFB020" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FF3B3B" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Heart Rate */}
              <path
                d="M 50 100 L 150 90 L 250 95 L 350 110 L 450 130 L 550 150 L 650 170 L 750 180"
                fill="none"
                stroke="url(#vital-gradient)"
                strokeWidth="3"
                className="timeline-line animate-pulse"
              />
              {/* Temperature */}
              <path
                d="M 50 200 L 150 195 L 250 200 L 350 210 L 450 225 L 550 240 L 650 250 L 750 260"
                fill="none"
                stroke="#FFB020"
                strokeWidth="2.5"
                opacity="0.7"
                className="timeline-line animate-pulse"
                style={{ animationDelay: '0.3s' }}
              />
              {/* SpO2 */}
              <path
                d="M 50 300 L 150 295 L 250 290 L 350 285 L 450 280 L 550 275 L 650 270 L 750 265"
                fill="none"
                stroke="#34F5C5"
                strokeWidth="2"
                opacity="0.6"
                className="timeline-line animate-pulse"
                style={{ animationDelay: '0.6s' }}
              />
            </svg>

            {/* Alert Zones */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute border-2 border-hud-critical/40 rounded-full"
                    style={{
                      width: `${200 + i * 60}px`,
                      height: `${200 + i * 60}px`,
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      animation: `pulse-glow 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
                <div className="w-32 h-32 border-4 border-hud-critical rounded-full flex items-center justify-center bg-hud-critical/10">
                  <div className="mono text-xs text-hud-critical text-center">
                    <div>ALERT</div>
                    <div>ZONE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Markers */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
              {['T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((marker, i) => (
                <div key={i} className="mono text-xs text-hud-text-muted">
                  {marker}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Problem */}
        <SectionHeader
          sectionId="01/12"
          label="MODULE: PROBLEM SPACE"
          title="The Challenge"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <p className="text-hud-text-muted mb-4">
              In urgent care and OPD observation, clinicians either over-order broad labs "just in case" or under-recognize early deterioration. Both create harm: either unnecessary cost or dangerous delay.
            </p>
            <div className="space-y-2 text-sm text-hud-text-muted">
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-critical">→</span>
                <span>Defensive ordering of broad panels for stable patients</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-critical">→</span>
                <span>Missed early warning signs of deterioration</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-critical">→</span>
                <span>Inconsistent observation protocols</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="red">
            <div className="mono text-xs text-hud-critical mb-3">CRITICAL IMPACT</div>
            <div className="space-y-3">
              <div>
                <div className="mono text-xs text-hud-text-muted">Unnecessary Panels</div>
                <div className="text-2xl font-semibold text-hud-critical">30-50%</div>
              </div>
              <div>
                <div className="mono text-xs text-hud-text-muted">Early Escalation</div>
                <div className="text-2xl font-semibold text-hud-glow-teal">+25%</div>
                <div className="mono text-xs text-hud-text-muted">faster recognition</div>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* What it Reduces */}
        <SectionHeader
          sectionId="02/12"
          label="MODULE: INTERVENTION"
          title="What It Reduces / Improves"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: 'Reduces Indiscriminate Panels',
              description: 'Broad panels for low-risk observation cases are deferred',
              icon: '📉',
              image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
            },
            {
              title: 'Improves Early Escalation',
              description: 'True deterioration risk is recognized earlier',
              icon: '⚡',
              image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
            },
            {
              title: 'Standardizes Protocols',
              description: 'Consistent observation and escalation criteria',
              icon: '📋',
              image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
            },
          ].map((item, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-48 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">{item.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-hud-text-muted">{item.description}</p>
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
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              name: 'Vitals Time-Series',
              detail: 'HR, BP, SpO₂, temp, RR trends over time',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
            },
            {
              name: 'Symptom Trajectory',
              detail: 'Worsening, persistent, or new red flags',
              image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=400&h=300&fit=crop',
            },
            {
              name: 'Clinical Context',
              detail: 'Initial presentation and baseline status',
              image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
            },
          ].map((input, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-40 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={input.image}
                  alt={input.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/70 to-transparent" />
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">INPUT {i + 1}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{input.name}</h3>
              <p className="text-sm text-hud-text-muted">{input.detail}</p>
            </HUDPanel>
          ))}
        </div>

        {/* Engine Mapping */}
        <SectionHeader
          sectionId="04/12"
          label="MODULE: ENGINE MAPPING"
          title="Decision Framework"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-teal mb-3">RULE-OUT MODE</div>
            <p className="text-sm text-hud-text-muted mb-4">
              Stable vitals trend + low risk profile → defer broad panels, continue monitoring
            </p>
            <div className="relative w-full h-32 rounded border border-hud-line-primary overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop"
                alt="Rule-Out"
                fill
                className="object-cover opacity-30"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-warning mb-3">MINIMAL PANEL MODE</div>
            <p className="text-sm text-hud-text-muted mb-4">
              Recommend targeted tests instead of full panels
            </p>
            <div className="relative w-full h-32 rounded border border-hud-line-primary overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
                alt="Minimal Panel"
                fill
                className="object-cover opacity-30"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="red">
            <div className="mono text-xs text-hud-critical mb-3">ESCALATION MODE</div>
            <p className="text-sm text-hud-text-muted mb-4">
              Deteriorating trend → urgent evaluation
            </p>
            <div className="relative w-full h-32 rounded border border-hud-line-primary overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
                alt="Escalation"
                fill
                className="object-cover opacity-30"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </HUDPanel>
        </div>

        {/* Outputs */}
        <SectionHeader
          sectionId="05/12"
          label="MODULE: OUTPUTS"
          title="Output Schema"
          className="mt-16"
        />
        <HUDPanel className="p-6 mt-6" withBrackets>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-4">OUTPUT FIELDS</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Deterioration risk band (Low / Moderate / High)</li>
                <li>• Confidence score</li>
                <li>• Next step: continue monitoring / targeted test / urgent evaluation</li>
                <li>• "Abstain" when data insufficient</li>
              </ul>
            </div>
            <div>
              <div className="mono text-xs text-hud-warning mb-4">SAFETY NOTES</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Not a sepsis diagnosis</li>
                <li>• Not a replacement for labs</li>
                <li>• Designed to reduce waste while escalating risk earlier</li>
                <li>• All outputs subject to clinician review</li>
              </ul>
            </div>
          </div>
        </HUDPanel>

        {/* Abstain Conditions */}
        <SectionHeader
          sectionId="06/12"
          label="MODULE: SAFETY GATES"
          title="Abstain Conditions"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            'Missing time-series window',
            'Unreliable measurements',
            'Conflicting or sparse signals',
          ].map((condition, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="mono text-xs text-hud-warning mb-2">CONDITION {i + 1}</div>
              <p className="text-sm text-hud-text-muted">{condition}</p>
            </HUDPanel>
          ))}
        </div>

        {/* Model Registry */}
        <SectionHeader
          sectionId="07/12"
          label="MODULE: MODEL REGISTRY"
          title="Model Sources"
          className="mt-16"
        />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-hud-line-primary">
                <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Domain</th>
                <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Task</th>
                <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Model / Source</th>
                <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Time-series</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Classical baseline</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">XGBoost</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/dmlc/xgboost" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                </td>
              </tr>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Time-series</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Deep learning (optional)</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">tsai</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/timeseriesAI/tsai" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                </td>
              </tr>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Time-series</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Probabilistic (optional)</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">PyMC</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/pymc-devs/pymc" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                </td>
              </tr>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Data benchmarking</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Dataset access</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">PhysioNet</td>
                <td className="py-3 px-4">
                  <a href="https://physionet.org" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                  <div className="text-xs text-hud-text-muted mt-1">use for validation and calibration</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Deployment */}
        <SectionHeader
          sectionId="08/12"
          label="MODULE: DEPLOYMENT"
          title="Deployment Configuration"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-4">HARDWARE REQUIREMENTS</div>
            <div className="space-y-2 text-sm text-hud-text-muted">
              <div>CPU: ✓ Required</div>
              <div>GPU: Optional</div>
              <div>Edge: ✓ Supported</div>
              <div>Offline: ✓ Supported</div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-4">DEPLOYMENT CONTEXTS</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• Urgent care centers</li>
              <li>• OPD observation units</li>
              <li>• Emergency department triage</li>
              <li>• Inpatient monitoring</li>
            </ul>
          </HUDPanel>
        </div>

        {/* Limitations */}
        <SectionHeader
          sectionId="09/12"
          label="MODULE: LIMITATIONS"
          title="Important Limitations"
          className="mt-16"
        />
        <HUDPanel className="p-6 mt-6 border-2 border-hud-warning/50" withBrackets>
          <ul className="space-y-3 text-sm text-hud-text-muted">
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Not a sepsis diagnosis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Not a replacement for labs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Designed to reduce waste while escalating risk earlier</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Requires continuous monitoring inputs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Strict audit logs and alert rate controls required</span>
            </li>
          </ul>
        </HUDPanel>

        {/* Example Outputs */}
        <SectionHeader
          sectionId="10/12"
          label="MODULE: EXAMPLES"
          title="Example Outputs"
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-teal mb-3">STABLE TREND</div>
            <p className="text-sm text-hud-text-muted italic">
              "Stable trend. Defer broad panel. Continue monitoring with reassessment interval."
            </p>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="red">
            <div className="mono text-xs text-hud-critical mb-3">RISING RISK</div>
            <p className="text-sm text-hud-text-muted italic">
              "Rising risk trend. Escalate to urgent evaluation."
            </p>
          </HUDPanel>
        </div>

        {/* Clinical Workflow */}
        <SectionHeader
          sectionId="11/12"
          label="MODULE: WORKFLOW"
          title="Clinical Workflow Integration"
          className="mt-16"
        />
        <div className="mt-6">
          <HUDPanel className="p-6" withBrackets>
            <div className="relative w-full h-64 rounded border border-hud-line-primary overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                alt="Workflow"
                fill
                className="object-cover opacity-20"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mono text-xs text-hud-glow-cyan mb-4">WORKFLOW DIAGRAM</div>
                  <div className="text-sm text-hud-text-muted">
                    Continuous monitoring → Risk assessment → Decision support → Clinician review
                  </div>
                </div>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* How It Fits */}
        <SectionHeader
          sectionId="12/12"
          label="MODULE: INTEGRATION"
          title="How This Service Fits the Engine"
          className="mt-16"
        />
        <HUDPanel className="p-6 mt-6" withBrackets>
          <p className="text-sm text-hud-text-muted mb-4">
            The Acute Deterioration & Sepsis Early Warning Wing operates as a time-series analysis module within the Live Corp engine. It processes continuous vital sign data to identify trends that indicate potential deterioration, enabling earlier intervention while reducing unnecessary broad panel ordering for stable patients.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-2">PRIMARY FUNCTION</div>
              <p className="text-sm text-hud-text-muted">Early warning risk scoring from vitals time-series</p>
            </div>
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-2">OPERATING MODE</div>
              <p className="text-sm text-hud-text-muted">ESCALATION + ABSTAIN</p>
            </div>
          </div>
        </HUDPanel>
      </div>
    </div>
  );
}

