import type { Config } from "tailwindcss";
import typographyPlugin from '@tailwindcss/typography';

const config: Config = {
    darkMode: ["class"],
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
  			'accent-1': '#F9C52C',
  			'accent-2': '#FC6F3A',
  			'accent-3': '#FA3F6A',
  			'accent-4': '#D42CCA',
  			'accent-blue-light': '#8ECAE6',
  			'accent-blue-deep': '#219EBC',
  			'accent-pink-soft': '#FFB6C1',
  			'accent-pink-vivid': '#FF69B4',
  			'glass-bg': 'rgba(30, 30, 50, 0.55)',
  			'glass-border': 'rgba(255, 255, 255, 0.1)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			heading: [
  				'var(--font-poppins)',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    typographyPlugin,
      require("tailwindcss-animate")
],
};
export default config;
