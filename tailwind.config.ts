import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'glitch-shift': "glitch-shift 1100ms steps(8) forwards",
      },
      keyframes: {
        'glitch-shift': {
          '0%':   { transform: 'translate(10px, -3px)', opacity: '1' },
          '15%':  { transform: 'translate(-8px, 2px)',  opacity: '1' },
          '30%':  { transform: 'translate(7px, 3px)',   opacity: '1' },
          '45%':  { transform: 'translate(-5px, -2px)', opacity: '1' },
          '60%':  { transform: 'translate(4px, 1px)',   opacity: '0.9' },
          '75%':  { transform: 'translate(-2px, 0)',    opacity: '0.7' },
          '90%':  { transform: 'translate(1px, 0)',     opacity: '0.4' },
          '100%': { transform: 'translate(0, 0)',       opacity: '0' },
        },
      }
    },
    colors: {
      white: '#FFF',
      black: '#000',
      'blue-dark': '#023047',
      'blue-light': '#8ECAE6',
      bg: '#fafaf7',
      surface: '#f3f1ea',
      ink: '#0a0a0a',
      muted: '#6b6b6b',
      border: '#e5e3dc',
      'border-strong': '#d1cec5',
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
