import type { DefaultSession } from "@auth/core/types";

declare module "@auth/core/types" {
  interface Session extends DefaultSession {
    user?: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare global {
  namespace App {
    interface Locals {
      auth: import("@auth/sveltekit").SvelteKitAuthSession;
    }
  }
}

export {};