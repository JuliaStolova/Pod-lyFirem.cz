import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/core/providers/google";
import type { Handle } from "@sveltejs/kit";

const auth = SvelteKitAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  trustHost: true,
});

export const handle: Handle = auth.handle;