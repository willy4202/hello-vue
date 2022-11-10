<template>
	<main>
		<h1>{{ title }}</h1>
		<p>
			root == <strong>{{ root }}</strong>
		</p>

		<h2>rules</h2>
		<p v-for="rule in applyRules" :key="rule.ruleName">
			{{ rule.ruleName }} : {{ rule.isActive }}
		</p>
	</main>
</template>
<script>
export default {
	data() {
		return {
			title: "eslint Private",
			root: "PrivateLint dir",
			applyRules: [
				{
					ruleName: "no-multiple-template",
					isActive: "error",
				},
				{
					ruleName: "singleQuote",
					isActive: false,
				},
			],
			person: { name: "young", age: 25 },
		};
	},
};
</script>
<style lang="scss">
main {
	text-align: center;
}
</style>
