import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			'near-black': '#06080F',
  			midnight: '#0C1120',
  			steel: '#1E2A45',
  			'slate-muted': '#5A6880',
  			mist: '#9BAABF',
  			gold: '#D4A853',
  			'gold-hover': '#E8BC6A',
  			'gold-dim': '#8A6A2E',
  			'tech-cyan': '#38BDF8',
  			'deploy-green': '#22C55E',
  			amber: '#F59E0B',
  			profitibull: '#E93D3D',
  			scrapable: '#0066CC',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'Lora',
  				'Georgia',
  				'serif'
  			],
  			body: [
  				'Poppins',
  				'Arial',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'monospace'
  			],
  			heading: [
  				'Lora',
  				'Georgia',
  				'serif'
  			],
  			'body-new': [
  				'Poppins',
  				'Arial',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'display-xl': [
  				'72px',
  				{
  					lineHeight: '1.05',
  					letterSpacing: '-0.03em',
  					fontWeight: '800'
  				}
  			],
  			h1: [
  				'52px',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.025em',
  					fontWeight: '700'
  				}
  			],
  			h2: [
  				'38px',
  				{
  					lineHeight: '1.15',
  					letterSpacing: '-0.02em',
  					fontWeight: '700'
  				}
  			],
  			h3: [
  				'26px',
  				{
  					lineHeight: '1.25',
  					letterSpacing: '-0.015em',
  					fontWeight: '600'
  				}
  			],
  			h4: [
  				'20px',
  				{
  					lineHeight: '1.3',
  					letterSpacing: '-0.01em',
  					fontWeight: '600'
  				}
  			],
  			'body-lg': [
  				'18px',
  				{
  					lineHeight: '1.7',
  					fontWeight: '400'
  				}
  			],
  			body: [
  				'16px',
  				{
  					lineHeight: '1.7',
  					fontWeight: '400'
  				}
  			],
  			label: [
  				'12px',
  				{
  					lineHeight: '1.5',
  					letterSpacing: '0.1em',
  					fontWeight: '600'
  				}
  			],
  			'mono-sm': [
  				'13px',
  				{
  					lineHeight: '1.5',
  					fontWeight: '500'
  				}
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			card: '18px',
  			inner: '12px',
  			btn: '10px',
  			input: '10px',
  			chip: '9999px',
  			hero: '24px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [animate],
};
