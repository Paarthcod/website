import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { MarqueeSection } from '../components/sections/MarqueeSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { TechnologySection } from '../components/sections/TechnologySection';
import { BigCTASection } from '../components/sections/BigCTASection';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('projects');
    }
  };

  return (
    <div className="w-full">
      <HeroSection setActiveTab={setActiveTab} onExploreWorkClick={scrollToProjects} />
      <MarqueeSection onProjectClick={scrollToProjects} />
      <ServicesSection />
      <div id="featured-projects">
        <FeaturedProjectsSection />
      </div>
      <WhyUsSection />
      <ProcessSection />
      <TechnologySection />
      <BigCTASection setActiveTab={setActiveTab} />
    </div>
  );
};
