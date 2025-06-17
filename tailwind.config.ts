import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#181818',
        white: '#ffffff',
        yellow: {
          50: '#fffbe6',
          100: '#fff6bf',
          200: '#ffe066',
          300: '#ffd633',
          400: '#fbd913', // Amarelo principal
          500: '#f1b921', // Amarelo queimado
          600: '#cfa10f',
          700: '#a67c00',
        },
        orange: {
          50: '#fff3e6',
          100: '#ffe0cc',
          200: '#ffc299',
          300: '#ffad80',
          400: '#eb894f', // Laranja principal
          500: '#c96c2b',
          600: '#a6531a',
          700: '#7a3a0a',
        },
        cyan: {
          50: '#e6fcfa',
          100: '#bff7f0',
          200: '#7eeadd',
          300: '#47d1bc', // Ciano principal
          400: '#2bb39c',
          500: '#1e8c7a',
          600: '#16695c',
          700: '#0d4237',
        },
        primary: {
          DEFAULT: '#fbd913', // Amarelo principal
          dark: '#f1b921', // Amarelo queimado
        },
        secondary: {
          DEFAULT: '#eb894f', // Laranja principal
        },
        accent: {
          DEFAULT: '#47d1bc', // Ciano principal
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#181818', // Preto
        },
        success: {
          DEFAULT: '#47d16a', // Verde complementar
        },
        error: {
          DEFAULT: '#eb4f4f', // Vermelho complementar
        },
        info: {
          DEFAULT: '#47a3d1', // Azul complementar
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
