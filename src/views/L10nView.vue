<template>
	<lang-selector />
	<main>
		<div class="wrapper">
			<h4>복수화</h4>
			<p>{{ $tc('banana', 0) }}</p>
			<p>{{ $tc('banana', 1) }}</p>
			<p>{{ $tc('banana', 2) }}</p>
			<p>{{ $tc('banana', 3) }}</p>
			<p>{{ $tc('banana', 124) }}</p>
			<p>{{ $tc('banana', 102) }}</p>
			<h4>통화</h4>
			{{ $n(3000, 'currency', { useGrouping: true }) }}
		</div>
	</main>
</template>

<script>
import LangSelector from '@/components/LangSelector.vue';
export default {
	components: { LangSelector },
};
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.wrapper {
	text-align: center;
	margin: 30px;
}
</style>
