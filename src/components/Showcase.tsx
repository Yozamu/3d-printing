import { Print } from '@/types';
import ShowcaseCard from './ShowcaseCard';
import { Box } from 'lucide-react';

interface ShowcaseProps {
  prints: Print[];
}

export default function Showcase({ prints }: ShowcaseProps) {
  return (
    <section id="showcase" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]" />

      {/* Accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, var(--accent-primary) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-3 py-1 text-xs font-mono text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 rounded-full mb-4 uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Print Showcase
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A collection of my favorite 3D prints, ranging from functional tools
            to decorative pieces. Each one crafted with precision.
          </p>
        </div>

        {/* Cards grid */}
        {prints.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {prints.map((print, index) => (
              <ShowcaseCard key={print.slug} print={print} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-dashed border-[var(--bg-tertiary)] bg-[var(--bg-secondary)]/50">
            <Box className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-4" />
            <p className="text-[var(--text-secondary)]">
              No prints yet. Add markdown files to{' '}
              <code className="px-2 py-1 bg-[var(--bg-tertiary)] rounded text-[var(--accent-primary)] font-mono text-sm">
                /content/prints/
              </code>{' '}
              to get started.
            </p>
          </div>
        )}

        {/* View all link (placeholder for future) */}
        {prints.length > 0 && (
          <div className="mt-12 text-center">
            <span className="text-sm text-[var(--text-muted)]">
              Showing {prints.length} prints
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
