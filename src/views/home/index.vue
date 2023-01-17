<template>
  <div class="home">
    <card-item
      v-for="{ path, name, background } in cardList"
      :key="path"
      :name="name"
      :background="background"
      :path="path"
    ></card-item>
  </div>
</template>
<script>
import CardItem from "../../components/card.vue";
import { BackgroundMap } from "./config";
export default {
  name: "home-view",
  components: {
    CardItem,
  },
  data() {
    return {};
  },
  computed: {
    cardList() {
      return this.$router.getRoutes().map((item) => ({
        name: item.meta.label,
        path: item.path,
        background: BackgroundMap[item.name],
      }));
    },
  },
  methods: {},
};
</script>
<style scoped>
.home {
  padding: 60px 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 80px;
  flex: 1;
}
</style>
