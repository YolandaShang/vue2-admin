<template>
  <div id="app">
    <div class="header">
      <NavItem
        v-for="item in navList"
        :key="item.label"
        :label="item.label"
        :icon="item.icon"
        :name="item.name"
      />
    </div>
    <div class="body">
      <!-- 标识当前路由匹配到的组件在此渲染 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { routes } from "./router/index";
import NavItem from "./components/nav-item.vue";
export default {
  name: "App",
  components: {
    NavItem,
  },
  data() {
    return {};
  },
  computed: {
    navList() {
      return routes.map(({ name, meta }) => ({
        name,
        ...meta,
      }));
    },
  },
};
</script>
<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh; //v,view h,height 100%视图高度
  display: flex;
  flex-direction: column;
}
#app > .header {
  flex-basis: 80px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  border-bottom: 1px solid #bebebe;
}
#app > .body {
  flex: 1;
}
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
