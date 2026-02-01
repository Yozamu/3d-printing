import { Hexagon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-[var(--bg-tertiary)]">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Hexagon
                className="w-7 h-7 text-[var(--accent-primary)]"
                strokeWidth={1.5}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold text-[var(--accent-primary)]">3D</span>
              </div>
            </div>
            <span className="text-base font-semibold text-[var(--text-primary)]">
              PrintLab
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {['About', 'Showcase', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {currentYear} PrintLab. Crafted layer by layer.
          </p>
        </div>

        {/* Bottom accent */}
        <div className="mt-8 pt-8 border-t border-[var(--bg-tertiary)] text-center">
          <p className="text-xs text-[var(--text-muted)] font-mono tracking-wider">
            PRECISION • QUALITY • INNOVATION
          </p>
        </div>
      </div>
    </footer>
  );
}
