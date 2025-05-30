import type { DefaultSession } from "@auth/core/types";
import type { TypedSupabaseClient } from "@supabase/supabase-js";
import type { session } from "@supabase/supabase-js";

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
      sb: TypedSupabaseClient;
      session: session | null;
    }
  }
}

export {};