/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F7F4',
        'primary-text': '#0B1320',
        'secondary-text': '#4B5563',
        'accent-blue': '#3B82F6',
        'cta-green': '#16C47F',
        'dark-section': '#071B34',
        border: 'rgba(11,19,32,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      boxShadow: {
        'soft-ambient': '0 10px 40px rgba(0,0,0,0.06)',
      },
      spacing: {
        'section-gap': '120px',
      },
      borderRadius: {
        'premium': '24px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'hover-lift': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2px)', boxShadow: '0 15px 45px -10px rgba(0, 0, 0, 0.06)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'hover-lift': 'hover-lift 0.2s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
