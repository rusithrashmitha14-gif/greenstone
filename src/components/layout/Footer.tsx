import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Landscape Design', href: '/services#landscape-design' },
    { label: 'Lawn Care & Maintenance', href: '/services#lawn-care-maintenance' },
    { label: 'Hardscaping & Patios', href: '/services#hardscaping-patios' },
    { label: 'Garden Design & Planting', href: '/services#garden-design-planting' },
    { label: 'Tree & Shrub Care', href: '/services#tree-shrub-care' },
    { label: 'Outdoor Living Spaces', href: '/services#outdoor-living-spaces' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Our Work', href: '/work' },
    { label: 'About Greenstone', href: '/about' },
    { label: 'Our Approach', href: '/about#approach' },
    { label: 'Request a Quote', href: '/contact' },
  ];

  const serviceAreas = [
    'South Tampa',
    'Davis Islands',
    'Hyde Park',
    'Palma Ceia',
    'Carrollwood',
    'Beach Park',
    'Culbreath Isles',
    'Greater Tampa Bay',
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-border-subtle">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2.5 group inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -m-1"
              >
                <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-text-primary">
                    GREENSTONE
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.2em] text-text-secondary uppercase">
                    Landscaping • Tampa
                  </span>
                </div>
              </Link>

              <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-sm">
                Transforming residential outdoor spaces across Tampa, Florida with architectural stone patios, lush subtropical botanical gardens, and dedicated estate lawn stewardship.
              </p>

              {/* Fictional demo notice badge */}
              <div className="mt-6 p-3 rounded-xl bg-bg-card border border-border-subtle text-xs text-text-muted flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p>
                  <strong className="text-text-secondary">Portfolio Demo Concept:</strong> Fictional brand developed by Brandspire Web Agency to showcase high-end landscaping digital experiences.
                </p>
              </div>
            </div>

            {/* Social icon placeholders */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs text-text-muted mr-1">Follow (Demo):</span>
              {['Instagram', 'Houzz', 'Pinterest', 'LinkedIn'].map((platform) => (
                <span
                  key={platform}
                  className="px-2.5 py-1 text-xs rounded-md bg-bg-card border border-border-subtle text-text-secondary hover:text-accent hover:border-accent/40 cursor-default transition-colors"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-text-primary mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-accent transition-colors flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Tampa Bay Service Areas */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-text-primary mb-4">
              Service Area & Contact
            </h3>
            <div className="space-y-3 text-sm text-text-secondary mb-5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-text-primary">Tampa, Florida, USA</p>
                  <p className="text-xs text-text-muted mt-0.5">
                    Hillsborough County & surrounding coastal bays
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs text-text-muted font-mono">
                  quotes@greenstone-demo.example
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs text-text-muted font-mono">
                  (813) 555-0194 (Fictional Demo)
                </span>
              </div>
            </div>

            <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
              Key Florida Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-2 py-0.5 text-[11px] rounded bg-bg-card text-text-secondary border border-border-subtle"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} Greenstone Landscaping. Demonstration website concept.</p>

          <div className="flex items-center gap-1.5 text-text-secondary">
            <span>Crafted by</span>
            <span className="font-semibold text-accent">Brandspire</span>
            <span>• Premium Agency Portfolio Concept</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-text-primary transition-colors">
              Request Free Quote
            </Link>
            <span className="text-border-light">•</span>
            <Link href="/about" className="hover:text-text-primary transition-colors">
              Concept Details
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
