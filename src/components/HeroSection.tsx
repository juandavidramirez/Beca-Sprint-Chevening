import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeMode } from '../types';

interface HeroSectionProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenInterest: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ theme, toggleTheme, onOpenInterest }) => {
  return (
    <section id="hero" className="pt-12 pb-12 sm:pt-16 sm:pb-14">
      {/* Top Bar */}
      <div className="flex justify-between items-center gap-4 flex-wrap mb-10">
        <div className="flex items-center gap-3">
          <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)]">
            Beca <span className="text-[var(--orange)]">Sprint</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-mono-custom text-xs font-medium text-[var(--navy-ink)] bg-[var(--surface-2)] border border-[var(--line)] px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-2xs">
            Cierre Chevening: 6 de octubre
          </div>

          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Alternar tema claro y oscuro"
            className="p-2 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink-soft)] hover:text-[var(--ink)] hover:border-[var(--orange)] transition-colors cursor-pointer"
            title="Cambiar modo de color"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--orange)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--navy)]" />
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <p className="eyebrow mb-3">
        Asesoría y acompañamiento para que ganes tu beca en el extranjero
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.12] max-w-[18ch] tracking-tight mb-5 text-[var(--ink)]">
        Tu aplicación a Chevening, lista en 2.5 semanas de trabajo enfocado
      </h1>

      <p className="text-lg sm:text-xl text-[var(--ink-soft)] max-w-[54ch] leading-relaxed mb-10 font-normal">
        Acompañamiento uno a uno para construir tus cuatro ensayos, tu narrativa y tu estrategia de aplicación, con un modelo de pago que comparte el riesgo contigo: pagas una base fija y un bono solo si avanzas.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)] rounded-lg overflow-hidden shadow-2xs">
        <div className="bg-[var(--surface)] p-5 sm:p-6 transition-colors">
          <b className="block font-display text-3xl sm:text-4xl font-semibold text-[var(--navy-ink)] mb-1">
            ~70%
          </b>
          <span className="text-xs sm:text-sm text-[var(--ink-soft)] leading-snug block">
            de aplicantes queda fuera en la fase de ensayos, no de entrevista
          </span>
        </div>

        <div className="bg-[var(--surface)] p-5 sm:p-6 transition-colors">
          <b className="block font-display text-3xl sm:text-4xl font-semibold text-[var(--navy-ink)] mb-1">
            2.5 sem.
          </b>
          <span className="text-xs sm:text-sm text-[var(--ink-soft)] leading-snug block">
            de acompañamiento intensivo hasta el cierre de convocatoria
          </span>
        </div>

        <div className="bg-[var(--surface)] p-5 sm:p-6 transition-colors">
          <b className="block font-display text-3xl sm:text-4xl font-semibold text-[var(--navy-ink)] mb-1">
            3
          </b>
          <span className="text-xs sm:text-sm text-[var(--ink-soft)] leading-snug block">
            sprints con pago base + bono ligado a resultados
          </span>
        </div>
      </div>
    </section>
  );
};
