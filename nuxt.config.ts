// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	ssr: false,
	compatibilityDate: '2024-07-07',
	telemetry: false,

	modules: [
		'@nuxtjs/eslint-module',
		'@nuxt/fonts',
		'@nuxtjs/tailwindcss',
		'@nuxt/icon',
	],

	devServer: { host: '0.0.0.0' },

	vite: {
		clearScreen: false,
		envPrefix: ['VITE_', 'TAURI_'],
		server: {
			strictPort: true,
			hmr: {
				protocol: 'ws',
				host: '0.0.0.0',
				port: 5183,
			},
		},
	},
});