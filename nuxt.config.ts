// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	compatibilityDate: '2024-07-07',

	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxtjs/tailwindcss',
		'@nuxt/icon',
	],
});