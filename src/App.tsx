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
    <div className="relative min-h-screen bg-[#f5f0e4] text-[#4a2810] selection:bg-[#a8c4e8] selection:text-[#4a2810]">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Subtle Ambient Mesh Canvas */}
      <InteractiveBackground />

      {/* Sticky Navigation Header with Running Marquee Ticker */}
      <Navbar />

      {/* Main Landmark */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section: First Impression with Photo & Direct Action Buttons */}
        <HeroSection />

        {/* 2. Quick Profile Statistics: Inversion Metric Cards */}
        <QuickStatsSection />

        {/* 3. About Me: Engineering Philosophy & Focus Areas */}
        <AboutSection />

        {/* 4. Technical Skills: Categorized Cards & Search */}
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

        {/* 10. Contact Section with Let's Build Banner */}
        <ContactSection />
      </main>

      {/* Footer with Dancing Script Signature */}
      <Footer />
    </div>
  );
};

export default App;
