'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Layers, Box, Hexagon } from 'lucide-react';

// Animated 3D cube component
function AnimatedCube({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative w-20 h-20 md:w-28 md:h-28" style={{ perspective: '200px' }}>
        <div
          className="w-full h-full border-2 border-[var(--accent-primary)] opacity-30"
          style={{
            transform: 'rotateX(45deg) rotateZ(45deg)',
            boxShadow: '0 0 20px var(--accent-glow)',
          }}
        />
      </div>
    </div>
  );
}

// Floating geometric shapes
function FloatingShape({ type, className, delay = 0 }: { type: 'hex' | 'box' | 'layers'; className?: string; delay?: number }) {
  const Icon = type === 'hex' ? Hexagon : type === 'box' ? Box : Layers;
  return (
    <div
      className={`absolute opacity-20 text-[var(--accent-primary)] ${className}`}
      style={{
        animation: `float-delayed 8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <Icon className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
    </div>
  );
}

// Animated layer lines (like 3D print layers building up)
function LayerLines() {
  return (
    <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-40">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="h-[2px] bg-gradient-to-r from-[var(--accent-primary)] to-transparent origin-left"
          style={{
            width: `${30 + Math.random() * 40}px`,
            animation: `layer-build 0.5s ease-out forwards`,
            animationDelay: `${0.8 + i * 0.1}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

// Vertical accent line with dot (replaces PrintHead - matches cyan theme)
function VerticalAccent() {
  return (
    <div className="absolute right-8 md:right-16 top-1/3 flex flex-col items-center gap-2">
      <div
        className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[var(--accent-primary)]"
        style={{
          boxShadow: '0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow)',
          animation: 'pulse-glow 2s ease-in-out infinite',
        }}
      />
      <div className="w-[2px] h-16 md:h-24 bg-gradient-to-b from-[var(--accent-primary)] to-transparent opacity-40" />
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToShowcase = () => {
    document.querySelector('#showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]" />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 grid-bg"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.08) 0%, transparent 50%)',
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Floating decorative elements */}
      {mounted && (
        <>
          <AnimatedCube className="top-[15%] left-[10%] hidden md:block" delay={0} />
          <AnimatedCube className="bottom-[20%] right-[15%] hidden md:block" delay={2} />
          <FloatingShape type="hex" className="top-[25%] right-[20%]" delay={1} />
          <FloatingShape type="layers" className="bottom-[30%] left-[15%]" delay={3} />
          <FloatingShape type="box" className="top-[60%] right-[10%] hidden lg:block" delay={2.5} />
          <LayerLines />
          <VerticalAccent />
        </>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Overline */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary-dim)] mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          <span className="text-sm font-mono text-[var(--accent-primary)] tracking-wider uppercase">
            Precision Manufacturing
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="block text-[var(--text-primary)]">Ideas Made</span>
          <span
            className="block py-2 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--gradient-end)] to-[var(--accent-primary)] bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 80px var(--accent-glow)',
              filter: 'drop-shadow(0 0 30px var(--accent-glow))',
            }}
          >
            Tangible
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Exploring the intersection of design and fabrication.
          Each print is a journey from concept to reality, crafted layer by layer.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={scrollToShowcase}
            className="group relative px-8 py-4 bg-[var(--accent-primary)] text-[var(--bg-primary)] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_var(--accent-glow)]"
          >
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--gradient-end)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border border-[var(--text-muted)] text-[var(--text-secondary)] font-medium rounded-full hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Stats row */}
        <div
          className={`flex items-center justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-[var(--bg-tertiary)] transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {[
            { value: '50+', label: 'Prints Created' },
            { value: '0.1mm', label: 'Layer Precision' },
            { value: '100%', label: 'Custom Designs' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] font-mono">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-[var(--text-muted)] uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">Scroll</span>
        <ChevronDown
          className="w-5 h-5 text-[var(--accent-primary)] animate-bounce"
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[var(--accent-primary)]/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[var(--accent-primary)]/20" />
    </section>
  );
}
