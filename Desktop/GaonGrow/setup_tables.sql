-- Create village_surveys table
CREATE TABLE IF NOT EXISTS village_surveys (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  officer_id TEXT NOT NULL,
  officer_name TEXT,
  village_name TEXT NOT NULL,
  block_name TEXT,
  district TEXT,
  house_count INT,
  potential_members INT,
  location TEXT,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  pincode TEXT,
  state TEXT,
  branch_name TEXT,
  mauja_name TEXT,
  total_population INT,
  distance_from_branch DECIMAL,
  nearest_bank_distance DECIMAL,
  police_station_distance DECIMAL,
  road_type TEXT,
  flood_affected TEXT,
  migration TEXT,
  rural_flag TEXT,
  village_photo TEXT
);

-- -----------------------------------------------------------------------------
-- IF THE TABLE ALREADY EXISTS, RUN THE FOLLOWING COMMANDS IN SUPABASE SQL EDITOR
-- TO ADD THE MISSING COLUMNS:
-- -----------------------------------------------------------------------------
-- ALTER TABLE village_surveys 
--   ADD COLUMN IF NOT EXISTS pincode TEXT,
--   ADD COLUMN IF NOT EXISTS state TEXT,
--   ADD COLUMN IF NOT EXISTS branch_name TEXT,
--   ADD COLUMN IF NOT EXISTS mauja_name TEXT,
--   ADD COLUMN IF NOT EXISTS total_population INT,
--   ADD COLUMN IF NOT EXISTS distance_from_branch DECIMAL,
--   ADD COLUMN IF NOT EXISTS nearest_bank_distance DECIMAL,
--   ADD COLUMN IF NOT EXISTS police_station_distance DECIMAL,
--   ADD COLUMN IF NOT EXISTS road_type TEXT,
--   ADD COLUMN IF NOT EXISTS flood_affected TEXT,
--   ADD COLUMN IF NOT EXISTS migration TEXT,
--   ADD COLUMN IF NOT EXISTS rural_flag TEXT,
--   ADD COLUMN IF NOT EXISTS village_photo TEXT;
-- -----------------------------------------------------------------------------

-- Create collections table
CREATE TABLE IF NOT EXISTS collections (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  member_id TEXT, -- Link to members_kyc
  member_name TEXT,
  center_name TEXT,
  loan_id TEXT,
  demand_amount DECIMAL,
  collected_amount DECIMAL,
  payment_mode TEXT, -- CASH, UPI, ADJUSTMENT
  transaction_id TEXT,
  gps_location TEXT,
  center_photo TEXT,
  receipt_no TEXT,
  officer_id TEXT,
  collection_date DATE DEFAULT CURRENT_DATE,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add sample data for demand (testing)
-- INSERT INTO collections (center_name, member_name, demand_amount, officer_id)
-- VALUES ('Rampur 1', 'Anita Devi', 500, '1200899');

-- -----------------------------------------------------------------------------
-- APPROVE VILLAGES (FOR TESTING CENTER CREATION)
-- Run this block in Supabase SQL Editor to manually approve your test villages
-- -----------------------------------------------------------------------------
-- UPDATE public.village_surveys SET status = 'approved' WHERE status = 'draft' OR status = 'pending';
-- -----------------------------------------------------------------------------

-- Create centers table
CREATE TABLE IF NOT EXISTS centers (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  center_code TEXT UNIQUE NOT NULL,
  center_name TEXT NOT NULL,
  branch_name TEXT,
  meeting_place TEXT,
  repayment_frequency TEXT,
  center_day TEXT,
  center_time TEXT,
  officer_id TEXT NOT NULL,
  address_line_1 TEXT,
  address_line_2 TEXT,
  pincode TEXT,
  district TEXT,
  state TEXT,
  block_name TEXT,
  village_id TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Disable RLS temporarily to allow frontend inserts during development
ALTER TABLE public.centers DISABLE ROW LEVEL SECURITY;
