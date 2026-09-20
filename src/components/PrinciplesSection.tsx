import React from 'react';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principios" className="py-12 sm:py-14">
      <div className="max-w-[56ch] mb-9">
        <p className="eyebrow">Principios de trabajo</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--ink)] mt-2">
          Lo que puedes esperar de mí
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8">
        {/* Principle 1 */}
        <div className="flex gap-3.5 items-start">
          <span className="font-mono-custom text-[var(--green)] text-base font-semibold shrink-0 pt-0.5 select-none">
            →
          </span>
          <div>
            <h3 className="text-base font-bold text-[var(--ink)] mb-1">
              Estratega, no ghostwriter
            </h3>
            <p className="text-sm sm:text-[15px] text-[var(--ink-soft)] leading-relaxed m-0">
              Te ayudo a estructurar y afilar tu historia. La voz y la autenticidad del ensayo siguen siendo tuyas, eso es lo que el comité evalúa.
            </p>
          </div>
        </div>

        {/* Principle 2 */}
        <div className="flex gap-3.5 items-start">
          <span className="font-mono-custom text-[var(--green)] text-base font-semibold shrink-0 pt-0.5 select-none">
            →
          </span>
          <div>
            <h3 className="text-base font-bold text-[var(--ink)] mb-1">
              Rondas definidas
            </h3>
            <p className="text-sm sm:text-[15px] text-[var(--ink-soft)] leading-relaxed m-0">
              Cada sprint tiene un número de sesiones de revisión y feedback acordado desde el inicio, sin ambigüedad sobre el alcance.
            </p>
          </div>
        </div>

        {/* Principle 3 */}
        <div className="flex gap-3.5 items-start">
          <span className="font-mono-custom text-[var(--green)] text-base font-semibold shrink-0 pt-0.5 select-none">
            →
          </span>
          <div>
            <h3 className="text-base font-bold text-[var(--ink)] mb-1">
              Experiencia real, no teoría
            </h3>
            <p className="text-sm sm:text-[15px] text-[var(--ink-soft)] leading-relaxed m-0">
              Pasé por este mismo proceso para ganar una beca de gobierno y hoy trabajo con datos reales de decenas de aplicantes latinoamericanos.
            </p>
          </div>
        </div>

        {/* Principle 4 */}
        <div className="flex gap-3.5 items-start">
          <span className="font-mono-custom text-[var(--green)] text-base font-semibold shrink-0 pt-0.5 select-none">
            →
          </span>
          <div>
            <h3 className="text-base font-bold text-[var(--ink)] mb-1">
              Foco en lo que mueve la aguja
            </h3>
            <p className="text-sm sm:text-[15px] text-[var(--ink-soft)] leading-relaxed m-0">
              Con el tiempo que queda, priorizamos lo que más impacta tu probabilidad de avanzar de fase, como criterio, en lugar de un perfeccionismo sin dirección.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
