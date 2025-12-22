'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

export default function NeurologicalTriageService() {
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (networkRef.current) {
      const nodes = networkRef.current.querySelectorAll('.network-node');
      nodes.forEach((node, i) => {
        (node as HTMLElement).style.animationDelay = `${i * 0.15}s`;
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
              <div className="mono text-xs text-hud-glow-cyan mb-1">MODULE ID: SVC-09</div>
              <h1 className="text-2xl font-semibold">Neurological Symptom Triage Wing</h1>
            </div>
            <div className="mono text-xs text-hud-warning">STATUS: PILOT</div>
          </div>
        </div>
      </div>

      {/* Safety Ribbon */}
      <div className="bg-hud-critical/10 border-b border-hud-critical/30 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mono text-xs text-hud-critical text-center">
            Not stroke diagnosis. Not seizure diagnosis. Strict escalation rules prioritized over minimizing tests when uncertain.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Visualization - Neural Network Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 flex items-center justify-center min-h-[500px] relative"
        >
          <div ref={networkRef} className="relative w-full h-full">
            {/* Network Nodes */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
              <defs>
                <linearGradient id="neuro-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2DE2FF" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#34F5C5" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF3B3B" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              
              {/* Connection Lines */}
              <line x1="100" y1="100" x2="200" y2="150" stroke="#2DE2FF" strokeWidth="1" opacity="0.3" />
              <line x1="200" y1="150" x2="300" y2="200" stroke="#2DE2FF" strokeWidth="1" opacity="0.3" />
              <line x1="300" y1="200" x2="400" y2="150" stroke="#2DE2FF" strokeWidth="1" opacity="0.3" />
              <line x1="400" y1="150" x2="500" y2="100" stroke="#2DE2FF" strokeWidth="1" opacity="0.3" />
              
              <line x1="100" y1="300" x2="200" y2="250" stroke="#34F5C5" strokeWidth="1" opacity="0.3" />
              <line x1="200" y1="250" x2="300" y2="200" stroke="#34F5C5" strokeWidth="1" opacity="0.3" />
              <line x1="300" y1="200" x2="400" y2="250" stroke="#34F5C5" strokeWidth="1" opacity="0.3" />
              <line x1="400" y1="250" x2="500" y2="300" stroke="#34F5C5" strokeWidth="1" opacity="0.3" />

              {/* Input Layer Nodes */}
              {[100, 200, 300, 400, 500].map((x, i) => (
                <circle
                  key={`input-${i}`}
                  cx={x}
                  cy={100}
                  r="12"
                  fill="url(#neuro-gradient)"
                  className="network-node animate-pulse"
                />
              ))}

              {/* Hidden Layer Nodes */}
              {[150, 250, 350, 450].map((x, i) => (
                <circle
                  key={`hidden-${i}`}
                  cx={x}
                  cy={200}
                  r="15"
                  fill="#2DE2FF"
                  opacity="0.5"
                  className="network-node animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}

              {/* Output Layer Nodes */}
              {[100, 300, 500].map((x, i) => (
                <circle
                  key={`output-${i}`}
                  cx={x}
                  cy={300}
                  r="18"
                  fill={i === 1 ? '#FF3B3B' : '#34F5C5'}
                  opacity="0.7"
                  className="network-node animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </svg>

            {/* Central Decision Hub */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-40 h-40 border-4 border-hud-glow-cyan rounded-full flex items-center justify-center bg-hud-bg-primary/50">
                  <div className="w-28 h-28 border-2 border-hud-critical/50 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="mono text-xs text-hud-critical">TRIAGE</div>
                      <div className="mono text-xs text-hud-glow-cyan mt-1">ESCALATION</div>
                    </div>
                  </div>
                </div>
                {/* Red flag indicators */}
                {[0, 90, 180, 270].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 100;
                  const y = Math.sin(rad) * 100;
                  return (
                    <div
                      key={i}
                      className="absolute w-2 h-8 bg-hud-critical rounded"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                        animation: `pulse-glow 1s ease-in-out infinite`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-0 right-0 text-center">
              <div className="mono text-xs text-hud-glow-cyan">NEUROLOGICAL TRIAGE NETWORK</div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-between px-8">
              <div className="mono text-xs text-hud-text-muted">INPUT</div>
              <div className="mono text-xs text-hud-text-muted">PROCESS</div>
              <div className="mono text-xs text-hud-text-muted">OUTPUT</div>
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
              Neurological symptoms trigger defensive imaging, yet missing a true emergency is unacceptable. Live Corp focuses on structured triage, not diagnosis.
            </p>
            <div className="space-y-2 text-sm text-hud-text-muted">
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-critical">→</span>
                <span>Low-yield defensive imaging in low-risk presentations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-critical">→</span>
                <span>Missed escalation for high-risk signs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-critical">→</span>
                <span>Inconsistent documentation of red flags</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="red">
            <div className="mono text-xs text-hud-critical mb-3">CRITICAL IMPACT</div>
            <div className="space-y-3">
              <div>
                <div className="mono text-xs text-hud-text-muted">Imaging Reduction</div>
                <div className="text-2xl font-semibold text-hud-critical">25-40%</div>
              </div>
              <div>
                <div className="mono text-xs text-hud-text-muted">Escalation Safety</div>
                <div className="text-2xl font-semibold text-hud-glow-teal">+30%</div>
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
              title: 'Reduces Defensive Imaging',
              description: 'Low-yield imaging in low-risk presentations is deferred',
              image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
            },
            {
              title: 'Improves Escalation Safety',
              description: 'High-risk signs are recognized and escalated faster',
              image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
            },
            {
              title: 'Standardizes Documentation',
              description: 'Consistent red flag documentation and triage protocols',
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
                <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">BENEFIT {i + 1}</div>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {[
            {
              name: 'Symptoms',
              detail: 'Structured symptom onset and pattern',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
            },
            {
              name: 'Vitals',
              detail: 'Blood pressure, heart rate, temperature',
              image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=400&h=300&fit=crop',
            },
            {
              name: 'Neuro Checks',
              detail: 'Simple guided checks (speech, coordination)',
              image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
            },
            {
              name: 'Audio/Video',
              detail: 'Optional short capture for signal quality',
              image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
            },
          ].map((input, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-40 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={input.image}
                  alt={input.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
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
              Benign pattern + stable vitals + no red flags → defer immediate imaging
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
              Recommend clinic evaluation or targeted pathway
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
              Acute focal deficits → urgent evaluation
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
                <li>• Neuro risk band</li>
                <li>• Confidence</li>
                <li>• "Urgent evaluation required / clinic review / monitor"</li>
                <li>• Safety notes</li>
              </ul>
            </div>
            <div>
              <div className="mono text-xs text-hud-warning mb-4">SAFETY NOTES</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Not stroke diagnosis</li>
                <li>• Not seizure diagnosis</li>
                <li>• Strict escalation rules prioritized</li>
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
            'Unclear timeline of onset',
            'Missing key red-flag data',
            'Poor capture quality',
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
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Structured triage</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Risk fusion</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">scikit-learn</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/scikit-learn/scikit-learn" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                </td>
              </tr>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Risk fusion</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Alternative</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">XGBoost</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/dmlc/xgboost" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                </td>
              </tr>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Pose/action</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Guided checks (optional)</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">MediaPipe</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/google/mediapipe" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                  <div className="text-xs text-hud-text-muted mt-1">if used for guided checks, not diagnosis</div>
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
              <div>Edge: ✗ Not supported</div>
              <div>Offline: ✗ Not supported</div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-4">DEPLOYMENT CONTEXTS</div>
            <ul className="space-y-2 text-sm text-hud-text-muted">
              <li>• OPD triage support</li>
              <li>• Emergency department</li>
              <li>• Documentation assistance</li>
              <li>• Imaging gateway integration</li>
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
              <span>Not stroke diagnosis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Not seizure diagnosis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Strict escalation rules prioritized over minimizing tests when uncertain</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Imaging gateway invoked only on escalation</span>
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
          <HUDPanel className="p-6" withBrackets glow="red">
            <div className="mono text-xs text-hud-critical mb-3">HIGH RISK</div>
            <p className="text-sm text-hud-text-muted italic">
              "High risk pattern. Escalate to urgent evaluation."
            </p>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-warning mb-3">UNCERTAIN</div>
            <p className="text-sm text-hud-text-muted italic">
              "Uncertain history. Abstain. Recommend evaluation."
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
                    Symptom assessment → Red flag detection → Triage decision → Escalation or deferral
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
            The Neurological Symptom Triage Wing operates as a structured triage module within the Live Corp engine. It processes neurological symptoms, vitals, and simple neuro checks to identify red flags and escalate true emergencies while reducing defensive imaging in low-risk presentations.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-2">PRIMARY FUNCTION</div>
              <p className="text-sm text-hud-text-muted">Structured red-flag triage for neurological symptoms</p>
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

