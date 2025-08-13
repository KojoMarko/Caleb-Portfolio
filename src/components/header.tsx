'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/writings', label: 'Writings' },
  { href: '/extras', label: 'Extras' },
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
        <span className="uppercase">CALEB</span>
    </Link>
);

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Hide header on homepage
  if (pathname === '/') {
    return null;
  }

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

        <div className="hidden md:flex items-center">
            <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center">
          <ThemeToggle />
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
