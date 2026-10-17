'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { ProjectItem } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';

interface PortfolioFilterGridProps {
  projects: ProjectItem[];
}

export function PortfolioFilterGrid({ projects }: PortfolioFilterGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'landscape-design', label: 'Landscape Design' },
    { key: 'garden-design', label: 'Garden Design' },
    { key: 'hardscaping', label: 'Hardscaping' },
    { key: 'outdoor-living', label: 'Outdoor Living' },
    { key: 'lawn-transformation', label: 'Lawn Transformation' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.categoryKey === selectedFilter);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
        {filterCategories.map((cat) => {
          const isActive = selectedFilter === cat.key;
          const count =
            cat.key === 'all'
              ? projects.length
              : projects.filter((p) => p.categoryKey === cat.key).length;

          return (
            <button
              key={cat.key}
              onClick={() => setSelectedFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive
                  ? 'bg-accent text-white shadow-glow scale-[1.02]'
                  : 'bg-white hover:bg-bg-cardHover text-text-secondary hover:text-text-primary border border-border-subtle hover:border-accent/30 shadow-subtle'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/25 text-white' : 'bg-bg-secondary text-text-muted'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="group rounded-3xl bg-bg-card border border-border-subtle overflow-hidden flex flex-col justify-between card-hover-effect shadow-subtle"
          >
            <div>
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-bg-secondary">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-black/10 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white/95 text-text-primary border border-border-subtle backdrop-blur-md shadow-subtle">
                    {project.category}
                  </span>
                  <Badge variant="demo">Demo Concept</Badge>
                </div>

                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-text-secondary bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-border-subtle shadow-subtle">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Metrics preview */}
                <div className="mt-5 pt-5 border-t border-border-subtle grid grid-cols-2 gap-3 text-xs">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-bg-secondary p-2.5 rounded-lg border border-border-subtle">
                      <span className="text-[10px] text-text-muted uppercase tracking-wider block">
                        {m.label}
                      </span>
                      <span className="text-xs font-semibold text-text-primary mt-0.5 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom link */}
            <div className="p-6 sm:p-7 pt-0">
              <Link
                href={`/work/${project.slug}`}
                className="w-full py-3 px-4 rounded-xl bg-bg-secondary hover:bg-accent hover:text-white border border-border-subtle hover:border-accent text-xs font-semibold text-text-primary transition-all flex items-center justify-between group/btn shadow-xs"
              >
                <span>View Full Project Study & Gallery</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Filter result notice if empty */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-bg-card rounded-2xl border border-border-subtle">
          <p className="text-text-secondary text-sm">
            No sample projects found in this category.
          </p>
          <button
            onClick={() => setSelectedFilter('all')}
            className="mt-3 text-xs text-accent font-semibold underline"
          >
            Reset filter to view all
          </button>
        </div>
      )}
    </div>
  );
}
