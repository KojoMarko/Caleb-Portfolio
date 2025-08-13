'use client';

import SectionHeading from './section-heading';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
    {
      icon: <Briefcase />,
      date: '2025',
      title: 'Field Service Biomedical Engineer',
      company: 'Alos Paraklet Healthcare Ltd',
      description:
        'Focused on the installation, servicing, and maintenance of critical medical devices like ECG machines, chemistry analyzers, ventilators, and oxygen concentrators.',
    },
    {
      icon: <Briefcase />,
      date: '2024',
      title: 'Field Service Biomedical Engineer',
      company: 'Mother of God Hospital',
      description:
        'Ensured reliable performance of critical medical devices including ECG machines and chemistry analyzers in patient care environments.',
    },
    {
      icon: <Briefcase />,
      date: '2023',
      title: 'Frontend & AWS Cloud Engineer',
      company: 'Azubi Africa',
      description:
        'Developed and deployed scalable web applications such as Azushop, Gclient, and ThermoTrack using React, Next.js, and AWS services.',
    },
     {
      icon: <Briefcase />,
      date: '2022 - 2023',
      title: 'Biomedical Service Engineer',
      company: 'Ghana Ports and Harbours Authority',
      description:
        'Managed and maintained telecommunications and broadcasting equipment in an industrial setting, sharpening technical precision and problem-solving skills.',
    },
    {
      icon: <GraduationCap />,
      date: '2022',
      title: 'B.Sc. Biomedical Engineering',
      company: 'University of Ghana',
      description:
        'Presented a project on using machine learning to predict aromatase inhibitor suitability for breast cancer patients at a biennial science conference.',
    },
];


export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <SectionHeading title="My Journey" />
        <div className="relative mt-12">
          <div className="absolute left-0 top-0 h-full w-px bg-border" aria-hidden="true" />
          <div className="relative flex flex-col gap-12">
            {experiences.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-12">
                <div className="absolute left-[-10px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-primary text-primary">
                  {item.icon}
                </div>
                <div className="flex flex-col sm:flex-row items-start justify-between">
                    <div className="sm:order-2">
                        <p className="font-mono text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <div className="sm:order-1 flex-1">
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                        <p className="text-primary font-medium">{item.company}</p>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
