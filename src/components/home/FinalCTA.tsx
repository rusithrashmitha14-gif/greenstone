import React from 'react';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center">
      {/* Background Photography with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=85"
          alt="Lush vibrant botanical garden in Florida with architectural tropical landscaping"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered light botanical overlays for clean typography contrast */}
        <div className="absolute inset-0 bg-bg-primary/90 sm:bg-bg-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/75 to-bg-primary/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tampa Service Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-accent/25 backdrop-blur-md mb-6 shadow-subtle">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
            Serving Greater Tampa Bay & South Tampa
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.15]">
          Ready to Love Your Outdoor Space?
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-base sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Let’s talk about your ideas and create an outdoor space that feels like home.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-base">
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>

          <Button href="/work" variant="secondary" size="lg" className="w-full sm:w-auto text-base">
            <span>Browse Project Gallery</span>
          </Button>
        </div>

        {/* Contact reassurance strip */}
        <div className="mt-10 pt-8 border-t border-border-subtle flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Complimentary Initial Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Itemized Transparent Proposals</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Turnkey Project Execution</span>
          </div>
        </div>
      </div>
    </section>
  );
}
