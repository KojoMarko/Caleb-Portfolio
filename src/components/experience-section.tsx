import SectionHeading from './section-heading';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Mother of God Hospital & Alos Paraklet Healthcare Ltd',
    role: 'Field Service Biomedical Engineer',
    period: '2025',
    description: 'Focused on the installation, servicing, and maintenance of critical medical devices like ECG machines, chemistry analyzers, ventilators, and oxygen concentrators.',
  },
  {
    company: 'Azubi Africa',
    role: 'Frontend & AWS Cloud Engineer (Talent Mobility Program)',
    period: '2023',
    description: 'Developed and deployed scalable web applications such as Azushop, Gclient, and ThermoTrack using React, Next.js, and AWS services.',
  },
  {
    company: 'Ghana Ports and Harbours Authority',
    role: 'Biomedical Service Engineer',
    period: '2022-2023',
    description: 'Managed and maintained telecommunications and broadcasting equipment in an industrial setting, sharpening technical precision and problem-solving skills.',
  },
  {
    company: 'University of Ghana',
    role: 'B.Sc. Biomedical Engineering',
    period: 'Graduated 2022',
    description: 'Presented a project on using machine learning to predict aromatase inhibitor suitability for breast cancer patients at a biennial science conference.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          icon={Briefcase} 
          title="My Journey" 
          description="A timeline of my professional and academic experiences."
        />
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center">
                {/* Content Left */}
                <div className={`w-1/2 pr-8 text-right ${index % 2 !== 0 ? 'invisible' : ''}`}>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  <p className="font-semibold">{exp.role}</p>
                  {exp.description && <p className="text-muted-foreground mt-1">{exp.description}</p>}
                </div>

                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-secondary absolute left-1/2 -translate-x-1/2 z-10"></div>

                {/* Content Right */}
                <div className={`w-1/2 pl-8 text-left ${index % 2 === 0 ? 'invisible' : ''}`}>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  <p className="font-semibold">{exp.role}</p>
                  {exp.description && <p className="text-muted-foreground mt-1">{exp.description}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
