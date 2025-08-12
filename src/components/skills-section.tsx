import SectionHeading from './section-heading';
import { Cpu } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const skills = {
  "Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
  "Frontend": ["React", "Next.js", "Redux", "Tailwind CSS", "Vite"],
  "Backend": ["Node.js", "Express", "REST APIs", "GraphQL"],
  "Databases": ["PostgreSQL", "MongoDB", "Firebase"],
  "Tools & Platforms": ["Git", "Docker", "AWS", "Vercel", "Figma"],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          icon={Cpu} 
          title="Technical Skills"
          description="A snapshot of the technologies and tools I work with."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="default" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
