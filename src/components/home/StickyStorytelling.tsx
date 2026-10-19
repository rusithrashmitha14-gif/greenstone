'use client';

import React from 'react';
import Image from 'next/image';
import { Layers, Compass, Trees, Sparkles, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function StickyStorytelling() {
  const phases = [
    {
      step: '01',
      tagline: 'Civil & Hydraulic Foundation',
      title: 'Precision Laser Grading & Coastal Storm Drainage',
      icon: Layers,
      description:
        'Tampa receives over 50 inches of torrential rainfall each summer. Before laying a single stone, we excavate 12–14 inches, grade with precision laser levels, and install high-flow French slot drains to guarantee zero standing water against your foundation.',
      highlights: [
        'Open-graded crushed granite sub-base',
        'Commercial non-woven geotextile soil stabilization',
        'High-capacity subterranean dry wells for Florida downpours',
      ],
      badge: 'Engineering First',
    },
    {
      step: '02',
      tagline: 'Artisanal Hardscaping',
      title: 'Cool-Touch Travertine & Architectural Patios',
      icon: Compass,
      description:
        'We install premium French-pattern silver and ivory travertine pavers that reflect midday heat—remaining comfortable for bare feet even in 95°F July sun. Hand-cut coping creates seamless flush transitions from pool to patio.',
      highlights: [
        'Natural thermal-resistant Florida travertine',
        'Diamond-cut flush pool coping thresholds',
        'Polymeric interlocking joint stabilization',
      ],
      badge: 'Barefoot Luxury',
    },
    {
      step: '03',
      tagline: 'Horticultural Composition',
      title: 'Resilient Subtropical Flora & Specimen Palms',
      icon: Trees,
      description:
        'We assemble Florida-Friendly species tailored to Zone 9b/10a sandy soil. Sculptural Bismarck palms and Royal palms provide grandeur, while native firebush, coontie, and sweet viburnum form lush, low-maintenance privacy screens.',
      highlights: [
        'Micro-drip smart irrigation saving 50% water',
        'Salt-tolerant and drought-tested Florida natives',
        'Triple-shredded organic pine bark root insulation',
      ],
      badge: 'Florida-Friendly Flora',
    },
    {
      step: '04',
      tagline: 'Atmospheric Nightscaping',
      title: 'Warm 2700K Low-Voltage Architectural Lighting',
      icon: Sparkles,
      description:
        'Transform your garden into an evening sanctuary. We install solid marine-grade cast brass fixtures that cast gentle 2700K illumination across palm canopies, stone textures, and pathways with zero glare.',
      highlights: [
        'Solid cast brass corrosion-proof fixtures',
        'Smart astronomical timer synced to Tampa sunsets',
        'Subtle canopy uplighting & step safety illumination',
      ],
      badge: 'Evening Sanctuaries',
    },
  ];

  return (
    <section className="relative bg-[#132317] text-white">
      {/* 
        STICKY BACKGROUND CONTAINER
        This container stays pinned to the top of the viewport (sticky top-0 h-screen)
        while the content container scrolls over it.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Florida landscaped backyard with swimming pool and palms"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Dark contrast overlay ensuring all scrolling cards and labels are crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#132317]/85 via-[#132317]/70 to-[#132317]/90" />

        {/* Ambient Top & Bottom Vignettes */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#132317] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#132317] to-transparent" />

        {/* Pinned Watermark & Tampa Status in Background */}
        <div className="absolute top-8 left-8 right-8 hidden sm:flex items-center justify-between text-xs tracking-wider uppercase text-emerald-200/60 font-mono">
          <span>The Greenstone Method</span>
          <span>Tampa, FL • Architectural Outdoor Living</span>
        </div>
      </div>

      {/* 
        SCROLLING OVERLAY CONTENT
        Negative margin pulls the content up into the sticky section,
        letting the cards glide over the pinned background image as the user scrolls.
      */}
      <div className="relative z-10 -mt-[100vh] pb-32">
        {/* Intro Header */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24 sm:pt-32">
          <Badge variant="accent" className="mb-4 !bg-emerald-400/20 !text-emerald-300 !border-emerald-400/30">
            Anatomy of an Outdoor Sanctuary
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Engineered for Florida Living.
            <span className="block text-emerald-400 mt-2">Crafted to Endure.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed">
            Behind every tranquil outdoor space is a seamless blend of civil drainage engineering, Florida agronomic science, and artisanal stonecraft.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-300 font-mono animate-pulse">
            <span>Scroll down to explore each phase</span>
            <span>↓</span>
          </div>
        </div>

        {/* Story Cards that glide over the pinned background */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-28 sm:space-y-44">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.step}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-10 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300"
              >
                {/* Header row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-accent text-white flex items-center justify-center font-mono font-bold text-xs">
                      {phase.step}
                    </span>
                    <span className="text-xs uppercase font-mono font-semibold tracking-wider text-accent">
                      {phase.tagline}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-accent border border-accent/20">
                    {phase.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary leading-snug">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="mt-3.5 text-sm sm:text-base text-text-secondary leading-relaxed">
                  {phase.description}
                </p>

                {/* Technical Highlights */}
                <div className="mt-6 pt-5 border-t border-border-subtle">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-primary block mb-3">
                    Engineering Benchmarks:
                  </span>
                  <ul className="space-y-2.5">
                    {phase.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outro CTA pill */}
        <div className="mt-32 max-w-xl mx-auto px-4 text-center">
          <div className="bg-forest-dark/90 backdrop-blur-md p-8 rounded-3xl border border-white/15 shadow-2xl">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to engineer your own outdoor sanctuary?
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-emerald-100/80 mb-5">
              From site surveying to evening lighting, we build outdoor spaces tailored specifically to your Tampa property.
            </p>
            <Button href="/contact" size="md" variant="primary" className="mt-2">
              <span>Start Your Project Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
