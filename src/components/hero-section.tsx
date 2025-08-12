import { Github, Linkedin, Download, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function HeroSection() {
  return (
    <section id="hero" className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
      <div className="flex flex-col items-center space-y-6">
        <Badge variant="secondary" className="py-2 px-4 rounded-full text-base">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Available for new opportunities
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          Caleb Makafui Senyah
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground">
          A passionate and creative Software Engineer and Full-Stack Developer dedicated to building beautiful, functional, and user-centric applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button asChild size="lg">
            <a href="#contact">
              <Send className="mr-2 h-5 w-5" /> Contact Me
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="/Caleb-Senyah-Resume.pdf" download>
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
        </div>
        <div className="flex items-center space-x-6 pt-4">
          <a href="https://github.com/calebsenyah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-7 w-7" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/calebsenyah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-7 w-7" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
