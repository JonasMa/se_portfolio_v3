import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2-auto': 'repeat(2, auto)',
      },
      animation: {
        'typewriter-6': "typewriter 2s steps(6) forwards",
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
      yellow: '#FFB703',
      'yellow-light': '#FFB7031A',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Mono', 'serif'],
    },
  },
  plugins: [],
};
export default config;
