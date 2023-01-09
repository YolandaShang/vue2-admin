<template>
  <div class="home">{{ count }}<button @click="increment">增加</button></div>
</template>
<script>
export default {
  name: "home-view",
  data() {
    return {
      cardList: [],
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment", "niubi");
    },
  },
};
</script>
