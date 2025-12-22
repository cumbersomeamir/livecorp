'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import HUDPanel from '../ui/HUDPanel';
import SectionHeader from '../ui/SectionHeader';
import HUDNavbar from '../ui/HUDNavbar';
import Footer from '../sections/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    interest: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        message: '',
        interest: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <div className="mono text-xs text-hud-glow-teal mb-4">GET IN TOUCH</div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-hud-text-muted max-w-3xl mx-auto">
                Have questions? Want to start a pilot? We're here to help.
              </p>
            </motion.div>

            {/* Form Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center min-h-[300px] relative"
            >
              <div className="relative w-full max-w-2xl">
                {/* Animated Form Outline */}
                <div className="absolute inset-0 border-2 border-hud-glow-cyan/30 rounded-lg animate-pulse" />
                <div className="absolute inset-4 border border-hud-glow-teal/20 rounded-lg" />
                
                {/* Form Fields Visualization */}
                <div className="relative p-8 space-y-4">
                  {['Name', 'Email', 'Message'].map((field, i) => (
                    <div
                      key={i}
                      className="h-12 bg-hud-panel/30 border border-hud-line-primary rounded animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Contact Form */}
          <SectionHeader
            sectionId="01/02"
            label="MODULE: CONTACT FORM"
            title="Send Us a Message"
          />
          <div className="mt-6">
            {submitted ? (
              <HUDPanel className="p-12 text-center border-2 border-hud-glow-teal/50" withBrackets glow="teal">
                <div className="mono text-4xl text-hud-glow-teal mb-4">✓</div>
                <h3 className="text-2xl font-semibold mb-2">Message Sent</h3>
                <p className="text-sm text-hud-text-muted">
                  We'll get back to you within 24 hours.
                </p>
              </HUDPanel>
            ) : (
              <HUDPanel className="p-8" withBrackets>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="mono text-xs text-hud-glow-cyan mb-2 block">
                        NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-hud-panel border border-hud-line-primary px-4 py-3 mono text-sm text-hud-text-primary focus:border-hud-glow-cyan focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mono text-xs text-hud-glow-cyan mb-2 block">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-hud-panel border border-hud-line-primary px-4 py-3 mono text-sm text-hud-text-primary focus:border-hud-glow-cyan focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="mono text-xs text-hud-glow-cyan mb-2 block">
                        ORGANIZATION
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full bg-hud-panel border border-hud-line-primary px-4 py-3 mono text-sm text-hud-text-primary focus:border-hud-glow-cyan focus:outline-none transition-colors"
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label className="mono text-xs text-hud-glow-cyan mb-2 block">
                        ROLE
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full bg-hud-panel border border-hud-line-primary px-4 py-3 mono text-sm text-hud-text-primary focus:border-hud-glow-cyan focus:outline-none transition-colors"
                        placeholder="Your role"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mono text-xs text-hud-glow-cyan mb-2 block">
                      INTEREST
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-hud-panel border border-hud-line-primary px-4 py-3 mono text-sm text-hud-text-primary focus:border-hud-glow-cyan focus:outline-none transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="pilot">Pilot Program</option>
                      <option value="integration">Integration</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mono text-xs text-hud-glow-cyan mb-2 block">
                      MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-hud-panel border border-hud-line-primary px-4 py-3 mono text-sm text-hud-text-primary focus:border-hud-glow-cyan focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <div className="pt-4 border-t border-hud-line-secondary">
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-hud-glow-cyan/20 border border-hud-glow-cyan text-hud-glow-cyan mono text-sm font-semibold hover:bg-hud-glow-cyan/30 transition-colors"
                    >
                      SEND MESSAGE →
                    </button>
                  </div>
                </form>
              </HUDPanel>
            )}
          </div>

          {/* Contact Information */}
          <SectionHeader
            sectionId="02/02"
            label="MODULE: CONTACT INFO"
            title="Other Ways to Reach Us"
            className="mt-16"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: 'Email',
                value: 'info@livecorp.com',
                icon: '✉️',
              },
              {
                title: 'Phone',
                value: '+91 8090005050',
                icon: '📞',
              },
              {
                title: 'Location',
                value: 'Lucknow, India',
                icon: '📍',
              },
            ].map((item, i) => (
              <HUDPanel key={i} className="p-6 text-center" withBrackets>
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="mono text-xs text-hud-glow-cyan mb-2">{item.title}</div>
                <div className="text-sm text-hud-text-primary">{item.value}</div>
              </HUDPanel>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

