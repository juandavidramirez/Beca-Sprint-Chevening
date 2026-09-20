import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenInterest: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenInterest }) => {
  return (
    <section id="cta-section" className="py-8 sm:py-10">
      <div className="bg-[var(--navy)] text-white rounded-2xl p-6 sm:p-8 md:p-10 text-center shadow-md relative overflow-hidden max-w-xl mx-auto">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2.5">
          Quedan 2.5 semanas para el cierre de Chevening
        </h2>
        <p className="text-[#dbe6f2] max-w-[44ch] mx-auto text-sm sm:text-base leading-relaxed mb-6">
          Inicia tu preparación con acompañamiento estratégico uno a uno y asegura tu lugar en la convocatoria antes del cierre.
        </p>

        <div>
          <button
            id="main-cta-btn"
            onClick={onOpenInterest}
            className="inline-flex items-center justify-center gap-2 bg-[var(--orange)] text-[#1a1005] font-semibold text-sm sm:text-[15px] px-7 py-2.5 rounded-full hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-sm"
          >
            Estoy interesado
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-4 text-xs text-[#9fb3c8] max-w-md mx-auto leading-relaxed">
          Cupos limitados por la ventana de tiempo hasta el 6 de octubre.
        </p>
      </div>
    </section>
  );
};
