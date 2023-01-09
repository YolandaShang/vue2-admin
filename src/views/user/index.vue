<template>
  <div>
    用户信息{{ this.$route.params.name }}
    <button @click="goBackHome">返回主页</button>
    <router-link to="/">Home</router-link>
  </div>
</template>
<script>
export default {
  name: "user-view",
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    goBackHome() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    console.log(this.$route, 1, this.$router);
  },
};
</script>
