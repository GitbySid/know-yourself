/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'gradient-background': "url('/assets/background.svg')",
        'button-background-1': "url('/assets/button-background-1.png')",
        'button-background-2': "url('/assets/button-background-2.png')",
        'button-background-3': "url('/assets/button-background-3.png')",
        'button-background-4': "url('/assets/button-background-4.png')",
        'button-background-5': "url('/assets/button-background-5.png')",
      },
      colors: {
        primary: '#2169ac',
        secondary: '#d4ae5c',
      },
    },
  },
  plugins: [],
};
