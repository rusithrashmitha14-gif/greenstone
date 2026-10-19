'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Layers, Trees, Sparkles, CheckCircle, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/MotionWrapper';

export function StickyStorytelling() {
  const [activePhase, setActivePhase] = useState<number>(0);

  const chapters = [
    {
      step: 'Phase 01',
      tagline: 'Below-Ground Engineering',
      title: 'Precision Grading & Sub-Surface Storm Drainage',
      icon: Layers,
      description:
        'Tampa receives over 50 inches of rain annually, often in torrential summer downpours. Before laying any stone, we excavate 12–14 inches, install commercial geotextile stabilization, and conceal high-flow slot drains connected to sub-surface dry wells to guarantee zero standing water.',
      specs: [
        'Open-graded crushed granite sub-base',
        'Zero-puddling laser contour leveling',
        'Heavy-duty non-woven geotextile membrane',
      ],
      locationBadge: 'Davis Islands & South Tampa Sites',
      image:
        'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1600&q=80',
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
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
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
      image:
        'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=80',
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
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-forest text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="max-w-3xl mb-14 sm:mb-20">
            <Badge variant="accent" className="mb-4 !bg-accent-bright/20 !text-accent-bright !border-accent-bright/30">
              The Anatomy of an Outdoor Sanctuary
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              Engineered For Florida Living. Built To Last Generations.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              Behind every tranquil outdoor living space lies a methodical synthesis of civil engineering, agronomic science, and artisanal stonecraft. As you scroll, the landscape visual remains pinned while the engineering phases unfold.
            </p>
          </div>
        </FadeIn>

        {/* Sticky Split-Screen Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sticky Image Panel (Left) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 self-start">
            <div className="relative aspect-[4/3] lg:aspect-[4/4.5] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-forest-dark">
              <Image
                src={chapters[activePhase].image}
                alt={chapters[activePhase].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Active Phase Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-white/95 text-forest backdrop-blur-md shadow-subtle">
                  {chapters[activePhase].step} // {chapters[activePhase].tagline}
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-accent-bright/90 text-forest backdrop-blur-md">
                  Active Blueprint
                </span>
              </div>

              {/* Bottom Caption Pill on Sticky Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-forest/85 backdrop-blur-md border border-white/15 text-xs text-emerald-100">
                <div className="flex items-center gap-2 mb-1 text-accent-bright font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{chapters[activePhase].locationBadge}</span>
                </div>
                <p className="line-clamp-2 text-white/90">
                  {chapters[activePhase].title}
                </p>
              </div>
            </div>

            {/* Quick Phase Jump Pills */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    activePhase === idx
                      ? 'bg-accent-bright text-forest border-accent-bright shadow-glow font-bold'
                      : 'bg-white/10 text-emerald-200/80 hover:bg-white/15 border-white/10'
                  }`}
                >
                  {ch.step}
                </button>
              ))}
            </div>
          </div>

          {/* Scrolling Story Narrative Cards (Right) */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-12">
            {chapters.map((chapter, idx) => {
              const Icon = chapter.icon;
              const isActive = activePhase === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActivePhase(idx)}
                  onClick={() => setActivePhase(idx)}
                  className={`p-7 sm:p-9 rounded-3xl transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-white text-text-primary border-white shadow-2xl scale-[1.01]'
                      : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded ${
                        isActive
                          ? 'bg-accent-light text-forest border border-accent/20'
                          : 'bg-white/15 text-emerald-200 border border-white/20'
                      }`}
                    >
                      {chapter.step} // {chapter.tagline}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isActive
                          ? 'bg-accent-light text-forest'
                          : 'bg-white/15 text-accent-bright'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-extrabold mt-2 leading-snug ${
                      isActive ? 'text-forest' : 'text-white'
                    }`}
                  >
                    {chapter.title}
                  </h3>

                  <p
                    className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
                      isActive ? 'text-text-secondary' : 'text-emerald-100/90'
                    }`}
                  >
                    {chapter.description}
                  </p>

                  <div
                    className={`mt-6 pt-5 border-t ${
                      isActive ? 'border-border-subtle' : 'border-white/15'
                    }`}
                  >
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block mb-2.5 ${
                        isActive ? 'text-forest' : 'text-emerald-200'
                      }`}
                    >
                      Engineering Benchmarks:
                    </span>
                    <ul
                      className={`space-y-2 text-xs sm:text-sm ${
                        isActive ? 'text-text-secondary' : 'text-emerald-100/90'
                      }`}
                    >
                      {chapter.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`mt-5 pt-3.5 border-t flex items-center justify-between text-xs ${
                      isActive
                        ? 'border-border-subtle/80 text-text-muted'
                        : 'border-white/10 text-emerald-200/70'
                    }`}
                  >
                    <span>Applied to:</span>
                    <span className={`font-semibold ${isActive ? 'text-forest' : 'text-white'}`}>
                      {chapter.locationBadge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
