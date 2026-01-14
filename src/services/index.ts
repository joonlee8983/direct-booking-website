/**
 * Services Index
 * Central export point for all services.
 * This modular structure allows easy extraction to a separate backend.
 */

export { healthService } from "./health.service";
export type { HealthResponse } from "./health.service";

export { dbHealthService } from "./db-health.service";
export type { DbHealthResponse } from "./db-health.service";
