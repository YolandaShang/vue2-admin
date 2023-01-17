<template>
  <!-- 在模版中字符串只能用单引号 -->
  <div
    class="card"
    @click="onClick"
    :style="{ 'background-image': `url(${background})` }"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "card-item",
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: "/",
    },
    background: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.card {
  background: linen;
  min-width: 100px;
  min-height: 80px;
  border: 1px solid #bebebe;
}
</style>
