// 단일 View 파일에만 적용되는 ESlint
// 공용 lint와는 다르게
// template 제한 , singleQuote 허용하지 않음으로 설정

module.exports = {
	root: true,
	extends: ["eslint:recommended", "plugin:vue/essential", "prettier"],
	// plugin으로 prettier 사용
	plugins: ["prettier"],
	rules: {
		// SFC가 두 개 이상의 템플릿을 반환하는 것을 제한.
		"vue/no-multiple-template-root": "error",
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				semi: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: "all",
				printWidth: 80,
				bracketSpacing: true,
			},
		],
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
};
