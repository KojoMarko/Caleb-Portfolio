import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-24 -mt-20">
      <div className="space-y-4">
        <p className="text-primary font-mono">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
          Caleb Makafui Senyah.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-muted-foreground">
          I build things for the web and health.
        </h2>
        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on bridging technology and healthcare to create impactful, real-world solutions.
        </p>
        <div className="pt-6">
          <Button asChild size="lg" className="font-mono text-base">
            <a href="#contact">
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
