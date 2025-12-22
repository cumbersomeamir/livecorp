'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';
import HUDNavbar from '../ui/HUDNavbar';
import Footer from '../sections/Footer';

export default function DevelopersPage() {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      const lines = codeRef.current.querySelectorAll('.code-line');
      lines.forEach((line, i) => {
        (line as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-hud-bg-primary text-hud-text-primary relative">
      <HUDNavbar />
      
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="mono text-xs text-hud-glow-teal mb-4">DEVELOPER DOCUMENTATION</div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4">API & SDK</h1>
              <p className="text-xl text-hud-text-muted max-w-3xl mx-auto">
                Integrate Live Corp into your applications with our comprehensive API and SDK.
              </p>
            </motion.div>

            {/* Code Visualization */}
            <motion.div
              ref={codeRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center min-h-[400px] relative"
            >
              <HUDPanel className="p-8 w-full max-w-3xl" withBrackets>
                <div className="mono text-xs text-hud-glow-cyan mb-4">EXAMPLE API CALL</div>
                <div className="space-y-2">
                  {[
                    { text: 'POST /api/v1/analyze', color: 'text-hud-glow-cyan' },
                    { text: '{', color: 'text-hud-text-muted' },
                    { text: '  "service": "cardiac-pre-screening",', color: 'text-hud-text-primary' },
                    { text: '  "inputs": {', color: 'text-hud-text-muted' },
                    { text: '    "ecg": "...",', color: 'text-hud-text-primary' },
                    { text: '    "vitals": {...}', color: 'text-hud-text-primary' },
                    { text: '  }', color: 'text-hud-text-muted' },
                    { text: '}', color: 'text-hud-text-muted' },
                  ].map((line, i) => (
                    <div
                      key={i}
                      className={`code-line mono text-sm ${line.color}`}
                      style={{
                        animation: 'fade-in 0.5s ease-in forwards',
                        opacity: 0,
                      }}
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              </HUDPanel>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* API Documentation */}
          <SectionHeader
            sectionId="01/04"
            label="MODULE: API DOCS"
            title="API Documentation"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">ENDPOINTS</div>
              <div className="space-y-4">
                {[
                  { method: 'POST', path: '/api/v1/analyze', desc: 'Submit analysis request' },
                  { method: 'GET', path: '/api/v1/status/{id}', desc: 'Check request status' },
                  { method: 'GET', path: '/api/v1/results/{id}', desc: 'Retrieve results' },
                  { method: 'POST', path: '/api/v1/webhooks', desc: 'Register webhook' },
                ].map((endpoint, i) => (
                  <div key={i} className="pb-4 border-b border-hud-line-secondary last:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`mono text-xs px-2 py-1 ${
                        endpoint.method === 'POST' ? 'bg-hud-glow-cyan/20 text-hud-glow-cyan' :
                        'bg-hud-glow-teal/20 text-hud-glow-teal'
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="mono text-sm text-hud-text-primary">{endpoint.path}</span>
                    </div>
                    <div className="text-sm text-hud-text-muted">{endpoint.desc}</div>
                  </div>
                ))}
              </div>
            </HUDPanel>
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">AUTHENTICATION</div>
              <div className="space-y-3">
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-2">API KEY</div>
                  <div className="mono text-sm text-hud-text-primary bg-hud-panel p-3 rounded border border-hud-line-primary">
                    X-API-Key: your-api-key-here
                  </div>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-2">BEARER TOKEN</div>
                  <div className="mono text-sm text-hud-text-primary bg-hud-panel p-3 rounded border border-hud-line-primary">
                    Authorization: Bearer your-token-here
                  </div>
                </div>
              </div>
            </HUDPanel>
          </div>

          {/* SDK */}
          <SectionHeader
            sectionId="02/04"
            label="MODULE: SDK"
            title="Software Development Kits"
            className="mt-16"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                name: 'JavaScript/TypeScript',
                version: 'v2.1.0',
                install: 'npm install @livecorp/sdk',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
              },
              {
                name: 'Python',
                version: 'v2.0.5',
                install: 'pip install livecorp-sdk',
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=400&h=300&fit=crop',
              },
              {
                name: 'REST API',
                version: 'v1.0',
                install: 'Direct HTTP calls',
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
              },
            ].map((sdk, i) => (
              <HUDPanel key={i} className="p-6" withBrackets>
                <div className="relative w-full h-32 mb-4 rounded border border-hud-line-primary overflow-hidden">
                  <Image
                    src={sdk.image}
                    alt={sdk.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{sdk.name}</h3>
                <div className="mono text-xs text-hud-glow-cyan mb-3">v{sdk.version}</div>
                <div className="mono text-xs text-hud-text-muted bg-hud-panel p-2 rounded border border-hud-line-primary">
                  {sdk.install}
                </div>
              </HUDPanel>
            ))}
          </div>

          {/* Versioning */}
          <SectionHeader
            sectionId="03/04"
            label="MODULE: VERSIONING"
            title="API Versioning"
            className="mt-16"
          />
          <HUDPanel className="p-6 mt-6" withBrackets>
            <div className="mono text-xs text-hud-glow-cyan mb-4">VERSION POLICY</div>
            <div className="space-y-4">
              {[
                {
                  version: 'v1.0',
                  status: 'Current',
                  release: '2024-01-15',
                  changes: ['Initial release', 'Core analysis endpoints', 'Webhook support'],
                },
                {
                  version: 'v0.9',
                  status: 'Deprecated',
                  release: '2023-11-01',
                  changes: ['Beta release', 'Limited endpoints'],
                },
              ].map((version, i) => (
                <div key={i} className="pb-4 border-b border-hud-line-secondary last:border-0">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="mono text-lg text-hud-glow-cyan">{version.version}</div>
                      <div className="mono text-xs text-hud-text-muted">Released: {version.release}</div>
                    </div>
                    <div className={`mono text-xs px-3 py-1 ${
                      version.status === 'Current' ? 'bg-hud-glow-teal/20 text-hud-glow-teal' :
                      'bg-hud-warning/20 text-hud-warning'
                    }`}>
                      {version.status}
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {version.changes.map((change, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-hud-text-muted">
                        <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </HUDPanel>

          {/* Webhooks */}
          <SectionHeader
            sectionId="04/04"
            label="MODULE: WEBHOOKS"
            title="Webhook Integration"
            className="mt-16"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">WEBHOOK EVENTS</div>
              <div className="space-y-3">
                {[
                  'analysis.completed',
                  'analysis.failed',
                  'result.ready',
                  'abstain.triggered',
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-3 pb-3 border-b border-hud-line-secondary last:border-0">
                    <div className="w-2 h-2 bg-hud-glow-cyan rounded-full" />
                    <span className="mono text-sm text-hud-text-primary">{event}</span>
                  </div>
                ))}
              </div>
            </HUDPanel>
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">WEBHOOK PAYLOAD</div>
              <div className="mono text-xs text-hud-text-muted bg-hud-panel p-4 rounded border border-hud-line-primary overflow-x-auto">
                {`{
  "event": "analysis.completed",
  "request_id": "req_123",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "risk_band": "low",
    "confidence": 0.85
  }
}`}
              </div>
            </HUDPanel>
          </div>

          {/* Sandbox */}
          <div className="mt-16">
            <HUDPanel className="p-8 border-2 border-hud-glow-cyan/50" withBrackets glow="cyan">
              <div className="mono text-xs text-hud-glow-cyan mb-4">SANDBOX ENVIRONMENT</div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Test Your Integration</h3>
                  <p className="text-sm text-hud-text-muted mb-4">
                    Use our sandbox environment to test API calls without affecting production data.
                  </p>
                  <ul className="space-y-2 text-sm text-hud-text-muted">
                    <li>• Free test API keys</li>
                    <li>• Sample data sets</li>
                    <li>• Full API access</li>
                    <li>• Rate limits: 1000 req/hour</li>
                  </ul>
                </div>
                <div>
                  <div className="mono text-xs text-hud-text-muted mb-2">SANDBOX BASE URL</div>
                  <div className="mono text-sm text-hud-glow-cyan bg-hud-panel p-3 rounded border border-hud-line-primary mb-4">
                    https://sandbox.api.livecorp.com
                  </div>
                  <a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-hud-glow-cyan/20 border border-hud-glow-cyan text-hud-glow-cyan mono text-sm font-semibold hover:bg-hud-glow-cyan/30 transition-colors"
                  >
                    REQUEST SANDBOX ACCESS →
                  </a>
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

