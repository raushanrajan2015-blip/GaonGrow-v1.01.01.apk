// components/layout.js

document.addEventListener('DOMContentLoaded', () => {
    const isLogin = window.location.pathname.includes('login.html');
    
    // Default Title
    let pageTitle = "GaonGrow";
    if (document.title) {
        pageTitle = document.title.replace("GaonGrow - ", "");
    }

    if (!isLogin) {
        const topBar = `
        <header class="bg-white flex justify-between items-center h-16 px-4 w-full fixed top-0 z-50 border-b border-outline-variant shadow-sm">
            <div class="flex items-center gap-4">
                <button id="menu_toggle" class="active:scale-95 duration-150 p-2 hover:bg-surface-container transition-colors rounded-full flex items-center justify-center">
                    <span class="material-symbols-outlined text-on-surface">menu</span>
                </button>
                <h1 class="text-primary font-headline-md text-[20px] m-0 leading-tight">${pageTitle}</h1>
            </div>
            <div class="flex items-center gap-3">
                <div class="text-right mr-2 hidden sm:block">
                    <p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest m-0">Field Officer</p>
                    <p id="header_officer_name" class="text-sm font-bold text-primary m-0">Arjun Kumar</p>
                </div>
                <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
                    <img id="header_officer_avatar" alt="Profile" src="https://ui-avatars.com/api/?name=Arjun+Kumar&background=012d1d&color=fff"/>
                </div>
            </div>
        </header>

        <div id="side_menu" class="fixed inset-0 z-[60] hidden">
            <div id="side_menu_overlay" class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div class="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl flex flex-col transition-transform duration-300 -translate-x-full" id="side_menu_content">
                <div class="p-6 border-b border-outline-variant bg-primary text-white">
                    <h3 class="font-headline-sm">GaonGrow</h3>
                    <p class="text-xs opacity-80">Field Support System</p>
                </div>
                <nav class="p-2 flex-1 space-y-1">
                    <div class="py-2 px-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">General</div>
                    <a href="dashboard.html" class="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
                        <span class="material-symbols-outlined">dashboard</span>
                        <span class="font-label-lg">Home</span>
                    </a>
                    <hr class="mx-4 border-outline-variant" />
                    <div class="py-2 px-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Settings</div>
                    <div>
                        <button id="menu_reset_btn" class="w-full flex items-center justify-between p-4 rounded-xl hover:bg-surface transition-colors">
                            <div class="flex items-center gap-4">
                                <span class="material-symbols-outlined">restart_alt</span>
                                <span class="font-label-lg">Reset</span>
                            </div>
                            <span class="material-symbols-outlined text-[18px]" id="reset_chevron">chevron_right</span>
                        </button>
                        <div id="menu_reset_submenu" class="hidden pl-12 space-y-1">
                            <a href="login.html?reset=mpin" class="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors text-primary font-bold">
                                <span class="material-symbols-outlined text-[18px]">lock</span>
                                <span class="font-label-sm">MPIN</span>
                            </a>
                        </div>
                    </div>
                </nav>
                <div class="p-4 border-t border-outline-variant">
                    <button onclick="window.logoutUser()" class="w-full flex items-center gap-4 p-4 rounded-xl text-red-600 hover:bg-red-50 transition-colors">
                        <span class="material-symbols-outlined">logout</span>
                        <span class="font-label-lg">Sign Out</span>
                    </button>
                </div>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', topBar);

        // Sidebar Toggle Logic
        const menuToggle = document.getElementById('menu_toggle');
        const sideMenu = document.getElementById('side_menu');
        const sideMenuContent = document.getElementById('side_menu_content');
        const sideMenuOverlay = document.getElementById('side_menu_overlay');
        const resetBtn = document.getElementById('menu_reset_btn');
        const resetSubmenu = document.getElementById('menu_reset_submenu');
        const resetChevron = document.getElementById('reset_chevron');

        menuToggle.addEventListener('click', () => {
            sideMenu.classList.remove('hidden');
            setTimeout(() => sideMenuContent.classList.remove('-translate-x-full'), 10);
        });

        const closeMenu = () => {
            sideMenuContent.classList.add('-translate-x-full');
            setTimeout(() => sideMenu.classList.add('hidden'), 300);
        };

        sideMenuOverlay.addEventListener('click', closeMenu);

        resetBtn.addEventListener('click', () => {
            const isHidden = resetSubmenu.classList.contains('hidden');
            resetSubmenu.classList.toggle('hidden');
            resetChevron.style.transform = isHidden ? 'rotate(90deg)' : 'rotate(0deg)';
        });

        // Update header with real name if available
        const savedName = localStorage.getItem("saved_employee_name");
        if (savedName) {
            const nameEl = document.getElementById('header_officer_name');
            const avatarEl = document.getElementById('header_officer_avatar');
            if (nameEl) nameEl.innerText = savedName;
            if (avatarEl) avatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(savedName)}&background=012d1d&color=fff`;
        }
        
        // Add top margin to main content if not already there
        const main = document.querySelector('main');
        if (main && !main.classList.contains('mt-20')) {
            main.classList.add('mt-20');
        }

        const path = window.location.pathname;
        const tabs = [
            { path: 'dashboard.html', icon: 'dashboard', label: 'Dashboard' },
            { path: 'center_management.html', icon: 'group_work', label: 'Centers' },
            { path: 'collection.html', icon: 'payments', label: 'Collections' },
            { path: 'sync.html', icon: 'sync', label: 'Sync' }
        ];

        const navBar = `
        <nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-[72px] px-2 pb-safe bg-surface border-t border-outline-variant shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            ${tabs.map(tab => {
                const isActive = path.includes(tab.path);
                const activeClasses = isActive 
                    ? 'bg-primary-container text-on-primary-container' 
                    : 'text-on-surface-variant hover:text-primary';
                const iconFill = isActive ? '1' : '0';
                
                return `
                <a href="../screens/${tab.path}" class="flex flex-col items-center justify-center px-4 py-2 rounded-xl active:scale-95 duration-200 ease-in-out ${activeClasses} min-w-[64px]">
                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${iconFill}">${tab.icon}</span>
                    <span class="font-label-sm mt-1">${tab.label}</span>
                </a>`;
            }).join('')}
        </nav>
        `;
        document.body.insertAdjacentHTML('beforeend', navBar);
        
        // Add bottom padding to main content
        if (main && !main.classList.contains('pb-32')) {
            main.classList.add('pb-32');
        }
    }
});
