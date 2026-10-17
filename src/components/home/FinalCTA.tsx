import React from 'react';
import Image from 'next/image';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/MotionWrapper';

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center bg-forest text-white">
      {/* Background Photography with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85"
          alt="Lush vibrant modern outdoor living patio in Florida with fire pit and pool"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Rich deep forest botanical tint allowing the photography to pop with depth */}
        <div className="absolute inset-0 bg-forest/80 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          {/* Tampa Service Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-subtle text-white">
            <MapPin className="w-3.5 h-3.5 text-accent-bright" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Serving Greater Tampa Bay & South Tampa
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Ready to Love Your Outdoor Space?
          </h2>

          {/* Supporting text */}
          <p className="mt-5 text-base sm:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            Let’s talk about your ideas and create an outdoor space that feels like home.
          </p>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-base">
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>

            <Button
              href="/work"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-base !bg-white/10 !text-white !border-white/25 hover:!bg-white/20"
            >
              <span>Browse Project Gallery</span>
            </Button>
          </div>

          {/* Contact reassurance strip */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-emerald-200/80">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-bright" />
              <span>Complimentary Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-bright" />
              <span>Itemized Transparent Proposals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-bright" />
              <span>Turnkey Project Execution</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
