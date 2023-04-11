/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100'
      },
      translate: {
        'screen': '100vh',
      },
      fontFamily: {
        'moon-dance': ['Moon Dance', 'cursive'],
        'lora': ['Lora', 'sans-serif'],
        'satisfy': ['Satisfy', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'Dancing+Script', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 5s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        marquee: 'marquee 60s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
        'marquee-medium': 'marquee 50s linear infinite',
        marquee2: 'marquee2 120s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-90%)',
          },
        },
        marquee2: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0
          },
          '3%': {
            opacity: 1
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        glow: {
          '0%, 100%': {
            transform: 'rotate(-1deg)',
            opacity: '25%',
            // '--tw-blur': 'blur(40px)',
            // filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
          },
          '50%': {
            transform: 'rotate(1deg)',
            opacity: '50%',
            // '--tw-blur': 'blur(64px)',
            // filter: 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)',
          },
        }
      },
      colors: {
        primary:{
          DEFAULT: '#023e8a',
          light: '#023e8a'
        },
        sage: {
          DEFAULT: '#9DC183',
          pale: '#77AA79'
        },
        buzz: {
          purple: {
            DEFAULT: '#895DDA'
          },
          green: {
            DEFAULT: '#82D43C',
          },
          cream: '#F5C290',
          white: '#FBFBFB',
          gray: '#A89EA8',
          red: '#DB382D',
        },
        dark: {
          DEFAULT: '#000000'
        }
      }
    },
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
