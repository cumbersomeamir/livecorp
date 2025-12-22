'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';
import HUDNavbar from '../ui/HUDNavbar';
import Footer from '../sections/Footer';

export default function TrustPage() {
  const shieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shieldRef.current) {
      const layers = shieldRef.current.querySelectorAll('.shield-layer');
      layers.forEach((layer, i) => {
        (layer as HTMLElement).style.animationDelay = `${i * 0.3}s`;
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-hud-bg-primary text-hud-text-primary relative">
      <HUDNavbar />
      
      <div className="min-h-screen pt-20">
        {/* Hero - Shield Visualization */}
        <section className="relative py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="mono text-xs text-hud-glow-teal mb-4">TRUST & GOVERNANCE</div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4">Trust Framework</h1>
              <p className="text-xl text-hud-text-muted max-w-3xl mx-auto">
                Built on transparency, safety-first policies, and rigorous governance.
              </p>
            </motion.div>

            {/* Shield Visualization */}
            <motion.div
              ref={shieldRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center min-h-[500px] relative"
            >
              <div className="relative">
                {/* Shield Layers */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="shield-layer absolute border-4 border-hud-glow-cyan/30 rounded-full"
                    style={{
                      width: `${200 + i * 60}px`,
                      height: `${200 + i * 60}px`,
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      animation: 'pulse-glow 3s ease-in-out infinite',
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
                
                {/* Central Shield */}
                <div className="relative w-64 h-64 border-4 border-hud-glow-cyan rounded-full flex items-center justify-center bg-hud-bg-primary/50 backdrop-blur-sm">
                  <div className="w-48 h-48 border-2 border-hud-glow-teal rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="mono text-2xl text-hud-glow-cyan mb-2">🛡️</div>
                      <div className="mono text-xs text-hud-glow-teal">TRUST</div>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 180;
                  const y = Math.sin(rad) * 180;
                  const badges = ['HIPAA', 'DPDP', 'GDPR', 'SOC2', 'AUDIT', 'LOG'];
                  return (
                    <div
                      key={i}
                      className="absolute mono text-xs text-hud-glow-cyan bg-hud-bg-primary/80 px-3 py-1 border border-hud-glow-cyan/50 rounded"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        animation: `pulse-glow 2s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      {badges[i]}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Abstain Policy */}
          <SectionHeader
            sectionId="01/04"
            label="MODULE: CORE POLICY"
            title="Abstain-When-Uncertain Policy"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <HUDPanel className="p-8" withBrackets glow="cyan">
              <div className="mono text-xs text-hud-glow-cyan mb-4">HARD RULE</div>
              <p className="text-lg font-semibold text-hud-text-primary mb-4">
                If confidence &lt; threshold → ABSTAIN
              </p>
              <ul className="space-y-3 text-sm text-hud-text-muted">
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                  <span>No reassurance when uncertain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                  <span>No optimization when data is insufficient</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                  <span>No forced pathway when confidence is low</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                  <span>Always recommend clinician evaluation when abstaining</span>
                </li>
              </ul>
            </HUDPanel>
            <HUDPanel className="p-8" withBrackets>
              <div className="mono text-xs text-hud-warning mb-4">WHEN WE ABSTAIN</div>
              <div className="space-y-4">
                {[
                  'Low signal quality',
                  'Conflicting signals',
                  'Missing critical data',
                  'Unreliable measurements',
                  'Insufficient time-series window',
                ].map((condition, i) => (
                  <div key={i} className="flex items-center gap-3 pb-3 border-b border-hud-line-secondary last:border-0">
                    <div className="w-2 h-2 bg-hud-warning rounded-full" />
                    <span className="text-sm text-hud-text-muted">{condition}</span>
                  </div>
                ))}
              </div>
            </HUDPanel>
          </div>

          {/* Governance */}
          <SectionHeader
            sectionId="02/04"
            label="MODULE: GOVERNANCE"
            title="Governance Framework"
            className="mt-16"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: 'Versioned Models',
                description: 'All ML models are versioned, logged, and auditable',
                icon: '📊',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
              },
              {
                title: 'Audit Logs',
                description: 'Every decision is logged with full traceability',
                icon: '📝',
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=400&h=300&fit=crop',
              },
              {
                title: 'Performance Monitoring',
                description: 'Continuous monitoring for model drift and performance',
                icon: '📈',
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
              },
            ].map((item, i) => (
              <HUDPanel key={i} className="p-6" withBrackets>
                <div className="relative w-full h-40 mb-4 rounded border border-hud-line-primary overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                  <div className="absolute bottom-2 left-2 mono text-2xl">{item.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-hud-text-muted">{item.description}</p>
              </HUDPanel>
            ))}
          </div>

          {/* Audit Logs */}
          <SectionHeader
            sectionId="03/04"
            label="MODULE: AUDIT LOGS"
            title="Audit Log System"
            className="mt-16"
          />
          <HUDPanel className="p-6 mt-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-4">LOG STRUCTURE</div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-hud-line-primary">
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Field</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Description</th>
                    <th className="text-left py-3 px-4 mono text-xs text-hud-glow-cyan">Retention</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { field: 'Timestamp', desc: 'Exact time of decision', retention: '7 years' },
                    { field: 'Service ID', desc: 'Which wing processed the request', retention: '7 years' },
                    { field: 'Input Hash', desc: 'Anonymized input fingerprint', retention: '7 years' },
                    { field: 'Output', desc: 'Risk band, confidence, next step', retention: '7 years' },
                    { field: 'Model Version', desc: 'Exact model version used', retention: '7 years' },
                    { field: 'Abstain Reason', desc: 'If abstained, why', retention: '7 years' },
                    { field: 'Clinician Override', desc: 'If overridden, by whom and when', retention: '7 years' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30">
                      <td className="py-3 px-4 mono text-sm text-hud-text-primary">{row.field}</td>
                      <td className="py-3 px-4 text-sm text-hud-text-muted">{row.desc}</td>
                      <td className="py-3 px-4 mono text-xs text-hud-glow-teal">{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </HUDPanel>

          {/* Privacy & Security */}
          <SectionHeader
            sectionId="04/04"
            label="MODULE: PRIVACY & SECURITY"
            title="Privacy & Security Posture"
            className="mt-16"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">COMPLIANCE</div>
              <div className="space-y-3">
                {[
                  { name: 'HIPAA', status: 'Ready', color: 'text-hud-glow-teal' },
                  { name: 'DPDP (India)', status: 'Aligned', color: 'text-hud-glow-teal' },
                  { name: 'GDPR (EU)', status: 'Compliant', color: 'text-hud-glow-teal' },
                  { name: 'SOC2', status: 'Roadmap', color: 'text-hud-warning' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between pb-3 border-b border-hud-line-secondary last:border-0">
                    <span className="mono text-sm text-hud-text-primary">{item.name}</span>
                    <span className={`mono text-xs ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </HUDPanel>
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">SECURITY MEASURES</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>End-to-end encryption for data in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>Encryption at rest for stored data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>Data minimization principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>Regular security audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>Access controls and authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>Incident response procedures</span>
                </li>
              </ul>
            </HUDPanel>
          </div>

          {/* Data Ethics */}
          <div className="mt-16">
            <HUDPanel className="p-8 border-2 border-hud-glow-cyan/50" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">DATA ETHICS PRINCIPLES</div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2 text-sm text-hud-text-muted">
                    <li>• Collect only what is required</li>
                    <li>• Process only for stated purpose</li>
                    <li>• Retain only as long as needed</li>
                    <li>• Delete on request</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-sm text-hud-text-muted">
                    <li>• Never monetize patient data</li>
                    <li>• No diagnosis language to patients</li>
                    <li>• No fear-based outputs</li>
                    <li>• Clear next-step framing</li>
                  </ul>
                </div>
              </div>
            </HUDPanel>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

