import React from 'react';
import { ArrowLeft, Moon, Sun, Instagram, Linkedin } from 'lucide-react';
import { ThemeMode } from '../types';
import { ModelSection } from './ModelSection';
import { PricingSection } from './PricingSection';
import { RoadmapSection } from './RoadmapSection';
import { PrinciplesSection } from './PrinciplesSection';
import { CtaSection } from './CtaSection';

interface CheveningPageProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onBackToHome: () => void;
  onOpenInterest: (program?: string, defaultMsg?: string) => void;
}

export const CheveningPage: React.FC<CheveningPageProps> = ({
  theme,
  toggleTheme,
  onBackToHome,
  onOpenInterest,
}) => {
  return (
    <div className="w-full">
      <div className="wrap">
        {/* NAV with Back to Home Link */}
        <nav className="flex justify-between items-center gap-4 flex-wrap py-5 border-b border-[var(--line)]/50 mb-4">
          <div className="flex items-center gap-3.5">
            <button
              id="back-to-home-btn"
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono-custom font-medium text-[var(--navy-ink)] hover:text-[var(--orange)] bg-[var(--surface-2)] border border-[var(--line)] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            <div className="flex items-center gap-2.5 font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)]">
              <img
                src="https://flagcdn.com/w80/gb.png"
                srcSet="https://flagcdn.com/w160/gb.png 2x"
                alt="Reino Unido"
                className="w-6 h-4.5 rounded-xs object-cover border border-[var(--line)] shadow-2xs"
              />
              <span>Chevening <span className="text-[var(--orange)]">Sprint</span></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="font-mono-custom text-xs font-medium text-[var(--navy-ink)] bg-[var(--surface-2)] border border-[var(--line)] px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-2xs">
              Cierre Chevening: 6 de octubre
            </div>

            <button
              id="chevening-theme-toggle"
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
        </nav>

        {/* HERO */}
        <section id="hero" className="pt-6 pb-12 sm:pt-8 sm:pb-14">
          <p className="eyebrow mb-3">
            Asesoría y acompañamiento para que ganes tu beca en el extranjero
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold leading-[1.12] max-w-[18ch] tracking-tight mb-5 text-[var(--ink)]">
            Tu aplicación a Chevening, lista en 2.5 semanas de trabajo enfocado
          </h1>

          <p className="text-lg sm:text-xl text-[var(--ink-soft)] max-w-[54ch] leading-relaxed mb-8 font-normal">
            Acompañamiento uno a uno para construir tus cuatro ensayos, tu narrativa y tu estrategia de aplicación, con un modelo de pago que comparte el riesgo contigo: pagas una base fija y un bono solo si avanzas.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)] rounded-lg overflow-hidden shadow-2xs mb-8">
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

        {/* COMPACT COACH SECTION (PROPORCIONAL Y BIEN DISTRIBUIDO CON REDES) */}
        <section className="py-6 sm:py-8 border-y border-[var(--line)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-2xs">
            {/* Foto Coach */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[var(--line)] bg-[var(--surface-2)] shrink-0 shadow-sm">
              <img
                src="/Foto_Perfil_Malmo_2025.jpg"
                alt="Juan David Ramírez"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-[var(--navy)] to-[#2b4c73] flex items-center justify-center text-white font-display text-xl font-semibold">
                        JR
                      </div>
                    `;
                  }
                }}
              />
            </div>

            {/* Información + Redes */}
            <div className="flex flex-col text-center sm:text-left justify-center flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                <span className="text-lg sm:text-xl font-bold text-[var(--ink)]">
                  Juan David Ramírez
                </span>
                <span className="text-xs font-mono-custom text-[var(--ink-soft)]">
                  · Coach Principal
                </span>
              </div>
              <p className="font-mono-custom text-xs text-[var(--orange)] uppercase tracking-wide mt-1">
                Líder en IA e Innovación Social, Mentor de Becas Internacionales
              </p>

              {/* Redes Sociales */}
              <div className="flex items-center justify-center sm:justify-start gap-2.5 mt-3">
                <a
                  href="https://www.instagram.com/soyjuandar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Juan David Ramírez"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-custom text-[var(--ink-soft)] hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-colors py-1 px-2.5 rounded-full bg-[var(--surface-2)] border border-[var(--line)]"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                  <span>@soyjuandar</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/juandaramirezj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Juan David Ramírez"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-custom text-[var(--ink-soft)] hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-colors py-1 px-2.5 rounded-full bg-[var(--surface-2)] border border-[var(--line)]"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ ESTE MODELO */}
        <ModelSection />

        {/* INVERSIÓN */}
        <PricingSection />

        {/* CÓMO TRABAJAMOS (ROADMAP) */}
        <RoadmapSection />

        {/* PRINCIPIOS DE TRABAJO */}
        <PrinciplesSection />

        {/* CTA FINAL */}
        <CtaSection onOpenInterest={() => onOpenInterest('Chevening Sprint', 'Me interesa. Quisiera tener más información.')} />
      </div>

      <footer className="py-8 text-center text-xs sm:text-sm text-[var(--ink-soft)] border-t border-[var(--line)]">
        Becas Sprint — Chevening Sprint · Asesoría personalizada
      </footer>
    </div>
  );
};
