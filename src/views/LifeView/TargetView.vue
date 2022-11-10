<template>
	<article>
		<h2>Target</h2>
		<div class="wrapper">
			{{ count }}
			<button @click="count++">+</button>
		</div>
	</article>
</template>
<script>
import {
	onBeforeMount,
	onBeforeUnmount,
	onBeforeUpdate,
	onMounted,
	onUnmounted,
	onUpdated,
	ref,
} from '@vue/runtime-core';
const component = 'Target ';
const setup = ' setup API';

export default {
	name: 'target',
	components: {},
	setup() {
		const count = ref(0);
		console.log('[Target]');
		console.log(component + setup);

		onBeforeMount(() => {
			console.log(component + 'onBeforeMount' + setup);
		});

		onMounted(() => {
			console.log(component + 'onMounted' + setup);
		});

		onBeforeUpdate(() => {
			console.log(component + 'onBeforeUpdate' + setup);
		});

		onUpdated(() => {
			console.log(component + 'onUpdated' + setup);
		});

		onBeforeUnmount(() => {
			console.log(component + 'onBeforeUnmount' + setup);
		});

		onUnmounted(() => {
			console.log(component + 'onUnmounted' + setup);
		});

		return { setup, count };
	},
	beforeCreate() {
		console.log(component + 'beforeCreated');
	},
	created() {
		console.log(component + 'created');
	},
	beforeMount() {
		console.log(component + 'beforeMount');
	},
	mounted() {
		console.log(component + 'mounted');
	},
	beforeUpdate() {
		console.log(component + 'beforeUpdate');
	},
	updated() {
		console.log(component + 'updated');
	},
	beforeUnmount() {
		console.log(component + 'beforeUnmount');
	},
	unmounted() {
		console.log(component + 'unmounted');
	},
	/**  router Lifecycle*/
	beforeRouteLeave() {
		console.log(component + 'beforeRouteLeave');
	},

	beforeRouteEnter() {
		console.log(component + 'beforeRouteEnter');
	},

	beforeRouteUpdate() {
		console.log(component + 'beforeRouteUpdate');
	},
};
</script>
<style lang="scss" scoped>
article {
	text-align: center;
}

.wrapper {
	margin: 20px 0;
	button {
		width: auto;
		border: none;
	}
}
</style>
