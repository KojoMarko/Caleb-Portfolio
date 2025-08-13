"use client"

import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import { Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 sm:px-10 md:px-20 lg:px-32">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="py-6 text-center text-muted-foreground">
        <div className="flex items-center justify-center space-x-6 mb-4">
          <a href="https://github.com/calebsenyah" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/calebsenyah" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <a href="https://github.com/calebsenyah/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} Caleb Senyah. All rights reserved.</p>
        </a>
      </footer>
    </div>
  );
}
