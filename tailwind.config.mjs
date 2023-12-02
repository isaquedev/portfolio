/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				appear: {
					'0%': { opacity: 0, transform: 'translateY(-1rem)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
			animation: {
				appear: 'appear 0.25s ease-out',
			}
		},
	},
	plugins: [],
}
