import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'subtle' | 'outline' | 'featured';
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = 'subtle',
  className,
  icon,
}: BadgeProps) {
  const variants = {
    accent: 'bg-accent-light text-accent border border-accent/25 font-semibold',
    subtle: 'bg-white text-text-secondary border border-border-subtle shadow-subtle',
    outline: 'bg-transparent text-text-secondary border border-border-subtle',
    featured: 'bg-emerald-50 text-accent border border-accent/25 font-semibold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase',
        variants[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
