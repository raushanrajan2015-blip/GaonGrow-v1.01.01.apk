// config/tailwind-setup.js
const head = document.head;

// Inject fonts and global styles
head.insertAdjacentHTML('beforeend', `
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<style>
  .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
  body { min-height: 100vh; }
</style>
`);

// Setup tailwind config
window.tailwind = {
    config: {
        darkMode: "class",
        theme: {
            extend: {
                "colors": {
                "background": "#f7f9ff",
                "error": "#ba1a1a",
                "error-container": "#ffdad6",
                "inverse-on-surface": "#eef1f6",
                "inverse-primary": "#a5d0b9",
                "inverse-surface": "#2d3135",
                "on-background": "#181c20",
                "on-error": "#ffffff",
                "on-error-container": "#93000a",
                "on-primary": "#ffffff",
                "on-primary-container": "#86af99",
                "on-primary-fixed": "#002114",
                "on-primary-fixed-variant": "#274e3d",
                "on-secondary": "#ffffff",
                "on-secondary-container": "#703800",
                "on-secondary-fixed": "#2f1400",
                "on-secondary-fixed-variant": "#6f3800",
                "on-surface": "#181c20",
                "on-surface-variant": "#414844",
                "on-tertiary": "#ffffff",
                "on-tertiary-container": "#9fac71",
                "on-tertiary-fixed": "#171e00",
                "on-tertiary-fixed-variant": "#404b1b",
                "outline": "#717973",
                "outline-variant": "#c1c8c2",
                "primary": "#012d1d",
                "primary-container": "#1b4332",
                "primary-fixed": "#c1ecd4",
                "primary-fixed-dim": "#a5d0b9",
                "secondary": "#924c00",
                "secondary-container": "#fda055",
                "secondary-fixed": "#ffdcc4",
                "secondary-fixed-dim": "#ffb781",
                "surface": "#f7f9ff",
                "surface-bright": "#f7f9ff",
                "surface-container": "#ebeef3",
                "surface-container-high": "#e5e8ee",
                "surface-container-highest": "#e0e3e8",
                "surface-container-low": "#f1f4f9",
                "surface-container-lowest": "#ffffff",
                "surface-dim": "#d7dadf",
                "surface-tint": "#3f6653",
                "surface-variant": "#e0e3e8",
                "tertiary": "#202a00",
                "tertiary-container": "#354011",
                "tertiary-fixed": "#dbe9a9",
                "tertiary-fixed-dim": "#bfcd8f"
            },
            "borderRadius": {
                "sm": "0.25rem",
                "DEFAULT": "0.5rem",
                "md": "0.75rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "full": "9999px"
            },
            "spacing": {
                "base": "8px",
                "xs": "4px",
                "sm": "8px",
                "md": "16px",
                "lg": "24px",
                "xl": "32px",
                "xxl": "48px",
                "edge-margin": "20px",
                "gutter": "16px",
                "tap-target-min": "56px",
                "margin": "24px"
            },
            "fontFamily": {
                "headline-lg": ["Public Sans"],
                "headline-md": ["Public Sans"],
                "headline-sm": ["Public Sans"],
                "body-lg": ["Public Sans"],
                "body-md": ["Public Sans"],
                "label-lg": ["Public Sans"],
                "label-sm": ["Public Sans"],
                "title-lg": ["Public Sans"],
                "display-lg": ["Public Sans"],
                "data-mono": ["Public Sans"],
                "label-md": ["Public Sans"]
            },
            "fontSize": {
                "headline-lg": ["30px", {"lineHeight": "38px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                "headline-sm": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "600"}],
                "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.04em", "fontWeight": "500"}],
                "title-lg": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                "display-lg": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "data-mono": ["16px", {"lineHeight": "24px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.04em", "fontWeight": "600"}]
            }
        }
    }
};

// Tailwind CDN is now loaded directly in the HTML <head> for better reliability.
