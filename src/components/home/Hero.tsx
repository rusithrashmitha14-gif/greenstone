import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Compass, Shield, SunMedium } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:py-28">
      {/* Background Photography with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Sun-drenched luxury modern landscaped backyard in Tampa Florida with stone patio, pool, lush tropical plants and outdoor living"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Fresh botanical light overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/90 md:via-bg-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-accent/25 backdrop-blur-md mb-6 shadow-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-text-primary uppercase">
              Landscaping in Tampa, Florida
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-text-primary leading-[1.08]">
            Transform Your Outdoor Space{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-bright to-accent">
              Into Something Extraordinary.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
            Thoughtfully designed landscapes, beautifully maintained lawns, and outdoor spaces made for living.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-base">
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>

            <Button href="/work" variant="secondary" size="lg" className="w-full sm:w-auto text-base">
              <span>Explore Our Work</span>
            </Button>
          </div>

          {/* Fictional Portfolio Concept Disclosure Banner */}
          <div className="mt-8 pt-6 border-t border-border-subtle flex items-center gap-2 text-xs text-text-muted">
            <Shield className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>
              Demonstration portfolio concept built by <strong className="text-text-primary">Brandspire</strong>. All projects & case studies are fictional concept showcases.
            </span>
          </div>
        </div>
      </div>

      {/* Feature Pillar Strip at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block border-t border-border-subtle bg-white/90 backdrop-blur-md py-4 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-xs text-text-secondary">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent-light text-accent">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-text-primary">Tailored 3D Master Planning</p>
                <p className="text-text-muted">Scaled specifically to your property layout</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent-light text-accent">
                <SunMedium className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-text-primary">Florida-Acclimated Botanicals</p>
                <p className="text-text-muted">Drought, salt & humidity resilient flora</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent-light text-accent">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-text-primary">Artisanal Stone & Living Patios</p>
                <p className="text-text-muted">Engineered sub-base & drainage systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
