import React, { useState } from 'react';
import type { DomainType } from './data/portfolioData';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProjectsSection } from './components/ProjectsSection';
import { DualArchitectureGraphic } from './components/DualArchitectureGraphic';
import { ExperienceAchievements } from './components/ExperienceAchievements';
import { SkillsSection } from './components/SkillsSection';
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
    <div className="relative min-h-screen bg-[#f5f0e4] text-[#4a2810] selection:bg-[#a8c4e8] selection:text-[#4a2810]">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation Header with Marquee Ticker */}
      <Navbar
        currentDomain={currentDomain}
        onDomainChange={handleDomainChange}
      />

      {/* Main Landmark for Accessibility */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section: Photo with Resume, Mail, LeetCode, GitHub */}
        <HeroSection
          currentDomain={currentDomain}
          onSelectDomain={handleDomainChange}
        />

        {/* 2. Engineering Philosophy & Reality Check (User's Principles) */}
        <PhilosophySection />

        {/* 3. Featured Projects Showcase with Dual-Domain Filter */}
        <ProjectsSection
          currentDomain={currentDomain}
          onSelectDomain={handleDomainChange}
        />

        {/* 4. Production Process & Architecture Simulator */}
        <section className="py-16 bg-[#ffffff] border-b border-[#4a2810]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <DualArchitectureGraphic
              currentDomain={currentDomain}
              onSelectDomain={handleDomainChange}
            />
          </div>
        </section>

        {/* 5. Work Experience, Verified Achievements & Certifications */}
        <ExperienceAchievements
          currentDomain={currentDomain}
        />

        {/* 6. Technical Competencies (Depth over Breadth) */}
        <SkillsSection
          currentDomain={currentDomain}
          onSelectDomain={handleDomainChange}
        />

        {/* 7. Competitive Programming (LeetCode 500+, Codeforces 1200+, CodeChef 3★) */}
        <CompetitiveProgramming />

        {/* 8. Formal Education (B.Tech at MVSR & Diploma at KDR) */}
        <EducationSection />

        {/* 9. Contact & Collaboration */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
