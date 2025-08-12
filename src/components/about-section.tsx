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
                I am Caleb Makafui Senyah, a multidisciplinary professional with expertise in frontend development, AWS cloud solutions, and field service biomedical engineering. My career bridges technology and healthcare, allowing me to design, build, and maintain solutions that enhance both digital platforms and critical medical systems.
              </p>
              <p>
                With experience spanning React, Next.js, Tailwind CSS, and AWS cloud architecture, I bring a strong focus on scalability, security, and user-centered design. In the biomedical field, I have worked extensively on the supply, installation, and maintenance of advanced medical devices, combining technical precision with hands-on problem-solving.
              </p>
              <p>
                Driven by curiosity and innovation, I am passionate about IoT, AI/ML applications, and automation in healthcare and engineering. Whether building web applications or engineering medical solutions, my goal is to deliver impactful, reliable, and efficient systems that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
