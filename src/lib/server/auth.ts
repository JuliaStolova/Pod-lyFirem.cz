import db from '$lib/server/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { createTransport } from 'nodemailer';

export function generateRandomString(length: number = 32) : string {
    return crypto.randomBytes(length).toString('hex');
}

export async function login(email: string, password: string): Promise<{ success: boolean; userId?: string; error?: string }> {
    type UserRow = { id: string; password: string };
    const user = db.prepare('SELECT id, password FROM users WHERE email = ?').get(email) as UserRow | undefined;
    if (!user) {
        return { success: false, error: 'Uživatel nebyl nalezen.' };
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return { success: false, error: 'Neplatné heslo.' };
    }
    return { success: true, userId: user.id };
}


// export async function hashPassword(password: string): Promise<string> {
//     return await bcrypt.hash(password, 10);
// }

// export async function verifyPassword(
//     password: string,
//     hash: string
// ): Promise<boolean> {
//     return await bcrypt.compare(password, hash);
// }

// export async function sendVerificationToken(userId: string): Promise<string> {
//     const token = generateRandomString();
//     db.prepare(`
//         UPDATE users
//         SET verification_token = ?
//         WHERE id = ?
//     `).run(token, userId);
//     return token;
// }

// export async function verifyEmailToken(token: string): Promise<boolean> {
//     const result = db.prepare(`
//         UPDATE users
//         SET verified = TRUE, verification_token = NULL
//         WHERE verification_token = ?
//         RETURNING id
//     `).get(token);

//     return !!result;
// }

// const transporter = createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT),
//     secure: true,
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//     },
// });

// export async function sendVerificationEmail(email: string, token: string): Promise<void> {
//     const verificationUrl = `${process.env.BASE_URL}/auth/verify-email?token=${token}`;

//     await transporter.sendMail({
//         from: `PodilyFirem-noreply@${process.env.SMTP_HOST}`,
//         to: email,
//         subject: 'Ověření emailu',
//         html: `
//             <p>Vážený uživateli,</p>
//             <p>děkujeme za registraci na našem webu PodílyFirem. Prosím, ověřte svůj email kliknutím níže:</p>
//             <span style="display: inline-block; background-color:#1170D5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
//                 <a href="${verificationUrl}" style="color: white; text-decoration: none;">Ověřit email</a>
//                 </span>
//                 <p>Pokud jste se registrovali omylem, můžete tento email ignorovat.</p>
//                 <p>S pozdravem,</p>
//                 <p>Tým PodílyFirem</p>
//         `,
//     })
// }

// export async function createPasswordResetToken(email: string): Promise<string | null> {
//     const token = generateRandomString();
    
//     const result = db.prepare(`
//         UPDATE users 
//         SET reset_token = ?
//         WHERE email = ?
//         RETURNING id
//     `).get(token, email);

//     return result ? token : null;
// }

// export async function verifyResetToken(token: string): Promise<boolean> {
//     const user = db.prepare(`
//         SELECT id FROM users 
//         WHERE reset_token = ?
//     `).get(token);

//     return !!user;
// }