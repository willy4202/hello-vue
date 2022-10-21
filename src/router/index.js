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

  {
    path: "/router/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "login" */ "../views/RouterView/LoginView.vue"
      ),
  },
  {
    path: "/router/private",
    name: "private",
    component: () =>
      import(
        /* webpackChunkName: "private" */ "../views/RouterView/PrivateView.vue"
      ),
  },
  {
    path: "/router/public",
    name: "public",
    component: () =>
      import(
        /* webpackChunkName: "public" */ "../views/RouterView/PublicView.vue"
      ),
  },
  {
    path: "/life",
    name: "life",
    component: () =>
      import(/* webpackChunkName: "life" */ "../views/LifecycleView.vue"),
    beforeEnter: () => {
      console.log("default beforeEnter");
    },
  },
  {
    path: "/life/target",
    name: "target",
    component: () =>
      import(
        /* webpackChunkName: "target" */ "../views/LifeView/TargetView.vue"
      ),
    beforeEnter: () => {
      console.log("target beforeEnter");
    },
  },
  {
    path: "/composition",
    name: "composition",
    component: () =>
      import(/* webpackChunkName: "Compo" */ "../views/CompositionView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const isToken = !!sessionStorage.getItem("token");
  if (!isToken && to.name == "private") {
    return { name: "login", replace: true };
  }
  if (isToken && to.name == "login") {
    return { name: "router" };
  }
});

export default router;
