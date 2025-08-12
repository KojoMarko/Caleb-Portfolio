import SectionHeading from './section-heading';
import { User } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Image 
              src="https://placehold.co/400x400.png" 
              alt="Caleb Senyah"
              width={400} 
              height={400} 
              className="rounded-lg shadow-lg aspect-square object-cover"
              data-ai-hint="portrait man"
            />
          </div>
          <div className="md:col-span-3 space-y-6">
            <SectionHeading 
              icon={User} 
              title="About Me"
              className="text-left items-start" 
            />
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Hello! I'm Caleb, a full-stack developer with a passion for turning complex problems into elegant, user-friendly software solutions. With a solid foundation in computer science and years of hands-on experience, I enjoy working across the entire stack, from crafting responsive front-end interfaces with React to architecting robust back-end systems with Node.js and Python.
              </p>
              <p>
                I'm a lifelong learner, always excited to explore new technologies and frameworks. My goal is to not only write clean and efficient code but also to build products that make a real difference. When I'm not coding, you can find me exploring new hiking trails or contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
