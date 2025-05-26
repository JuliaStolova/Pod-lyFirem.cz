// src/routes/auth/login/+page.server.ts
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    if (!email || !password) {
      return fail(400, { error: 'Email a heslo jsou vyžadovány.' });
    }

    try {
      // Auth.js handles the actual authentication
      const session = await locals.auth();

      if (!session) {
        return fail(400, { error: 'Neplatné přihlašovací údaje.' });
      }

      throw redirect(303, '/dashboard');
    } catch (error) {
      return fail(400, { error: 'Přihlašování se nezdařilo, prosím zkuste to později.' });
    }
  }
};