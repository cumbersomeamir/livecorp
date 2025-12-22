'use client';

import HUDNavbar from '../ui/HUDNavbar';
import Footer from '../sections/Footer';
import CardiacService from './services/CardiacService';
import RespiratoryService from './services/RespiratoryService';
import HematologyService from './services/HematologyService';
import UrinalysisService from './services/UrinalysisService';
import SleepService from './services/SleepService';
import ImagingService from './services/ImagingService';
import AcuteDeteriorationService from './services/AcuteDeteriorationService';
import MetabolicChronicService from './services/MetabolicChronicService';
import NeurologicalTriageService from './services/NeurologicalTriageService';
import TestOrderingOptimizationService from './services/TestOrderingOptimizationService';

const serviceComponents: Record<string, React.ComponentType> = {
  'cardiac-pre-screening': CardiacService,
  'respiratory-triage': RespiratoryService,
  'hematology-blood-panel': HematologyService,
  'urinalysis-infection': UrinalysisService,
  'sleep-fatigue-screening': SleepService,
  'imaging-gateway': ImagingService,
  'acute-deterioration-sepsis': AcuteDeteriorationService,
  'metabolic-chronic-risk': MetabolicChronicService,
  'neurological-triage': NeurologicalTriageService,
  'test-ordering-optimization': TestOrderingOptimizationService,
};

export default function ServicePage({ slug }: { slug: string }) {
  const ServiceComponent = serviceComponents[slug];

  if (!ServiceComponent) {
    return null;
  }

  return (
    <main className="min-h-screen bg-hud-bg-primary text-hud-text-primary relative">
      <HUDNavbar />
      <ServiceComponent />
      <Footer />
    </main>
  );
}

