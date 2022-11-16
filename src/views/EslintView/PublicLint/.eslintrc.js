// publicLintView.vue
module.exports = {
	root: false,
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:prettier/recommended',
		'prettier',
	],
	rules: {
		'vue/no-multiple-template-root': 'warn',
	},
};
