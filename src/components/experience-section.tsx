import SectionHeading from './section-heading';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Yale University',
    role: 'Postgraduate Research Associate',
    period: 'Nov 2023 - Present',
    description: 'Advisor: AZA Allsop, MD, PhD',
  },
  {
    company: 'MinoHealth AI Labs',
    role: 'Junior Machine Learning Engineer',
    period: 'Oct 2022 - Oct 2023',
    description: '',
  },
  {
    company: 'KaraAgro AI',
    role: 'Junior Machine Learning Engineer',
    period: 'Oct 2022 - Oct 2023',
    description: '',
  },
  {
    company: 'ReachSci Mini Ph.D. Programme',
    role: 'Participant',
    period: 'Dec 2022 - Mar 2023',
    description: 'Advisor: Prof Elsie E Kaufmann',
  },
  {
    company: 'University of Ghana',
    role: 'Research Intern',
    period: 'Dec 2022 - Mar 2023',
    description: 'Advisor: Prof Samuel K Kwofie',
  },
  {
    company: 'ISCN Imbizo',
    role: 'Summer School Student',
    period: 'Apr 2022 - May 2022',
    description: 'Computational Neuroscience and Machine Learning',
  },
  {
    company: 'University of Ghana',
    role: 'B.Sc. Student, Biomedical Engineering',
    period: '2018 - 2022',
    description: '',
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