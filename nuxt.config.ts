// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: '2024-08-12',
	ssr: false,
	modules: [
		'@nuxtjs/eslint-module',
		'@nuxt/icon',
		'@nuxtjs/tailwindcss',
	],
});