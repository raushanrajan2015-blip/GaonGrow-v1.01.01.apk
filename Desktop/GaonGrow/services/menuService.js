// services/menuService.js
/**
 * Service for role‑based menu handling in GaonGrow admin UI.
 * Provides utilities to fetch menu data for a given role and to render it as HTML.
 */
import { ROLE_MENU_MAP } from '../src/config/roles.js';

/**
 * Retrieve the menu array for a specific role.
 * Falls back to HO_USER if the role is unknown.
 * @param {string} role - Role identifier (e.g., 'SUPER_ADMIN').
 * @returns {Array} Menu items for the role.
 */
export function getMenuForRole(role) {
  // Convert 'Super Admin' to 'SUPER_ADMIN' for key matching
  const key = String(role).toUpperCase().replace(/\s+/g, '_');
  return ROLE_MENU_MAP[key] || ROLE_MENU_MAP.HO_USER;
}

/**
 * Recursively render a menu tree to HTML string.
 * Supports nested sub‑menus via the `children` field.
 * @param {Array} menuItems - Array of menu item objects.
 * @returns {string} HTML markup for the menu.
 */
export function renderMenuHTML(menuItems) {
  if (!Array.isArray(menuItems)) return '';
  return menuItems
    .map(item => {
      const hasChildren = Array.isArray(item.children) && item.children.length > 0;
      if (hasChildren) {
        const subId = `submenu_${item.key}`;
        return `
          <button onclick="toggleSubmenu('${subId}')" class="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all group">
            <span class="material-symbols-outlined text-[20px] text-slate-500 group-hover:text-secondary">${item.icon}</span>
            <span class="text-[10px] font-black uppercase tracking-widest flex-1 text-left">${item.label}</span>
            <span class="material-symbols-outlined text-sm transition-transform">expand_more</span>
          </button>
          <div id="${subId}" class="hidden pl-12 pr-4 py-2 space-y-3 border-l border-white/5 ml-6">
            ${renderMenuHTML(item.children)}
          </div>`;
      }
      // Simple navigation link
      return `<a href="${item.href}" class="nav-item group flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all">
                <span class="material-symbols-outlined text-[20px] text-slate-500 group-hover:text-primary">${item.icon}</span>
                <span class="text-[10px] font-black uppercase tracking-widest flex-1">${item.label}</span>
              </a>`;
    })
    .join('\n');
}
