
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, fileUrl } = body;

        console.log(`[Email] Tentative d'envoi de ${name} vers oeclat21@gmail.com`);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const attachments = [];
        if (fileUrl && fileUrl.startsWith('data:')) {
            const [meta, data] = fileUrl.split(';base64,');
            const contentType = meta.split(':')[1];
            const extension = contentType.split('/')[1] || 'dat';

            attachments.push({
                filename: `piece_jointe_${Date.now()}.${extension}`,
                content: data,
                encoding: 'base64'
            });
            console.log(`[Email] Pièce jointe préparée (${contentType})`);
        }

        const mailOptions: any = {
            from: process.env.EMAIL_USER,
            to: 'oeclat21@gmail.com',
            subject: `Contact Ô ECLAT : ${name}`,
            text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #52b050;">Nouveau message de contact</h2>
                    <p><strong>Nom:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Téléphone:</strong> ${phone}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                    ${attachments.length > 0 ? '<p style="margin-top:20px; color: #52b050;"><strong>📎 Une pièce jointe est incluse dans cet email.</strong></p>' : ''}
                </div>
            `,
        };

        if (attachments.length > 0) {
            mailOptions.attachments = attachments;
        }

        await transporter.sendMail(mailOptions);
        console.log('[Email] Succès : Message envoyé à oeclat21@gmail.com');

        return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    } catch (error: any) {
        console.error('[Email] ERREUR :', error.message);
        return NextResponse.json({
            error: "Erreur lors de l'envoi",
            details: error.message
        }, { status: 500 });
    }
}
