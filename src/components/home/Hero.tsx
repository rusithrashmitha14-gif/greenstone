'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Compass, Shield, SunMedium } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      {/* Background Photography with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85"
          alt="Sun-drenched luxury modern landscaped backyard in Tampa Florida with stone patio, pool, lush tropical plants and outdoor living"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.01] transform transition-transform duration-1000 ease-out"
        />
        {/* Subtle vignette so the landscape photography stays vivid and vibrant */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="max-w-2xl bg-white/98 backdrop-blur-xl rounded-3xl p-7 sm:p-11 border border-white/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent-light/80 border border-accent/25 mb-5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-forest uppercase">
                Landscaping in Tampa, Florida
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111e13] leading-[1.12]">
              Transform Your Outdoor Space{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-700">
                Into Something Extraordinary.
              </span>
            </h1>

            {/* Supporting Copy - High Contrast */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#1e2f20] font-medium leading-relaxed">
              Thoughtfully designed landscapes, beautifully maintained lawns, and outdoor spaces made for living.
            </p>

            {/* CTAs */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-base">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              <Button href="/work" variant="secondary" size="lg" className="w-full sm:w-auto text-base">
                <span>Explore Our Work</span>
              </Button>
            </div>

            {/* Florida Craftsmanship Trust Signal */}
            <div className="mt-7 pt-5 border-t border-border-subtle/80 flex items-center gap-2 text-xs text-[#223624] font-medium">
              <Shield className="w-4 h-4 text-accent shrink-0" />
              <span>
                Licensed & Insured Landscape Contractor • Serving Davis Islands, Hyde Park & Greater Tampa Bay
              </span>
            </div>
          </div>
        </motion.div>
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
