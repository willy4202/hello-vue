import { defineStore } from 'pinia';

export const useUserState = defineStore('user', {
	state: () => ({
		isLogin: !!sessionStorage.getItem('token'),
	}),
	actions: {
		setLogin() {
			this.isLogin = true;
		},
		setLogout() {
			this.isLogin = false;
		},
	},
});
