export type ProgramInterestType = 
  | 'Chevening Sprint'
  | 'SI Sprint'
  | 'Asesoría básica de orientación'
  | 'Revisión de ensayos y cartas'
  | 'Acompañamiento general completo'
  | 'Otro servicio';

export interface LeadFormData {
  program: string;
  customProgram?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface LeadSubmissionResponse {
  success: boolean;
  message: string;
  leadId?: string;
  error?: string;
  whatsappUrl?: string;
  mailtoUrl?: string;
  coachEmail?: string;
  coachPhone?: string;
}

export type ThemeMode = 'system' | 'light' | 'dark';
