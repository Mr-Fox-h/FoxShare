/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			Inter: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				background: 'var(--background)',
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
