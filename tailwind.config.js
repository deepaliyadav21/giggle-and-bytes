/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#20565c',
        secondary: '#22c754',
        accent: '#0070f3',
        success: '#0bab64',
        warning: '#fb3e3e',
        error: '#d6249f',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        serif: ['serif'],
      },
      animation: {
        'border-pulse': 'borderPulse 1000ms infinite ease-out',
        'color-shift': 'colorShift 10000ms infinite ease-in',
        'shiny-btn': 'shiny-btn1 3s ease-in-out infinite',
      },
      keyframes: {
        borderPulse: {
          '0%': {
            boxShadow: 'inset 0px 0px 0px 5px rgba(255, 255, 255, 0.4), 0px 0px 0px 0px rgba(255, 255, 255, 1)',
          },
          '100%': {
            boxShadow: 'inset 0px 0px 0px 3px rgba(117, 117, 255, 0.2), 0px 0px 0px 10px rgba(255, 255, 255, 0)',
          },
        },
        colorShift: {
          '0%, 100%': { background: '#0045e6' },
          '33%': { background: '#fb3e3e' },
          '66%': { background: '#0dcc00' },
        },
        'shiny-btn1': {
          '0%': { transform: 'scale(0) rotate(45deg)', opacity: '0' },
          '80%': { transform: 'scale(0) rotate(45deg)', opacity: '0.5' },
          '81%': { transform: 'scale(4) rotate(45deg)', opacity: '1' },
          '100%': { transform: 'scale(50) rotate(45deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}