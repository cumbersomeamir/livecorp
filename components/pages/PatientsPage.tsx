'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';
import HUDNavbar from '../ui/HUDNavbar';
import Footer from '../sections/Footer';

export default function PatientsPage() {
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (journeyRef.current) {
      const steps = journeyRef.current.querySelectorAll('.journey-step');
      steps.forEach((step, i) => {
        (step as HTMLElement).style.animationDelay = `${i * 0.3}s`;
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
              <div className="mono text-xs text-hud-glow-teal mb-4">FOR PATIENTS</div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4">Patient Guide</h1>
              <p className="text-xl text-hud-text-muted max-w-3xl mx-auto">
                Understand how Live Corp helps you make informed decisions about your health.
              </p>
            </motion.div>

            {/* User Journey Visualization */}
            <motion.div
              ref={journeyRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center min-h-[500px] relative"
            >
              <div className="relative w-full">
                {/* Journey Path */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300">
                  <path
                    d="M 50 150 Q 200 50, 400 150 T 750 150"
                    fill="none"
                    stroke="#2DE2FF"
                    strokeWidth="3"
                    opacity="0.3"
                    strokeDasharray="10,5"
                    className="animate-pulse"
                  />
                </svg>

                {/* Journey Steps */}
                <div className="relative flex items-center justify-between">
                  {[
                    { step: '1', title: 'Capture', icon: '📱', desc: 'Use your phone' },
                    { step: '2', title: 'Analyze', icon: '🔍', desc: 'AI processes' },
                    { step: '3', title: 'Result', icon: '📊', desc: 'Get risk band' },
                    { step: '4', title: 'Decide', icon: '✅', desc: 'Next steps' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div
                        className="journey-step w-32 h-32 border-4 border-hud-glow-cyan rounded-full flex flex-col items-center justify-center bg-hud-bg-primary/50 backdrop-blur-sm mb-4"
                        style={{
                          animation: 'pulse-glow 2s ease-in-out infinite',
                        }}
                      >
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <div className="mono text-xs text-hud-glow-cyan">{item.step}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-hud-text-primary mb-1">{item.title}</div>
                        <div className="mono text-xs text-hud-text-muted">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* What Users Do at Home */}
          <SectionHeader
            sectionId="01/04"
            label="MODULE: HOME USE"
            title="What You Do at Home"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">STEP-BY-STEP</div>
              <div className="space-y-4">
                {[
                  {
                    step: '1. Open App',
                    desc: 'Launch Live Corp on your smartphone',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                  },
                  {
                    step: '2. Capture Data',
                    desc: 'Follow guided prompts to capture symptoms, vitals, or test strips',
                    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=400&h=300&fit=crop',
                  },
                  {
                    step: '3. Review Results',
                    desc: 'Get risk band and recommended next steps',
                    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
                  },
                  {
                    step: '4. Take Action',
                    desc: 'Follow recommendations or consult your clinician',
                    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="relative w-24 h-24 rounded border border-hud-line-primary overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.step}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mono text-xs text-hud-glow-cyan mb-1">{item.step}</div>
                      <div className="text-sm text-hud-text-muted">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </HUDPanel>
            <HUDPanel className="p-6" withBrackets glow="cyan">
              <div className="mono text-xs text-hud-glow-cyan mb-4">WHAT YOU NEED</div>
              <div className="space-y-3">
                {[
                  { item: 'Smartphone', desc: 'iOS or Android device' },
                  { item: 'Internet', desc: 'For initial setup and sync' },
                  { item: 'Optional Devices', desc: 'Wearables, digital thermometer, etc.' },
                ].map((item, i) => (
                  <div key={i} className="pb-3 border-b border-hud-line-secondary last:border-0">
                    <div className="font-semibold text-hud-text-primary mb-1">{item.item}</div>
                    <div className="text-sm text-hud-text-muted">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-hud-line-secondary">
                <div className="mono text-xs text-hud-warning mb-2">IMPORTANT</div>
                <p className="text-sm text-hud-text-muted">
                  Live Corp is not a replacement for medical care. Always consult a clinician for serious symptoms.
                </p>
              </div>
            </HUDPanel>
          </div>

          {/* What Outputs Mean */}
          <SectionHeader
            sectionId="02/04"
            label="MODULE: UNDERSTANDING OUTPUTS"
            title="What Your Results Mean"
            className="mt-16"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                risk: 'Low Risk',
                color: 'text-hud-glow-teal',
                bg: 'bg-hud-glow-teal/10',
                border: 'border-hud-glow-teal',
                meaning: 'Your symptoms suggest low risk. Continue monitoring and follow general health guidelines.',
                action: 'Monitor at home, follow up if symptoms worsen',
                image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
              },
              {
                risk: 'Moderate Risk',
                color: 'text-hud-warning',
                bg: 'bg-hud-warning/10',
                border: 'border-hud-warning',
                meaning: 'Your symptoms warrant attention. Consider a clinic visit or targeted testing.',
                action: 'Schedule clinic visit, consider targeted tests',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
              },
              {
                risk: 'High Risk',
                color: 'text-hud-critical',
                bg: 'bg-hud-critical/10',
                border: 'border-hud-critical',
                meaning: 'Your symptoms suggest higher risk. Seek immediate clinical evaluation.',
                action: 'Seek urgent care or emergency evaluation',
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
              },
            ].map((item, i) => (
              <HUDPanel key={i} className={`p-6 border-2 ${item.border}/50 ${item.bg}`} withBrackets>
                <div className="relative w-full h-40 mb-4 rounded border border-hud-line-primary overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.risk}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hud-bg-primary/80 to-transparent" />
                  <div className={`absolute bottom-2 left-2 mono text-xs ${item.color} font-semibold`}>
                    {item.risk.toUpperCase()}
                  </div>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${item.color}`}>{item.risk}</h3>
                <p className="text-sm text-hud-text-muted mb-4">{item.meaning}</p>
                <div className="pt-4 border-t border-hud-line-secondary">
                  <div className="mono text-xs text-hud-text-muted mb-1">RECOMMENDED ACTION</div>
                  <div className="text-sm text-hud-text-primary">{item.action}</div>
                </div>
              </HUDPanel>
            ))}
          </div>

          {/* Red Flags */}
          <SectionHeader
            sectionId="03/04"
            label="MODULE: RED FLAGS"
            title="When to Seek Immediate Care"
            className="mt-16"
          />
          <HUDPanel className="p-8 mt-6 border-2 border-hud-critical/50 bg-hud-critical/5" withBrackets>
            <div className="mono text-xs text-hud-critical mb-6">URGENT SYMPTOMS - SEEK IMMEDIATE CARE</div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  {[
                    'Severe chest pain or pressure',
                    'Difficulty breathing',
                    'Loss of consciousness',
                    'Severe abdominal pain',
                    'Uncontrolled bleeding',
                  ].map((flag, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mono text-lg text-hud-critical">⚠</span>
                      <span className="text-sm text-hud-text-primary">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  {[
                    'Sudden severe headache',
                    'Signs of stroke (FAST)',
                    'High fever with confusion',
                    'Severe allergic reaction',
                    'Suicidal thoughts',
                  ].map((flag, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mono text-lg text-hud-critical">⚠</span>
                      <span className="text-sm text-hud-text-primary">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-hud-critical/30">
              <p className="text-sm text-hud-text-muted">
                <strong className="text-hud-critical">If you experience any of these symptoms, do not wait for Live Corp results.</strong> Seek immediate emergency medical care or call emergency services.
              </p>
            </div>
          </HUDPanel>

          {/* Limitations */}
          <SectionHeader
            sectionId="04/04"
            label="MODULE: LIMITATIONS"
            title="Important Limitations"
            className="mt-16"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-warning mb-4">WHAT LIVE CORP DOES NOT DO</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-warning mt-1">✗</span>
                  <span>Does not diagnose diseases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-warning mt-1">✗</span>
                  <span>Does not prescribe medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-warning mt-1">✗</span>
                  <span>Does not replace clinician judgment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-warning mt-1">✗</span>
                  <span>Does not provide emergency care</span>
                </li>
              </ul>
            </HUDPanel>
            <HUDPanel className="p-6" withBrackets>
              <div className="mono text-xs text-hud-glow-cyan mb-4">WHAT LIVE CORP DOES</div>
              <ul className="space-y-2 text-sm text-hud-text-muted">
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>Provides risk-based decision support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>Helps reduce unnecessary tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>Guides next steps safely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mono text-xs text-hud-glow-cyan mt-1">✓</span>
                  <span>Abstains when uncertain</span>
                </li>
              </ul>
            </HUDPanel>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

