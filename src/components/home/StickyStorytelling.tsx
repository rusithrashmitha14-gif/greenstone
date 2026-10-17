'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Layers, Trees, Sparkles, Droplets, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function StickyStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Background scale effect as user scrolls through the story
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgBrightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.9, 0.75]);

  const chapters = [
    {
      step: 'Phase 01',
      tagline: 'Below-Ground Engineering',
      title: 'Precision Grading & Sub-Surface Storm Drainage',
      icon: Layers,
      description:
        'Tampa receives over 50 inches of rain annually, often in torrential summer downpours. Before setting a single stone, we excavate 12–14 inches, install commercial geotextile stabilization, and conceal high-flow slot drains connected to sub-surface dry wells.',
      specs: [
        'Open-graded crushed granite sub-base',
        'Zero-puddling laser contour leveling',
        'Heavy-duty non-woven geotextile membrane',
      ],
      locationBadge: 'Davis Islands & South Tampa Sites',
    },
    {
      step: 'Phase 02',
      tagline: 'Architectural Hardscape',
      title: 'Hand-Cut French Travertine & Living Patios',
      icon: Compass,
      description:
        'We specify silver and ivory French-pattern travertine pavers that deflect solar radiation and remain cool to the barefoot touch even in 95°F July sun. Precision diamond coping borders create a seamless flush threshold between interior tile and pool water.',
      specs: [
        'Thermal cool-touch natural travertine',
        'Polymeric interlocking sand joints',
        'Flush-threshold transitions without trip edges',
      ],
      locationBadge: 'Hyde Park & Palma Ceia Estates',
    },
    {
      step: 'Phase 03',
      tagline: 'Horticultural Composition',
      title: 'Resilient Subtropical Flora & Specimen Palms',
      icon: Trees,
      description:
        'We assemble Florida-Friendly species that thrive naturally in sandy, high-pH soil. Architectural Bismarck palms provide sculptural scale, while native coontie, firebush, and sweet viburnum create dense multi-layered privacy hedges without excessive water demand.',
      specs: [
        'Micro-drip irrigation saving 50% water',
        'Hand-selected Zone 9b/10a acclimatized stock',
        'Triple-ground organic pine bark root cooling',
      ],
      locationBadge: 'Carrollwood & Beach Park Gardens',
    },
    {
      step: 'Phase 04',
      tagline: 'Atmospheric Nightscaping',
      title: 'Warm 2700K Low-Voltage Architectural Illumination',
      icon: Sparkles,
      description:
        'Outdoor spaces come alive at dusk. We position solid marine-grade brass fixtures to cast warm 2700K beams through palm fronds, highlight stone textures, and illuminate walkways with zero glare. Automated smartphone scenes adjust dynamically to Tampa sunset times.',
      specs: [
        'Solid brass corrosion-proof fixtures',
        'Smart astronomical timer & zone dimming',
        'Warm 2700K architectural color temperature',
      ],
      locationBadge: 'Greater Tampa Bay Evening Sanctuaries',
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-forest text-white">
      {/* Pinned Sticky Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <motion.div style={{ scale: bgScale }} className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="Luxury Tampa modern landscaped backyard and pool terrace"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle deep forest ambient overlay ensuring high text legibility while showing lush garden colors */}
          <div className="absolute inset-0 bg-forest/70 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-forest/50" />
        </motion.div>

        {/* Pinned Watermark & Progress Header */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs text-emerald-200/80 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/80 backdrop-blur-md border border-white/10">
            <span className="w-2 h-2 rounded-full bg-accent-bright animate-pulse" />
            <span className="font-semibold uppercase tracking-wider text-white">
              The Anatomy of an Outdoor Sanctuary
            </span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-forest/80 backdrop-blur-md border border-white/10 text-emerald-100">
            Scroll to inspect Florida build phases ↓
          </span>
        </div>
      </div>

      {/* Scrolling Content Cards Over Pinned Background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Story Intro */}
        <div className="min-h-[60vh] flex flex-col justify-center max-w-2xl mb-16 sm:mb-24">
          <Badge variant="accent" className="w-fit mb-4 !bg-accent-bright/20 !text-accent-bright !border-accent-bright/30">
            Precision Craftsmanship
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Engineered For Florida Living. Built To Last Generations.
          </h2>
          <p className="mt-5 text-base sm:text-xl text-emerald-100/90 leading-relaxed font-normal">
            Behind every tranquil outdoor living space lies a methodical synthesis of civil engineering, agronomic science, and artisanal stonecraft. Scroll to explore how our transformations unfold.
          </p>
        </div>

        {/* Story Stages Scrolling Cards */}
        <div className="space-y-36 sm:space-y-48 pb-24">
          {chapters.map((chapter, idx) => {
            const Icon = chapter.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  isEven ? 'lg:items-end' : 'lg:items-start'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full max-w-xl p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl text-text-primary"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-accent-light text-forest border border-accent/20">
                      {chapter.step} // {chapter.tagline}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-accent-light text-forest flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-forest mt-2 leading-snug">
                    {chapter.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
                    {chapter.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border-subtle">
                    <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-2.5">
                      Engineering Benchmarks:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                      {chapter.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-subtle/80 flex items-center justify-between text-xs text-text-muted">
                    <span>Applied to:</span>
                    <span className="font-semibold text-forest">{chapter.locationBadge}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Story Section Closer CTA */}
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center max-w-2xl mx-auto pb-16">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to bring this level of precision to your property?
          </h3>
          <p className="mt-4 text-base text-emerald-100/90 leading-relaxed">
            Let’s start with a comprehensive on-site analysis and elevation survey of your Tampa home.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              <span>Schedule On-Site Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button
              href="/work"
              variant="secondary"
              size="lg"
              className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20"
            >
              <span>Explore Completed Projects</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
