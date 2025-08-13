import Image from 'next/image';
import SectionTitle from './section-title';
import SkillsSection from './skills-section';

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-me container mx-auto px-6">
        <SectionTitle title="About" description="Who am I??? ⚡" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-1">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Caleb Senyah"
              width={400}
              height={400}
              className="rounded-lg shadow-lg w-full"
              data-ai-hint="portrait man"
            />
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary">Frontend Developer & Biomedical Engineer</h3>
            <p className="italic my-4 text-muted-foreground">
             I am Caleb Makafui Senyah, a multidisciplinary professional with expertise in frontend development, AWS cloud solutions, and field service biomedical engineering. My career bridges technology and healthcare, allowing me to design, build, and maintain solutions that enhance both digital platforms and critical medical systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <strong>Email:</strong> caleb.senyah@example.com
              </div>
              <div>
                <strong>City:</strong> Accra, Ghana
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
             With experience spanning React, Next.js, Tailwind CSS, and AWS cloud architecture, I bring a strong focus on scalability, security, and user-centered design. In the biomedical field, I have worked extensively on the supply, installation, and maintenance of advanced medical devices, combining technical precision with hands-on problem-solving.
            </p>
          </div>
        </div>
      </div>
      <SkillsSection />
    </section>
  );
}
