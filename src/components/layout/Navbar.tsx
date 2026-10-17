'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass-header py-3.5 shadow-subtle'
            : 'bg-gradient-to-b from-bg-primary/95 via-bg-primary/60 to-transparent py-4 sm:py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -m-1"
              aria-label="Greenstone Landscaping - Home"
            >
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-accent-hover">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-text-primary leading-none group-hover:text-accent transition-colors">
                  GREENSTONE
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-accent uppercase mt-0.5">
                  Landscaping • Tampa
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                      isActive
                        ? 'text-accent bg-accent-light font-semibold'
                        : 'text-text-secondary hover:text-text-primary hover:bg-black/[0.03]'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button href="/contact" variant="primary" size="sm">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg text-text-primary hover:text-accent hover:bg-black/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-bg-card border-l border-border-subtle p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col">
          {/* Mobile Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                </svg>
              </div>
              <span className="font-bold text-text-primary tracking-tight">GREENSTONE</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-text-secondary hover:text-text-primary rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-1 py-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between',
                    isActive
                      ? 'text-accent bg-accent-light font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-black/[0.03]'
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu Footer Info & CTA */}
        <div className="pt-6 border-t border-border-subtle flex flex-col gap-4">
          <div className="space-y-2 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Tampa Bay & South Tampa, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>(813) 555-0194 (Demo Inquiries)</span>
            </div>
          </div>
          <Button href="/contact" variant="primary" size="lg" className="w-full">
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <p className="text-[11px] text-center text-text-muted">
            Brandspire Demonstration Concept
          </p>
        </div>
      </div>
    </>
  );
}
