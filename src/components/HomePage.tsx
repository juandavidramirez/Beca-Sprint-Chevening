import React from 'react';
import { Sun, Moon, ArrowRight, MessageCircle, Mail, Instagram, Linkedin } from 'lucide-react';
import { ThemeMode } from '../types';

interface HomePageProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenModal: (program?: string, defaultMsg?: string) => void;
  onNavigateToChevening: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  theme,
  toggleTheme,
  onOpenModal,
  onNavigateToChevening,
}) => {
  return (
    <div className="w-full">
      <div className="wrap">
        {/* NAV */}
        <nav className="flex justify-between items-center gap-4 flex-wrap py-5 border-b border-[var(--line)]/50 mb-4">
          <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)]">
            Becas <span className="text-[var(--orange)]">Sprint</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#programas"
              className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
            >
              Programas
            </a>
            <a
              href="#contacto"
              className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors"
            >
              Contacto
            </a>
            <button
              id="home-theme-toggle"
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
        <section className="py-10 sm:py-14">
          <p className="eyebrow mb-3">
            Asesoría para becas de posgrado en el exterior
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold leading-[1.12] max-w-[18ch] tracking-tight mb-5 text-[var(--ink)]">
            Te ayudo a ganar oportunidades para estudiar en el exterior
          </h1>
          <p className="text-lg sm:text-xl text-[var(--ink-soft)] max-w-[54ch] leading-relaxed mb-8">
            Acompañamiento estratégico para aplicaciones a becas internacionales, con un modelo de trabajo intensivo, enfocado en resultados y adaptado al programa al que estás aplicando.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#programas"
              className="inline-flex items-center gap-2 font-semibold text-[15px] px-6 py-3.5 rounded-full bg-[var(--orange)] text-[#1a1005] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
            >
              Ver programas
              <ArrowRight className="w-4 h-4" />
            </a>
            {/* CTA Secundario en azul intermedio de acentuación */}
            <button
              type="button"
              onClick={() => onOpenModal('Asesoría en Becas', 'Me interesa. Quisiera tener más información.')}
              className="inline-flex items-center gap-2 font-semibold text-[15px] px-6 py-3.5 rounded-full bg-[var(--surface-2)] text-[var(--navy)] dark:text-[#8fb4de] border border-[var(--navy)]/30 hover:bg-[var(--navy)]/10 hover:border-[var(--navy)] active:scale-[0.98] transition-all cursor-pointer"
            >
              Me interesa
            </button>
          </div>
        </section>

        {/* QUIÉN ES TU COACH (DOS COLUMNAS: FOTO Y REDES CENTRADAS EN SU COLUMNA, INFORMACIÓN AL LADO) */}
        <section className="py-12 sm:py-14">
          <div className="max-w-[56ch] mb-8">
            <p className="eyebrow">Quién es tu coach</p>
          </div>

          <div className="border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-2xs p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Columna Izquierda: Foto de Perfil centrada con respecto a sus redes */}
              <div className="flex flex-col items-center justify-center shrink-0 w-full md:w-56">
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[var(--line)] shadow-md bg-[var(--surface-2)] flex items-center justify-center group">
                  <img
                    id="coach-profile-image-home"
                    src="/Foto_Perfil_Malmo_2025.jpg"
                    alt="Juan David Ramírez"
                    className="w-full h-full object-cover object-top transition-transform group-hover:scale-105 duration-300"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-[var(--navy)] to-[#2b4c73] flex items-center justify-center text-white font-display text-4xl font-semibold">
                            JR
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Redes Sociales centradas exactamente bajo la foto */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4 w-full">
                  <a
                    href="https://www.instagram.com/soyjuandar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Juan David Ramírez"
                    className="inline-flex items-center gap-1.5 text-xs font-mono-custom text-[var(--ink-soft)] hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-colors py-1.5 px-3 rounded-full bg-[var(--surface-2)] border border-[var(--line)]"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                    <span>@soyjuandar</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/juandaramirezj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Juan David Ramírez"
                    className="inline-flex items-center gap-1.5 text-xs font-mono-custom text-[var(--ink-soft)] hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-colors py-1.5 px-3 rounded-full bg-[var(--surface-2)] border border-[var(--line)]"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Columna Derecha: Título, Subtítulo, Texto y Etiquetas alineados */}
              <div className="flex flex-col gap-4 text-left flex-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--ink)] tracking-tight">
                    Juan David Ramírez
                  </h3>
                  <p className="font-mono-custom text-xs sm:text-sm font-semibold tracking-wider text-[var(--orange)] uppercase mt-1">
                    Líder en IA e Innovación Social, Mentor de Becas Internacionales
                  </p>
                </div>

                <div className="space-y-3 text-sm sm:text-[15px] md:text-base text-[var(--ink-soft)] leading-relaxed">
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

                {/* Badges de Reconocimiento */}
                <div className="flex flex-wrap items-center justify-start gap-2.5 pt-1">
                  <span className="font-mono-custom text-xs text-[var(--navy-ink)] bg-[var(--surface-2)] border border-[var(--line)] px-3.5 py-1.5 rounded-full font-medium">
                    Swedish Institute Scholarship
                  </span>
                  <span className="font-mono-custom text-xs text-[var(--navy-ink)] bg-[var(--surface-2)] border border-[var(--line)] px-3.5 py-1.5 rounded-full font-medium">
                    +8 becas y financiamientos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMAS */}
        <section id="programas" className="py-12 sm:py-14">
          <div className="max-w-[56ch] mb-9">
            <p className="eyebrow">Programas</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--ink)] mt-2">
              Asesoría intensiva por sprints, según tu beca
            </h2>
            <p className="text-base text-[var(--ink-soft)] mt-2.5 leading-relaxed">
              Cada programa está diseñado para el proceso y los plazos específicos de una beca. Empezamos con Chevening y Swedish Institute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Chevening Sprint */}
            <div className="border border-[var(--line)] rounded-xl bg-[var(--surface)] p-7 flex flex-col justify-between gap-5 shadow-2xs hover:border-[var(--navy)]/60 transition-all">
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex items-center gap-2.5">
                    {/* Bandera del Reino Unido */}
                    <img
                      src="https://flagcdn.com/w80/gb.png"
                      srcSet="https://flagcdn.com/w160/gb.png 2x"
                      alt="Bandera del Reino Unido"
                      className="w-6 h-4.5 sm:w-7 sm:h-5 rounded-xs object-cover shadow-xs border border-[var(--line)]"
                    />
                    <h3 className="text-xl font-bold text-[var(--ink)]">Chevening Sprint</h3>
                  </div>
                  <span className="font-mono-custom text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[var(--orange-soft)] text-[var(--orange)] border border-[var(--orange)]/20 whitespace-nowrap">
                    Disponible
                  </span>
                </div>
                <p className="text-sm sm:text-[15px] text-[var(--ink-soft)] leading-relaxed">
                  Tres sprints de estrategia, ensayos, admisiones y mock interview, con pago base más bono de éxito. Pensado para el cierre de convocatoria de Chevening.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  id="home-chevening-detail-btn"
                  onClick={onNavigateToChevening}
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full bg-[var(--orange)] text-[#1a1005] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer shadow-2xs"
                >
                  Ver detalle completo
                  <ArrowRight className="w-4 h-4" />
                </button>
                {/* CTA Secundario en tono azul acentuado */}
                <button
                  id="home-chevening-interest-btn"
                  onClick={() => onOpenModal('Chevening Sprint', 'Me interesa. Quisiera tener más información.')}
                  className="inline-flex items-center justify-center gap-1.5 font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full text-[var(--navy)] dark:text-[#8fb4de] bg-[var(--surface-2)] border border-[var(--navy)]/30 hover:bg-[var(--navy)]/10 hover:border-[var(--navy)] transition-colors cursor-pointer"
                >
                  Me interesa
                </button>
              </div>
            </div>

            {/* Card 2: SI Sprint */}
            <div className="border border-[var(--line)] rounded-xl bg-[var(--surface-2)]/80 p-7 flex flex-col justify-between gap-5 shadow-2xs">
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex items-center gap-2.5">
                    {/* Bandera de Suecia */}
                    <img
                      src="https://flagcdn.com/w80/se.png"
                      srcSet="https://flagcdn.com/w160/se.png 2x"
                      alt="Bandera de Suecia"
                      className="w-6 h-4.5 sm:w-7 sm:h-5 rounded-xs object-cover shadow-xs border border-[var(--line)]"
                    />
                    <h3 className="text-xl font-bold text-[var(--ink)]">SI Sprint</h3>
                  </div>
                  <span className="font-mono-custom text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[var(--line)] text-[var(--ink-soft)] border border-[var(--line)] whitespace-nowrap">
                    Próximamente
                  </span>
                </div>
                <p className="text-sm sm:text-[15px] text-[var(--ink-soft)] leading-relaxed">
                  La misma metodología de sprints, adaptada al proceso y los plazos del Swedish Institute. En construcción por ahora.
                </p>
              </div>

              <div className="pt-2">
                {/* Botón secundario en azul de acentuación */}
                <button
                  id="home-si-interest-btn"
                  type="button"
                  onClick={() => onOpenModal('SI Sprint', 'Estoy interesado, quisiera que me avisen cuando esté disponible.')}
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full bg-[var(--surface-2)] text-[var(--navy)] dark:text-[#8fb4de] border border-[var(--navy)]/30 hover:bg-[var(--navy)]/10 hover:border-[var(--navy)] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Avísame
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* OTRAS FORMAS EN QUE PUEDO AYUDARTE */}
        <section className="py-12 sm:py-14">
          <div className="max-w-[56ch] mb-8">
            <p className="eyebrow">Otras formas en que puedo ayudarte</p>
            <p className="text-base text-[var(--ink-soft)] mt-2 leading-relaxed">
              Estos servicios todavía están en construcción. Si te interesa alguno, da clic en <strong>Me interesa</strong> y lo organizamos juntos.
            </p>
          </div>

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {/* Service 1 */}
            <div
              onClick={() => onOpenModal('Asesoría básica de orientación', 'Me interesa. Quisiera tener más información.')}
              className="flex justify-between items-center gap-4 py-5 group cursor-pointer hover:bg-[var(--surface-2)]/40 px-3 -mx-3 rounded-lg transition-colors"
            >
              <div>
                <h3 className="text-base font-bold text-[var(--ink)] group-hover:text-[var(--navy)] transition-colors">
                  Asesoría básica de orientación
                </h3>
                <div className="text-sm text-[var(--ink-soft)] mt-1 max-w-[54ch]">
                  Para quien no sabe por dónde empezar a buscar becas ni cómo armar un plan.
                </div>
              </div>
              <div className="text-xs sm:text-sm text-[var(--navy)] dark:text-[#8fb4de] font-semibold font-mono-custom shrink-0 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Me interesa →
              </div>
            </div>

            {/* Service 2 */}
            <div
              onClick={() => onOpenModal('Revisión de ensayos y cartas', 'Me interesa. Quisiera tener más información.')}
              className="flex justify-between items-center gap-4 py-5 group cursor-pointer hover:bg-[var(--surface-2)]/40 px-3 -mx-3 rounded-lg transition-colors"
            >
              <div>
                <h3 className="text-base font-bold text-[var(--ink)] group-hover:text-[var(--navy)] transition-colors">
                  Revisión de ensayos y cartas
                </h3>
                <div className="text-sm text-[var(--ink-soft)] mt-1 max-w-[54ch]">
                  Feedback puntual sobre un ensayo, carta de motivación o de recomendación ya escritos.
                </div>
              </div>
              <div className="text-xs sm:text-sm text-[var(--navy)] dark:text-[#8fb4de] font-semibold font-mono-custom shrink-0 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Me interesa →
              </div>
            </div>

            {/* Service 3 */}
            <div
              onClick={() => onOpenModal('Acompañamiento general completo', 'Me interesa. Quisiera tener más información.')}
              className="flex justify-between items-center gap-4 py-5 group cursor-pointer hover:bg-[var(--surface-2)]/40 px-3 -mx-3 rounded-lg transition-colors"
            >
              <div>
                <h3 className="text-base font-bold text-[var(--ink)] group-hover:text-[var(--navy)] transition-colors">
                  Acompañamiento general completo
                </h3>
                <div className="text-sm text-[var(--ink-soft)] mt-1 max-w-[54ch]">
                  Asesoría de principio a fin para cualquier beca o programa, fuera del formato de sprint.
                </div>
              </div>
              <div className="text-xs sm:text-sm text-[var(--navy)] dark:text-[#8fb4de] font-semibold font-mono-custom shrink-0 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Me interesa →
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO CON CALL TO ACTION ADICIONAL */}
        <section id="contacto" className="py-8 sm:py-10">
          <div className="bg-[var(--navy)] text-white rounded-2xl p-6 sm:p-8 text-center shadow-md max-w-xl mx-auto">
            <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-2">
              ¿Tienes dudas o quieres empezar?
            </h2>
            <p className="text-[#dbe6f2] max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-5">
              Escríbeme directamente o déjame tus datos y lo conversamos.
            </p>

            {/* CTA principal en la sección final */}
            <div className="flex justify-center mb-5">
              <button
                type="button"
                id="contact-section-cta-btn"
                onClick={() => onOpenModal('Becas Sprint', 'Me interesa. Quisiera tener más información.')}
                className="inline-flex items-center gap-2 font-semibold text-sm sm:text-[15px] px-6 py-2.5 rounded-full bg-[var(--orange)] text-[#1a1005] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <span>Me interesa empezar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Enlaces de contacto directo */}
            <div className="flex justify-center gap-4 sm:gap-6 flex-wrap font-mono-custom text-xs sm:text-sm items-center pt-3 border-t border-white/15 max-w-md mx-auto">
              <a
                href="https://wa.me/573116052531?text=Hola%20Juan%20David,%20quisiera%20informaci%C3%B3n%20sobre%20Becas%20Sprint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[var(--orange)] transition-colors underline font-medium inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                +57 311 605 2531
              </a>
              <span className="text-[#5b8ac2]">·</span>
              <a
                href="mailto:juandar93@gmail.com?subject=Consulta%20Becas%20Sprint"
                className="text-white hover:text-[var(--orange)] transition-colors underline font-medium inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                juandar93@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="py-8 text-center text-xs sm:text-sm text-[var(--ink-soft)] border-t border-[var(--line)]">
        Becas Sprint, asesoría de aplicaciones a becas internacionales
      </footer>
    </div>
  );
};
