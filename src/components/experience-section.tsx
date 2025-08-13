'use client';

import SectionTitle from './section-title';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

export default function ExperienceSection() {
  return (
    <section id="resume" className="resume container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle 
          title="Resume" 
          description={
              <div className="flex items-center justify-center gap-2">
                  My Resume 💼
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
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item">
                  <h4 className="text-xl font-semibold">Caleb Makafui Senyah</h4>
                  <p className="italic my-2">A multidisciplinary professional with expertise in frontend development, AWS cloud solutions, and field service biomedical engineering.</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Accra, Ghana</li>
                      <li>caleb.senyah@example.com</li>
                  </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                  <h4 className="text-xl font-semibold">B.Sc. Biomedical Engineering</h4>
                  <h5>2018 - 2022</h5>
                  <p className="font-medium">University of Ghana, Legon</p>
                  <p className="mt-1 text-muted-foreground">Presented a project on using machine learning to predict aromatase inhibitor suitability for breast cancer patients at a biennial science conference.</p>
              </div>
          </div>

          <div>
               <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                    <h4>Field Service Biomedical Engineer</h4>
                    <h5>2025</h5>
                    <p className="font-medium italic">Alos Paraklet Healthcare Ltd</p>
                    <p className="mt-1 text-muted-foreground">Focused on the installation, servicing, and maintenance of critical medical devices like ECG machines, chemistry analyzers, ventilators, and oxygen concentrators.</p>
                </div>
                <div className="resume-item">
                    <h4>Field Service Biomedical Engineer</h4>
                    <h5>2024</h5>
                    <p className="font-medium italic">Mother of God Hospital</p>
                    <p className="mt-1 text-muted-foreground">Ensured reliable performance of critical medical devices including ECG machines and chemistry analyzers in patient care environments.</p>
                </div>
                <div className="resume-item">
                    <h4>Frontend & AWS Cloud Engineer</h4>
                    <h5>2023</h5>
                    <p className="font-medium italic">Azubi Africa</p>
                    <p className="mt-1 text-muted-foreground">Developed and deployed scalable web applications such as Azushop, Gclient, and ThermoTrack using React, Next.js, and AWS services.</p>
                </div>
                <div className="resume-item">
                    <h4>Biomedical Service Engineer</h4>
                    <h5>2022 - 2023</h5>
                    <p className="font-medium italic">Ghana Ports and Harbours Authority</p>
                    <p className="mt-1 text-muted-foreground">Managed and maintained telecommunications and broadcasting equipment in an industrial setting, sharpening technical precision and problem-solving skills.</p>
                </div>
          </div>
      </div>
    </section>
  );
}
