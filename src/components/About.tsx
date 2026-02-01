'use client';

import { Layers, Cpu, Wrench, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Layer by Layer',
    description: 'Precision FDM printing with attention to detail and quality finish.',
    accent: 'var(--accent-primary)',
  },
  {
    icon: Cpu,
    title: 'Custom Designs',
    description: 'From concept to CAD to creation, bringing unique ideas to life.',
    accent: 'var(--gradient-end)',
  },
  {
    icon: Wrench,
    title: 'Functional Prints',
    description: 'Practical solutions for everyday problems, designed to last.',
    accent: 'var(--accent-secondary)',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 grid-bg opacity-30"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-block px-3 py-1 text-xs font-mono text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 rounded-full mb-4 uppercase tracking-wider">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
            Crafting Digital Ideas
            <br />
            <span className="text-[var(--text-secondary)]">Into Physical Reality</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            What started as a curiosity has become a passion. Every project is an
            opportunity to push boundaries, learn new techniques, and create something
            that didn&apos;t exist before.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--bg-tertiary)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 card-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${feature.accent}15 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${feature.accent}15`,
                    boxShadow: `0 0 20px ${feature.accent}20`,
                  }}
                >
                  <feature.icon
                    className="w-6 h-6"
                    style={{ color: feature.accent }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn more link */}
                <div
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: feature.accent }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 md:mt-20 flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent" />
          <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Precision in every layer
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
