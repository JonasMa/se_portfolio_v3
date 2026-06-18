import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'glitch-shift': "glitch-shift 700ms steps(8) forwards",
      },
      keyframes: {
        'glitch-shift': {
          '0%':   { transform: 'translate(4px, -1px)',  opacity: '0.8' },
          '15%':  { transform: 'translate(-3px, 1px)',  opacity: '0.8' },
          '30%':  { transform: 'translate(3px, 1px)',   opacity: '0.7' },
          '45%':  { transform: 'translate(-2px, -1px)', opacity: '0.6' },
          '60%':  { transform: 'translate(2px, 0)',     opacity: '0.5' },
          '75%':  { transform: 'translate(-1px, 0)',    opacity: '0.4' },
          '90%':  { transform: 'translate(1px, 0)',     opacity: '0.2' },
          '100%': { transform: 'translate(0, 0)',       opacity: '0' },
        },
      },
      boxShadow: {
        'brutal-xs': '2px 2px 0 0 rgb(var(--shadow))',
        'brutal-sm': '3px 3px 0 0 rgb(var(--shadow))',
        'brutal':    '4px 4px 0 0 rgb(var(--shadow))',
        'brutal-md': '6px 6px 0 0 rgb(var(--shadow))',
        'brutal-lg': '8px 8px 0 0 rgb(var(--shadow))',
      },
    },
    colors: {
      white: '#FFF',
      black: '#000',
      transparent: 'transparent',
      current: 'currentColor',
      'blue-dark': '#023047',
      'blue-light': '#8ECAE6',
      bg:             'rgb(var(--bg) / <alpha-value>)',
      surface:        'rgb(var(--surface) / <alpha-value>)',
      ink:            'rgb(var(--ink) / <alpha-value>)',
      muted:          'rgb(var(--muted) / <alpha-value>)',
      border:         'rgb(var(--border) / <alpha-value>)',
      'border-strong':'rgb(var(--border-strong) / <alpha-value>)',
      overlay:        'rgb(var(--overlay) / <alpha-value>)',
      grey: '#767676',
      'grey-light': '#bbb',
      yellow: '#fbe284',
      'yellow-light': '#f9f6e5',
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
      mono: ['var(--font-jetbrains-mono)', ...fontFamily.mono],
    },
    borderRadius: {
      none: '0',
      sm: '6px',
      DEFAULT: '8px',
      md: '10px',
      lg: '14px',
      xl: '20px',
      '2xl': '24px',
      full: '9999px',
    },
  },
  plugins: [],
};
export default config;
