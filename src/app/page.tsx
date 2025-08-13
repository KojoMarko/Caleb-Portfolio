'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/writings', label: 'Writings' },
  { href: '/extras', label: 'Extras' },
  { href: '/contact', label: 'Contact' },
];

const CustomLogo = () => (
    <div className="flex items-center justify-center text-2xl font-bold text-foreground">
        <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path
                d="M 50,15 C 25,15 15,35 15,50 C 15,65 25,85 50,85"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="10"
                strokeLinecap="round"
            />
            <path
                d="M 50,15 C 75,15 85,35 85,50 C 85,65 75,85 50,85"
                fill="none"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="5"
                strokeDasharray="40 15"
                strokeLinecap="round"
                transform="rotate(180 50 50)"
            />
        </svg>
    </div>
);

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center text-center container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
            <CustomLogo />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground">
          Caleb Makafui Senyah.
        </h1>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-muted-foreground">
          I build things for the web and health.
        </h2>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on bridging technology and healthcare to create impactful, real-world solutions.
        </p>

        <Button asChild className="mt-8" size="lg">
          <Link href="/contact">Get In Touch</Link>
        </Button>
        
        <nav className="flex items-center space-x-6 mt-12">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
           <ThemeToggle />
        </nav>

        <div className="flex items-center space-x-4 mt-6">
            <a href="https://github.com/calebsenyah" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <Github className="h-6 w-6" />
                </Button>
            </a>
            <a href="https://linkedin.com/in/calebsenyah" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <Linkedin className="h-6 w-6" />
                </Button>
            </a>
        </div>
      </main>
    </div>
  );
}
