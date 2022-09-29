/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '350px',
        md: '650px',
        lg: '850px',
        xl: '1250px',
      },
    },
  },
  plugins: [],
};
