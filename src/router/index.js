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
      import(/* webpackChunkName: "l10n" */ "../views/L10nView.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    component: () =>
      import(/* webpackChunkName: "todo" */ "../views/TodoView.vue"),
  },
  {
    path: "/date",
    name: "date",
    component: () =>
      import(/* webpackChunkName: "date" */ "../views/DateTimeView.vue"),
  },
  {
    path: "/rtl",
    name: "rtl",
    component: () =>
      import(/* webpackChunkName: "rtl" */ "../views/RtlView.vue"),
  },
  {
    path: "/axios",
    name: "axios",
    component: () =>
      import(/* webpackChunkName: "axios" */ "../views/AxiosView.vue"),
  },
  {
    path: "/fetch",
    name: "fetch",
    component: () =>
      import(/* webpackChunkName: "fetch" */ "../views/FetchView.vue"),
  },
  {
    path: "/router",
    name: "router",
    component: () =>
      import(/* webpackChunkName: "router" */ "../views/VueRouterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
