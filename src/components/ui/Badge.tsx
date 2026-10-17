import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'subtle' | 'outline' | 'demo';
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
    accent: 'bg-accent/15 text-accent border border-accent/30',
    subtle: 'bg-bg-card text-text-secondary border border-border-subtle',
    outline: 'bg-transparent text-text-secondary border border-border-subtle',
    demo: 'bg-amber-500/10 text-amber-300 border border-amber-500/30 font-medium',
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
