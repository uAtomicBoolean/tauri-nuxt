// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	ssr: false,
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxtjs/tailwindcss',
	],
	devServer: { host: process.env.TAURI_DEV_HOST || 'localhost' },
	vite: {
		// Better support for Tauri CLI output
		clearScreen: false,
		// Enable environment variables
		// Additional environment variables can be found at
		// https://v2.tauri.app/reference/environment-variables/
		envPrefix: ['VITE_', 'TAURI_'],
		server: {
			// Tauri requires a consistent port
			strictPort: true,
		},
	},
});