<template>
	<div>
		<lang-selector />
		<h1>{{ $t('title') }}</h1>
		<p>{{ $t('hello') }}</p>
	</div>
</template>

<script>
import LangSelector from '@/components/LangSelector.vue';
export default {
	components: { LangSelector },
	name: 'I18n',
	created() {
		console.log(process.env.VUE_APP_PHASE);
	},
};
</script>

<style scoped>
div {
	text-align: center;
}
</style>
