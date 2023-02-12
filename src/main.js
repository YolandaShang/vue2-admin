import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import axios from "axios";
import VueAxios from "vue-axios";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router, //$router 一个Router的实例对象   $route
  store,
  render: (h) => h(App),
}).$mount("#app");
