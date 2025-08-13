'use client';

import SectionHeading from './section-heading';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Alos Paraklet',
    role: 'Field Service Biomedical Engineer',
    period: '2025',
    description: 'Focused on the installation, servicing, and maintenance of critical medical devices like ECG machines, chemistry analyzers, ventilators, and oxygen concentrators.',
  },
  {
    company: 'Mother of God Hosp.',
    role: 'Field Service Biomedical Engineer',
    period: '2024',
    description: 'Ensured reliable performance of critical medical devices including ECG machines and chemistry analyzers in patient care environments.',
  },
  {
    company: 'Azubi Africa',
    role: 'Frontend & AWS Cloud Engineer',
    period: '2023',
    description: 'Developed and deployed scalable web applications such as Azushop, Gclient, and ThermoTrack using React, Next.js, and AWS services.',
  },
  {
    company: 'Ghana Ports',
    role: 'Biomedical Service Engineer',
    period: '2022 - 2023',
    description: 'Managed and maintained telecommunications and broadcasting equipment in an industrial setting, sharpening technical precision and problem-solving skills.',
  },
  {
    company: 'Univ. of Ghana',
    role: 'B.Sc. Biomedical Engineering',
    period: 'Graduated 2022',
    description: 'Presented a project on using machine learning to predict aromatase inhibitor suitability for breast cancer patients at a biennial science conference.',
  },
];


export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24">
      <SectionHeading number="02." title="Where I've Worked" />
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                'text-left p-3 px-4 whitespace-nowrap text-sm md:border-l-2 border-b-2 md:border-b-0 transition-colors',
                activeTab === index
                  ? 'text-primary border-primary bg-secondary'
                  : 'text-muted-foreground border-border hover:bg-secondary/50'
              )}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="min-h-[200px]">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-foreground">
              {experiences[activeTab].role}{' '}
              <span className="text-primary">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-sm font-mono text-muted-foreground">{experiences[activeTab].period}</p>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {experiences[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
}