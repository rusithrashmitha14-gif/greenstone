import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  Trees,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Sun,
  Droplets,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'About Greenstone Landscaping | Design Philosophy & Florida Approach',
  description:
    'Discover our design philosophy, attention to architectural detail, and subtropical horticulture principles for Tampa Bay residential outdoor spaces.',
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Compass,
      title: 'Architectural Harmony',
      description:
        'Outdoor spaces should feel like natural extensions of your interior living rooms, maintaining consistent sightlines, color temperatures, and material transitions.',
    },
    {
      icon: Sun,
      title: 'Florida-Specific Horticulture',
      description:
        'Tampa’s unique Zone 9b/10a climate demands plant species that endure blazing summer sun, periods of drought, and tropical deluge without constant chemical interventions.',
    },
    {
      icon: Layers,
      title: 'Engineering Below the Surface',
      description:
        'True landscape longevity lives underground. We engineer deep compacted aggregate sub-bases, geotextile stabilization, and concealed drainage to prevent shifting.',
    },
    {
      icon: HeartHandshake,
      title: 'Attentive Project Stewardship',
      description:
        'From initial 3D renderings to the final sweep of the stone patio, we prioritize transparent timelines, proactive updates, and respectful job-site care.',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Badge variant="accent" className="mb-4">
            Our Philosophy & Approach
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1]">
            Elevating Outdoor Living in Tampa, Florida.
          </h1>
          <p className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed">
            We believe an outdoor space should be more than grass and shrubbery — it should be a sanctuary for living, gathering, and connecting with nature.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 p-3 rounded-xl bg-bg-card border border-border-subtle text-xs text-text-muted">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
            <span>
              <strong>Concept Portfolio Notice:</strong> Greenstone Landscaping is an original demonstration concept created by <strong className="text-text-secondary">Brandspire Web Agency</strong> to showcase high-conversion web experiences for landscape companies.
            </span>
          </div>
        </div>

        {/* Story Section with Large Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border-subtle bg-bg-card shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                alt="Architectural modern residential home and outdoor living space in Tampa Florida"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping detail card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-5 rounded-2xl bg-bg-secondary/95 border border-border-subtle backdrop-blur-md max-w-xs shadow-xl">
              <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                Tampa Bay Microclimates
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                Balancing salt-spray resilience in coastal Davis Islands with shade management beneath grand oaks in Hyde Park.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Where Design Precision Meets Subtropical Vitality
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Living in Tampa provides the rare privilege of year-round outdoor enjoyment. However, Florida’s intense climate — torrential summer rains, high humidity, alkaline sandy soils, and intense solar radiation — can quickly compromise poorly conceived landscapes.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              Our approach unites landscape architecture with deep horticultural understanding. We treat every yard as an integrated ecosystem: engineering drainage to prevent standing pools, specifying heat-hardy native botanicals, and crafting travertine terraces that stay comfortable under barefoot heat.
            </p>

            <div className="pt-4 border-t border-border-subtle grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-bg-card border border-border-subtle">
                <span className="text-2xl font-bold text-accent block font-mono">100%</span>
                <span className="text-xs text-text-secondary mt-1 block">
                  Tailored to your specific site orientation and soil
                </span>
              </div>
              <div className="p-4 rounded-xl bg-bg-card border border-border-subtle">
                <span className="text-2xl font-bold text-accent block font-mono">3D Plan</span>
                <span className="text-xs text-text-secondary mt-1 block">
                  Full visualization before any ground is excavated
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars of Design */}
        <div id="approach" className="scroll-mt-28 py-16 border-t border-border-subtle">
          <SectionHeading
            eyebrow="Core Principles"
            title="Our Design Standards"
            description="Four fundamental tenets that guide our concept planning, material curation, and installation standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-subtle card-hover-effect flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Florida Living Blueprint */}
        <div className="mt-16 rounded-3xl bg-bg-card border border-border-subtle p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="accent">Horticultural Excellence</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                The Florida-Friendly Landscaping™ Philosophy
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                We advocate for Florida-Friendly principles endorsed by the University of Florida IFAS Extension. By matching the right plant to the right place, we reduce water waste, eliminate excessive synthetic chemicals, and create lush landscapes that look vibrant in January as well as July.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-text-secondary pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Drought-resilient native coontie, silver saw palmetto, and muhly grass</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Sub-surface micro-drip irrigation focused exclusively on root zones</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Organic compost amendment restoring biological vitality to sandy ground</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle bg-bg-secondary">
              <Image
                src="https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=1000&q=80"
                alt="Lush subtropical botanical garden in Florida"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Agency Note & CTA */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
            Ready to Begin Your Outdoor Journey?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
            Let’s discuss your property vision and prepare a comprehensive, fixed-price project proposal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              <span>Explore Sample Projects</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
