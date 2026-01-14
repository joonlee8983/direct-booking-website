/**
 * Database Health Service
 * Provides database connectivity verification.
 * Part of the modular service layer - can be extracted to a separate backend.
 */

import { createServerClient } from "@/lib/supabase/server";

export interface DbHealthResponse {
  ok: boolean;
  database: "connected" | "error";
  rowCount?: number;
  error?: string;
}

class DbHealthService {
  /**
   * Checks database connectivity by inserting a row and returning the count.
   */
  async checkHealth(): Promise<DbHealthResponse> {
    try {
      const supabase = await createServerClient();

      // Insert a health check record
      const { error: insertError } = await supabase
        .from("health_checks")
        .insert({});

      if (insertError) {
        return {
          ok: false,
          database: "error",
          error: insertError.message,
        };
      }

      // Get the count of records
      const { count, error: countError } = await supabase
        .from("health_checks")
        .select("*", { count: "exact", head: true });

      if (countError) {
        return {
          ok: false,
          database: "error",
          error: countError.message,
        };
      }

      return {
        ok: true,
        database: "connected",
        rowCount: count ?? 0,
      };
    } catch (error) {
      return {
        ok: false,
        database: "error",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}

export const dbHealthService = new DbHealthService();
