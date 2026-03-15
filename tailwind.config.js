/** @type {import('tailwindcss').Config} */
export default {
  // Paths to all component files for tree-shaking unused styles
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable class-based dark mode
  darkMode: 'class',
  theme: {
    extend: {
      // Custom color palette for the dark portfolio theme
      colors: {
        dark: {
          950: '#050816',
          900: '#080b1a',
          800: '#0d0f24',
          700: '#111330',
          600: '#161a3a',
          500: '#1e2345',
        },
        primary: {
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        violet: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
      },
      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', '"Cascadia Code"', 'monospace'],
      },
      // Custom animations
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      // Custom keyframe definitions
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(2deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(99,102,241,0.3), 0 0 20px rgba(99,102,241,0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(99,102,241,0.6), 0 0 40px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 10px rgba(34,211,238,0.3)' },
          '100%': { textShadow: '0 0 20px rgba(34,211,238,0.8), 0 0 40px rgba(34,211,238,0.3)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      // Custom background images for decorative elements
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': "linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)",
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
      },
      backgroundSize: {
        'cyber-grid': '50px 50px',
      },
      // Box shadows for glow effects
      boxShadow: {
        'glow-sm': '0 0 10px rgba(99,102,241,0.3)',
        'glow': '0 0 20px rgba(99,102,241,0.4), 0 0 40px rgba(99,102,241,0.1)',
        'glow-lg': '0 0 30px rgba(99,102,241,0.5), 0 0 60px rgba(99,102,241,0.2)',
        'glow-cyan': '0 0 20px rgba(34,211,238,0.4), 0 0 40px rgba(34,211,238,0.1)',
        'glow-violet': '0 0 20px rgba(168,85,247,0.4), 0 0 40px rgba(168,85,247,0.1)',
        'card': '0 4px 30px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 50px rgba(99,102,241,0.2)',
      },
      // Custom border radius
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      // Backdrop blur values
      backdropBlur: {
        xs: '2px',
      },
      // Screen size overrides
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
}
