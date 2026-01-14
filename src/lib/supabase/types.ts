/**
 * Database Types
 * These types define the shape of our Supabase database.
 * In a larger project, these can be auto-generated using `supabase gen types typescript`
 */

export interface Database {
  public: {
    Tables: {
      health_checks: {
        Row: {
          id: number;
          created_at: string;
        };
        Insert: {
          id?: never;
          created_at?: never;
        };
        Update: {
          id?: number;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type HealthCheck = Database["public"]["Tables"]["health_checks"]["Row"];
