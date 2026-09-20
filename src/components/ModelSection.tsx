import React from 'react';

export const ModelSection: React.FC = () => {
  return (
    <section id="modelo" className="py-12 sm:py-14">
      <div className="max-w-[56ch] mb-9">
        <p className="eyebrow">Por qué este modelo</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--ink)] mt-2">
          Un modelo donde el riesgo y el beneficio se dividen entre los dos
        </h2>
        <p className="text-base text-[var(--ink-soft)] mt-3 leading-relaxed">
          La mayoría de asesorías cobran una tarifa fija sin importar el resultado. Aquí la base cubre el tiempo de trabajo real, como investigación, borradores y sesiones, y el bono de éxito solo se activa cuando tú avanzas de fase. Así el incentivo queda alineado: mientras mejor te vaya, mejor nos va a los dos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1: Base Fija */}
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-lg p-6 sm:p-7 shadow-2xs transition-colors">
          <h3 className="text-lg font-bold text-[var(--ink)] mb-2.5">
            Base fija
          </h3>
          <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
            Cubre el trabajo de cada sprint independientemente del resultado: sesiones de estrategia, retroalimentación sobre ensayos, preparación de documentos. Es lo que garantiza dedicación y tiempo real contigo.
          </p>
        </div>

        {/* Card 2: Bono de Éxito */}
        <div className="bg-[var(--orange-soft)] border border-transparent rounded-lg p-6 sm:p-7 transition-colors">
          <h3 className="text-lg font-bold text-[var(--ink)] mb-2.5">
            Bono de éxito
          </h3>
          <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
            Se paga solo si alcanzas el hito de ese sprint, como pasar a shortlist, recibir una oferta de admisión o ganar la beca. No es un cobro por esfuerzo, es un reconocimiento por resultado.
          </p>
        </div>
      </div>
    </section>
  );
};
