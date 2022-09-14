import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap-vue-3";
import JQuery from "jquery";
window.$ = JQuery;

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-vue-3";
import "hooper/dist/hooper.css";
import "vue3-carousel";
import "vue-scroll-picker/lib/style.css";

import VueCountdown from "@chenfengyuan/vue-countdown";
import VueGtag from "vue-gtag-next";
import VueUploadComponent from "vue-upload-component";
import YouTube from "vue3-youtube";
import VueScrollPicker from "vue3-scroll-picker";
import VueCookies from "vue-cookies";
import i18n from "./locales";

const app = createApp(App);

app
  .component("file-upload", VueUploadComponent)
  .component(VueCountdown.name, VueCountdown)
  .component("YouTube", YouTube)
  .use(VueScrollPicker)
  .use(VueGtag, {
    id: "UA-159915865-1",
    router,
  })
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueCookies, { expire: "7d" })
  .mount("#app");
