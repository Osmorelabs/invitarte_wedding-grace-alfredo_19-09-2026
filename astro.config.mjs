// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://osmorelabs.github.io',
	base: '/invitarte_wedding-grace-alfredo_19-09-2026/',
	output: 'static',
	integrations: [vue()],
	vite: {
		plugins: [tailwindcss()],
	},
});
