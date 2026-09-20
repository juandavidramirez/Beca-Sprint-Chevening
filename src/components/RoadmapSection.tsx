import React from 'react';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-12 sm:py-14">
      <div className="max-w-[56ch] mb-9">
        <p className="eyebrow">Cómo trabajamos</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--ink)] mt-2">
          Un roadmap flexible, pensado para el tiempo que tengas
        </h2>
        <p className="text-base text-[var(--ink-soft)] mt-3 leading-relaxed">
          Con 2.5 semanas hasta el cierre, el ritmo se adapta a tu punto de partida: si ya tienes borradores, entramos directo a revisarlos.
        </p>
      </div>

      <div className="flex flex-col">
        {/* Step 01 */}
        <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-4 sm:gap-5 py-6 border-b border-[var(--line)]">
          <div className="font-mono-custom text-[var(--orange)] text-sm sm:text-base font-semibold pt-0.5">
            01
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--ink)] mb-1.5">
              Alineamiento inicial
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed m-0">
              Sesión obligatoria de arranque: aterrizamos tu historia, tu propósito y el hilo narrativo que va a conectar los cuatro ensayos. Si ya tienes ensayos escritos, entramos directo a revisarlos en esta misma sesión.
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-4 sm:gap-5 py-6 border-b border-[var(--line)]">
          <div className="font-mono-custom text-[var(--orange)] text-sm sm:text-base font-semibold pt-0.5">
            02
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--ink)] mb-1.5">
              Construcción y revisión de ensayos
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed m-0 mb-4">
              Elegimos juntos el ritmo que mejor se ajuste a tu tiempo disponible:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-3">
              <div className="bg-[var(--surface-2)] rounded-lg p-4 text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed">
                <b className="block text-[var(--ink)] text-sm font-semibold mb-1">
                  Ensayo por ensayo
                </b>
                Revisión profunda de uno a la vez, ideal si empiezas desde cero.
              </div>

              <div className="bg-[var(--surface-2)] rounded-lg p-4 text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed">
                <b className="block text-[var(--ink)] text-sm font-semibold mb-1">
                  Por parejas
                </b>
                Avanzamos dos ensayos en paralelo, para ganar tiempo.
              </div>

              <div className="bg-[var(--surface-2)] rounded-lg p-4 text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed">
                <b className="block text-[var(--ink)] text-sm font-semibold mb-1">
                  Todos + refinamiento
                </b>
                Si ya tienes los cuatro escritos, una ronda general y luego ajuste fino.
              </div>
            </div>
          </div>
        </div>

        {/* Step 03 */}
        <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-4 sm:gap-5 py-6">
          <div className="font-mono-custom text-[var(--orange)] text-sm sm:text-base font-semibold pt-0.5">
            03
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--ink)] mb-1.5">
              Sesión de feedback
            </h3>
            <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed m-0">
              Cada ronda de revisión, sin importar la modalidad elegida, cierra con una sesión de retroalimentación en vivo, donde ajustamos juntos lo que necesite afinarse antes de pasar al siguiente paso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
