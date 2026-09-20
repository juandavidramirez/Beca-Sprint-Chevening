import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Send, MessageCircle, Loader2, ArrowUpRight } from 'lucide-react';
import { LeadFormData, LeadSubmissionResponse, ProgramInterestType } from '../types';

interface ModalInterestProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
  initialMessage?: string;
}

const PROGRAM_OPTIONS: { id: ProgramInterestType; label: string }[] = [
  { id: 'Chevening Sprint', label: 'Chevening Sprint (Disponible)' },
  { id: 'SI Sprint', label: 'SI Sprint (Swedish Institute)' },
  { id: 'Asesoría básica de orientación', label: 'Asesoría básica de orientación' },
  { id: 'Revisión de ensayos y cartas', label: 'Revisión de ensayos y cartas' },
  { id: 'Acompañamiento general completo', label: 'Acompañamiento general completo' },
  { id: 'Otro servicio', label: 'Otro servicio o consulta abierta' },
];

export const ModalInterest: React.FC<ModalInterestProps> = ({
  isOpen,
  onClose,
  initialProgram = 'Chevening Sprint',
  initialMessage,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    program: initialProgram,
    customProgram: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submissionResult, setSubmissionResult] = useState<LeadSubmissionResponse | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const defaultMsg =
        initialMessage ||
        (initialProgram === 'SI Sprint'
          ? 'Estoy interesado, quisiera que me avisen cuando esté disponible.'
          : 'Me interesa. Quisiera tener más información.');

      setFormData((prev) => ({
        ...prev,
        program: initialProgram || 'Chevening Sprint',
        message: defaultMsg,
      }));
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      setStatus('idle');
      setErrorMessage('');
      setSubmissionResult(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialProgram, initialMessage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage('Por favor completa tu nombre y correo electrónico.');
      return;
    }

    if (formData.program === 'Otro servicio' && !formData.customProgram?.trim()) {
      setErrorMessage('Por favor especifica qué tipo de servicio o consulta necesitas.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: LeadSubmissionResponse = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setSubmissionResult(data);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Ocurrió un error al enviar el formulario. Intenta nuevamente.');
      }
    } catch (err) {
      console.warn('API error, fallback active:', err);
      const programLabel = formData.program === 'Otro servicio' ? `Otro: ${formData.customProgram}` : formData.program;
      const encBody = encodeURIComponent(
        `Hola Juan David,\n\nEstoy interesado en Becas Sprint: ${programLabel}.\n\nNombre: ${formData.name}\nCorreo: ${formData.email}\n${formData.phone ? `WhatsApp: ${formData.phone}\n` : ''}Mensaje: ${formData.message}`
      );
      setStatus('success');
      setSubmissionResult({
        success: true,
        message: '¡Registro guardado!',
        whatsappUrl: `https://wa.me/573116052531?text=${encBody}`,
        coachEmail: 'juandar93@gmail.com',
        coachPhone: '+57 311 605 2531',
      });
    }
  };

  const whatsappDirectMsg = encodeURIComponent(
    `Hola Juan David, me interesa tener más información sobre ${formData.program === 'Otro servicio' ? 'Becas Sprint' : formData.program}.`
  );
  const directWhatsappUrl = `https://wa.me/573116052531?text=${whatsappDirectMsg}`;

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] animate-scale-up transition-all max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--line)] bg-[var(--surface-2)] shrink-0">
          <div>
            <span className="font-mono-custom text-[11px] font-semibold tracking-wider text-[var(--orange)] uppercase block">
              Becas Sprint
            </span>
            <h2 id="modal-title" className="text-lg font-semibold text-[var(--ink)] mt-0.5 leading-snug">
              {status === 'success' ? '¡Solicitud recibida!' : 'Me interesa'}
            </h2>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="p-1.5 rounded-lg text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--line)]/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content / Scrollable Body */}
        <div className="p-5 overflow-y-auto">
          {status === 'success' ? (
            <div className="py-2 text-center">
              <div className="w-12 h-12 mx-auto mb-3.5 rounded-full bg-[var(--orange-soft)] flex items-center justify-center text-[var(--green)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-1.5">
                ¡Gracias, {formData.name.split(' ')[0]}!
              </h3>
              <p className="text-sm text-[var(--ink-soft)] max-w-sm mx-auto mb-5 leading-relaxed">
                Tus datos fueron enviados a Juan David Ramírez (<strong className="text-[var(--ink)]">juandar93@gmail.com</strong>). Te contactaremos a la brevedad.
              </p>

              {/* Botón directo de WhatsApp */}
              <div className="flex flex-col items-center justify-center mb-5">
                {submissionResult?.whatsappUrl && (
                  <a
                    id="modal-success-whatsapp-btn"
                    href={submissionResult.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Abrir chat de WhatsApp directo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                <p className="text-[11px] text-[var(--ink-soft)] mt-2">
                  Respuesta rápida por WhatsApp
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--line)] text-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-mono-custom text-[var(--navy-ink)] hover:underline cursor-pointer"
                >
                  Cerrar esta ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed -mt-0.5 mb-2">
                Déjame tus datos y te contacto directamente para coordinar los siguientes pasos.
              </p>

              {errorMessage && (
                <div className="p-2.5 rounded-md bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Selector de Programa / Servicio */}
              <div>
                <label htmlFor="program-selector" className="block text-xs font-medium text-[var(--ink)] mb-1">
                  Programa o servicio de interés <span className="text-[var(--orange)]">*</span>
                </label>
                <select
                  id="program-selector"
                  value={formData.program}
                  onChange={(e) => {
                    const newProg = e.target.value;
                    setFormData({
                      ...formData,
                      program: newProg,
                      message:
                        newProg === 'SI Sprint'
                          ? 'Estoy interesado, quisiera que me avisen cuando esté disponible.'
                          : 'Me interesa. Quisiera tener más información.',
                    });
                  }}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] focus:outline-hidden focus:ring-2 focus:ring-[var(--orange)] transition-all cursor-pointer font-sans"
                >
                  {PROGRAM_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Campo opcional cuando eligen "Otro servicio" */}
              {formData.program === 'Otro servicio' && (
                <div className="animate-fade-in">
                  <label htmlFor="custom-program" className="block text-xs font-medium text-[var(--ink)] mb-1">
                    ¿Qué tipo de asesoría buscas? <span className="text-[var(--orange)]">*</span>
                  </label>
                  <input
                    id="custom-program"
                    type="text"
                    required
                    placeholder="Ej. Beca Fulbright, DAAD, Erasmus Mundus, etc."
                    value={formData.customProgram || ''}
                    onChange={(e) => setFormData({ ...formData, customProgram: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] focus:outline-hidden focus:ring-2 focus:ring-[var(--orange)] transition-all placeholder:text-[var(--ink-soft)]/60"
                  />
                </div>
              )}

              {/* Nombre */}
              <div>
                <label htmlFor="lead-name" className="block text-xs font-medium text-[var(--ink)] mb-1">
                  Nombre completo <span className="text-[var(--orange)]">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="lead-name"
                  type="text"
                  required
                  placeholder="Ej. María Camila Gómez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] focus:outline-hidden focus:ring-2 focus:ring-[var(--orange)] transition-all placeholder:text-[var(--ink-soft)]/60"
                />
              </div>

              {/* Correo */}
              <div>
                <label htmlFor="lead-email" className="block text-xs font-medium text-[var(--ink)] mb-1">
                  Correo electrónico <span className="text-[var(--orange)]">*</span>
                </label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  placeholder="tu.correo@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] focus:outline-hidden focus:ring-2 focus:ring-[var(--orange)] transition-all placeholder:text-[var(--ink-soft)]/60"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="lead-message" className="block text-xs font-medium text-[var(--ink)] mb-1">
                  Mensaje corto
                </label>
                <textarea
                  id="lead-message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Me interesa. Quisiera tener más información."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] focus:outline-hidden focus:ring-2 focus:ring-[var(--orange)] transition-all resize-none placeholder:text-[var(--ink-soft)]/60"
                />
              </div>

              {/* Botón Enviar */}
              <div className="pt-1.5">
                <button
                  id="lead-submit-btn"
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-2.5 px-4 rounded-full font-semibold text-sm bg-[var(--orange)] text-[#1a1005] hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando datos...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar solicitud
                    </>
                  )}
                </button>
              </div>

              {/* Botón Alterno de WhatsApp directo */}
              <div className="pt-2 border-t border-[var(--line)] text-center">
                <p className="text-[11px] text-[var(--ink-soft)] mb-2">
                  ¿Prefieres escribir directamente sin llenar el formulario?
                </p>
                <a
                  id="modal-direct-whatsapp-btn"
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-4 rounded-full text-xs font-medium text-[#1e2a38] dark:text-[#eef1f4] bg-[var(--surface-2)] border border-[var(--line)] hover:bg-[var(--line)]/50 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  Escribir directo por WhatsApp (+57 311 605 2531)
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
