import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  Layers,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Outdoor Living Case Study`,
    description: `${project.shortDescription} Located in ${project.location}. A demonstration case study by Brandspire.`,
    openGraph: {
      title: `${project.title} - Greenstone Landscaping`,
      description: project.shortDescription,
      images: [{ url: project.heroImage }],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const nextProject =
    projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject =
    projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];

  return (
    <article className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2">
            <Badge variant="demo">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Fictional Demo Case Study
            </Badge>
          </div>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-md text-xs font-semibold bg-accent-light text-accent border border-accent/25">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-text-secondary">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{project.location}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1]">
            {project.title}
          </h1>

          <p className="mt-5 text-base sm:text-xl text-text-secondary leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-border-subtle bg-bg-card shadow-2xl mb-14">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent" />
        </div>

        {/* Project Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-bg-card border border-border-subtle mb-16">
          {project.metrics.map((metric, i) => (
            <div key={i} className="p-3 bg-bg-secondary rounded-xl border border-border-subtle">
              <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block">
                {metric.label}
              </span>
              <span className="text-sm sm:text-base font-bold text-text-primary mt-1 block">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left Column: Overview, Challenge, Solution */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-accent" />
                <span>Project Overview & Context</span>
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Site Challenge
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-accent-light border border-accent/25">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Design & Engineering Solution
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Design Objectives */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                Core Design Objectives
              </h2>
              <ul className="space-y-3">
                {project.designObjectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Architectural Features */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">
                Architectural & Botanical Specifications
              </h2>
              <div className="space-y-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-bg-card border border-border-subtle text-xs sm:text-sm text-text-secondary flex items-start gap-3"
                  >
                    <span className="text-accent font-mono text-xs font-bold mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Gallery */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.galleryImages.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle bg-bg-card"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.title} detail perspective ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-text-secondary border border-border-subtle shadow-subtle">
                      Perspective 0{i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Project Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Specs Card */}
            <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle sticky top-28">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-4">
                Project Specifications
              </h3>

              <div className="space-y-3.5 text-xs text-text-secondary pb-6 border-b border-border-subtle">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Estimated Duration:</span>
                  <span className="font-semibold text-text-primary">{project.completionTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Location:</span>
                  <span className="font-semibold text-text-primary">{project.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Category:</span>
                  <span className="font-semibold text-accent">{project.category}</span>
                </div>
              </div>

              {/* Materials Palette */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-accent" />
                  <span>Materials Specified:</span>
                </h4>
                <ul className="space-y-2">
                  {project.materials.map((mat, i) => (
                    <li
                      key={i}
                      className="p-2 rounded bg-bg-secondary text-text-secondary text-[11px] border border-border-subtle"
                    >
                      {mat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar Quote CTA */}
              <div className="mt-8 pt-6 border-t border-border-subtle space-y-3">
                <h4 className="text-sm font-bold text-text-primary">
                  Ready for a similar transformation?
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  We create tailored 3D master plans for properties throughout Tampa Bay.
                </p>
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {/* Demo Notice */}
              <p className="mt-4 text-[10px] text-text-muted text-center leading-normal">
                Concept case study designed by Brandspire.
              </p>
            </div>
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="border-t border-border-subtle pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href={`/work/${prevProject.slug}`}
            className="p-5 rounded-2xl bg-bg-card hover:bg-bg-cardHover border border-border-subtle hover:border-accent/40 transition-all flex items-center gap-4 group"
          >
            <div className="p-2 rounded-lg bg-bg-secondary text-text-secondary group-hover:text-accent transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider block">
                Previous Case Study
              </span>
              <span className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="p-5 rounded-2xl bg-bg-card hover:bg-bg-cardHover border border-border-subtle hover:border-accent/40 transition-all flex items-center justify-between sm:justify-end gap-4 text-right group"
          >
            <div>
              <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider block">
                Next Case Study
              </span>
              <span className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                {nextProject.title}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-bg-secondary text-text-secondary group-hover:text-accent transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
