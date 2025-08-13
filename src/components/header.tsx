"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navLinks = [
  { href: '#about', label: 'About', number: '01.' },
  { href: '#experience', label: 'Experience', number: '02.' },
  { href: '#projects', label: 'Projects', number: '03.' },
  { href: '#contact', label: 'Contact', number: '04.' },
];

const CustomLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="42"
      height="42"
      className="text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M49.4,24.3C48.2,15.9,41,9,32,9c-7.3,0-13.5,4.7-16,11.2C7.3,21.1,2,26.2,2,33c0,7.2,5.8,13,13,13h30c6.1,0,11-4.9,11-11 C56,29.3,53.3,25.7,49.4,24.3z" />
      <line x1="32" y1="26" x2="32" y2="42" />
      <line x1="24" y1="34" x2="40" y2="34" />
      <circle cx="24" cy="26" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="40" cy="26" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="24" cy="42" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="40" cy="42" r="1.5" fill="currentColor" stroke="none" />
    </svg>
);


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
      "sticky top-0 z-50 transition-all duration-300",
      hasScrolled ? "bg-background/80 shadow-lg backdrop-blur-sm" : "bg-transparent",
    )}>
      <div className="container mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity">
            <CustomLogo />
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
                <span className="text-primary mr-1">{link.number}</span>
                {link.label}
              </a>
            ))}
             <Button asChild variant="outline" className="font-mono text-sm">
                <a href="/Caleb-Senyah-Resume.pdf" download>
                  Resume
                </a>
              </Button>
          </nav>

          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-7 w-7 text-primary" /> : <Menu className="h-7 w-7 text-primary" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 pb-12 absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center justify-center space-y-8 pt-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg text-muted-foreground hover:text-primary transition-colors font-mono">
                <span className="text-primary block text-center mb-1">{link.number}</span>
                {link.label}
              </a>
            ))}
            <Button asChild variant="outline" size="lg" className="font-mono text-base mt-4">
              <a href="/Caleb-Senyah-Resume.pdf" download>
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}