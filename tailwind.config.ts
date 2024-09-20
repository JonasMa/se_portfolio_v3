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
      'blue-dark': '#023047',
      'blue-light': '#8ECAE6',
      white: '#FFF',
      black: '#000',
      grey: '#767676',
      'grey-light': '#bbb',
      yellow: '#fbe284',
      'yellow-light': '#f9f6e5',
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
      mono: ['var(--font-jetbrains-mono)', ...fontFamily.mono],
    },
  },
  plugins: [],
};
export default config;
