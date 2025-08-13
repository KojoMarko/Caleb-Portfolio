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
  { href: '/projects',label: 'Projects' },
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
            className="h-auto"
        >
            <path 
                d="M 65,15 C 40,15 25,25 25,50 C 25,75 40,85 65,85" 
                stroke="hsl(var(--primary))" 
                strokeWidth="12" 
                fill="none" 
                strokeLinecap="round"
            />
            <path 
                d="M 60,50 C 60,35 70,25 85,25" 
                stroke="hsl(var(--accent))" 
                strokeWidth="12" 
                fill="none" 
                strokeLinecap="round"
            />
             <path 
                d="M 40,50 C 40,65 30,75 15,75" 
                stroke="hsl(var(--accent))" 
                strokeWidth="12" 
                fill="none" 
                strokeLinecap="round"
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
