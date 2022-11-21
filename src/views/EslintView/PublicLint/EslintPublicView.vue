<template>
	<main>
		<h1>{{ title }}</h1>
		<p>
			root == <strong>{{ root }}</strong>
		</p>
		<h2>rules</h2>
		<!-- 현재 Global, publicLint의 linter 영향을 받음.  -->
		<p v-for="rule in applyRules" :key="rule.ruleName">
			{{ rule.ruleName }} : {{ rule.isActive }}
		</p>
	</main>
</template>
<script>
export default {
	data() {
		return {
			title: 'eslint Public',
			root: '`/`',
			applyRules: [
				{
					ruleName: 'no-multiple-template',
					isActive: 'off',
				},
				{
					ruleName: 'singleQuote',
					isActive: true,
				},
			],
			person: { name: 'young', age: 25 },
		};
	},
};
</script>
<style lang="scss">
* {
	text-align: center;
}
</style>
