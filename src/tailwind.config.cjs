module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@auth/sveltekit/client/*.js' // Add this line
	],
	theme: {
		extend: {}
	},
	plugins: []
};
