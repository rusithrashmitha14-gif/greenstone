import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle, Home, Trees, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

export function ProjectTransformations() {
  const scenarios = [
    {
      neighborhood: 'South Tampa Residence',
      title: 'Expanding Living Space to the Outdoors',
      goal: 'Connect a newly renovated modern kitchen directly to an outdoor cooking, dining, and pool terrace.',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'Large-format non-slip shellstone patio pavers',
        'Built-in stainless chef kitchen with natural gas barbecue',
        'Motorized cypress timber pergola providing afternoon shade',
        'Low-voltage 2700K brass path and palm tree uplighting',
      ],
      outcomeQuote:
        '“Envision having an outdoor space that feels like a natural extension of your living room — comfortable at midday, atmospheric at dusk, and effortless to entertain in year-round.”',
      focusArea: 'Outdoor Living & Hardscape',
    },
    {
      neighborhood: 'Davis Islands Waterfront',
      title: 'Resilient Coastal Luxury & Sunset Fire Terrace',
      goal: 'Replace storm-prone turf with zero-runoff permeable travertine, architectural specimen palms, and a fire lounge.',
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'Permeable French-pattern silver travertine installation',
        'Salt-tolerant Bismarck palms and native silver buttonwood borders',
        'Concealed slot drainage engineered for severe tropical downpours',
        'Integrated basalt stone fire table for cool evening breezes',
      ],
      outcomeQuote:
        '“Imagine walking onto a cool, barefoot-friendly terrace with uninterrupted water views and lush architectural plantings that thrive effortlessly in coastal salt air.”',
      focusArea: 'Coastal Hardscape Engineering',
    },
    {
      neighborhood: 'Historic Hyde Park',
      title: 'Botanical Courtyard & Private Shade Sanctuary',
      goal: 'Create an intimate, lush tropical courtyard that thrives under historic grand live oak canopies.',
      image:
        'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=80',
      highlights: [
        'Shade-tolerant botanical layering with native coontie & ferns',
        'Limestone stepping stone path set in smooth Mexican beach pebbles',
        'Custom corten steel raised planters protecting existing oak roots',
        'Precision drip micro-irrigation using 50% less city water',
      ],
      outcomeQuote:
        '“Picture returning home to a tranquil botanical garden sanctuary where vibrant greenery and organic stone provide natural privacy and cool comfort.”',
      focusArea: 'Native Garden Architecture',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Visionary Concepts"
            title="What Your Outdoor Project Could Look Like"
            description="Explore sample transformation scenarios showing how thoughtful Florida-friendly design, precision hardscaping, and lighting solve real property challenges."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <StaggerItem key={index}>
              <div className="rounded-2xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col justify-between card-hover-effect h-full">
                <div>
                  {/* Visual Imagery */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg-primary">
                    <Image
                      src={scenario.image}
                      alt={scenario.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-white/95 text-text-primary border border-border-subtle backdrop-blur-md shadow-subtle">
                        {scenario.neighborhood}
                      </span>
                      <Badge variant="demo">Demo Concept</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-semibold tracking-wider text-accent uppercase">
                      {scenario.focusArea}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mt-1 leading-snug">
                      {scenario.title}
                    </h3>

                    <div className="mt-4 p-3.5 rounded-xl bg-bg-secondary/80 border border-border-subtle">
                      <span className="text-[11px] uppercase tracking-wider text-text-muted font-semibold block mb-1">
                        Design Objective:
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {scenario.goal}
                      </p>
                    </div>

                    {/* Highlights list */}
                    <div className="mt-5 space-y-2">
                      <span className="text-xs font-semibold text-text-primary block">
                        Transformation Features:
                      </span>
                      <ul className="space-y-1.5 text-xs text-text-secondary">
                        {scenario.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Envisioned Outcome Quote */}
                    <blockquote className="mt-5 pt-4 border-t border-border-subtle/80 text-xs italic text-text-secondary leading-relaxed">
                      {scenario.outcomeQuote}
                    </blockquote>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 px-4 rounded-lg bg-bg-secondary hover:bg-accent hover:text-white border border-border-subtle hover:border-accent text-xs font-semibold text-text-primary transition-all flex items-center justify-between group shadow-xs"
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Transparent Demo Notice */}
        <FadeIn delay={0.2}>
          <div className="mt-10 p-4 rounded-xl bg-bg-card border border-border-subtle text-center text-xs text-text-muted max-w-2xl mx-auto">
            <p>
              <strong className="text-text-secondary">Note for Brandspire Visitors:</strong> These project scenarios demonstrate how we present case studies and transformation narratives for high-end landscaping businesses without relying on fabricated customer reviews.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
