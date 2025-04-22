import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import FrontendProjectsSection from '../components/FrontendProjectsSection';
import YouTubeVideosSection from '../components/YouTubeVideosSection';
import EducationSection from '../components/EducationSection';
import CertificatesSection from '../components/CertificatesSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Vallabh Dongre | Portfolio';
    
    // Initialize animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <FrontendProjectsSection />
      <YouTubeVideosSection />
      <EducationSection />
      <CertificatesSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
};

export default Home;