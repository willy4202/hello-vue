import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

import 'bootstrap-vue-3';
import JQuery from 'jquery';
window.$ = JQuery;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-vue-3';
import 'hooper/dist/hooper.css';
import 'vue3-carousel';
import 'vue-scroll-picker/lib/style.css';
import '@splidejs/splide/css/core';

import VueCountdown from '@chenfengyuan/vue-countdown';
import VueGtag from 'vue-gtag-next';
import VueUploadComponent from 'vue-upload-component';
import YouTube from 'vue3-youtube';
import VueScrollPicker from 'vue3-scroll-picker';
import VueCookies from 'vue-cookies';
import i18n from './locales';
import axios from 'axios';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App);

axios.defaults.withCredentials = true;
app.config.globalProperties.$axios = axios;

app
	.component('file-upload', VueUploadComponent)
	.component(VueCountdown.name, VueCountdown)
	.component('YouTube', YouTube)
	.use(VueScrollPicker)
	.use(VueGtag, {
		id: 'G-7JTH5P09XK',
		router,
	})
	.use(pinia)
	.use(router)
	.use(i18n)
	.use(VueCookies, { expire: '7d' })
	.use(BootstrapVue3)
	.use(VueSplide)

	.provide('today', new Date().toISOString().split('T')[0])
	.mount('#app');
