"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const CustomLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="28"
    height="28"
    className="text-primary"
  >
    {/* Cloud */}
    <path
      d="M49.4,24.3C48.2,15.9,41,9,32,9c-7.3,0-13.5,4.7-16,11.2C7.3,21.1,2,26.2,2,33c0,7.2,5.8,13,13,13h30c6.1,0,11-4.9,11-11 C56,29.3,53.3,25.7,49.4,24.3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
    {/* Circuit Cross */}
    <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <line x1="32" y1="26" x2="32" y2="42" />
      <line x1="24" y1="34" x2="40" y2="34" />
       {/* Nodes */}
      <circle cx="32" cy="26" r="2" fill="currentColor"/>
      <circle cx="32" cy="42" r="2" fill="currentColor"/>
      <circle cx="24" cy="34" r="2" fill="currentColor"/>
      <circle cx="40" cy="34" r="2" fill="currentColor"/>
      <circle cx="32" cy="34" r="2" fill="currentColor"/>
    </g>
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      hasScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent",
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <CustomLogo />
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