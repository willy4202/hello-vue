<template>
	<div>
		<h2>now {{ currentEnv }} Env</h2>
		<h2>Fetch</h2>
		<h3>without Proxy</h3>
		<article>
			<section v-for="method in httpMethods" :key="method">
				<h4>{{ method }} Data</h4>
				<button @click="requestWithoutProxy(method)">{{ method }}</button>
			</section>
		</article>
		<h3>with Proxy</h3>
		<article>
			<section v-for="method in httpMethods" :key="method">
				<h4>{{ method }}Data</h4>
				<button @click="requestWithProxy(method)">{{ method }}</button>
			</section>
		</article>
	</div>
</template>

<script>
const params = '/test/route?query=1&param=2&form=3';
import { fetchInstance, fetchProxyInstance } from '@/utils/apiController';

export default {
	name: 'FetchView',
	data() {
		return {
			currentEnv: process.env.NODE_ENV === 'development' ? 'dev' : 'production',
			httpMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
		};
	},

	methods: {
		requestWithoutProxy(method) {
			fetchInstance(params, method);
		},

		requestWithProxy(method) {
			fetchProxyInstance(params, method);
		},
	},
};
</script>

<style scoped>
h2,
h3 {
	text-align: center;
	margin: 30px;
}

article {
	display: flex;
	justify-content: space-evenly;
}
</style>
