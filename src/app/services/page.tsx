import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles, MapPin, Layers, SunMedium, Compass } from 'lucide-react';
import { servicesData } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/ui/MotionWrapper';

export const metadata: Metadata = {
  title: 'Our Landscaping Services',
  description:
    'Explore our 6 core landscaping disciplines in Tampa, FL: Landscape Design, Lawn Care, Hardscaping, Garden Design, Tree Care, and Outdoor Living Spaces.',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 text-center">
        <Badge variant="accent" className="mb-4">
          Tampa Landscape Architecture & Care
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight">
          Comprehensive Outdoor Services
        </h1>
        <p className="mt-5 text-base sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          From full 3D architectural master plans to artisanal travertine paving and dedicated estate lawn management. Built specifically for Florida’s climate and lifestyle.
        </p>

        {/* Quick Jump Bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {servicesData.map((s) => (
            <a
              key={s.id}
              href={`#${s.slug}`}
              className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-accent-light border border-border-subtle hover:border-accent/40 text-xs font-medium text-text-secondary hover:text-accent transition-all shadow-subtle"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services Deep Dive List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <section
              key={service.id}
              id={service.slug}
              className="scroll-mt-28 border-t border-border-subtle pt-16 sm:pt-20 first:border-0 first:pt-0"
            >
              <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Visual Imagery Column */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border-subtle bg-bg-card shadow-2xl">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-white/95 text-accent border border-accent/20 backdrop-blur-md shadow-subtle">
                          0{index + 1} // {service.title}
                        </span>
                      </div>
                    </div>

                  {/* Secondary Gallery Thumbnail Strip */}
                  <div className="grid grid-cols-2 gap-4">
                    {service.galleryImages.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border-subtle bg-bg-card"
                      >
                        <Image
                          src={img}
                          alt={`${service.title} detail view ${i + 1}`}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {service.tagline}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base text-text-secondary leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Who It's For Card */}
                    <div className="mt-6 p-4 rounded-xl bg-bg-card border border-border-subtle">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-1">
                        Who It Suits:
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {service.whoItsFor}
                      </p>
                    </div>

                    {/* Florida Focus Callout */}
                    <div className="mt-3 p-4 rounded-xl bg-accent-light border border-accent/25">
                      <div className="flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-wider mb-1">
                        <SunMedium className="w-3.5 h-3.5" />
                        <span>Florida Climate Advantage</span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {service.floridaFocus}
                      </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="mt-6">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-3">
                        Key Benefits & Deliverables:
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Service CTA */}
                  <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap items-center gap-4">
                    <Button href="/contact" variant="primary" size="md">
                      <span>Request a Quote for {service.title}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                    <Link
                      href="/work"
                      className="text-xs font-semibold text-text-secondary hover:text-accent transition-colors"
                    >
                      See related projects →
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
        );
        })}
      </div>

      {/* Bottom Conversion Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-3xl bg-gradient-to-br from-bg-card to-bg-secondary border border-border-subtle p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <Badge variant="accent" className="mb-3">
            Tailored Proposals
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold text-text-primary">
            Have a Multi-Phase Project in Mind?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Many of our Tampa clients bundle landscape design, hardscaping, and garden planting into a single orchestrated transformation. Let’s create a phased roadmap for your property.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              <span>Start Your Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              <span>Learn About Our Philosophy</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
