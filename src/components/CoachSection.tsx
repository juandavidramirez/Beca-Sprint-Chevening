import React, { useState } from 'react';

export const CoachSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="coach-section" className="py-12 sm:py-14">
      <div className="max-w-[56ch] mb-8">
        <p className="eyebrow">Quién es tu coach</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-0 border border-[var(--line)] rounded-xl overflow-hidden bg-[var(--surface)] shadow-2xs">
        {/* Coach Photo Container */}
        <div className="flex flex-col items-center justify-center p-6 md:p-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[var(--line)] shadow-sm bg-[var(--surface-2)] flex items-center justify-center group">
            {!imgError ? (
              <img
                id="coach-profile-image"
                src="/Foto_Perfil_Malmo_2025.jpg"
                alt="Juan David Ramírez - Coach Beca Sprint"
                className="w-full h-full object-cover object-top transition-transform group-hover:scale-105 duration-300"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[var(--navy)] to-[#2b4c73] flex flex-col items-center justify-center text-white p-3 text-center">
                <span className="font-display text-3xl font-semibold tracking-wider">JR</span>
                <span className="text-[10px] uppercase font-mono-custom opacity-75 mt-1">Juan David</span>
              </div>
            )}
          </div>
        </div>

        {/* Coach Details */}
        <div className="p-6 md:p-8 md:pl-0 flex flex-col gap-3.5 text-left">
          <div>
            <h3 className="text-2xl font-bold text-[var(--ink)]">Juan David Ramírez</h3>
            <p className="font-mono-custom text-xs font-semibold tracking-wider text-[var(--orange)] uppercase mt-0.5">
              Líder en IA e Innovación Social, Mentor de Becas Internacionales
            </p>
          </div>

          <div className="space-y-2.5 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed max-w-[62ch]">
            <p>
              Llevo más de 8 años creando y liderando programas de transformación digital, inteligencia artificial y emprendimiento de impacto social en Estados Unidos, Latinoamérica y Europa.
            </p>
            <p>
              Soy magíster en Tecnología e Innovación para el Cambio Social de la Universidad de Malmö, Suecia, becado en su totalidad por el Instituto Sueco. He ganado más de tres becas para maestría y más de cinco becas adicionales para programas cortos, financiamientos y eventos internacionales.
            </p>
            <p>
              Hoy pongo esa experiencia al servicio de otros latinos que buscan lograr sus sueños de crecimiento profesional.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="font-mono-custom text-xs text-[var(--navy-ink)] bg-[var(--surface-2)] border border-[var(--line)] px-3 py-1 rounded-full font-medium">
              Swedish Institute Scholarship
            </span>
            <span className="font-mono-custom text-xs text-[var(--navy-ink)] bg-[var(--surface-2)] border border-[var(--line)] px-3 py-1 rounded-full font-medium">
              MSc Malmö, Suecia
            </span>
            <span className="font-mono-custom text-xs text-[var(--navy-ink)] bg-[var(--surface-2)] border border-[var(--line)] px-3 py-1 rounded-full font-medium">
              +5 becas y financiamientos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
