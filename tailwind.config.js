/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '475px',
			xsMax: { max: '475px' },
			smMax: { max: '640px' },
			mdMax: { max: '768px' },
			lgMax: { max: '1024px' },
			xlMax: { max: '1280px' },
			'2xlMax': { max: '1536px' },
			...defaultTheme.screens
		},
		fontFamily: {
			Inter: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				background: 'var(--background)',
				glass: {
					black: 'var(--glass-black)'
				},
				primary: {
					20: 'var(--primary-20)',
					40: 'var(--primary-40)',
					60: 'var(--primary-60)',
					80: 'var(--primary-80)',
					100: 'var(--primary-100)'
				},
				etc: {
					1: 'var(--etc-1)',
					2: 'var(--etc-2)',
					3: 'var(--etc-3)'
				}
			},
			cursor: {
				mynormal: 'var(--mycursor-1), auto'
			}
		}
	},
	plugins: []
};
