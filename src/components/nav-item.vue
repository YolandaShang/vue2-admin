<template>
  <div
    class="nav-item"
    :class="{ 'nav-item__active': isActive }"
    @click="onClickNavItem"
  >
    <component :is="icon" />
    {{ label }}
  </div>
</template>

<script>
import { Home, User } from "@icon-park/vue";
export default {
  name: "NavItem",
  components: {
    Home,
    User, //当前组件内使用的组件必须先在这里注册
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    icon: String,
    name: {
      type: String,
      default: "Home",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.matched.some((item) => item.name === this.name);
    },
  },
  methods: {
    onClickNavItem() {
      this.$router.push({ name: this.name });
    },
  },
};
</script>

<style>
.nav-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.nav-item__active {
  border-bottom: 3px solid #42b983;
}
</style>
