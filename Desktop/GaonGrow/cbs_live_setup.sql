-- CBS LIVE INFRASTRUCTURE TABLES
-- Setup for Funds, Accounting, Security, and Audits

-- 1. Bank Accounts (Treasury)
CREATE TABLE IF NOT EXISTS bank_accounts (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    bank_name TEXT NOT NULL,
    account_number TEXT UNIQUE NOT NULL,
    ifsc_code TEXT NOT NULL,
    account_type TEXT DEFAULT 'Current',
    balance DECIMAL(15, 2) DEFAULT 0.00,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Branch Funding & Limits
CREATE TABLE IF NOT EXISTS branch_funding (
    branch_code TEXT PRIMARY KEY REFERENCES branches(branch_code),
    assigned_limit DECIMAL(15, 2) DEFAULT 500000.00,
    current_cash DECIMAL(15, 2) DEFAULT 0.00,
    last_funded_at TIMESTAMPTZ,
    status TEXT DEFAULT 'normal' -- normal, alert, critical
);

-- 3. GL Chart of Accounts
CREATE TABLE IF NOT EXISTS gl_accounts (
    gl_code TEXT PRIMARY KEY,
    gl_name TEXT NOT NULL,
    gl_group TEXT NOT NULL, -- ASSET, LIABILITY, EQUITY, INCOME, EXPENSE
    balance DECIMAL(15, 2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Vouchers (Accounting Entries)
CREATE TABLE IF NOT EXISTS vouchers (
    voucher_id TEXT PRIMARY KEY, -- Format: JV/PV/RV-YYYY-XXXX
    voucher_type TEXT NOT NULL, -- JOURNAL, PAYMENT, RECEIPT
    particulars TEXT,
    debit_gl TEXT REFERENCES gl_accounts(gl_code),
    credit_gl TEXT REFERENCES gl_accounts(gl_code),
    amount DECIMAL(15, 2) NOT NULL,
    status TEXT DEFAULT 'pending', -- pending, approved, rejected
    created_by TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Security Policies
CREATE TABLE IF NOT EXISTS security_policies (
    policy_key TEXT PRIMARY KEY,
    policy_value TEXT NOT NULL,
    description TEXT
);

-- 6. Branch Audit Reports
CREATE TABLE IF NOT EXISTS branch_audit_reports (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    audit_id TEXT UNIQUE, -- AUD-YYYY-XXXX
    branch_code TEXT REFERENCES branches(branch_code),
    auditor_id TEXT,
    audit_date DATE NOT NULL,
    cash_system DECIMAL(15, 2),
    cash_physical DECIMAL(15, 2),
    variance DECIMAL(15, 2),
    kyc_status BOOLEAN,
    rating TEXT, -- A, B, C, D
    remarks TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SEED DATA
INSERT INTO bank_accounts (bank_name, account_number, ifsc_code, balance) VALUES
('HDFC Bank', '50100012345678', 'HDFC0000123', 8245000.00),
('State Bank of India', '33445566778', 'SBIN0000456', 4155000.00);

INSERT INTO gl_accounts (gl_code, gl_name, gl_group, balance) VALUES
('1001', 'Cash in Hand', 'ASSET', 4155000.00),
('1002', 'Bank Balances', 'ASSET', 12400000.00),
('2001', 'Loan Portfolio', 'ASSET', 8500000.00),
('3001', 'Staff Salaries', 'EXPENSE', 0.00),
('4001', 'Interest Income', 'INCOME', 0.00);

INSERT INTO security_policies (policy_key, policy_value, description) VALUES
('MIN_PASSWORD_LENGTH', '8', 'Minimum characters for admin passwords'),
('PASSWORD_EXPIRY_DAYS', '90', 'Days before password must be changed'),
('MAX_LOGIN_RETRIES', '5', 'Max attempts before IP block'),
('IP_RESTRICTION_ENABLED', 'true', 'Enable/Disable IP whitelisting');

INSERT INTO branch_funding (branch_code, assigned_limit, current_cash)
SELECT branch_code, 1500000.00, 1245000.00 FROM branches WHERE branch_code = 'BR001';
INSERT INTO branch_funding (branch_code, assigned_limit, current_cash, status)
SELECT branch_code, 2500000.00, 2410000.00, 'alert' FROM branches WHERE branch_code = 'BR002';
