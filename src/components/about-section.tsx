import Image from 'next/image';
import SectionHeading from './section-heading';

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <SectionHeading number="01." title="About Me" />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-3 space-y-4 text-muted-foreground text-lg leading-relaxed">
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
        <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
          <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
          <Image
            src="https://placehold.co/400x400.png"
            alt="Caleb Senyah"
            width={400}
            height={400}
            className="rounded-lg shadow-lg aspect-square object-cover relative z-10"
            data-ai-hint="portrait man"
          />
        </div>
      </div>
    </section>
  );
}