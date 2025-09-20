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
        // Design system colors from design.json
        primary: {
          background: '#0F1419',
          backgroundLighter: '#1A1F26',
          surface: '#252A32',
          surfaceHover: '#2A3038',
          accent: '#4A9EFF',
          accentHover: '#3A8EEF',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B8C1',
          muted: '#8A9199',
          accent: '#4A9EFF',
        },
        borders: {
          default: '#2A3038',
          subtle: '#1E232A',
          accent: '#4A9EFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
