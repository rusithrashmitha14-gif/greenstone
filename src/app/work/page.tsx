import React from 'react';
import type { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import { PortfolioFilterGrid } from '@/components/work/PortfolioFilterGrid';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { FadeIn } from '@/components/ui/MotionWrapper';

export const metadata: Metadata = {
  title: 'Our Work | Landscape Portfolio',
  description:
    'Browse our curated gallery of modern outdoor transformations, travertine patios, native Florida gardens, and luxury living spaces across Tampa, FL.',
};

export default function WorkPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge variant="accent" className="mb-4">
              Tampa Architectural Portfolio
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight">
              Curated Outdoor Projects
            </h1>
            <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
              Filter through our residential landscape projects across South Tampa, Davis Islands, Hyde Park, and Palma Ceia.
            </p>

            {/* Quality Standard Banner */}
            <div className="mt-6 inline-flex items-center gap-2 p-3.5 rounded-xl bg-white border border-border-subtle text-xs text-text-secondary text-left shadow-subtle">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>
                <strong>Craftsmanship Benchmark:</strong> Every project showcases custom grading, premium natural stonework, and acclimatized Florida flora.
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Filterable Grid */}
        <PortfolioFilterGrid projects={projectsData} />

        {/* Bottom CTA Card */}
        <FadeIn delay={0.2}>
          <div className="mt-24 rounded-3xl bg-bg-secondary border border-border-subtle p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Inspired by these transformations?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
              Every property has distinct architectural potential. Let’s review your yard and design a custom outdoor space built for your lifestyle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <span>Request a Project Proposal</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                <span>View Service Breakdown</span>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
