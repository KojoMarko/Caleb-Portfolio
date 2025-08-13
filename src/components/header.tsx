'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '#header', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const CustomLogo = () => (
    <a href="#" className="text-3xl font-bold tracking-wider text-foreground flex items-center gap-2">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9999 15.2C19.9899 14.38 19.8299 13.57 19.5299 12.8C19.5199 12.78 19.5099 12.75 19.4999 12.73C19.4699 12.65 19.4399 12.58 19.4099 12.5C19.0899 11.72 18.6199 11 18.0299 10.35C17.9699 10.28 17.9099 10.22 17.8499 10.16C17.2099 9.5 16.4799 8.95 15.6699 8.54C15.6099 8.51 15.5499 8.48 15.4899 8.45C14.7199 8.04 13.8899 7.82 12.9999 7.8C12.9199 7.8 12.8399 7.8 12.7499 7.81C12.5999 7.04 12.2899 6.32 11.8399 5.67C11.7899 5.6 11.7399 5.53 11.6899 5.46C11.1799 4.76 10.5399 4.16 9.7999 3.7C9.1799 3.3 8.5099 3.03 7.7999 2.9C6.9899 2.74 6.1599 2.75 5.3799 2.93C4.5999 3.1 3.8899 3.44 3.2899 3.91C2.6899 4.38 2.2199 4.97 1.9099 5.64C1.8699 5.72 1.8399 5.81 1.7999 5.89C1.4499 6.57 1.2299 7.32 1.1699 8.1C1.1599 8.23 1.1599 8.36 1.1599 8.49C1.0499 9.32 1.1099 10.15 1.3399 10.95C1.3899 11.13 1.4499 11.31 1.5199 11.49C1.8699 12.43 2.4599 13.27 3.2299 13.92C3.2899 13.97 3.3499 14.02 3.4099 14.07C4.1599 14.77 5.0499 15.29 6.0199 15.58C6.1899 15.63 6.3599 15.68 6.5399 15.72C7.5299 15.96 8.5599 15.96 9.5599 15.72C9.7299 15.68 9.8999 15.63 10.0699 15.58C11.0399 15.29 11.9299 14.77 12.6799 14.07C12.7399 14.02 12.7999 13.97 12.8499 13.92C13.0199 13.75 13.1899 13.57 13.3399 13.38C13.2599 14.01 13.3299 14.65 13.5499 15.26C13.7999 15.96 14.2499 16.58 14.8299 17.06C15.4199 17.54 16.1299 17.85 16.8799 17.95C17.6399 18.05 18.3999 17.94 19.0899 17.63C19.7899 17.32 20.3999 16.83 20.8299 16.23C20.8799 16.16 20.9299 16.09 20.9699 16.02C20.4899 15.79 20.1999 15.5 19.9999 15.2Z" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12H16" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 10V14" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 8H10" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 7V9" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 8H6" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 7V9" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12H7" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 11V13" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12H11" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 11V13" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>CALEB</span>
    </a>
);


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#header');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header id="header" className="h-screen flex items-center text-left relative bg-background">
        <div className="container mx-auto px-6 z-10">
          <div className="flex items-center">
            <div className="mr-auto">
                <Image src="https://placehold.co/150x150.png" alt="Caleb Senyah" width={150} height={150} className="rounded-full shadow-lg" data-ai-hint="man portrait"/>
            </div>
             <div className="ml-8">
                <h1 className="text-5xl font-bold text-foreground">
                    <a href="#">Caleb Makafui Senyah</a>
                </h1>
                <h2 className="text-2xl text-muted-foreground mt-2">
                    I'm a passionate <span className="text-primary">Software Engineer & Biomedical Engineer</span> from Ghana 🇬🇭
                </h2>
                <nav className="hidden md:flex items-center space-x-6 mt-6">
                    {navLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                activeLink === link.href ? "text-primary" : "text-foreground"
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                 <div className="social-links flex space-x-4 mt-6">
                    <a href="https://github.com/calebsenyah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-7 w-7" />
                    </a>
                    <a href="https://linkedin.com/in/calebsenyah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-7 w-7" />
                    </a>
                </div>
            </div>
          </div>
        </div>

        <button 
            type="button" 
            className="md:hidden absolute top-6 right-6 text-foreground z-50"
            onClick={toggleMenu}
        >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="absolute top-6 left-6 z-50">
            <CustomLogo />
        </div>
        <div className="absolute top-6 right-6 z-50 hidden md:block">
            <ThemeToggle />
        </div>

      </header>

      {/* Mobile Nav */}
      <div className={cn(
          "mobile-nav fixed top-0 left-0 bottom-0 bg-background/95 w-3/4 p-8 transition-transform duration-300 ease-in-out z-40 md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
          <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                  <a 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                          "text-lg transition-colors hover:text-primary",
                          activeLink === link.href ? "text-primary" : "text-foreground"
                      )}
                  >
                      {link.label}
                  </a>
              ))}
              <div className="pt-4">
                <ThemeToggle />
              </div>
          </nav>
      </div>
      {isMenuOpen && <div className="mobile-nav-overly fixed inset-0 bg-black/50 z-30 md:hidden" onClick={toggleMenu}></div>}
    </>
  );
}
