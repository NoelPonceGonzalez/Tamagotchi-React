/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'verde-neon': '#00FF00',
        'verde-oliva': '#808000',
        'verde-militar': '#556B2F',
        'verde-turquesa': '#3CBA39',
      },
      textColor: {
        'verde-neon': '#00FF00',
        'verde-oliva': '#808000',
        'verde-militar': '#556B2F',
        'verde-turquesa': '#40E0D0',
      },
    },
  },
  variants: {},
  plugins: [],
};

