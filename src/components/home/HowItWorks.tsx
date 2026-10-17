'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquareText, CalendarCheck, FileCheck2, Shovel, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MessageSquareText,
      title: 'Tell Us About Your Project',
      description:
        'Share your vision, property address, and initial priorities through our quick quote request form or a brief introductory phone call.',
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Discuss Your Ideas',
      description:
        'We visit your property for an on-site consultation to inspect sun orientation, soil drainage, property lines, and lifestyle aspirations.',
    },
    {
      number: '03',
      icon: FileCheck2,
      title: 'Receive a Project Proposal',
      description:
        'We deliver a comprehensive master design layout, 3D visualizations, botanical specifications, and an itemized fixed-price investment proposal.',
    },
    {
      number: '04',
      icon: Shovel,
      title: 'Bring Your Outdoor Space to Life',
      description:
        'Our experienced installation craftsmen execute your build with clean daily job sites, regular photo updates, and rigorous quality benchmarks.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="A Straightforward Process"
            title="How It Works"
            description="Transforming your yard into an architectural living space should be an exciting, seamless experience from first sketch to final plant installation."
          />
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="h-full relative rounded-2xl bg-white border border-border-subtle p-7 flex flex-col justify-between card-hover-effect shadow-subtle">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent-light border border-accent/20 flex items-center justify-center text-accent shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-extrabold text-accent/25 font-mono">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-text-primary mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-subtle/70 text-[11px] font-semibold text-accent uppercase tracking-wider">
                    Step {idx + 1} of 4
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Action Prompt */}
        <FadeIn delay={0.25}>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="md">
              <span>Start Step 1 — Request Your Free Quote</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
