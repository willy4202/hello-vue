<template>
	<div>
		<todo-list-menu v-on:change-filter="onChangeFilter" class="p-0" />
		<div v-for="key in Object.keys(filtered_todos)" :key="key" class="mb-3">
			<div v-if="use_category">
				<em>{{ key }}</em>
			</div>
			<todo-list :data="filtered_todos[key]" />
		</div>
		<div class="my-2 mt-5">
			<span style="background-color: red"> &nbsp;</span>
			<strong> Pending Todo </strong>
		</div>
		<todo-list :data="pending_todos" />
	</div>
</template>

<script>
import { useFilter } from '@/compositions/filter';
import TodoList from './TodoList.vue';
import TodoListMenu from './TodoListMenu.vue';
import { ref, provide, inject, watch } from 'vue';

export default {
	name: 'TodoListMain',
	components: { TodoListMenu, TodoList },

	// eslint-disable-next-line no-unused-vars
	setup(props) {
		const {
			getPendingTodos,
			getActiveTodayTodos,
			getCompletedTodayTodos,
			getAllTodayTodos,
			getAllTodos,
		} = useFilter();

		const filter = ref(0);
		const filtered_todos = ref([]);
		const pending_todos = ref([]);
		const use_category = ref(false);
		const todos = inject('todos');

		const filters = {
			0: {
				str: 'Today Todo',
				func: getActiveTodayTodos,
				category: false,
			},
			1: {
				str: 'Today Completed',
				func: getCompletedTodayTodos,
				category: false,
			},
			2: {
				str: 'What i do Today',
				func: getAllTodayTodos,
				category: false,
			},
			3: {
				str: 'All Todo Log',
				func: getAllTodos,
				category: false,
			},
		};

		provide('filters', filters);

		/** filter모듈에서 받은  배열을 특정 키워드로 분리해주는 함수 */
		const groupBy = todos => {
			return todos.reduce((acc, cur) => {
				acc[cur['date']] = acc[cur['date']] || [];
				acc[cur['date']].push(cur);
				return acc;
			}, {});
		};

		const onChangeFilter = filter_idx => {
			filter.value = Number(filter_idx);
		};

		/** Object.keys로 받으면 []로 들어간다 */
		// console.log("filters", Object.keys(filters));

		watch(
			[() => filter.value, todos.value],
			// eslint-disable-next-line no-unused-vars
			([new_filter, new_todos], [old_filter, old_todos]) => {
				pending_todos.value = getPendingTodos(todos);
				if (typeof new_filter != 'undefined') {
					let temp_todos = filters[new_filter].func(todos);
					filtered_todos.value = groupBy(temp_todos);
					use_category.value = filters[new_filter].category;
				}
			},
			{ immediate: true },
		);

		return {
			filter,
			pending_todos,
			filtered_todos,
			use_category,
			onChangeFilter,
		};
	},
};
</script>
