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
  { href: '/contact', label: 'Contact' },
];

const CustomLogo = () => (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
        <svg
            width="80"
            height="40"
            viewBox="0 0 250 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="hsl(var(--primary))">
                <path d="M62.3,63.1H39.2V36.9H62.3V33.1H39.2L35.4,24h30.7V20.2H31.6l-4.2-9H69.4V7.4H23.2l9,25.7H21.4v4.2H35V66.9H21.4V71H35l-9,25.7H69.4V92.6H27.4l4.2-9H66.1V79.8H35.4l3.8-9.2h23.1V66.9h-23l-3.8,9.2H66.1v4.2H39.2V63.1Z"/>
                <text x="75" y="70" fontFamily="sans-serif" fontSize="60" fill="hsl(var(--foreground))">ALEB</text>
            </g>
        </svg>
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
