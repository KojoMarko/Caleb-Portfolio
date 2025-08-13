'use client';

import SectionTitle from './section-title';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

export default function ExperienceSection() {
  return (
    <section id="resume" className="resume">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
            title="Resume" 
            description={
                <div className="flex items-center justify-center gap-2">
                    My Journey 💼
                    <Button asChild variant="link" className="p-0 h-auto">
                        <a href="/Caleb-Senyah-Resume.pdf" download className="flex items-center gap-1 text-primary">
                            Download <Download size={16} />
                        </a>
                    </Button>
                </div>
            }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                    <h4 className="text-xl font-semibold">BSc in Biomedical Engineering</h4>
                    <h5>2018 - 2022</h5>
                    <p className="font-medium">University of Ghana</p>
                    <p className="mt-2 text-muted-foreground">
                        Presented a project on using machine learning to predict aromatase inhibitor suitability for breast cancer patients at a biennial science conference.
                    </p>
                </div>
                 <h3 className="resume-title">Professional Journey</h3>
                <div className="resume-item">
                    <h4>Ghana Ports and Harbours Authority</h4>
                    <h5>2022</h5>
                    <p className="font-medium italic">Biomedical Service Engineer</p>
                    <p className="mt-2 text-muted-foreground">
                        Hands-on experience managing and maintaining telecommunications and broadcasting equipment, sharpening my technical precision and problem-solving skills.
                    </p>
                </div>
                <div className="resume-item">
                    <h4>Azubi Africa - Talent Mobility Program</h4>
                    <h5>2023</h5>
                    <p className="font-medium italic">Frontend Development & AWS Cloud Solutions</p>
                    <p className="mt-2 text-muted-foreground">
                        Developed and deployed scalable web applications like Azushop, Gclient, and ThermoTrack, using React, Next.js, Tailwind CSS, and AWS services.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="resume-title invisible md:visible"></h3>
                 <div className="resume-item mt-0 md:mt-16">
                    <h4>Mother of God Hospital</h4>
                    <h5>2024</h5>
                    <p className="font-medium italic">Field Service Biomedical Engineer</p>
                    <p className="mt-2 text-muted-foreground">
                       Focused on the installation, servicing, and maintenance of critical medical devices—from ECG machines and chemistry analyzers to ventilators.
                    </p>
                </div>
                <div className="resume-item">
                    <h4>Alos Paraklet Healthcare Ltd</h4>
                    <h5>2025</h5>
                    <p className="font-medium italic">Field Service Biomedical Engineer</p>
                    <p className="mt-2 text-muted-foreground">
                        Ensured reliable performance of critical medical devices including ECG machines, chemistry analyzers, ventilators, and oxygen concentrators in patient care environments.
                    </p>
                </div>
                 <div className="resume-item">
                    <h4>Today</h4>
                    <p className="font-medium italic">Bridging Technology and Real-World Impact</p>
                    <p className="mt-2 text-muted-foreground">
                        Combining my skills in software development, cloud architecture, and biomedical engineering to explore IoT, AI, and automation for healthcare and industrial applications.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
