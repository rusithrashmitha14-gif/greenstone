import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Eye, Sparkles } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-28 bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="Editorial Portfolio"
            title="Featured Outdoor Projects"
            description="Explore our sample case studies showcasing residential outdoor transformations across South Tampa, Davis Islands, and Palma Ceia."
            align="left"
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button href="/work" variant="outline" size="md">
              <span>View All 6 Projects</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <article
              key={project.slug}
              className="group rounded-2xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col justify-between card-hover-effect"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-bg-secondary">
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} - ${project.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-black/20 to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 text-text-primary border border-border-subtle backdrop-blur-md shadow-subtle">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200/80 backdrop-blur-md">
                      Demo Concept
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-xs text-text-secondary bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-border-subtle shadow-subtle">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                    <Link href={`/work/${project.slug}`} className="focus-visible:outline-none focus-visible:underline">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Highlights tag strip */}
                  <div className="mt-4 pt-4 border-t border-border-subtle/80 flex flex-wrap gap-1.5">
                    {project.keyFeatures.slice(0, 2).map((feat, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-bg-secondary text-text-muted border border-border-subtle line-clamp-1"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Link
                  href={`/work/${project.slug}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-bg-secondary hover:bg-bg-cardHover border border-border-subtle hover:border-accent/40 text-xs font-semibold text-text-primary hover:text-accent transition-all flex items-center justify-between group/link"
                >
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-accent" />
                    <span>Explore Case Study</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Portfolio Guarantee / Agency Context Strip */}
        <div className="mt-12 text-center">
          <p className="text-xs text-text-muted max-w-xl mx-auto">
            * All featured case studies represent sample architectural designs and concepts created for this Brandspire web demonstration. Photography curated from licensed architecture and landscape archives.
          </p>
        </div>
      </div>
    </section>
  );
}
