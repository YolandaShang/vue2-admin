import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/index.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    meta: { label: "主页", icon: "Home" },
    component: HomeView,
  },
  {
    path: "/user/:name",
    name: "User",
    meta: { label: "用户", icon: "user" },
    component: () =>
      import(/* webpackChunkName: "name" */ "../views/user/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
