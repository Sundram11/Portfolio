/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '480px', 
				'sm': '640px',   
				'md': '768px',  
			},
		},
	},
	plugins: [],
}
