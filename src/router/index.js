import { createRouter, createWebHistory } from "vue-router";
import I18nView from "../views/I18nView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: I18nView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
