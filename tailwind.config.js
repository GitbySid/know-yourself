/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-background': "url('../public/assets/background.svg')",
        'button-background-1':
          "url('../public/assets/button-background-1.svg')",
        'button-background-2':
          "url('../public/assets/button-background-2.svg')",
        'button-background-3':
          "url('../public/assets/button-background-3.svg')",
        'button-background-4':
          "url('../public/assets/button-background-4.svg')",
        'button-background-5':
          "url('../public/assets/button-background-5.svg')",
      },
      colors: {
        primary: '#2169ac',
        secondary: '#d4ae5c',
        'orange-light': '#eb6c46',
        'orange-medium': '#b84928',
        'orange-dark': '#9f3616',
      },
    },
  },
  plugins: [],
};
