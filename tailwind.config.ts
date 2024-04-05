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
					'100%': { transform: 'translateX(0)' },
				  },
				  slideOutToRight: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' },
				  },
			},
			animation: {
				slideInFromRight: 'slideInFromRight 0.5s',
				slideOutToRight: 'slideOutToRight 0.5s',
			  },
		}
	},
	plugins: []
};
export default config;
