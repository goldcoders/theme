const themeDir = __dirname + "/../../";

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    experimental: {
        uniformColorPalette: true,
        extendedFontSizeScale: true,
        applyComplexClasses: true,
    },
    purge: {
        content: [
            themeDir + "layouts/**/*.html",
            themeDir + "exampleSite/content/**/*.html",
            themeDir + "exampleSite/public/**/*.html",
            "layouts/**/*.html",
            "content/**/*.html",
            "public/**/*.html",
        ],
    },
    theme: {
        aspectRatio: {
            none: 0,
            "1": [1, 1],
            "1/2": [2, 1],
            "1/3": [3, 1],
            "1/4": [4, 1],
            "1/5": [5, 1],
            "1/6": [6, 1],
            "1/12": [12, 1],
            "16/9": [16, 9],
            "4/3": [4, 3],
            "21/9": [21, 9],
        },
        inset: {
            '0': 0,
            '1/2': '50%',
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                steel: ['Steelfish'],
                qwigley: ['Qwigley'],
                'aguafina': ['Aguafina Script']
            },
            colors: {
                brand: 'var(--color-brand)',
                'brand-75': 'var(--color-brand-75)',
                'brand-90': 'var(--color-brand-90)',
                tag: 'var(--color-tag)',
                navbar: 'var(--color-navbar)',
                'navbar-menu': 'var(--color-nav-menu)',
                'navbar-active': 'var(--color-nav-menu-active)',
                'navbar-inactive': 'var(--color-nav-menu-inactive)',
                'navbar-hover': 'var(--color-nav-menu-hover)',
                'navbar-border': 'var(--color-nav-menu-border)',
                'cart': 'var(--color-cart)',
                'cart-bubble': 'var(--color-cart-bubble)',
                'cart-count': 'var(--color-cart-count)',
                close: 'var(--color-close)',
                primary: 'var(--color-primary)',
                'primary-10': 'var(--color-primary-10)',
                'primary-20': 'var(--color-primary-20)',
                'primary-50': 'var(--color-primary-50)',
                'primary-75': 'var(--color-primary-75)',
                'primary-90': 'var(--color-primary-90)',
                light: 'var(--color-light)',
                'primary-darker': 'var(--color-primary-darker)',
                'primary-darker-75': 'var(--color-primary-darker-75)',
                'primary-darker-90': 'var(--color-primary-darker-90)',
                secondary: 'var(--color-secondary)',
                'secondary-75': 'var(--color-secondary-75)',
                'secondary-90': 'var(--color-secondary-90)',
                accent: 'var(--color-accent)',
                'accent-75': 'var(--color-accent-75)',
                'accent-90': 'var(--color-accent-90)',
                success: 'var(--color-success)',
                'success-75': 'var(--color-success-75)',
                'success-90': 'var(--color-success-90)',
                info: 'var(--color-info)',
                'info-75': 'var(--color-info-75)',
                'info-90': 'var(--color-info-90)',
                warning: 'var(--color-warning)',
                'warning-75': 'var(--color-warning-75)',
                'warning-90': 'var(--color-warning-90)',
                error: 'var(--color-error)',
                'error-75': 'var(--color-error-75)',
                'error-90': 'var(--color-error-90)',
                neutral: 'var(--color-neutral)',
                default: 'var(--color-default)',
            },
            boxShadow: {
                'outline-primary': '0 0 0 1px theme("colors.primary")',
                'outline-primary-darker': '0 0 0 1px theme("colors.primary-darker")',
                'outline-secondary': '0 0 0 1px theme("colors.secondary")',
                'outline-accent': '0 0 0 1px theme("colors.accent")',
                'outline-success': '0 0 0 1px theme("colors.success")',
                'outline-info': '0 0 0 1px theme("colors.info")',
                'outline-warning': '0 0 0 1px theme("colors.warning")',
                'outline-error': '0 0 0 1px theme("colors.error")',
                'outline-neutral': '0 0 0 1px theme("colors.neutral")',
            },
            opacity: {
                '0': '0',
                '10': '.1',
                '20': '0.2',
                '30': '.3',
                '40': '0.4',
                '50': '0.5',
                '60': '0.6',
                '70': '0.7',
                '80': '0.8',
                '90': '0.9',
                '100': '1',
            },
        }
    },
    variants: {
        aspectRatio: ["responsive"],
    },
    plugins: [
        require("@tailwindcss/ui"),
        require("tailwindcss-responsive-embed"),
        require("tailwindcss-aspect-ratio"),
        require('@tailwindcss/typography'),
    ],
};
