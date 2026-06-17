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
        'typewriter-5': "typewriter 2s steps(5) forwards",
      }, 
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
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
