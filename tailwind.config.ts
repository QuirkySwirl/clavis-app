import type { Config } from "tailwindcss";
import typographyPlugin from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Adjusted to cover all files in src
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep-dark': '#0A0A12',
        'bg-panel-dark': '#161624',
        'text-primary': '#EAEAF2',
        'text-secondary': '#A0A0B5',
        'text-tertiary': '#70708A',
        'accent-1': '#F9C52C', // Bright Yellow/Gold
        'accent-2': '#FC6F3A', // Vibrant Orange
        'accent-3': '#FA3F6A', // Deep Pink / Magenta
        'accent-4': '#D42CCA', // Purpleish Pink
        // New blue and pink accents
        'accent-blue-light': '#8ECAE6', // Light Blue
        'accent-blue-deep': '#219EBC',  // Deep Blue
        'accent-pink-soft': '#FFB6C1',  // Soft Pink
        'accent-pink-vivid': '#FF69B4', // Vivid Pink
        'glass-bg': 'rgba(30, 30, 50, 0.55)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
        heading: ['var(--font-poppins)', 'sans-serif'], 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // For glassmorphism box shadow, it's better to apply as a utility or custom CSS
      // boxShadow: {
      //   'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)', // Example, can be customized
      // }
    },
  },
  plugins: [
    typographyPlugin,
  ],
};
export default config;
