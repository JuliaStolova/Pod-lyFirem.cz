import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import db from '$lib/server/db';

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      // Auth.js handles the actual authentication
      const user = await locals.auth.signInWithPassword({
        email: String(email),
        password: String(password)
      });

      if (!user) {
        return fail(400, { error: 'Invalid credentials' });
      }

      // Check if email is verified
      const dbUser = db
        .prepare('SELECT verified FROM users WHERE email = ?')
        .get(email) as { verified: boolean };

      if (!dbUser?.verified) {
        throw redirect(303, '/auth/verify-email');
      }

      throw redirect(303, '/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      return fail(400, { error: 'Login failed. Please try again.' });
    }
  }
};