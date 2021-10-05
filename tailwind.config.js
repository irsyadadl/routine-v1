const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                rose: colors.rose,
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                tiny: '15px',
            },
            animation: {
                'accordion': 'accordion 1s'
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
