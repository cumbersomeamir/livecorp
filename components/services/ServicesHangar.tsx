'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HUDPanel from '../ui/HUDPanel';
import HUDNavbar from '../ui/HUDNavbar';
import Footer from '../sections/Footer';
import { services } from '@/content/services';

export default function ServicesHangar() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-hud-bg-primary text-hud-text-primary relative">
      <HUDNavbar />
      
      <section className="min-h-screen relative pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mono text-xs text-hud-glow-teal mb-4">LIVE CORP — SERVICE ECOSYSTEM</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">Services</h1>
            <p className="text-xl text-hud-text-muted mb-4 max-w-3xl mx-auto">
              Pre-diagnostic intelligence systems designed to reduce unnecessary tests safely.
            </p>
            <p className="mono text-xs text-hud-text-muted mb-6">
              Not diagnosis. Not treatment. Human-in-the-loop. Abstains when uncertain.
            </p>
            
            {/* Global Disclaimer */}
            <HUDPanel className="p-4 inline-block border-2 border-hud-warning/50" withBrackets>
              <p className="mono text-xs text-hud-warning text-center">
                Decision support only. Not diagnosis. Not treatment. Abstains when uncertain.
              </p>
            </HUDPanel>
          </motion.div>

          {/* Service Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col"
              >
                <HUDPanel
                  className={`p-6 flex-1 cursor-pointer transition-all ${
                    expandedService === service.id 
                      ? 'border-hud-glow-cyan' 
                      : 'hover:border-hud-glow-cyan/50'
                  }`}
                  withBrackets
                  withScanline={expandedService === service.id}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="mono text-xs text-hud-glow-cyan">{service.code}</div>
                    <div className={`mono text-xs ${
                      service.statusLabel === 'ACTIVE' ? 'text-hud-glow-teal' :
                      service.statusLabel === 'PILOT' ? 'text-hud-warning' :
                      'text-hud-critical'
                    }`}>
                      {service.statusLabel}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-hud-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm text-hud-text-muted mb-4 leading-relaxed">{service.summary}</p>
                  
                  <div className="mb-4">
                    <div className="mono text-xs text-hud-text-muted mb-2">INPUTS:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.inputs.map((input, i) => (
                        <span key={i} className="mono text-xs px-2 py-1 border border-hud-line-primary text-hud-text-muted">
                          {input.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 flex items-center gap-2">
                    <span className="mono text-xs text-hud-text-muted">MODE:</span>
                    <span className="status-tag">{service.primaryMode}</span>
                  </div>

                  <div className="pt-4 border-t border-hud-line-secondary flex items-center justify-between">
                    <Link 
                      href={`/services/${service.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal transition-colors"
                    >
                      VIEW DETAIL PAGE →
                    </Link>
                    <span className="mono text-xs text-hud-text-muted">
                      {expandedService === service.id ? '▲' : '▼'}
                    </span>
                  </div>
                </HUDPanel>

                {/* Expanded Detail Panel */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <HUDPanel className="p-8 mt-4 border-2 border-hud-glow-cyan/30" withBrackets>
                        {/* Disclaimer */}
                        <div className="mb-6 pb-6 border-b border-hud-line-secondary">
                          <p className="mono text-xs text-hud-warning text-center">
                            Decision support only. Not diagnosis. Not treatment. Abstains when uncertain.
                          </p>
                        </div>

                        {/* Images */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="relative h-48 border border-hud-line-primary rounded overflow-hidden">
                            <Image
                              src={service.images.hero}
                              alt={`${service.title} Hero`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                            <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">HERO PLATE</div>
                          </div>
                          <div className="relative h-48 border border-hud-line-primary rounded overflow-hidden">
                            <Image
                              src={service.images.diagram}
                              alt={`${service.title} Diagram`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                            <div className="absolute bottom-2 left-2 mono text-xs text-hud-glow-cyan">DIAGRAM PLATE</div>
                          </div>
                        </div>

                        {/* Sections */}
                        <div className="space-y-8">
                          {service.sections.map((section) => (
                            <div key={section.id}>
                              <div className="mono text-xs text-hud-glow-cyan mb-3">{section.title.toUpperCase()}</div>
                              {section.type === 'list' ? (
                                <ul className="space-y-2">
                                  {(section.content as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-hud-text-muted">
                                      <span className="mono text-xs text-hud-glow-cyan mt-1">→</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-sm text-hud-text-muted">{section.content as string}</p>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Model Registry Table */}
                        <div className="mt-8 pt-8 border-t border-hud-line-secondary">
                          <div className="mono text-xs text-hud-glow-cyan mb-4">MODEL REGISTRY (EXACT LINKS)</div>
                          <div className="overflow-x-auto">
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
                                {service.modelLinks.map((model, i) => (
                                  <tr
                                    key={i}
                                    className="border-b border-hud-line-secondary/50 hover:bg-hud-panel/30 transition-colors"
                                  >
                                    <td className="py-3 px-4 mono text-sm text-hud-text-primary">{model.domain}</td>
                                    <td className="py-3 px-4 text-sm text-hud-text-muted">{model.task}</td>
                                    <td className="py-3 px-4 text-sm text-hud-glow-teal">{model.model}</td>
                                    <td className="py-3 px-4">
                                      <a
                                        href={model.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mono text-xs text-hud-glow-cyan hover:text-hud-glow-teal transition-colors"
                                      >
                                        Source →
                                      </a>
                                      {model.note && (
                                        <div className="text-xs text-hud-text-muted mt-1">{model.note}</div>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Deployment */}
                        <div className="mt-8 pt-8 border-t border-hud-line-secondary">
                          <div className="mono text-xs text-hud-glow-cyan mb-4">DEPLOYMENT</div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <div className="mono text-xs text-hud-text-muted mb-2">Hardware</div>
                              <div className="space-y-1 text-sm text-hud-text-muted">
                                <div>CPU: {service.deployment.cpu ? '✓' : '✗'}</div>
                                <div>GPU: {service.deployment.gpu === true ? '✓' : service.deployment.gpu === 'optional' ? 'Optional' : '✗'}</div>
                                <div>Edge: {service.deployment.edge ? '✓' : '✗'}</div>
                                <div>Offline: {service.deployment.offline ? '✓' : '✗'}</div>
                              </div>
                            </div>
                            <div>
                              <div className="mono text-xs text-hud-text-muted mb-2">Notes</div>
                              <p className="text-sm text-hud-text-muted">{service.deployment.notes}</p>
                            </div>
                          </div>
                        </div>

                        {/* Limitations */}
                        <div className="mt-8 pt-8 border-t border-hud-line-secondary">
                          <div className="mono text-xs text-hud-warning mb-4">LIMITATIONS</div>
                          <ul className="space-y-2">
                            {service.limitations.map((limitation, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-hud-text-muted">
                                <span className="mono text-xs text-hud-warning mt-1">✗</span>
                                <span>{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Example Outputs */}
                        <div className="mt-8 pt-8 border-t border-hud-line-secondary">
                          <div className="mono text-xs text-hud-glow-cyan mb-4">EXAMPLE OUTPUTS</div>
                          <div className="space-y-3">
                            {service.exampleOutputs.map((output, i) => (
                              <HUDPanel key={i} className="p-4" withBrackets>
                                <p className="text-sm text-hud-text-muted italic">{output}</p>
                              </HUDPanel>
                            ))}
                          </div>
                        </div>
                      </HUDPanel>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Footer Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <HUDPanel className="p-6 inline-block">
              <p className="mono text-xs text-hud-text-muted max-w-3xl">
                Each service operates before diagnostics. All outputs are risk-based, safety-constrained, and clinician-overrideable.
              </p>
            </HUDPanel>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
