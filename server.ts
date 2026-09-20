import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';

interface Lead {
  id: string;
  program: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  targetEmail: string;
  createdAt: string;
  userAgent?: string;
  status: 'received' | 'notified';
}

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

function saveLead(lead: Lead) {
  try {
    let leads: Lead[] = [];
    if (fs.existsSync(LEADS_FILE)) {
      const data = fs.readFileSync(LEADS_FILE, 'utf-8');
      leads = JSON.parse(data);
    }
    leads.unshift(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving lead to file:', err);
  }
}

// Helper to get Resend instance safely
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey && apiKey.trim() !== '') {
    return new Resend(apiKey.trim());
  }
  return null;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Route: Register Interest / Contact Form
  app.post('/api/interest', async (req: Request, res: Response) => {
    const { name, email, phone, message, program, customProgram } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Por favor completa tu nombre y correo electrónico.',
      });
    }

    const selectedProgram = program === 'Otro servicio' && customProgram?.trim() 
      ? `Otro: ${customProgram.trim()}` 
      : (program || 'Chevening Sprint');

    const lead: Lead = {
      id: 'LEAD-' + Date.now().toString(36).toUpperCase(),
      program: selectedProgram,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : '',
      message: String(message || 'Estoy interesado en el programa').trim(),
      targetEmail: 'juandar93@gmail.com',
      createdAt: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      status: 'received',
    };

    saveLead(lead);

    console.log(`\n========================================`);
    console.log(`NUEVO INTERESADO EN BECAS SPRINT`);
    console.log(`Fecha: ${new Date().toLocaleString('es-CO')}`);
    console.log(`Programa: ${lead.program}`);
    console.log(`Nombre: ${lead.name}`);
    console.log(`Email: ${lead.email}`);
    if (lead.phone) console.log(`WhatsApp/Tel: ${lead.phone}`);
    console.log(`Mensaje: ${lead.message}`);
    console.log(`Destinatario Notificación: juandar93@gmail.com`);
    console.log(`========================================\n`);

    // Trigger Resend email delivery
    let emailSent = false;
    const resend = getResendClient();

    if (resend) {
      try {
        const emailHtml = `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
            <div style="border-bottom: 2px solid #ea580c; padding-bottom: 16px; margin-bottom: 20px;">
              <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #ea580c;">Becas Sprint</span>
              <h2 style="margin: 6px 0 0 0; color: #0f172a; font-size: 22px;">¡Nuevo Interesado: ${lead.program}!</h2>
            </div>

            <p style="font-size: 14px; color: #475569; line-height: 1.5;">
              Un candidato ha completado el formulario de interés en la plataforma de <strong>Becas Sprint</strong>:
            </p>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
              <tr style="background-color: #fff7ed; border-bottom: 1px solid #fed7aa;">
                <td style="padding: 10px 14px; font-weight: 600; color: #9a3412; width: 140px;">Programa / Servicio:</td>
                <td style="padding: 10px 14px; color: #9a3412; font-weight: 700;">${lead.program}</td>
              </tr>
              <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 14px; font-weight: 600; color: #334155;">Nombre:</td>
                <td style="padding: 10px 14px; color: #0f172a; font-weight: 700;">${lead.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 14px; font-weight: 600; color: #334155;">Correo:</td>
                <td style="padding: 10px 14px; color: #0f172a;"><a href="mailto:${lead.email}" style="color: #2563eb; text-decoration: none;">${lead.email}</a></td>
              </tr>
              ${lead.phone ? `
              <tr style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 14px; font-weight: 600; color: #334155;">WhatsApp / Tel:</td>
                <td style="padding: 10px 14px; color: #0f172a;"><a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" style="color: #16a34a; text-decoration: none; font-weight: 600;">${lead.phone} (Clic para chatear)</a></td>
              </tr>` : ''}
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 14px; font-weight: 600; color: #334155;">Mensaje:</td>
                <td style="padding: 10px 14px; color: #0f172a;">${lead.message}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px 14px; font-weight: 600; color: #334155;">Fecha de registro:</td>
                <td style="padding: 10px 14px; color: #64748b;">${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
              Notificación automática · Becas Sprint Lead Management
            </div>
          </div>
        `;

        const { data, error } = await resend.emails.send({
          from: 'Becas Sprint <onboarding@resend.dev>',
          to: ['juandar93@gmail.com'],
          replyTo: lead.email,
          subject: `🎯 Nuevo Interesado (${lead.program}): ${lead.name}`,
          html: emailHtml,
        });

        if (error) {
          console.error('Resend delivery error:', error);
        } else {
          console.log(`Correo enviado exitosamente vía Resend ID: ${data?.id}`);
          emailSent = true;
          lead.status = 'notified';
        }
      } catch (emailErr) {
        console.error('Failed to send email via Resend:', emailErr);
      }
    }

    // Prepare direct links for user immediate engagement
    const encodedMessage = encodeURIComponent(
      `Hola Juan David, me registré en Becas Sprint para: ${lead.program}.\n\nNombre: ${lead.name}\nCorreo: ${lead.email}\n${lead.phone ? `Tel: ${lead.phone}\n` : ''}Mensaje: ${lead.message}`
    );
    const whatsappUrl = `https://wa.me/573116052531?text=${encodedMessage}`;
    const mailtoUrl = `mailto:juandar93@gmail.com?subject=${encodeURIComponent(`Interesado en ${lead.program}: ${lead.name}`)}&body=${encodeURIComponent(`Hola Juan David,\n\nQuisiera información sobre ${lead.program}.\n\nNombre: ${lead.name}\nCorreo: ${lead.email}\n${lead.phone ? `Tel: ${lead.phone}\n` : ''}Mensaje: ${lead.message}\n`)}`;

    return res.status(200).json({
      success: true,
      message: '¡Gracias! Tu información fue registrada con éxito.',
      leadId: lead.id,
      emailNotified: emailSent,
      whatsappUrl,
      mailtoUrl,
      coachEmail: 'juandar93@gmail.com',
      coachPhone: '+57 311 605 2531',
    });
  });

  // Health endpoint
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'Becas Sprint API', timestamp: new Date().toISOString() });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Becas Sprint server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
