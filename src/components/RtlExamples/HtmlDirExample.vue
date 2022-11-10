<template>
	<div>
		<header>
			<h2>Welcome! <slot></slot></h2>
			<h4>current dir => {{ currentDir }}</h4>
		</header>
		<article>
			<button class="fixed-btn" @click="changeDir">
				html dir = {{ currentDir }}
			</button>
			<section>
				<h4>bullet List</h4>
				<ul :dir="currentDir">
					<li v-for="bullet in List" :key="bullet">{{ bullet }}</li>
				</ul>
			</section>
			<section>
				<h4>Number List</h4>
				<ol :dir="currentDir">
					<li v-for="number in List" :key="number">{{ number }}</li>
				</ol>
			</section>
			<section>
				<h4>Div Box</h4>
				<div :dir="currentDir" class="div-wrapper">
					<div>left</div>
					<div>right</div>
				</div>
			</section>
			<section>
				<h4>Image Text Box</h4>
				<div :dir="currentDir" class="div-wrapper">
					<img :src="himediLogo" alt="image-example" />
					<div>himedi</div>
				</div>
			</section>
			<section>
				<h4>DateTime Box</h4>
				<div class="button-wrapper" :dir="currentDir">
					<span>DateTime :</span>
					<span>{{ $d(new Date(), 'dateTime') }}</span>
				</div>
			</section>
			<section>
				<h4>Button Box</h4>
				<div class="button-wrapper" :dir="currentDir">
					<button>button1</button>
					<button>button2</button>
				</div>
			</section>
			<section>
				<h4>number Box</h4>
				<div class="row-div-wrapper" :dir="currentDir">
					<div v-for="num in 5" :key="num">{{ num }}</div>
				</div>
			</section>
			<section>
				<h4>Input Box</h4>
				<div class="input-wrapper" :dir="currentDir">
					<input
						v-for="e in 3"
						:key="e"
						:placeholder="e"
						class="input-element"
					/>
				</div>
			</section>
			<section class="table-wrapper">
				<table :dir="currentDir">
					<thead>
						<tr>
							<th>header1</th>
							<th>header2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>2</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section class="textarea-wrapper">
				<textarea :dir="currentDir" rows="5" cols="33">
        This statement is used for test This statement is used for test This statement is used for test
      </textarea
				>
			</section>
		</article>
	</div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
	setup() {
		const currentDir = ref('ltr');
		console.log(currentDir);
		const changeDir = () => {
			currentDir.value === 'ltr'
				? (currentDir.value = 'rtl')
				: (currentDir.value = 'ltr');
		};

		const List = reactive(['안녕하세요', '리스트를', '이용한 ', 'RTl입니다.']);
		const himediLogo = require('@/assets/images/himediLogo.png');

		return {
			List,
			himediLogo,
			currentDir,
			changeDir,
		};
	},
};
</script>

<style lang="scss" scoped>
.fixed-btn {
	top: 30px;
	right: 50px;
	position: fixed;
}

.div-wrapper {
	display: flex;
	justify-content: space-evenly;
	margin: 20px 0;
}

.div-wrapper {
	align-items: center;
	img {
		width: 200px;
	}
}
.button-wrapper {
	display: flex;
	justify-content: space-evenly;
}

.row-div-wrapper {
	display: flex;
	justify-content: space-evenly;
	& > * {
		border: 1px solid $signature-color;
		padding: 1rem;
	}
}

.input-wrapper {
	display: flex;
	justify-content: space-evenly;

	.input-element {
		width: 20%;
	}
}

.table-wrapper {
	display: flex;
	justify-content: center;
}

.textarea-wrapper {
	display: flex;
	justify-content: center;
}
</style>
