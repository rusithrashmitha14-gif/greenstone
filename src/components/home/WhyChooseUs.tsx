import React from 'react';
import Image from 'next/image';
import { Compass, CheckCircle2, Trees, MessageSquareQuote, Hammer, Sun } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function WhyChooseUs() {
  const principles = [
    {
      icon: Compass,
      title: 'Designs Tailored to Each Property',
      description:
        'Every yard possesses unique sun paths, architectural lines, and micro-drainage challenges. We never recycle generic layouts; every plan is drawn from scratch for your specific lifestyle and elevation.',
    },
    {
      icon: CheckCircle2,
      title: 'Careful Attention to Detail',
      description:
        'From diamond-honed travertine coping cuts and concealed slot drains to razor-sharp sod borders, our standards prioritize precision in the subtle elements that elevate good landscaping into fine craftsmanship.',
    },
    {
      icon: Trees,
      title: 'Thoughtful Plant Selection for Florida Conditions',
      description:
        'Tampa’s intense summer heat, subtropical rainfall, and sandy soil require resilient botanical choices. We specify Florida-Friendly species that flourish organically without excessive chemical reliance.',
    },
    {
      icon: MessageSquareQuote,
      title: 'Clear, Proactive Communication',
      description:
        'You receive direct access to your project lead, transparent timeline schedules, written phase milestones, and prompt responses from consultation to final handover.',
    },
    {
      icon: Hammer,
      title: 'Quality-Focused Workmanship',
      description:
        'We build on deeply compacted aggregate bases, install commercial-grade geotextiles, and use marine-grade stainless hardware designed to endure Florida’s coastal climate for decades.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Service Principles"
          title="Why Homeowners Trust Greenstone"
          description="We guide outdoor transformations with an uncompromising commitment to Florida-specific horticulture, engineering integrity, and attentive client service."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Principles Column */}
          <div className="lg:col-span-7 space-y-5">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent/30 transition-all duration-300 flex items-start gap-4 sm:gap-5"
                >
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Showcase Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border-subtle bg-bg-primary shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Crafted architectural stonework and lush tropical plants in modern Florida home"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-black/20" />

              {/* Floating Tampa Climate Callout */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-bg-secondary/95 border border-border-subtle backdrop-blur-md">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Sun className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Tampa Bay Climate Expertise
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Zone 9b/10a botanical engineering: tailored for high UV index, rapid summer downpours, high water tables, and coastal salinity.
                </p>
                <div className="mt-3 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted">
                  <span>Horticultural Planning</span>
                  <span className="text-accent font-semibold">100% Tailored</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-bg-card border border-border-subtle flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-text-muted font-medium">
                  Demonstration Standard
                </span>
                <p className="text-sm font-semibold text-text-primary mt-0.5">
                  Concept Principles for Brandspire Portfolio
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-accent/15 text-accent text-xs font-semibold">
                Demo Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
