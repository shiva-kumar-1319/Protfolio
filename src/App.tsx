import React from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickStatsSection } from './components/QuickStatsSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsAndCertifications } from './components/AchievementsAndCertifications';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { BuildingAndLearning } from './components/BuildingAndLearning';
import { GitHubAnalytics } from './components/GitHubAnalytics';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#070A12] text-[#F8FAFC] selection:bg-[#3B82F6]/30 selection:text-[#22D3EE]">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Subtle Distributed Network Mesh Canvas */}
      <InteractiveBackground />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Landmark */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section: First Impression */}
        <HeroSection />

        {/* 2. Quick Profile Statistics: 4 Metric Cards */}
        <QuickStatsSection />

        {/* 3. About Me: 4 Engineering Focus Areas */}
        <AboutSection />

        {/* 4. Technical Skills: Categorized Cards & Badges */}
        <SkillsSection />

        {/* 5. Featured Projects: CloudPulse, NeuralQuery, IDQS, Animal Keypoint */}
        <ProjectsSection />

        {/* 6. Experience, Achievements & Certifications */}
        <AchievementsAndCertifications />

        {/* 7. Competitive Programming & DSA */}
        <CompetitiveProgramming />

        {/* 8. Currently Building & Learning */}
        <BuildingAndLearning />

        {/* 9. GitHub Analytics & Activity */}
        <GitHubAnalytics />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
