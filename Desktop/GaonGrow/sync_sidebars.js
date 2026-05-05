import fs from 'fs';
import path from 'path';

// Read the premium template
const templatePath = path.join(process.cwd(), 'components', 'sidebar_template.html');
const sidebarHtml = fs.readFileSync(templatePath, 'utf8');

const filesToUpdate = [
    'screens/admin_dashboard.html',
    'screens/employee_list.html',
    'screens/branch_list.html',
    'screens/role_management.html',
    'screens/profile_master.html',
    'screens/village_management.html',
    'screens/center_management.html',
    'screens/approval_queue.html',
    'screens/user_management.html',
    'screens/village_list.html',
    'screens/village_survey.html',
    'screens/branch_audit_entry.html',
    'screens/operational_reports.html',
    'screens/fund_management.html',
    'screens/gl_accounting.html',
    'screens/security_panel.html',
    'screens/org_structure.html',
    'screens/collection.html',
    'screens/select_center.html',
    'screens/center_creation.html',
    'screens/cgt_meeting.html',
    'screens/kyc_manual.html'
];

filesToUpdate.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');
    const asideRegex = /<aside[\s\S]*?<\/aside>/;
    
    let finalSidebar = sidebarHtml;

    // Helper to clear or set active state
    const setActive = (key, isActive) => {
        const activeClass = 'bg-white/5 border border-white/5 shadow-lg';
        const iconClass = 'text-secondary scale-110';
        const textClass = 'text-white font-black';
        
        finalSidebar = finalSidebar
            .replace(`{{active_${key}}}`, isActive ? activeClass : '')
            .replace(`{{icon_active_${key}}}`, isActive ? iconClass : 'text-slate-500')
            .replace(`{{text_active_${key}}}`, isActive ? textClass : 'text-slate-400');
    };

    // Apply Logic
    setActive('dashboard', file.includes('admin_dashboard.html'));
    setActive('reports', file.includes('operational_reports.html'));
    setActive('gl', file.includes('gl_accounting.html'));
    setActive('fund', file.includes('fund_management.html'));

    // Inject Sidebar (Replace existing backdrop + aside block)
    const combinedRegex = /(<!-- PREMIUM SIDEBAR TEMPLATE -->[\s\S]*?<\/aside>)|(<aside[\s\S]*?<\/aside>)/;
    
    if (content.match(combinedRegex)) {
        content = content.replace(combinedRegex, finalSidebar);
    } else {
        // If no sidebar block found, inject it after the body starts
        content = content.replace(/<body([^>]*)>/, `<body$1>\n\n${finalSidebar}`);
    }

    // Add Hamburger Menu Button to Header if missing
    const headerRegex = /<header([^>]*)>/;
    const menuBtnHtml = `
    <!-- Hamburger Menu Toggle (Mobile Only) -->
    <button onclick="toggleSidebar()" class="lg:hidden p-2 -ml-2 active:scale-95 transition-transform text-white mr-2 shrink-0">
        <span class="material-symbols-outlined">menu</span>
    </button>`;

    if (content.match(headerRegex) && !content.includes('toggleSidebar()')) {
        content = content.replace(headerRegex, `<header$1>${menuBtnHtml}`);
    }

    // Ensure body has flex on large screens if desired, or just use fixed positioning
    // Our sidebar is fixed, so we don't necessarily need body flex for it.

    fs.writeFileSync(fullPath, content);
    console.log(`Updated: ${file}`);
});

console.log('Premium Sidebar Sync Complete with Mobile Support.');
