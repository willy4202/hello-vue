<!-- eslint-disable no-unused-vars -->
<template>
	<article>
		<!-- Option -->
		<main>
			<h1>option</h1>
			<p>{{ count }}</p>

			<button @click="increase">add count</button>
			<p>{{ message }}</p>
			<p>{{ reversedMessage }}</p>

			<!-- Mixins -->
			<h3>{{ reuseTitle }}</h3>
			<button @click="reuseMethod">{{ message }}</button>
		</main>

		<!-- setup -->
		<main>
			<h1>setup</h1>
			<p>{{ setupCount }}</p>

			<button @click="addCount">add count</button>
			<p>{{ setupMessage }}</p>
			<p>{{ setupReverse }}</p>

			<!-- Composition -->
			<h3>{{ compoTitle }}</h3>
			<button @click="compMethod">{{ compData }}</button>
		</main>
	</article>
	<section>
		<h1>Composables</h1>
		<p>mouse Tracker</p>
		<p>x : {{ x }}</p>
		<p>y : {{ y }}</p>
	</section>
</template>

<script>
import mixins from '@/mixins/mixins';
export default {
	mixins: [mixins],
	data() {
		return {
			count: 0,
			message: 'this is option!',
		};
	},
	computed: {
		reversedMessage() {
			return this.message.split('').reverse().join('');
		},
	},
	methods: {
		increase() {
			this.count++;
		},
	},
	watch: {
		// eslint-disable-next-line no-unused-vars
		count(newValue, oldValue) {
			console.log('새로운 option 값: ' + newValue);
		},
	},
};
</script>

<script setup>
import { useMouse } from '@/plugins/mouseTracker';
import useComp from '@/plugins/compositions';
const { ref } = require('@vue/reactivity');
const { computed, watch } = require('@vue/runtime-core');

let setupCount = ref(0);

const addCount = () => {
	setupCount.value += 1;
};
// eslint-disable-next-line no-unused-vars
watch(setupCount, (newValue, oldValue) => {
	console.log('새로운 setup 값: ' + newValue);
});

let setupMessage = ref('this is setup!');
const setupReverse = computed(() => {
	return setupMessage.value.split('').reverse().join('');
});

const { x, y } = useMouse();

const { compoTitle, compData, compMethod } = useComp();
</script>

<style lang="scss" scoped>
article {
	display: grid;
	grid-template-columns: 1fr 1fr;
	text-align: center;
}

section {
	text-align: center;
}
main {
	margin: 50px;
}

p {
	margin: 10px;
}
</style>
