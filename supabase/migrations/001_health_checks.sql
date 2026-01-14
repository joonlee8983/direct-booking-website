-- Phase 2: Health Checks Table
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

CREATE TABLE IF NOT EXISTS health_checks (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE health_checks ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts and reads for health checks
CREATE POLICY "Allow anonymous health checks" ON health_checks
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Add comment
COMMENT ON TABLE health_checks IS 'Simple table to verify database connectivity';
