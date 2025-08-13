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
];

const CustomLogo = () => (
    <div className="flex items-center justify-center gap-2 text-2xl font-bold text-foreground">
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
                d="M 50,20 C 25,20 20,40 20,50 C 20,60 25,80 50,80 C 75,80 80,60 80,50 C 80,40 75,20 50,20 Z"
                fill="url(#grad1)"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
            />
            <rect x="45" y="35" width="10" height="30" fill="hsl(var(--primary-foreground))" />
            <rect x="35" y="45" width="30" height="10" fill="hsl(var(--primary-foreground))" />
            <line x1="25" y1="50" x2="35" y2="50" stroke="hsl(var(--primary-foreground))" strokeWidth="2" />
            <line x1="65" y1="50" x2="75" y2="50" stroke="hsl(var(--primary-foreground))" strokeWidth="2" />
            <line x1="50" y1="35" x2="50" y2="25" stroke="hsl(var(--primary-foreground))" strokeWidth="2" />
            <line x1="50" y1="65" x2="50" y2="75" stroke="hsl(var(--primary-foreground))" strokeWidth="2" />
            <circle cx="25" cy="50" r="3" fill="hsl(var(--primary-foreground))" />
            <circle cx="75" cy="50" r="3" fill="hsl(var(--primary-foreground))" />
            <circle cx="50" cy="25" r="3" fill="hsl(var(--primary-foreground))" />
            <circle cx="50" cy="75" r="3" fill="hsl(var(--primary-foreground))" />
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
          Caleb Makafui Senyah
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
          I build impactful solutions at the intersection of <span className="text-primary">healthcare</span> and <span className="text-primary">technology</span>.
        </p>
        
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
