'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeftRight, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/ui/MotionWrapper';

export function BeforeAfterShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scenarios = [
    {
      title: 'Davis Islands Waterfront Pool Terrace',
      location: 'Davis Islands, Tampa, FL',
      beforeLabel: 'Before: Sinking Concrete & Water Pooling',
      afterLabel: 'After: Silver Travertine & Resilient Palms',
      beforeImage:
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80',
      afterImage:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      stats: [
        { label: 'Drainage Improvement', value: '100% Zero Puddling' },
        { label: 'Surface Temperature', value: '-18°F Cool-Touch' },
        { label: 'Appraisal Impact', value: 'High Positive' },
      ],
      details:
        'Failing cracked concrete and patchy mud replaced with French-pattern silver travertine, concealed sub-surface dry wells, and architectural Bismarck palms.',
    },
    {
      title: 'Hyde Park Shaded Botanical Entrance',
      location: 'Hyde Park, Tampa, FL',
      beforeLabel: 'Before: Bare Dirt & Oak Root Compaction',
      afterLabel: 'After: Lush Understory & Flamed Limestone',
      beforeImage:
        'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1600&q=80',
      afterImage:
        'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=80',
      stats: [
        { label: 'Water Efficiency', value: '45% Less Irrigation' },
        { label: 'Native Florida Species', value: '28 Varieties' },
        { label: 'Curb Appeal Elevation', value: 'Immediate' },
      ],
      details:
        'Overcame deep shade and root competition from century live oaks by installing custom corten raised beds, shade-hardy coontie & ferns, and flamed limestone steppers in river pebble.',
    },
  ];

  const currentScenario = scenarios[activeTab];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Interactive Transformation"
            title="See The Difference Thoughtful Design Makes"
            description="Drag the slider below to compare raw, compromised Florida property conditions with our finished master-planned outdoor sanctuaries."
          />
        </FadeIn>

        {/* Scenario Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {scenarios.map((sc, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
                activeTab === idx
                  ? 'bg-accent text-white border-accent shadow-glow'
                  : 'bg-white text-text-secondary hover:text-text-primary border-border-subtle shadow-subtle'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{sc.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <FadeIn delay={0.15}>
          <div className="bg-white rounded-3xl border border-border-subtle p-4 sm:p-7 shadow-card max-w-5xl mx-auto">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative aspect-[16/10] sm:aspect-[21/10] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-bg-primary shadow-subtle w-full"
            >
              {/* "AFTER" Image (Full background layer) */}
              <Image
                src={currentScenario.afterImage}
                alt={currentScenario.afterLabel}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />

              {/* "AFTER" Floating Badge (Right side) */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-forest/90 text-white border border-white/20 text-xs font-bold backdrop-blur-md shadow-subtle flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-bright" />
                <span>AFTER: Greenstone Master Plan</span>
              </div>

              {/* "BEFORE" Image with CSS clip-path for 100% responsive clipping */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={currentScenario.beforeImage}
                  alt={currentScenario.beforeLabel}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>

              {/* "BEFORE" Floating Badge (Left side) */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/75 text-white/95 border border-white/20 text-xs font-bold backdrop-blur-md shadow-subtle">
                <span>BEFORE: Raw Site Conditions</span>
              </div>

              {/* Draggable Vertical Divider Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-2xl cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-forest shadow-2xl border-2 border-accent flex items-center justify-center">
                  <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
              </div>

              {/* Micro Drag Instruction Pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-white/90 border border-white/20 pointer-events-none">
                Drag or tap anywhere to compare
              </div>
            </div>

            {/* Scenario Breakdown Footer */}
            <div className="mt-6 pt-5 border-t border-border-subtle grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Transformation Summary:
                </span>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  {currentScenario.details}
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-3 gap-3">
                {currentScenario.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-bg-secondary border border-border-subtle text-center"
                  >
                    <span className="text-[10px] text-text-muted uppercase tracking-wider block">
                      {stat.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-forest mt-0.5 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
