/**
 * Auth Service
 * Provides authentication functionality.
 * Part of the modular service layer - can be extracted to a separate backend.
 */

import { createServerClient } from "@/lib/supabase/server";

export interface AuthUser {
  userId: string;
  email: string;
}

export interface AuthError {
  error: string;
}

class AuthService {
  /**
   * Gets the currently authenticated user.
   * Returns null if not authenticated.
   */
  async getCurrentUser(): Promise<AuthUser | null> {
    const supabase = await createServerClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    return {
      userId: user.id,
      email: user.email ?? "",
    };
  }

  /**
   * Signs out the current user.
   */
  async signOut(): Promise<{ error: string | null }> {
    const supabase = await createServerClient();
    const { error } = await supabase.auth.signOut();

    return { error: error?.message ?? null };
  }
}

export const authService = new AuthService();
