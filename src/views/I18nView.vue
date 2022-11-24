<template>
	<b-container class="grid text-center">
		<div>
			<lang-selector />
			<h1>{{ $t('title') }}</h1>
			<p>{{ $t('hello') }}</p>
		</div>

		<b-row class="bg-info">
			<b-col>1 of 3</b-col>
			<b-col>2 of 3</b-col>
			<b-col>3 of 3</b-col>
		</b-row>

		<div class="row">
			<div class="col">Column</div>
			<div class="col">Column</div>
			<div class="col">Column</div>
		</div>
		<form>
			<div class="form-check form-check-inline">
				<input
					class="form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="inlineRadio1"
					value="option1"
				/>
				<label class="form-check-label label-text" for="inlineRadio1">1</label>
			</div>
			<div class="form-check form-check-inline">
				<input
					class="form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="inlineRadio2"
					value="option2"
				/>
				<label class="form-check-label" for="inlineRadio2">2</label>
			</div>
			<div class="form-check form-check-inline">
				<input
					class="form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="inlineRadio3"
					value="option3"
					disabled
				/>
				<label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
			</div>
		</form>
	</b-container>
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

<style scoped lang="scss">
div {
	text-align: center;
}
form {
	display: flex;
	justify-content: center;
	.form-check {
		display: flex;
		flex-direction: column;
		position: relative;
		.label-text {
			position: absolute;
			bottom: 0;
			left: 0;
			transform: translateX(50%);
			color: red;
		}
	}
}
</style>
