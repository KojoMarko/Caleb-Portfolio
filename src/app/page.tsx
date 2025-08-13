"use client"

import Header from '@/components/header';
import AboutSection from '@/components/about-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import SkillsSection from '@/components/skills-section';
import InterestsSection from '@/components/interests-section';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <InterestsSection />
        <ContactSection />
      </main>
    </>
  );
}
