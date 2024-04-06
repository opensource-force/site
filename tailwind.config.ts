import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			keyframes: {
				slideInFromRight: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				slideOutToRight: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				opacityDelay: {
					'0%': { opacity: '0' },
					'75%': { opacity: '0.2' },
					'100%': { opacity: '0.3' }
				}
			},
			animation: {
				slideInFromRight: 'slideInFromRight ease-out 0.5s',
				slideOutToRight: 'slideOutToRight 0.5s',
				opacityDelay: 'opacityDelay ease-in 0.8s'
			}
		}
	},
	plugins: []
};
export default config;
