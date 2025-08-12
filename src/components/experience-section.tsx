import SectionHeading from './section-heading';
import { Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';

const experiences = [
  {
    role: 'Full-Stack Engineer',
    company: 'Tech Innovations Inc.',
    period: 'Jan 2021 - Present',
    description: [
      'Developed and maintained web applications using React, Node.js, and TypeScript.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Improved application performance by 30% through code optimization and database query tuning.',
      'Implemented CI/CD pipelines, reducing deployment time by 50%.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'CodeBase Solutions',
    period: 'May 2020 - Aug 2020',
    description: [
      'Assisted in the development of a customer relationship management (CRM) system.',
      'Wrote unit and integration tests to ensure code quality and reliability.',
      'Participated in agile development cycles and daily stand-up meetings.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          icon={Briefcase} 
          title="Work Experience" 
          description="My professional journey and key contributions."
        />
        <div className="mt-12 relative">
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="md:grid md:grid-cols-2 md:gap-8 mb-12 group">
              <div className={`flex md:justify-end items-start ${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                <div className="w-full md:w-10/12">
                   <p className="text-lg font-semibold text-primary">{exp.role}</p>
                   <p className="text-muted-foreground">{exp.company}</p>
                   <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              <div className={`relative ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                 <div className="absolute left-1/2 top-5 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-secondary hidden md:block" aria-hidden="true"></div>
                 <Card className="w-full md:w-10/12 md:ml-auto transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/50 ${index % 2 === 1 ? 'md:mr-auto md:ml-0' : ''}">
                    <CardContent className="pt-6">
                        <ul className="space-y-2 text-muted-foreground list-disc pl-4">
                            {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
