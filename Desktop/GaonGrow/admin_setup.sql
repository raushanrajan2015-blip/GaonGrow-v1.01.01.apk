-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Roles Table
CREATE TABLE IF NOT EXISTS roles (
    role_id TEXT PRIMARY KEY,
    role_name TEXT NOT NULL,
    permissions JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Branches Table
CREATE TABLE IF NOT EXISTS branches (
    branch_code TEXT PRIMARY KEY,
    branch_name TEXT NOT NULL,
    region TEXT,
    city TEXT,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT UNIQUE NOT NULL, -- Format: GMPL0001
    name TEXT NOT NULL,
    mobile TEXT,
    email TEXT UNIQUE,
    password TEXT NOT NULL,
    role_id TEXT REFERENCES roles(role_id),
    branch_codes TEXT[] DEFAULT '{}', -- Multi-branch mapping
    status TEXT DEFAULT 'active', -- active, inactive
    must_change_password BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Audit Logs
CREATE TABLE IF NOT EXISTS admin_audit_logs (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id TEXT,
    action TEXT,
    resource TEXT,
    details JSONB,
    ip_address TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Auto-ID Generation Logic
-- Function to get next GMPL ID
CREATE OR REPLACE FUNCTION get_next_gmpl_id()
RETURNS TEXT AS $$
DECLARE
    last_id TEXT;
    next_num INTEGER;
BEGIN
    SELECT user_id INTO last_id 
    FROM admin_users 
    WHERE user_id LIKE 'GMPL%' 
    ORDER BY user_id DESC 
    LIMIT 1;
    
    IF last_id IS NULL THEN
        RETURN 'GMPL0001';
    ELSE
        next_num := CAST(SUBSTRING(last_id FROM 5) AS INTEGER) + 1;
        RETURN 'GMPL' || LPAD(next_num::TEXT, 4, '0');
    END IF;
END;
$$ LANGUAGE plpgsql;

-- 6. Initial Data Seeding
INSERT INTO roles (role_id, role_name, permissions) VALUES
('SUPER_ADMIN', 'Super Admin', '{"full_access": true}'),
('OPS_MANAGER', 'Operations Manager', '{"view_reports": true, "approve_disbursement": true, "monitor_centers": true}'),
('CREDIT_MANAGER', 'Credit Manager', '{"approve_loan": true, "reject_loan": true, "view_risk": true}'),
('BRANCH_MANAGER', 'Branch Manager', '{"view_branch_data": true, "approve_center": true, "cash_verification": true}'),
('CRO', 'Field Officer', '{"create_kyc": true, "collection": true, "center_meeting": true}');

-- Initial Super Admin (Password: Admin@123 - should be hashed in production)
INSERT INTO admin_users (user_id, name, password, role_id, must_change_password)
VALUES ('GMPL0001', 'Super Admin', 'Admin@123', 'SUPER_ADMIN', false);

-- Sample Branches
INSERT INTO branches (branch_code, branch_name, region, city) VALUES
('BR001', 'Gorakhpur Main', 'Purvanchal', 'Gorakhpur'),
('BR002', 'Deoria Town', 'Purvanchal', 'Deoria'),
('BR003', 'Lucknow North', 'Central UP', 'Lucknow');
