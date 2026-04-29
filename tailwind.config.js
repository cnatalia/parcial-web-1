/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
       "colors": {
                "surface-container-highest": "#e0e3e6",
                "secondary-fixed-dim": "#8dd3ce",
                "surface-dim": "#d8dadd",
                "on-primary": "#ffffff",
                "outline": "#747684",
                "background": "#f7f9fc",
                "inverse-surface": "#2d3133",
                "on-tertiary-fixed-variant": "#52405e",
                "inverse-primary": "#b6c4ff",
                "on-secondary-fixed-variant": "#00504d",
                "secondary-fixed": "#a9efea",
                "tertiary-container": "#a993b6",
                "primary": "#3557bd",
                "on-primary-fixed": "#00164f",
                "surface": "#f7f9fc",
                "on-tertiary-container": "#3d2c49",
                "on-tertiary": "#ffffff",
                "tertiary": "#6a5777",
                "inverse-on-surface": "#eff1f4",
                "on-background": "#191c1e",
                "on-error": "#ffffff",
                "error-container": "#ffdad6",
                "surface-container": "#eceef1",
                "secondary": "#1d6965",
                "on-secondary-fixed": "#00201e",
                "on-primary-fixed-variant": "#153da4",
                "on-tertiary-fixed": "#241530",
                "error": "#ba1a1a",
                "surface-container-low": "#f2f4f7",
                "surface-container-lowest": "#ffffff",
                "primary-fixed": "#dce1ff",
                "secondary-container": "#a6ece7",
                "surface-variant": "#e0e3e6",
                "on-surface": "#191c1e",
                "surface-bright": "#f7f9fc",
                "tertiary-fixed-dim": "#d6bee3",
                "outline-variant": "#c4c5d5",
                "surface-tint": "#3557bd",
                "primary-container": "#7695ff",
                "tertiary-fixed": "#f2daff",
                "primary-fixed-dim": "#b6c4ff",
                "on-error-container": "#93000a",
                "on-surface-variant": "#444653",
                "surface-container-high": "#e6e8eb",
                "on-secondary": "#ffffff",
                "on-secondary-container": "#236d69",
                "on-primary-container": "#002a82"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "lg": "40px",
                "xs": "4px",
                "xl": "64px",
                "unit": "8px",
                "md": "24px",
                "gutter": "24px",
                "container-max": "1200px",
                "sm": "12px"
            },
            "fontFamily": {
                "label-caps": ["Plus Jakarta Sans"],
                "button": ["Plus Jakarta Sans"],
                "headline-md": ["Plus Jakarta Sans"],
                "display-lg": ["Plus Jakarta Sans"],
                "body-lg": ["Plus Jakarta Sans"],
                "body-sm": ["Plus Jakarta Sans"]
            },
            "fontSize": {
                "label-caps": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "700"}],
                "button": ["14px", {"lineHeight": "1", "letterSpacing": "0.01em", "fontWeight": "600"}],
                "headline-md": ["24px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                "display-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "body-lg": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                "body-sm": ["14px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}]
            }
    },
  },
  plugins: [],
};