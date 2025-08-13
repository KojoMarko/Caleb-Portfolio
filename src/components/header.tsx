'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
];

const CustomLogo = () => (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
        <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.5 }} />
                </linearGradient>
            </defs>
            {/* Cloud */}
            <path
                d="M60,20 A20,20 0 0,0 20,40 A20,20 0 0,0 20,80 H80 A20,20 0 0,0 80,40 A20,20 0 0,0 60,20 Z"
                fill="url(#grad1)"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
            />
            {/* Medical Cross */}
            <rect x="45" y="35" width="10" height="30" fill="hsl(var(--primary-foreground))" />
            <rect x="35" y="45" width="30" height="10" fill="hsl(var(--primary-foreground))" />
            {/* Circuit Lines */}
            <line x1="25" y1="50" x2="35" y2="50" stroke="hsl(var(--primary-foreground))" strokeWidth="2" />
            <line x1="65" y1="50" x2="75" y2="50" stroke="hsl(var(--primary-foreground))" strokeWidth="2" />
            <line x1="50" y1="35" x2="50" y2="25" stroke="hsl(var(--primary-foreground))" strokeWidth="2" />
            <line x1="50" y1="65" x2="50" y2="75" stroke="hsl(var(--primary-foreground))" strokeWidth="2" />
            <circle cx="25" cy="50" r="3" fill="hsl(var(--primary-foreground))" />
            <circle cx="75" cy="50" r="3" fill="hsl(var(--primary-foreground))" />
            <circle cx="50" cy="25" r="3" fill="hsl(var(--primary-foreground))" />
            <circle cx="50" cy="75" r="3" fill="hsl(var(--primary-foreground))" />
        </svg>
        <span className="uppercase">CALEB</span>
    </Link>
);

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <CustomLogo />
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
            <a href="https://github.com/calebsenyah" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                </Button>
            </a>
            <a href="https://linkedin.com/in/calebsenyah" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                </Button>
            </a>
            <ThemeToggle />
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4">
                <div className="pb-4 border-b">
                   <CustomLogo />
                </div>
                {navLinks.map(link => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === link.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center space-x-2 pt-4 border-t">
                    <a href="https://github.com/calebsenyah" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                            <Github className="h-5 w-5" />
                        </Button>
                    </a>
                    <a href="https://linkedin.com/in/calebsenyah" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                            <Linkedin className="h-5 w-5" />
                        </Button>
                    </a>
                    <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
