// src/config/roles.js
/**
 * Role‑based menu configuration for GaonGrow admin UI.
 * Each role maps to an array of menu item objects.
 * Menu item fields:
 *  - key: unique identifier
 *  - label: display text
 *  - icon: material‑symbols name
 *  - href: target html page
 *  - children: optional sub‑menu array (same shape)
 */
export const ROLE_MENU_MAP = {
  // Super Admin – Complete structure extracted from smicrofinuat.finpage.net (Excluding IL)
  SUPER_ADMIN: [
    { key: 'dashboard', label: 'Dashboard', icon: 'dashboard', children: [
        { key: 'audit_dash', label: 'Audit Dashboard', icon: 'analytics', href: 'audit_dashboard.html' },
        { key: 'coll_status', label: 'Collection Status', icon: 'payments', href: 'collection_status.html' },
        { key: 'port_tracker', label: 'Portfolio Tracker Dashboard JLG', icon: 'monitoring', href: 'portfolio_tracker.html' },
        { key: 'fin_dash', label: 'Financial Dashboard', icon: 'account_balance', href: 'financial_dashboard.html' },
        { key: 'biz_dash', label: 'Business Dashboard', icon: 'insights', href: 'business_dashboard.html' },
        { key: 'api_dash', label: 'API Dashboard', icon: 'api', href: 'api_dashboard.html' }
    ]},
    { key: 'audit', label: 'Audit', icon: 'fact_check', children: [
        { key: 'audit_case', label: 'Audit Case', icon: 'assignment', href: 'audit_case.html' }
    ]},
    { key: 'center', label: 'Center', icon: 'apartment', children: [
        { key: 'bulk_center_transfer', label: 'Bulk Center Transfer', icon: 'move_down', href: 'bulk_center_transfer.html' },
        { key: 'bulk_center_upload', label: 'Bulk Center Upload', icon: 'upload_file', href: 'bulk_center_upload.html' },
        { key: 'surprise_visit', label: 'Surprise Visit', icon: 'visibility', href: 'surprise_visit.html' },
        { key: 'bulk_cms', label: 'Bulk CMS', icon: 'dataset', href: 'bulk_cms.html' },
        { key: 'user_center_mapping', label: 'User Center Mapping', icon: 'person_add', href: 'user_center_mapping.html' },
        { key: 'add_meeting_point', label: 'Add Meeting Point', icon: 'add_location', href: 'add_meeting_point.html' },
        { key: 'all_meeting_points', label: 'All Meeting Points', icon: 'location_on', href: 'all_meeting_points.html' },
        { key: 'meeting_reschedule', label: 'Bulk Meeting Reschedule', icon: 'event_repeat', href: 'meeting_reschedule.html' },
        { key: 'meeting_schedule', label: 'Meeting Point Schedule', icon: 'calendar_month', href: 'meeting_schedule.html' },
        { key: 'meeting_transfer', label: 'Meeting Point Transfer', icon: 'transfer_within_a_station', href: 'meeting_transfer.html' }
    ]},
    { key: 'loan_prod_ins', label: 'Loan Product & Insurance', icon: 'description', children: [
        { key: 'workflow_details', label: 'Workflow Details', icon: 'account_tree', href: 'workflow_details.html' },
        { key: 'product_class', label: 'Product Classification', icon: 'category', href: 'product_classification.html' },
        { key: 'add_product', label: 'Add Product', icon: 'add_card', href: 'add_product.html' },
        { key: 'all_products', label: 'All Products', icon: 'list_alt', href: 'all_products.html' },
        { key: 'add_insurance', label: 'Add Insurance', icon: 'health_and_safety', href: 'add_insurance.html' },
        { key: 'sms_req', label: 'SMS Req Details', icon: 'sms', href: 'sms_req_details.html' },
        { key: 'all_insurances', label: 'All Insurances', icon: 'security', href: 'all_insurances.html' },
        { key: 'loan_purpose', label: 'Loan Purpose / Sub Purpose', icon: 'help_outline', href: 'loan_purpose.html' },
        { key: 'bulk_prod_upload', label: 'Bulk Product Upload', icon: 'upload', href: 'bulk_product_upload.html' },
        { key: 'bulk_mapping', label: 'Bulk Mapping', icon: 'map', href: 'bulk_mapping.html' },
        { key: 'bulk_prod_ins', label: 'Bulk Prod Ins Mapping', icon: 'link', href: 'bulk_prod_ins_mapping.html' },
        { key: 'prod_ins_mapping', label: 'Product Insurance Mapping', icon: 'sync', href: 'product_insurance_mapping.html' }
    ]},
    { key: 'supplier_customer', label: 'Supplier & Customer', icon: 'groups', children: [
        { key: 'supplier_vendor', label: 'Supplier / Vendor', icon: 'storefront', href: 'supplier_vendor.html' },
        { key: 'customer_master', label: 'Customer Master', icon: 'person_search', href: 'customer_master.html' },
        { key: 'customer_transfer', label: 'Customer Transfer', icon: 'person_pin', href: 'customer_transfer.html' },
        { key: 'customer_settlement', label: 'Customer Settlement', icon: 'handshake', href: 'customer_settlement.html' },
        { key: 'transaction_details', label: 'Transaction Details', icon: 'receipt_long', href: 'transaction_details.html' }
    ]},
    { key: 'loan_repayments', label: 'Loan & Repayments', icon: 'payments', children: [
        { key: 'loan_app', label: 'Loan Application', icon: 'edit_note', href: 'loan_application.html' },
        { key: 'loan_approval', label: 'Loan Approval', icon: 'fact_check', href: 'loan_approval.html' },
        { key: 'disbursement', label: 'Disbursement', icon: 'outbox', href: 'disbursement.html' },
        { key: 'repayment', label: 'Repayment', icon: 'account_balance_wallet', href: 'repayment.html' },
        { key: 'pre_closure', label: 'Pre-Closure', icon: 'event_busy', href: 'pre_closure.html' },
        { key: 'foreclosure', label: 'Foreclosure', icon: 'cancel', href: 'foreclosure.html' }
    ]},
    { key: 'reports', label: 'Reports', icon: 'analytics', children: [
        { key: 'cash_banks', label: 'Cash & Banks', icon: 'account_balance', children: [
            { key: 'bank_book', label: 'Bank Book', href: 'bank_book.html' },
            { key: 'recon_stmt', label: 'Reconciliation Statement', href: 'recon_stmt.html' },
            { key: 'cash_account', label: 'Cash Account', href: 'cash_account.html' },
            { key: 'cash_book', label: 'Cash Book', href: 'cash_book.html' }
        ]},
        { key: 'rep_accounts', label: 'Accounts', href: 'reports_accounts.html' },
        { key: 'rep_loan', label: 'Loan', href: 'reports_loan.html' },
        { key: 'rep_center', label: 'Center', href: 'reports_center.html' },
        { key: 'rep_misc', label: 'Misc', href: 'reports_misc.html' },
        { key: 'rep_api', label: 'Api', href: 'reports_api.html' },
        { key: 'rep_repay', label: 'Repayments', href: 'reports_repay.html' },
        { key: 'rep_audit', label: 'Audit', href: 'reports_audit.html' },
        { key: 'rep_hr', label: 'HR', href: 'reports_hr.html' },
        { key: 'rep_staff', label: 'Staff', href: 'reports_staff.html' },
        { key: 'rep_branch', label: 'Branch', href: 'reports_branch.html' },
        { key: 'rep_supplier', label: 'Supplier', href: 'reports_supplier.html' },
        { key: 'rep_gst', label: 'GST', href: 'reports_gst.html' },
        { key: 'rep_tds', label: 'TDS Reports', href: 'reports_tds.html' },
        { key: 'rep_financial', label: 'Financial', href: 'reports_financial.html' },
        { key: 'rep_branch_rep', label: 'Branch_Reports', href: 'reports_branch_rep.html' },
        { key: 'rep_risk', label: 'Risk Master', href: 'reports_risk.html' },
        { key: 'rep_grt', label: 'GRT Detail Report', href: 'reports_grt.html' },
        { key: 'rep_inv', label: 'Branch Inventory Summary Report', href: 'reports_inv.html' }
    ]},
    { key: 'admin', label: 'Admin', icon: 'admin_panel_settings', children: [
        { key: 'admin_modules', label: 'Modules', children: [
            { key: 'adm_setup', label: 'Setup', href: 'admin_setup.html' },
            { key: 'adm_writeoff', label: 'Writeoff', href: 'admin_writeoff.html' },
            { key: 'adm_ins', label: 'Insurance', href: 'admin_insurance.html' },
            { key: 'adm_prod', label: 'Product', href: 'admin_product.html' },
            { key: 'adm_gst', label: 'GST', href: 'admin_gst.html' },
            { key: 'adm_ts_dash', label: 'Table Space Dashboard', href: 'admin_ts_dash.html' },
            { key: 'adm_lpf', label: 'LPF Master', href: 'admin_lpf.html' },
            { key: 'adm_facility', label: 'Facility Master', href: 'admin_facility.html' }
        ]},
        { key: 'gl_periods', label: 'GL & Periods', icon: 'book', children: [
            { key: 'gl_master', label: 'GL Master', href: 'gl_master.html' },
            { key: 'sub_gl', label: 'Sub GL Master', href: 'sub_gl.html' },
            { key: 'tx_source', label: 'Transaction Source Master', href: 'tx_source.html' },
            { key: 'fiscal_year', label: 'Fiscal Year Master', href: 'fiscal_year.html' },
            { key: 'period_master', label: 'Period Master', href: 'period_master.html' },
            { key: 'jv_entry', label: 'JV Entry', href: 'jv_entry.html' },
            { key: 'multi_jv', label: 'Multi JV Upload', href: 'multi_jv.html' },
            { key: 'open_bal', label: 'Opening Balances', href: 'opening_balances.html' },
            { key: 'user_gl_alloc', label: 'User Specific Branch/GL Allocation', href: 'user_gl_allocation.html' },
            { key: 'cashier_master', label: 'Cashier Master', href: 'cashier_master.html' }
        ]},
        { key: 'credit_bureau', label: 'Credit Bureau', icon: 'credit_score', children: [
            { key: 'cb_setup', label: 'Credit Bureau Setup', href: 'cb_setup.html' },
            { key: 'cb_inquiry', label: 'CB Inquiry', href: 'cb_inquiry.html' }
        ]},
        { key: 'death', label: 'Death', icon: 'sentiment_very_dissatisfied', children: [
            { key: 'death_claim', label: 'Death Claim', href: 'death_claim.html' },
            { key: 'death_mark', label: 'Death Mark', href: 'death_mark.html' }
        ]},
        { key: 'org_structure', label: 'Org Structure', icon: 'account_tree', children: [
            { key: 'biz_line', label: 'Business Line', href: 'business_line.html' },
            { key: 'biz_cat', label: 'Business Category Master', href: 'business_category.html' },
            { key: 'state_master', label: 'State Master', href: 'state_master.html' },
            { key: 'district_master', label: 'District Master', href: 'district_master.html' },
            { key: 'sub_district', label: 'Sub District Master', href: 'sub_district.html' },
            { key: 'pin_code', label: 'Pin Code Master', href: 'pin_code.html' }
        ]},
        { key: 'banks_brs', label: 'Banks & BRS', icon: 'account_balance', children: [
            { key: 'bank_master', label: 'Bank Master', href: 'bank_master.html' },
            { key: 'bank_acc', label: 'Bank Account Master', href: 'bank_account.html' },
            { key: 'brs', label: 'BRS', href: 'brs.html' },
            { key: 'cheque_book', label: 'Cheque Book Master', href: 'cheque_book.html' }
        ]}
    ]},
    { key: 'security', label: 'Security', icon: 'shield', children: [
        { key: 'perm_setup', label: 'Permission Setup', icon: 'rule', href: 'permission_setup.html' },
        { key: 'role_master', label: 'Role Master', icon: 'admin_panel_settings', href: 'role_master.html' },
        { key: 'menu_alloc', label: 'Menu Allocation', icon: 'list', href: 'menu_allocation.html' },
        { key: 'action_alloc', label: 'Menu Action Allocation', icon: 'touch_app', href: 'action_allocation.html' },
        { key: 'app_settings', label: 'Application Settings', icon: 'settings', href: 'app_settings.html' },
        { key: 'login_hist', label: 'Login History', icon: 'history', href: 'login_history.html' },
        { key: 'app_audit', label: 'Application Audit', icon: 'fact_check', href: 'application_audit.html' },
        { key: 'profile_master', label: 'Profile Master', icon: 'account_circle', href: 'profile_master.html' }
    ]},
    { key: 'employee_hr', label: 'Employee & HR', icon: 'badge', children: [
        { key: 'designation', label: 'Designation', icon: 'military_tech', href: 'designation_master.html' },
        { key: 'employee', label: 'Employee', icon: 'person', href: 'employee_list.html' },
        { key: 'func_title', label: 'Functional Title', icon: 'title', href: 'functional_title.html' },
        { key: 'grade', label: 'Grade', icon: 'grade', href: 'grade_master.html' },
        { key: 'dsa_jlg', label: 'DSA Master JLG', icon: 'group_add', href: 'dsa_master_jlg.html' },
        { key: 'emp_transfer', label: 'Employee Transfer', icon: 'transfer_within_a_station', href: 'employee_transfer.html' },
        { key: 'func_dept', label: 'Functional Department', icon: 'domain', href: 'functional_department.html' },
        { key: 'app_users', label: 'Application Users', icon: 'manage_accounts', href: 'application_users.html' },
        { key: 'user_approval', label: 'User Approval', icon: 'how_to_reg', href: 'user_approval.html' },
        { key: 'reset_pwd', label: 'Reset Password', icon: 'password', href: 'reset_password.html' },
        { key: 'dsa_upload', label: 'DSA Master Upload JLG', icon: 'upload_file', href: 'dsa_upload_jlg.html' },
        { key: 'holiday_cal', label: 'Holiday Calendar', icon: 'event', href: 'holiday_calendar.html' },
        { key: 'training_kiosk', label: 'Training Kiosk', icon: 'school', href: 'training_kiosk.html' },
        { key: 'emp_tracking', label: 'Employee Movement Tracking', icon: 'my_location', href: 'employee_tracking.html' }
    ]},
    { key: 'api_disb', label: 'API Disbursement', icon: 'cloud_download', children: [
        { key: 'api_log', label: 'API Log', icon: 'list_alt', href: 'api_log.html' },
        { key: 'api_config', label: 'API Configuration', icon: 'settings_input_component', href: 'api_configuration.html' }
    ]},
    { key: 'fund_mgmt', label: 'Fund Management', icon: 'account_balance', children: [
        { key: 'fund_source', label: 'Fund Source Master', icon: 'source', href: 'fund_source_master.html' },
        { key: 'fund_alloc', label: 'Fund Allocation', icon: 'assignment_turned_in', href: 'fund_allocation.html' }
    ]},
    { key: 'cashless', label: 'Cashless Collection', icon: 'payments', children: [
        { key: 'cashless_mode', label: 'Cashless Mode Master', icon: 'category', href: 'cashless_mode.html' },
        { key: 'cashless_log', label: 'Cashless Collection Log', icon: 'history_edu', href: 'cashless_log.html' }
    ]}
  ],
  // Head Office (HO) user – Strategic and Operational control
  HO_USER: [
    { key: 'dashboard', label: 'Dashboard', icon: 'dashboard', children: [
        { key: 'biz_dash', label: 'Business Dashboard', icon: 'insights', href: 'business_dashboard.html' },
        { key: 'fin_dash', label: 'Financial Dashboard', icon: 'account_balance', href: 'financial_dashboard.html' }
    ]},
    { key: 'center', label: 'Center', icon: 'apartment', href: 'center_management.html' },
    { key: 'loan_repayments', label: 'Loan & Repayments', icon: 'payments', children: [
        { key: 'loan_approval', label: 'Loan Approval', icon: 'fact_check', href: 'loan_approval.html' },
        { key: 'disbursement', label: 'Disbursement', icon: 'outbox', href: 'disbursement.html' }
    ]},
    { key: 'reports', label: 'Reports', icon: 'analytics', href: 'operational_reports.html' },
    { key: 'admin', label: 'Admin', icon: 'admin_panel_settings', href: 'admin_panel.html' },
    { key: 'employee_hr', label: 'Employee & HR', icon: 'badge', href: 'employee_list.html' }
  ],

  // Branch Manager – Branch specific operations
  BRANCH_MANAGER: [
    { key: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: 'admin_dashboard.html' },
    { key: 'center', label: 'Center', icon: 'apartment', href: 'center_management.html' },
    { key: 'loan_repayments', label: 'Loan & Repayments', icon: 'payments', children: [
        { key: 'loan_approval', label: 'Loan Approval', icon: 'fact_check', href: 'loan_approval.html' },
        { key: 'repayment', label: 'Repayment', icon: 'account_balance_wallet', href: 'repayment.html' }
    ]},
    { key: 'reports', label: 'Reports', icon: 'analytics', href: 'operational_reports.html' },
    { key: 'employee_hr', label: 'Employee & HR', icon: 'badge', href: 'employee_list.html' }
  ],

  // CRO (Field Officer) – Field operations, KYC, and Collections
  CRO: [
    { key: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: 'dashboard.html' },
    { key: 'center', label: 'Center', icon: 'apartment', children: [
        { key: 'add_meeting_point', label: 'Add Meeting Point', icon: 'add_location', href: 'add_meeting_point.html' },
        { key: 'all_meeting_points', label: 'All Meeting Points', icon: 'location_on', href: 'all_meeting_points.html' }
    ]},
    { key: 'loan_repayments', label: 'Loan & Repayments', icon: 'payments', children: [
        { key: 'loan_app', label: 'Loan Application', icon: 'edit_note', href: 'loan_application.html' },
        { key: 'repayment', label: 'Repayment', icon: 'account_balance_wallet', href: 'repayment.html' }
    ]},
    { key: 'cashless', label: 'Cashless Collection', icon: 'qr_code_2', href: 'collection.html' },
    { key: 'credit_bureau', label: 'Credit Bureau', icon: 'credit_score', href: 'cb_inquiry.html' },
    { key: 'reports', label: 'Reports', icon: 'analytics', href: 'operational_reports.html' }
  ],

  // Auditor – Compliance and Verification
  AUDITOR: [
    { key: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: 'admin_dashboard.html' },
    { key: 'audit', label: 'Audit', icon: 'fact_check', href: 'audit_case.html' },
    { key: 'reports', label: 'Reports', icon: 'analytics', children: [
        { key: 'rep_audit', label: 'Audit Reports', href: 'reports_audit.html' },
        { key: 'rep_risk', label: 'Risk Master', href: 'reports_risk.html' }
    ]}
  ]
};
