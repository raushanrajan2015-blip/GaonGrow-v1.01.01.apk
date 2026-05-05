-- Create a table for Loan Applications
create table public.loan_applications (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    officer_phone text not null, -- Tracks which field officer created it
    full_name text not null,
    phone_number text not null,
    address text not null,
    district text not null,
    postal_code text not null,
    aadhar_pan text not null,
    id_document_url text not null
);

-- Turn off RLS for this table temporarily so we can test inserts easily
alter table public.loan_applications disable row level security;

-- Create a public storage bucket for ID Documents
insert into storage.buckets (id, name, public) 
values ('id_documents', 'id_documents', true)
on conflict (id) do nothing;

-- Allow public access to the bucket
create policy "Public Access"
on storage.objects for all
using ( bucket_id = 'id_documents' );

-- -----------------------------------------------------------------------------
-- VILLAGE SURVEYS TABLE SYNC
-- Run this block to sync the new fields from the village survey module
-- -----------------------------------------------------------------------------
ALTER TABLE public.village_surveys 
  ADD COLUMN IF NOT EXISTS pincode TEXT,
  ADD COLUMN IF NOT EXISTS state TEXT,
  ADD COLUMN IF NOT EXISTS branch_name TEXT,
  ADD COLUMN IF NOT EXISTS mauja_name TEXT,
  ADD COLUMN IF NOT EXISTS total_population INT,
  ADD COLUMN IF NOT EXISTS distance_from_branch DECIMAL,
  ADD COLUMN IF NOT EXISTS nearest_bank_distance DECIMAL,
  ADD COLUMN IF NOT EXISTS police_station_distance DECIMAL,
  ADD COLUMN IF NOT EXISTS road_type TEXT,
  ADD COLUMN IF NOT EXISTS flood_affected TEXT,
  ADD COLUMN IF NOT EXISTS migration TEXT,
  ADD COLUMN IF NOT EXISTS rural_flag TEXT,
  ADD COLUMN IF NOT EXISTS village_photo TEXT;

-- Disable RLS temporarily to allow frontend inserts during development
ALTER TABLE public.village_surveys DISABLE ROW LEVEL SECURITY;
