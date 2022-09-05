import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import JQuery from "jquery";
window.$ = JQuery;

import "bootstrap/scss/bootstrap.scss";
import "hooper/dist/hooper.css";
import "vue-scroll-picker/lib/style.css";

import VueCountdown from "@chenfengyuan/vue-countdown";
import VueGtag from "vue-gtag";
import VueUploadComponent from "vue-upload-component";
import VueYoutube from "vue3-youtube";
import VueScrollPicker from "vue-scroll-picker";

createApp(App)
  .component("file-upload", VueUploadComponent)
  .component(VueCountdown.name, VueCountdown)
  .use(VueScrollPicker)
  .use(VueYoutube)
  .use(VueGtag, {
    id: "UA-159915865-1",
    router,
  })
  .use(store)
  .use(router)
  .mount("#app");
