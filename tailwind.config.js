const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                rose: colors.rose,
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },

            animation: {
                'accordion': 'accordion 1s'
            },

            keyframes: {
                'accordion': {
                    from: {
                        maxHeight: '0',
                        animationTimingFunction: 'linear',
                    },
                    to: {
                        maxHeight: '600px',
                        animationTimingFunction: 'linear',
                    },
                }
            }
        },
    },
    variants: {
        extend: {

        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
