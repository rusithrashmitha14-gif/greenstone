import React from 'react';
import { Hero } from '@/components/home/Hero';
import { ServiceHighlights } from '@/components/home/ServiceHighlights';
import { StickyStorytelling } from '@/components/home/StickyStorytelling';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { BeforeAfterShowcase } from '@/components/home/BeforeAfterShowcase';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ProjectTransformations } from '@/components/home/ProjectTransformations';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <StickyStorytelling />
      <FeaturedProjects />
      <BeforeAfterShowcase />
      <WhyChooseUs />
      <HowItWorks />
      <ProjectTransformations />
      <FinalCTA />
    </>
  );
}
