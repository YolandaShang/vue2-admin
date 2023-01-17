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
      import(/* webpackChunkName: "user" */ "../views/user/index.vue"),
  },
  {
    path: "/data",
    name: "Data",
    meta: { label: "数据", icon: "data-display" },
    component: () =>
      import(/* webpackChunkName: "data" */ "../views/data/index.vue"),
  },
  {
    path: "/order",
    name: "Order",
    meta: { label: "订单", icon: "order" },
    component: () =>
      import(/* webpackChunkName: "order" */ "../views/order/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
