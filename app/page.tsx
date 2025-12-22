import HUDNavbar from '@/components/ui/HUDNavbar';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import InteractiveDemoSection from '@/components/sections/InteractiveDemoSection';
import ProductWingsSection from '@/components/sections/ProductWingsSection';
import EngineArchitectureSection from '@/components/sections/EngineArchitectureSection';
import WhatReplacesSection from '@/components/sections/WhatReplacesSection';
import DecisionBoundariesSection from '@/components/sections/DecisionBoundariesSection';
import ModelRegistrySection from '@/components/sections/ModelRegistrySection';
import AccuracyPerformanceSection from '@/components/sections/AccuracyPerformanceSection';
import DeploymentStrategySection from '@/components/sections/DeploymentStrategySection';
import DataEthicsSection from '@/components/sections/DataEthicsSection';
import WhyMattersSection from '@/components/sections/WhyMattersSection';
import SuccessLooksLikeSection from '@/components/sections/SuccessLooksLikeSection';
import LegalPositioningSection from '@/components/sections/LegalPositioningSection';
import SafetyTrustSection from '@/components/sections/SafetyTrustSection';
import StakeholderCTASection from '@/components/sections/StakeholderCTASection';
import VisionSection from '@/components/sections/VisionSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-hud-bg-primary text-hud-text-primary relative">
      <HUDNavbar />
      <HeroSection />
      <ProblemSection />
      <PhilosophySection />
      <InteractiveDemoSection />
      <ProductWingsSection />
      <EngineArchitectureSection />
      <WhatReplacesSection />
      <DecisionBoundariesSection />
      <ModelRegistrySection />
      <AccuracyPerformanceSection />
      <DeploymentStrategySection />
      <DataEthicsSection />
      <WhyMattersSection />
      <SuccessLooksLikeSection />
      <LegalPositioningSection />
      <SafetyTrustSection />
      <StakeholderCTASection />
      <VisionSection />
      <Footer />
    </main>
  );
}

