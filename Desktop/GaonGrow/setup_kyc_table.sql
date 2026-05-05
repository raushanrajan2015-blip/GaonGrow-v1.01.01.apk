-- Production-grade members_kyc table for NBFC-MFI standards
CREATE TABLE IF NOT EXISTS members_kyc (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  officer_id TEXT NOT NULL,
  center_id TEXT NOT NULL,
  group_id TEXT,
  branch_id TEXT,
  village_id TEXT,
  
  -- 1. Member Basic Details
  full_name TEXT NOT NULL,
  aadhaar_id TEXT UNIQUE NOT NULL,
  voter_id TEXT,
  father_name TEXT NOT NULL,
  mother_name TEXT NOT NULL,
  marital_status TEXT NOT NULL,
  education TEXT,
  dob DATE NOT NULL,
  age INT NOT NULL,
  gender TEXT DEFAULT 'Female',
  mobile TEXT NOT NULL,
  caste TEXT,
  religion TEXT,
  member_photo TEXT,
  
  -- 2. Spouse Details
  spouse_aadhaar TEXT,
  spouse_name TEXT,
  spouse_dob DATE,
  spouse_age INT,
  spouse_gender TEXT,
  spouse_relation TEXT,
  
  -- 3. Address Details
  perm_address_line1 TEXT NOT NULL,
  perm_address_line2 TEXT,
  perm_landmark TEXT,
  perm_pincode TEXT NOT NULL,
  perm_village TEXT NOT NULL,
  perm_district TEXT NOT NULL,
  perm_state TEXT NOT NULL,
  
  corr_address_line1 TEXT,
  corr_pincode TEXT,
  corr_district TEXT,
  corr_state TEXT,
  
  -- 4. Financial Details
  occupation TEXT NOT NULL,
  monthly_income DECIMAL DEFAULT 0,
  annual_income DECIMAL DEFAULT 0,
  years_at_address INT,
  poverty_line_status TEXT,
  house_type TEXT,
  house_ownership_flag BOOLEAN DEFAULT FALSE,
  
  -- 4b. Bank Details
  bank_account_no TEXT,
  bank_ifsc TEXT,
  bank_name TEXT,
  
  -- 5. Monthly Expenses
  exp_education DECIMAL DEFAULT 0,
  exp_food DECIMAL DEFAULT 0,
  exp_medical DECIMAL DEFAULT 0,
  exp_rent DECIMAL DEFAULT 0,
  exp_clothes DECIMAL DEFAULT 0,
  exp_electricity DECIMAL DEFAULT 0,
  exp_transport DECIMAL DEFAULT 0,
  exp_school_fees DECIMAL DEFAULT 0,
  exp_others DECIMAL DEFAULT 0,
  total_monthly_expense DECIMAL DEFAULT 0,
  
  -- 6. Asset & Accommodation
  livestock_type TEXT,
  livestock_market_value DECIMAL DEFAULT 0,
  accommodation_type TEXT,
  land_size TEXT,
  land_value DECIMAL DEFAULT 0,
  irrigation_status TEXT,
  land_ownership BOOLEAN DEFAULT FALSE,
  is_agriculture BOOLEAN DEFAULT FALSE,
  
  -- Expanded Amenities (JSONB for flexibility or individual columns)
  amenities JSONB DEFAULT '[]'::jsonb,
  
  -- 7. Co-Insured Details
  co_insured_relation TEXT,
  co_insured_name TEXT,
  co_insured_dob DATE,
  co_insured_gender TEXT,
  co_insured_kyc_type TEXT,
  co_insured_kyc_id TEXT,
  co_insured_secondary_kyc_type TEXT,
  co_insured_secondary_kyc_id TEXT,
  
  -- 8. Loan Details
  loan_tenure INT NOT NULL,
  product_name TEXT NOT NULL,
  loan_amount DECIMAL NOT NULL,
  purpose_id TEXT,
  
  -- 9. Nominee Details
  nominee_relation TEXT,
  nominee_name TEXT,
  nominee_dob DATE,
  
  -- 10. Documents
  doc_id_proof_1 TEXT,
  doc_id_proof_2 TEXT,
  doc_spouse_kyc TEXT,
  doc_coinsured_kyc TEXT,
  doc_bank TEXT,
  doc_family TEXT,
  
  -- Status & Timing
  status TEXT DEFAULT 'Submitted',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure RLS is disabled for development
ALTER TABLE public.members_kyc DISABLE ROW LEVEL SECURITY;
