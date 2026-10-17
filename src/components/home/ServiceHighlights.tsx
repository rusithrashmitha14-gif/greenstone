import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { servicesData } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ServiceHighlights() {
  return (
    <section className="py-20 sm:py-28 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comprehensive Landscaping Capabilities"
          title="Designed for Florida Living"
          description="From architectural master planning to ongoing estate stewardship, our six core disciplines transform how you experience your home."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              className="group rounded-2xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col justify-between card-hover-effect"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-primary">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} in Tampa Florida`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-black/20" />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-bg-primary/90 text-accent border border-border-subtle backdrop-blur-md">
                    0{index + 1} // Discipline
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 pt-4 border-t border-border-subtle/80 space-y-2 text-xs text-text-secondary">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Link */}
              <div className="p-6 pt-0">
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary group-hover:text-accent transition-colors pt-2"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-bg-primary border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-text-primary">
              Need a personalized multi-disciplinary plan?
            </h4>
            <p className="text-sm text-text-secondary mt-1">
              We combine landscape architecture, hardscaping, and planting into cohesive turnkey proposals.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-lg bg-accent text-bg-primary font-semibold text-sm hover:bg-accent-hover transition-colors shadow-sm"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
