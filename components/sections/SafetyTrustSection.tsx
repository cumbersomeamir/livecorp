'use client';

import { motion } from 'framer-motion';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';

export default function SafetyTrustSection() {
  return (
    <section id="safety" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          sectionId="07/10"
          label="MODULE: SAFETY & TRUST"
          title="Safety, Limitations, Trust"
          subtitle="Non-negotiable compliance and governance."
        />

        <div className="mt-16 space-y-8">
          {/* What Live Corp Does Not Do */}
          <HUDPanel className="p-8" withBrackets>
            <div className="mono text-xs text-hud-critical mb-4">LIMITATIONS</div>
            <h3 className="text-xl font-semibold mb-6">What Live Corp Does Not Do</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mono text-xs text-hud-critical mt-1">✗</span>
                <span className="text-hud-text-muted">No Diagnosis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mono text-xs text-hud-critical mt-1">✗</span>
                <span className="text-hud-text-muted">No Treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mono text-xs text-hud-critical mt-1">✗</span>
                <span className="text-hud-text-muted">No Replacement of Clinicians</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mono text-xs text-hud-critical mt-1">✗</span>
                <span className="text-hud-text-muted">No claim of perfect accuracy</span>
              </li>
            </ul>
          </HUDPanel>

          {/* Abstain Policy */}
          <HUDPanel className="p-8 border-2 border-hud-glow-teal/50" glow="teal">
            <div className="mono text-xs text-hud-glow-teal mb-4">POLICY</div>
            <h3 className="text-2xl font-semibold mb-4">Abstain-When-Uncertain Policy</h3>
            <p className="text-hud-text-muted leading-relaxed">
              Live Corp is designed to abstain from making recommendations when confidence thresholds are not met, signal quality is insufficient, or uncertainty is high. In such cases, the system recommends clinical evaluation and does not provide forced reassurance.
            </p>
          </HUDPanel>

          {/* Human-in-the-Loop */}
          <HUDPanel className="p-8" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-4">HUMAN OVERSIGHT</div>
            <h3 className="text-xl font-semibold mb-4">Human-in-the-Loop</h3>
            <p className="text-hud-text-muted mb-4">
              All recommendations are subject to clinician review and override. Override events are logged for continuous improvement and audit purposes.
            </p>
            <div className="mono text-xs text-hud-text-muted">
              Override logging • Audit trails • Continuous monitoring
            </div>
          </HUDPanel>

          {/* Governance */}
          <div className="grid md:grid-cols-2 gap-6">
            <HUDPanel className="p-6">
              <div className="mono text-xs text-hud-glow-cyan mb-3">GOVERNANCE</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• Versioned models</li>
                <li>• Audit logs</li>
                <li>• Performance monitoring (drift)</li>
              </ul>
            </HUDPanel>

            <HUDPanel className="p-6">
              <div className="mono text-xs text-hud-glow-teal mb-3">DATA PRIVACY</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li>• HIPAA-ready</li>
                <li>• DPDP aligned</li>
                <li>• GDPR compliant</li>
                <li>• SOC2 roadmap</li>
              </ul>
            </HUDPanel>
          </div>

          {/* Trust Signals */}
          <HUDPanel className="p-6">
            <div className="mono text-xs text-hud-text-muted mb-4">TRUST SIGNALS</div>
            <div className="flex flex-wrap gap-3">
              {['Clinically Validated', 'Peer Reviewed', 'Regulatory Compliant', 'Transparent Algorithms', 'Open Source Components'].map((signal) => (
                <span key={signal} className="status-tag">
                  {signal}
                </span>
              ))}
            </div>
          </HUDPanel>
        </div>
      </div>
    </section>
  );
}

