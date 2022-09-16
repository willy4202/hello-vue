import { createRouter, createWebHistory } from "vue-router";
import I18nView from "../views/I18nView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: I18nView,
  },
  {
    path: "/l10n",
    name: "l10n",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/L10nView.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TodoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
