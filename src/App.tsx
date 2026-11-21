import React, { useState } from 'react';
import type { DomainType } from './data/portfolioData';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DomainShowcase } from './components/DomainShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceAchievements } from './components/ExperienceAchievements';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentDomain, setCurrentDomain] = useState<DomainType>('all');

  const handleDomainChange = (domain: DomainType) => {
    setCurrentDomain(domain);
  };

  return (
    <div className="relative min-h-screen bg-[#05070D] text-[#F8FAFC] selection:bg-[#2563EB]/40 selection:text-[#22D3EE]">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Interactive Cyber Particle / Neural Mesh Background */}
      <InteractiveBackground currentDomain={currentDomain} />

      {/* Navigation Header */}
      <Navbar
        currentDomain={currentDomain}
        onDomainChange={handleDomainChange}
      />

      {/* Main Landmark for Accessibility */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          currentDomain={currentDomain}
          onSelectDomain={handleDomainChange}
        />

        {/* 2. Dual-Domain Showcase & Interactive Selector */}
        <DomainShowcase
          currentDomain={currentDomain}
          onSelectDomain={handleDomainChange}
        />

        {/* 3. Skills Section */}
        <SkillsSection
          currentDomain={currentDomain}
          onSelectDomain={handleDomainChange}
        />

        {/* 4. Featured Projects Section */}
        <ProjectsSection
          currentDomain={currentDomain}
          onSelectDomain={handleDomainChange}
        />

        {/* 5. Experience and Achievements */}
        <ExperienceAchievements
          currentDomain={currentDomain}
        />

        {/* 6. Competitive Programming */}
        <CompetitiveProgramming />

        {/* 7. Education */}
        <EducationSection />

        {/* 8. Contact & Socials */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
