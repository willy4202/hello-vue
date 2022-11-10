// 전역으로 적용되는 Eslint
module.exports = {
	root: true,
	// eslint-config-prettier에서 prettier와 충돌되는 스타일 옵션을 꺼버린다
	// extends로 prettier 사용
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:prettier/recommended',
		'prettier',
	],

	plugins: [],
	// 사용자 편의 규칙 추가
	rules: {
		// SFC가 두 개 이상의 템플릿을 반환하는 것을 허용.
		'vue/no-multiple-template-root': 'off',
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
	// build, dist, public에는 eslint를 적용하지 않음
	ignorePatterns: ['build', 'dist', 'public'],
};
