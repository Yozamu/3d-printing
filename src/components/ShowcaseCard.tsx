'use client';

import Image from 'next/image';
import { Print } from '@/types';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface ShowcaseCardProps {
  print: Print;
  index: number;
}

export default function ShowcaseCard({ print, index }: ShowcaseCardProps) {
  const formattedDate = new Date(print.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <article
      className="group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--bg-tertiary)] hover:border-[var(--accent-primary)]/40 transition-all duration-500 card-lift"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-tertiary)]">
        <Image
          src={print.image}
          alt={print.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-60" />

        {/* Featured badge */}
        {print.featured && (
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1.5 text-xs font-medium rounded-full backdrop-blur-md"
              style={{
                background: 'var(--accent-primary-dim)',
                color: 'var(--accent-primary)',
                border: '1px solid rgba(0, 229, 255, 0.3)',
              }}
            >
              Featured
            </span>
          </div>
        )}

        {/* Hover overlay with arrow */}
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: 'var(--accent-primary)',
              boxShadow: '0 0 30px var(--accent-glow)',
            }}
          >
            <ArrowUpRight className="w-5 h-5 text-[var(--bg-primary)]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={print.date}>{formattedDate}</time>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
          {print.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2 mb-4">
          {print.description}
        </p>

        {/* Tags */}
        {print.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {print.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{
          background: 'linear-gradient(to right, var(--accent-primary), var(--gradient-end))',
        }}
      />
    </article>
  );
}
