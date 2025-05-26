import { fail, redirect } from '@sveltejs/kit';
import db from '$lib/server/db';
import bcrypt from 'bcryptjs';
import { generateRandomString } from '$lib/server/auth';
import type { Actions } from './$types';

export const actions: Actions = {
    register: async ({ request }) => {
        const formData = await request.formData();

        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();
        const name = formData.get('name')?.toString();
        const surname = formData.get('surname')?.toString();

        if (!email || !password) {
            return fail(400, { error: 'Email a heslo jsou požadovány.' });
        }

        try {

            const existingUser = db
                .prepare('SELECT * FROM users WHERE email = ?')
                .get(email);

            if (existingUser) {
                return fail(400, { error: 'Uživatel s tímto emailem již existuje!' });
            }

            const passwordHash = await bcrypt.hash(password, 10);
            const verificationToken = generateRandomString(32);

            db.prepare(`
        INSERT INTO users (email, password_hash, name, surname, verification_token)
        VALUES (?, ?, ?, ?, ?)`).run(
                crypto.randomUUID(),
                email,
                passwordHash,
                name,
                surname,
                verificationToken
            );

            console.log('Verification token:', verificationToken);

            return {
                success: true,
            }
        } catch (error) {
            console.error('Error during registration:', error);
            return fail(500, { error: 'Chyba při registraci uživatele.' });
        }

    }

}