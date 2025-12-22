'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HUDPanel from '../../ui/HUDPanel';
import SectionHeader from '../../ui/SectionHeader';

export default function MetabolicChronicService() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const bars = chartRef.current.querySelectorAll('.chart-bar');
      bars.forEach((bar, i) => {
        (bar as HTMLElement).style.animationDelay = `${i * 0.1}s`;
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
              <div className="mono text-xs text-hud-glow-cyan mb-1">MODULE ID: SVC-08</div>
              <h1 className="text-2xl font-semibold">Metabolic & Chronic Risk Stratification Wing</h1>
            </div>
            <div className="mono text-xs text-hud-warning">STATUS: PILOT</div>
          </div>
        </div>
      </div>

      {/* Safety Ribbon */}
      <div className="bg-hud-warning/10 border-b border-hud-warning/30 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mono text-xs text-hud-warning text-center">
            Not a diagnostic tool. Does not output lab values. Requires local clinical protocol mapping.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Visualization - Risk Stratification Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 flex items-center justify-center min-h-[500px] relative"
        >
          <div ref={chartRef} className="relative w-full h-full">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border-t border-hud-line-primary"
                  style={{ top: `${(i + 1) * 20}%`, left: 0, right: 0 }}
                />
              ))}
            </div>

            {/* Risk Bars */}
            <div className="absolute bottom-20 left-0 right-0 flex items-end justify-center gap-8 px-8">
              {[
                { height: 30, label: 'Low', color: '#34F5C5' },
                { height: 50, label: 'Mod', color: '#FFB020' },
                { height: 70, label: 'High', color: '#FF3B3B' },
                { height: 40, label: 'Low', color: '#34F5C5' },
                { height: 60, label: 'Mod', color: '#FFB020' },
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="chart-bar w-16 rounded-t transition-all duration-1000"
                    style={{
                      height: `${bar.height}%`,
                      backgroundColor: bar.color,
                      opacity: 0.6,
                      animation: 'pulse-glow 2s ease-in-out infinite',
                    }}
                  />
                  <div className="mono text-xs text-hud-text-muted mt-2">{bar.label}</div>
                </div>
              ))}
            </div>

            {/* Central Risk Indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 border-4 border-hud-glow-cyan/50 rounded-full flex items-center justify-center">
                  <div className="w-36 h-36 border-2 border-hud-glow-teal/50 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="mono text-xs text-hud-glow-cyan mb-2">RISK</div>
                      <div className="text-3xl font-bold text-hud-glow-teal">STRAT</div>
                      <div className="mono text-xs text-hud-text-muted mt-2">MINIMAL PANEL</div>
                    </div>
                  </div>
                </div>
                {/* Orbiting indicators */}
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 120;
                  const y = Math.sin(rad) * 120;
                  return (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-hud-glow-cyan rounded-full"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        animation: `pulse-glow 1.5s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-0 right-0 text-center">
              <div className="mono text-xs text-hud-glow-cyan">CHRONIC RISK STRATIFICATION</div>
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
              Chronic care pathways often produce repeated routine labs and broad panels without individualized risk stratification, creating cost and fatigue for patients.
            </p>
            <div className="space-y-2 text-sm text-hud-text-muted">
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning">→</span>
                <span>Repeated broad metabolic panels without new indication</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning">→</span>
                <span>Unfocused screening tests in low-risk follow-ups</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mono text-xs text-hud-warning">→</span>
                <span>Redundant "check everything" ordering patterns</span>
              </div>
            </div>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-3">IMPACT METRICS</div>
            <div className="space-y-3">
              <div>
                <div className="mono text-xs text-hud-text-muted">Panel Reduction</div>
                <div className="text-2xl font-semibold text-hud-glow-cyan">35-50%</div>
              </div>
              <div>
                <div className="mono text-xs text-hud-text-muted">Cost Savings</div>
                <div className="text-2xl font-semibold text-hud-glow-teal">$1.8M</div>
                <div className="mono text-xs text-hud-text-muted">per 10K patients</div>
              </div>
            </div>
          </HUDPanel>
        </div>

        {/* What it Reduces */}
        <SectionHeader
          sectionId="02/12"
          label="MODULE: INTERVENTION"
          title="What It Reduces / Defers"
          className="mt-16"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: 'Repeated Broad Panels',
              description: 'Metabolic panels without new indication are deferred',
              image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
            },
            {
              title: 'Unfocused Screening',
              description: 'Low-risk follow-ups receive targeted testing',
              image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
            },
            {
              title: 'Redundant Patterns',
              description: '"Check everything" ordering is minimized',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
          {[
            { name: 'Vitals', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
            { name: 'Demographics', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=400&h=300&fit=crop' },
            { name: 'History', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
            { name: 'Symptoms', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
            { name: 'Prior Results', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop' },
          ].map((input, i) => (
            <HUDPanel key={i} className="p-6" withBrackets>
              <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                <Image
                  src={input.image}
                  alt={input.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/70 to-transparent" />
              </div>
              <h3 className="text-sm font-semibold text-center">{input.name}</h3>
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
              Stable course + low-risk changes → defer repeat broad panels
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
          <HUDPanel className="p-6" withBrackets glow="cyan">
            <div className="mono text-xs text-hud-glow-cyan mb-3">MINIMAL PANEL MODE</div>
            <p className="text-sm text-hud-text-muted mb-4">
              Recommend the smallest targeted next test based on risk and change
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
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-warning mb-3">ESCALATION MODE</div>
            <p className="text-sm text-hud-text-muted mb-4">
              New red flags → evaluation
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
                <li>• Risk band</li>
                <li>• "Minimal next test" recommendation category (targeted, not comprehensive)</li>
                <li>• Confidence</li>
                <li>• Safety notes</li>
              </ul>
            </div>
            <div>
              <div className="mono text-xs text-hud-warning mb-4">SAFETY NOTES</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Not a diagnostic tool</li>
                <li>• Does not output lab values</li>
                <li>• Requires local clinical protocol mapping</li>
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
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            'Missing history/context for risk framing',
            'Conflicting or incomplete prior results',
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
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Tabular risk</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Risk fusion</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">LightGBM</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/microsoft/LightGBM" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                </td>
              </tr>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Tabular risk</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Risk fusion alt</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">XGBoost</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/dmlc/xgboost" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
                    Source →
                  </a>
                </td>
              </tr>
              <tr className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                <td className="py-3 px-4 mono text-sm text-hud-text-primary">Calibration</td>
                <td className="py-3 px-4 text-sm text-hud-text-muted">Tools</td>
                <td className="py-3 px-4 text-sm text-hud-glow-teal">scikit-learn</td>
                <td className="py-3 px-4">
                  <a href="https://github.com/scikit-learn/scikit-learn" target="_blank" rel="noopener noreferrer" className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal">
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
              Generates printable "minimal panel rationale" notes. Integrates well with clinic intake forms.
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
              <span>Not a diagnostic tool</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Does not output lab values</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mono text-xs text-hud-warning mt-1">✗</span>
              <span>Requires local clinical protocol mapping for "minimal panel categories"</span>
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
            <div className="mono text-xs text-hud-glow-teal mb-3">LOW RISK</div>
            <p className="text-sm text-hud-text-muted italic">
              "Low risk, stable course. Defer repeat broad panel; monitor symptoms and vitals."
            </p>
          </HUDPanel>
          <HUDPanel className="p-6" withBrackets>
            <div className="mono text-xs text-hud-warning mb-3">MODERATE RISK</div>
            <p className="text-sm text-hud-text-muted italic">
              "Moderate risk change. Recommend targeted testing rather than full panel."
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
                    Patient history → Risk assessment → Minimal panel recommendation → Clinician review
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
            The Metabolic & Chronic Risk Stratification Wing operates as a risk framing module within the Live Corp engine. It processes patient history, vitals, and symptom changes to recommend the smallest targeted test panel, reducing unnecessary broad metabolic panels in chronic care pathways.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <div className="mono text-xs text-hud-glow-cyan mb-2">PRIMARY FUNCTION</div>
              <p className="text-sm text-hud-text-muted">Risk framing for chronic pathways</p>
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

