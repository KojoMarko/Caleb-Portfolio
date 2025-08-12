"use client";

import React, { useState, useEffect } from 'react';
import { HeartPulse, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      hasScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent",
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <HeartPulse className="w-6 h-6 text-primary" />
            Caleb
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
