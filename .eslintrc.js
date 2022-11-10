module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'prettier',
		'plugin:prettier/recommended',
	],
	// 코드 정리 플러그인 추가
	plugins: ['prettier'],
	// 사용자 편의 규칙 추가
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
};
