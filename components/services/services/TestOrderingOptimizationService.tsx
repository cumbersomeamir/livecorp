'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

export default function TestOrderingOptimizationService() {
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (flowRef.current) {
      const nodes = flowRef.current.querySelectorAll('.flow-node');
      nodes.forEach((node, i) => {
        (node as HTMLElement).style.animationDelay = `${i * 0.2}s`;
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
              <div className="mono text-xs text-hud-glow-cyan mb-1">MODULE ID: SVC-10</div>
              <h1 className="text-2xl font-semibold">Test Ordering Optimization Layer</h1>
            </div>
            <div className="mono text-xs text-hud-warning">STATUS: PILOT</div>
          </div>
        </div>
      </div>

      {/* Safety Ribbon */}
      <div className="bg-hud-warning/10 border-b border-hud-warning/30 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mono text-xs text-hud-warning text-center">
            Not clinical advice. Protocol-dependent. Must be configured and validated per deployment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Visualization - Optimization Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 flex items-center justify-center min-h-[500px] relative"
        >
          <div ref={flowRef} className="relative w-full h-full">
            {/* Flow Diagram */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
              <defs>
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2DE2FF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#34F5C5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2DE2FF" stopOpacity="0.8" />
                </linearGradient>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#2DE2FF" />
                </marker>
              </defs>
              
              {/* Flow Lines */}
              <line x1="100" y1="200" x2="250" y2="200" stroke="url(#flow-gradient)" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="300" y1="200" x2="450" y2="200" stroke="url(#flow-gradient)" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="500" y1="200" x2="650" y2="200" stroke="url(#flow-gradient)" strokeWidth="3" markerEnd="url(#arrowhead)" />

              {/* Process Nodes */}
              <rect x="50" y="150" width="100" height="100" rx="4" fill="#2DE2FF" opacity="0.2" stroke="#2DE2FF" strokeWidth="2" className="flow-node animate-pulse" />
              <text x="100" y="205" textAnchor="middle" fill="#2DE2FF" fontFamily="monospace" fontSize="10">INPUTS</text>

              <rect x="200" y="150" width="100" height="100" rx="4" fill="#34F5C5" opacity="0.2" stroke="#34F5C5" strokeWidth="2" className="flow-node animate-pulse" style={{ animationDelay: '0.2s' }} />
              <text x="250" y="205" textAnchor="middle" fill="#34F5C5" fontFamily="monospace" fontSize="10">PROCESS</text>

              <rect x="350" y="150" width="100" height="100" rx="4" fill="#2DE2FF" opacity="0.2" stroke="#2DE2FF" strokeWidth="2" className="flow-node animate-pulse" style={{ animationDelay: '0.4s' }} />
              <text x="400" y="205" textAnchor="middle" fill="#2DE2FF" fontFamily="monospace" fontSize="10">OPTIMIZE</text>

              <rect x="500" y="150" width="100" height="100" rx="4" fill="#FFB020" opacity="0.2" stroke="#FFB020" strokeWidth="2" className="flow-node animate-pulse" style={{ animationDelay: '0.6s' }} />
              <text x="550" y="205" textAnchor="middle" fill="#FFB020" fontFamily="monospace" fontSize="10">OUTPUT</text>

              <rect x="650" y="150" width="100" height="100" rx="4" fill="#34F5C5" opacity="0.2" stroke="#34F5C5" strokeWidth="2" className="flow-node animate-pulse" style={{ animationDelay: '0.8s' }} />
              <text x="700" y="205" textAnchor="middle" fill="#34F5C5" fontFamily="monospace" fontSize="10">REVIEW</text>
            </svg>

            {/* Central Hub */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 border-4 border-hud-glow-cyan rounded-full flex items-center justify-center bg-hud-bg-primary/50">
                  <div className="text-center">
                    <div className="mono text-xs text-hud-glow-cyan">META</div>
                    <div className="mono text-xs text-hud-glow-teal mt-1">LAYER</div>
                  </div>
                </div>
                {/* Connecting lines to other services */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 150;
                  const y = Math.sin(rad) * 150;
                  return (
                    <div
                      key={i}
                      className="absolute w-1 h-16 bg-hud-glow-cyan/30"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                        transformOrigin: 'center bottom',
                        animation: `pulse-glow 2s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-0 right-0 text-center">
              <div className="mono text-xs text-hud-glow-cyan">TEST ORDERING OPTIMIZATION FLOW</div>
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
              Even with good triage, ordering behavior remains inconsistent. Clinicians often order broad panels because it is faster than reasoning through minimal pathways under time pressure.
            </p>
            <div className="space-y-2 text-sm text-hud-text-muted">
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning">→</span>
                <span>Broad "shotgun" panels</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning">→</span>
                <span>Duplicate tests across visits</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning">→</span>
                <span>Protocol drift</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-3">OPTIMIZATION IMPACT</div>
            <div className="space-y-3">
              <div>
                <div className="mono text-xs text-hud-text-muted">Panel Reduction</div>
                <div className="text-2xl font-semibold text-hud-glow-cyan">40-60%</div>
              </div>
              <div>
                <div className="mono text-xs text-hud-text-muted">Cost Efficiency</div>
                <div className="text-2xl font-semibold text-hud-glow-teal">+35%</div>
                <div className="mono text-xs text-hud-text-muted">improvement</div>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* What it Reduces */}
        <SectionHeader
          sectionId="02/12"
          label="MODULE: INTERVENTION"
          title="What It Reduces"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: 'Broad Panels',
              description: 'Reduces "shotgun" panel ordering patterns',
              image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
            },
            {
              title: 'Duplicate Tests',
              description: 'Eliminates redundant tests across visits',
              image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
            },
            {
              title: 'Protocol Drift',
              description: 'Maintains consistent ordering standards',
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
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              name: 'Engine Outputs',
              detail: 'Risk bands and recommendations from SVC-01 to SVC-09',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
            },
            {
              name: 'Clinic Protocols',
              detail: 'Local protocol rules (configurable)',
              image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=400&h=300&fit=crop',
            },
            {
              name: 'Constraints',
              detail: 'Patient constraints (cost sensitivity, access)',
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

        {/* How It Works */}
        <SectionHeader
          sectionId="04/12"
          label="MODULE: CORE CONCEPT"
          title="How It Works"
          className="mt-16"
        />
        <HUDPanel className="p-6 mt-6" withBrackets>
          <p className="text-sm text-hud-text-muted mb-4">
            This layer does not detect disease. It converts risk bands into a <strong className="text-hud-glow-cyan">minimal test plan</strong> that is:
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            {[
              { label: 'Protocol-Aligned', icon: '✓' },
              { label: 'Auditable', icon: '✓' },
              { label: 'Configurable', icon: '✓' },
              { label: 'Reversible', icon: '✓' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mono text-2xl text-hud-glow-teal mb-2">{item.icon}</div>
                <div className="mono text-xs text-hud-text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </HUDPanel>

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
                <li>• Minimal next test category</li>
                <li>• Rationale notes (short, structured)</li>
                <li>• Confidence and abstain notes</li>
                <li>• "Stop conditions" (when to escalate)</li>
              </ul>
            </div>
            <div>
              <div className="mono text-xs text-hud-warning mb-4">SAFETY NOTES</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Not clinical advice</li>
                <li>• Protocol-dependent</li>
                <li>• Must be configured per deployment</li>
                <li>• Clinician override always available</li>
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
            'No protocol configuration present',
            'Conflicting engine outputs',
            'Missing constraint inputs',
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
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Decision logic</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Ranking</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">scikit-learn</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/scikit-learn/scikit-learn" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                </td>
              </tr>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Tabular ranking</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Baseline</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">LightGBM</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/microsoft/LightGBM" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                </td>
              </tr>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Constraint logic</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Optimization (optional)</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">OR-Tools</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/google/or-tools" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
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
              <div>GPU: ✗ Not required</div>
              <div>Edge: ✗ Not supported</div>
              <div>Offline: ✗ Not supported</div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-4">DEPLOYMENT NOTES</div>
            <p className="text-sm text-hud-text-muted">
              Runs CPU-only. Sits above all other wings. Exports a printable "minimal plan" for clinician sign-off.
            </p>
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
              <span>Not clinical advice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Protocol-dependent</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Must be configured and validated per deployment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Requires local protocol configuration</span>
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
            <div className="mono text-xs text-hud-glow-teal mb-3">MINIMAL PLAN</div>
            <p className="text-sm text-hud-text-muted italic">
              "Minimal plan: monitor + targeted check. Broad panel not recommended unless new red flags appear."
            </p>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-warning mb-3">ABSTAIN</div>
            <p className="text-sm text-hud-text-muted italic">
              "Protocol missing. Abstain. Recommend clinician decision."
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
                    Engine outputs → Protocol matching → Constraint optimization → Minimal plan → Clinician review
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
            The Test Ordering Optimization Layer operates as a meta-service that sits above all other wings (SVC-01 to SVC-09). It converts risk bands and recommendations from individual services into a minimal, protocol-aligned test pathway with auditable rationale, reducing broad panel ordering while maintaining clinician control.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-2">PRIMARY FUNCTION</div>
              <p className="text-sm text-hud-text-muted">Meta-service for test ordering optimization</p>
            </div>
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-2">OPERATING MODE</div>
              <p className="text-sm text-hud-text-muted">MINIMAL PANEL</p>
            </div>
          </div>
        </HUDPanel>
      </div>
    </div>
  );
}

