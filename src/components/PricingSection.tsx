import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenInterest?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenInterest }) => {
  return (
    <section id="inversion" className="py-12 sm:py-14">
      <div className="max-w-[56ch] mb-8">
        <p className="eyebrow">Inversión</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--ink)] mt-2">
          Tres sprints independientes, cada uno con su propio hito
        </h2>
        <p className="text-base text-[var(--ink-soft)] mt-3 leading-relaxed">
          Tarifa preferencial ajustada por la urgencia del cierre de Chevening. Puedes adquirir cada sprint por separado o el ciclo completo: <strong>no necesitas comprometerte a todo el proceso desde el inicio</strong>, sino avanzar paso a paso a medida que superas cada fase.
        </p>
      </div>

      {/* Nota explicativa de flexibilidad */}
      <div className="bg-[var(--surface-2)] border border-[var(--line)] rounded-xl p-4 sm:p-5 mb-6 flex items-start gap-3.5">
        <CheckCircle2 className="w-5 h-5 text-[var(--navy)] dark:text-[#8fb4de] shrink-0 mt-0.5" />
        <div className="text-sm text-[var(--ink)] leading-relaxed">
          <span className="font-semibold block text-[var(--ink)]">Flexibilidad total de contratación:</span>
          Adquieres y pagas únicamente el <strong>Sprint 1</strong> al inicio. Solo avanzas al <strong>Sprint 2</strong> o <strong>Sprint 3</strong> si decides continuar y a medida que tu postulación va progresando.
        </div>
      </div>

      <div className="border border-[var(--line)] rounded-xl overflow-hidden bg-[var(--surface)] shadow-2xs">
        {/* Table Header for Desktop */}
        <div className="hidden md:grid md:grid-cols-[1.6fr_1fr_1.3fr_1fr] gap-3 px-6 py-3.5 bg-[var(--surface-2)] border-b border-[var(--line)] font-mono-custom text-xs font-semibold tracking-wider text-[var(--ink-soft)] uppercase">
          <div>Sprint</div>
          <div>Base</div>
          <div>Bono de éxito</div>
          <div>Total posible</div>
        </div>

        {/* Row 1: Sprint 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1.3fr_1fr] gap-2 md:gap-3 p-5 md:px-6 md:py-4.5 border-b border-[var(--line)] items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono-custom text-xs font-bold px-2 py-0.5 rounded-md bg-[var(--surface-2)] text-[var(--navy)] border border-[var(--line)]">
                Sprint 1
              </span>
              <span className="font-semibold text-[var(--ink)]">
                Estrategia y ensayos
              </span>
            </div>
            <small className="block font-normal text-xs text-[var(--ink-soft)] mt-1 pl-0.5">
              Los 4 ensayos de la aplicación Chevening
            </small>
          </div>
          <div className="font-mono-custom text-sm text-[var(--ink)] flex md:block justify-between items-center">
            <span className="md:hidden text-xs font-mono-custom text-[var(--ink-soft)] uppercase">Base:</span>
            <span>$380.000 COP</span>
          </div>
          <div className="flex md:block justify-between items-start">
            <span className="md:hidden text-xs font-mono-custom text-[var(--ink-soft)] uppercase mt-0.5">Bono:</span>
            <div className="text-right md:text-left">
              <span className="font-mono-custom text-sm font-medium text-[var(--ink)] block">$150.000 COP</span>
              <span className="text-xs text-[var(--ink-soft)] leading-snug mt-0.5 block max-w-xs">
                Se activa únicamente si pasas a la shortlist de entrevista
              </span>
            </div>
          </div>
          <div className="font-mono-custom text-sm font-semibold text-[var(--navy-ink)] flex md:block justify-between items-center pt-2 md:pt-0 border-t md:border-t-0 border-[var(--line)]/50">
            <span className="md:hidden text-xs font-mono-custom text-[var(--ink-soft)] uppercase">Total:</span>
            <span>$530.000 COP</span>
          </div>
        </div>

        {/* Row 2: Sprint 2 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1.3fr_1fr] gap-2 md:gap-3 p-5 md:px-6 md:py-4.5 border-b border-[var(--line)] items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono-custom text-xs font-bold px-2 py-0.5 rounded-md bg-[var(--surface-2)] text-[var(--navy)] border border-[var(--line)]">
                Sprint 2
              </span>
              <span className="font-semibold text-[var(--ink)]">
                Admisiones y documentos
              </span>
            </div>
            <small className="block font-normal text-xs text-[var(--ink-soft)] mt-1 pl-0.5">
              CV, cartas de recomendación y trámites
            </small>
          </div>
          <div className="font-mono-custom text-sm text-[var(--ink)] flex md:block justify-between items-center">
            <span className="md:hidden text-xs font-mono-custom text-[var(--ink-soft)] uppercase">Base:</span>
            <span>$230.000 COP</span>
          </div>
          <div className="flex md:block justify-between items-start">
            <span className="md:hidden text-xs font-mono-custom text-[var(--ink-soft)] uppercase mt-0.5">Bono:</span>
            <div className="text-right md:text-left">
              <span className="font-mono-custom text-sm font-medium text-[var(--ink)] block">$115.000 COP</span>
              <span className="text-xs text-[var(--ink-soft)] leading-snug mt-0.5 block max-w-xs">
                Se activa únicamente si obtienes al menos una oferta de admisión universitaria
              </span>
            </div>
          </div>
          <div className="font-mono-custom text-sm font-semibold text-[var(--navy-ink)] flex md:block justify-between items-center pt-2 md:pt-0 border-t md:border-t-0 border-[var(--line)]/50">
            <span className="md:hidden text-xs font-mono-custom text-[var(--ink-soft)] uppercase">Total:</span>
            <span>$345.000 COP</span>
          </div>
        </div>

        {/* Row 3: Sprint 3 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1.3fr_1fr] gap-2 md:gap-3 p-5 md:px-6 md:py-4.5 border-b border-[var(--line)] items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono-custom text-xs font-bold px-2 py-0.5 rounded-md bg-[var(--surface-2)] text-[var(--navy)] border border-[var(--line)]">
                Sprint 3
              </span>
              <span className="font-semibold text-[var(--ink)]">
                Mock interview
              </span>
            </div>
            <small className="block font-normal text-xs text-[var(--ink-soft)] mt-1 pl-0.5">
              Simulacro personalizado y cierre de preparación
            </small>
          </div>
          <div className="font-mono-custom text-sm text-[var(--ink)] flex md:block justify-between items-center">
            <span className="md:hidden text-xs font-mono-custom text-[var(--ink-soft)] uppercase">Base:</span>
            <span>$130.000 COP</span>
          </div>
          <div className="flex md:block justify-between items-start">
            <span className="md:hidden text-xs font-mono-custom text-[var(--ink-soft)] uppercase mt-0.5">Bono:</span>
            <div className="text-right md:text-left">
              <span className="font-mono-custom text-sm font-medium text-[var(--ink)] block">$105.000 COP</span>
              <span className="text-xs text-[var(--ink-soft)] leading-snug mt-0.5 block max-w-xs">
                Se activa únicamente si eres seleccionado o seleccionada como becario Chevening
              </span>
            </div>
          </div>
          <div className="font-mono-custom text-sm font-semibold text-[var(--navy-ink)] flex md:block justify-between items-center pt-2 md:pt-0 border-t md:border-t-0 border-[var(--line)]/50">
            <span className="md:hidden text-xs font-mono-custom text-[var(--ink-soft)] uppercase">Total:</span>
            <span>$235.000 COP</span>
          </div>
        </div>

        {/* Row Total (Highlighted) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1.3fr_1fr] gap-2 md:gap-3 p-5 md:px-6 md:py-5 bg-[var(--navy)] text-white items-center">
          <div className="font-semibold text-white">
            Ciclo completo (3 Sprints)
            <small className="block font-normal text-xs text-white/80 mt-0.5">
              Si completas todo el proceso y resultas ganador de la beca
            </small>
          </div>
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <div className="font-mono-custom text-lg md:text-xl font-bold text-white flex md:block justify-between items-center">
            <span className="md:hidden text-xs font-mono-custom text-white/80 uppercase">Inversión total:</span>
            <span>$1.110.000 COP</span>
          </div>
        </div>
      </div>
    </section>
  );
};
