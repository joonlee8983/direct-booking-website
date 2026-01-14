/**
 * Health Service
 * Provides health check functionality for the application.
 * Part of the modular service layer - can be extracted to a separate backend.
 */

export interface HealthResponse {
  ok: boolean;
  timestamp: string;
  environment: string;
}

class HealthService {
  /**
   * Returns the current health status of the application.
   */
  getHealth(): HealthResponse {
    return {
      ok: true,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
    };
  }
}

export const healthService = new HealthService();
