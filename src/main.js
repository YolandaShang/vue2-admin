import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router, //$router 一个Router的实例对象   $route
  store,
  render: (h) => h(App),
}).$mount("#app");
