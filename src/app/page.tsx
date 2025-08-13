
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';
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

const DevToIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.906 19.136c-1.023.23-2.046.345-3.07.345-1.023 0-2.047-.115-3.07-.345v-1.15c1.023.23 2.047.345 3.07.345 1.023 0 2.047-.115 3.07-.345v1.15zM6.352 5.345c.69 0 1.265.575 1.265 1.265v8.303c0 .69-.575 1.265-1.265 1.265H2.047V6.61h4.305v-1.265zm-.23 8.878V7.89H3.125v6.333h2.997zM18.809 9.17l-3.236-3.236-1.023 1.023 2.213 2.213-2.213 2.213 1.023 1.023 3.236-3.236zM15.573 12.64l-1.023 1.023 3.236 3.236 1.023-1.023-3.236-3.236zM12.92 4.14a.97.97 0 0 1 .97.97v13.78a.97.97 0 0 1-.97-.97h-2.19a.97.97 0 0 1-.97-.97V5.11a.97.97 0 0 1 .97-.97h2.19z"></path>
    </svg>
);

const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.72 6.54h3.58v10.92H5.72V6.54zM16.14 6.54h4.48v10.92h-4.48zM10.8 6.54h3.86v10.92h-3.86zM0 19.12V4.88h24v14.24H0z"></path>
    </svg>
);


export default function Home() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center text-center container mx-auto px-4 sm:px-6 lg:px-8">
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
                  "text-base font-medium transition-colors hover:text-primary",
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
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <Twitter className="h-6 w-6" />
                </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <Youtube className="h-6 w-6" />
                </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <DevToIcon className="h-6 w-6" />
                </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <MediumIcon className="h-6 w-6" />
                </Button>
            </a>
        </div>
      </main>
    </div>
  );
}
