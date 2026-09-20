import React from 'react';
import { Mail, MessageCircle, ArrowUpRight, Linkedin } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer id="contacto-directo" className="w-full pt-14 pb-20 border-t border-[var(--line)] bg-[var(--surface-2)]/60 transition-colors">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Header de la sección de contacto */}
          <div className="mb-6">
            <span className="font-mono-custom text-xs font-semibold uppercase tracking-widest text-[var(--orange)] block mb-1">
              Contacto directo
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)]">
              ¿Preguntas sobre tu postulación o modalidad?
            </h3>
            <p className="text-sm text-[var(--ink-soft)] mt-1.5 max-w-lg mx-auto">
              Hablemos directamente para revisar tu caso y aclarar cualquier duda antes del cierre.
            </p>
          </div>

          {/* Direct Contact Info Card - Wide & Spaced layout */}
          <div className="w-full rounded-2xl bg-[var(--surface)] border border-[var(--line)] p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
              
              {/* WhatsApp / Teléfono */}
              <div className="flex flex-col items-center justify-center pt-2 md:pt-0 md:px-4">
                <span className="text-xs font-mono-custom text-[var(--ink-soft)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp / Teléfono
                </span>
                <a
                  id="footer-whatsapp-link"
                  href="https://wa.me/573116052531?text=Hola%20Juan%20David,%20quisiera%20informaci%C3%B3n%20sobre%20la%20asesor%C3%ADa%20de%20Beca%20Sprint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-custom text-base sm:text-lg font-bold text-[var(--navy-ink)] hover:text-[var(--orange)] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>+57 311 605 2531</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Correo Electrónico */}
              <div className="flex flex-col items-center justify-center pt-5 md:pt-0 md:px-4">
                <span className="text-xs font-mono-custom text-[var(--ink-soft)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[var(--orange)]" />
                  Correo electrónico
                </span>
                <a
                  id="footer-email-link"
                  href="mailto:juandar93@gmail.com?subject=Consulta%20Beca%20Sprint"
                  className="font-mono-custom text-sm sm:text-base font-bold text-[var(--navy-ink)] hover:text-[var(--orange)] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>juandar93@gmail.com</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* LinkedIn Profile */}
              <div className="flex flex-col items-center justify-center pt-5 md:pt-0 md:px-4">
                <span className="text-xs font-mono-custom text-[var(--ink-soft)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  Perfil profesional
                </span>
                <a
                  id="footer-linkedin-link"
                  href="https://www.linkedin.com/in/juandaramirezj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-custom text-sm sm:text-base font-bold text-[var(--navy-ink)] hover:text-[var(--orange)] transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span>in/juandaramirezj</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

          {/* Brand & Remoto Subtext */}
          <div className="mt-12 text-xs text-[var(--ink-soft)] font-normal text-center space-y-1.5">
            <p className="font-semibold text-sm text-[var(--ink)]">
              Beca Sprint — Asesoría de aplicaciones a becas internacionales
            </p>
            <p className="text-xs text-[var(--ink-soft)] opacity-85 font-mono-custom">
              Acompañamiento estratégico enfocado en resultados · Remoto
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
