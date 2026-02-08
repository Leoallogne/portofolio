/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // slate-900
        surface: '#1e293b',    // slate-800
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          light: '#60a5fa',   // blue-400
          dark: '#2563eb',    // blue-600
        },
        secondary: {
          DEFAULT: '#06b6d4', // cyan-500
          light: '#22d3ee',   // cyan-400
          dark: '#0891b2',    // cyan-600
        },
        accent: {
          DEFAULT: '#a855f7', // purple-500
          light: '#c084fc',   // purple-400
          dark: '#9333ea',    // purple-600
        },
        dark: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          lighter: '#334155',
        },
      },
      boxShadow: {
        'blue-glow': '0 0 10px rgba(56, 189, 248, 0.5)',
      },
      transitionTimingFunction: {
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'sidebar': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)',
      },
    },
  },
  plugins: [],
}
