// src/hooks.server.ts
import { SvelteKitAuth } from "@auth/sveltekit";
import Credentials from "@auth/sveltekit/providers/credentials";
import db from "$lib/server/db";
import bcrypt from "bcryptjs";
import type { User } from "@auth/core/types";

interface DatabaseUser {
  id: number;
  email: string;
  password_hash: string;
}

interface Credentials {
  email?: string;
  password?: string;
}

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(
        credentials: Partial<Record<"email" | "password", unknown>>
      ): Promise<User | null> {
        try {
          if (
            typeof credentials?.email !== "string" ||
            typeof credentials?.password !== "string"
          ) {
            throw new Error("Missing credentials");
          }

          // 2. Get user from database
          const user = db
            .prepare("SELECT * FROM users WHERE email = ?")
            .get(credentials.email) as DatabaseUser | undefined;

          if (!user) {
            throw new Error("User not found");
          }

          // 3. Verify password with proper type checking
          const passwordMatch = await bcrypt.compare(
            String(credentials.password), // Explicit string conversion
            user.password_hash
          );

          if (!passwordMatch) {
            throw new Error("Invalid password");
          }

          // 4. Return user in Auth.js format
          return {
            id: String(user.id),
            email: user.email,
            name: user.email.split("@")[0] // Optional but recommended
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  trustHost: true,
  pages: {
    signIn: "/auth/login"
  },
});