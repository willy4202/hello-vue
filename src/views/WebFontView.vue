<template>
	<div>
		<LangSelector />
		<div class="body">
			<main :lang="$i18n.locale">
				<article>
					<h2>web fonts</h2>
					<p>
						{{ $t('hello') }}
					</p>
					<p>
						{{ $t('title') }}
					</p>
				</article>
			</main>
			<main>
				<article>
					<h2>safe fonts</h2>
					<p>
						{{ $t('hello') }}
					</p>
					<p>
						{{ $t('title') }}
					</p>
				</article>
			</main>
		</div>
	</div>
</template>
<script>
import LangSelector from '@/components/LangSelector.vue';

export default {
	name: 'font',
	components: { LangSelector },
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/font.scss';

.body {
	display: grid;
	grid-template-columns: 1fr 1fr;

	article {
		text-align: center;
	}

	form {
		display: flex;
		justify-content: space-around;
	}
}
</style>
