'use client';

import { Mail, Github, MessageCircle, ArrowRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    title: 'Email',
    description: 'hello@example.com',
    href: 'mailto:hello@example.com',
    accent: 'var(--accent-primary)',
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'View my projects',
    href: 'https://github.com',
    accent: 'var(--gradient-end)',
  },
  {
    icon: MessageCircle,
    title: 'Custom Orders',
    description: 'Open for commissions',
    href: '#',
    accent: 'var(--accent-secondary)',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 grid-bg opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-mono text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 rounded-full mb-4 uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              Let&apos;s Create
              <br />
              <span className="text-[var(--text-secondary)]">Something Together</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              Have a project in mind or want to discuss custom prints?
              I&apos;m always excited to explore new ideas and bring concepts to life.
            </p>

            {/* Decorative element */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[var(--accent-primary)]" />
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                Response within 24h
              </span>
            </div>
          </div>

          {/* Right side - Contact cards */}
          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--bg-tertiary)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 card-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${link.accent}15`,
                    boxShadow: `0 0 20px ${link.accent}10`,
                  }}
                >
                  <link.icon className="w-6 h-6" style={{ color: link.accent }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {link.title}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] truncate">
                    {link.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight
                  className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all flex-shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
